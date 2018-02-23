import React from 'react';
import Message from './Message';
import store from '../redux/store';

export default class extends React.Component {

    constructor() {
        super();
        this.state = {
            messages: []
        }
    }

    render() {
        return (
            <div>
                {this.state.messages.map((message) => {
                    return <Message fullMessage={message} />
                })}
            </div>
        );
    }

}