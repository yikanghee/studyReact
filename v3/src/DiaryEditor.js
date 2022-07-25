import { useContext, useEffect } from "react"
import { DiaryDispatchContext } from "./App"

const DiaryEditor = () => {
    const { onCreate } = useContext(DiaryDispatchContext);

    useEffect(() => {
        console.log("DiaryEditor 렌더");
    })

    const [diary, setDiary] = useState({
        author: "",
        content: "",
        emotion: 1,
    })

    const handleChangeDiary = (e) => {
        setDiary({
            ...diary,
            [e.target.name]: e.target.value
        })
    }

    const handleAddButtonClick = () => {
        alert("일기가 추가되었습니다!");
        retur;
        
    }
}