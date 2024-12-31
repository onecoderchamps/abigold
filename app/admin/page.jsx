"use client"
import Footer1 from "@/components/homes/Footer1";
import { menuItems } from "@/data/menu";
import Header1 from "@/components/headers/Header";

export default function Home() {
  return (
    <>
      <div className="theme-main">
        <div className="page" id="top">
          <nav className="main-nav stick-fixed wow-menubar" style={{ backgroundColor: '#B76E79' }}>
            <Header1 links={menuItems} />
          </nav>
          <main id="main">
          </main>
          <Footer1 />
        </div>{" "}
      </div>
    </>
  );
}
