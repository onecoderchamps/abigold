"use client";
import React from "react";
import Image from "next/image";
// import FooterSocials from "../footers/FooterSocials";
import Link from "next/link";
import { footerLinks, navigationLinks } from "@/data/footer";

export default function Footer1({ dark = false }) {
  const scrollToTop = (event) => {
    event.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Linear easing replacement
    });
  };

  return (
    <footer
      className={`page-section footer ${
        dark ? "bg-dark-2 light-content" : ""
      } pb-30`}
      style={{ backgroundColor: !dark ? "#B76E79" : undefined }}
    >
      <div className="container">
        <div className="row pb-120 pb-sm-80 pb-xs-50">
          <div className="col-md-4 col-lg-3 text-gray mb-sm-50">
            <Link href={"/"} className="mb-30">
              <Image
                src="/assets/images/logo-dark.svg"
                width={105}
                height={34}
                className="light-mode-logo"
                alt="Your Company Logo"
              />

              <Image
                src="/assets/images/logo-white.svg"
                width={105}
                height={34}
                className="dark-mode-logo"
                alt="Your Company Logo"
              />
            </Link>
            <p className="text-white">
              PT. Aurum Berkah Indonesia <br/>The Plaza Office Tower, Level 7 #7058
              Jl. MH Thamrin Kav. 28-39 Jakarta 10350 - Indonesia
            </p>
            <div className="clearlinks">
              <a href="mailto:ibthemes21@gmail.com" className="text-white">cs@abigold.co.id</a>
            </div>
            <div className="clearlinks">
              <a href="tel:+622150955013" className="text-white">+62(0)21 5095 5013</a>
            </div>
          </div>
          <div className="col-md-7 offset-md-1 offset-lg-2">
            <div className="row mt-n30">
              {/* Footer Widget */}
              <div className="col-sm-4 mt-30">
                <h3 className="fw-title text-white">Company</h3>
                <ul className="fw-menu clearlist local-scroll">
                  {navigationLinks.map((elm, i) => (
                    <li key={i}>
                      <a href={elm.href} className="text-white">{elm.text}</a>
                    </li>
                  ))}
                </ul>
              </div>
              {/* End Footer Widget */}
              {/* Footer Widget */}
              {/* <div className="col-sm-4 mt-30">
                <h3 className="fw-title text-white">Social Media</h3>
                <ul className="fw-menu clearlist">
                  <FooterSocials />
                </ul>
              </div> */}
              {/* End Footer Widget */}
              {/* Footer Widget */}
              <div className="col-sm-4 mt-30">
                <h3 className="fw-title text-white">Legal &amp; Press</h3>
                <ul className="fw-menu clearlist">
                  {footerLinks.map((elm, i) => (
                    <li key={i}>
                      <a href={elm.path} className="text-white">{elm.name}</a>
                    </li>
                  ))}
                </ul>
              </div>
              {/* End Footer Widget */}
            </div>
          </div>
        </div>
        {/* Footer Text */}
        <div className="row text-gray">
          <div className="col-md-4 col-lg-3">
            <b></b>
          </div>
          <div className="col-md-7 offset-md-1 offset-lg-2 clearfix text-white">
            <b>© abigold.co.id {new Date().getFullYear()}.</b>
            {/* Back to Top Link */}
            <div className="local-scroll float-end mt-n20 mt-sm-10">
              <a href="#top" className="link-to-top" onClick={scrollToTop}>
                <i className="mi-arrow-up size-24" />
                <span className="visually-hidden">Scroll to top</span>
              </a>
            </div>
            {/* End Back to Top Link */}
          </div>
        </div>
        {/* End Footer Text */}
      </div>
    </footer>
  );
}
