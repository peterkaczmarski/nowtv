import PropTypes from 'prop-types';
import React, { Component } from 'react';

import GetInitials from '../../common/GetInitials';

import './ChatMessage.css';


class ChatMessage extends Component {
	
	constructor(props) {
		super(props);
		
		this.state = {
			showEmail: false,
		};
		
		this.onMouseOverHandler = this.onMouseOverHandler.bind(this);
		this.onMouseLeaveHandler = this.onMouseLeaveHandler.bind(this);
	}
	
	
	onMouseOverHandler() {
		this.setState({
			showEmail: true,
		})
	};
	
	
	onMouseLeaveHandler() {
		this.setState({
			showEmail: false,
		})
	};
	
	
	render() {
		
		if(!this.props.message) {
			
			return null;
			
		}
		
		
		const {
			avatar,
			email,
			fullName,
			message,
			timestamp,
		} = this.props.message;
		
		const{
			showEmail,
		} = this.state;
		
		// I could add this with CSS :hover.
		// but I added hiding email with React just to add a little security
		// this way those emails will not be read by robots so easily
		const {
			onMouseOverHandler,
			onMouseLeaveHandler,
		} = this;
		
		
		return (
			<div 
				className="ChatMessage container"
				onMouseOver={onMouseOverHandler}
				onMouseLeave={onMouseLeaveHandler}
			>
				
				<div className="col avatar">
					{avatar
						?	<img className="img-avatar" alt={`avatar - ${fullName}`} src={avatar} />
						: <div className="img-avatar img-avatar-dummy">{GetInitials(fullName)}</div>
					}
				</div>
				
				<div className="col">
					<p><span className="full-name">{fullName}</span> <span className="timestamp small">{timestamp}</span></p>
					<p className="message">{message}</p>
					<p className={`email small${showEmail ? ' text-select' : ''}`}>{showEmail ? email : 'Contact author?'}</p>
				</div>
				
			</div>
		);
		
	}
	
}

ChatMessage.defaultProps = {
	message: null
}

ChatMessage.propTypes = {
	message: PropTypes.shape({
		fullName: PropTypes.string,
		timestamp: PropTypes.string,
		email: PropTypes.string,
		message: PropTypes.string,
		avatar: PropTypes.string,
	})
};


export default ChatMessage;
