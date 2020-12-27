import React ,{useState} from 'react';

function TodoItem({todo, onToggle}){
    return(
        <li class="content"
            style={{
                color : todo.done ? 'rgb(167, 185, 0)' : 'black'
            }}
            onClick={()=>onToggle(todo.id)}
        >
            {todo.title}
            {todo.text}
        </li>
    );
}

function TodoList({todos,onToggle}){
    //todo�� ������. todos�� todo�� ������ ���ִ°ž� 
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
    const [title, setTitle]=useState('');

    const onChange=e=>setText(e.target.value);
    const onChangeTitle=e=>setTitle(e.target.value);

    const onSubmit =e=>{
        e.preventDefault();
        onCreate(title,text);
        setText('');
        setTitle('');
    }

    return(
        <div class="title">
            <div class="right">
                <form onSubmit={onSubmit}>
                    <input
                        value={title} onChange={onChangeTitle} 
                    />
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