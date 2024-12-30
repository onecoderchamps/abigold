import React from "react";

export default function FooterSocials() {
  const socials = [
    { name: "Instagram", icon: "fa-instagram", url: "#" }
  ];

  return (
    <>
      {socials.map((social, index) => (
        <li key={index} className="text-white">
          <a href={social.url} rel="noopener nofollow" target="_blank">
            <div className="text-white">
              {social.name}
              </div>
          </a>
        </li>
      ))}
    </>
  );
}
