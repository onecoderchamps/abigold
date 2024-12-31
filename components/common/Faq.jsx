"use client";
import { faqDataMain } from "@/data/faqs";
import React, { useEffect, useRef, useState } from "react";

export default function Faq({ faqData = faqDataMain }) {
  const questionRefs = useRef([]);
  const answerRefs = useRef([]);
  const [currentIndex, setCurrentIndex] = useState(-1); // Semua tab tertutup secara default
  const [isDataReady, setIsDataReady] = useState(false); // Untuk memastikan data sudah siap

  useEffect(() => {
    if (!isDataReady) return; // Jangan jalankan efek jika data belum tersedia

    questionRefs.current.forEach((el) => {
      el.classList.remove("active");
    });
    answerRefs.current.forEach((el) => {
      el.style.height = "0px";
      el.style.overflow = "hidden";
      el.style.transition = "all 0.5s ease-in-out";
      el.style.marginBottom = "0px";
    });

    if (currentIndex !== -1) {
      questionRefs.current[currentIndex].classList.add("active");
      const element = answerRefs.current[currentIndex];
      element.style.height = element.scrollHeight + "px";
      element.style.overflow = "hidden";
      element.style.transition = "all 0.5s ease-in-out";
      element.style.marginBottom = "1.55em";
    }
  }, [currentIndex, isDataReady]);

  useEffect(() => {
    if (faqData && faqData.length > 0) {
      setIsDataReady(true); // Tandai bahwa data sudah siap diproses
    }
  }, [faqData]);

  return (
    <dl className="toggle">
      {faqData.map((item, index) => (
        <React.Fragment key={index}>
          <dt
            onClick={() => {
              setCurrentIndex((pre) => (pre === index ? -1 : index));
            }}
          >
            <a ref={(el) => (questionRefs.current[index] = el)}>
              {item.title}
            </a>
          </dt>
          <dd
            ref={(el) => (answerRefs.current[index] = el)}
            className="black faqAnswer"
          >
            {item.desc}
          </dd>
        </React.Fragment>
      ))}
    </dl>
  );
}
