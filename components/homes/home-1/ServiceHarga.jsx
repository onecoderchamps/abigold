import AnimatedText from "@/components/common/AnimatedText";
import Image from "next/image";
import React from "react";

export default function ServiceHarga() {
  return (
    <div className="container position-relative">
      <div className="row">
        <div className="col-lg-6 mb-md-60 mb-sm-30">
          <h2 className="section-caption mb-xs-10">Info Terbaru</h2>
          <h3 className="section-title mb-30">
            <AnimatedText text="Harga Emas Hari Ini" />
          </h3>
          <div className="row">
            <div className="col-lg-10">
              <p
                className="section-descr mb-50 mb-sm-30 wow fadeInUp"
                data-wow-delay="0.4s"
              >
               Pilihan emas terbaik untuk investasi anda. Kami menyediakan solusi investasi yang mudah diakses, terjangkau, dan menguntungkan bagi setiap lapisan masyarakat, dengan pelayanan yang cepat, ramah, dan profesional.
              </p>
            </div>
          </div>
          <ul
            className="nav nav-tabs Hargas-tabs wow fadeInUp"
            data-wow-delay="0.55s"
            role="tablist"
          >
          </ul>
        </div>
        <div
          className="col-lg-6 d-flex wow fadeInLeft"
          data-wow-delay="0.55s"
          data-wow-offset={275}
        >
          <div className="tab-content services-content">
            {/* Tab Content */}
            <div
              className="tab-pane services-content-item show fade active"
              id="services-item-1"
              role="tabpanel"
            >
              <img
                width={945}
                height={1016}
                className="services-image"
                src="https://demo.webdeveloperjogja.com/goldabi/images/page/harga-emas--56.png.webp"
                alt="Image Description"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
