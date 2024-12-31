"use client";

import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "700"], // Specify the weights you want
  style: ["normal", "italic"], // Specify the styles you want (optional)
});

// Registrasi Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const GoldPriceChart = () => {
  const [timeRange, setTimeRange] = useState("weekly"); // Default: Mingguan

  const dataSets = {
    weekly: {
      labels: ["Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu", "Minggu"],
      data: [960000, 965000, 970000, 960000, 975000, 980000, 970000],
    },
    monthly: {
      labels: [
        "1 Des",
        "5 Des",
        "10 Des",
        "15 Des",
        "20 Des",
        "25 Des",
        "30 Des",
      ],
      data: [950000, 960000, 970000, 960000, 980000, 990000, 970000],
    },
    yearly: {
      labels: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "Mei",
        "Jun",
        "Jul",
        "Agu",
        "Sep",
        "Okt",
        "Nov",
        "Des",
      ],
      data: [
        900000, 920000, 910000, 930000, 950000, 940000, 960000, 970000, 980000,
        990000, 995000, 970000,
      ],
    },
  };

  const chartData = {
    labels: dataSets[timeRange].labels,
    datasets: [
      {
        label: `Harga Emas (${
          timeRange === "weekly"
            ? "Mingguan"
            : timeRange === "monthly"
            ? "Bulanan"
            : "Tahunan"
        })`,
        data: dataSets[timeRange].data,
        borderColor: "rgba(255, 215, 0, 1)",
        backgroundColor: "rgba(255, 215, 0, 0.2)",
        tension: 0,
        pointStyle: "circle",
        pointRadius: 5,
        pointBackgroundColor: "rgba(255, 223, 0, 1)",
        fill: true,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: `Grafik Harga Emas (${
          timeRange === "weekly"
            ? "Minggu"
            : timeRange === "monthly"
            ? "Bulan"
            : "Tahun"
        })`,
      },
    },
    scales: {
      y: {
        beginAtZero: false,
        ticks: {
          callback: (value) => `Rp ${value.toLocaleString("id-ID")}`,
        },
      },
    },
    layout: {
      padding: {
        top: 10,
        left: 10,
        right: 10,
        bottom: 10,
      },
    },
    elements: {
      line: {
        borderWidth: 2,
      },
    },
    maintainAspectRatio: false,
  };

  return (
    <div className={montserrat.className}>
      <div className="container">
        <div className="row g-2">
          {/* Grafik di sebelah kiri */}
          <div className="col-lg-8">
            <div className="bg-white p-4 rounded shadow">
              <div className="mb-4 fs-5 fw-bold text-dark">
                Harga Terbaru: IDR 970.000
              </div>
              <div className="w-100 mt-4" style={{ height: "100%" }}>
                <Line data={chartData} options={chartOptions} />
              </div>
            </div>
          </div>

          {/* Data harga di sebelah kanan */}
          <div className="col-lg-4">
            <div className="p-4 rounded shadow">
              <div>
                <span className="fw-semibold">Harga Terakhir</span>
                <br />
                <span className="fw-normal text-muted">
                  Rp1.200.000,00/gram
                </span>
                <br />
                <span className="fw-semibold mt-3 d-block">Kenaikan</span>
                <span className="fw-normal text-muted ">Rp10.000,00/gram</span>
                <br />
                <span className="fw-semibold mt-3 d-block">
                  Perubahan Terakhir
                </span>
                <span className="fw-normal text-muted">
                  15/08/2017 <br /> 09.00 WIB
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GoldPriceChart;