import {
  Layout,
  Loader,
  Navbar,
  HeroSection,
  HomeFocus,
  HomeScaleSection,
  HomeBrandSection,
  HomeInvestmentCriteria,
  HomeInsight,
  HomeVideoSection
} from "../components/imports";
import Parallax from "@/components/helper/Parallax";

export default function Home() {
  return (
    <Layout>
      <Loader />
      <Navbar />
      <HeroSection />
      <HomeFocus />
      <Parallax id="home-scale-section" speed={0.9}>
        <HomeScaleSection />
      </Parallax>
      <Parallax id="home-brand-section" speed={0.9}>
        <HomeBrandSection />
      </Parallax>

      <HomeInvestmentCriteria />
      <HomeInsight />
      <HomeVideoSection />
    </Layout>
  );
}
