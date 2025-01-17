"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { footerLinks } from "@/data/footer";

export const navigationLinks = [
  { href: "/", text: "Beranda", className: "active" },
  { href: "#produk", text: "Produk" },
  { href: "#services", text: "Keunggulan" },
  { href: "#pemesanan", text: "Cara Pemesanan" },
  { href: "#contact", text: "Mitra ABI" },
  { href: "/authentification", text: "Authentikasi Emas" },
];


export default function Footer1({ dark = false }) {
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");

  useEffect(() => {
    // Access localStorage only in the browser
    if (typeof window !== "undefined") {
      setPhone(localStorage.getItem("phone") || "");
      setEmail(localStorage.getItem("email") || "");
      setAddress(localStorage.getItem("address") || "");
    }
  }, []);

  const scrollToTop = (event) => {
    event.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Linear easing replacement
    });
  };

  return (
    <footer
      className={`page-section footer ${dark ? "bg-dark-2 light-content" : ""} pb-30`}
      style={{
        backgroundColor: !dark ? "#B76E79" : undefined,
      }}
    >
      <div className="container">
        <div className="row pb-120 pb-sm-80 pb-xs-50">
          {/* Footer left section */}
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
              PT. Aurum Barakah Indonesia <br />
              {address}
            </p>
            <div className="clearlinks">
              <a href={`mailto:${email}`} className="text-white">
                {email}
              </a>
            </div>
            <div className="clearlinks">
              <a href={`tel:${phone}`} className="text-white">
                {phone}
              </a>
            </div>
          </div>

          {/* Footer right section */}
          <div className="col-md-7 offset-md-1 offset-lg-2">
            <div className="row mt-n30">
              {/* Footer Menu Widget */}
              <div className="col-sm-4 mt-30">
                <h3 className="fw-title text-white">Menu</h3>
                <ul className="fw-menu clearlist local-scroll">
                  {navigationLinks.map((elm, i) => (
                    <li key={i}>
                      <a href={elm.href} className="text-white">
                        {elm.text}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Legal & Press Widget */}
              <div className="col-sm-4 mt-30">
                <h3 className="fw-title text-white">Legal &amp; Press</h3>
                <ul className="fw-menu clearlist">
                  {footerLinks.map((elm, i) => (
                    <li key={i}>
                      <a href={elm.path} className="text-white">
                        {elm.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
