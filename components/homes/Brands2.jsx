import React from "react";
import Image from "next/image";
export default function Brands2() {
  return (
    <div className="container position-relative">
      <div className="row">
        <div className="col-md-8 offset-md-2 text-center">
          <h2 className="section-title-tiny mb-30">Telah Tersertifikasi</h2>

          <div className="logo-grid">
            <Image
              className=""
              src="/assets/images/clients-logos/client-1.png"
              width="110"
              height="33"
              alt="Image description is here"
            />
            <Image
              className=""
              src="/assets/images/clients-logos/client-2.png"
              width="119"
              height="33"
              alt="Image description is here"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
