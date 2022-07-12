const DiaryItem = ({ onRemove, id, author, content, emotion, create_data }) => {
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
      <div className="content">{content}</div>
      <button
        onClick={() => {
          if (window.confirm(`{id}번째 일기를 정말 삭제하시겠습니까?`)) {
            onRemove(id);
          }
        }}
      >
        삭제하기
      </button>
    </div>
  );
};

export default DiaryItem;
