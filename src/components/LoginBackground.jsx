import React from "react";

import styles from "./LoginBackground.module.css";
import profile from "../images/ProfilePicture.png";
import rectangle from "../images/Rectangle.png";

const LoginBackground = () => {
  return (
    <div className={styles.container}>
      <img src={rectangle} alt="rectangle" />
      <img src={profile} alt="profile" />
    </div>
  );
};

export default LoginBackground;
