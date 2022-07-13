import { useRef, useState } from "react";

const DiaryItem = ({ onEdit ,onRemove, id, author, content, emotion, create_data }) => {
  const [isEdit, setIsEdit] = useState(false);
  const toggleIsEdit = () => setIsEdit(!isEdit);

  const [localContent, setLocalcontent] = useState(content);

  const handleRemove = () => {
    if (window.confirm(`${id}번째 일기를 정말 삭제하시겠습니까?`)) {
      onRemove(id);
    }
  };

  const handleQuitEdit = () => {
    setIsEdit(false);
    setLocalcontent(content)
  }

  const localContentInput = useRef();

  const handleEdit = () => {

    localContentInput.current.focus();
    
    if(localContent.lenght < 5) {
        return
    }

    if(window.confirm(`${id}번째 일기를 수정하시겠습니까?`)){
    onEdit(id, localContent)
    toggleIsEdit();
    }
  }

  return (
    <div className="DiaryItem">
      <div className="info">
        <span className="author_info">
          | 작성자 : {author} | 감정점수 : {emotion} |
        </span>
        <br />
        <span className="data">
          {new Date(create_data).toLocaleDateString()}
        </span>
      </div>
      <div className="content">
        {isEdit ? (
          <>
            <textarea
                ref={localContentInput}
              value={localContent}
              onChange={(e) => setLocalcontent(e.target.value)}
            ></textarea>
          </>
        ) : (
          content
        )}
      </div>
      {isEdit ? (
        <>
          <button onClick={handleQuitEdit}>수정취소</button>
          <button onClick={handleEdit}>수정완료</button>
        </>
      ) : (
        <>
          <button onClick={handleRemove}>삭제하기</button>
          <button onClick={toggleIsEdit}>수정하기</button>
        </>
      )}
    </div>
  );
};

export default DiaryItem;
