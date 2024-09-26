import React from "react";
import Image, { StaticImageData } from "next/image";

interface SectionHeaderProps {
  imageSrc: string | StaticImageData;

  text: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ imageSrc, text }) => {
  return (
    <div className="">
      <div className="flex items-center gap-[20px]">
        <Image src={imageSrc} alt={text} width={30} height={30} />{" "}
        <span className="text-[24px] font-bold leading-[36px] text-primary">
          {text}
        </span>
      </div>
    </div>
  );
};

export default SectionHeader;
