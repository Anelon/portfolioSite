import React, { Component } from 'react';
import DocumentTitle from 'react-document-title';
import ReactPlayer from 'react-player';
import './video.css';

class Video extends Component {
	constructor(props) {
		super(props);
		this.state = {
			title: "Portfolio",
			src: 'https://youtu.be/x9rtS-u7qOY',
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
			title: "Portfolio",
		}
	}
	componentDidMount() {
		this.props.handler(this.state.title);
	}
	render() {
		var vidSrc = [
			'https://youtu.be/x9rtS-u7qOY',
			'https://youtu.be/HI2pN3uiewk',
			'https://youtu.be/X-q1Rst1Hn0',
			'https://youtu.be/591EtlZhyaU',
			'https://youtu.be/ddpsYcnsR6E',
			'https://youtu.be/AOq573v458Q',
		];
		var vidList = vidSrc.map(function(src, index){
			return (
				<div className="cell medium-4 large-4">
					<div className="responsive-embed widescreen callout small">
						<Video src={src}/>
					</div>
				</div>

			)
		});
		return (
			<DocumentTitle title="Video">
				<div class="grid-x grid-margin-x">
					{vidList}
				</div>
			</DocumentTitle>
		)
	}
}

export default Videos;
