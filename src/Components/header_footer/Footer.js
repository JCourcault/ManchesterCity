import React from "react";

import Icon from "../ui/Icon";

const Footer = () => {
  return (
    <footer className="bck_blue">
      <div className="footer_logo">
        <Icon link={true} linkTo="/" width="70px" height="70px"></Icon>
      </div>
      <div className="footer_discl">
        Manchster city 2019. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
