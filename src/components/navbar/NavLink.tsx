import React from "react";

interface NavLinkProps {
  icon: React.ReactNode;
  text: string;
}

const NavLink: React.FC<NavLinkProps> = ({ icon, text }) => {
  return (
    <div className=" px-[10px] py-[9px] cursor-pointer">
      <div className=" flex items-center gap-[10px]">
        <div className="">{icon}</div>
        <span className="text-[16px] font-medium leading-[24px] text-primary">
          {text}
        </span>
      </div>
    </div>
  );
};

export default NavLink;
