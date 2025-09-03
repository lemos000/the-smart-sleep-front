// app/page.tsx
import Hero from "@/app/components/Hero";
import TrustBadges from "@/app/components/TrustBadges";
import AboutAuthor from "@/app/components/AboutAuthor";
import Curriculum from "@/app/components/Curriculum";
import Testimonials from "@/app/components/Testimonials";
import Audience from "@/app/components/Audience";

import Footer from "@/app/components/Footer";
import QuizModal, { StorageReset } from "./components/QuizModal";
import Header from "./components/Header";
import CurriculumModules from "./components/CurriculumModules";
import WhoFor from "./components/WhoFor";
import Carousel from "./components/Carousel";
import OfferBlock from "./components/Offer";
import StoryFlow from "./components/StoryFlow";
import AcordionComponent from "./components/AcordionComponent";

export default function Page() {
  return (
    <>
      {/* <StorageReset mode="quiz" />
      <QuizModal /> */}
      <Header></Header>
      <Hero />
      <TrustBadges />
      <AboutAuthor />
      <WhoFor></WhoFor>
      <Testimonials />
      <Carousel></Carousel>
      <Curriculum />
      <CurriculumModules></CurriculumModules>
      <StoryFlow></StoryFlow>
      <OfferBlock></OfferBlock>
      <AcordionComponent></AcordionComponent>

      <Footer />
    </>
  );
}
