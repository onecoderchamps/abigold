"use client";
import AnimatedText from "@/components/common/AnimatedText";
import { parallaxMouseMovement } from "@/utlis/parallax";
import { useEffect, useState } from "react";

export default function Hero1() {
  useEffect(() => {
    parallaxMouseMovement();
  }, []);

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
                  PT Aurum Berkah Indonesia
                </h2>
                <h1 className="hs-title-1 mb-30">
                  <AnimatedText
                    text={"Investasi Terpercaya dan Menguntungkan"}
                  />
                </h1>

                <p
                  className="section-descr mb-50 wow fadeInUp"
                  data-wow-delay="0.6s"
                  data-wow-duration="1.2s"
                >
                  Dapatkan emas berkualitas dengan layanan terbaik dan jaminan
                  harga kompetitif hanya di ABI Gold
                </p>
                <div
                  className="local-scroll mt-n10 wow fadeInUp wch-unset"
                  data-wow-delay="0.7s"
                  data-wow-duration="1.2s"
                  data-wow-offset={0}
                >
                  <a
                    href="#about"
                    className="btn btn-mod btn-large btn-round btn-hover-anim align-middle me-2 me-sm-5 mt-10"
                  >
                    <span>Pesan Sekarang</span>
                  </a>
                  <a
                    href="#about"
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
                      src="https://demo.webdeveloperjogja.com/goldabi/images/produk/emas-batangan-1-gram-32.jpeg.webp"
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
                      src="https://demo.webdeveloperjogja.com/goldabi/images/produk/1-dinar-425-gram-45.jpeg.webp"
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
                      src="https://demo.webdeveloperjogja.com/goldabi/images/produk/1-dinar-425-gram-45.jpeg.webp"
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
