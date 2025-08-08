import axios from "axios";

export async function getStrategy(userInput: {
  isHomeless: boolean;
  isMarried: boolean;
  marriageYears: number;
  childrenCount: number;
  isHouseholder: boolean;
  hasAccount: boolean;
  hasHouseHistory: boolean;
}) {
  const res = await axios.post("http://localhost:8000/api/strategy", userInput);
  const data = res.data;
  console.log(data);

  return {
    regions: data["추천 지역"] ?? [],
    items: (data["청약 목록"] ?? []).map((item: any) => ({
      name: item["이름"] ?? "",
      date: item["접수일"] ?? "",
      announce: item["발표일"] ?? "",
      price: item["분양가"] ?? "미정",
    })),
  };
}
