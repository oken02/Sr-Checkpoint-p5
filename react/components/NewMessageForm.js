import React from 'react';

export default class extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            recipient: '',
            subject: '',
            body: ''
        }
    }

    render() {
        return (
            <form onSubmit={() => {
                this.props.onSend(this.state)
            }}>
                <div className="form-group">
                    <label>To:</label>
                    <input type="text" id="recipient-field" name="recipient" onChange={(e) => {

                        this.setState({ [e.target.name]: e.target.value.toString() })
                    }} />
                </div>
                <div className="form-group">
                    <label>Subject:</label>
                    <input type="text" id="subject-field" name="subject" onChange={(e) => {

                        this.setState({ [e.target.name]: e.target.value.toString() })
                    }} />
                </div>
                <div className="form-group">
                    <label>Body:</label>
                    <textarea id="body-field" name="body" onChange={(e) => {

                        this.setState({ [e.target.name]: e.target.value.toString() })
                    }} />
                </div>
                <button type="submit" >Send Message</button>
            </form>
        );
    }

}
