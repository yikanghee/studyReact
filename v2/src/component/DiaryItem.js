import { useRef, useState } from "react";

const DiaryItem = ({
  onRemove,
  onEdit,
  id,
  author,
  content,
  emotion,
  created_date,
}) => {
  const localContentInput = useRef();
  const [localContent, setLocalContent] = useState(content);

  const [isEdit, setIsEdit] = useState(false);
  const toggleIsEdit = () => setIsEdit(!isEdit);

  const handleQuitEdit = () => {
    setIsEdit(false);
    setLocalContent(content);
  };

  const handleEdit = () => {
    if (localContent.lenght < 5) {
      localContentInput.current.focus();
      return;
    }

    if (window.confirm(`${id}번 째 일기를 수정하시겠습니까?`)) {
      onEdit(id, localContent);
      toggleIsEdit();
    }
  };

  const handleRemove = () => {
    if (window.confirm(`${id}번 째 일기를 삭제하시겠습니까?`)) {
      onRemove(id);
    }
  };

  return (
    <div className="DiaryItem">
      <div className="info">
        <span className="author_info">
          작성자 : {author} | 감정 : {emotion}
        </span>
        <br />
        <span className="date">
          {new Date(created_date).toLocaleDateString()}
        </span>
      </div>
      <div className="content">
        {isEdit ? (
          <textarea
            ref={localContentInput}
            value={localContent}
            onChange={(e) => setLocalContent(e.target.value)}
          />
        ) : (
          content
        )}
      </div>
      <div>
        {isEdit ? (
          <>
            <button onClick={handleQuitEdit}>수정 취소</button>
            <button onClick={handleEdit}>수정 완료</button>
          </>
        ) : (
          <>
            <button onClick={handleRemove}>삭제하기</button>
            <button onClick={toggleIsEdit}>수정하기</button>
          </>
        )}
      </div>
    </div>
  );
};
export default DiaryItem;
