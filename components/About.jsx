"use client";

import Image from "next/image";
import { useTranslation } from "react-i18next";
import aboutUs_home from "../public/aboutUs_home.svg";
import Link from "next/link";

export default function About({ locale }) {
  const { t } = useTranslation();

  return (
    <div className="flex justify-center items-center bg-white py-[100px]">
      <div className=" max-w-[85vw] mx-auto   mb-[130px]">
        <div className="text-center items-center flex flex-col">
          <h1 className="text-[50px] font-semibold text-cyan-600">
            {t("about")}
          </h1>
          <p className="text-gray-500 font-semibold mb-[65px]">
            {t("aboutUsDesc")}
          </p>
          <Image src={aboutUs_home} />
        </div>
        <div className="text-left  flex flex-col">
          <h1 className="text-cyan-600 font-semibold text-[30px] mb-[15px] mt-[70px]">
            {t("whoWeAre")}
          </h1>
          <p className="max-w-[444px] font-medium text-[25px]">
            {t("whoWeAreDesc")}
          </p>
          <div className="flex text-[18] text-gray-500 mt-[40px] gap-10">
            <p className="w-[530px]"> {t("whoWeAreText1")}</p>
            <p className="hidden lg:block w-[530px]"> {t("whoWeAreText2")}</p>
          </div>
          <Link href={`/${locale}/about`} className="text-right mt-10">
            <h1 className="font-semibold text-blue-600 text-[20px]">
              {" "}
              {t("moreAboutUs")}{" "}
            </h1>
          </Link>
        </div>
      </div>
    </div>
  );
}
