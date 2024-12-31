"use client";

import { featureItems2 } from "@/data/features";
import Image from "next/image";
import React from "react";
import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../app/firebaseConfig";

export default function Keunggulan() {
  const [Data, setData] = useState({
    title: "",
    image1: "",
    image2: "",
    items: [],
  });

  const fetchData = async () => {
    try {
      const docRef = doc(db, "Productions", "Keunggulan");
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
  }, []);

  return (
    <div className="container position-relative">
      {/* Decorative Dots */}
      <div
        className="decoration-4 d-none d-md-block"
        data-rellax-y=""
        data-rellax-speed="-0.5"
        data-rellax-percentage=".7"
      >
        <Image
          width="103"
          height="223"
          src="/assets/images/decoration-2.svg"
          alt=""
        />
      </div>
      {/* End Decorative Dots */}
      <div className="row">
        {/* Text */}
        <div className="col-lg-6 mb-md-60 mb-xs-30 d-flex align-items-center">
          <div
            className="wow fadeInUp"
            data-wow-duration="1.2s"
            data-wow-offset={205}
          >
            <div className="row">
              <div className="col-lg-10">
                <h2 className="section-title mb-60 mb-sm-30">{Data.title}</h2>
              </div>
            </div>
            {/* Features Grid */}
            <div className="row alt-features-grid">
              {/* Features Item */}
              {Data.items.map((item, index) => (
                <div key={index} className="col-lg-6">
                  <div className="alt-features-item">
                    {/* <div className="alt-features-icon">
                      <img
                        width={24}
                        height={24}
                        src={item.image}
                        alt="Image Items"
                      />
                    </div> */}
                    <h3 className="alt-features-title">{item.title}</h3>
                    <div className="alt-features-descr">{item.desc}</div>
                  </div>
                </div>
              ))}
              {/* End Features Item */}
            </div>
            {/* End Features Grid */}
          </div>
        </div>
        {/* End Text */}
        {/* Images */}
        <div className="col-lg-6 d-flex align-items-start">
          <div className="call-action-3-images mt-xs-0 text-end">
            <div className="call-action-3-image-1">
              <img
                width={633}
                height={821}
                src={Data.image2}
                alt="Image Description"
                className="wow scaleOutIn"
                data-wow-duration="1.2s"
                data-wow-offset={205}
              />
            </div>
            <div className="call-action-3-image-2-wrap d-flex align-items-center">
              <div
                className="call-action-3-image-2"
                data-rellax-y=""
                data-rellax-speed="0.85"
                data-rellax-percentage="0.5"
              >
                <img
                  width={386}
                  height={500}
                  src={Data.image1}
                  alt="Image Description"
                  className="wow scaleOutIn"
                  data-wow-duration="1.2s"
                />
              </div>
            </div>
          </div>
        </div>
        {/* End Images */}
      </div>
    </div>
  );
}
