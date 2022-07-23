import { useEffect, useMemo, useRef, useState } from "react";
import "./App.css";
import DiaryEditor from "./component/DiaryEditor";
import DiaryList from "./component/DiaryList";

function App() {

  const [data, setData] =useState([]);
  const dataId = useRef(0);

  const getData = async () => {

    const res = await fetch(
      "https://jsonplaceholder.typicode.com/comments"
    ).then((res) => res.json());

    const initData = res.slice(0, 20).map((it) => {
      return {
        author: it.email,
        content: it.body,
        emotion: Math.floor(Math.random() * 5) + 1,
        created_date: new Date().getTime() + 1,
        id: dataId.current++
      }
    })

    setData(initData)
  }

  useEffect(() => {
    setTimeout(() => {
      getData()
    }, 1500);
  }, [])

  const onCreate = (author, content, emotion) => {
    const created_date = new Date().getDate();
    const newItem = {
      author,
      content,
      emotion,
      created_date,
      id: dataId.current
    }
    dataId.current += 1;
    setData([newItem, ...data])
  }

  const onEdit = (targetId, newContent) => {
    setData(
      data.map((it) => 
        it.id === targetId ? {...it, content: newContent} : it
      )
    )
  }

  const onRemove = (targetId) => {
    const newDiaryList = data.filter((it) => it.id !== targetId)
    setData(newDiaryList)
  }
  
  return (
    <div className="App">
      <DiaryEditor onCreate={onCreate} />
      <DiaryList diaryList={data} onEdit={onEdit} onRemove={onRemove}/>
    </div>
  );
}

export default App;
