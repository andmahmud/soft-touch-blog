---
title: "TypeScript Best Practices for 2025"
excerpt: "Level up your TypeScript skills with these essential best practices, patterns, and tips for writing cleaner, safer code."
coverImage: "https://picsum.photos/seed/typescript-blog/1200/630"
date: "2025-02-10"
category: "TypeScript"
tags: ["TypeScript", "JavaScript", "Best Practices"]
featured: true
published: true
readingTime: 9
---

TypeScript continues to evolve with powerful features. Here are the best practices every developer should follow in 2025.

## 1. Use strict Mode

Always enable strict mode in your `tsconfig.json`:

```json
{
  "compilerOptions": {
    "strict": true,
    "noUncheckedIndexedAccess": true,
    "noImplicitReturns": true
  }
}
```

## 2. Prefer Interfaces Over Types

Use `interface` for object shapes and `type` for unions, intersections, and utility types:

```typescript
// Prefer interface for object types
interface User {
  id: string;
  name: string;
  email: string;
}

// Use type for unions and utilities
type Status = "active" | "inactive" | "pending";
type Nullable<T> = T | null;
```

## 3. Leverage Discriminated Unions

Model complex states with discriminated unions:

```typescript
type ApiState<T> =
  | { status: "idle" }
  | { status: "loading" }
  | { status: "success"; data: T }
  | { status: "error"; error: Error };

function handleState<T>(state: ApiState<T>) {
  switch (state.status) {
    case "idle":
      return "Waiting...";
    case "loading":
      return "Loading...";
    case "success":
      return `Data: ${state.data}`;
    case "error":
      return `Error: ${state.error.message}`;
  }
}
```

## 4. Use `as const` for Literal Types

Create precise literal types with `as const`:

```typescript
export const COLORS = {
  primary: "#0070f3",
  secondary: "#7928ca",
  success: "#00df81",
} as const;

type ColorKey = keyof typeof COLORS;
type ColorValue = (typeof COLORS)[ColorKey];
```

## 5. Generic Constraints

Create flexible, type-safe functions:

```typescript
interface HasId {
  id: string;
}

function getById<T extends HasId>(items: T[], id: string): T | undefined {
  return items.find((item) => item.id === id);
}
```

## 6. Utility Types

Master TypeScript's built-in utility types:

```typescript
interface Post {
  id: string;
  title: string;
  content: string;
  published: boolean;
  createdAt: Date;
}

type CreatePost = Omit<Post, "id" | "createdAt">;
type UpdatePost = Partial<CreatePost>;
type ReadonlyPost = Readonly<Post>;
type PostPreview = Pick<Post, "id" | "title">;
```

## 7. Type Predicates

Use type predicates for precise type narrowing:

```typescript
interface Cat {
  type: "cat";
  meow(): void;
}

interface Dog {
  type: "dog";
  bark(): void;
}

type Animal = Cat | Dog;

function isCat(animal: Animal): animal is Cat {
  return animal.type === "cat";
}

function handleAnimal(animal: Animal) {
  if (isCat(animal)) {
    animal.meow(); // TypeScript knows this is Cat
  }
}
```

## 8. Template Literal Types

Create dynamic type patterns:

```typescript
type EventName = `on${Capitalize<string>}`;
type CSSValue = `${number}px` | `${number}rem` | `${number}%`;

function setWidth(width: CSSValue) {
  // implementation
}

setWidth("100px"); // OK
setWidth("50%"); // OK
// setWidth("100"); // Error
```

## 9. Branded Types

Prevent type confusion with brands:

```typescript
type Brand<T, B> = T & { __brand: B };

type UserId = Brand<string, "UserId">;
type PostId = Brand<string, "PostId">;

function getUser(id: UserId) { /* ... */ }
function getPost(id: PostId) { /* ... */ }

const userId = "abc123" as UserId;
const postId = "xyz789" as PostId;

getUser(userId); // OK
// getUser(postId); // Error
```

## 10. Proper Error Handling

Type errors properly:

```typescript
class AppError extends Error {
  constructor(
    public code: string,
    message: string,
    public statusCode: number = 500
  ) {
    super(message);
    this.name = "AppError";
  }
}

type Result<T, E = AppError> =
  | { success: true; data: T }
  | { success: false; error: E };

async function fetchData<T>(url: string): Promise<Result<T>> {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      return {
        success: false,
        error: new AppError("FETCH_ERROR", "Failed to fetch", response.status),
      };
    }
    const data = await response.json();
    return { success: true, data };
  } catch (error) {
    return {
      success: false,
      error: new AppError("NETWORK_ERROR", "Network error occurred"),
    };
  }
}
```

## 11. Module Augmentation

Extend existing types safely:

```typescript
// global.d.ts
declare global {
  interface Window {
    analytics: {
      track(event: string, data?: Record<string, unknown>): void;
    };
  }
}

// Usage
window.analytics.track("page_view", { page: "/home" });
```

## 12. Performance Patterns

Optimize types for performance:

```typescript
// Avoid complex recursive types when simple ones work
// Prefer interfaces over type aliases for object types
// Use `interface` merging for declaration files

// Good - simple and fast
interface SimpleProps {
  data: string[];
  onSelect: (item: string) => void;
}

// Avoid when possible - complex conditional types
type DeepReadonly<T> = {
  readonly [P in keyof T]: T[P] extends object
    ? DeepReadonly<T[P]>
    : T[P];
};
```

## Conclusion

Following these TypeScript best practices will help you write more maintainable, type-safe code. Remember that TypeScript is a tool to help you catch errors early and document your code's intent. Use its features wisely!
