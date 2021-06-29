import styled from "styled-components";
import { useTranslation } from "next-i18next";
import HeroBanner from "../../components/HeroBanner";
import CTASection from "../../components/CTASection";
import BlockImage from "../../components/BlockImage";
import ClimbingSection from "../../components/ClimbingSection";
import { IntroVideoSection } from "../../components/IntroVideoSection";
import OpeningTimes from "../../components/OpeningTimes";
import FacilitiesSection from "../../components/FacilitiesSection";

const MainStyled = styled.main`
  padding-top: 8rem;
`;

const Main = () => {
  const { t } = useTranslation("home");

  return (
    <MainStyled>
       <HeroBanner
        title1={t("heroBannerText01")}
        title2={t("heroBannerText02")}
        title3={t("heroBannerText03")}
        imgSrc="/images/hero-banner.jpg"
        linkText={t("heroBanneButton01")}
        linkUrl="/about-us"
      />
        <CTASection ctaSectionTitle={t("ctaSectionTitle")} ctaSectionDes ={t("ctaSectionDescription")} />
        <BlockImage
        title="RISE TO THE CHALLENGE"
        description="It’s a good idea to move the location of your hand-holds periodically to keep the climbing wall interesting and challenging for climbers over time."
        imgSrc="/images/route-setting.jpg"
        linkText="Join the team"
        linkUrl="/about"
      />
      <ClimbingSection/>
      <IntroVideoSection
        source={"/images/climbing-video.mp4"}
        bgImage={"/images/poster.jpg"}
      />
      <FacilitiesSection />
      <OpeningTimes />
    </MainStyled>
  );
};

export default Main;
