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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_22_06_10_03_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM2LFxuICAgICAgICAyMixcbiAgICAgICAgOTMsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjM5LFxuICAgICAgICAyMzYsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjQxLFxuICAgICAgICAxNTksXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTMwLFxuICAgICAgICA3NixcbiAgICAgICAgMTM4LFxuICAgICAgICAxMDAsXG4gICAgICAgIDYxLFxuICAgICAgICAxNTksXG4gICAgICAgIDEwLFxuICAgICAgICAxMDIsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMzAsXG4gICAgICAgIDE3LFxuICAgICAgICAyNTMsXG4gICAgICAgIDExNyxcbiAgICAgICAgODUsXG4gICAgICAgIDM1LFxuICAgICAgICA1MSxcbiAgICAgICAgMjI4LFxuICAgICAgICAxMCxcbiAgICAgICAgMTY2LFxuICAgICAgICA3MCxcbiAgICAgICAgMTAsXG4gICAgICAgIDExNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0MyxcbiAgICAgICAgMTA2LFxuICAgICAgICAzLFxuICAgICAgICAxNDksXG4gICAgICAgIDExMCxcbiAgICAgICAgNDgsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTkzLFxuICAgICAgICA3LFxuICAgICAgICA2MyxcbiAgICAgICAgMTM0LFxuICAgICAgICAxMDYsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTkwLFxuICAgICAgICAyNDcsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMSxcbiAgICAgICAgOCxcbiAgICAgICAgNDYsXG4gICAgICAgIDIyNixcbiAgICAgICAgNTgsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTM5LFxuICAgICAgICAyMDIsXG4gICAgICAgIDIwMCxcbiAgICAgICAgOSxcbiAgICAgICAgMjAwLFxuICAgICAgICAxOTAsXG4gICAgICAgIDIwNCxcbiAgICAgICAgNyxcbiAgICAgICAgMjI4LFxuICAgICAgICA5OVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA4LFxuICAgICAgICAxMDYsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTA5LFxuICAgICAgICAxODYsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTUwLFxuICAgICAgICA0NyxcbiAgICAgICAgMjAyLFxuICAgICAgICAxMjUsXG4gICAgICAgIDQwLFxuICAgICAgICAxMSxcbiAgICAgICAgMyxcbiAgICAgICAgMTgzLFxuICAgICAgICAxNDEsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjA3LFxuICAgICAgICA4OCxcbiAgICAgICAgMTMsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTksXG4gICAgICAgIDk5LFxuICAgICAgICAxODgsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTEsXG4gICAgICAgIDgsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjE1LFxuICAgICAgICAxNTcsXG4gICAgICAgIDY2LFxuICAgICAgICAxNzksXG4gICAgICAgIDg5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDAsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjQwLFxuICAgICAgICA2NixcbiAgICAgICAgMTEwLFxuICAgICAgICAxNDksXG4gICAgICAgIDIyNyxcbiAgICAgICAgOTYsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxNTQsXG4gICAgICAgIDY3LFxuICAgICAgICAxMjYsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTY2LFxuICAgICAgICAxMDMsXG4gICAgICAgIDkwLFxuICAgICAgICAxNTMsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTQzLFxuICAgICAgICAyMTYsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjM3LFxuICAgICAgICAxNTksXG4gICAgICAgIDU0LFxuICAgICAgICA1MixcbiAgICAgICAgOTQsXG4gICAgICAgIDgyLFxuICAgICAgICAxMTksXG4gICAgICAgIDI0NixcbiAgICAgICAgMjI0LFxuICAgICAgICA0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzYsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTUwLFxuICAgICAgICAxMTAsXG4gICAgICAgIDQsXG4gICAgICAgIDg2LFxuICAgICAgICAxNjgsXG4gICAgICAgIDIyLFxuICAgICAgICAxNjIsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjE0LFxuICAgICAgICAyMTEsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTI4LFxuICAgICAgICAxMTgsXG4gICAgICAgIDE3OSxcbiAgICAgICAgOTEsXG4gICAgICAgIDExNCxcbiAgICAgICAgNjEsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMzQsXG4gICAgICAgIDIxLFxuICAgICAgICAxODMsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTEsXG4gICAgICAgIDc1LFxuICAgICAgICAyMjQsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjAzLFxuICAgICAgICAyNDEsXG4gICAgICAgIDg3LFxuICAgICAgICAxMjNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMzYsXG4gICAgICAgIDIzMyxcbiAgICAgICAgNyxcbiAgICAgICAgNzcsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTY4LFxuICAgICAgICAyNDcsXG4gICAgICAgIDI0LFxuICAgICAgICAyNTIsXG4gICAgICAgIDIzLFxuICAgICAgICAxLFxuICAgICAgICAxNTUsXG4gICAgICAgIDEwNixcbiAgICAgICAgMzEsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMzIsXG4gICAgICAgIDMzLFxuICAgICAgICA4MCxcbiAgICAgICAgMjQyLFxuICAgICAgICAxOTEsXG4gICAgICAgIDM5LFxuICAgICAgICA2NSxcbiAgICAgICAgMjMzLFxuICAgICAgICAxNDMsXG4gICAgICAgIDEwMCxcbiAgICAgICAgNjIsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjE0LFxuICAgICAgICAyMTMsXG4gICAgICAgIDEwOVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgODBcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgNixcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDUyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA1LFxuICAgICAgICAzMyxcbiAgICAgICAgMTAwLFxuICAgICAgICAxNTcsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTk1LFxuICAgICAgICAyNDMsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTc0LFxuICAgICAgICAyMDgsXG4gICAgICAgIDEwNixcbiAgICAgICAgNTYsXG4gICAgICAgIDIxMyxcbiAgICAgICAgNDYsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxNzEsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTIyLFxuICAgICAgICAyNTIsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjA3LFxuICAgICAgICAyMzUsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjU1LFxuICAgICAgICAxOCxcbiAgICAgICAgNzAsXG4gICAgICAgIDQ3LFxuICAgICAgICAxLFxuICAgICAgICAxNTQsXG4gICAgICAgIDMyLFxuICAgICAgICAyOSxcbiAgICAgICAgMTUsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTExLFxuICAgICAgICA2OCxcbiAgICAgICAgMjA0LFxuICAgICAgICAxNzMsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTI5LFxuICAgICAgICAxNjEsXG4gICAgICAgIDU0LFxuICAgICAgICA0OCxcbiAgICAgICAgNzMsXG4gICAgICAgIDIzOCxcbiAgICAgICAgNjQsXG4gICAgICAgIDI3LFxuICAgICAgICA0MCxcbiAgICAgICAgMTI2LFxuICAgICAgICAxMTMsXG4gICAgICAgIDE3MSxcbiAgICAgICAgOTQsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTkyLFxuICAgICAgICAzMCxcbiAgICAgICAgMjA0LFxuICAgICAgICAxNzcsXG4gICAgICAgIDEzNSxcbiAgICAgICAgOCxcbiAgICAgICAgMTYzLFxuICAgICAgICAxMjQsXG4gICAgICAgIDEyNixcbiAgICAgICAgNTQsXG4gICAgICAgIDEzNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTAyLFxuICBcImFkdlNlY3JldEtleVwiOiBcInR6R3p3YTV6VCtFNlVVNFd4NGowa1liYUNUU2Y4TXkrTG0wdnJiNEM2eTQ9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMixcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMixcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImNvNWhJXy04UVd1bFFCQVl6LTU2M3dcIixcbiAgXCJwaG9uZUlkXCI6IFwiYjljNzI2MTEtZTNkNi00ZmMzLWE5NjEtYWI0NmVjZmRhZWNiXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE5MSxcbiAgICAgIDE4MCxcbiAgICAgIDIzNixcbiAgICAgIDEyMyxcbiAgICAgIDE0LFxuICAgICAgMjM0LFxuICAgICAgMzEsXG4gICAgICAxNTEsXG4gICAgICAxMTYsXG4gICAgICA5MixcbiAgICAgIDg0LFxuICAgICAgNDAsXG4gICAgICAyMjYsXG4gICAgICAxNjMsXG4gICAgICAyNDksXG4gICAgICAxOTQsXG4gICAgICAxOTEsXG4gICAgICAxMDUsXG4gICAgICA1OCxcbiAgICAgIDE1NFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyNDQsXG4gICAgICAyNDIsXG4gICAgICAxMDIsXG4gICAgICA0NCxcbiAgICAgIDEyMCxcbiAgICAgIDIsXG4gICAgICAxMDQsXG4gICAgICA3LFxuICAgICAgNTUsXG4gICAgICA2NSxcbiAgICAgIDE0OCxcbiAgICAgIDIwMCxcbiAgICAgIDIwNyxcbiAgICAgIDE0MCxcbiAgICAgIDIwMSxcbiAgICAgIDY2LFxuICAgICAgMjM5LFxuICAgICAgNDQsXG4gICAgICAzNixcbiAgICAgIDIyMVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJSU0pRSk1GV1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjIxNzYwMjYzNjMxOjI5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwi8J2QgfCdkKLwnZCc8J2QqPCdkKbwnZCa8J2Qq/CdkK4u8J2QkvCdkKHwnZCo8J2QoPCdkK7wnZCn8J2QmsSrLuOCpOODkOODqeODkuODnlwiLFxuICAgIFwibGlkXCI6IFwiODM5NjY3Nzg0MDkxNTk6MjlAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSys0MDRJREVOT3EvTGNHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJpRW02NWw1U2dvWlFpR1VjYzU0R3JxL09kTzM1N3U0c3plWTFaR0xwNkZvPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIlJzYW85UjZ1d3ZiZldZRjFzS2hUV3ZjVGdFS0VNYm1pRUFyOFhmRDRYN1M4cEJUVmxJSjFTMEtiN2Y4YzZEYnI0TE81L0NNTCtST0tNS1NJeHRBN0FRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIlBVUE1iWUJqZHhJWU1hM1hmSDJKOXhKT05LYytUc1lhS3oveDhMOTlub1N3amNHSzlXYnNPdDFKREhXUlVuVE5KcVhPdHhqWUl3ZjBUSlU1TWZOVGlBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIyMTc2MDI2MzYzMToyOUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDkwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3Mjc5OTMxNzZcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
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
