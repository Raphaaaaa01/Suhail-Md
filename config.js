const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "+255 698 709 209";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_15_32_06_24_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICA0NixcbiAgICAgICAgOTAsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTE5LFxuICAgICAgICA2NCxcbiAgICAgICAgMTE4LFxuICAgICAgICA4NSxcbiAgICAgICAgMTc1LFxuICAgICAgICAyMjgsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTg3LFxuICAgICAgICAxMzUsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjEzLFxuICAgICAgICAyNTEsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTA2LFxuICAgICAgICAxOTgsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTAyLFxuICAgICAgICAyNTIsXG4gICAgICAgIDg1LFxuICAgICAgICAyNDQsXG4gICAgICAgIDIyOSxcbiAgICAgICAgOTMsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTYsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTczLFxuICAgICAgICAxMjksXG4gICAgICAgIDc2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDcyLFxuICAgICAgICAxOTcsXG4gICAgICAgIDEzNixcbiAgICAgICAgNzcsXG4gICAgICAgIDE3LFxuICAgICAgICAxMTYsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTYsXG4gICAgICAgIDI2LFxuICAgICAgICA4NCxcbiAgICAgICAgMjI4LFxuICAgICAgICAxMjIsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTIsXG4gICAgICAgIDEyOCxcbiAgICAgICAgNzMsXG4gICAgICAgIDY5LFxuICAgICAgICAxMzQsXG4gICAgICAgIDYsXG4gICAgICAgIDE1NSxcbiAgICAgICAgOTAsXG4gICAgICAgIDQyLFxuICAgICAgICAxMTQsXG4gICAgICAgIDY3LFxuICAgICAgICAxMjIsXG4gICAgICAgIDI2LFxuICAgICAgICA0NyxcbiAgICAgICAgMTA0LFxuICAgICAgICAyMTUsXG4gICAgICAgIDgxLFxuICAgICAgICAxOTAsXG4gICAgICAgIDI3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjQsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTE0LFxuICAgICAgICAxNzMsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjAxLFxuICAgICAgICAyMyxcbiAgICAgICAgMTA5LFxuICAgICAgICAxMzYsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTAxLFxuICAgICAgICAxLFxuICAgICAgICAxNzQsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTI2LFxuICAgICAgICAyMDQsXG4gICAgICAgIDI0MSxcbiAgICAgICAgOTUsXG4gICAgICAgIDY5LFxuICAgICAgICAxNzgsXG4gICAgICAgIDI4LFxuICAgICAgICAxMjcsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjQyLFxuICAgICAgICA4LFxuICAgICAgICAxNzAsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjM1LFxuICAgICAgICAyMjAsXG4gICAgICAgIDYwLFxuICAgICAgICA5OSxcbiAgICAgICAgMTI0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDMsXG4gICAgICAgIDU5LFxuICAgICAgICAxOTEsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjM5LFxuICAgICAgICAyMjksXG4gICAgICAgIDY4LFxuICAgICAgICA0OCxcbiAgICAgICAgMTg4LFxuICAgICAgICA5NCxcbiAgICAgICAgMjE1LFxuICAgICAgICAxOSxcbiAgICAgICAgMjgsXG4gICAgICAgIDIyNixcbiAgICAgICAgNixcbiAgICAgICAgNDQsXG4gICAgICAgIDgzLFxuICAgICAgICA3OCxcbiAgICAgICAgMTA0LFxuICAgICAgICA2MCxcbiAgICAgICAgMzcsXG4gICAgICAgIDE0NSxcbiAgICAgICAgOTUsXG4gICAgICAgIDEwLFxuICAgICAgICA3MyxcbiAgICAgICAgMjExLFxuICAgICAgICAxOTUsXG4gICAgICAgIDM3LFxuICAgICAgICAxMSxcbiAgICAgICAgMTU0LFxuICAgICAgICAxNjUsXG4gICAgICAgIDk1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0MCxcbiAgICAgICAgOTIsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTIsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjI4LFxuICAgICAgICAyMzgsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTUwLFxuICAgICAgICAxNCxcbiAgICAgICAgMTAxLFxuICAgICAgICA5NSxcbiAgICAgICAgNCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyNDYsXG4gICAgICAgIDU2LFxuICAgICAgICA0NyxcbiAgICAgICAgMTMzLFxuICAgICAgICA4NSxcbiAgICAgICAgMCxcbiAgICAgICAgMTM0LFxuICAgICAgICAyNDUsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjEwLFxuICAgICAgICAxMCxcbiAgICAgICAgMzksXG4gICAgICAgIDE5LFxuICAgICAgICAyNTMsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTI3LFxuICAgICAgICAyMzIsXG4gICAgICAgIDExN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODUsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTUzLFxuICAgICAgICAyNDksXG4gICAgICAgIDM0LFxuICAgICAgICAyNDcsXG4gICAgICAgIDUwLFxuICAgICAgICA3NyxcbiAgICAgICAgMjEwLFxuICAgICAgICAxMDAsXG4gICAgICAgIDExLFxuICAgICAgICAxODksXG4gICAgICAgIDU2LFxuICAgICAgICA1LFxuICAgICAgICAxODUsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTYyLFxuICAgICAgICAyMCxcbiAgICAgICAgMjM3LFxuICAgICAgICAxODMsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTI0LFxuICAgICAgICAyNDUsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjgsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTMxLFxuICAgICAgICAxMDMsXG4gICAgICAgIDMsXG4gICAgICAgIDExMixcbiAgICAgICAgMTE4LFxuICAgICAgICAyM1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMSxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICA3NixcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDExOFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgNzksXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgOTNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTcsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjM2LFxuICAgICAgICAxMTMsXG4gICAgICAgIDI1LFxuICAgICAgICAxMTUsXG4gICAgICAgIDE3LFxuICAgICAgICA0OCxcbiAgICAgICAgMjUsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTI3LFxuICAgICAgICAxNzMsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjE1LFxuICAgICAgICA1MSxcbiAgICAgICAgMTM2LFxuICAgICAgICAzOSxcbiAgICAgICAgMjIsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTI1LFxuICAgICAgICAxNDAsXG4gICAgICAgIDAsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTU3LFxuICAgICAgICA4OCxcbiAgICAgICAgOTEsXG4gICAgICAgIDIzLFxuICAgICAgICAyMzUsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTksXG4gICAgICAgIDE3NCxcbiAgICAgICAgMyxcbiAgICAgICAgMTc4LFxuICAgICAgICAxOTYsXG4gICAgICAgIDUzLFxuICAgICAgICAyMTQsXG4gICAgICAgIDY1LFxuICAgICAgICA0OSxcbiAgICAgICAgMjQzLFxuICAgICAgICAxMDcsXG4gICAgICAgIDM2LFxuICAgICAgICA1OCxcbiAgICAgICAgMTAsXG4gICAgICAgIDI0NSxcbiAgICAgICAgOTEsXG4gICAgICAgIDc4LFxuICAgICAgICAxMzYsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjU0LFxuICAgICAgICA5OSxcbiAgICAgICAgMTI5LFxuICAgICAgICAxODMsXG4gICAgICAgIDkyLFxuICAgICAgICAxMDUsXG4gICAgICAgIDc4LFxuICAgICAgICAzMyxcbiAgICAgICAgNzgsXG4gICAgICAgIDE4MSxcbiAgICAgICAgOTQsXG4gICAgICAgIDE0MixcbiAgICAgICAgNDYsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTAwLFxuICAgICAgICAxNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogOTgsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwidmRES3ZDVzBIVHJIdWxhYWs4UmdQcDNrSE40VHFTS0NmZ3lxaVZhZkpQST1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiekxtdFUzRVVTNjZXMTVWYlNIREhXQVwiLFxuICBcInBob25lSWRcIjogXCJmMGJlOTdmZi03MmJhLTRmMGEtODZmNC05ZTY5YjBiODYzNDBcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMzksXG4gICAgICAxMzcsXG4gICAgICAyNDEsXG4gICAgICAxMDMsXG4gICAgICAyMDgsXG4gICAgICA0NyxcbiAgICAgIDI0OCxcbiAgICAgIDE2MCxcbiAgICAgIDE5LFxuICAgICAgMTUzLFxuICAgICAgODAsXG4gICAgICAxNzgsXG4gICAgICA5NyxcbiAgICAgIDIzOSxcbiAgICAgIDI3LFxuICAgICAgNjYsXG4gICAgICAyNDcsXG4gICAgICAyMDAsXG4gICAgICAxNTksXG4gICAgICAxNjBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTY5LFxuICAgICAgNDcsXG4gICAgICA2OCxcbiAgICAgIDI1MixcbiAgICAgIDEwNyxcbiAgICAgIDIzMixcbiAgICAgIDY4LFxuICAgICAgMTkyLFxuICAgICAgNjIsXG4gICAgICAxNyxcbiAgICAgIDE1MCxcbiAgICAgIDQwLFxuICAgICAgMTE2LFxuICAgICAgNzUsXG4gICAgICAxODksXG4gICAgICAxODIsXG4gICAgICA0MCxcbiAgICAgIDk5LFxuICAgICAgMjMyLFxuICAgICAgMTAyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkZRN1dXRzNFXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNTU2OTg3MDkyMDk6NjVAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjE0MDc2Mzc5NTA2NzA3NDo2NUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNOaUpyNHdERUk2ajVyTUdHQUlnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjhQZmdwRGpDM0JOVmlyUmdMSGwvWGZ2QWRoWDlIZENvR0d0OXhhL1R0RXc9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiZEkwMW04eThnaFhCb3MwTlNkcmttSTlQUER3SE0xNktiSFlDQkpYVHhGYmw3OG5sQksvVzg5RVJFdjQ1aW5RYjBSc3lFNVA1dGRFTHJzWUtQOXdTQXc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiL3M0QjRueEJQeENiREY4UlBqbXdtNGZnUjhvYWJmbnd0TFlIQkhWYkFpYzZ2cjlhWHRTbnJEUnY3THB6THZUbjFaNFFQSythRXRQZGtFemxhUnRDQnc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjU1Njk4NzA5MjA5OjY1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICA5NixcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDc2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTkyNDMxNTRcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Raphaa",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "true",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
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
