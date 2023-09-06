"use client";

import PreviewBanner from "./components/PreviewBanner/PreviewBanner";
import OurPrograms from "./components/OurPrograms/OurPrograms";
import SubscribeBanner from "./components/SubscribeBanner/SubscribeBanner";
import ShowcaseVideo from "./components/ShowcaseVideo/ShowcaseVideo";
import ProgramsList from "./components/ProgramsList/ProgramsList";
import DescriptiveTabs from "./components/DescriptiveTabs/DescriptiveTabs";
import TeamNumbers from "./components/TeamNumbers/TeamNumbers";
import StartExcercising from "./components/StartExcercising/StartExcercising";
import Testemonial from "./components/Testemonial/Testemonial";
import BlogSlider from "./components/BlogSlider/BlogSlider";
import PricingList from "./components/PricingList/PricingList";
import OurTeam from "./components/OurTeam/OurTeam";
import Transformations from "./components/Transformations/Transformations";
import HeroSlider from "./components/HeroSlider/HeroSlider";

export default function Home() {
  return (
    <div>
      <HeroSlider />
      <ProgramsList />
      <PreviewBanner />
      <OurPrograms />
      <SubscribeBanner />
      <PricingList />
      <PreviewBanner />
      <Testemonial />
      <Transformations />
      <DescriptiveTabs />
      <TeamNumbers />
      <OurTeam />
      <ShowcaseVideo />
      <BlogSlider />
      <StartExcercising />
    </div>
  );
}
