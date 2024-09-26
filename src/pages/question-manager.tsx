import Layout from "@/components/layout";
import SectionHeader from "@/components/SectionHeader";
import React, { useState } from "react";
import SettingImg from "@/images/settings-sliders.png";
import QuestionBtn from "@/components/QuestionBtn";
import SortIcon from "@/icons/SortIcon";
import PlusIcon from "@/icons/PlusIcon";
import QuestionCategory from "@/components/QuestionCategory";
import AnswerCard from "@/components/AnwerCard";
import QuestionImg from "@/images/questImg.png";
import Image from "next/image";

const QuestionManager = () => {
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);

  const answers = [
    { id: "1", label: "Answer option 1" },
    { id: "2", label: "Answer option 1" },
    { id: "3", label: "Answer option 1" },
    { id: "4", label: "Answer option 1" },
  ];

  // Handler to set the selected answer
  const handleSelect = (id: string) => {
    setSelectedAnswer(id);
  };
  return (
    <Layout>
      <div className="w-full">
        <div className="pb-[30px]">
          <SectionHeader imageSrc={SettingImg} text="Test info" />
        </div>
        <div
          style={{
            overflowX: "auto",
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
          className="pb-[30px]"
        >
          <div className="bg-white flex justify-between max-w-[1342px] p-[20px] rounded-[10px]">
            <div className="w-[234px] flex items-center gap-[20px]">
              <div className="border-[2px] border-[#989CAD] rounded-[6px] w-[32px] h-[32px]"></div>
              <div className="flex gap-[10px]">
                <h1 className="font-bold text-[18px] leading-[28px] text-[#75819A]">
                  Questions
                </h1>
                <p className="font-bold text-[18px] leading-[28px] text-[#0B1A2D]">
                  33 / 60
                </p>
              </div>
            </div>
            <div className="flex gap-[10px]">
              <QuestionBtn icon={<SortIcon />} text="Reorder questions" />
              <QuestionBtn
                icon={<PlusIcon />}
                text="Add question"
                bgColor="#0AAC6C"
              />
            </div>
          </div>
          <div className="mt-[30px] bg-white flex max-w-[1342px] p-[20px] gap-[30px] rounded-[10px]">
            <div className="w-[32px]">
              <div className=" border-[2px] border-[#989CAD] rounded-[6px] w-[32px] h-[32px]"></div>
            </div>
            <div className="w-[1342px]">
              <div className="flex  justify-between ">
                <div>
                  <h1 className="font-bold text-[18px] leading-[28px] text-[#374258]">
                    Q. 1
                  </h1>
                </div>
                <div className="flex  gap-[10px]">
                  <QuestionCategory text="Topic" subText="Farm tools" />
                  <QuestionCategory text="Type" subText="Single choice" />
                  <QuestionCategory text="Points" subText="1" />
                </div>
              </div>
              <div className="pt-[20px]">
                <p className="font-medium text-[18px] leading-[27px] text-[#374258]">
                  This is a suspense novel about the main character who
                  accidentally gets a notebook with the various tracks and plans
                  of a mysterious figure. The main character starts to decipher
                  the contents of the notebook and finds that it contains
                  mysterious codes and riddles.
                </p>
                <div className="mt-[20px] flex flex-col gap-[20px]">
                  {answers.map((answer) => (
                    <AnswerCard
                      key={answer.id}
                      id={answer.id}
                      label={answer.label}
                      isSelected={selectedAnswer === answer.id}
                      onSelect={handleSelect}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-[30px] bg-white flex max-w-[1342px] p-[20px] gap-[30px] rounded-[10px]">
            <div className="w-[32px]">
              <div className=" border-[2px] border-[#989CAD] rounded-[6px] w-[32px] h-[32px]"></div>
            </div>
            <div className="w-[1342px]">
              <div className="flex  justify-between ">
                <div>
                  <h1 className="font-bold text-[18px] leading-[28px] text-[#374258]">
                    Q. 1
                  </h1>
                </div>
                <div className="flex  gap-[10px]">
                  <QuestionCategory text="Topic" subText="Farm tools" />
                  <QuestionCategory text="Type" subText="Single choice" />
                  <QuestionCategory text="Points" subText="1" />
                </div>
              </div>
              <div className="pt-[20px]">
                <Image
                  src={QuestionImg}
                  alt="question img"
                  width={234}
                  height={228}
                />{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default QuestionManager;
