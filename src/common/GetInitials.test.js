import GetInitials from './GetInitials';


describe('GetInitials', () => {
	
	const text = 'Test   Of Initials Example Text';
	
	
	it('Return Empty String with no parameters', () => {
		expect( GetInitials() ).toEqual('');
	});
	
	
	it('Return Empty String with Not String parameters', () => {
		expect( GetInitials( true ) ).toEqual('');
		expect( GetInitials( 5 ) ).toEqual('');
		expect( GetInitials( [] ) ).toEqual('');
		expect( GetInitials( {} ) ).toEqual('');
	});
	
	
	it('Return 2 letter initials', () => {
		const result = GetInitials( text );
		
		expect( result.length ).toBe(2);
		expect( result ).toBe('TO');
		expect( result ).not.toBe('to');
	});
	
	
	it('Return 4 letter initials', () => {
		const result = GetInitials( text, 4 );
		
		expect( result.length ).toBe(4);
		expect( result ).toBe('TOIE');
		expect( result ).not.toBe('toie');
	});
	
	
});
