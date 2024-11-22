import axiosInstance from "./axiosInstance";

// 1. TODO: POST 요청(todo생성) - 데이터요청하니까 비동기 함수
const postTodo = async ({title, content, checked = false}) => {
    const {data} = await axiosInstance.post('/todo', {
        /* if key값 = value값 같으면 생략가능
        title: title,
        content: content,
        checked: checked, */
        title,
        content,
        checked,
    });

    return data;
};

// 2. TODO: todo list 가져오기(title)
const getTodoList = async({title}) => {
    /* const는 변동이 안되지만, let은 변동가능 */
    let url = '/todo';

    if(title) {
        url += '?title=${title}'
    }
    const {data} = await axiosInstance.get(url);

    return data;
};

// 3. TODO: todo 단건 가져오기
const getTodoItem = async({id}) => {
    const {data} = await axiosInstance.get('/todo/${id}')

    return data;
};

// 4. TODO: todo 수정하기
const patchTodo = async({id, title, content, checked}) => {
    const {data} = await axiosInstance.patch('/todo/${id}', {
        title,
        content,
        checked,
    })

    return data;
};

// 5. TODO: todo 삭제하기
const deleteTodoItem = async({id}) => {
    const {data} = await axiosInstance.delete('/todo/${id}')

    return data;
};

export {postTodo, getTodoList, getTodoItem, patchTodo, deleteTodoItem};