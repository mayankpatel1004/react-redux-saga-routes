const blogsReducer = (state = {}, action) => {
    switch (action.type){
        case 'REQUEST_BLOGS_DATA':
            return {
                ...state,
                loading:true
            }
        case 'RECEIVE_BLOGS_DATA':
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