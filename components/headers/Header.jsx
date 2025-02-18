"use client";
import Nav from "./Nav";
import Image from "next/image";
import { toggleMobileMenu } from "@/utlis/toggleMobileMenu";
import Link from "next/link";

export default function Header1({ links }) {
  return (
    <div className="main-nav-sub full-wrapper ">
      <div className="nav-logo-wrap local-scroll">
        <Link href="/" className="logo">
          <Image
            src="/assets/images/logo-dark.svg"
            alt="Your Company Logo"
            width={105}
            height={34}
            className="light-mode-logo"
          />
          <Image
            src="/assets/images/logo-white.svg"
            alt="Your Company Logo"
            width={105}
            height={34}
            className="dark-mode-logo"
          />
        </Link>
      </div>
      {/* Mobile Menu Button */}
      <div
        onClick={toggleMobileMenu}
        className="mobile-nav"
        role="button"
        tabIndex={0}
      >
        <i className="mobile-nav-icon" />
        <span className="visually-hidden">Menu</span>
      </div>
      {/* Main Menu */}
      <div className="inner-nav desktop-nav">
        <ul className="clearlist scroll-nav local-scroll scrollspyLinks">
          <Nav links={links} />
        </ul>
        <ul className="items-end clearlist local-scroll">
          {/* Languages */}
          {/* <LanguageSelect /> */}
          {/* End Languages */}
          <li>
            <a href="https://abigold.co.id/login" className="opacity-1 no-hover">
              <span className="link-hover-anim underline text-white" data-link-animate="y">
                ABI Panel
              </span>
            </a>
          </li>
        </ul>
      </div>
      {/* End Main Menu */}
    </div>
  );
}
