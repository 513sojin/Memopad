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
            //toggleTodo�Լ��� ���ڷ� id�� ����. newId�� �迭�� ���·� ��ȯ��.
            const newId= state.memolist.filter(todos=>todos.id === action.id);
            return {
                ...state,
                current_memo:newId[0].id
            }
        default:
            return state;
    }
}
