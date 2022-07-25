import logo from "./logo.svg";
import "./App.css";
import {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useReducer,
} from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "INIT": {
      return action.data;
    }
    case "CREATE": {
      const created_data = new Date().getTime();

      const newItem = {
        ...action.data,
        created_data,
      };
      return [newItem, ...state];
    }
    case "REMOVE": {
      return state.filter((it) => it.id !== action.targetId);
    }
    case "EDIT": {
      return state.map((it) =>
        it.id === action.targetId
          ? {
              ...it,
              content: newContent,
            }
          : it
      );
    }
    default:
      return state;
  }
};

export const DiaryStateContext = createContext(null);
export const DiaryDispatchContext = createContext(null);

function App() {
  const [data, dispatch] = useReducer(reducer, []);
  const dataId = useRef(0);
  const getData = async () => {
    setTimeout(async () => {
      const res = await fetch(
        "https://jsonplaceholder.typicode.com/comments"
      ).then((res) => res.json());

      const initData = res.slice(0, 20).map((it) => {
        return {
          author: it.email,
          content: it.body,
          emotion: Math.floor(Math.random() * 5) + 1,
          created_data: new Date().getTime(),
          id: dataId.current++,
        };
      });
      dispatch({ type: "INIT", data: initData });
    }, 2000);
  };

  useEffect(() => {
    getData();
  }, []);

  const onCreate = useCallback((author, content, emotion) => {
    dispatch({
      type: "CREATE",
      data: { author, content, emotion, id: dataId.current },
    });
    dataId.current += 1;
  }, []);

  const onRemove = useCallback((targetId) => {
    dispatch({ type: "REMOVE", targetId });
  }, []);

  const onEdit = useCallback((targetId, newContent) => {
    dispatch({
      type: "EDIT",
      targetId,
      newContent,
    });
  }, []);

  const memoizedDiaryAnalysis = useMemo(() => {
    const goodCount = data.filter((it) => it.emotion >= 3).length;
    const badCount = data.length - goodCount;
    const goodRatio = (goodCount / data.length) * 100.0;
    return { goodCount, badCount, goodRatio };
  }, [data.length]);

  const { goodCount, badCount, goodRatio } = memoizedDiaryAnalysis;

  const store = {
    data,
  };

  const memoizedDispatch = useMemo(() => {
    return { onCreate, onRemove, onEdit };
  }, []);

  return <div className="App"></div>;
}

export default App;
