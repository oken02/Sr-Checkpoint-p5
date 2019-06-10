import React from 'react';

export default class extends React.Component {
    constructor(props){
        super(props)
        this.state={
            recipient: '',
            subject: '',
            body: ''
        }
    }
    
    render() {
        const that=this
        return (
            <form onSubmit={function (e) {
                that.props.onSend(that.state)
            }}>
                <div className="form-group">
                    <label>To:</label>
                    <input type="text" id="recipient-field" name="recipient" onChange={function (e) {
                        that.setState({recipient:e.target.value})
            }}/>
                </div>
                <div className="form-group">
                    <label>Subject:</label>
                    <input type="text" id="subject-field" name="subject" onChange={function (e) {
                        that.setState({subject:e.target.value})
            }}/>
                </div>
                <div className="form-group">
                    <label>Body:</label>
                    <textarea id="body-field" name="body" onChange={function (e) {
                        that.setState({body:e.target.value})
            }}/>
                </div>
                <button type="submit">Send Message</button>
            </form>
        );
    }

}
