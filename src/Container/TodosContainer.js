import React ,{useCallback} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import Todos from '../components/Todos';
import { addTodo, toggleTodo } from '../todos';

function TodosContainer(){
    const todos=useSelector(state=>state.todos);
    console.log(todos);
    const dispatch=useDispatch();
    
    const onCreate=useCallback((title,text)=>dispatch(addTodo(title,text)),[dispatch]);
    const onToggle=useCallback(id =>dispatch(toggleTodo(id)),[dispatch]);

    return <Todos
        todos={todos}
        onCreate={onCreate}
        onToggle={onToggle}
    />;
}

export default TodosContainer;

