import { useNavigate, useParams } from "react-router-dom";

// Edit.js
const Edit = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  return (
    <div>
      <h1>Edit</h1>
      <p>이곳은 일기 수정 페이지입니다.</p>

      <button
        onClick={() => {
          navigate("/home");
        }}
      >
        Home으로 이동
      </button>
      <button
        onClick={() => {
          navigate(-1);
        }}
      >
        뒤로가기
      </button>
    </div>
  );
};

export default Edit;
