import React, { Component } from 'react';
import Tabs from './tabs.js';
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

const images = importAll(require.context('./205images', false, /\.(png|jpe?g|svg)$/));

//<img src={images['doggy.png']} />

class CST205 extends Component {
	constructor(props) {
		super(props);
		this.state = {
			title: "CST 205",
			classDesc: "This class is an introduction to the python language. Covering different python functions, data types and expressions in python. The core of this class to give students a conceptual understanding of digital media concepts and formats and manipulating digital media with the python language. Due to the high level, cross-platform nature of the language, it will be beneficial in rapidly creating and deploying software across multiple platforms. In the professional world, this means reaching a wide audience, which translates to increased profits in most cases."
		}
	}
	componentDidMount() {
		this.props.handler(this.state.title);
	}
	render() {
		//var name = this.state.title;
		console.log("images");
		console.log(images);
		var desc = this.state.classDesc;
		var midterm = [
			["Cell Shading - Midterm", 
`#Cell Shadded
def simpleCopy(mypic):
    width = getWidth(mypic)
    height = getHeight(mypic)
    pic = makeEmptyPicture(width, height)
    for x in range (0, width):
        for y in range (0, height):
            setColor(getPixel(pic, x, y), getColor(getPixel(mypic, x, y)))
    return pic

#simplifies colors to get better outlines
def prepLines(pic):
    width = getWidth(pic)
    height = getHeight(pic)
    for x in range (0, width):
        for y in range (0, height):
            p = getPixel(pic, x, y)
            r = getRed(p)
            g = getGreen(p)
            b = getBlue(p)
            if r < 128: r = 64
            else: r = 220
            if g < 128: g = 64
            else: g = 220
            if b < 128: b = 64
            else: b = 220
            setColor(p, makeColor(r,g,b))

def artify(pic):
    width = getWidth(pic)
    height = getHeight(pic)
    for x in range (0, width):
        for y in range (0, height):
            p = getPixel(pic, x, y)
            r = getRed(p)
            g = getGreen(p)
            b = getBlue(p)
            if r < 64: r = 32
            elif r < 128: r = 96
            elif r < 192: r = 160
            else: r = 220
            if g < 64: g = 32
            elif g < 128: g = 96
            elif g < 192: g = 160
            else: g = 220
            if b < 64: b = 32
            elif b < 128: b = 96
            elif b < 192: b = 160
            else: b = 220
            setColor(p, makeColor(r,g,b))

def lineDraw(pic):
    prepLines(pic)
    width = getWidth(pic)
    height = getHeight(pic)
    tolerance = 20
    for x in range(0, width):
        for y in range(0,height):
            p = getPixel(pic, x, y)
            pLum = getRed(p) + getBlue(p) + getGreen(p)
            if x + 1 < width:
                c = getPixel(pic, x + 1, y)
                cLum = getRed(c) + getBlue(c) + getGreen(c)
                if abs(pLum - cLum) > tolerance:
                    if x-1 >= 0:
                        b = getPixel(pic, x - 1, y)
                        setColor(b, black)
                    if y-1 >= 0:
                        b = getPixel(pic, x, y - 1)
                        setColor(b, black)
                    setColor(p, black)
                else: setColor(p, white)
            if y + 1 < height:
                c = getPixel(pic, x, y + 1)
                cLum = getRed(c) + getBlue(c) + getGreen(c)
                if abs(pLum - cLum) > tolerance:
                    if x-1 >= 0:
                        b = getPixel(pic, x - 1, y)
                        setColor(b, black)
                    if y-1 >= 0:
                        b = getPixel(pic, x, y - 1)
                        setColor(b, black)
                    setColor(p, black)
                else: setColor(p, white)
    return pic

def recolor(color, outline):
    width = getWidth(color)
    height = getHeight(color)
    for x in range (0, width):
        for y in range (0, height):
            o = getPixel(outline, x, y)
            if getColor(o) == white:
                c = getPixel(color, x, y)
                setColor(o, getColor(c))

#Main function to run for filter
def celShaded():
    path = pickAFile() #Select a picture from desired directory
    pic = makePicture(path)
    if '.' in path:
        path = path[:path.rfind('.')] + '.'
        path = path[:-1]
    print(path)
    outline = simpleCopy(pic)
    artify(pic)
    #betterBnW(outline)
    explore(pic)
    lineDraw(outline)
    explore(outline)
    recolor(pic, outline)
    explore(outline)
    writePictureTo(outline, path + "CelShaded.jpg")
    return pic`,"cellShade.jpg","cellShadePre.jpg", "This was a really cool project, after seeing the line draw function I was wondering if I could create a cell shaded inspired filter. The idea was to use a mix of the artify function and the line draw filter to create lines based on where the biggest change in colors were and then collor in those lines with simplified colors from the origional image."]];
		var collages = [
			["Japan Collage", 
`def makeCollage():
  path = "F:/Programing/CSUMB/CSUMBfolio/CST205/Lab5Imgs/"
  width = 3300
  height = 2550
  x = 0
  y = 0
  pic = makeEmptyPicture(width, height)
  pyCopy(makePicture(path + "HayBack.jpg"), pic, 0, 0)
  #Make array for imgs
  imgs = []
  #first Row of imgs
  castle = makePicture(path + "Castle.jpg")
  imgs.append(castle)

  SkyBuild = makePicture(path + "SkyBuilding.jpg")
  SkyBuild = rotate(SkyBuild)
  SkyBuild = mirrorVerticalRight(SkyBuild)
  imgs.append(SkyBuild)

  Aquarium = makePicture(path + "Aquarium.jpg")
  imgs.append(Aquarium)

  #2nd row of imgs
  Inari = makePicture(path + "Inari.jpg")
  artify(Inari)
  imgs.append(Inari)

  Train = makePicture(path + "TrainLine.jpg")
  imgs.append(Train)

  CastleBloss = makePicture(path + "CastleBloss.jpg")
  betterBnW(CastleBloss)
  imgs.append(CastleBloss)

  #3rd row of imgs
  Station = makePicture(path + "Station.jpg")
  imgs.append(Station)

  Tori = makePicture(path + "Tori.jpg")
  imgs.append(rotate(Tori))

  Fuji = makePicture(path + "Fuji.jpg")
  mirrorHorizontalTop(Fuji)
  imgs.append(Fuji)
  #place image
  for img in imgs:
    if(getWidth(img) > getHeight(img)): pyCopy(img, pic, x, y)
    else: pyCopy(img, pic, x, y-20)
      x += getWidth(img)
      if x >= width:
        x = 0
        y += getHeight(img) + 40 #20 for extra spacing

  explore(pic)
  writePictureTo(pic, path + "Out.jpg")
  return pic`,"collage.jpg", "This was a fun project to make as it was fun to put a few of the pictures I had taken across my trips to Japan together. The hard part of this assignment was finding which filters to put on pictures that would make them look better."],
			["St. Patrick's Day Card", 
`def whiteCopy(src, target, targetX, targetY):
  width = getWidth(src)
  height = getHeight(src)
  #prevent image from going over the edge
  if targetY < 0: targetY = 0
  if targetX < 0: targetX = 0
  if targetX+width >= getWidth(target): width = getWidth(target)-targetX-1
  if targetY+height >= getHeight(target): height = getHeight(target)-targetY-1
  for x in range (0, width):
    for y in range (0, height):
      p = getPixel(src, x, y)
      if distance(makeColor(255, 225, 255), getColor(p)) > 40:
         setColor(getPixel(target, targetX+x, targetY+y), getColor(getPixel(src, x, y)))
  return target

def makeCard():
  path = pickAFile() #Select a picture from desired directory
  path = path[:path.rfind('\\')] + '\\'
  print(path)
  background = makePicture(path + "cloverbackground.jpg") #clover (width =1000, height = 1400 , 5x7)
  leprechaun = makePicture(path + "leprechaun.jpg")
  csumb = makePicture(path + "csumblogo.jpg")
  bottom = getHeight(background)
  right = getWidth(background)
  left = 0
  centerWidth = getWidth(background) - getWidth(background)/2
  centerHeight = getHeight(background)/2
  newPic = whiteCopy(leprechaun, background,  centerWidth, centerHeight)
  newPic = whiteCopy(csumb, newPic,  50, 100)
  x = getWidth(newPic)-700
  y = getHeight(newPic)-getHeight(newPic)/4
  placeShadowText("Happy St. Patrick's day!", newPic, x, y)
  x = getWidth(newPic)-700
  y = getHeight(newPic)-getHeight(newPic)/5
  placeShadowText("Have a nice day!", newPic, x, y)
  x = 400
  y = 75
  placeShadowText("From: Shelly and Bell", newPic, x, y)
  explore(newPic)
  writePictureTo(newPic, path + "card.jpg")
  return newPic

def placeShadowText(text, pic, posx, posy):
  style = makeStyle(sansSerif, bold, 50)
  color = orange
  addTextWithStyle(pic, posx, posy, text, style, color)
  color = white
  addTextWithStyle(pic, posx-5, posy-2, text, style, color)
  #repaint(pic)`, "card.jpg", "For this collage we were tasked with making a card for St. Patrick's Day which. To make this we modified our green screen code to work with white backgrounds. The problem was the first attempt there was not the drop shadow on the text so it didn't contrast much with the background so I added a placeShadowText function to make placing a shadow on the text easier."],
			["Green Screen", 
`def greenCopy(src, target, targetX, targetY):
  width = getWidth(src)
  height = getHeight(src)
  #prevent image from going over the edge
  if targetY < 0: targetY = 0
  if targetX < 0: targetX = 0
  if targetX+width >= getWidth(target): width = getWidth(target)-targetX-1
  if targetY+height >= getHeight(target): height = getHeight(target)-targetY-1
  for x in range (0, width):
    for y in range (0, height):
      p = getPixel(src, x, y)
      if distance(makeColor(86, 225, 10), getColor(p)) > 125 and distance(makeColor(43, 216, 39), getColor(p)) > 120:
        setColor(getPixel(target, targetX+x, targetY+y), getColor(getPixel(src, x, y)))
  return target

def chromakey():
  obama = get_pic()
  trex = get_pic()
  background = get_pic()
  bottom = getHeight(background)
  right = getWidth(background)
  left = 0
  newPic = greenCopy(trex, background, left, bottom-getHeight(trex))
  newPic = greenCopy(obama, newPic, right-getWidth(obama), bottom-getHeight(obama))
  repaint(newPic)
  return newPic`, "chromaKey.png", "Making a chroma key filter was not that difficult, the hardest part as with most of these assignments was figuring out which pictures to go with. But when my team found the Obama interview image someone sugested him interviewing a Trex which picture was then found and so we put them in an interview background. Getting the right color of green to be selected was probably the most difficult part of this assignment but with some fiddling we quickly eliminated the green."],
		];
		var color = [
			["Artify", 
`def artify():
  file = pickAFile()
  pic = makePicture(file)
  for p in getPixels(pic):
    r = getRed(p)
    b = getBlue(p)
    g = getGreen(p)

    if(r < 64): setRed(p, 31)
    elif(r>63 and r<128): setRed(p, 95)
    elif(r>127 and r < 192): setRed(p, 159)
    else: setRed(p, 223)

    if(g < 64): setGreen(p, 31)
    elif(g>63 and g<128): setGreen(p, 95)
    elif(g>127 and g < 192): setGreen(p, 159)
    else: setGreen(p, 223)

    if(b < 64): setBlue(p, 31)
    elif(b>63 and b<128): setBlue(p, 95)
    elif(b>127 and b < 192): setBlue(p, 159)
    else: setBlue(p, 223)
  show(pic)`, "artify.jpg", "artifyPre.jpg", "This was a cool filter to do as I personally like the cell shadded look and simplifying the colors is one step closer to getting to that goal."],
			["Better Black and White", 
`def betterBnW():
  pic = get_pic()
  pixels = getPixels(pic)
  for px in getPixels(pic):
    r = getRed(px)
    g = getGreen(px)
    b = getBlue(px)
    avg = (r*0.299 + g*0.587 + b*0.114)
    luminanceColors = makeColor(avg,avg,avg)
    setColor(px, luminanceColors)
  repaint(pic)`, "bnw.jpg", "bnwPre.jpg", "Better black and white was interesting to learn how each color actually effects the precieved brightness of an image. One issue I had with this filter was accidentally dividing the average calculation by 3 leaving the image much darker than intended."],
			["Negative", 
`def makeNegative(pic):
  pixels = getPixels(pic)
  for p in pixels:
    r = 255 - getRed(p)
    b = 255 - getBlue(p)
    g = 255 - getGreen(p)
    setRed(p, r)
    setGreen(p, g)
    setBlue(p, b)
  repaint(pic)`, "negative.jpg", "negativePre.jpg", "Negative is a very generic filter that I feel almost never looks good but is always fun to see what the inverted colors looks like."],
			["Rose-colored Glasses", 
`def roseColoredGlasses(pic):
  pixels = getPixels(pic)
  for p in pixels:
    #Boost Red lower others
    r = getRed(p) + 50
    b = getBlue(p) - 50
    g = getGreen(p) - 50
    #Prevent Overflow/Underflow
    if r > 255: r = 255
    if b < 0: b = 0
    if g < 0: g = 0
    setRed(p, r)
    setGreen(p, g)
    setBlue(p, b)
  repaint(pic)`, "rose.jpg", "rosePre.jpg", "Viewing the world through rose colored glasses is a saying that doesn't really make much sense to me but the filter was probably one of the weirdest to write, at first we tried to write the filter by multiplying values but that was not really working so I adjusted it to be a flat addition and subtraction to the values giving more of the red look."]
		];
		var pixel = [
			["Line Drawing", 
`def betterBnW(pic):
  width = getWidth(pic)
  height = getHeight(pic)
  for x in range (0, width):
    for y in range (0, height):
      px = getPixel(pic, x, y)
      r = getRed(px)
      g = getGreen(px)
      b = getBlue(px)
      avg = (r*0.299 + g*0.587 + b*0.114)
      luminanceColors = makeColor(avg,avg,avg)
      setColor(px, luminanceColors)

def lineDraw(pic):
  writePictureTo(pic, path + "linePre.jpg")
  betterBnW(pic)
  width = getWidth(pic)
  height = getHeight(pic)
  tolerance = 35
  for x in range(0, width):
    for y in range(0,height):
      p = getPixel(pic, x, y)
      pLum = getRed(p) + getBlue(p) + getBlue(p)
      if x + 1 < width:
        c = getPixel(pic, x + 1, y)
        cLum = getRed(c) + getBlue(c) + getBlue(c)
        if abs(pLum - cLum) > tolerance: setColor(p, black)
        else: setColor(p, white)
      if y + 1 < height:
        c = getPixel(pic, x, y + 1)
        cLum = getRed(c) + getBlue(c) + getBlue(c)
        if abs(pLum - cLum) > tolerance: setColor(p, black)
        else: setColor(p, white)
  writePictureTo(pic, path + "line.jpg")
  explore(pic)
  return pic`, "line.jpg", "linePre.jpg", "I liked how this one looked almost hand drawn image and it was really cool to see how it changed an image. I ran this filter with the prelining as a simplified version of the Artify function. Results of this testing may be seen later. Figuring out how much was echough of a tolerance in attempts of drawing lines but not too many of to little I ended at 35, which was just because it looked good."],
			["Top-to-bottom mirror", 
`def mirrorHorizontalTop(mypic):
  width = getWidth(mypic)
  height = getHeight(mypic)
  for x in range (0, width):
     for y in range (0, height/2):
		 setColor(getPixel(mypic, x, height-y-1), getColor(getPixel(mypic,x, y)))`, "mirror.jpg", "mirrorPre.jpg",
			"Mirroring and image is very simple, the hard part is figuring out which part of the image you are grabbing from and where you are putting it to."],
			["Shrink", 
`def shrink(mypic):
  width = int(getWidth(mypic)/2)
  height = int(getHeight(mypic)/2)
  pic = makeEmptyPicture(width, height)
  for x in range (0, width):
    for y in range (0, height):
       setColor(getPixel(pic, x, y), getColor(getPixel(mypic, x*2, y*2)))
  show(pic)
  writePictureTo(pic, path + "shrink.jpg")
  return pic`, "shrink.jpg", "shrinkPre.jpg", "Shrink was another one of the easier ones to write as you simply grab every other pixel, it would have been interesting to try and average every 4 pixels into one, another thing that might be fun to try later would be to upscale images as that require more blending of one side to another."],
			["Red-eye Reduction", 
`def redEye(pic):
  for p in getPixels(pic):
     if distance(makeColor(178, 0, 0), getColor(p)) < 120:
       setColor(p, black)
  return pic`, "redEye.png", "preRedEye.png", "Durring this assignment I truly realized how many reds there were and how close people's faces are to red colored making it very hard to isolate the right red color. This filter will not work on a lot of images but it worked really well on the one that we used and its one of the most short and sweet filters on this list."],
		];

		var videos = [
			["Final Presentation Video", "https://youtu.be/cNuoDQMsWao"],
		];

		return (
			<div className="fullScroll">
				{/*<h1 className="text-center">{name}</h1>*/}
				<p className="desc">{desc}</p>
				{/* requires 2 items in */}
				<Tabs>
               <div label="Major Projects">
                  <div>
                     {/* make link look better at somepoint */}
                     <h2 className="text-center">Robot Saga - Final</h2>
                     <div class="grid-x grid-margin-x">
                        <div className="cell medium-6 large-6" >
                           <p>
                              This was a really fun final project as we started working on this project around the time of the midterm for the class we put a lot of work into this game and I feel like that really shows as we pushed the IDE JES to its limits. The thing that I worked mostly on as mentioned in the video is the tile generation and general map tile system implemeting strings that could be modified and then running JES, using it as intended one of the few times in this project. 
                           </p>
                           <a href="https://github.com/DuskEcho/CST205Final" className="codeLink">Code in Github</a>
                        </div>
                        <div className="cell medium-6 large-6" >
                           <Videos videos={videos}/>
                        </div>
                     </div>
                  </div>
                  <div>
                     <Imgs imgs={midterm} pics={images} lang={"python"}/>
                  </div>
               </div>
					<div label="Collages">
						<Imgs imgs={collages} pics={images} lang={"python"}/>
					</div>
					<div label="Color Manipulation">
						<Imgs imgs={color} pics={images} lang={"python"}/>
					</div>
					<div label="Pixel Manipulation">
						<Imgs imgs={pixel} pics={images} lang={"python"}/>
					</div>
				</Tabs>
			</div>
		)
	}
}

export default CST205;
