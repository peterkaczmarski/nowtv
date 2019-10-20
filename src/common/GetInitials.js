
export default (value, length = 2) => {
	
	if(!value || typeof(value) !== 'string') {
		
		return '';
		
	}
	
	return value
		.replace(/\s\s+/g, ' ')
		.split(' ')
		.reduce( ( accum, item, index ) => {
		
			if(index < length) {
				return `${accum}${item.charAt(0).toUpperCase()}`;
			} else {
				return accum;
			}
			
		}, '');
	
};
