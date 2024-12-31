"use client";

import AnimatedText from "@/components/common/AnimatedText";
import Image from "next/image";
import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../app/firebaseConfig";

export default function ServiceHarga() {
  const [Data, setData] = useState({
    title: "",
    titleGold: "",
    subtitle: "",
    currentDate: "",
    desc: "",
    items: [],
  });

  const fetchData = async () => {
    try {
      const docRef = doc(db, "Productions", "GoldToday");
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
    <div className="container">
      <div className="row">
        <div className="col-lg-6 mb-md-60 mb-sm-30">
          <h2 className="section-caption mb-xs-10">{Data.title}</h2>
          <h3 className="section-title mb-30">
            <AnimatedText text={Data.subtitle} />
          </h3>
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
          <ul
            className="nav nav-tabs Hargas-tabs wow fadeInUp"
            data-wow-delay="0.55s"
            role="tablist"
          ></ul>
        </div>
        <div
          className="col-lg-6 d-flex wow fadeInLeft"
          data-wow-delay="0.55s"
          data-wow-offset={275}
        >
          <div className="container rounded-3 p-4">
            <div className="text-center p-4">
              <div className="fw-bold mb-2">{Data.titleGold}</div>
              <div
                className="text-secondary p-2 text-black"
                style={{
                  background: "#B76E7920", // Gradien ungu
                  borderRadius: "12px", // Membuat rounded
                  color: "#fff", // Teks putih untuk kontras
                  display: "inline-block", // Agar ukurannya sesuai konten
                }}
              >
                {Data.currentDate}
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-md-12">
                {Data.items.map((member, index) => (
                  <div
                    className="row align-items-center mb-4 shadow p-3 rounded"
                    style={{
                      background: "linear-gradient(135deg, #B76E79, #E3C294)", // Gradien emas
                      color: "#fff", // Teks warna putih agar kontras
                    }}
                  >
                    <div className="col-md-3">
                      <div className="mb-0 text-blue fw-bold">{member.title}</div>
                      <div className="mb-0">{member.subtitle}</div>
                    </div>
                    <div className="col-md-9 ">
                      <div className="row justify-content-end">
                        <div className="col-md-4 text-right">
                          <div className="w-100 fw-bold" style={{color: "#FFF"}}>Harga Jual</div>
                        </div>
                        <div className="col-md-4 text-end">
                          <div className="w-100" style={{color: "#FFF"}}>{member.priceSell}</div>
                        </div>
                      </div>
                      <div className="row justify-content-end">
                        <div className="col-md-4 text-right">
                          <div className="w-100" style={{color: "#FFF"}}>Buyback</div>
                        </div>
                        <div className="col-md-4 text-end">
                          <div className="w-full" style={{color: "#FFF"}}>{member.priceBuy}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
