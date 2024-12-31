"use client";
import { useState } from "react";
import { getFirestore, collection, doc, getDoc, query, where, getDocs } from "firebase/firestore";
import { db } from "../../app/firebaseConfig";

export default function NewsLetter() {
  const [formData, setFormData] = useState({
    name: "",
  });

  const [productData, setProductData] = useState(null); // State untuk menyimpan data produk
  const [isVerified, setIsVerified] = useState(false); // State untuk menentukan apakah produk telah diverifikasi
  const [errorMessage, setErrorMessage] = useState(""); // State untuk pesan error

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const goldCollectionRef = collection(db, "Productions", "Agent", "listGold");
      const goldQuery = query(goldCollectionRef, where("sn", "==", formData.name));

      const querySnapshot = await getDocs(goldQuery);
      if (!querySnapshot.empty) {
        const goldData = querySnapshot.docs[0].data();
        if (goldData.isVerify) {
          setErrorMessage("Serial Number Terdaftar di Sistem Kami");
          setProductData(goldData); // Simpan data produk jika berhasil
          setIsVerified(true);
        } else {
          setErrorMessage("Serial Number Belum Terverifikasi di Sistem Kami");
          setProductData(null);
          setIsVerified(false);
        }
      } else {
        setErrorMessage("Serial Number Tidak Terdaftar di Sistem Kami");
        setProductData(null);
        setIsVerified(false);
      }
    } catch (error) {
      console.error("Error fetching document: ", error);
      setProductData(null);
      setIsVerified(false);
      setErrorMessage("Terjadi kesalahan saat memproses permintaan Anda.");
    }
  };

  return (
    <div className="container position-relative p-5">
      <div className="row">
        <div className="col-md-8 offset-md-2 col-xl-6 offset-xl-3 wow fadeInUp">
          <h4 className="section-title-small text-center mb-40">
            Verifikasi ABI Gold
          </h4>
          <form
            onSubmit={(e) => e.preventDefault()}
            id="mailchimp"
            className="form"
          >
            <div className="d-sm-flex justify-content-between mb-20">
              <label htmlFor="newsletter-email" className="visually-hidden">
                Your email
              </label>
              <input
                className="newsletter-field input-lg round"
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Masukkan Serial Number"
                required
                aria-required="true"
              />
              <button
                onClick={handleSubmit}
                aria-controls="subscribe-result"
                className="btn btn-mod btn-large btn-round btn-hover-anim align-middle me-2 me-sm-5"
                    style={{
                      backgroundColor: "#B76E79",  // Rose Gold
                      color: "#fff",                // White text
                      border: "2px solid #B76E79",  // Rose Gold border
                    }}
              >
                <span>Konfirmasi</span>
              </button>
            </div>
          </form>
        </div>
        <div className="mt-4 text-danger fw-semibold text-center">{errorMessage}</div>
        {isVerified && productData && (
          <div className="w-100 mt-4 bg-white border border-secondary p-4 shadow-sm">
            <h4 className="fs-5 fw-semibold mb-3">Detail Produk</h4>
            <table className="table table-bordered text-start">
              <thead>
                <tr>
                  <th>Keterangan</th>
                  <th>Data</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Serial Number</td>
                  <td>{productData.sn}</td>
                </tr>
                <tr>
                  <td>Batch</td>
                  <td>{productData.batch}</td>
                </tr>
                <tr>
                  <td>Waktu Pembuatan</td>
                  <td>{productData.date}</td>
                </tr>
                <tr>
                  <td>Notes</td>
                  <td>{productData.notes}</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
