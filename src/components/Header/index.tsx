import React from "react";

import Logo from "../../assets/logo.png";
import styles from "./styles.module.scss";

function Header() {
  return (
    <header className={styles.headerContainer}>
      <img src={Logo} alt="Logo" />
    </header>
  );
}

export default Header;
