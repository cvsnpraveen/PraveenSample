const allPostReducer = (state = [], action) => {
    switch (action.type) {
        case 'SHOW_ALL_POST':
            return state.concat([action.data]);
        default:
            return state;
    }
}
export default allPostReducer;