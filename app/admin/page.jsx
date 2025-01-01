"use client";

import React, { useState, useEffect } from "react";
import Footer1 from "@/components/homes/Footer1";
import { menuItems } from "@/data/menu";
import Header1 from "@/components/headers/Header";
import { onAuthStateChanged } from "firebase/auth";
import { dbauth } from "../../app/firebaseConfig";

export default function Home() {
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(dbauth, async (user) => {
      if (user) {
        if(user.stsTokenManager.isExpired === true)
        {
          window.location.href = "/login"
        }
      } else {
        console.log("No user signed in");
      }
    });

    return () => unsubscribe(); // Cleanup listener on unmount
  }, []);

  return (
    <>
      <div className="theme-main">
        <div className="page" id="top">
          <main id="main">sudah masuk</main>
        </div>{" "}
      </div>
    </>
  );
}
