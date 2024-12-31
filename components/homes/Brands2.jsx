"use client";

import React from "react";
import Image from "next/image";

import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../app/firebaseConfig";


export default function Brands() {

  const [Data, setData] = useState({
    title: "",
    items: [],
  });

  const fetchData = async () => {
    try {
      const docRef = doc(db, "Productions", "Sertifikasi");
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
        <div className="col-md-8 offset-md-2 text-center">
          <h2 className="section-title-tiny mb-50">
          {Data.title}
          </h2>

          <div className="logo-grid">
          {Data.items.map((item, index) => (
            <img
              className=""
              src={item.image}
              width="210"
              height="33"
              alt="Image description is here"
            />
          ))}
          </div>
        </div>
      </div>
    </div>
  );
}
