import ArrayToObject from './ArrayToObject';


describe('ArrayToObject', () => {
	
	const array = [{id: 1, label: 'Obj 1'}, {id: 2, label: 'Obj 2'}, {id: '3', label: 'Obj 3'}];
	
	
	it('Return NULL with no parameters', () => {
		expect( ArrayToObject() ).toBeNull();
	});
	
	
	it('Return NULL with Not Array parameter', () => {
		expect( ArrayToObject( 'test' ) ).toBeNull();
		expect( ArrayToObject( true ) ).toBeNull();
		expect( ArrayToObject( 5 ) ).toBeNull();
		expect( ArrayToObject( {} ) ).toBeNull();
	});
	
	
	it('Return empty Object with empty Array', () => {
		expect( ArrayToObject( [] ) ).toEqual( {} );
	});
	
	
	it('Return Object with proper values', () => {
		expect( ArrayToObject( array ) ).toEqual( {
			[array[0].id]: array[0],
			[array[1].id]: array[1],
			[array[2].id]: array[2],
		} );
	});
	
	
	it('Return Object with proper values with key', () => {
		expect( ArrayToObject( array, 'label') ).toEqual( {
			[array[0].label]: array[0],
			[array[1].label]: array[1],
			[array[2].label]: array[2],
		} );
	});
	
	
});
