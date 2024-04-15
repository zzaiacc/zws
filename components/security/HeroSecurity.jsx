"use client";

import { useTranslation } from "react-i18next";

export default function HeroSoftwareDev() {
  const { t } = useTranslation();

  return (
    <div className="bg-yellow-50 mt-[-115px]">
      <div className="max-w-[85vw] flex justify-between mx-auto items-center my-auto h-screen">
        <div>
          <h2 className="text-cyan-600 font-semibold text-[25px]">
            {t("services")}
          </h2>
          <h1 className="lg:text-[60px] leading-[0.9] font-semibold text-gray-600 mt-[15px]">
            {t("security")}
          </h1>
          <h3 className="text-[20px] py-[30px] max-w-[55%] text-gray-500">
            {t("securitySubT")}
          </h3>
        </div>
        <div>
          <img
            src="/security_hero_img.png"
            alt="securityIllustration"
            className="w-[600px]"
          />
        </div>
      </div>
    </div>
  );
}
