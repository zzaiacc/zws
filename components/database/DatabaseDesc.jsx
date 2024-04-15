"use client";

import { useTranslation } from "react-i18next";

export default function DatabaseInfo() {
  const { t } = useTranslation();

  return (
    <div className="flex w-[85vw] mx-auto mt-[70px] mb-[300px]">
      <div className="flex flex-col">
        <div>
          <h1 className="text-[40px] max-w-[500px] font-semibold text-cyan-600">
            {t("databaseDescT1")}
          </h1>
          <span className="text-gray-600 text-[20px] flex flex-col gap-[35px] mt-[15px]">
            <p> {t("databaseDescP1")} </p>
            <p> {t("databaseDescP2")} </p>
            <p> {t("databaseDescP3")} </p>
            <p> {t("databaseDescP4")} </p>
          </span>
        </div>
        <div className="mt-[60px]">
          <h1 className="text-[40px] max-w-[500px] font-semibold text-cyan-600">
            {t("databaseDescT2")}
          </h1>
          <span className="text-gray-600 text-[20px] flex flex-col gap-[35px] mt-[15px]">
            <p> {t("databaseDesc2P1")} </p>
            <p> {t("databaseDesc2P2")} </p>
            <p> {t("databaseDesc2P3")} </p>
            <p> {t("databaseDesc2P4")} </p>
          </span>
        </div>
      </div>
    </div>
  );
}
