import type { Metadata } from "next";
import { siteConfig } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: `Terms and Conditions for ${siteConfig.name}'s tech blog.`,
};

export default function TermsPage() {
  return (
    <div className="container py-12 max-w-3xl">
      <h1 className="section-title">Terms &amp; Conditions</h1>
      <p className="section-subtitle">Last updated: January 1, 2025</p>
      <div className="prose-custom">
        <h2>1. Acceptance of Terms</h2>
        <p>
          By accessing and using this website, you accept and agree to be bound by these terms and
          conditions. If you do not agree with any part of these terms, you should not use our website.
        </p>

        <h2>2. Intellectual Property</h2>
        <p>
          All content on this website, including articles, code samples, images, and graphics, is
          the property of {siteConfig.name} unless otherwise stated. You may not reproduce,
          distribute, or create derivative works without explicit permission.
        </p>

        <h2>3. Content Usage</h2>
        <p>
          You may view, download, and print content for personal, non-commercial use. Code snippets
          provided in articles are free to use in your projects unless otherwise specified.
        </p>

        <h2>4. User Conduct</h2>
        <p>When using our website, you agree not to:</p>
        <ul>
          <li>Violate any applicable laws or regulations</li>
          <li>Infringe on the rights of others</li>
          <li>Submit false or misleading information</li>
          <li>Interfere with the website&apos;s operation</li>
          <li>Engage in any unauthorized commercial activities</li>
        </ul>

        <h2>5. Comments and User Content</h2>
        <p>
          We may allow comments on our blog posts. You are solely responsible for your comments.
          We reserve the right to remove any comments that are offensive, spam, or violate these terms.
        </p>

        <h2>6. Third-Party Links</h2>
        <p>
          Our website may contain links to third-party websites. We are not responsible for the
          content or practices of these websites.
        </p>

        <h2>7. Limitation of Liability</h2>
        <p>
          The content on this website is provided &ldquo;as is&rdquo; without warranties of any kind.
          We shall not be liable for any damages arising from the use of this website or its content.
        </p>

        <h2>8. Changes to Terms</h2>
        <p>
          We reserve the right to modify these terms at any time. Changes will be effective
          immediately upon posting to this page.
        </p>

        <h2>9. Contact</h2>
        <p>
          For questions about these terms, please contact us at{" "}
          <a href={`mailto:${siteConfig.social.email}`}>{siteConfig.social.email}</a>.
        </p>
      </div>
    </div>
  );
}
