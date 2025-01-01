"use client";
import Footer1 from "@/components/homes/Footer1";
import Header1 from "@/components/headers/Header";
import NewsLetter from "@/components/homes/NewsLetter";

export const menuItems = [
  { href: "/", text: "Beranda" },
  { href: "/syarat", text: "Syarat dan Ketentuan", className: "active" },
];

export default function Home() {
  return (
    <>
      <div className="theme-main">
        <div className="page" id="top">
          <nav
            className="main-nav stick-fixed wow-menubar"
            style={{ backgroundColor: "#B76E79" }}
          >
            <Header1 links={menuItems} />
          </nav>
          <main id="main">
            <section className={`page-section  dark-content`}>
              {/* <NewsLetter />{" "} */}
            </section>
          </main>
          {/* <Footer1 /> */}
        </div>{" "}
      </div>
    </>
  );
}
