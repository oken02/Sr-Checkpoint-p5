import React from 'react';
import Message from './Message';
import store from '../redux/store';

export default class extends React.Component {

    constructor() {
        super();
        this.state = store.getState()
        store.subscribe(() => this.setState(store.getState()) )

    }
   
    
    render() {
        return (
            <div>
                {this.state.messages.map(m=>{
                    
                    return <Message fullMessage={m} />

                })}
                <h1>Inbox</h1>
            </div>
        );
    }

}