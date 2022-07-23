import { useRef, useState } from "react";

const DiaryEditor = ({onCreate}) => {
  const authorInput = useRef();
  const contentInput = useRef();

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
    }

    onCreate(state.author, state.content, state.emotion);
    alert("저장 성공!");
    setState({
      author: "",
      content: "",
      emotion: 1
    })
  }

  return (
    <div className="DiaryEditor">
      <h2>오늘의 일기</h2>
      <div>
        <input
          ref={authorInput}
          placeholder="작성자"
          value={state.author}
          name="author"
          type="text"
          onChange={handleChangeState}
        />
        <div>
          <textarea
            ref={contentInput}
            placeholder="일기"
            value={state.content}
            name="content"
            type="text"
            onChange={handleChangeState}
          />
        </div>
        <div>
          <span>오늘의 감정점수 : </span>
          <select name="emotion" 
            onChange={handleChangeState}
             value={state.emotion}>
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
          </select>
        </div>
        <div>
          <button onClick={handleSubmit}>일기 저장하기</button>
        </div>
      </div>
    </div>
  );
};
export default DiaryEditor;
