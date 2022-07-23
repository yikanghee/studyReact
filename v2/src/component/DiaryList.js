import DiaryItem from "./DiaryItem";

const DiaryList = ({ onEdit , onRemove,diaryList }) => {
    return (
        <div className="DiaryList">
            <h2>일기 리스트</h2>
            <h4>{diaryList.length}</h4>
            <div>
                {diaryList.map((it) => (
                    <DiaryItem key={it.id} {...it} onEdit={onEdit} onRemove={onRemove}/>
                ))}
            </div>
        </div>
    )

}

export default DiaryList;