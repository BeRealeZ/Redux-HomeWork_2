import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeTitleAction } from "../../redux/actions";

function MainPage() {

    const title = useSelector(state => state.titleReducer.title)
    const dispatch = useDispatch()

    const handleChangeTitle = () => {
        dispatch(changeTitleAction())
    }
    
    return (
        <div>
            <h1>{title}</h1>
            <button onClick={handleChangeTitle}>change title</button>    
        </div>
    )
}

export default MainPage