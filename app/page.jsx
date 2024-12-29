import dynamic from "next/dynamic";

const ParallaxContainer = dynamic(
  () => import("@/components/common/ParallaxContainer"),
  {
    ssr: false, // Disable server-side rendering
  }
);
import Home1 from "@/components/homes/home-1";
import Footer1 from "@/components/footers/Footer1";
import { menuItems } from "@/data/menu";
import Hero1 from "@/components/homes/home-1/heros/Hero1";
import Header1 from "@/components/headers/Header1";
import HeaderPreview from "@/components/headers/HeaderPreview";

export const metadata = {
  title:
    "abigold.co.id",
  description:
    "Gold Investment",
};

export default function Home() {
  return (
    <>
      <div className="theme-main">
        <div className="page" id="top">
          <nav className="main-nav transparent stick-fixed wow-menubar">
            <Header1 links={menuItems} />
          </nav>
          <main id="main">
            <ParallaxContainer
              className="home-section bg-gray-light-1 bg-light-alpha-90 parallax-5 parallax-mousemove-scene scrollSpysection"
              style={{
                backgroundImage:
                  "url(/assets/images/full-width-images/section-bg-1.jpg)",
              }}
              id="home"
            >
              <Hero1 />
            </ParallaxContainer>
            <Home1 />
          </main>
          <Footer1 />
        </div>{" "}
      </div>
    </>
  );
}
