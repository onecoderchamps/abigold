import AnimatedText from "@/components/common/AnimatedText";
import About from "./About";
import Blog from "./Blog";
import Brands from "./Brands";
import Contact from "./Contact";

import Faq from "./Faq";
import Features from "./Features";
import NewsLetter from "./NewsLetter";
import Keunggulan from "./Keunggulan";
import Service from "./Service";
import Product from "./Product";
import Testimonials from "./Testimonials";
import Testimonials2 from "./Teatimonials2";
import Link from "next/link";
import Brands2 from "./Brands2";
import dynamic from "next/dynamic";
import GoldPriceChart from "./Chart";
import ServiceHarga from "./ServiceHarga";
import Pemesanan from "./Pemesanan";
const ParallaxContainer = dynamic(
  () => import("@/components/common/ParallaxContainer"),
  {
    ssr: false, // Disable server-side rendering
  }
);
export default function Home1({ onePage = false, dark = false }) {
  return (
    <>
      <section
        className={`page-section  ${dark ? "bg-dark-1 light-content" : ""}`}
      >
        <Keunggulan />{" "}
      </section>
      <section
        className={`page-section scrollSpysection ${
          dark ? "bg-dark-2 light-content" : ""
        }`}
        style={{ backgroundColor: !dark ? "#B76E7920" : undefined }}
        id="produk"
      >
        <Product />
      </section>
      <section
        className={`page-section  scrollSpysection  ${
          dark ? "bg-dark-1 light-content" : ""
        }`}
        id="services"
      >
        {" "}
        <Service />
      </section>

      <ParallaxContainer
        className="page-section parallax-5 light-content"
        style={{
          background: "#B76E7920", // Gradien ungu
          borderRadius: "12px", // Membuat rounded
          color: "#fff", // Teks putih untuk kontras
          display: "inline-block", // Agar ukurannya sesuai konten
        }}
      >
        <div className="container position-relative">
          <GoldPriceChart />
        </div>
      </ParallaxContainer>

      <hr className={`mt-0 mb-0 ${dark ? "white" : ""}`} />
      <section
        className={`page-section  scrollSpysection  ${
          dark ? "bg-dark-1 light-content" : ""
        }`}
        id="pemesanan"
      >
        <Pemesanan />
      </section>
      <hr className={`mt-0 mb-0 ${dark ? "white" : ""}`} />

      <section className={`page-section  scrollSpysection  ${
          dark ? "bg-dark-1 light-content" : ""
        }`} id="hargaterkini">
        <ServiceHarga />
      </section>

      <section className={`page-section  ${dark ? " light-content" : ""}`}>
        {dark ? <Brands2 /> : <Brands />}
      </section>
      <hr className={`mt-0 mb-0 ${dark ? "white" : ""}`} />

      <section className={`page-section ${dark ? "light-content" : ""}`}>
        {" "}
        {dark ? <Testimonials2 /> : <Testimonials />}
      </section>

      <section
        className={`page-section  scrollSpysection  ${
          dark ? "bg-dark-1 light-content" : ""
        }`}
        id="contact"
      >
        <Contact />{" "}
      </section>
      {/* <hr className={`mt-0 mb-0 ${dark ? "white" : ""}`} />
      <section
        className={`page-section  scrollSpysection  ${
          dark ? "bg-dark-1 light-content" : ""
        }`}
        id="blog"
      >
        <div className="container position-relative">
          <div className="row mb-60 mb-xs-30">
            <div className="col-md-6">
              <h2 className="section-caption mb-xs-10">Our Blog</h2>
              <h3 className="section-title mb-0">
                <span className="wow charsAnimIn" data-splitting="chars">
                  The latest news
                </span>
              </h3>
            </div>
            <div className="col-md-5 offset-md-1 text-start text-md-end pt-40 pt-sm-20">
              <Link
                href={`/main-blog-columns-2col`}
                className="link-hover-anim underline align-middle"
                data-link-animate="y"
              >
                Read more in our blog <i className="mi-arrow-right size-18" />
              </Link>
            </div>
          </div>
          <Blog />
        </div>
      </section> */}
      {/* <section
        className={`page-section scrollSpysection ${
          dark ? "bg-dark-1 light-content" : ""
        }`}
        id="about"
      >
        <div className="container position-relative">
          <div className="row mb-60 mb-xs-30">
            <div className="col-md-6">
              <h2 className="section-caption mb-xs-10">Our Story</h2>
              <h3 className="section-title mb-0">
                <AnimatedText text="Better way to create stanning layouts." />
              </h3>
            </div>
            <div className="col-md-5 offset-md-1 relative text-start text-md-end pt-40 pt-sm-20 local-scroll">
              <div
                className="decoration-2 d-none d-md-block"
                data-rellax-y=""
                data-rellax-speed="0.7"
                data-rellax-percentage="-0.2"
              >
                <Image
                  width="103"
                  height="223"
                  src="/assets/images/decoration-2.svg"
                  alt=""
                />
              </div>
              {onePage ? (
                <a
                  href="#Product"
                  className="link-hover-anim underline align-middle"
                  data-link-animate="y"
                >
                  <span className="link-strong link-strong-unhovered">
                    Learn more about us{" "}
                    <i
                      className="mi-arrow-right size-18"
                      aria-hidden="true"
                    ></i>
                  </span>
                  <span
                    className="link-strong link-strong-hovered"
                    aria-hidden="true"
                  >
                    Learn more about us{" "}
                    <i
                      className="mi-arrow-right size-18"
                      aria-hidden="true"
                    ></i>
                  </span>
                </a>
              ) : (
                <Link
                  href={`/main-pages-about-1${dark ? "-dark" : ""}`}
                  className="link-hover-anim underline align-middle"
                  data-link-animate="y"
                >
                  <span className="link-strong link-strong-unhovered">
                    Learn more about us{" "}
                    <i
                      className="mi-arrow-right size-18"
                      aria-hidden="true"
                    ></i>
                  </span>
                  <span
                    className="link-strong link-strong-hovered"
                    aria-hidden="true"
                  >
                    Learn more about us{" "}
                    <i
                      className="mi-arrow-right size-18"
                      aria-hidden="true"
                    ></i>
                  </span>
                </Link>
              )}
            </div>
          </div>
          <About />
        </div>
      </section> */}
    </>
  );
}
