---
title: "Building REST APIs with Next.js 15"
excerpt: "Learn how to build powerful REST APIs using Next.js 15's App Router and Route Handlers."
coverImage: "https://picsum.photos/seed/nextjs-blog/1200/630"
date: "2025-01-20"
lastUpdated: "2025-02-05"
category: "Next.js"
tags: ["Next.js", "API", "REST", "Backend"]
featured: true
published: true
readingTime: 10
---

Next.js 15 introduces powerful new features for building APIs. In this guide, we'll explore how to create robust REST APIs using the App Router.

## Why Next.js for APIs?

Next.js provides a unified development experience where you can build both frontend and backend in a single project. Route Handlers make it easy to create API endpoints with full TypeScript support.

## Setting Up Route Handlers

Route Handlers are defined in the `app/api` directory. Each endpoint is a file that exports HTTP method functions:

```typescript
// app/api/posts/route.ts
import { NextResponse } from "next/server";

export async function GET() {
  const posts = await getPosts();
  return NextResponse.json(posts);
}

export async function POST(request: Request) {
  const body = await request.json();
  const post = await createPost(body);
  return NextResponse.json(post, { status: 201 });
}
```

## Dynamic Routes

For endpoints that need parameters, use dynamic route segments:

```typescript
// app/api/posts/[id]/route.ts
import { NextResponse } from "next/server";

type Params = Promise<{ id: string }>;

export async function GET(
  request: Request,
  { params }: { params: Params }
) {
  const { id } = await params;
  const post = await getPostById(id);

  if (!post) {
    return NextResponse.json(
      { error: "Post not found" },
      { status: 404 }
    );
  }

  return NextResponse.json(post);
}

export async function PUT(
  request: Request,
  { params }: { params: Params }
) {
  const { id } = await params;
  const body = await request.json();
  const updated = await updatePost(id, body);
  return NextResponse.json(updated);
}

export async function DELETE(
  request: Request,
  { params }: { params: Params }
) {
  const { id } = await params;
  await deletePost(id);
  return NextResponse.json({ message: "Post deleted" });
}
```

## Middleware and Authentication

Protect your API routes with middleware:

```typescript
// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const token = request.headers.get("authorization")?.split(" ")[1];

  if (!token) {
    return NextResponse.json(
      { error: "Unauthorized" },
      { status: 401 }
    );
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/api/protected/:path*",
};
```

## Database Integration

Connect your API to a database. Here's an example with Prisma:

```typescript
// lib/prisma.ts
import { PrismaClient } from "@prisma/client";

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

export const prisma = globalForPrisma.prisma ?? new PrismaClient();

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
```

## Error Handling

Implement consistent error handling:

```typescript
// lib/api-error.ts
export class ApiError extends Error {
  constructor(
    public statusCode: number,
    message: string
  ) {
    super(message);
    this.name = "ApiError";
  }
}

// app/api/posts/route.ts
import { ApiError } from "@/lib/api-error";

export async function GET() {
  try {
    const posts = await getPosts();
    return NextResponse.json(posts);
  } catch (error) {
    if (error instanceof ApiError) {
      return NextResponse.json(
        { error: error.message },
        { status: error.statusCode }
      );
    }
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
```

## Validation with Zod

Use Zod for request validation:

```typescript
import { z } from "zod";

const createPostSchema = z.object({
  title: z.string().min(3).max(200),
  content: z.string().min(10),
  category: z.string().min(1),
  tags: z.array(z.string()).optional(),
});

export async function POST(request: Request) {
  const body = await request.json();
  const result = createPostSchema.safeParse(body);

  if (!result.success) {
    return NextResponse.json(
      { error: result.error.issues },
      { status: 400 }
    );
  }

  const post = await createPost(result.data);
  return NextResponse.json(post, { status: 201 });
}
```

## Pagination

Implement pagination for list endpoints:

```typescript
// app/api/posts/route.ts
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const page = parseInt(searchParams.get("page") || "1");
  const limit = parseInt(searchParams.get("limit") || "10");
  const skip = (page - 1) * limit;

  const [posts, total] = await Promise.all([
    prisma.post.findMany({ skip, take: limit }),
    prisma.post.count(),
  ]);

  return NextResponse.json({
    data: posts,
    meta: {
      page,
      limit,
      total,
      totalPages: Math.ceil(total / limit),
    },
  });
}
```

## CORS Configuration

Enable CORS for your API:

```typescript
// app/api/[...route]/route.ts
const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
};

export async function OPTIONS() {
  return NextResponse.json({}, { headers: corsHeaders });
}

// Add headers to other methods
export async function GET() {
  return NextResponse.json(data, { headers: corsHeaders });
}
```

## Rate Limiting

Protect your API from abuse:

```typescript
import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

const ratelimit = new Ratelimit({
  redis: Redis.fromEnv(),
  limiter: Ratelimit.slidingWindow(10, "10 s"),
});

export async function GET(request: Request) {
  const ip = request.headers.get("x-forwarded-for") ?? "unknown";
  const { success } = await ratelimit.limit(ip);

  if (!success) {
    return NextResponse.json(
      { error: "Too Many Requests" },
      { status: 429 }
    );
  }

  // Handle request
}
```

## Conclusion

Next.js 15 provides a powerful and flexible way to build REST APIs. With features like Route Handlers, middleware support, and seamless TypeScript integration, you can build production-ready APIs alongside your frontend.

Remember to always validate input, handle errors gracefully, and implement proper security measures for production deployments.
