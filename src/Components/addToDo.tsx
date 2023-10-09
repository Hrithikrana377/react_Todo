/* eslint-disable @typescript-eslint/no-unused-vars */
import { FormEvent, useState } from "react"
import { useTodos } from "../store/todos";
import {showAlertWithTimeout} from "../service/alert";

const AddToDo = () =>{
    const[todo,setTodo] = useState("");
    const {handleAddToDo} = useTodos();

    const handleFormSubmit = (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        handleAddToDo(todo)
        setTodo("")
        showAlertWithTimeout(document.getElementById('addButton')?.textContent)
    }

    return (
        <form onSubmit={handleFormSubmit}>
            <input type="text" value={todo} onChange={(e) => setTodo(e.target.value)} />
            <button type="submit" id="addButton">Add</button>
        </form>
    )
}

export default AddToDo