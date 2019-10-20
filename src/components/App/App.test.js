import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { shallow, mount } from 'enzyme';

import Loading from '../Loading/Loading';
import ChatLog from '../ChatLog/ChatLog';


describe('App', () => {
	
	//Initial tests are duplicated. Depending on the guidelines of testing part of them must be removed
	
	it('renders without crashing', () => {
		const div = document.createElement('div');
		ReactDOM.render(<App />, div);
	});
	it('renders without crashing - Shallow', () => {
		shallow(<App />);
	});
	it('renders without crashing - Mount', () => {
		mount(<App />);
	});
	
	
	it('renders Loading...', () => {
		const wrapper = mount(<App />);
		
		expect(wrapper.find(Loading).length).toEqual(1);
	});
	
	
	it('renders Error onError', () => {
		const wrapper = mount(<App />);
		
		wrapper.instance().onError();
		wrapper.update();
		
		const element = <h3>Error Loading Data</h3>;
		
		expect(wrapper.containsMatchingElement(element)).toBeTruthy();
	});
	
	
	it('renders Chatlog onSuccess', () => {
		const wrapper = mount(<App />);
		
		wrapper.instance().onSuccess([]);
		wrapper.update();
		
		expect(wrapper.find(ChatLog).length).toEqual(1);
	});
	
	
});

