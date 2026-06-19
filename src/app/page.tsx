import DocHero from "@/components/home/DocHero";
import DocSections from "@/components/home/DocSections";
import AdBanner from "@/components/ads/AdBanner";

export default function HomePage() {
  return (
    <>
      <DocHero />
      <AdBanner className="container my-8" />
      <DocSections />
    </>
  );
}
