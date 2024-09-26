import React from "react";
// import Link from "next/link";
import SidebarLink from "@/components/SidebarLink";
import BasicSettingsIcon from "@/icons/BasicSettingsIcon";
import ExportSetting from "@/icons/ExportSetting";
import AppIcon from "@/icons/AppIcon";
import HomeIcon from "@/icons/HomeIcon";
import ClockIcon from "@/icons/ClockIcon";
import SheetIcon from "@/icons/SheetIcon";
import ChartIcon from "@/icons/ChartIcon";
import DocumentIcon from "@/icons/DocumentIcon";
import ChartPieIcon from "@/icons/ChartPieIcon";
import BackArrowIcon from "@/icons/BackArrowIcon";
import DotIcon from "@/icons/DotIcon";
import NavLink from "./navbar/NavLink";
import VerticalLineIcon from "@/icons/VerticalLineIcon";
import TestPreviewIcon from "@/icons/TestPreviewIcon";
import TestInfoIcon from "@/icons/TestInfoIcon";
import PlayIcon from "@/icons/PlayIcon";

const Layout = ({ children }) => {
  return (
    <div className="h-screen max-w-[1728px] mx-auto flex flex-col">
      <header className="sticky top-0 min-h-[86px] bg-background nav z-50 border-b border-solid gap-[50px] border-[#D1DAE4] text-primary w-full flex items-center justify-between lg:justify-normal px-[20px]">
        <div className="flex items-center gap-[10px]">
          <BackArrowIcon />
          <h2 className="text-primary text-[18px] font-semibold leading-[24px]">
            Assessment
          </h2>
        </div>
        <div className=" flex-1 hidden lg:flex">
          <p className="text-primary text-[20px] font-bold leading-[30px]">
            Primary 1
          </p>
          <span className="px-[12px] pt-[18px]">
            <DotIcon />
          </span>
          <p className="text-primary text-[20px] font-bold leading-[30px]">
            Mid Term Test
          </p>
          <span className="px-[12px] pt-[18px]">
            <DotIcon />
          </span>{" "}
          <p className="text-primary text-[20px] font-bold leading-[30px]">
            Agricultural Science
          </p>
        </div>
        <div className="md:pl-[50px] flex">
          <div className="flex items-center gap-[10px] pr-[12px]">
            <NavLink text="Test Info" icon={<TestInfoIcon />} />
            <div>
              <VerticalLineIcon />
            </div>
            <NavLink text="Test preview" icon={<TestPreviewIcon />} />
          </div>
          <div className="p-[10px] bg-[#0AAC6C] text-white rounded-[6px] cursor-pointer">
            <div className="flex items-center gap-[10px]">
              <div className="">
                <PlayIcon />
              </div>
              <span className="text-[16px] font-semibold leading-[24px]">
                Activate test
              </span>
            </div>
          </div>
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden  ">
        <aside className="hidden lg:block w-[327px] bg-background text-primary h-full overflow-y-auto scrollbar-hide">
          <nav className="flex flex-col p-[20px]">
            <div>
              <h2 className="text-primary pb-[15px] text-[18px] font-bold leading-[28px]">
                Test configuration
              </h2>
              <SidebarLink
                text="Basic settings"
                icon={<BasicSettingsIcon />}
                href="/basic-settings"
              />
              <SidebarLink
                text="Question manager"
                icon={<ExportSetting />}
                href="/question-manager"
              />
              <SidebarLink
                text="Question settings"
                icon={<AppIcon />}
                href="/question-settings"
              />
              <SidebarLink
                text="Test start page"
                icon={<HomeIcon />}
                href="/test-start-page"
              />
              <SidebarLink
                text="Time settings"
                icon={<ClockIcon />}
                href="/time-settings"
              />
              <SidebarLink
                text="Grading and summary"
                icon={<DocumentIcon />}
                href="/grading-summary"
              />
            </div>
            <div className="pt-[40px]">
              <h2 className="text-primary pb-[15px] text-[18px] font-bold leading-[28px]">
                Test progress and results
              </h2>
              <SidebarLink
                text="Test results"
                icon={<ChartIcon />}
                href="/test-results"
              />
              <SidebarLink
                text="Test sheets review"
                icon={<SheetIcon />}
                href="/test-sheets-review"
              />
              <SidebarLink text="Statistics" icon={<ChartPieIcon />} href="/" />
            </div>
          </nav>
        </aside>

        <main className="flex-1 p-6 bg-[#F1F5F8] overflow-y-auto max-w-[1402px] scrollbar-hide">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;
