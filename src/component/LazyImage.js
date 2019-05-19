import React, {Component} from 'react';
import { spawn } from 'child_process';

function arrayBufferToBase64(buffer) {
	let binary = '';
	let bytes = [].slice.call(new Uint8Array(buffer));
  
	bytes.forEach((b) => binary += String.fromCharCode(b));
  
	return window.btoa(binary);
}

export class LazyImage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isLoading: true
		};
		fetch(props.src)
		.then(response => response.blob())
		.then(images => {
			const url = URL.createObjectURL(images);
			this.setState({
				isLoading: false,
				src: url
			});
		})
		.catch(e => {
			console.log(e);
		});
	}	

	render() {
		return (
		<>
			{this.state.isLoading &&
				<span>Loading...</span>
			}
			{!this.state.isLoading &&
				<img className="card-img-top" src={this.state.src} alt={this.props.alt} style={{width:'100%', height: '10rem'}}></img>
			}
		</>);
	}
}