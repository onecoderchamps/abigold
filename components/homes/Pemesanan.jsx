"use client";

import { featureItems2 } from "@/data/features";
import Image from "next/image";
import React from "react";
import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../app/firebaseConfig";
import Faqs from "./Faq";

export default function Pemesanan() {
  const [Data, setData] = useState({
    title: "",
    image1: "",
    image2: "",
    image3: "",
    items: [],
  });

  const [phoneNumber, setphoneNumber] = useState("");

  const fetchData = async () => {
    try {
      const docRef = doc(db, "Productions", "Pemesanan");
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
    fetchData();
    setphoneNumber(localStorage.getItem("phoneWa") || "");
  }, []);

  const message = "Halo, saya ingin bertanya tentang emas ABI";

  const waUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
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
                src={Data.image1}
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
                src={Data.image2}
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
                src={Data.image3}
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
              {Data.title}
            </h4>
            <Faqs faqs={Data.items}/>
            <div className="local-scroll">
              <a
                href={waUrl}
                className="btn btn-mod btn-large btn-round btn-hover-anim"style={{
                  backgroundColor: "#B76E79",  // Rose Gold
                  color: "#fff",                // White text
                  border: "2px solid #B76E79",  // Rose Gold border
                }}
              >
                <span>Pesan Sekarang</span>
              </a>
            </div>
          </div>
        </div>
        {/* End Text */}
      </div>
    </div>
  );
}
