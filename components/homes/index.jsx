import AnimatedText from "@/components/common/AnimatedText";
import About from "./About";
import Blog from "./Blog";
import Brands from "./Brands";
import Contact from "./Contact";

import Faq from "./Faq";
import Features from "./Features";
import NewsLetter from "./NewsLetter";
import Promo from "./Promo";
import Service from "./Service";
import Team from "./Team";
import Testimonials from "./Testimonials";
import Testimonials2 from "./Teatimonials2";
import Link from "next/link";
import Brands2 from "./Brands2";
import dynamic from "next/dynamic";
import GoldPriceChart from "./Chart";
import ServiceHarga from "./ServiceHarga";
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
        <Promo />{" "}
      </section>
      <section
        className={`page-section scrollSpysection ${
          dark ? "bg-dark-2 light-content" : ""
        }`}
        style={{ backgroundColor: !dark ? "#B76E7920" : undefined }}
        id="produk"
      >
        <Team />
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
        className="page-section bg-dark-1 bg-dark-alpha-90 parallax-5 light-content"
        
      >
        <div className="container position-relative">
          <h4 className="mb-50 mb-sm-40 text-center">
            Tren Kenaikan Harga Emas
          </h4>
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
        <div className="container position-relative">
          <div className="row">
            {/* Images */}
            <div className="col-lg-7 d-flex align-items-start mb-md-60 mb-xs-30">
              <div className="call-action-2-images">
                <div
                  className="call-action-2-image-1"
                  data-rellax-y=""
                  data-rellax-speed="0.5"
                  data-rellax-percentage="0.7"
                >
                  <img
                    width={386}
                    height={400}
                    src="https://ec-cstatic.akulaku.net/web-site/_nuxt/img/h5_au_cu_banner.98a5986.png"
                    alt="Image Description"
                    className="wow scaleOutIn"
                    data-wow-duration="1.2s"
                    data-wow-offset={255}
                  />
                </div>
                <div className="call-action-2-image-2">
                  <img
                    width={810}
                    height={512}
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUH0Quamgn74pqh6vB-JhOqh8B9sInohf0FA&s"
                    alt="Image Description"
                    className="wow scaleOutIn"
                    data-wow-duration="1.2s"
                    data-wow-offset={134}
                  />
                </div>
                <div
                  className="call-action-2-image-3"
                  data-rellax-y=""
                  data-rellax-speed="-0.5"
                  data-rellax-percentage="0.5"
                >
                  <img
                    width={386}
                    height={500}
                    src="https://biteship.com/blog/wp-content/uploads/2023/05/peraturan-cod.jpg"
                    alt="Image Description"
                    className="wow scaleOutIn"
                    data-wow-duration="1.2s"
                    data-wow-offset={0}
                  />
                </div>
              </div>
            </div>
            {/* End Images */}
            {/* Text */}
            <div className="col-lg-5 d-flex align-items-center">
              <div
                className="wow fadeInUp"
                data-wow-duration="1.2s"
                data-wow-offset={255}
              >
                <h4 className=" mb-50 mb-sm-40">
                  Bagaimana cara memesan ABI gold?
                </h4>
                <Faq />
                <div className="local-scroll">
                  {onePage ? (
                    <a
                      href="#contact"
                      className="btn btn-mod btn-large btn-round btn-hover-anim"
                    >
                      <span>Pesan Sekarang</span>
                    </a>
                  ) : (
                    <Link
                      href={`/main-pages-contact-1${dark ? "-dark" : ""}`}
                      className="btn btn-mod btn-large btn-round btn-hover-anim"
                    >
                      <span>Pesan Sekarang</span>
                    </Link>
                  )}
                </div>
              </div>
            </div>
            {/* End Text */}
          </div>
        </div>
      </section>
      <hr className={`mt-0 mb-0 ${dark ? "white" : ""}`} />

      <section className={`page-section  ${dark ? " light-content" : ""}`}>
        {" "}
        <ServiceHarga />
      </section>

      <hr className={`mt-0 mb-0 ${dark ? "white" : ""}`} />
      <section className={`page-section  ${dark ? " light-content" : ""}`}>
        {dark ? <Brands2 /> : <Brands />}
      </section>

      <section
        className={`page-section pt-0 pb-0  ${dark ? "light-content" : ""}`}
      >
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
                  href="#team"
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
