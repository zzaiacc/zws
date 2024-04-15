"use client";

import Image from "next/image";
import { useTranslation } from "react-i18next";
import zaiacLogo from "../public/zaiac-logo.svg";
import styles from "../styles/Nav.module.css";
import Link from "next/link";
import { useState } from "react";

export default function Navbar({ locale }) {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const { t } = useTranslation();

  return (
    <div className="flex items-center justify-between py-8 lg:px-[180px] xs:px-[40px]">
      <a href="/">
        <Image src={zaiacLogo} alt="KZ Logo" width={70} />
      </a>
      <nav>
        <section className="MOBILE-MENU flex lg:hidden">
          <div
            className="HAMBURGER-ICON space-y-2 hover:scale-110"
            onClick={() => setIsNavOpen((prev) => !prev)}
          >
            <span className="block h-0.5 w-8  bg-yellow-400"></span>
            <span className="block h-0.5 w-8  bg-yellow-400"></span>
            <span className="block h-0.5 w-8  bg-yellow-400"></span>
          </div>

          <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
            <div
              className="absolute top-0 right-0 px-8 py-8 "
              onClick={() => setIsNavOpen(false)}
            >
              <svg
                className="h-8 w-8 text-white"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>
            <ul className="flex flex-col items-center justify-between min-h-[100px]  text-white z-50 mt-[100px]">
              <li className=" my-5">
                <a href={`/${locale}/about`}>About</a>
              </li>
              <li className=" my-5">
                <a href={`/${locale}/about`}>Projects</a>
              </li>
              <li className=" my-5">
                <a href={`/${locale}/about`}>Contact</a>
              </li>
              <li>
                <div className="w-fit">
                  <Link href={"/"}>
                    <p className="bg-orange-500 py-[12px] px-[28px]  text-white hover:bg-orange-400 duration-300">
                      {t("contactUs")}
                    </p>
                  </Link>
                </div>
              </li>
            </ul>
          </div>
        </section>

        <ul className="DESKTOP-MENU hidden space-x-8 lg:flex text-[12px]">
          <li>
            <a href={`/${locale}`} class={styles.navLinks}>
              <span class={styles.navTextLinks}>Home</span>
            </a>
          </li>
          <li>
            <a href="#" class={styles.navLinks}>
              <span class={styles.navTextLinks}>Projects</span>
            </a>
          </li>
          <li>
            <a href="#" class={styles.navLinks}>
              <span class={styles.navTextLinks}>Contact</span>
            </a>
          </li>
          <li>
            <a href="#" class={styles.navLinks}>
              <span class={styles.navTextLinks}>About</span>
            </a>
          </li>
        </ul>
      </nav>
      <style>{`
        .hideMenuNav {
          display: none;
        }
        .showMenuNav {
          display: block;
          position: absolute;
          width: 100%;
          height: 100vh;
          top: 0;
          left: 0;
          background: #4580D2;
          z-index: 10;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
      `}</style>
      <div class="DESKTOP-MENU hidden  items-center lg:flex lg:flex-col  gap-5   sm:pt-3 text-[12px]">
        <div className="w-fit">
          <Link href={"/"}>
            <p className="bg-orange-500 py-[12px] px-[28px]  text-white hover:bg-orange-400 duration-300">
              {t("contactUs")}
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}
