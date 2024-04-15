"use client";

import { useTranslation } from "react-i18next";

export default function HeroAbout() {
  const { t } = useTranslation();

  return (
    <div className="">
      <div className="max-w-[85vw] flex flex-col justify-center items-center mx-auto">
        <h2 className="mb-[100px] text-[70px] text-cyan-600 font-semibold mt-[50px]">
          {" "}
          {t("about")}
        </h2>
        <img
          src="/aboutUs_hero_img.svg"
          alt="aboutUs_Illustration"
          className="max-w-[65vw]"
        />
      </div>
    </div>
  );
}
