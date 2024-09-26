import AnalyticCard from "@/components/AnalyticCard";
import Layout from "@/components/layout";
import ProgressCard from "@/components/ProgressCard";
import SectionHeader from "@/components/SectionHeader";
import PieImg from "@/images/chart-pie 1.png";
export default function Home() {
  return (
    <Layout>
      <div className="w-full">
        <div className="pb-[30px]">
          <SectionHeader
            imageSrc={PieImg}
            text="Class performance statistics"
          />
        </div>
        <div
          style={{
            overflowX: "auto",
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
          className="pb-[30px]"
        >
          <div style={{ display: "flex", gap: "25px", width: "1342px" }}>
            <AnalyticCard
              text="Attended"
              score={30}
              maxScore={30}
              width="395px"
              height="246px"
            />
            <AnalyticCard
              text="Above Avg."
              score={22}
              maxScore={30}
              width="417px"
              height="246px"
            />
            <AnalyticCard
              text="Average score"
              score={15}
              maxScore={30}
              width="444px"
              height="246px"
            />
          </div>
        </div>

        <div
          style={{
            overflowX: "auto",
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          <div className="bg-white w-[1342px] h-[378px] rounded-[10px] p-[30px] mb-[261px]">
            <h2 className="font-bold text-[15px] leading-[18px] text-[#75819A] pb-[30px]">
              SCORE PER QUESTION topic (9)
            </h2>

            <div className="flex gap-[20px] ">
              <div className="flex flex-col gap-[20px]">
                <ProgressCard
                  BgColor="bg-[#FFEF9B]"
                  width="272px"
                  text="Flowering plants"
                  percentage={50}
                  score="15 / 30"
                />
                <ProgressCard
                  BgColor="bg-[#EFD8E5]"
                  width="159px"
                  text="Flowering plants"
                  percentage={25}
                  score="8 / 30"
                />
                <ProgressCard
                  BgColor="bg-[#D2F0BB]"
                  text="Flowering plants"
                  width="272px"
                  percentage={50}
                  score="15 / 30"
                />
                <ProgressCard
                  BgColor="bg-[#CEEEE2]"
                  text="Flowering plants"
                  width="34px"
                  percentage={10}
                  score="3 / 30"
                />
                <ProgressCard
                  BgColor="bg-[#EEDACE]"
                  text="Flowering plants"
                  width="68px"
                  percentage={50}
                  score="15 / 30"
                />
              </div>

              <div className="flex flex-col gap-[20px]">
                <ProgressCard
                  BgColor="bg-[#F9D5D5]"
                  width="388px"
                  text="Flowering plants"
                  percentage={100}
                  score="15 / 30"
                />
                <ProgressCard
                  BgColor="bg-[#CDD5FF]"
                  width="272px"
                  text="Flowering plants"
                  percentage={50}
                  score="15 / 30"
                />
                <ProgressCard
                  BgColor="bg-[#CEEEE2]"
                  text="Flowering plants"
                  width="34px"
                  percentage={50}
                  score="15 / 30"
                />

                <ProgressCard
                  BgColor="bg-[#CEEEE2]"
                  text="Flowering plants"
                  width="34px"
                  percentage={50}
                  score="15 / 30"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
