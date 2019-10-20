import React from 'react';
import ReactDOM from 'react-dom';
import ChatMessage from './ChatMessage';

import { shallow, mount } from 'enzyme';
import GetInitials from '../../common/GetInitials';

describe('ChatMessage', () =>{
	
	//Initial tests are duplicated. Depending on the guidelines of testing part of them must be removed
	
	it('renders without crashing', () => {
		const div = document.createElement('div');
		ReactDOM.render(<ChatMessage />, div);
	});
	it('renders without crashing - Shallow', () => {
		shallow(<ChatMessage />);
	});
	it('renders without crashing - Mount', () => {
		mount(<ChatMessage />);
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
	
	const messageNoAvatar = {
		...message,
		avatar: null,
	};
	
	
	it('renders Full Name', () => {
		const wrapper = mount(<ChatMessage />);
		
		wrapper.setProps({ message });
		
		const text = message.fullName;
		
		expect(wrapper.text().includes(text)).toBe(true);
	});
	
	
	it('renders Timestamp', () => {
		const wrapper = mount(<ChatMessage />);
		
		wrapper.setProps({ message });
		
		const text = message.timestamp;
		
		expect(wrapper.text().includes(text)).toBe(true);
	});
	
	
	it('renders Message Text', () => {
		const wrapper = mount(<ChatMessage />);
		
		wrapper.setProps({ message });
		
		const text = message.message;
		
		expect(wrapper.text().includes(text)).toBe(true);
	});
	
	
	it('renders NO Email', () => {
		const wrapper = mount(<ChatMessage />);
		
		wrapper.setProps({ message });
		
		const text = message.email;
		
		expect(wrapper.text().includes(text)).not.toBe(true);
	});
	
	
	it('renders Email on "hover"', () => {
		const wrapper = mount(<ChatMessage />);
		
		wrapper.setProps({ message });
		
		const text = message.email;
		
		wrapper.simulate('mouseover');
		expect(wrapper.text().includes(text)).toBe(true);
		
		wrapper.simulate('mouseleave');
		expect(wrapper.text().includes(text)).not.toBe(true);
	});
	
	
	it('renders Avatar Image', () => {
		const wrapper = mount(<ChatMessage />);
		
		wrapper.setProps({ message });
		
		const avatar = message.avatar;
		
		expect(wrapper.find('img.img-avatar').prop('src')).toEqual(avatar);
	});
	
	
	it('renders Avatar Dummy', () => {
		const wrapper = mount(<ChatMessage />);
		
		wrapper.setProps({ message: messageNoAvatar });
		
		const text = GetInitials(message.fullName);
		
		expect(wrapper.find('.img-avatar-dummy').length).toEqual(1);
		expect(wrapper.find('.img-avatar-dummy').text()).toEqual(text);
	});
	
	
});
