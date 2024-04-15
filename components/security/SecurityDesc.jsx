"use client";

import { useTranslation } from "react-i18next";

export default function SoftwareDevDesc() {
  const { t } = useTranslation();

  return (
    <div className="flex w-[85vw] mx-auto mt-[70px] mb-[300px]">
      <div className="flex flex-col">
        <div>
          <h1 className="text-[40px] max-w-[500px] font-semibold text-cyan-600">
            {t("securityDescT1")}
          </h1>
          <span className="text-gray-600 text-[20px] flex flex-col gap-[35px] mt-[15px]">
            <p> {t("securityDescP1")} </p>
            <p> {t("securityDescP2")} </p>
            <p> {t("securityDescP3")} </p>
          </span>
        </div>
        <div className="mt-[60px]">
          <h1 className="text-[40px] max-w-[500px] font-semibold text-cyan-600">
            {t("securityDescT2")}
          </h1>
          <span className="text-gray-600 text-[20px] flex flex-col gap-[35px] mt-[15px]">
            <p> {t("securityDesc2P1")} </p>
            <p> {t("securityDesc2P2")} </p>
            <p> {t("securityDesc2P3")} </p>
            <p> {t("securityDesc2P4")} </p>
            <p> {t("securityDesc2P5")} </p>
            <p> {t("securityDesc2P6")} </p>
          </span>
        </div>
      </div>
    </div>
  );
}
