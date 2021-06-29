import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from 'next/head'
import Main from '../containers/Main';

const Home = () => {
  const { t } = useTranslation("common");

  return (
    <>
      <Head>
        <title>Saigon Climbing Center</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content={t('homeIntroductPar1')}
        ></meta>
      </Head>
      <Main />
    </>
  )
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common", "home"])),
  },
});

export default Home;
