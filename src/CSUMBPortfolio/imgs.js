import React, { Component } from 'react';
//import DocumentTitle from 'react-document-title';
import '../Portfolio/video.css';
import Lowlight from 'react-lowlight'
import python from 'highlight.js/lib/languages/python'

// Then register them with lowlight
Lowlight.registerLanguage('python', python)

class Imgs extends Component {
	constructor(props) {
		super(props);
		this.state = {
			imgs: this.props.imgs,
			pics: this.props.pics,
         lang: this.props.lang,
		}
	}
	render() {
      var lang = this.state.lang;
		var imgs = this.state.imgs;
		var pics = this.state.pics;
      var isCode = this.state.lang !== "text";
		var size = "medium-6 large-6";
		var left = true;

		var imgList = imgs.map(function(src, index){
			var singleImg = src.length === 4;
			var image;
			var desc = <p><br/>{singleImg ? src[3] : src[4]}</p>;
			if(!singleImg) {
				image = ( 
					<div>
						<h2 className="text-center">Before</h2>
						<img src={pics[src[3]]} alt={src[3]} />

						<h2 className="text-center">After</h2>
						<img src={pics[src[2]]} alt={src[2]} />
					</div>
				);
			} else {
				image = ( 
					<div>
						<h2 className="text-center">Result</h2>
						<img src={pics[src[2]]} alt={src[2]} />
					</div>
				);
			}
         //set up the code vs text side pannel
         var code;
         if(isCode) 
            code = (<Lowlight language={lang} value={src[1]} />);
         else code = (<p>{src[1]}</p>);
         var place;
			if(left) { 
				place = (
					<div class="grid-x code">
						<div className={"cell " + size + " holder"}>{image}{singleImg && desc}</div>
						<div className={"cell " + size + " holder"}>{code}{!singleImg && desc}</div>
					</div>
				);
			} else {
				place = (
					<div class="grid-x code">
						<div className={"cell " + size + " holder"}>{image}{singleImg && desc}</div>
						<div className={"cell " + size + " holder"}>{code}{!singleImg && desc}</div>
					</div>
				);
			}
			left = !left;

			return (
				<div className="imageDiv">
					<h2 className="text-center"><strong>{src[0]}</strong></h2>
					{place}
				</div>
			)
		});
		return (
			<div>
				<link
					rel="stylesheet"
					href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.2.0/styles/default.min.css"
				/>
				{imgList}
			</div>
		)
	}
}

export default Imgs;
