// Home.js
import { useEffect, useState, useContext } from "react";
import { DiaryStateContext } from "../App";

import DiaryList from "../components/DiaryList";
import MyHeader from "../components/MyHeader";
import MyButton from "../components/MyButton";
const Home = () => {
  const diaryList = useContext(DiaryStateContext);

  const [data, setData] = useState([]);

  // Header
  const [curDate, setCurDate] = useState(new Date());
  const headText = `${curDate.getFullYear()}년 ${curDate.getMonth() + 1}월`;
  useEffect(() => {
    const titleElement = document.getElementsByTagName("title")[0];
    titleElement.innerHTML = `감정 일기장`;
  }, []);
  useEffect(() => {
    if (diaryList.length >= 1) {
      const firstDay = new Date(
        curDate.getFullYear(),
        curDate.getMonth(),
        1
      ).getTime();
      const lastDay = new Date(
        curDate.getFullYear(),
        curDate.getMonth() + 1,
        0,
        23,
        59,
        59
      ).getTime();
      setData(
        diaryList.filter((it) => firstDay <= it.date && it.date <= lastDay)
      );
    }
  }, [diaryList, curDate]);
  // 월 증가
  const increaseMonth = () => {
    setCurDate(
      new Date(curDate.getFullYear(), curDate.getMonth() + 1, curDate.getDate())
    );
  };
  // 월 감소
  const decreaseMonth = () => {
    setCurDate(
      new Date(curDate.getFullYear(), curDate.getMonth() - 1, curDate.getDate())
    );
  };

  return (
    <div>
      {/* Header */}
      <MyHeader
        headText={headText}
        leftChild={<MyButton text={"<"} onClick={() => decreaseMonth()} />}
        rightChild={<MyButton text={">"} onClick={() => increaseMonth()} />}
      />

      {/* DiaryList */}
      <DiaryList diaryList={data} />
    </div>
  );
};

export default Home;
