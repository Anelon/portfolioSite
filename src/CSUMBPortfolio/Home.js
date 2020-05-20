import React, { Component } from 'react';
import DocumentTitle from 'react-document-title';
import '../App.css';
import ClassCards from './ClassCard.js'; 
import CSUMBLogo from '../img/CSUMBLogo.png';

class Portfolio extends Component {
	constructor(props) {
		super(props);
		this.state = {
			title: "Andrew Bell ILP"
		}
	}
	componentDidMount() {
		this.props.handler(this.state.title);
	}
	render() {
		return(
			<DocumentTitle title={this.state.title}>
				<div className="grid-x grid-padding-x full">
					<div className="medium-6 cell">
						<h2 className="text-center bold">
							<strong>Hello, my name is Andrew Bell</strong><br/>
						</h2>
						<p>
							Bell lives in Fresno where he tutors computer science a Clovis Community College. He got into tech at a young age mostly playing video games with his older brothers. In more recent years, he enjoys playing video games, watching anime and rock climbing.<br/>
							He is currently working on compleating his bachelors degree through CSUMB's online computer science degree completeion which at the end of he wishes to become a web developer, backend or full stack.
							{/*need to add description of the program (outcomes), and your goals*/}
						</p>
						{/*Center me later I guess and get rid of white?*/}
						<div className="grid-x grid-padding-x">
							<div className="medium-1 cell"/>
							<div className="medium-10 cell">
									<div className="small text-center">
										<img src={CSUMBLogo} alt="CSUMB" className="CardImg"></img>
									</div>
							</div>
						</div>
						{/*<img src={CSUMBLogo}alt="CSUMB" className="CardImg middle"></img>*/}
					</div>
					<div className="medium-6 cell scroll">
						<ClassCards/>
					</div>
				</div>
			</DocumentTitle>
		);
	}
}

export default Portfolio;
