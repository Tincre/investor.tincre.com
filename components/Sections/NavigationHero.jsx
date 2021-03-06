import MobileNavbar from "../MobileNavbar";
import Navbar from "../Navbar";
import Hero from "../Hero";

export default function NavigationHero({
  heroContent,
  entityTitle,
  navigationLinks,
  navigationHrefs,
  cta,
  logoSrc,
  session,
  mobileMenuIsClicked,
  setMobileMenuIsClicked,
}) {
  return (
    <section id="navigation-hero">
      <div className="container px-4 mx-auto">
        <Navbar
          entityTitle={entityTitle}
          navigationLinks={navigationLinks}
          navigationHrefs={navigationHrefs}
          cta={cta}
          logoSrc={logoSrc}
          session={session}
          mobileMenuIsClicked={mobileMenuIsClicked}
          setMobileMenuIsClicked={setMobileMenuIsClicked}
        />
        <Hero {...heroContent} session={session} />
      </div>
      <div className="transition ease-in-out duration-150">
        <MobileNavbar
          entityTitle={entityTitle}
          navigationLinks={navigationLinks}
          navigationHrefs={navigationHrefs}
          cta={cta}
          session={session}
          mobileMenuIsClicked={mobileMenuIsClicked}
          setMobileMenuIsClicked={setMobileMenuIsClicked}
          logoSrc={logoSrc}
        />
      </div>
    </section>
  );
}
