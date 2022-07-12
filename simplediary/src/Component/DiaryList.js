import DiaryItem from "../Element/DiaryItem";

const DiaryList = ({ onRemove, diaryList }) => {
  console.log(diaryList);
  return (
    <div className="DiaryEditor2">
      <h2>일기 리스트</h2>
      <div>
        {diaryList.map((it) => (
          <DiaryItem key={`diaryitem_${it.id}`} {...it} onRemove={onRemove} />
        ))}
      </div>
    </div>
  );
};

export default DiaryList;
