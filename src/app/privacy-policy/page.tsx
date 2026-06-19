import type { Metadata } from "next";
import { siteConfig } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy Policy for ${siteConfig.name}'s tech blog. Learn how we handle your data.`,
};

export default function PrivacyPolicyPage() {
  return (
    <div className="container py-12 max-w-3xl">
      <h1 className="section-title">Privacy Policy</h1>
      <p className="section-subtitle">Last updated: January 1, 2025</p>
      <div className="prose-custom">
        <h2>1. Introduction</h2>
        <p>
          Welcome to {siteConfig.name}&apos;s tech blog. We respect your privacy and are committed to
          protecting your personal data. This privacy policy explains how we collect, use, and
          safeguard your information when you visit our website.
        </p>

        <h2>2. Information We Collect</h2>
        <p>We may collect the following types of information:</p>
        <ul>
          <li><strong>Personal Information:</strong> Name and email address when you subscribe to our newsletter or use the contact form.</li>
          <li><strong>Usage Data:</strong> Information about how you use our website, including pages visited and time spent.</li>
          <li><strong>Technical Data:</strong> IP address, browser type, device information, and cookies.</li>
        </ul>

        <h2>3. How We Use Your Information</h2>
        <p>We use your information for:</p>
        <ul>
          <li>Providing and maintaining our website</li>
          <li>Sending newsletters (with your consent)</li>
          <li>Responding to your inquiries</li>
          <li>Improving our content and user experience</li>
          <li>Displaying personalized advertisements</li>
        </ul>

        <h2>4. Cookies</h2>
        <p>
          We use cookies and similar tracking technologies to track activity on our website and
          improve your experience. You can control cookies through your browser settings.
        </p>

        <h2>5. Google AdSense</h2>
        <p>
          We use Google AdSense to display advertisements. Google AdSense may use cookies and web
          beacons to serve ads based on your visits to our website and other sites on the internet.
          You can opt out of personalized advertising by visiting Google&apos;s Ads Settings.
        </p>

        <h2>6. Data Security</h2>
        <p>
          We implement appropriate security measures to protect your personal information. However,
          no method of transmission over the Internet is 100% secure.
        </p>

        <h2>7. Third-Party Services</h2>
        <p>
          We may use third-party services for analytics, advertising, and hosting. These services
          have their own privacy policies governing the use of your information.
        </p>

        <h2>8. Your Rights</h2>
        <p>You have the right to:</p>
        <ul>
          <li>Access your personal data</li>
          <li>Correct inaccurate data</li>
          <li>Delete your data</li>
          <li>Object to processing of your data</li>
          <li>Withdraw consent at any time</li>
        </ul>

        <h2>9. Contact</h2>
        <p>
          If you have any questions about this privacy policy, please contact us at{" "}
          <a href={`mailto:${siteConfig.social.email}`}>{siteConfig.social.email}</a>.
        </p>

        <h2>10. Changes to This Policy</h2>
        <p>
          We may update this privacy policy from time to time. We will notify you of any changes
          by posting the new policy on this page.
        </p>
      </div>
    </div>
  );
}
