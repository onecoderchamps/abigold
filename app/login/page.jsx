"use client";

import React, { useState, useEffect } from "react";
import { signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { dbauth } from "../../app/firebaseConfig";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      await signInWithEmailAndPassword(dbauth, email, password);

      onAuthStateChanged(dbauth, async (user) => {
        if (user) {
          const token = await user.getIdToken();
          localStorage.setItem("token", token);
          window.location.href = "/admin";
          setMessage("Login successful");
        } else {
          setMessage("Login failed: User not authenticated.");
        }
      });
    } catch (error) {
      setMessage(error.message || "An error occurred. Please try again.");
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(dbauth, async (user) => {
      if (user) {
        if (user.stsTokenManager.isExpired === false) {
          window.location.href = "/admin";
        }
      } else {
        console.log("No user signed in");
      }
    });

    return () => unsubscribe(); // Cleanup listener on unmount
  }, []);

  return (
    <div className="d-flex flex-column justify-content-center align-items-center min-vh-100">
      <div className="p-4" style={{ maxWidth: "400px", width: "100%" }}>
        <div className="text-center mb-4">
          <img
            src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
            alt="Your Company"
            style={{ height: "40px" }}
          />
          <h2 className="mt-3">Sign in to ABI Panel</h2>
        </div>

        <form onSubmit={handleLogin}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <div className="input-group">
              <input
                type={showPassword ? "text" : "password"}
                className="form-control"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button
                type="button"
                className="btn btn-outline-secondary"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "🙈" : "👁️"}
              </button>
            </div>
          </div>

          <div className="d-grid mt-5">
            <button type="submit" className="btn btn-primary">
              Sign in
            </button>
          </div>
        </form>

        {message && <p className="mt-3 text-center text-danger">{message}</p>}
      </div>
    </div>
  );
};

export default Login;
