import React from 'react';
import ReactDOM from 'react-dom';
import Loading from './Loading';


describe('Loading', () =>{
	
	// No need to add more tests here. This is super simple.
	
	it('renders without crashing', () => {
		const div = document.createElement('div');
		ReactDOM.render(<Loading />, div);
	});
	
	
});
