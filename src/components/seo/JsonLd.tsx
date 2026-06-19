interface JsonLdProps {
  type: "Person" | "BlogPosting" | "Blog" | "WebSite" | "Organization";
  data: Record<string, unknown>;
}

export default function JsonLd({ type, data }: JsonLdProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": type,
    ...data,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
