"use client";

import Image from "next/image";
import { useTranslation } from "react-i18next";
import customization from "../public/customization_icon.svg";

export default function Solutions() {
  const { t } = useTranslation();

  return (
    <div className="flex justify-center items-center bg-blue-100 py-[100px] ">
      <div className="  max-w-[85vw] mx-auto ">
        <div className="text-center items-center flex flex-col">
          <h1 className="text-[50px] font-semibold text-cyan-600">
            {t("ourSolutions")}
          </h1>
          <p className="w-[70%] text-gray-500 font-semibold">
            {t("ourSolutionsSubT")}
          </p>
        </div>
        <div className="flex justify-center align-middle">
          <div className="grid lg:grid-cols-3 md:grid-cols-1 gap-[100px] mt-[100px] ">
            <div className="bg-white lg:w-[350px] md:w-[500px] xs:w-[300px] relative flex flex-col justify-start border-2 border-cyan-500 p-[40px]">
              <Image src={customization} className="w-[50px]" />
              <h2 className="text-[18px] font-extrabold text-gray-700  text-left py-[20px]">
                {t("customization")}
              </h2>
              <p className="text-left leading-loose font-light">
                {t("customizationDesc")}
              </p>
            </div>
            <div className="bg-white lg:w-[350px] md:w-[500px] xs:w-[300px] relative flex flex-col justify-start border-2 border-cyan-500 p-[40px]">
              <Image src={customization} className="w-[50px]" />
              <h2 className="text-[18px] font-extrabold text-gray-700  text-left py-[20px]">
                {t("integration")}
              </h2>
              <p className="text-left leading-loose font-light">
                {t("integrationDesc")}
              </p>
            </div>
            <div className="bg-white lg:w-[350px] md:w-[500px] xs:w-[300px] relative flex flex-col justify-start border-2 border-cyan-500 p-[40px]">
              <Image src={customization} className="w-[50px]" />
              <h2 className="text-[18px] font-extrabold text-gray-700  text-left py-[20px]">
                {t("serviceClient")}
              </h2>
              <p className="text-left leading-loose font-light">
                {t("serviceClientDesc")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
