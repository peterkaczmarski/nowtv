import React, { Component } from 'react';

import getChatLog from '../../service';
import Loading from '../Loading/Loading';
import ChatLog from '../ChatLog/ChatLog';

import './App.css';


class App extends Component {
	
	constructor(props) {
		super(props);
		
		this.state = {
			data: null,
			error: false,
		}
		
	}
	
	
	componentDidMount() {
		
		getChatLog()
			.then(this.onSuccess.bind(this)) 
			.catch(this.onError.bind(this));
			
	}
	
	
	onSuccess(response) {
		
		this.setState({
			data: response,
			error: false,
		});
		
	}
	
	
	onError() {
		
		this.setState({
			data: null,
			error: true,
		});
		
	}
	
	
  render() {
		
		const {
			data,
			error,
		} = this.state;
		
    return (
      <div className="AppContainer">
				
        <h1 className="text-center">
          Hello Robin!
				</h1>
				
				{ !data &&
					(error 
						? <h3 className="text-center">Error Loading Data</h3>
						: <Loading />
					)
				}
				
				{data &&
					<ChatLog data={data} />
				}
				
      </div>
    );
  }
}

export default App;
