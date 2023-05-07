import React from "react";
const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>Copyright © Manmeet Singh {year}</p>
    </footer>
  );
};

export default Footer;
