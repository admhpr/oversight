---
title: 'CSS sanity with SASS: Setup.'
date: '2017-09-09T18:27'
metadata:
    Sass: Blog
taxonomy:
    category:
        - blog
    tag:
        - 'web development'
        - 'web design'
        - CSS
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

CSS can be painful to write and even worse to maintain...

"as I tack on line 1000 of a css file in fear of breaking something otherwise"

I think even those that truely love language would agree. If you lean towards the front end of web development CSS is unavoidable. CSS shouldn't be this painful, we as programmers/developers/hackers/code monkies should not shy away from making things look nice.

After all who do you write programs for....other people, normally not programmers.As far as anyone else is concerned the UI is the program. They don't care how nicely you've abstracted functionality, how that new method you tried out worked or if you have clear comments. They want to interact with the program.

> There is a better way

introducing _[`SASS: Syntactically Awesome Style Sheets`](http://sass-lang.com/guide)_:

This language makes sense, it organizes things effectively and clearly. Sass is a scripting language that is interpreted or compiled into Cascading Style Sheets (CSS). SassScript is the scripting language itself.

It's been around a while in web dev terms (since 2006),  but has really gained popularity over the last few years and is currently used and supported in many web development technologies such as [Bootstrap](http://getbootstrap.com/), [Jekyll](https://jekyllrb.com/) and is supported in the 2017 Adobe Dreamweaver (yes it still exsists).

So let's get started, I'll be using Linux this will probably work on Mac but will obviously not on Windows.

We have to have some way to compile the SassScript, for that we need `Ruby` a programming language that gained popularity with `Rails` a server side framework written in `Ruby`.

I use a [RVM](https://rvm.io/rvm/install) which stands for Ruby version manager... I'm sure you can guess what it does. This will keep things neat and tidy.

Follow the download instructions for `RVM`. After that run:

`rvm install <the_ruby_version_you_want>`

eg:

`rvm  install 2.3.1`
`rvm use 2.3.1`

then:

`rvm rubygems latest`

now we install [compass](http://compass-style.org/) an open-source CSS Authoring Framework. This will allow us to turn our Sass files into CSS,  you may or may not need sudo here..

[![Screenshot_from_2017-09-08_21-57-49.png](https://s26.postimg.org/uopgm49y1/Screenshot_from_2017-09-08_21-57-49.png)](https://postimg.org/image/8009mjsk5/)

We are ready to roll:

set up a `config.rb` file in your project root to let compass know what's up, here's a sample to get you started:

```
# Require any additional compass plugins here.
# defaults to project root

http_path = "/"
css_dir = "css"
sass_dir="sass"
images_dir = "images"
javascripts_dir = "js"
fonts_dir = "fonts"

output_style = :nested

# To enable relative paths to assets via compass helper functions. Uncomment:
# relative_assets = true

line_comments = false


# If you prefer the indented syntax, you might want to regenerate this
# project again passing --syntax sass, or you can uncomment this:
# preferred_syntax = :sass
# and then run:
# sass-convert -R --from scss --to sass sass scss && rm -rf sass && mv scss sass
```

For more details on configuration check out the compass [docs](http://compass-style.org/help/documentation/configuration-reference/)
<br/>
be sure to set your paths correctly this example project looks like this:

```
index.html
|
css/styles.css
|
|--sass/ 
|    |-- partials/                   # Partials do a quick google search for "Sass partials"
|    |    |-- _base.sass        # imports for all mixins + global project variables
|    |-- styles.scss     
|
|--js/
|--images/
|--fonts/
|
```
<br/>
next run either `compass watch` to watch for changes to Sass files and auto compile to CSS or manually  run `compass compile` to turn your Sass into CSS.

Well I didn't really cover Sass here but at least your ready to go! 

Head over to [http://thesassway.com/](http://thesassway.com/) for some great tutorials. Check out the `Advanced` section to get your mind blown.

You can always try Sass at somewhere like  [Codepen](https://codepen.io/#) without all the overhead. Simply choose Sass in the CSS preprocessors tab under settings.

It really is worth a little set up for a massive longterm gain. I've had great fun learning Sass and hope to dive a little deeper this year.

So I'll prob be posting about how to use Sass at some point in the future.

Until then...

Happy Styling!