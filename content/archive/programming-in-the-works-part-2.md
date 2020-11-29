---
title: 'Programming ~ in the works part two'
published: true
date: '2017-07-31T11:23'
taxonomy:
    category:
        - blog
    tag:
        - javascript
        - 'web development'
        - ideas
twittercardoptions: summary
articleenabled: false
article:
    '@context': 'http://schema.org/'
    '@type': NewsArticle
    image:
        '@type': ImageObject
    publisher:
        '@type': Organization
        logo:
            '@type': ImageObject
musiceventenabled: false
orgaenabled: false
orga:
    ratingValue: 2.5
orgaratingenabled: false
eventenabled: false
personenabled: false
restaurantenabled: false
restaurant:
    acceptsReservations: 'yes'
    priceRange: $
    '@context': 'http://schema.org/'
    '@type': Restaurant
    address:
        '@type': PostalAddress
facebookenable: true
person:
    '@context': 'http://schema.org/'
    '@type': person
    address:
        '@type': PostalAddress
event:
    '@context': 'http://schema.org/'
    '@type': Event
    location:
        '@type': Place
musicalbum:
    '@context': 'http://schema.org/'
    '@type': MusicAlbum
    byArtist:
        '@type': MusicGroup
---

### Programming in the works part two

I've been plugging away at this little quiz app in my spare time. Making time to program or code can be tough. It is like any other creative disipline, it takes me 20 minutes to get into the right mindset to even begin. 

The hard part is getting over that initial barrier. It's like the God's of creative energy are testing your worthiness. If you pass you get the gift of "flow" and creative thought, if you fail..well..if you fail you get hit with that empty feeling, like you're not living up to your potential and you need to do more. Being an "ideas guy" is no help to anyone, you have to have ideas and do something about them. That is the struggle.

But this isn't a post about Philosophy, let's see how that little quiz app is growing. As [Part One](http://adamharpur.com/blog/programming-in-the-works-part-1) ended I had just figured how to check for the correct answer. 

### the next phase

Next I added the ability to add points when the answer is correct. "points" being a variable available to all the code within the module. The code is wrapped in an Imediately Invoked Function Expression or IIFE, this means I'm not worried about the global namespace being polluted should this app become the next internet sensation or become the hot open source project for the masses. Here's a snippet of the ```addPoints``` method which is found on the ```ui``` object:

![methods](images/methods.png?cropResize=450,450)

You've probably noticed the ```removeSubmit``` and ```revealSubmit``` methods, ```removeSubmit``` is called from ```addPoints``` but is only relevant when there no more questions left as it wouldn't make sense to submit the last question over and over again. The "submit" button is removed after every question and then added back when the next question is generated, which only happens when ```nextQuestion``` is called, which checks if the ```counter``` is still less than the amount of questions available. Here's the ```nextQuestion``` method which is a method of the ```controller``` object which handles the logic of the program:

![next Question](images/nextQues.png?cropResize=450,450)

This method is called indirectly by the on the submit button event which first calls ```controller.checkAnswer``` which is the only object exposed to the html and referenced as ```api.checkAnswer```. Here's a few images for clarity:

![submit](images/submit.png?cropResize=450,450)
![check answer](images/checkAnswers.png?cropResize=450,450)

The ```checkAnswer``` method first grabs the inputs by tagname and then loops through those inputs and checks if one has been checked, if one is checked it will set the ```radiosIsChecked``` flag to true. Which by default is set to false. It then stores the value of that checked radio button as a variable called ```checked```.

The second part of ```checkAnswer``` involves taking the value of that checked radio ( which are created by the ```display``` function on the ```ui``` object ) turning it into a number which is then checked againist the ```quiz.questions[counter].answer``` which is a set number on the question object, remember that the ```counter``` is keeping track of the questions currently being displayed from the questions array. Using ```quiz.questions[counter].answer``` will ensure we are checking againist the correct value as ```counter``` is available throughout the module.

Once we have checked if a radio button is selected and whether it is correct or not, we can add the points if the answer is correct and continue. The next thing to check is if there is any more questions to display, we do this by making sure that the counter is less than the ```quiz.questions.length - 1``` as the counter starts at 0 this is a great way to check if there are any questions left. 

The logic being if we are at the __nth__ question in an array then __n__ will be the length of the array - 1 so if __n__ equals array length -1 we know there are no more questions to display. In other words if __n__ is less than array length - 1, we can call the ```nextQuestion``` method knowing there are still questions left in the questions array.

```nextQuestion``` then makes a call to ```ui.display``` which takes one argument, in this case we pass in ```counter``` which you can think of as ```questionId```. This way we can reference the question via ```counter``` in other parts of the program. Here's a visual of the ```display``` function and second part of the ```checkAnswers``` method:

![check answer 2](images/checkAnswer2.png?cropResize=450,450)
![display](images/display.png?cropResize=450,450)

The logic flow is as follows:

check if a radio button is selected ---> check if answer is correct ---> check if theres questions left ---> yes? | | no? ---> render question ---> end quiz.

That's the mechanics done, I don't know if there's much merit writing anything about me breaking stuff in CSS ( she is a cruel mistress ). You can view the quiz in action [here](https://harps116.github.io/js-quiz/) you can even take it and see your score. There's still a few things I'd like to add but I'll save that for part three.

If you have questions, comments, profanities or concerns you'd you like to share feel free to twitter me @harps116.

Remember learning to code isn't easy, have fun and embrace the process!

