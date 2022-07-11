import { useState, useRef } from "react";

const DiaryEditor = () => {
  const authorInput = useRef();

  const [state, setState] = useState({
    author: "",
    content: "",
    emotion: 1,
  });

  const handleChangeState = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    if (state.author.length < 1) {
      authorInput.current.focus();
      return;
    }
    if (state.content.length < 5) {
      authorInput.current.focus();
      return;
    }
    console.log("저장성공");
    alert("저장성공");
  };
  return (
    <div className="DiaryEditor">
      <h1>오늘의 일기</h1>
      <div>
        <input
          ref={authorInput}
          placeholder="제목을 입력하세요"
          value={state.author}
          name="author"
          onChange={handleChangeState}
        />
      </div>
      <div>
        <textarea
          ref={authorInput}
          placeholder="내용을 입력하세요"
          value={state.content}
          name="content"
          onChange={handleChangeState}
        />
      </div>
      <div>
        오늘의 감정점수 :
        <select
          name="emotion"
          value={state.emotion}
          onChange={handleChangeState}
        >
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
        </select>
      </div>
      <div>
        <button onClick={handleSubmit}>저장하기</button>
      </div>
    </div>
  );
};

export default DiaryEditor;
