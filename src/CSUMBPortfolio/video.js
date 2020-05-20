import React, { Component } from 'react';
//import DocumentTitle from 'react-document-title';
import ReactPlayer from 'react-player';
import '../Portfolio/video.css';

class Video extends Component {
	constructor(props) {
		super(props);
		this.state = {
			vidsrc: this.props.src,
		}
	}
	render() {
		var src = this.state.vidsrc; 
		return (
			<div>
				<ReactPlayer
					className='reactPlayer'
					url={src}
					width='100%'
					height='100%'
					controls='true'
				/>
			</div>
		)
	}
}

class Videos extends Component {
	constructor(props) {
		super(props);
		this.state = {
			videos: this.props.videos,
		}
	}
	render() {
		console.log("Dead");
		var vidSrc = this.props.videos;
		console.log(vidSrc);
		var size = "medium-4 large-4";
		if(vidSrc.length === 1) size = "medium-12 large-12";
		else if(vidSrc.length === 2) size = "medium-6 large-6";
		else if(!(vidSrc.length % 3)) size = "medium-4 large-4";
		else if(!(vidSrc.length % 4)) size = "medium-3 large-3";

		var vidList = vidSrc.map(function(src, index){
			console.log(src[1]);
			return (
				<div className={"cell " + size}>
					<h2 className="text-center">{src[0]}</h2>
					<div className="responsive-embed widescreen callout small">
						<Video title={src[0]} src={src[1]}/>
					</div>
				</div>

			)
		});
		return (
			<div class="grid-x grid-margin-x">
				{vidList}
			</div>
		)
	}
}

export default Videos;
