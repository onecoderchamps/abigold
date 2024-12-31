"use client";
import AnimatedText from "@/components/common/AnimatedText";
import { parallaxMouseMovement } from "@/utlis/parallax";
import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../app/firebaseConfig";

export default function Hero1() {

  const [Data, setData] = useState({
    title: "",
    subtitle: "",
    desc: "",
    image1: "",
    image2:"",
    image3:""
  });

  const [phoneNumber, setphoneNumber] = useState("");

  const fetchData = async () => {
    try {
      const docRef = doc(db, "Productions", "Banner");
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setData(docSnap.data());
      } else {
        console.error("No such document!");
      }
    } catch (error) {
      console.error("Error fetching document:", error);
    }
  };

  useEffect(() => {
    parallaxMouseMovement();
    fetchData();
    setphoneNumber(localStorage.getItem("phoneWa") || "");
  }, []);

  const message = "Halo, saya ingin bertanya tentang emas ABI";

  const waUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <>
      <div className="container min-height-100vh d-flex align-items-center pt-100 pb-100 pt-sm-120 pb-sm-120">
        {/* Home Section Content */}
        <div className="home-content text-start">
          <div className="row">
            {/* Home Section Text */}
            <div className="col-md-6 d-flex align-items-center mb-sm-60">
              <div>
                <h2
                  className="section-caption mb-30 mb-xs-10 wow fadeInUp"
                  data-wow-duration="1.2s"
                >
                  {Data.title}
                </h2>
                <h1 className="hs-title-1 mb-30">
                  <AnimatedText
                    text={Data.subtitle}
                  />
                </h1>

                <p
                  className="section-descr mb-50 wow fadeInUp"
                  data-wow-delay="0.6s"
                  data-wow-duration="1.2s"
                >
                  {Data.desc}
                </p>
                <div
                  className="local-scroll mt-n10 wow fadeInUp wch-unset"
                  data-wow-delay="0.7s"
                  data-wow-duration="1.2s"
                  data-wow-offset={0}
                >
                  <a
                    href={waUrl}
                    className="btn btn-mod btn-large btn-round btn-hover-anim align-middle me-2 me-sm-5 mt-10"
                    style={{
                      backgroundColor: "#B76E79",  // Rose Gold
                      color: "#fff",                // White text
                      border: "2px solid #B76E79",  // Rose Gold border
                    }}
                  >
                    <span>Pesan Sekarang</span>
                  </a>
                  <a
                    href="#hargaterkini"
                    className="link-hover-anim align-middle lightbox mfp-iframe mt-10"
                  >
                    Cek Harga Emas Terkini
                  </a>
                </div>
              </div>
            </div>
            {/* End Home Section Text */}
            {/* Stack Images */}
            <div className="col-md-5 offset-md-1 d-flex align-items-center">
              <div className="stack-images">
                <div
                  className="stack-images-1 parallax-mousemove"
                  data-offset={30}
                >
                  <div
                    className="wow clipRightIn"
                    data-wow-delay="1.2s"
                    data-wow-duration="1.75s"
                  >
                    <img
                      src={Data.image1}
                      alt="Image Description"
                      width={600}
                      height={800}
                    />
                  </div>
                </div>
                <div
                  className="stack-images-2 parallax-mousemove"
                  data-offset={60}
                >
                  <div
                    className="wow clipRightIn"
                    data-wow-delay="1.7s"
                    data-wow-duration="1.75s"
                  >
                    <img
                      width={600}
                      height={800}
                      src={Data.image2}
                      alt="Image Description"
                    />
                  </div>
                </div>
                <div
                  className="stack-images-3 parallax-mousemove"
                  data-offset={90}
                >
                  <div
                    className="wow clipRightIn"
                    data-wow-delay="2.2s"
                    data-wow-duration="1.75s"
                  >
                    <img
                      width={600}
                      height={800}
                      src={Data.image3}
                      alt="Image Description"
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* End Stack Images */}
          </div>
        </div>
      </div>
    </>
  );
}
