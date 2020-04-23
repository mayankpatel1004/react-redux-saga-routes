const blogsReducer = (state = {}, action) => {
    switch (action.type){
        case 'GET_BLOGS':
            return {
                ...state,
                loading:true
            }
        case 'BLOGS_RECEIVED':
            return {
                ...state,
                blogs: action.json,
                loading:false
            }    
        default:
        return state;
    }
}
export default blogsReducer;