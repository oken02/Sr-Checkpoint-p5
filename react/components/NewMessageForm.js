import React from "react";

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recipient: "",
      subject: "",
      body: "",
    };
    this.onInpChange = this.onInpChange.bind(this);
  }

  onInpChange({ target: { name, value } }) {
    this.setState({ [name]: value });
  }

  render() {
    const { onSend } = this.props;
    return (
      <form onSubmit={() => onSend(this.state)}>
        <div className="form-group">
          <label>To:</label>
          <input
            onChange={this.onInpChange}
            type="text"
            id="recipient-field"
            name="recipient"
          />
        </div>
        <div className="form-group">
          <label>Subject:</label>
          <input
            onChange={this.onInpChange}
            type="text"
            id="subject-field"
            name="subject"
          />
        </div>
        <div className="form-group">
          <label>Body:</label>
          <textarea onChange={this.onInpChange} id="body-field" name="body" />
        </div>
        <button type="submit">Send Message</button>
      </form>
    );
  }
}
