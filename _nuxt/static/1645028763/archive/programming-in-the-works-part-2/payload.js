__NUXT_JSONP__("/archive/programming-in-the-works-part-2", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L){return {data:[{post:{slug:"programming-in-the-works-part-2",title:"Programming ~ in the works part two",published:o,date:"2017-07-31T11:23",taxonomy:{category:["blog"],tag:["javascript","web development","ideas"]},twittercardoptions:"summary",articleenabled:f,article:{"@context":h,"@type":"NewsArticle",image:{"@type":p},publisher:{"@type":"Organization",logo:{"@type":p}}},musiceventenabled:f,orgaenabled:f,orga:{ratingValue:2.5},orgaratingenabled:f,eventenabled:f,personenabled:f,restaurantenabled:f,restaurant:{acceptsReservations:"yes",priceRange:"$","@context":h,"@type":"Restaurant",address:{"@type":q}},facebookenable:o,person:{"@context":h,"@type":"person",address:{"@type":q}},event:{"@context":h,"@type":"Event",location:{"@type":"Place"}},musicalbum:{"@context":h,"@type":"MusicAlbum",byArtist:{"@type":"MusicGroup"}},toc:[{id:r,depth:s,text:t},{id:u,depth:s,text:v}],body:{type:"root",children:[{type:b,tag:w,props:{id:r},children:[{type:b,tag:j,props:{href:"#programming-in-the-works-part-two",ariaHidden:x,tabIndex:y},children:[{type:b,tag:z,props:{className:[A,B]},children:[]}]},{type:a,value:t}]},{type:a,value:d},{type:b,tag:e,props:{},children:[{type:a,value:"I've been plugging away at this little quiz app in my spare time. Making time to program or code can be tough. It is like any other creative disipline, it takes me 20 minutes to get into the right mindset to even begin."}]},{type:a,value:d},{type:b,tag:e,props:{},children:[{type:a,value:"The hard part is getting over that initial barrier. It's like the God's of creative energy are testing your worthiness. If you pass you get the gift of \"flow\" and creative thought, if you fail..well..if you fail you get hit with that empty feeling, like you're not living up to your potential and you need to do more. Being an \"ideas guy\" is no help to anyone, you have to have ideas and do something about them. That is the struggle."}]},{type:a,value:d},{type:b,tag:e,props:{},children:[{type:a,value:"But this isn't a post about Philosophy, let's see how that little quiz app is growing. As "},{type:b,tag:j,props:{href:"http:\u002F\u002Fadamharpur.com\u002Fblog\u002Fprogramming-in-the-works-part-1",rel:[C,D,E],target:F},children:[{type:a,value:"Part One"}]},{type:a,value:" ended I had just figured how to check for the correct answer."}]},{type:a,value:d},{type:b,tag:w,props:{id:u},children:[{type:b,tag:j,props:{href:"#the-next-phase",ariaHidden:x,tabIndex:y},children:[{type:b,tag:z,props:{className:[A,B]},children:[]}]},{type:a,value:v}]},{type:a,value:d},{type:b,tag:e,props:{},children:[{type:a,value:"Next I added the ability to add points when the answer is correct. \"points\" being a variable available to all the code within the module. The code is wrapped in an Imediately Invoked Function Expression or IIFE, this means I'm not worried about the global namespace being polluted should this app become the next internet sensation or become the hot open source project for the masses. Here's a snippet of the "},{type:b,tag:c,props:{},children:[{type:a,value:G}]},{type:a,value:" method which is found on the "},{type:b,tag:c,props:{},children:[{type:a,value:H}]},{type:a,value:" object:"}]},{type:a,value:d},{type:b,tag:e,props:{},children:[{type:b,tag:g,props:{alt:"methods",src:"images\u002Fmethods.png?cropResize=450,450"},children:[]}]},{type:a,value:d},{type:b,tag:e,props:{},children:[{type:a,value:"You've probably noticed the "},{type:b,tag:c,props:{},children:[{type:a,value:I}]},{type:a,value:" and "},{type:b,tag:c,props:{},children:[{type:a,value:"revealSubmit"}]},{type:a,value:" methods, "},{type:b,tag:c,props:{},children:[{type:a,value:I}]},{type:a,value:" is called from "},{type:b,tag:c,props:{},children:[{type:a,value:G}]},{type:a,value:" but is only relevant when there no more questions left as it wouldn't make sense to submit the last question over and over again. The \"submit\" button is removed after every question and then added back when the next question is generated, which only happens when "},{type:b,tag:c,props:{},children:[{type:a,value:k}]},{type:a,value:" is called, which checks if the "},{type:b,tag:c,props:{},children:[{type:a,value:i}]},{type:a,value:" is still less than the amount of questions available. Here's the "},{type:b,tag:c,props:{},children:[{type:a,value:k}]},{type:a,value:" method which is a method of the "},{type:b,tag:c,props:{},children:[{type:a,value:"controller"}]},{type:a,value:" object which handles the logic of the program:"}]},{type:a,value:d},{type:b,tag:e,props:{},children:[{type:b,tag:g,props:{alt:"next Question",src:"images\u002FnextQues.png?cropResize=450,450"},children:[]}]},{type:a,value:d},{type:b,tag:e,props:{},children:[{type:a,value:"This method is called indirectly by the on the submit button event which first calls "},{type:b,tag:c,props:{},children:[{type:a,value:"controller.checkAnswer"}]},{type:a,value:" which is the only object exposed to the html and referenced as "},{type:b,tag:c,props:{},children:[{type:a,value:"api.checkAnswer"}]},{type:a,value:". Here's a few images for clarity:"}]},{type:a,value:d},{type:b,tag:e,props:{},children:[{type:b,tag:g,props:{alt:"submit",src:"images\u002Fsubmit.png?cropResize=450,450"},children:[]},{type:a,value:d},{type:b,tag:g,props:{alt:"check answer",src:"images\u002FcheckAnswers.png?cropResize=450,450"},children:[]}]},{type:a,value:d},{type:b,tag:e,props:{},children:[{type:a,value:"The "},{type:b,tag:c,props:{},children:[{type:a,value:J}]},{type:a,value:" method first grabs the inputs by tagname and then loops through those inputs and checks if one has been checked, if one is checked it will set the "},{type:b,tag:c,props:{},children:[{type:a,value:"radiosIsChecked"}]},{type:a,value:" flag to true. Which by default is set to false. It then stores the value of that checked radio button as a variable called "},{type:b,tag:c,props:{},children:[{type:a,value:"checked"}]},{type:a,value:"."}]},{type:a,value:d},{type:b,tag:e,props:{},children:[{type:a,value:"The second part of "},{type:b,tag:c,props:{},children:[{type:a,value:J}]},{type:a,value:" involves taking the value of that checked radio ( which are created by the "},{type:b,tag:c,props:{},children:[{type:a,value:m}]},{type:a,value:" function on the "},{type:b,tag:c,props:{},children:[{type:a,value:H}]},{type:a,value:" object ) turning it into a number which is then checked againist the "},{type:b,tag:c,props:{},children:[{type:a,value:K}]},{type:a,value:" which is a set number on the question object, remember that the "},{type:b,tag:c,props:{},children:[{type:a,value:i}]},{type:a,value:" is keeping track of the questions currently being displayed from the questions array. Using "},{type:b,tag:c,props:{},children:[{type:a,value:K}]},{type:a,value:" will ensure we are checking againist the correct value as "},{type:b,tag:c,props:{},children:[{type:a,value:i}]},{type:a,value:" is available throughout the module."}]},{type:a,value:d},{type:b,tag:e,props:{},children:[{type:a,value:"Once we have checked if a radio button is selected and whether it is correct or not, we can add the points if the answer is correct and continue. The next thing to check is if there is any more questions to display, we do this by making sure that the counter is less than the "},{type:b,tag:c,props:{},children:[{type:a,value:"quiz.questions.length - 1"}]},{type:a,value:" as the counter starts at 0 this is a great way to check if there are any questions left."}]},{type:a,value:d},{type:b,tag:e,props:{},children:[{type:a,value:"The logic being if we are at the "},{type:b,tag:l,props:{},children:[{type:a,value:"nth"}]},{type:a,value:" question in an array then "},{type:b,tag:l,props:{},children:[{type:a,value:n}]},{type:a,value:" will be the length of the array - 1 so if "},{type:b,tag:l,props:{},children:[{type:a,value:n}]},{type:a,value:" equals array length -1 we know there are no more questions to display. In other words if "},{type:b,tag:l,props:{},children:[{type:a,value:n}]},{type:a,value:" is less than array length - 1, we can call the "},{type:b,tag:c,props:{},children:[{type:a,value:k}]},{type:a,value:" method knowing there are still questions left in the questions array."}]},{type:a,value:d},{type:b,tag:e,props:{},children:[{type:b,tag:c,props:{},children:[{type:a,value:k}]},{type:a,value:" then makes a call to "},{type:b,tag:c,props:{},children:[{type:a,value:"ui.display"}]},{type:a,value:" which takes one argument, in this case we pass in "},{type:b,tag:c,props:{},children:[{type:a,value:i}]},{type:a,value:" which you can think of as "},{type:b,tag:c,props:{},children:[{type:a,value:"questionId"}]},{type:a,value:". This way we can reference the question via "},{type:b,tag:c,props:{},children:[{type:a,value:i}]},{type:a,value:" in other parts of the program. Here's a visual of the "},{type:b,tag:c,props:{},children:[{type:a,value:m}]},{type:a,value:" function and second part of the "},{type:b,tag:c,props:{},children:[{type:a,value:"checkAnswers"}]},{type:a,value:" method:"}]},{type:a,value:d},{type:b,tag:e,props:{},children:[{type:b,tag:g,props:{alt:"check answer 2",src:"images\u002FcheckAnswer2.png?cropResize=450,450"},children:[]},{type:a,value:d},{type:b,tag:g,props:{alt:m,src:"images\u002Fdisplay.png?cropResize=450,450"},children:[]}]},{type:a,value:d},{type:b,tag:e,props:{},children:[{type:a,value:"The logic flow is as follows:"}]},{type:a,value:d},{type:b,tag:e,props:{},children:[{type:a,value:"check if a radio button is selected ---\u003E check if answer is correct ---\u003E check if theres questions left ---\u003E yes? | | no? ---\u003E render question ---\u003E end quiz."}]},{type:a,value:d},{type:b,tag:e,props:{},children:[{type:a,value:"That's the mechanics done, I don't know if there's much merit writing anything about me breaking stuff in CSS ( she is a cruel mistress ). You can view the quiz in action "},{type:b,tag:j,props:{href:"https:\u002F\u002Fharps116.github.io\u002Fjs-quiz\u002F",rel:[C,D,E],target:F},children:[{type:a,value:"here"}]},{type:a,value:" you can even take it and see your score. There's still a few things I'd like to add but I'll save that for part three."}]},{type:a,value:d},{type:b,tag:e,props:{},children:[{type:a,value:"If you have questions, comments, profanities or concerns you'd you like to share feel free to twitter me @harps116."}]},{type:a,value:d},{type:b,tag:e,props:{},children:[{type:a,value:"Remember learning to code isn't easy, have fun and embrace the process!"}]}]},dir:"\u002Farchive",path:"\u002Farchive\u002Fprogramming-in-the-works-part-2",extension:".md",createdAt:L,updatedAt:L}}],fetch:{},mutations:void 0}}("text","element","code","\n","p",false,"content-img","http:\u002F\u002Fschema.org\u002F","counter","a","nextQuestion","strong","display","n",true,"ImageObject","PostalAddress","programming-in-the-works-part-two",3,"Programming in the works part two","the-next-phase","the next phase","h3","true",-1,"span","icon","icon-link","nofollow","noopener","noreferrer","_blank","addPoints","ui","removeSubmit","checkAnswer","quiz.questions[counter].answer","2022-02-16T16:24:15.829Z")));