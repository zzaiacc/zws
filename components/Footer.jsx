"use client";

import Image from "next/image";
import { useTranslation } from "react-i18next";
import zaiacLogo from "../public/zaiac-logo.svg";
import Link from "next/link";
import holoWorld from "../public/holo_world.svg";

export default function Footer({ locale }) {
  const { t } = useTranslation();

  return (
    <div className="flex justify-center items-center bg-cyan-600 ">
      <div className="w-[95vw]  bg-white rounded-lg m-[2vw] md:flex-row  pt-[100px] pb-[200px] px-[5vw] md:justify-between md:items-start xs:flex-col xs:flex xs:items-center relative xs:text-center md:text-start xs:gap-10">
        <Image
          src={holoWorld}
          width={150}
          className="absolute bottom-0 right-0"
        />
        <p className="absolute md:left-[5vw] bottom-[38px] text-gray-500">
          {t("copyRight")}
        </p>
        <div className="flex flex-col max-w-[400px] ">
          <Image src={zaiacLogo} className="w-[88.89px]" />
          <p className="mt-[20px] text-[16px] hidden lg:block">
            {t("footerText")}
          </p>
        </div>
        <div className="flex flex-col max-w-[400px] gap-5">
          <h2 className="text-cyan-600 text-[20px] font-semibold"> Links </h2>
          <ul className="flex flex-col gap-[6px] text-[16px]">
            <Link href={`/${locale}/database`}>
              <li> {t("database")}</li>
            </Link>
            <Link href={`/${locale}/infrastructure`}>
              <li> {t("infra")}</li>
            </Link>
            <Link href={`/${locale}/software`}>
              <li> {t("softwareDevelopment")}</li>
            </Link>
            <Link href={`/${locale}/security`}>
              <li> {t("security")}</li>
            </Link>
            <Link href={`/${locale}/about`}>
              <li> {t("about")}</li>
            </Link>
            <Link href="/">
              <li> {t("contact")}</li>
            </Link>
          </ul>
        </div>
        <div className="flex flex-col max-w-[400px] gap-5">
          <h2 className="text-cyan-600 text-[20px] font-semibold"> Socials </h2>
          <ul className="flex flex-col gap-[6px] text-[16px]">
            <Link href="/">
              <li> Instagram </li>
            </Link>
            <Link href="/">
              <li> Linkedin </li>
            </Link>
            <Link href="/">
              <li> WhatsApp </li>
            </Link>
            <Link href="/">
              <li> Facebook </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
}
