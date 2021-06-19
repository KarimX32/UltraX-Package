
# ⎛ℹ️⎞ About

UltraX Package it's a unique package made by [UltraX](https://youtube.com/UltraX1) that allows you to create cool things using simple functions and make it faster, for example there is an invite logger, discord buttons paginator, etc...

<div  align="center">

<p>

<a  href="https://nodei.co/npm/ultrax/"><img  src="https://nodei.co/npm/ultrax.png?downloads=true&stars=true"  alt="NPM info"  /></a>

</p>

</div>

------------



## ⎜📥⎟ Installation

  

To install UltraX package you need:
- You need to install [**Node.js**](https://nodejs.org/en/download/).
- You need a package called [**discord.js**](https://npmjs.com/package/discord.js).
- You need a package called [**node-fetch**](https://npmjs.com/package/node-fetch) to use the bin function.


  

Then you can open your application's terminal and type:

```

$ npm install ultrax

```

  

## ⎜➡️⎟ Usage

  

**The available functions are:**

  

-  [`sleep`](https://www.npmjs.com/package/ultrax#sleep) - Functions that creates timeout easily and fast.

-  [`passGen`](https://www.npmjs.com/package/ultrax#passGen) - Function to create passwords made by letters and numbers randomly with specified length.

-  [`bin`](https://www.npmjs.com/package/ultrax#bin) - Function that allows you to bin codes.
- [`ButtonPaginator`](https://www.npmjs.com/package/ultrax#button-baginator) - Function to create embed pages using buttons easily.
  
**Events:**
  - There is currently only one event called [`inviteJoin`](https://www.npmjs.com/package/ultrax#invite-logger-event) in the package which allows you to get some informations about the invite such as the inviter, etc...

----------------

## sleep

sleep is a simple function, where is make it easier and faster to make a timeout in your code.

**Example:**

  

```js

// Defining the package
const  ultrax = require('ultrax')

  
// Getting the sleep function from the package
const  sleep = ultrax.sleep

  
// this will log "Start!" once i run the application
console.log('Start!')


// using the package sleep function to set a timeout
sleep(5000) // sleep(milliseconds)

  
// after the 5 seconds (5000 milliseconds) it will log "5 Seconds passed"
console.log('5 Seconds passed')

```


  

## passGen

this is a simple function that can generate passwords using letters and numbers and the password length is custom so you can change it to any length you want!

  

**Example:**

  

```js

// Defining the package
const  ultrax = require('ultrax')

  
// getting the passGen function from the package
const  passGen = ultrax.passGen

  
// this will log the randomly generate password in your terminal

console.log(passGen(6)) // passGen(6) that mean it will generate a password from 6 characters.

  

// you can change it by changing passGen(here will be the length of the password)

```

## Bin

This is a way to bin a code.

**Example:**
```js

// Defining the package
const  ultrax = require('ultrax')

  

// if it's empty it returns a message saying "what do you want to bin?"
if (!args.join(' ')) return  message.channel.send('What do you want to bin?');

else {

// else if everything works fine, we will make a new varible called "bin"

// it will be used to bin the args.join(' ') also known as the message.content
const  bin = await  ultrax.bin(args.join(' '));

  

// then here we will send the results!
console.log('Here i binned the code ' + bin)

}

```

## Button Paginator
Button Paginator function allows you to create embed pages easily and fast.

`styles are:`
- red
- grey
- blurple
- green
- url

**Example:**
```js
// Defining the package
const ultrax = require('ultrax')

// getting the MessageEmbed from discord.js
const { MessageEmbed } = require("discord.js")

	// creating embed1
	const embed1 = new MessageEmbed() 			 
	.setTitle("1st page embed"); 
	
	// creating embed2
	const embed2 = new MessageEmbed() 	
	.setTitle("2nd page embed"); 
	
	// creating embed3
	const embed3 = new MessageEmbed() 
	.setTitle("3rd page embed"); 
	
	// creating embed4
	const embed4 = new MessageEmbed() 
	.setTitle("4th page embed"); 
	
	// creating the buttons pages
	await ultrax.ButtonPaginator(message, [embed1, embed2, embed3, embed4], [{
	 style: 'green', 
	 label: 'back', 
	 id: 'back' // don't change this line 
	 },

	 { 
	  style: 'blurple',
	  label: 'next', 	
	  id: 'next'  // don't change this line 
	 }
	  
	]);

```

## Invite Logger Event

This event is for logging invite uses. This is same as [`guildMemberAdd`](https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=e-guildMemberAdd) event but this is custom event which has 3 parameters:
- member
- invite
- inviter


**Example:**
```js

// Defining the package
const  ultrax = require("ultrax")

  
//defining discord
const  discord = require('discord.js')
  

// new discord client
const  client = new  discord.Client()

  
// To Get The new event working we need to initilize it by:
ultrax.inviteLogger(client) // put here your discord client

// without above code event won't trigger.


// now below event will work
client.on('inviteJoin', (member, invite, inviter) => {

// results
console.log(`${member.user.tag} joined using invite code ${invite.code} from ${inviter.tag}. Invite was used ${invite.uses} times since its creation.`)
});

```

-----



## ⎝🔶⎠ Contact us

In case you have idea's to improve the package, or maybe you found some bugs or you need help, you can contact us from our discord server!

<a href="https://www.youtube.com/UltraX1"><img widhtsrc="https://raw.githubusercontent.com/MikeCodesDotNET/ColoredBadges/master/png/streaming/youtube%402x.png"></a></br>
<a href="https://discord.gg/Qk6j2fpeat"><img src="https://discord.com/api/guilds/716216764769239083/widget.png?style=banner1"></a>

