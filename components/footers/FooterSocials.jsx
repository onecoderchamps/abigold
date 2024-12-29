import React from "react";

export default function FooterSocials() {
  const socials = [
    { name: "Instagram", icon: "fa-instagram", url: "#" }
  ];

  return (
    <>
      {socials.map((social, index) => (
        <li key={index}>
          <a href={social.url} rel="noopener nofollow" target="_blank">
            <i className={social.icon} /> {social.name}
          </a>
        </li>
      ))}
    </>
  );
}
