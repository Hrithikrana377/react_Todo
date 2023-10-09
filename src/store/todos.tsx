/* eslint-disable prefer-const */

/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-refresh/only-export-components */
import { createContext, ReactNode, useContext, useState } from "react";
import { showAlertWithTimeout } from "../service/alert";

export type TodosProviderProps = {
    children : ReactNode
}

export type Todo = {
    id:string;
    task:string;
    completed:boolean;
    createdAt:Date;
}

export type TodosContext = {
    todos:Todo[];
    handleAddToDo:(task:string) => void; //call signature
    checkForcomplete:(id:string) => void;
    handleDeleteTodo:(id:string, value:unknown) => void;
}

export const todoContext = createContext<TodosContext | null>(null);

export const TodosProvider = ({children}:TodosProviderProps) => {
    const[todos, setTodos] = useState<Todo[]>(() => {
        try {
            const newTodos = localStorage.getItem("todos") || "[]";
            return JSON.parse(newTodos) as Todo[]
        } catch (error) {
            return []
        }
    })

    const handleAddToDo = (task:string) => {
        setTodos((prev) => {
            const newTodos:Todo[] = [
                {
                    id:Math.random().toString(),
                    task:task,
                    completed:false,
                    createdAt:new Date()
                },
                ...prev
            ]
            localStorage.setItem("todos",JSON.stringify(newTodos));
            return newTodos
        })

    }

    const checkForcomplete = (id:string) => {
        setTodos((prev) => {
            let newTodos = prev.map((todo) => {
                if(todo.id === id){
                    return {...todo, completed:!todo.completed}
                }
                return todo;
            })
            localStorage.setItem("todos",JSON.stringify(newTodos));
            return newTodos
        })
    }

    //delete individual data
    const handleDeleteTodo = (id:string,value:unknown) => {
        showAlertWithTimeout(value);
        setTodos((prev) => {
            let newTodos = prev.filter((filterTodo) => filterTodo.id !== id);
            localStorage.setItem("todos",JSON.stringify(newTodos));
            return newTodos
        })
    }

    return <todoContext.Provider value={{todos, handleAddToDo, checkForcomplete,handleDeleteTodo}}>
        {children}
    </todoContext.Provider>
}

//consumer

export const useTodos = () => {
    const todosConsumer = useContext(todoContext);
    if(!todosConsumer){
        throw new Error("useTodos is not wraped");
    }
    return todosConsumer
}