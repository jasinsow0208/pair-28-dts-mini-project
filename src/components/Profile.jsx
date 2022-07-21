import React from "react";

import { useNavigate } from "react-router-dom";

import img1 from "../images/Profile/ProfilePicture.png";
import img2 from "../images/Profile/ProfilePicture-1.png";
import img3 from "../images/Profile/ProfilePicture-2.png";
import img4 from "../images/Profile/ProfilePicture-3.png";
import styles from "./Profile.module.css";

function Profile(props) {
  const navigate = useNavigate();

  const buttonLogoutOnClickHandler = () => {
    // Kita akan memanggil fungsi keluarDariApps di sini
    navigate("/login");
  };

  const img = props.imageName;
  let imgChoose = img4;
  if (img === "1") {
    imgChoose = img1;
  } else if (img === "2") {
    imgChoose = img2;
  } else if (img === "3") {
    imgChoose = img3;
  } else {
    imgChoose = img4;
  }

  return (
    <div className={styles.imageLayout}>
      <button onClick={buttonLogoutOnClickHandler}>
        <img src={imgChoose} alt={img} />
      </button>
    </div>
  );
}

export default Profile;
