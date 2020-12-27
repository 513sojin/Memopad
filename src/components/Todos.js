import React ,{useState} from 'react';

function TodoItem({todo, onToggle}){
    return(
        <li class="content"
            style={{
                color : todo.done ? 'rgb(167, 185, 0)' : 'black'
            }}
            onClick={()=>onToggle(todo.id)}
        >
            {todo.text}
        </li>
    );
}

function TodoList({todos,onToggle}){
    //todo가 여러개. todos에 todo를 렌더링 해주는거야 
    return (
        <ul class="itemList">
            <h2>Memo List</h2>
            {
                todos.map(todo=><TodoItem
                    key={todo.id}
                    todo={todo}
                    onToggle={onToggle}
                />)
            }
        </ul>
    );
}

function Todos({todos, onCreate, onToggle}){
    console.log(todos);
    const [text,setText]=useState('');
    const onChange=e=>setText(e.target.value);
    const onSubmit =e=>{
        e.preventDefault();
        onCreate(text);
        setText('');
    }
    return(
        <div class="title">
            <div class="right">
                <form onSubmit={onSubmit}>
                    <input class="input"
                        value={text} onChange={onChange} 
                    />
                    <button type="submit"></button>
                </form>
            </div>
            <div class="left">
            <TodoList
                todos={todos}
                onToggle={onToggle}
            />
            </div>
        </div>
    );

}

export default Todos;