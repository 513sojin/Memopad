const ADD_TODO='todos/ADD_TODO';
const TOGGLE_TODO='todos/TOGGLE_TODO';

let nextId=0;
export const addTodo=(title,text)=>({
    type:ADD_TODO,
    todo:{
        id:nextId++,
        title,
        text
    }
});
export const toggleTodo=id=>({
    type:TOGGLE_TODO,
    id
});

const initialState={
    current_memo:-1,
    memolist:[
    ]
};

export default function todos(state=initialState, action){
    switch(action.type){
        case ADD_TODO:
            return{
                ...state,
                memolist: state.memolist.concat(action.todo),
                current_memo: action.todo.id
            } 
        case TOGGLE_TODO:
            //toggleTodo함수는 인자로 id만 받음. newId는 배열의 형태로 반환됨.
            const newId= state.memolist.filter(todos=>todos.id === action.id);
            return {
                ...state,
                current_memo:newId[0].id
            }
        default:
            return state;
    }
}
