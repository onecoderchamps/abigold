"use client";

import AnimatedText from "@/components/common/AnimatedText";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../app/firebaseConfig";

export default function Service() {
  const [Data, setData] = useState({
    title: "",
    subtitle: "",
    desc: "",
    items: [],
  });

  const fetchData = async () => {
    try {
      const docRef = doc(db, "Productions", "Layanan");
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
      <div className="row">
        <div className="col-lg-6 mb-md-60 mb-sm-30">
          {/* Title and Subtitle */}
          <h2 className="section-caption mb-xs-10">{Data.title}</h2>
          <h3 className="section-title mb-30">
            <AnimatedText text={Data.subtitle} />
          </h3>

          {/* Description */}
          <div className="row">
            <div className="col-lg-10">
              <p
                className="section-descr mb-50 mb-sm-30 wow fadeInUp"
                data-wow-delay="0.4s"
              >
                {Data.desc}
              </p>
            </div>
          </div>

          {/* Navigation Tabs */}
          <ul
            className="nav nav-tabs services-tabs wow fadeInUp"
            data-wow-delay="0.55s"
            role="tablist"
          >
            {Data.items.map((member, index) => (
              <li key={index} role="presentation">
                <a
                  href={`#services-item-${index + 1}`}
                  className={index === 0 ? "active" : ""}
                  aria-controls={`services-item-${index + 1}`}
                  role="tab"
                  aria-selected={index === 0 ? "true" : "false"}
                  data-bs-toggle="tab"
                >
                  {member.title} <span className="number">{index + 1}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Tab Content */}
        <div
          className="col-lg-6 d-flex wow fadeInLeft"
          data-wow-delay="0.55s"
          data-wow-offset={275}
        >
          <div className="tab-content services-content">
            {Data.items.map((member, index) => (
              <div
                key={index}
                className={`tab-pane services-content-item fade ${
                  index === 0 ? "show active" : ""
                }`}
                id={`services-item-${index + 1}`}
                role="tabpanel"
              >
                <div className="services-text">
                  <div className="services-text-container">
                    <p className="text-gray mb-0">{member.desc}</p>
                  </div>
                </div>
                <img
                  width={945}
                  height={1016}
                  className="services-image"
                  src={member.image}
                  alt={`Image for ${member.title}`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
