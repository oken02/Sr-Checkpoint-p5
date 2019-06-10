import { MESSAGES_RECEIVED, MESSAGES_LOADING, NEW_MESSAGE } from './constants';

const initialState = {
    messagesLoading: false,
    messages: []
};

export default (state = initialState, action) => {
    switch (action.type) {
        case MESSAGES_LOADING:{
            return Object.assign({}, state, {messagesLoading: true})

        }
        case MESSAGES_RECEIVED:{
            return Object.assign({}, state, {
                messagesLoading: false,
                messages: action.messages
             })

        }  
        case NEW_MESSAGE:{
            return Object.assign({}, state, {
                messagesLoading: false,
                messages: [...state.messages, action.message]
             })

        }   
           
    
        default:
        return state;
    }
  
};
