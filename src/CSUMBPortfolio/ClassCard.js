import React, { Component } from 'react';
import DocumentTitle from 'react-document-title';
import { Link } from 'react-router-dom';
//import all of the classes (add as they are created)
//import ReactPlayer from 'react-player';
//import './video.css';

class ClassCard extends Component {
	constructor(props) {
		super(props);
		this.state = {
			title: "Andrew Bell ILP",
			className: this.props.className,
			available: this.props.available,
			//vidsrc: this.props.src,
		}
	}
	render() {
		var name = this.state.className; 
		var shortName = name.split(' ').slice(0,2).join('');//takes first 2 words of name
		var box;
		if(this.state.available) {
			//{/*render={(props) => <Class {...props} handler={this.handler} />}*/}
			box = (
				<div>
					<Link to={"/CSUMBPortfolio/"+shortName}>
						<div className="Card small fit">
							<h4 className="text-center">{name}</h4>
						</div>
					</Link>
				</div>
			);
		} else {
			box = (
				<div className="deadCard small fit">
					<h4 className="text-center">{name}</h4>
				</div>
			);
		}
		return (
			<div className="fit">
				{box}
			</div>
		)
	}
}

class ClassCards extends Component {
	constructor(props) {
		super(props);
		this.state = {
			title: "Andrew Bell ILP",
		}
	}
	render() {
		var classes = [
			//[Class Name, hasTaken]
			["CST 300 - Major Proseminar", true],
			["CST 205 - Multimedia and Design Programming (Python)", true],
			["CST 338 - Software Design (Java)", true],
			["CST 361 - CS and Community Service (Service Learning)", false],
			["CST 363 - Database Management (MySQL)", false],
			["CST 311 - Intro to Computer Networking", false],
			["CST 336 Internet programming (PHP)", false],
			["CST 325 - Graphics Programming", false],
			["CST 370 - Algorithms (C++ or Java)", false],
			["CST 438 - Software Engineering", false],
			["CST 499 - Directed Group Capstone", false],
		]
		var classList = classes.map(function(classe, index){
			return (
					<ClassCard className={classe[0]} available={classe[1]} />
			)
		});
		return (
			<DocumentTitle title="CSUMB ILP">
				<div class="grid-x grid-margin-x">
					{classList}
				</div>
			</DocumentTitle>
		)
	}
}

export default ClassCards;
