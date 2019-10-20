
export default (arr, key = 'id') => {
	
	if(  Array.isArray(arr) ) {
		
		return arr.reduce( ( acum, item ) => {
			
			acum[ item[ key ] ] = item;
			return acum;
			
		}, {});
		
	} else {
		
		return null;
		
	}
	
}
