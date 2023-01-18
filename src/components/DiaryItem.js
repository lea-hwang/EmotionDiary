import { useNavigate } from "react-router-dom";
import MyButton from "./MyButton";

const DiaryItem = ({ id, date, content, emotion }) => {
  const navigate = useNavigate();
  const goDetail = () => {
    navigate(`/diary/${id}`);
  };

  const goEdit = () => {
    navigate(`/edit/${id}`);
  };
  return (
    <div className="DiaryItem">
      <div
        onClick={goDetail}
        className={[
          "emotion_img_wrapper",
          `emotion_img_wrapper_${emotion}`,
        ].join(" ")}
      >
        <img
          className="emotion-img"
          src={process.env.PUBLIC_URL + `/assets/emotion${emotion}.png`}
        />
      </div>
      <div onClick={goDetail} className="info_wrapper">
        <div className="diary_date">{new Date(date).toLocaleDateString()}</div>
        <div className="diary_content_preview">{content.slice(0, 25)}</div>
      </div>
      <div className="btn_wrapper">
        <MyButton text={"수정하기"} onClick={goEdit} />
      </div>
    </div>
  );
};

export default DiaryItem;