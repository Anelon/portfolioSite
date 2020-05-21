import React, { Component } from 'react';
import Tabs from './tabs.js';
// eslint-disable-next-line
import Imgs from './imgs.js';
import Videos from './video.js';

//import { Document, Page } from 'react-pdf'
function importAll(r) {
  let images = {};
	// eslint-disable-next-line
  r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
  return images;
}

// This condition actually should detect if it's an Node environment
if (typeof require.context === 'undefined') {
  const fs = require('fs');
  const path = require('path');

  require.context = (base = '.', scanSubDirectories = false, regularExpression = /\.js$/) => {
    const files = {};

    function readDirectory(directory) {
      fs.readdirSync(directory).forEach((file) => {
        const fullPath = path.resolve(directory, file);

        if (fs.statSync(fullPath).isDirectory()) {
          if (scanSubDirectories) readDirectory(fullPath);

          return;
        }

        if (!regularExpression.test(fullPath)) return;

        files[fullPath] = true;
      });
    }

    readDirectory(path.resolve(__dirname, base));

    function Module(file) {
      return require(file);
    }

    Module.keys = () => Object.keys(files);

    return Module;
  };
}

// eslint-disable-next-line
const images = importAll(require.context('./338images', false, /\.(png|jpe?g|svg)$/));


class CST338 extends Component {
	constructor(props) {
		super(props);
		this.state = {
			title: "CST 338",
			classDesc: "The Software Design course focuses on software development with an intro to the Java language.  This course illustrates the software life-cycle and development process. For students that wish to build applications from the ground up, this course will be crucial in providing the necessary framework/structure. For those that don’t, understanding the development process will still be beneficial. As Java is a cross platform language as well as the language of choice for mobile development, the language is especially important to learn."
		}
	}
	componentDidMount() {
		this.props.handler(this.state.title);
	}
	render() {
		var desc = this.state.classDesc;
		var pokeBattleVideo = [
			["Run of PokeBattle", "https://youtu.be/NwFBZQ4ytwQ"],
		];
		var slotGameVideo = [
			["Casino Game", "https://youtu.be/kpo8mRvB-5U"],
		];

		return (
			<div className="fullScroll">
				{/*<h1 className="text-center">{name}</h1>*/}
				<p className="desc">{desc}</p>
				{/* requires 2 items in */}
				<Tabs>
               <div label="Poke Battle">
                  <div>
                     {/* make link look better at somepoint */}
                     <div class="grid-x grid-margin-x">
                        <div className="cell medium-6 large-6" >
                           <p>
                              I wanted to make something similar to a project that I find is a really good conection of a lot of the intrductory parts of a language, Pokemon, a very very simplified version of pokemon. This requires the user to select two Pokemon, then 4 moves for each Pokemon. This gives a really good idea for how file input and output works as well as classes and inheritance as it requres at least 3 classes with the base Pokemonclass that holds all of the base stats. A Move class which holds all of the move stats and name. Finally a UserPokemon class that inherites from Pokemon and adds a vector of 4 moves and adds a current health (could be expanded to hold current stats.
                           </p>
                           <a href="https://github.com/Anelon/CSUMBfolio/tree/master/CST338/PokeBattleAndroid" className="codeLink">Code in Github</a>
                        </div>
                        <div className="cell medium-6 large-6" >
                           <Videos videos={pokeBattleVideo}/>
                        </div>
                     </div>
                  </div>
               </div>
               <div label="Text Slot Game">
                  <div>
                     {/* make link look better at somepoint */}
                     <div class="grid-x grid-margin-x">
                        <div className="cell medium-6 large-6" >
                           <p>
                              This was an interesting but not that challenging project. We were tasked with making a simple slot game as a way of randomizing strings based on simple percentages. The video included shows much of the aproach took but it was. One of the weird spots I ran into while working on this assignment was the strange stats compared to what should be expected from a slot game (giving the user way too many chances of winning).
                           </p>
                           <a href="https://github.com/Anelon/CSUMBfolio/blob/master/CST338/Assig2/Assig2.java" className="codeLink">Code in Github</a>
                        </div>
                        <div className="cell medium-6 large-6" >
                           <Videos videos={slotGameVideo}/>
                        </div>
                     </div>
                  </div>
               </div>
               <div label="Card Game">
                  <div>
                     {/* make link look better at somepoint */}
                     <div class="grid-x grid-margin-x">
                        <div className="cell medium-6 large-6" >
                           <p>
                              A card game that was made based off of a previous assignment using Java's Swing library. The game is ment to allow the user to select a card and then a pile of cards, it would then verify if the card is playable (the card is one number value above or below the card last played on that pile), then the AI will run it's turn. If both are can not play new hands are delt untill the deck runs out of card.
                           </p>
                           <a href="https://github.com/Anelon/CST338/blob/master/Assig6/src/MVC.java" className="codeLink">Code in Github</a>
                        </div>
                        <div className="cell medium-6 large-6" >
                           <img src={images["cardGame.jpg"]} alt="Card Game" />
                        </div>
                     </div>
                  </div>
               </div>
				</Tabs>
			</div>
		)
	}
}

export default CST338;
