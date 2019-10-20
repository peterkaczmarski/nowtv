import {
	getMessages,
	getMembers,
} from './data';
import arrayToObject from './common/ArrayToObject';


export default async function getChatLog() {
	
	const members = await getMembers()
		.then( response => {
			
			// Testing handling error
			// throw new Error("Whoops!");
			
			// Assuming that all users are unique and have unique "id", 
			// I move them from array to hash object, for faster assignment of a message to user
			
			return arrayToObject(response, 'id');
			
		});
	
	
	const messages = await getMessages()
		.then( response => {
			
			return response
				.map( item => {
					
					const {
						id,
						message,
						userId,
						timestamp,
					} = item;
					
					const {
						firstName,
						lastName,
						email,
						avatar,
					} = members[userId];
					
					return {
						messageId: id,
						message,
						userId,
						timestamp: new Date(timestamp).toLocaleString(),
						fullName: `${firstName} ${lastName}`,
						email,
						avatar,
					};
					
				})
				.sort( (a, b) => {
					// This sort will be slower then having timestamp as Date in map function abowe.
					// But to pass initial test in service.test.js I do it here like this.
					// Converting each time string to Date while comparing in sort, not officient at all.
					
					// Could also do it in erlier map:
					// timestamp: new Date(timestamp)
					// and after this sort chain another map again and conver it to timestamp.toLocaleString() and return it like that.
					
					return new Date(b.timestamp) - new Date(a.timestamp);
					
				});
			
		});
	
	//In real life app, I would be tempted to create MessageClass and return array of custom objects "messages"
	return Promise.resolve(messages);
	
};
