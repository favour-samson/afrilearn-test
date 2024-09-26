import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

interface SidebarLinkProps {
  icon: React.ReactNode;
  text: string;
  href: string;
}

const SidebarLink: React.FC<SidebarLinkProps> = ({ icon, text, href }) => {
  const router = useRouter();
  const isActive = router.pathname === href;

  return (
    <Link href={href}>
      <div
        className={`w-[287px] p-[20px] gap-[20px] cursor-pointer flex items-center ${
          isActive ? "bg-[#CEEEE2] rounded-[5px]" : ""
        }`}
      >
        <div>{icon}</div>
        <span className="text-primary text-base font-medium">{text}</span>
      </div>
    </Link>
  );
};

export default SidebarLink;
