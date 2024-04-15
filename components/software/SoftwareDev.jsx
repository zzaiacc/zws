"use client";

import { useTranslation } from "react-i18next";

export default function SoftwareDevDesc() {
  const { t } = useTranslation();

  return (
    <div className="flex w-[85vw] mx-auto mt-[70px] mb-[300px]">
      <div className="flex flex-col">
        <div>
          <h1 className="text-[40px] max-w-[620px] font-semibold text-cyan-600">
            {t("softwareDevDescT1")}
          </h1>
          <span className="text-gray-600 text-[20px] flex flex-col gap-[35px] mt-[15px]">
            <p> {t("softwareDevDescP1")} </p>
            <p> {t("softwareDevDescP2")} </p>
            <p> {t("softwareDevDescP3")} </p>
            <p> {t("softwareDevDescP4")} </p>
            <p> {t("softwareDevDescP5")} </p>
            <p> {t("softwareDevDescP6")} </p>
            <p> {t("softwareDevDescP7")} </p>
          </span>
        </div>
      </div>
    </div>
  );
}
