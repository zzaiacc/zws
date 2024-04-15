"use client";

import Image from "next/image";
import { useTranslation } from "react-i18next";
import dbIcon from "../public/bd_icon.svg";
import infraIcon from "../public/infra_icon.svg";
import softwareDev from "../public/softwareDev_icon.svg";
import security from "../public/security_icon.svg";
import Link from "next/link";

export default function Services({ locale }) {
  const { t } = useTranslation();

  return (
    <div className="flex justify-center items-center">
      <div className=" max-w-[85vw] mx-auto mt-[130px]  mb-[130px]">
        <div className="text-center items-center flex flex-col">
          <h1 className="text-[50px] font-semibold text-cyan-600">
            {t("ourServices")}
          </h1>
          <p className="w-[70%] text-gray-500 font-semibold">
            {t("ourServicesSubT")}
          </p>
        </div>
        <div className="flex justify-center align-middle">
          <div className="grid lg:grid-cols-2 md:grid-cols-1 gap-[100px] mt-[100px] ">
            <div className="bg-white p-4 rounded-lg  lg:w-[550px] md:w-[500px] xs:w-[300px] relative flex flex-col justify-center items-center">
              <Image src={dbIcon} className="w-[70px] absolute -top-8" />
              <h2 className="text-[18px] font-bold text-gray-700 mb-2 text-center pt-[40px]">
                {t("database")}
              </h2>
              <p className="text-justify px-[20px] mb-[40px] leading-loose font-light">
                {t("databaseCardDesc")}
              </p>
              <Link href={`/${locale}/database`}>
                <p className="text-blue-600 font-semibold"> {t("seeMore")}</p>
              </Link>
            </div>
            <div className="bg-white p-4 rounded-lg  lg:w-[550px] md:w-[500px] xs:w-[300px] relative flex flex-col justify-center items-center">
              <Image src={infraIcon} className="w-[70px] absolute -top-8" />
              <h2 className="text-[18px] font-bold text-gray-700 mb-2 text-center pt-[40px]">
                {t("infra")}
              </h2>
              <p className="text-justify px-[20px] mb-[40px] leading-loose font-light">
                {t("infraCardDesc")}
              </p>
              <Link href={`/${locale}/infrastructure`}>
                <p className="text-blue-600 font-semibold"> {t("seeMore")}</p>
              </Link>
            </div>
            <div className="bg-white p-4 rounded-lg  lg:w-[550px] md:w-[500px] xs:w-[300px] relative flex flex-col justify-center items-center">
              <Image src={softwareDev} className="w-[70px] absolute -top-8" />
              <h2 className="text-[18px] font-bold text-gray-700 mb-2 text-center pt-[40px]">
                {t("softwareDevelopment")}
              </h2>
              <p className="text-justify px-[20px] mb-[40px] leading-loose font-light">
                {t("softwareDevelopmentCardDesc")}
              </p>
              <Link href={`/${locale}/software`}>
                <p className="text-blue-600 font-semibold"> {t("seeMore")}</p>
              </Link>
            </div>
            <div className="bg-white p-4 rounded-lg  lg:w-[550px] md:w-[500px] xs:w-[300px] relative flex flex-col justify-center items-center">
              <Image src={security} className="w-[70px] absolute -top-8" />
              <h2 className="text-[18px] font-bold text-gray-700 mb-2 text-center pt-[40px]">
                {t("security")}
              </h2>
              <p className="text-justify px-[20px] mb-[40px] leading-loose font-light">
                {t("securityCardDesc")}
              </p>
              <Link href={`/${locale}/security`}>
                <p className="text-blue-600 font-semibold"> {t("seeMore")}</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
