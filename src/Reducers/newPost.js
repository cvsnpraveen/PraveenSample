const initialState = {
    tasks: {
        description: "",
        id: new Date().valueOf(),
        priority: "",
        schedule: new Date(),
        taskTitle: ""
    }
};
const newPostReducer = (state =[], action) => {
    switch (action.type) {
        case 'ADD_TASKS':
            return state.concat([action.data]);
        case 'RESET_FORM':
            const newState = [action.data];
            
            return newState;
        //return newState;
        default:
            return state;
    }
}
export default newPostReducer;
