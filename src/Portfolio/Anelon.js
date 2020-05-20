import React, { Component } from 'react';
import DocumentTitle from 'react-document-title';
import '../App.css';

class Portfolio extends Component {
	constructor(props) {
		super(props);
		this.state = {
			title: "Portfolio"
		}
	}
	componentDidMount() {
		this.props.handler(this.state.title);
	}
	render() {
		return(
			<DocumentTitle title={this.state.title}>
				<div className="valign-center">
							<h2 className="text-center bold white">
								<strong>Hello, my name is Andrew Bell,</strong><br/>
								some of my hobbies are<br/>
								Rock Climbing, Graphic Design, and Coding.
							</h2>
				</div>
			</DocumentTitle>
		);
	}
}

export default Portfolio;
