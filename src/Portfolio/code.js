import React, { Component } from 'react';
import DocumentTitle from 'react-document-title';

class Code extends Component {
	constructor(props) {
		super(props);
		this.state = {
			title: "Portfolio",
		}
	}
	componentDidMount() {
		this.props.handler(this.state.title);
	}
	render() {
		return (
			<DocumentTitle title="Code">
				<div className="grid-x align-middle align-center-middle full">
				<div className="text-center cell medium-6">
					{/* centered list of programs*/}
					<div className="codeLinks">
						<h2>Home of the Magic</h2>
						<ul class="vertical menu">
							<li><a href="https://github.com/anelon" className="codeLink">Github Profile</a></li>
							<li><a href="https://anelon.github.io/rpg_game" className="codeLink">Kawaii Squid</a></li>
							<li><a href="https://github.com/Alipongoy/CSCI152Pi/wiki/How-it-works" className="codeLink">RasPi Parking Detection and Map</a></li>
							<li><a href="/ttt" className="codeLink">TicTacToe with AI</a></li>
							<li><a href="/anelon/points" className="codeLink">Kerney Houses</a></li>
							<li><a href="/anelon/dos" className="codeLink">Environment Squares</a></li>
							<li><a href="/anelon/ToDo" className="codeLink">To Do List</a></li>
						</ul>
					</div>
				</div>
				</div>
			</DocumentTitle>
		)
	}
}

export default Code;
