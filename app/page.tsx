import Hero from "@/components/hero";
import VideoSection from "@/components/video-section";
import HowItWorks from "@/components/how-it-works";
import MarqueeStrip from "@/components/marquee-strip";
import Authority from "@/components/authority";
import Positioning from "@/components/positioning";
import Ecosystem from "@/components/ecosystem";
import CoachingPreview from "@/components/coaching-preview";
import Transformations from "@/components/transformations";
import EventHighlight from "@/components/event-highlight";
import Lifestyle from "@/components/lifestyle";
import ShopPreview from "@/components/shop-preview";
import SocialHub from "@/components/social-hub";
import ClosingCTA from "@/components/closing-cta";

export default function Home() {
  return (
    <>
      <Hero />
      <VideoSection />
      <HowItWorks />
      <MarqueeStrip />
      <Authority />
      <Positioning />
      <Ecosystem />
      <CoachingPreview />
      <Transformations />
      <EventHighlight />
      <Lifestyle />
      <ShopPreview />
      <SocialHub />
      <ClosingCTA />
    </>
  );
}
