import styled from "styled-components";
import { colors } from "../styles/theme";
import { respondTo } from "../styles/mixins";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const PricingStyled = styled.main`
   
  ${respondTo.xs`
  `}
`;

const Pricing = () => {
  const { t } = useTranslation("common");

  return (
    <PricingStyled>
    </PricingStyled>
  );
};

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common", "home"])),
  },
});

export default Pricing;
