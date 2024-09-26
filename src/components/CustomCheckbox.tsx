import React from "react";

interface CustomCheckboxProps {
  checked: boolean;
  onChange: () => void;
  label?: string;
}

const CustomCheckbox: React.FC<CustomCheckboxProps> = ({
  checked,
  onChange,
  label,
}) => {
  return (
    <label className="flex items-center gap-[10px] cursor-pointer">
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="w-[30px] h-[30px] appearance-none bg-white border-t-[2px] border-l-[2px] border-[#989CAD] rounded-tl-[6px] rounded-br-none rounded-tr-none rounded-bl-none checked:bg-[#0BC279] checked:border-[#0BC279] focus:outline-none focus:ring-0"
      />
      {label && <span className="text-primary">{label}</span>}
    </label>
  );
};

export default CustomCheckbox;
