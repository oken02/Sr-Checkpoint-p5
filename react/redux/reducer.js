import { MESSAGES_RECEIVED, MESSAGES_LOADING, NEW_MESSAGE } from './constants';

const initialState = {
    messages: [],
    messagesLoading: false,
    message: '',
};

export default (state = initialState, action) => {
    switch (action.type) {
        case 'MESSAGES_LOADING':
            return Object.assign({}, state, { messages: [], messagesLoading: true });
        case 'MESSAGES_RECEIVED':
            return Object.assign({}, state, { messages: action.messages, messagesLoading: false })
        case 'NEW_MESSAGE':
            return Object.assign({}, state, { messages: state.messages.concat(action.message) })
        default:
            return state;
    }
};


