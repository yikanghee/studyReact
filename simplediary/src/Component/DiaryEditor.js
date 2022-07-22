import React, { useEffect, useRef, useState } from "react";

const DiaryEditor = ({ onCreate }) => {
  
  useEffect(() => {
    console.log("렌더")
  })

  const authorInput = useRef();
  const contentInput = useRef();

  const [state, setState] = useState({
    author: "",
    content: "",
    emotion: 1,
  });

  const handleChange = (e) => {
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
      contentInput.current.focus();
      return;
    }

    onCreate(state.author, state.content, state.emotion);
    alert("저장성공");

    setState({
      author: "",
      content: "",
      emotion: 1,
    });
  };

  return (
    <div className="DiaryEditor">
      <h1>오늘의 일기</h1>
      <input
        ref={authorInput}
        placeholder="작성자"
        value={state.author}
        name="author"
        onChange={handleChange}
      />
      <textarea
        ref={contentInput}
        placeholder="내용"
        value={state.content}
        name="content"
        onChange={handleChange}
      />
      <div>
        <select onChange={handleChange} name="emotion" value={state.emotion}>
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
        </select>
      </div>
      <div>
        <button onClick={handleSubmit}>저장</button>
      </div>
    </div>
  );
};

export default React.memo(DiaryEditor);
