"use client";

import SubscribeBanner from "./components/SubscribeBanner/SubscribeBanner";
// import ShowcaseVideo from "./components/ShowcaseVideo/ShowcaseVideo";
import DescriptiveTabs from "./components/DescriptiveTabs/DescriptiveTabs";
import TeamNumbers from "./components/TeamNumbers/TeamNumbers";
import StartExcercising from "./components/StartExcercising/StartExcercising";
import MeetVeiss from "./components/Device/Device";
// import Testemonial from "./components/Testemonial/Testemonial";
// import PricingList from "./components/PricingList/PricingList";
// import OurTeam from "./components/OurTeam/OurTeam";
import HeroSlider from "./components/HeroSlider/HeroSlider";

export default function Home() {
  return (
    <div>
      <HeroSlider />
      <MeetVeiss />
      <DescriptiveTabs />
      <SubscribeBanner />
      {/* <PricingList />
      <Testemonial /> */}
      <TeamNumbers />
      {/* <OurTeam /> */}
      {/* <ShowcaseVideo /> */}
      <StartExcercising />
    </div>
  );
}
