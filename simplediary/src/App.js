import { useRef, useEffect, useMemo, useCallback, useReducer } from "react";
import "./App.css";
import DiaryEditor from "./Component/DiaryEditor";
import DiaryList from "./Component/DiaryList";

const reducer = (state, action) => {
  switch(action.type){
    case 'INIT' : {
      return action.data
    }
    case 'CREATE' : {
      const create_data = new Date().getTime();
      const newItem = {
        ...action.data,
        create_data
      }
      return [newItem, ...state]
    }
    case 'REMOVE' : {
      return state.filter((it) => it.id !== action.targetId)
    }
    case 'EDIT' : 
    default :
    return state;
  }
}

export const DiaryStateContext = React.createContext();

function App() {
  // const [data, setData] = useState([]);

  const [data, dispatch] = useReducer(reducer, [])

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
        create_data: new Date().getDate(),
        id: dataId.current++,
      };
    });
    dispatch({type:"INIT", data:initData})
  };

  useEffect(() => {
    getData();
  }, []);

  const onCreate = useCallback((author, content, emotion) => {

    dispatch({type: "CREATE", data:author, content, emotion, id:dataId.current})
   
    dataId.current += 1;
  }, []);

  const onEdit = (targetId, newContent) => {
    setData(
      data.map((it) =>
        it.id === targetId ? { ...it, content: newContent } : it
      )
    );
  };

  const onRemove = (targetId) => {

    dispatch({type : "REMOVE", targetId})
    console.log(`${targetId}가 삭제되었습니다.`);
    const newDiaryList = data.filter((it) => it.id !== targetId);
    setData(newDiaryList);
  };

  const getDiaryAnalysis = useMemo(() => {
    console.log("일기 분석 시작");

    const goodCount = data.filter((it) => it.emotion >= 3).length;
    const badCount = data.length - goodCount;
    const goodRatio = (goodCount / data.length) * 100;
    return { goodCount, badCount, goodRatio };
  }, [data.length]);

  const { goodCount, badCount, goodRatio } = getDiaryAnalysis;

  return (
    <div className="App">
      <DiaryEditor onCreate={onCreate} />
      <div>전체일기 : {data.length}</div>
      <div>기분 좋은 일기 개수 : {goodCount}</div>
      <div>기분 나뿐 일기 개수 : {badCount}</div>
      <div>기분 좋은 일기 비율 : {goodRatio}</div>
      <DiaryList onRemove={onRemove} diaryList={data} onEdit={onEdit} />
    </div>
  );
}

export default App;