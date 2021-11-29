__NUXT_JSONP__("/archive/maze-generation", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R){return {data:[{post:{slug:"maze-generation",title:"Maze Generation",desc:"First I have to think about how I am going to approach the maze.I'm using an HTML5 canvas which I will divide into a grid with each cell being it's own object. The program will figure out which walls of the cells to remove to create a maze.",date:"2018-09-11T23:05",taxonomy:{category:["blog"],tag:["javascript","programming"]},twitterenable:j,twittercardoptions:"summary",articleenabled:f,musiceventenabled:f,orgaenabled:f,orga:{ratingValue:E},orgaratingenabled:f,eventenabled:f,personenabled:f,musicalbumenabled:f,productenabled:f,product:{ratingValue:E},restaurantenabled:f,restaurant:{acceptsReservations:"yes",priceRange:"$"},facebookenable:j,toc:[{id:F,depth:2,text:G}],body:{type:"root",children:[{type:b,tag:d,props:{},children:[{type:a,value:"Using a depth first search and a recursive back tracking algorithm"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"and this "},{type:b,tag:e,props:{href:H,rel:[k,l,m],target:n},children:[{type:a,value:"Wiki Page"}]},{type:a,value:h}]},{type:a,value:c},{type:b,tag:"h2",props:{id:F},children:[{type:b,tag:e,props:{href:"#how",ariaHidden:"true",tabIndex:-1},children:[{type:b,tag:"span",props:{className:["icon","icon-link"]},children:[]}]},{type:a,value:G}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"First I have to think about how I am going to approach the maze."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"I'm using an HTML5 canvas which I will divide into a grid with each cell being it's own object. The program will figure out which walls of the cells to remove to create a maze."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:o,props:{alt:p,src:"01-grid.png"},children:[]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"So, the cell object will need to know it's location on the grid, it's row number ( y ) and column number ( x )."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"It will also need to know it's wall status ( whether it is opened or closed )."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"In this next chunk of code I will create the grid and cell objects."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"I will need the following variables:"}]},{type:a,value:c},{type:b,tag:I,props:{},children:[{type:a,value:c},{type:b,tag:i,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"The grid width, height"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:i,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"The cell width, height"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:i,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"The row total ( grid height \u002F cell height )"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:i,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"The column total ( grid width \u002F cell width )"}]},{type:a,value:c}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Once the values are calculated I will iterate through each row and for each row iterate through the columns and each cell will get its row number and column number."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Then calling the show method ( this is where the render logic will be ) I can render the cell. It's worth mentioning I am using the "},{type:b,tag:e,props:{href:"https:\u002F\u002Fp5js.org\u002Freference\u002F",rel:[k,l,m],target:n},children:[{type:a,value:"P5.js"}]},{type:a,value:" library to do most of the rendering. It makes drawing in the browser much easier and it's really fun to use."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Here is our starting point:"}]},{type:a,value:c},{type:b,tag:d,props:{dataHeight:q,dataThemeId:r,dataSlugHash:"dqJZWz",dataDefaultTab:s,dataUser:t,dataPenTitle:J,className:[u]},children:[{type:a,value:v},{type:b,tag:e,props:{href:"https:\u002F\u002Fcodepen.io\u002Fharps116\u002Fpen\u002FdqJZWz\u002F"},children:[{type:a,value:J}]},{type:a,value:w},{type:b,tag:e,props:{href:x},children:[{type:a,value:y}]},{type:a,value:z},{type:b,tag:e,props:{href:A},children:[{type:a,value:B}]},{type:a,value:h}]},{type:a,value:c},{type:b,tag:C,props:{async:j,src:D},children:[]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"This is rough and will be cleaned up as the program evolves, I normally like to get something working before I refactor."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"The cells are lines that run the perimeter of the cell using a line that connects these points.( Our x and y coordinates draw from the top left )."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:o,props:{alt:p,src:"02-cell-corners.png"},children:[]}]},{type:a,value:c},{type:b,tag:"blockquote",props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Note the "},{type:b,tag:g,props:{},children:[{type:a,value:"this.walls"}]},{type:a,value:" array on the cell, this will tell our cell whether it's wall is enabled or disabled in this order: top, right, bottom, left"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"I spent some time refactoring the plot method to DRY up the function. This is the base for the next stage."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Now we can break down our algorithm which follows these steps:"}]},{type:a,value:c},{type:b,tag:I,props:{},children:[{type:a,value:c},{type:b,tag:i,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Make the initial cell and mark it as visited"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:i,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"While there are unvisited cells:"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"if any neighbours of the current cell have not been visited."}]},{type:a,value:c},{type:b,tag:K,props:{className:[L]},children:[{type:b,tag:M,props:{className:[N,O]},children:[{type:b,tag:g,props:{},children:[{type:a,value:"  1. Choose randomly one of the unvisited neighbours\n\n  2. Push the current cell to the stack\n\n  3. Remove the wall between the current cell and the chosen cell\n\n  4. Make the chosen cell the current cell and mark it as visited\n"}]}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"else if stack is not empty"}]},{type:a,value:c},{type:b,tag:K,props:{className:[L]},children:[{type:b,tag:M,props:{className:[N,O]},children:[{type:b,tag:g,props:{},children:[{type:a,value:"  1. Pop cell from the stack\n    \n  2. Make it the current cell\n"}]}]}]},{type:a,value:c}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Above is the break down of the algorithm from the "},{type:b,tag:e,props:{href:H,rel:[k,l,m],target:n},children:[{type:a,value:"wiki page"}]},{type:a,value:h}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Here is the maze in place without the backtracking functionality:"}]},{type:a,value:c},{type:b,tag:d,props:{dataHeight:q,dataThemeId:r,dataSlugHash:"JappvQ",dataDefaultTab:s,dataUser:t,dataPenTitle:P,className:[u]},children:[{type:a,value:v},{type:b,tag:e,props:{href:"https:\u002F\u002Fcodepen.io\u002Fharps116\u002Fpen\u002FJappvQ\u002F"},children:[{type:a,value:P}]},{type:a,value:w},{type:b,tag:e,props:{href:x},children:[{type:a,value:y}]},{type:a,value:z},{type:b,tag:e,props:{href:A},children:[{type:a,value:B}]},{type:a,value:h}]},{type:a,value:c},{type:b,tag:C,props:{async:j,src:D},children:[]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"The were a couple tricky parts which I'm going to break down a little further:"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Checking the neighbours to see if they have been visited and exist:"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"All of the logic for this is in the "},{type:b,tag:g,props:{},children:[{type:a,value:"checkNeighbours"}]},{type:a,value:" function.When called looks at the surrounding cells and checks if they exist and if so if they have been visited ( by looking the visited flag )."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Here a diagram to show the relative "},{type:b,tag:g,props:{},children:[{type:a,value:"col"}]},{type:a,value:" and "},{type:b,tag:g,props:{},children:[{type:a,value:"row"}]},{type:a,value:" number props on each cell:"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:o,props:{alt:p,src:"03-cells.png"},children:[]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Once we know they exist the function then checks if the cell has not been visited, if that is the case it assed to the "},{type:b,tag:g,props:{},children:[{type:a,value:"notVisited"}]},{type:a,value:" array which returns a random cell or nothing."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"if nothing, then the program knows that all have been visited and act accordingly ( this is where the backtracker comes in )."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Another trickier part was the ability to remove walls:"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"The "},{type:b,tag:g,props:{},children:[{type:a,value:"removeWalls"}]},{type:a,value:" function holds all the logic to determine which should be removed."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Here is how it works:"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"We have a pair of cells one being the current cell and the other being the neighbour with each needing a wall removed, it is the difference in the x property of each ( for the right or left ) and y ( for the top or bottom ) which decides which wall will be removed for the cell. there is an array on each cell that has four values like so:"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:g,props:{},children:[{type:a,value:"this.walls = [ true, true, true, true ]"}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"This indicates if the top, right, bottom, or left wall is displayed for that cell. So first the difference is computed and if the value is -1 the neighbour is to the right or bottom of the current cell and if the value is 1 the neighbour is to the left or top."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:o,props:{alt:p,src:"04-walls.png"},children:[]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"In the above scenario the left wall of the neighbour is removed and the right wall of the current cell."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"The corresponding walls are then switched off for the cell. This will give the maze it's shape."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"There is still one problem, if we run into a dead end the cell stops moving and thr program stops. This is where the backtracker comes in."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"This will allow the cell to know where it has been and to jump back to that position."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"A stack is used to keep track of these past positions. This is represented in code by an array that gets items ( in this case the current cell before switching to next ) pushed and popped on and off of it. This is know as a last in, first out structure."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"In Javascript there is already the push and pop functionality on an array which makes it the perfect data structure to hold our data."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"There isn't much code to add, and here is our finished maze generator:"}]},{type:a,value:c},{type:b,tag:d,props:{dataHeight:q,dataThemeId:r,dataSlugHash:"NLyBJJ",dataDefaultTab:s,dataUser:t,dataPenTitle:Q,className:[u]},children:[{type:a,value:v},{type:b,tag:e,props:{href:"https:\u002F\u002Fcodepen.io\u002Fharps116\u002Fpen\u002FNLyBJJ\u002F"},children:[{type:a,value:Q}]},{type:a,value:w},{type:b,tag:e,props:{href:x},children:[{type:a,value:y}]},{type:a,value:z},{type:b,tag:e,props:{href:A},children:[{type:a,value:B}]},{type:a,value:h}]},{type:a,value:c},{type:b,tag:C,props:{async:j,src:D},children:[]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"That was a brief look at maze generator in Javascript. This is my attempt to dive deeper into some of the work by "},{type:b,tag:e,props:{href:"https:\u002F\u002Fshiffman.net\u002F",rel:[k,l,m],target:n},children:[{type:a,value:"Daniel Shiffman"}]},{type:a,value:" and his various "},{type:b,tag:e,props:{href:"https:\u002F\u002Fwww.youtube.com\u002Fwatch?v=HyK_Q5rrcr4&t",rel:[k,l,m],target:n},children:[{type:a,value:"coding challenges"}]},{type:a,value:h}]}]},dir:"\u002Farchive",path:"\u002Farchive\u002Fmaze-generation",extension:".md",createdAt:R,updatedAt:R}}],fetch:{},mutations:void 0}}("text","element","\n","p","a",false,"code",".","li",true,"nofollow","noopener","noreferrer","_blank","content-img","","650","0","js,result","harps116","codepen","See the Pen "," by Adam Harpur (","https:\u002F\u002Fcodepen.io\u002Fharps116","@harps116",") on ","https:\u002F\u002Fcodepen.io","CodePen","script","https:\u002F\u002Fstatic.codepen.io\u002Fassets\u002Fembed\u002Fei.js",2.5,"how","How?","https:\u002F\u002Fen.wikipedia.org\u002Fwiki\u002FMaze_generation_algorithm#Recursive_backtracker","ul","Grid","div","nuxt-content-highlight","pre","language-text","line-numbers","Grid with generator and removing walls","Grid with generator and removing walls and backtracking","2021-11-29T09:25:08.133Z")));