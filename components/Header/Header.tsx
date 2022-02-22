import React from "react";
import { useState, useEffect } from "react";
import styles from "./Header.module.scss";
import Link from "next/link";

export default function Header() {
  const [sidemenu, setSidemenu] = useState(false);

  const showSideMenu = () => setSidemenu(!sidemenu);

  const [show, handleShow] = useState(false);

  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => window.removeEventListener("scroll", transitionNavBar);
  });

  return (
    <div className={styles.header}>
      <div
        className={`${styles.headerContainer} ${
          show && styles.nav__transluscent
        }`}
      >
        <div className={styles.headerLeft}>
          <span className={styles.menuIcon} onClick={showSideMenu}>
            <img src="/assets/icons/menu-icon.svg" className="" alt="" />
          </span>
        </div>

        <div className={styles.headerCenter}></div>
        <div className={styles.headerRight}>
          <div className={styles.headerIcons}>
            <Link href="/">
              <div className={styles.headerIconItem}>
                <p>Images</p>
              </div>
            </Link>

            <Link href="/video-page">
              <div className={styles.headerIconItem}>
                <p>Videos</p>
              </div>
            </Link>
          </div>
        </div>
      </div>

      <div className={styles.sideBar}>
        <img
          src="/assets/icons/close-icon.svg"
          alt=""
          className="closeIcon"
          onClick={showSideMenu}
        />
      </div>
    </div>
  );
}
