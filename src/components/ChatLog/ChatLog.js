import PropTypes from 'prop-types';
import React from 'react';

import ChatMessage from '../ChatMessage/ChatMessage';

import './ChatLog.css';


const ChatLog = (props) => {
	
	const {
		data,
	} = props;
	
	
	return (
		
		<div className="ChatLog">
			
			<h1 className="text-center">Chat Log</h1>
			
			{(data && data.length > 0) &&
				
				data.map( (message, index) => {
					return (
						<ChatMessage key={index} message={message} />
					);
				})
				
			}
			
			{(data && data.length <= 0) &&
				<h3>Chat Log is Empty</h3>
			}
			
		</div>
		
	);
	
};


ChatLog.propTypes = {
	data: PropTypes.array,
};


export default ChatLog;
