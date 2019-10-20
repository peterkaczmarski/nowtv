import React from 'react';
import ReactDOM from 'react-dom';
import ChatLog from './ChatLog';

import { shallow, mount } from 'enzyme';
import ChatMessage from '../ChatMessage/ChatMessage';


describe('ChatLog', () => {
	
	//Initial tests are duplicated. Depending on the guidelines of testing part of them must be removed
	
	it('renders without crashing', () => {
		const div = document.createElement('div');
		ReactDOM.render(<ChatLog />, div);
	});
	it('renders without crashing - Shallow', () => {
		shallow(<ChatLog />);
	});
	it('renders without crashing - Mount', () => {
		mount(<ChatLog />);
	});
	
	
	it('renders 0 Messages', () => {
		const wrapper = mount(<ChatLog />);
		
		expect(wrapper.find(ChatMessage).length).toEqual(0);
	});
	
	
	it('renders Empty Log Message', () => {
		const wrapper = mount(<ChatLog />);
		
		wrapper.setProps({ data: [] });
		
		const element = <h3>Chat Log is Empty</h3>;
		
		expect(wrapper.containsMatchingElement(element)).toBeTruthy();
	});
	
	
	it('renders 0 Messages', () => {
		const wrapper = mount(<ChatLog />);
		
		expect(wrapper.find(ChatMessage).length).toEqual(0);
	});
	
	
	const message = {
		avatar: "http://dummyimage.com/100x100.png/ff4444/ffffff",
		email: "wgonzalezz@va.gov",
		fullName: "Wanda Gonzalez",
		message: "Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.",
		messageId: "fe1e6aa3-3970-4d66-8bad-a00db85b6775",
		timestamp: "2/11/2017, 1:06:40 AM",
		userId: "7d4b8f6d-dcc1-4439-9571-e68022f7dafe",
	};
	
	
	it('renders 1 Message', () => {
		const wrapper = mount(<ChatLog />);
		
		wrapper.setProps({ data: [message] });
		
		expect(wrapper.find(ChatMessage).length).toEqual(1);
	});
	
	
	it('renders more (3) Messages', () => {
		const wrapper = mount(<ChatLog />);
		
		wrapper.setProps({ data: [message, message, message] });
		
		expect(wrapper.find(ChatMessage).length).toEqual(3);
	});
	
	
});
