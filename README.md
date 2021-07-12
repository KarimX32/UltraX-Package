<div  align="center">
<h1>UltraX</h1>
</div>

### ℹ️ || About 

<div align="center">
<p>UltraX a unique package that gives you multiple useful usages using functions and events.</p>
<p>
    <a href="https://www.npmjs.com/package/ultrax"><img src="https://img.shields.io/npm/v/ultrax?maxAge=3600" alt="NPM version" /></a>
    <a href="https://www.npmjs.com/package/ultrax"><img src="https://img.shields.io/npm/dt/ultrax?maxAge=3600" alt="NPM downloads" /></a>
  </p>
  <p>
<a  href="https://nodei.co/npm/ultrax/"><img  src="https://nodei.co/npm/ultrax.png?downloads=true&stars=true"  alt="NPM info"  /></a>

</p>
</div>





  

## 📥 || Installation

To install UltraX package you need:

- You need to install [**Node.js**](https://nodejs.org/en/download/).

- You need to install [**discord.js**](https://npmjs.com/package/discord.js).

- You need to install [**node-fetch**](https://npmjs.com/package/node-fetch) to use the [`Bin()`](https://npmjs.com/package/ultrax#welcomeImage) and [`Wikipedia()`](https://npmjs.com/package/ultrax#wikipedia) functions.

- You need to install [**canvas**](https://npmjs.com/package/canvas) to use the [`welcomeImage()`](https://npmjs.com/package/ultrax#welcomeimage).

Then you can open your application's terminal and type:

```
$ npm install ultrax
```

## 📜 || Table of content

### functions:

-  [`sleep()`](https://www.npmjs.com/package/ultrax#sleep) - Functions that creates timeout easily and fast.

-  [`passGen()`](https://www.npmjs.com/package/ultrax#passgen) - Function to create passwords made by letters and numbers randomly with specified length.

-  [`bin()`](https://www.npmjs.com/package/ultrax#bin) - Function that allows you to bin codes.

-  [`ButtonPaginator()`](https://www.npmjs.com/package/ultrax#button-paginator) - Function to create embed pages using buttons easily.

-  [`welcomeImage()`](https://npmjs.com/package/ultrax#welcomeimage) - Function that creates a welcome image fully customizable using canvas.

-  [`Wikipedia()`](https://npmjs.com/package/ultrax#wikipedia) - Function that allows users to search wikipedia and return results for a query.

-  [`remind()`](https://npmjs.com/package/ultrax#remind) - Function to make remind command 

-  [`daBaby()`](https://npmjs.com/package/ultrax#daBaby) - Function to make a user DaBaby

### Events:

- [`inviteJoin`](https://www.npmjs.com/package/ultrax#invite-logger-event) allows you to get some informations about the invite such as the inviter, etc...
- [`reminder`](https://www.npmjs.com/package/ultrax#reminder-event) It Triggers when someone used remind function and its time to remind user. 

<hr>
<br>
<br>

# || Functions:

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

> sleep(ms: Number)
## passGen

this is a simple function that can generate passwords using letters and numbers and the password length is custom so you can change it to any length you want!


**Example:**

```js
// Defining the package
const  ultrax = require('ultrax')

// getting the passGen function from the package
const  passGen = ultrax.passGen

// passGen(6) that mean it will generate a password from 6 characters.
console.log(passGen(6)) 
```
> passGen(Length: Number)

## Bin

This function is used to bin your code.

**Example:**

```js
// Defining the package
const  ultrax = require('ultrax')

// if it's empty it returns a message saying "what do you want to bin?"
if (!args.join(' ')) return  message.channel.send('What do you want to bin?');

// else if everything works fine, we will make a new varible called "bin"
else {

// it will be used to bin the args.join(' ') also known as the message.content
const  bin = await  ultrax.bin(args.join(' '), true);

// then here we will send the results!
console.log('Here i binned the code ' + bin)
}
```
> bin(String)
`ultrax.bin(args.join(' '), true/false)` if its true that mean the bin is editable, else if its false that means no one can edit it.

## Button Paginator

Button Paginator function allows you to create embed pages easily and fast.

> Styles: `red`, `grey`, `blurple`, `green`, `url`


**Example:**

```js
// Defining the package
const  ultrax = require('ultrax')

// getting the MessageEmbed from discord.js 
const { MessageEmbed } = require("discord.js")

// creating embeds
const  embed1 = new MessageEmbed()
.setTitle("1st page embed");
const  embed2 = new MessageEmbed()
.setTitle("2nd page embed");
const  embed3 = new MessageEmbed()
.setTitle("3rd page embed");
const  embed4 = new MessageEmbed()
.setTitle("4th page embed");

// creating the buttons pages
await  ultrax.ButtonPaginator(message, [embed1, embed2, embed3, embed4], [{
	style:  'red',
	label:  'Backwards',
	emoji: {
		name:  '◀',
		animated:  false
		},
	id:  'back'  // don't change this line
	},
	{
	style:  'green',
	label:  'Forward',
	emoji: {
		name:  '▶',
		animated:  false
		},
	id:  'next'  // don't change this line
	}
]);
```
> Don't change the id of the buttons otherwise, don't expect it to work.
  

## welcomeImage
This function is used to create a welcome image using [canvas](https://npmjs.com/package/canvas), fully customizable and fast!

The function returns a [Promise(\<Attachment\>)](https://discord.js.org/#/docs/main/stable/class/DataResolver?scrollTo=resolveFileAsBuffer) to Buffer the image and make it an [Attachment](https://discord.js.org/#/docs/main/stable/class/MessageAttachment), so you need to await it.

```js
await  welcomeImage()
```
As we mentioned before its fully customizable, so lets see the parameters and the options available.
**Parameters (Required)**:
- background
- avatar
- text_1 (Title)
- text_2 (Subtitle)
- text_3 (Footer)
- color
**Options (Optional):**

-  `font` { default: "San Serif" }
-  `attachmentName` { default: "welcome" }
-  `text1_fontSize` { default: "72 pixels" }
-  `text2_fontSize` { default: "42 pixels" }
-  `text3_fontSize` { default: "32 pixels" }
  

<br>

 

So now lets talk about the correct Syntax for it!

```js
await  welcomeImage(background, avatar, text_1, text_2, text_3, color)
```

> The background must be a PNG image, local images and URL images are supported.


> The color must be a HEX color's code.
As example this HEX:[`#FFFFFF`](https://www.color-hex.com/color/ffffff)

<br>

In case you will use the options:
> You don't have to use all options you can just use the ones you want to use, and you are not obligate of using them at all they are **optional**.

```js
await welcomeImage(background, avatar, text_1, text_2, text_3, color {
	font: String, 
	attachmentName: String,
	text1_fontSize: Number,
	text2_fontSize: Number,
	text3_fontSize: Number
})
```

> the `attachmentName` is always PNG, so whatever name you will put it will end with `.png` automatically.
> 
> Example:
> attachmentName: "Hello"
> returns: "Hello.png"

  

**Example:**

```js
// Getting registerFont() from canvas
const { registerFont } = require('canvas')

// Registering the font
registerFont('ShadowsIntoLight-Regular.ttf', { family:  "Shadows Into Light" });
```

> To use custom fonts, you need to install the font (ttf/otf) yourself and use [`registerFont()`](https://github.com/Automattic/node-canvas#registerfont) to register the font and be able to use it.
>
>This is an example font, if you used this without install the font you will get an error.

<br>
<br>

After all these explanations and examples, lets see a full and nice welcome image function working inside of an [`guildMemberAdd`](https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=e-guildMemberAdd) event!

**Example:**

```js
// defining the package
const  ultrax = require('ultrax')
// Getting registerFont() from canvas
const { registerFont } = require('canvas')
// Registering the custom font
registerFont('ShadowsIntoLight-Regular.ttf', { family:  "Shadows Into Light" });
// Event
Client.on('guildMemberAdd', async  member  => {
// defining the background as bg
let  bg = 'https://cdn.discordapp.com/attachments/850808002545319957/859359637106065408/bg.png'
// defining the member's avatar with "PNG" as format.
let  avatar = member.user.displayAvatarURL({ format:  "png" })
// defining text_1 (title)
let  text1 = "welcome"
// defining text_2 (subtitle)
let  text2 = member.user.tag
// defining text_3 (footer)
let  text3 = `You're the ${member.guild.memberCount}th member`
// defining the color, here its white
let  color = '#ffffff'
// defining the options and setting them (Those are optional)
const  options = {
	font:  "Shadows Into Light",
	attachmentName:  `welcome-${member.id}`,
	text1_fontSize: 80,
	text2_fontSize: 50,
	text3_fontSize: 30
}

// creating the image
const  image = await  ultrax.welcomeImage(bg, avatar, text1, text2, text3, color, options)

//channel#send(image)

});
```
## Sussybaka
Makes a sussybaka image with a image url

**Example**
```js
const ultrax = require("ultrax");
const { Client } = require("discord.js");
const client = new Client();

client.on("message", async(message) => {
	if(message.content === "!sussybaka"){
    const theSussyBaka = new ultrax.sussyBaka(message.mentions.users.first()?.displayAvatarURL({ format: 'png' }) || message.author.displayAvatarURL({ format: 'png' }));
	//It will return a Discord attachment!
	const Image = await theSussyBaka.get();
	return message.channel.send(Image);
	}
});
```
### Output
![sussybaka](https://cdn.discordapp.com/attachments/838996367611396148/860983775415894057/sussybaka.png)
## wikipedia

A simple function to allow you to fetch a topic from wikipedia

**Example**

```js
// defining the package
const  ultrax = require('ultrax') 

// we will be searching earth
let  query = 'earth'

// Inistigating the wikipedia class
const  res = new ultrax.Wikipedia({ 
	message:  message, // The message
	color:  "RED", // Color of embed that will be sent
	query:  query  // what the search query is
})

res.fetch() // fetching the result from wikipedia
```
## daBaby

Simple function to DaBaby a user!

The function returns a [Promise(\<Attachment\>)](https://discord.js.org/#/docs/main/stable/class/DataResolver?scrollTo=resolveFileAsBuffer) to Buffer the image and make it an [Attachment](https://discord.js.org/#/docs/main/stable/class/MessageAttachment), so you need to await it.

```js
await  daBaby()
```

**Example**
```js
//defining the package
const ultrax = require('ultrax')
client.on("message", async(message) => {
	if(message.content === "!dababy"){
    	const daBaby = await ultrax.dababy(message.mentions.users.first()?.displayAvatarURL({ format: 'png' }) || message.author.displayAvatarURL({ format: 'png' 	   }));
	//It will return a Discord attachment!
	return message.channel.send(daBaby);
	}
});
```
### Output
![Image](https://cdn.discordapp.com/attachments/840619319921737750/862354314986127400/DaBaby.png)

## Remind
Used in remind command.
Parameters: 
- MemberID
- Time
- Reason
  
**Example**
```js
const remind = require("ultrax").remind;
const time = args[0];
const reason = args.slice(1).join(" ");
if (!time) return message.channel.send("Specify Time! e.g `1m`")
if (!reason) return message.channel.send("Specify Reason! e.g `Going to Market`")
remind(message.author.id, time, reason);
message.channel.send("Successfully set a reminder.")
```
<br>

# Events:
## Reminder Event
This will trigger when someone uses remind command ( [`remind function`](https://www.npmjs.com/package/ultrax#remind) ) And when its time to remind user his message, this will trgger. It has 3 parameters:

- User
- reason
- time
  
**Example**
```js
const Discord = require("discord.js");
const client = new Discord.Client();
client.login('TOKEN HERE');
// ==================================================================
const ultrax = require("ultrax")
// Connecting to mongoose'
ultrax.connectToMongoDB('MONGO DB URL');
// this will make reminder event work!
ultrax.remind.startRemind(client);
//================================================================
// New Event for Remind function;
client.on('reminder', (user, reason, time) => {
	client.users.cache.get(user.id).send(`You asked me \`${time}\` ago to remind you \n \`${reason}\``);
});

client.on('message'(message) => {
	let prefix = '?'
	let args = message.content.slice(prefix.length).trim().split(/ +/g);
	let cmd = args.shift().toLowerCase();
	if (cmd === 'remind') {
		const time = args[0];
		const reason = args.slice(1).join(" ");
		if (!time) return message.channel.send("Specify Time! e.g `1m`")
		if (!reason) return message.channel.send("Specify Reason! e.g `Going to Market`")
		remind(message.author.id, time, reason);
  		 message.channel.send("Successfully set a reminder.")
	};
});
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
ultrax.inviteLogger(client) 
// now below event will work
client.on('inviteJoin', (member, invite, inviter) => {
// results
console.log(`${member.user.tag} joined using invite code ${invite.code} from ${inviter.tag}. Invite was used ${invite.uses} times since its creation.`)
});
```

> `ultrax.inviteLogger(client) 
` put here your discord client. without it, the event won't emit.

-----

## ⎝🔶⎠ Contact us

In case you have idea's to improve the package, or maybe you found some bugs or you need help, you can contact us from our discord server!

<a  href="https://discord.gg/Qk6j2fpeat"><img  src="https://discord.com/api/guilds/716216764769239083/widget.png?style=banner1"></a>
