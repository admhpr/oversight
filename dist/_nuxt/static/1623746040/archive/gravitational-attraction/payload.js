__NUXT_JSONP__("/archive/gravitational-attraction", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P){return {data:[{post:{slug:"gravitational-attraction",title:o,desc:v,date:"2018-10-12T15:19",taxonomy:{category:["blog"],tag:["javascript","p5"]},twitterenable:h,twittercardoptions:"summary",articleenabled:g,musiceventenabled:g,orgaenabled:g,orga:{ratingValue:w},orgaratingenabled:g,eventenabled:g,personenabled:g,musicalbumenabled:g,productenabled:g,product:{ratingValue:w},restaurantenabled:g,restaurant:{acceptsReservations:"yes",priceRange:"$"},facebookenable:h,toc:[],body:{type:"root",children:[{type:b,tag:d,props:{},children:[{type:a,value:v}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"It may even have a few scuffs, or that pen may have hit the desk. Whatever the scenario there is no denying gravity is something that we cannot escape from."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"In fact everything is exerting gravity on everything else around it. The earth just happens to be big enough to make the other objects gravitational pull seem irrelevant."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Here's the formula for calculating the strengths of these forces."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:"content-img",props:{alt:"",src:"grav_attraction.png"},children:[]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Let's break down it down a bit:"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:e,props:{},children:[{type:a,value:"F"}]},{type:a,value:" refers to gravitational force, this will be a vector calculated later."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:e,props:{},children:[{type:a,value:x}]},{type:a,value:" is the "},{type:b,tag:i,props:{},children:[{type:a,value:y}]},{type:a,value:", which equals... "},{type:b,tag:i,props:{},children:[{type:a,value:"BIG NUMBER ALERT"}]},{type:a,value:".. "},{type:b,tag:e,props:{},children:[{type:a,value:"6.67428 X 10 ecks to the -11 meters cubed per kilogram per second squared"}]},{type:a,value:". Which matters if you're a physicist, but not really if you're a programmer. It's a constant that can be used to make forces in our virtual world weaker or stronger. It just could just as easily be set to one and forgotten about."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:e,props:{},children:[{type:a,value:"m1"}]},{type:a,value:" and "},{type:b,tag:e,props:{},children:[{type:a,value:"m2"}]},{type:a,value:" are the masses of objects 1 and 2.Mass is also something that can be ignored."},{type:b,tag:f,props:{href:"https:\u002F\u002Fen.wikipedia.org\u002Fwiki\u002FNewton%27s_laws_of_motion",rel:[j,k,l],target:m},children:[{type:a,value:"See Newtons Second law of motion"}]},{type:a,value:". "},{type:b,tag:e,props:{},children:[{type:a,value:"F=MA"}]},{type:a,value:" or "},{type:b,tag:e,props:{},children:[{type:a,value:"force equals mass times acceleration"}]},{type:a,value:". Objects on the screen don't have a mass, but if we define masses we can simulate \"bigger\" objects with more gravitational force."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:e,props:{},children:[{type:a,value:z}]},{type:a,value:" refers to the vector pointing from object 1 and 2. This will be computed by subtracting the location of object 1 and 2."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:e,props:{},children:[{type:a,value:"r squared"}]},{type:a,value:" refers to the distance the between the two objects squared. Take the values we have looked at "},{type:b,tag:e,props:{},children:[{type:a,value:"G m1 m2"}]},{type:a,value:". The bigger the value the stronger the force. If we divide by something, that would be the opposite. The strength of the force is inversely proportional to the distance squared. The "},{type:b,tag:i,props:{},children:[{type:a,value:"farther away an object is, the weaker the force; the closer, the stronger"}]},{type:a,value:" like the attraction of gravity."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Now that the formula has been examined we can start to create our simulation in code."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"There are two objects:"}]},{type:a,value:c},{type:b,tag:"ol",props:{},children:[{type:a,value:c},{type:b,tag:p,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Each has a location."}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:p,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Each has a mass."}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:p,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"There is also a constant "},{type:b,tag:e,props:{},children:[{type:a,value:x}]},{type:a,value:" the "},{type:b,tag:i,props:{},children:[{type:a,value:y}]},{type:a,value:n}]},{type:a,value:c}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Given these parameters, we can compute the "},{type:b,tag:e,props:{},children:[{type:a,value:"force"}]},{type:a,value:" vector, the force of gravity. First the direction will be computed, "},{type:b,tag:e,props:{},children:[{type:a,value:z}]},{type:a,value:". Then the strength of that force according to the masses and distance."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Let's write some pseudo code, one object will be the mover and another the attractor, some considerations beforehand:"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"The below table being a few ways for the two objects to interact."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"| Task                                                                                                                                                              | Function                            |\n|-------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------|\n| A function that takes the attractor and mover                                                                                                                     | attraction(a,m)                     |\n| A function in the attractor class that receives a mover                                                                                                           | a.attract(m)                        |\n| A function in the mover class that receives an attractor                                                                                                          | m.attractedTo(a)                    |\n| A function in the attractor that calculates and return the vector between the mover and itself. That force is then passed to method on the mover that applies it. |  f = a.attract(m)   m.applyForce(f) |"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Option 1 is not very OO, and 2 and 3 say essential the same thing. The fourth in this case seems the most appropriate. So we will have to create the "},{type:b,tag:e,props:{},children:[{type:a,value:"calculateForce"}]},{type:a,value:" function in the "},{type:b,tag:e,props:{},children:[{type:a,value:"attractor"}]},{type:a,value:", and an "},{type:b,tag:e,props:{},children:[{type:a,value:"applyForce"}]},{type:a,value:" method on the "},{type:b,tag:e,props:{},children:[{type:a,value:"mover"}]},{type:a,value:n}]},{type:a,value:c},{type:b,tag:q,props:{className:[r]},children:[{type:b,tag:s,props:{className:[t,u]},children:[{type:b,tag:e,props:{},children:[{type:a,value:"class Attractor {\n  (float) mass;\n  (Vector) location;\n  (float) G\n\n  attract((Mover) m ){\n    force = location - m.location\n    distance = force.magnitude()\n    strength = (G * mass * m.mass) \u002F (distance * distance)\n    return force\n  }\n\n  display(){\n    ellipse(location.x, location.y, mass*2, mass*2) \n  }\n}\n\n"}]}]}]},{type:a,value:c},{type:b,tag:q,props:{className:[r]},children:[{type:b,tag:s,props:{className:[t,u]},children:[{type:b,tag:e,props:{},children:[{type:a,value:"class Mover {\n  constructor() {\n    (Vector) position\n    (Vector) velocity\n    (Vector) acceleration\n    (int) mass = 1\n  }\n\n  applyForce((Vector) force) {\n    f = divide(force, mass);\n    acceleration.add(f);\n  }\n\n  update() {\n    velocity.add(acceleration);\n    position.add(velocity);\n    acceleration.mult(0);\n  }\n\n  display() {\n    ellipse(this.position.x, this.position.y, this.mass * 16, this.mass * 16);\n  }\n\n  checkEdges() {\n    if (position.x \u003E width) {\n      position.x = width;\n      velocity.x *= -1;\n    } else if (position.x \u003C 0) {\n      velocity.x *= -1;\n      position.x = 0;\n    }\n    if (this.position.y \u003E height) {\n      velocity.y *= -1;\n      position.y = height;\n    }\n  }\n}\n"}]}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"The draw loop:"}]},{type:a,value:c},{type:b,tag:q,props:{className:[r]},children:[{type:b,tag:s,props:{className:[t,u]},children:[{type:b,tag:e,props:{},children:[{type:a,value:"mover;\nattractor;\n\nfunction setup() {\n  createCanvas(640, 360);\n  mover = new Mover();\n  attractor =new Attractor();\n}\n\nfunction draw() {\n  background(51);\n\n  force = attractor.calculateAttraction(mover);\n  mover.applyForce(force);\n  mover.update();\n\n  attractor.display();\n  mover.display();\n}\n"}]}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Here is a basic example with using the "},{type:b,tag:f,props:{href:"https:\u002F\u002Fp5js.org\u002F",rel:[j,k,l],target:m},children:[{type:a,value:"p5 library"}]},{type:a,value:" with one mover:"}]},{type:a,value:c},{type:b,tag:d,props:{dataHeight:A,dataThemeId:B,dataSlugHash:"zmKaJN",dataDefaultTab:C,dataUser:D,dataPenTitle:o,className:[E]},children:[{type:a,value:F},{type:b,tag:f,props:{href:"https:\u002F\u002Fcodepen.io\u002Fharps116\u002Fpen\u002FzmKaJN\u002F"},children:[{type:a,value:o}]},{type:a,value:G},{type:b,tag:f,props:{href:H},children:[{type:a,value:I}]},{type:a,value:J},{type:b,tag:f,props:{href:K},children:[{type:a,value:L}]},{type:a,value:n}]},{type:a,value:c},{type:b,tag:M,props:{async:h,src:N},children:[]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Simply by adding an array we can have many movers add apply the same algorithm to each instance of the mover class:"}]},{type:a,value:c},{type:b,tag:d,props:{dataHeight:A,dataThemeId:B,dataSlugHash:"xyEzQL",dataDefaultTab:C,dataUser:D,dataPenTitle:O,className:[E]},children:[{type:a,value:F},{type:b,tag:f,props:{href:"https:\u002F\u002Fcodepen.io\u002Fharps116\u002Fpen\u002FxyEzQL\u002F"},children:[{type:a,value:O}]},{type:a,value:G},{type:b,tag:f,props:{href:H},children:[{type:a,value:I}]},{type:a,value:J},{type:b,tag:f,props:{href:K},children:[{type:a,value:L}]},{type:a,value:n}]},{type:a,value:c},{type:b,tag:M,props:{async:h,src:N},children:[]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Inspired by "},{type:b,tag:f,props:{href:"https:\u002F\u002Fnatureofcode.com\u002Fbook\u002Fchapter-2-forces\u002F",rel:[j,k,l],target:m},children:[{type:a,value:"The Nature of Code"}]},{type:a,value:" by "},{type:b,tag:f,props:{href:"https:\u002F\u002Fshiffman.net\u002F",rel:[j,k,l],target:m},children:[{type:a,value:"Dan Shiffman"}]}]}]},dir:"\u002Farchive",path:"\u002Farchive\u002Fgravitational-attraction",extension:".md",createdAt:P,updatedAt:P}}],fetch:{},mutations:void 0}}("text","element","\n","p","code","a",false,true,"em","nofollow","noopener","noreferrer","_blank",".","Gravitational Attraction","li","div","nuxt-content-highlight","pre","language-text","line-numbers","If you want to see the pull of gravity, drop whatever you're holding right now. If you had listened, you may have seen your phone drop to the ground and bounce.",2.5,"G","universal gravitational constant","^r","265","0","js,result","harps116","codepen","See the Pen "," by Adam Harpur (","https:\u002F\u002Fcodepen.io\u002Fharps116","@harps116",") on ","https:\u002F\u002Fcodepen.io","CodePen","script","https:\u002F\u002Fstatic.codepen.io\u002Fassets\u002Fembed\u002Fei.js","Gravitational Attraction Many Movers","2020-12-20T10:34:27.850Z")));