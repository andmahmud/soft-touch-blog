import type { Metadata } from "next";
import { siteConfig } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Disclaimer",
  description: `Disclaimer for ${siteConfig.name}'s tech blog.`,
};

export default function DisclaimerPage() {
  return (
    <div className="container py-12 max-w-3xl">
      <h1 className="section-title">Disclaimer</h1>
      <p className="section-subtitle">Last updated: January 1, 2025</p>
      <div className="prose-custom">
        <h2>1. General Information</h2>
        <p>
          The content on {siteConfig.name}&apos;s tech blog is provided for general informational
          and educational purposes only. While we strive to provide accurate and up-to-date
          information, we make no representations or warranties of any kind regarding the
          completeness, accuracy, or reliability of the content.
        </p>

        <h2>2. Professional Advice</h2>
        <p>
          The articles and tutorials on this website are based on personal experience and research.
          They should not be considered as professional advice. Always consult with qualified
          professionals for specific technical or business decisions.
        </p>

        <h2>3. Code and Technical Content</h2>
        <p>
          Code samples provided in articles are for demonstration purposes. We recommend testing
          and adapting code to your specific use case. We are not responsible for any issues
          arising from the use of code found on this website.
        </p>

        <h2>4. External Links</h2>
        <p>
          Our website may contain links to external sites. We do not endorse or take responsibility
          for the content, products, or services offered on these external websites.
        </p>

        <h2>5. Affiliate Disclosure</h2>
        <p>
          Some links on this website may be affiliate links. If you make a purchase through these
          links, we may earn a commission at no additional cost to you. We only recommend products
          and services that we genuinely believe will add value to our readers.
        </p>

        <h2>6. Advertisement</h2>
        <p>
          This website displays advertisements through Google AdSense and other ad networks.
          Advertisements help us maintain and create free content for our readers.
        </p>

        <h2>7. Personal Responsibility</h2>
        <p>
          You acknowledge that you are using the information on this website at your own risk.
          We shall not be liable for any losses, injuries, or damages arising from the use of
          this website.
        </p>

        <h2>8. Changes to Disclaimer</h2>
        <p>
          We reserve the right to update this disclaimer at any time. Changes will be posted on
          this page.
        </p>

        <h2>9. Contact</h2>
        <p>
          If you have any questions about this disclaimer, please contact us at{" "}
          <a href={`mailto:${siteConfig.social.email}`}>{siteConfig.social.email}</a>.
        </p>
      </div>
    </div>
  );
}
