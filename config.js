const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api.kyuurzy.site/api/download/aio" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_16_49_10_30_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDgyLFxuICAgICAgICA2MixcbiAgICAgICAgMTMxLFxuICAgICAgICAxMjEsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMzEsXG4gICAgICAgIDEzLFxuICAgICAgICA3MCxcbiAgICAgICAgMTIzLFxuICAgICAgICAyMjEsXG4gICAgICAgIDUsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjUsXG4gICAgICAgIDIwMCxcbiAgICAgICAgNzAsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTY5LFxuICAgICAgICAzOCxcbiAgICAgICAgMTkzLFxuICAgICAgICAyLFxuICAgICAgICAxNTcsXG4gICAgICAgIDU3LFxuICAgICAgICAwLFxuICAgICAgICA1NSxcbiAgICAgICAgMjQwLFxuICAgICAgICAyMzgsXG4gICAgICAgIDQzLFxuICAgICAgICAxOTksXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjQ2LFxuICAgICAgICA4MlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTYsXG4gICAgICAgIDM0LFxuICAgICAgICAxNzEsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxNDEsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjA0LFxuICAgICAgICA1MixcbiAgICAgICAgMjAwLFxuICAgICAgICAzNCxcbiAgICAgICAgMjQzLFxuICAgICAgICAxODcsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjU0LFxuICAgICAgICAxNDMsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjQzLFxuICAgICAgICAxMDQsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTM3LFxuICAgICAgICAxODAsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMzMsXG4gICAgICAgIDQxLFxuICAgICAgICAyMjMsXG4gICAgICAgIDc1LFxuICAgICAgICAxNTcsXG4gICAgICAgIDE2LFxuICAgICAgICA1OCxcbiAgICAgICAgNDUsXG4gICAgICAgIDg3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODQsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTcwLFxuICAgICAgICAxNzIsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTkzLFxuICAgICAgICAyMzYsXG4gICAgICAgIDIwLFxuICAgICAgICAyMjQsXG4gICAgICAgIDI1NSxcbiAgICAgICAgOTEsXG4gICAgICAgIDEwLFxuICAgICAgICAyNSxcbiAgICAgICAgMjEyLFxuICAgICAgICAxNjcsXG4gICAgICAgIDM1LFxuICAgICAgICAxMTgsXG4gICAgICAgIDExNixcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMDYsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTUyLFxuICAgICAgICAyMzUsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTc0LFxuICAgICAgICA4LFxuICAgICAgICA4MCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMDEsXG4gICAgICAgIDY3LFxuICAgICAgICAxNDksXG4gICAgICAgIDY3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDkxLFxuICAgICAgICAxNDAsXG4gICAgICAgIDE2LFxuICAgICAgICAxODYsXG4gICAgICAgIDczLFxuICAgICAgICAyMjksXG4gICAgICAgIDgzLFxuICAgICAgICAxMDIsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjcsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyMDQsXG4gICAgICAgIDE2MixcbiAgICAgICAgOTksXG4gICAgICAgIDI4LFxuICAgICAgICAxMjYsXG4gICAgICAgIDYwLFxuICAgICAgICAxOTAsXG4gICAgICAgIDE3LFxuICAgICAgICAyMTIsXG4gICAgICAgIDg5LFxuICAgICAgICAxMjksXG4gICAgICAgIDExNyxcbiAgICAgICAgMjMsXG4gICAgICAgIDU4LFxuICAgICAgICAyNTQsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjUsXG4gICAgICAgIDMyLFxuICAgICAgICAxNjEsXG4gICAgICAgIDEyMlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICAzNSxcbiAgICAgICAgMTg0LFxuICAgICAgICA2LFxuICAgICAgICAxNTMsXG4gICAgICAgIDMzLFxuICAgICAgICAyMjYsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjQ3LFxuICAgICAgICA4MixcbiAgICAgICAgMTcxLFxuICAgICAgICAxMTcsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTcxLFxuICAgICAgICAxNTIsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMyxcbiAgICAgICAgMTU0LFxuICAgICAgICAyMDAsXG4gICAgICAgIDIxOCxcbiAgICAgICAgODEsXG4gICAgICAgIDcyLFxuICAgICAgICAxNzUsXG4gICAgICAgIDEyNSxcbiAgICAgICAgNTQsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMzcsXG4gICAgICAgIDU1LFxuICAgICAgICAxNjMsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTEwLFxuICAgICAgICAxMTJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTk2LFxuICAgICAgICA5MCxcbiAgICAgICAgMjUxLFxuICAgICAgICAyNTMsXG4gICAgICAgIDUsXG4gICAgICAgIDEwLFxuICAgICAgICA0MyxcbiAgICAgICAgMjM1LFxuICAgICAgICA1OCxcbiAgICAgICAgMTU2LFxuICAgICAgICAyMjksXG4gICAgICAgIDQ4LFxuICAgICAgICAyNCxcbiAgICAgICAgMjEsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTgwLFxuICAgICAgICAyNyxcbiAgICAgICAgMjUzLFxuICAgICAgICAxODEsXG4gICAgICAgIDg3LFxuICAgICAgICAxODMsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjMyLFxuICAgICAgICAxMzAsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTM4LFxuICAgICAgICA0MyxcbiAgICAgICAgOTMsXG4gICAgICAgIDkyLFxuICAgICAgICAyMjksXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTEyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDY0LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICA0MixcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDksXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDk2XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxLFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDk4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA4LFxuICAgICAgICAxNjUsXG4gICAgICAgIDcsXG4gICAgICAgIDEyNyxcbiAgICAgICAgODksXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTY2LFxuICAgICAgICAxOTQsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjQyLFxuICAgICAgICAxNjIsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTMxLFxuICAgICAgICAyNTEsXG4gICAgICAgIDY4LFxuICAgICAgICAyMDksXG4gICAgICAgIDIzMyxcbiAgICAgICAgMzEsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjExLFxuICAgICAgICA5MSxcbiAgICAgICAgMzAsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTUyLFxuICAgICAgICAxMjEsXG4gICAgICAgIDc2LFxuICAgICAgICAyMTAsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjU0LFxuICAgICAgICA3MyxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyOCxcbiAgICAgICAgMjAxLFxuICAgICAgICAyMzQsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTI3LFxuICAgICAgICA2OCxcbiAgICAgICAgMTkzLFxuICAgICAgICAyMzAsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTksXG4gICAgICAgIDIyLFxuICAgICAgICAyMDIsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTk0LFxuICAgICAgICAyMDYsXG4gICAgICAgIDIxNCxcbiAgICAgICAgNTUsXG4gICAgICAgIDY1LFxuICAgICAgICAyNDAsXG4gICAgICAgIDcyLFxuICAgICAgICA2MyxcbiAgICAgICAgMTcxLFxuICAgICAgICAyNTIsXG4gICAgICAgIDE3NSxcbiAgICAgICAgNTYsXG4gICAgICAgIDY2LFxuICAgICAgICAyMTksXG4gICAgICAgIDI0LFxuICAgICAgICAxNTAsXG4gICAgICAgIDEwNSxcbiAgICAgICAgOCxcbiAgICAgICAgMTIwLFxuICAgICAgICA3XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAzMixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJWTnV2ZzNubXFrdGJTT1V4b084YkVCTTl3VHI0NUNEcWpTWlpWUHdXV1lNPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJ2a3VHaFdrMVFOYW5US0dMT2ZmbktRXCIsXG4gIFwicGhvbmVJZFwiOiBcIjA3OThmODBhLTE2MDItNDY3MS1hYTg1LTM2MjZmMWMwMjllZlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNDMsXG4gICAgICA3MCxcbiAgICAgIDg4LFxuICAgICAgMTQ5LFxuICAgICAgMjMwLFxuICAgICAgNDYsXG4gICAgICAxMzYsXG4gICAgICA1NyxcbiAgICAgIDEyMSxcbiAgICAgIDIzMixcbiAgICAgIDU1LFxuICAgICAgMTM3LFxuICAgICAgMjAzLFxuICAgICAgMTM4LFxuICAgICAgMyxcbiAgICAgIDEwMixcbiAgICAgIDYsXG4gICAgICAxMzYsXG4gICAgICAyMjksXG4gICAgICAxMjVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjQ0LFxuICAgICAgODUsXG4gICAgICAyNDQsXG4gICAgICAyNSxcbiAgICAgIDY3LFxuICAgICAgMjA2LFxuICAgICAgMTM5LFxuICAgICAgMjQ1LFxuICAgICAgNDIsXG4gICAgICAxNTEsXG4gICAgICAxNDMsXG4gICAgICA1MCxcbiAgICAgIDE0MCxcbiAgICAgIDE0MyxcbiAgICAgIDI2LFxuICAgICAgMzYsXG4gICAgICAxNDAsXG4gICAgICAzOSxcbiAgICAgIDk2LFxuICAgICAgMjE2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjRTNlBTNUVTXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMjE3NjAyNjM2MzE6ODhAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCLwnZCB8J2QovCdkJzwnZCo8J2QpvCdkJrwnZCr8J2QriDwnZCS8J2QofCdkKjwnZCg8J2QrvCdkKfwnZCaxKtcIixcbiAgICBcImxpZFwiOiBcIjgzOTY2Nzc4NDA5MTU5Ojg4QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0pmRDBjc0hFUFRHaWJrR0dBTWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiRy9aZXJYbUU0TWJrODl3a0ZVME4vWWhYcE9laHlYb2lmbnU3bCt0WGR3dz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJodVZGVWg3b3hEUXhUa1owalZXTzgzWWtka2tqdGJadDJIMGpzVmszWm80R2EvWWpJQ0o0cFNmRjNSeS9jVzIvNFFlTGQ5RjhSUDhYa0w2djFQN0dDQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJjWjhHaXpNMFRQc0p0ZmFzTFV4R0szcEcyUjZHdEVJRitlZFhoU2p4NTJmMldNNFJlVlF4Lyt6c0hsVVpnYWFXdXJrMUdzUElvRllYbWV5dmp2d1BBdz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMjE3NjAyNjM2MzE6ODhAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAyMSxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMTJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczMDMwNjkzNixcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUYyMFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRjIwLmpzb24iOiAie1wia2V5RGF0YVwiOlwiZmtnV2E2ekhlczdtQTk2UTZMb2hERm9EU1g2M2tWMVVvOTNVSWhpSm80RT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoyMDM3NjcwMjk1LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MzAyMzc4MDgwMDZcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "‹",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "𝐁𝐢𝐜𝐨𝐦𝐚𝐫𝐮•𝐒𝐡𝐨𝐠𝐮𝐧𝐚ī ",
  packname: process.env.PACK_NAME || "infinity",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
