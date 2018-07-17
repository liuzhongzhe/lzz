import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import ComponentHeader from './components/ComponentHeader.vue';
registerServiceWorker();
class Index extends React.Conponents{
	render(){
		return(
			<ComponentHeader/>
		);
	}
}
ReactDOM.render(<Index/>,document.getElementById('app')