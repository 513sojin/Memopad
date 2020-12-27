import React ,{useState} from 'react';

function TodoItem({todo, onToggle,setSta}){
    return(
        <li class="content"
            onClick={()=>{
                onToggle(todo.id);
                setSta(true);
            }}
        >
            <strong>{todo.title}</strong>
            <p style={{margin: 0}}>{todo.text}</p>
        </li>
    );
}

function TodoList({todos,onToggle,setSta}){ 
    return (
        <ul class="itemList">
            <h2>Memo List</h2>
            {
                todos.memolist.map(todo=><TodoItem
                    key={todo.id}
                    todo={todo}
                    onToggle={onToggle}
                    setSta={setSta}
                />)
            }
        </ul>
    );
}

function Todos({todos, onCreate, onToggle}){
    //const mapping=todos.memolist.map(state=>console.log(state.id));
    const [text,setText]=useState('');
    const [title, setTitle]=useState('');
    const [status, setStatus]=useState(false);
    const [newTitle, setNewTitle]=useState('');
    const [newText, setNewText]=useState('');
    const newIndex=todos.current_memo;

    const setSta=(index)=>{
        if(index===true) { 
            setNewTitle(todos.memolist[newIndex].title);
            setNewText(todos.memolist[newIndex].text);
            setStatus(true);
        }
        else setStatus(false);
    }

    const onChange=(e=>{
        setText(e.target.value)
        if(status) {
            setNewText(e.target.value);
        }
    });
    const onChangeTitle=(e=>{
        setTitle(e.target.value)
        if(status){ 
            setNewTitle(e.target.value);
        }
    });

    const onSubmit =e=>{
        e.preventDefault();
        onCreate(title,text);
        setText('');
        setTitle('');
        setNewText('');
        setNewTitle('');
    };

    return(
        <div class="title">
            <div class="right">
                <form onSubmit={onSubmit}>
                    <input
                        value={status===false ? title : newTitle}
                        onChange={onChangeTitle} 
                        placeholder="Title"
                    />
                    <textarea value={status===false ? text : newText} onChange={onChange} placeholder="Element"/>
                </form>
            </div>
            <div class="left">
            <TodoList
                todos={todos}
                onToggle={onToggle}
                setSta={setSta}
            />
            </div>
        </div>
    );

}

export default Todos;