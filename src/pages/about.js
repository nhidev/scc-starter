import styled from "styled-components";
import { colors } from "../styles/theme";
import { respondTo } from "../styles/mixins";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const AboutStyled = styled.main`
`;

const About = () => {  const { t } = useTranslation("common");

  return (
    <AboutStyled>
    </AboutStyled>
  )
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common", "about"])),
  },
});

export default About;
