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
global.caption = process.env.CAPTION || global.caption || "© ⏤͟͞★⃝ꪶ‎𝞢𝐁𝐢𝐜𝐨𝐦𝐚𝐫𝐮•𝐒𝐡𝐨𝐠𝐮𝐧𝐚ī イバラヒマ𖥘✪͜͡➺" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "221760263631";




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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_10_15_10_05_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICA2OCxcbiAgICAgICAgNzcsXG4gICAgICAgIDE1MCxcbiAgICAgICAgODAsXG4gICAgICAgIDQwLFxuICAgICAgICAyMDgsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTg5LFxuICAgICAgICA1NSxcbiAgICAgICAgMTk4LFxuICAgICAgICAxNjEsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjEsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMzgsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTU0LFxuICAgICAgICAyNDcsXG4gICAgICAgIDI0MixcbiAgICAgICAgNTQsXG4gICAgICAgIDczLFxuICAgICAgICAxNDYsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTg0LFxuICAgICAgICA4LFxuICAgICAgICAyMDgsXG4gICAgICAgIDc0LFxuICAgICAgICA0MSxcbiAgICAgICAgMjAwLFxuICAgICAgICAxMTgsXG4gICAgICAgIDgxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDk5LFxuICAgICAgICAyMjIsXG4gICAgICAgIDE2OCxcbiAgICAgICAgNDQsXG4gICAgICAgIDE3LFxuICAgICAgICAyNDcsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTYxLFxuICAgICAgICAxMzAsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjE4LFxuICAgICAgICAxNDIsXG4gICAgICAgIDYwLFxuICAgICAgICAyMzMsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTEwLFxuICAgICAgICAxNjYsXG4gICAgICAgIDEzLFxuICAgICAgICAyNDAsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMSxcbiAgICAgICAgNjIsXG4gICAgICAgIDQ1LFxuICAgICAgICA5MixcbiAgICAgICAgMjA5LFxuICAgICAgICAzNyxcbiAgICAgICAgMjI4LFxuICAgICAgICA1MSxcbiAgICAgICAgMTQyLFxuICAgICAgICAxMTgsXG4gICAgICAgIDI0LFxuICAgICAgICAxN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM2LFxuICAgICAgICAxMSxcbiAgICAgICAgMTgyLFxuICAgICAgICAxOTEsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjU0LFxuICAgICAgICAxMjgsXG4gICAgICAgIDQ0LFxuICAgICAgICAyMTcsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjQsXG4gICAgICAgIDQxLFxuICAgICAgICAxOTEsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTI5LFxuICAgICAgICAxOTMsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjA3LFxuICAgICAgICAxMDYsXG4gICAgICAgIDY1LFxuICAgICAgICA0NCxcbiAgICAgICAgMTE1LFxuICAgICAgICAxNzQsXG4gICAgICAgIDAsXG4gICAgICAgIDc5LFxuICAgICAgICA0MyxcbiAgICAgICAgNjMsXG4gICAgICAgIDI3LFxuICAgICAgICA3MCxcbiAgICAgICAgNjcsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTA5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5MixcbiAgICAgICAgMTUyLFxuICAgICAgICA3LFxuICAgICAgICAxOTgsXG4gICAgICAgIDIsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjQyLFxuICAgICAgICAxOTEsXG4gICAgICAgIDM0LFxuICAgICAgICA4MCxcbiAgICAgICAgMjgsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjQxLFxuICAgICAgICA0OCxcbiAgICAgICAgNzMsXG4gICAgICAgIDgzLFxuICAgICAgICAxNzEsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMzgsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjAwLFxuICAgICAgICA2LFxuICAgICAgICA2NCxcbiAgICAgICAgMTIwLFxuICAgICAgICA3MyxcbiAgICAgICAgMjI1LFxuICAgICAgICAyMDQsXG4gICAgICAgIDk5LFxuICAgICAgICAyMzgsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjUyLFxuICAgICAgICAzNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDgsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTQsXG4gICAgICAgIDIxNixcbiAgICAgICAgOTQsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTM0LFxuICAgICAgICAyMjcsXG4gICAgICAgIDkzLFxuICAgICAgICAxNixcbiAgICAgICAgMjAwLFxuICAgICAgICAyNCxcbiAgICAgICAgMTIzLFxuICAgICAgICA0OCxcbiAgICAgICAgOTksXG4gICAgICAgIDUxLFxuICAgICAgICAyMTUsXG4gICAgICAgIDczLFxuICAgICAgICAxNTEsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMyxcbiAgICAgICAgMTIzLFxuICAgICAgICAyNTIsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTMwLFxuICAgICAgICAxOSxcbiAgICAgICAgNjAsXG4gICAgICAgIDE0NixcbiAgICAgICAgODUsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTI3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3MyxcbiAgICAgICAgNTUsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMzcsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjI2LFxuICAgICAgICAxMzYsXG4gICAgICAgIDMwLFxuICAgICAgICAxNDAsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxMDYsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjIxLFxuICAgICAgICAxNTYsXG4gICAgICAgIDE1NixcbiAgICAgICAgNjIsXG4gICAgICAgIDE5OCxcbiAgICAgICAgNTgsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjIzLFxuICAgICAgICA1MyxcbiAgICAgICAgMixcbiAgICAgICAgMTgwLFxuICAgICAgICAyNDYsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMyxcbiAgICAgICAgMzgsXG4gICAgICAgIDI2LFxuICAgICAgICAzNSxcbiAgICAgICAgMTY4LFxuICAgICAgICA5M1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1NixcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICA3MyxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICA5NixcbiAgICAgICAgICA5NVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICA5NixcbiAgICAgICAgICA1NCxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDYwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODksXG4gICAgICAgIDExNSxcbiAgICAgICAgNzEsXG4gICAgICAgIDE2NyxcbiAgICAgICAgNDksXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTc3LFxuICAgICAgICAxNzksXG4gICAgICAgIDY0LFxuICAgICAgICAyMTMsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjAsXG4gICAgICAgIDE0LFxuICAgICAgICA0NyxcbiAgICAgICAgMTM5LFxuICAgICAgICAxNzksXG4gICAgICAgIDYyLFxuICAgICAgICA2NyxcbiAgICAgICAgMTA0LFxuICAgICAgICAxMjAsXG4gICAgICAgIDEyNCxcbiAgICAgICAgNTYsXG4gICAgICAgIDE3MixcbiAgICAgICAgMzYsXG4gICAgICAgIDk3LFxuICAgICAgICAxOTQsXG4gICAgICAgIDM3LFxuICAgICAgICA0MixcbiAgICAgICAgOTIsXG4gICAgICAgIDgzLFxuICAgICAgICAxMDgsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTU2LFxuICAgICAgICAxMjYsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjAyLFxuICAgICAgICAxMDYsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTYwLFxuICAgICAgICAxMTAsXG4gICAgICAgIDExMixcbiAgICAgICAgNDcsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTMzLFxuICAgICAgICA4MixcbiAgICAgICAgMjQsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTAsXG4gICAgICAgIDgsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTIsXG4gICAgICAgIDEzLFxuICAgICAgICAxMDcsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTQ1LFxuICAgICAgICAyMzIsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjUsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTk5LFxuICAgICAgICAxNzYsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTIwLFxuICAgICAgICA2XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA0NSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCI2K0tyRng3MXhxUllOZU5GQWJYcE1ObW80TEtSS20xZWljZkFTSnp3Q2NzPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCIwWDZFX2VfQ1EwcWdSd1UxUHJJQnFBXCIsXG4gIFwicGhvbmVJZFwiOiBcImEwZTQ2Y2VjLThiYmYtNDc2MS05ZDk3LWIyOWYwN2RjZDU3ZVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMzYsXG4gICAgICAxMTksXG4gICAgICA3MCxcbiAgICAgIDEzNSxcbiAgICAgIDIxNSxcbiAgICAgIDIyNSxcbiAgICAgIDQ4LFxuICAgICAgMTE0LFxuICAgICAgMjE2LFxuICAgICAgMTA1LFxuICAgICAgMjI1LFxuICAgICAgMTcwLFxuICAgICAgNzAsXG4gICAgICAyMzcsXG4gICAgICA1MyxcbiAgICAgIDE3NixcbiAgICAgIDE2MCxcbiAgICAgIDEwMyxcbiAgICAgIDg4LFxuICAgICAgODdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTM2LFxuICAgICAgMTI4LFxuICAgICAgMTkzLFxuICAgICAgMzUsXG4gICAgICA4NixcbiAgICAgIDIzMSxcbiAgICAgIDY1LFxuICAgICAgMjEwLFxuICAgICAgMjE5LFxuICAgICAgMTg2LFxuICAgICAgMjYsXG4gICAgICA1OCxcbiAgICAgIDE2OCxcbiAgICAgIDg0LFxuICAgICAgMTgzLFxuICAgICAgMTkxLFxuICAgICAgMTE5LFxuICAgICAgMTU5LFxuICAgICAgOTYsXG4gICAgICA2N1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJEM0JNS1Y5TVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjIxNzYwMjYzNjMxOjM2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwi8J2QgfCdkKLwnZCc8J2QqPCdkKbwnZCa8J2Qq/CdkK4u8J2QkvCdkKHwnZCo8J2QoPCdkK7wnZCn8J2QmsSrLuOCpOODkOODqeODkuODnlwiLFxuICAgIFwibGlkXCI6IFwiODM5NjY3Nzg0MDkxNTk6MzZAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTEs0MDRJREVNQ2poTGdHR0FJZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJpRW02NWw1U2dvWlFpR1VjYzU0R3JxL09kTzM1N3U0c3plWTFaR0xwNkZvPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIm1wbXJGZlBQOWluNEhjY3dYM1krUXJ1NEpIWi9sbDExcVFQOGdCanE5aXM4bTFGbkpqd0pXU2kxVThvL2NjWHJYK0hnV2RhVVpiUEp5YXB0UWJpV0JnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcInZrR1VrS0djdmpoSEQwMkRLZnZJRlZVOWZHdVN6ZEtPSnJrMWo0Znl6VHd1eVpoQXUxK1N5eTRnSWlRaXNUVk9yVkdTV2t1OU93TENKQmh3SDJTdkF3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIyMTc2MDI2MzYzMTozNkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDkwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjgxMjMzMzIsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFKRXZcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUpFdi5qc29uIjogIntcImtleURhdGFcIjpcIjJ3TVlBQlRrQ2Q1NTlPSHNXQkJQZGJBR0VoNDNVeStwSjV0eXhvTGJGbDQ9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6ODEwODY3NzU0LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "★",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "⏤͟͞★⃝ꪶ‎𝞢𝐁𝐢𝐜𝐨𝐦𝐚𝐫𝐮•𝐒𝐡𝐨𝐠𝐮𝐧𝐚ī イバラヒマ𖥘✪͜͡➺",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "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",
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
