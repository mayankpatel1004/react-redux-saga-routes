const contactReducer = (state = {}, action) => {
    switch (action.type) {
        case 'REQUEST_CONTACT_DATA':
            return {
                ...state,
                loading:true
            }
        case 'RECEIVE_CONTACT_DATA':
            return {
                ...state,
                contact: {},
                loading:false
            }    
        default:
            return state;    
    }
}

export default contactReducer;