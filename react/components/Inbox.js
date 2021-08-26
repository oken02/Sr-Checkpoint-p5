import React from "react";
import Message from "./Message";

export default class extends React.Component {
  constructor() {
    super();
    this.state = {
      messages: [],
    };
  }

  render() {
    const { messages } = this.state;
    return (
      <div>
        <h1>Inbox</h1>

        {messages.map((mess) => (
          <Message key={mess.id} fullMessage={mess} />
        ))}
      </div>
    );
  }
}
