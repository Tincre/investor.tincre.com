import "../styles/global.css";
import { SessionProvider } from "next-auth/react";
import { DefaultSeo } from "next-seo";
import { defaultSeoContent } from "../siteMetadata";
import { useState } from "react";
import CookieConsent, { getCookieConsentValue } from "react-cookie-consent";

const cookieName = "slightlysharpe.com-cookie-consent";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  const [acceptedCookies, setAcceptedCookies] = useState(
    getCookieConsentValue(cookieName) === "true"
  );

  return (
    <SessionProvider session={session}>
      <DefaultSeo {...defaultSeoContent} />
      <Component {...pageProps} />
      <CookieConsent
        cookieName={cookieName}
        onAccept={(acceptedByScrolling) => {
          if (acceptedByScrolling) {
            // triggered if user scrolls past threshold
            setAcceptedCookies(true);
          } else {
            setAcceptedCookies(true);
          }
        }}
        acceptOnScroll={true}
        acceptOnScrollPercentage={20}
        hideOnAccept={true}
        visible={!acceptedCookies ? "show" : "hidden"}
        buttonStyle={{
          backgroundColor: "#4338ca",
          color: "#fff",
          borderRadius: ".375rem",
          paddingTop: "auto",
          paddingBottom: "auto",
        }}
      >
        {`👋 We use cookies to enhance your experience. In using this site you agree to the storing of cookies on your device.`}
      </CookieConsent>
    </SessionProvider>
  );
}

export default MyApp;
