"use client";
import AnimatedText from "@/components/common/AnimatedText";
import React from "react";
import bcrypt from 'bcryptjs';

import { useEffect, useState } from "react";
import {
  collection, 
  doc, 
  query, 
  where, 
  getDocs, 
  addDoc,
  getDoc
} from "firebase/firestore";
import { db } from "../../app/firebaseConfig";

export default function Contact() {
  const [Data, setData] = useState({
    title: "",
    subtitle: "",
    phoneWa: "",
    phone: "",
    email: "",
    address: "",
  });

  const hashedPassword = bcrypt.hash("abigoldjaya", 10);

  const [formData, setFormData] = useState({
    email: "",
    password: hashedPassword,
    name: "",
    address: "",
    phone: "",
    latitude: 0,
    longitude: 0,
    isActive: true,
    isVerify: false,
    role: "agentRole",
  });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const agentDocRef = doc(collection(db, "Productions"), "Agent");
      const listAgentRef = collection(agentDocRef, "listAgent");
  
      // Query to check if email already exists
      const emailQuery = query(listAgentRef, where("email", "==", formData.email));
      const querySnapshot = await getDocs(emailQuery);
  
      if (!querySnapshot.empty) {
        setMessage("Email sudah terdaftar. Harap gunakan email berbeda.");
        return; // Exit if email exists
      }
  
      // Add new document if email does not exist
      await addDoc(listAgentRef, formData);
      setMessage("Pendaftaran Berhasil, silahkan hubungi admin melalui whatsapp untuk aktifasi akun");
    } catch (error) {
      console.error("Error saving data: ", error);
      setMessage("Failed to save data. Please try again.");
    }
  };
  

  const fetchData = async () => {
    try {
      const docRef = doc(db, "Productions", "Contact");
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setData(docSnap.data());
        localStorage.setItem("phone", docSnap.data().phone);
        localStorage.setItem("phoneWa", docSnap.data().phoneWa);
        localStorage.setItem("email", docSnap.data().email);
        localStorage.setItem("address", docSnap.data().address);
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
        <div className="col-lg-6">
          <div className="row mb-50">
            <div className="col-lg-10">
              <h2 className="section-caption mb-xs-10">{Data.title}</h2>
              <h3 className="section-title mb-0">
                <span className="wow charsAnimIn" data-splitting="chars">
                  <AnimatedText text={Data.subtitle} />
                </span>
              </h3>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="row mb-60 mb-sm-50">
            {/* Contact Item */}
            <div className="col-sm-6 mb-xs-30 d-flex align-items-stretch">
              <div
                className="alt-features-item border-left mt-0 wow fadeScaleIn"
                data-wow-delay=".3s"
              >
                <div className="alt-features-icon">
                  <svg
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fillRule="evenodd"
                    clipRule="evenodd"
                  >
                    <path d="M24 21h-24v-18h24v18zm-23-16.477v15.477h22v-15.477l-10.999 10-11.001-10zm21.089-.523h-20.176l10.088 9.171 10.088-9.171z" />
                  </svg>
                  <div className="alt-features-icon-s">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm3.445 17.827c-3.684 1.684-9.401-9.43-5.8-11.308l1.053-.519 1.746 3.409-1.042.513c-1.095.587 1.185 5.04 2.305 4.497l1.032-.505 1.76 3.397-1.054.516z" />
                    </svg>
                  </div>
                </div>
                <h4 className="alt-features-title">Hubungi Kami</h4>
                <div className="alt-features-descr clearlinks">
                  <div>
                    <a href={`mailto:${Data.email}`}>{Data.email}</a>
                  </div>
                  <div>{Data.phone}</div>
                </div>
              </div>
            </div>
            {/* End Contact Item */}
            {/* Contact Item */}
            <div className="col-sm-6 d-flex align-items-stretch">
              <div
                className="alt-features-item border-left mt-0 wow fadeScaleIn"
                data-wow-delay=".5s"
              >
                <div className="alt-features-icon">
                  <svg
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fillRule="evenodd"
                    clipRule="evenodd"
                  >
                    <path d="M12 10c-1.104 0-2-.896-2-2s.896-2 2-2 2 .896 2 2-.896 2-2 2m0-5c-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3-1.343-3-3-3m-7 2.602c0-3.517 3.271-6.602 7-6.602s7 3.085 7 6.602c0 3.455-2.563 7.543-7 14.527-4.489-7.073-7-11.072-7-14.527m7-7.602c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602" />
                  </svg>
                </div>
                <h4 className="alt-features-title">Alamat Kami</h4>
                <div className="alt-features-descr">{Data.address}</div>
              </div>
            </div>
            {/* End Contact Item */}
          </div>
        </div>
      </div>
      <div className="row wow fadeInUp" data-wow-delay="0.5s">
        <div className="col-md-6 mb-sm-50">
          {/* Contact Form */}
          <form
            onSubmit={(e) => e.preventDefault()}
            className="form contact-form pe-lg-5"
            id="contact_form"
          >
            <div className="row">
              <div className="col-lg-6">
                {/* Name */}
                <div className="form-group">
                  <label htmlFor="name">Nama Lengkap</label>
                  <input
                    className="input-lg round form-control"
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Masukkan Nama Lengkap"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="col-lg-6">
                {/* Email */}
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="input-lg round form-control"
                    placeholder="Masukkan email anda"
                    required
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="col-lg-6">
                {/* Email */}
                <div className="form-group">
                  <label htmlFor="phone">No Ponsel</label>
                  <input
                    type="number"
                    name="phone"
                    id="phone"
                    className="input-lg round form-control"
                    placeholder="Masukkan nomor ponsel"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="col-lg-6">
                {/* Email */}
                <div className="form-group">
                  <label htmlFor="email">Domisili</label>
                  <input
                    type="text"
                    name="address"
                    id="address"
                    className="input-lg round form-control"
                    placeholder="Masukkan alamat anda"
                    required
                    value={formData.address}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
            {/* Message */}
            <div className="row">
              <div className="col-lg-5">
                {/* Send Button */}
                <div className="pt-20">
                  <button
                    className="submit_btn btn btn-mod btn-large btn-round btn-hover-anim"
                    onClick={handleSubmit}
                    style={{
                      backgroundColor: "#B76E79", // Rose Gold
                      color: "#fff", // White text
                      border: "2px solid #B76E79", // Rose Gold border
                    }}
                  >
                    <span>Daftar Sekarang</span>
                  </button>
                </div>
              </div>
              {message && (
                <div className="card-footer text-center mt-4">
                  <p className="text-success">{message}</p>
                </div>
              )}
              {/* <div className="col-lg-7">
                <div className="form-tip pt-20 pt-sm-0 mt-sm-20">
                  <i className="icon-info size-16" />
                  Semua kolom wajib diisi. Dengan mengirimkan formulir ini, Anda
                  setuju dengan <a href="/syarat">
                    Syarat &amp; Ketentuan
                  </a>{" "}
                  serta <a href="/privacy">Kebijakan Privasi.</a>.
                </div>
              </div> */}
            </div>
            <div
              id="result"
              role="region"
              aria-live="polite"
              aria-atomic="true"
            />
          </form>
          {/* End Contact Form */}
        </div>
        <div className="col-md-6 d-flex align-items-stretch">
          {/* Google Map */}
          <div className="map-boxed">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.5298936384697!2d106.8193718756367!3d-6.193592360680227!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f42108e6d503%3A0x7d7fe17ad64a053f!2sPlaza%20Indonesia!5e0!3m2!1sid!2sid!4v1735521745887!5m2!1sid!2sid"
              width={600}
              height={450}
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          {/* End Google Map */}
        </div>
      </div>
    </div>
  );
}
