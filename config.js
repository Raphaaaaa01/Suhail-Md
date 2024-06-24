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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "+255 742 695 219";




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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_10_21_06_24_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICAyMTIsXG4gICAgICAgIDkxLFxuICAgICAgICAyNDEsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTE1LFxuICAgICAgICA4MyxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyMTQsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjE1LFxuICAgICAgICAxNjQsXG4gICAgICAgIDYyLFxuICAgICAgICAyMzgsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTAwLFxuICAgICAgICAyMzgsXG4gICAgICAgIDkxLFxuICAgICAgICA0LFxuICAgICAgICAyMzEsXG4gICAgICAgIDE1MixcbiAgICAgICAgMyxcbiAgICAgICAgNjYsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTk4LFxuICAgICAgICAxMDEsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTAxLFxuICAgICAgICAyNDcsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTU0LFxuICAgICAgICA4OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzcsXG4gICAgICAgIDE1LFxuICAgICAgICAzNSxcbiAgICAgICAgMTM5LFxuICAgICAgICAxNDUsXG4gICAgICAgIDIzLFxuICAgICAgICAxMSxcbiAgICAgICAgNTksXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyOSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxMDYsXG4gICAgICAgIDQxLFxuICAgICAgICAxNTgsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTY2LFxuICAgICAgICAxMzgsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjA2LFxuICAgICAgICAxNDAsXG4gICAgICAgIDM0LFxuICAgICAgICA1LFxuICAgICAgICAxNzEsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTIyLFxuICAgICAgICAzMixcbiAgICAgICAgODUsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjgsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTE5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNixcbiAgICAgICAgMTE5LFxuICAgICAgICA4NCxcbiAgICAgICAgMjMwLFxuICAgICAgICAxNTYsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjQyLFxuICAgICAgICAxNSxcbiAgICAgICAgMjMyLFxuICAgICAgICA4NyxcbiAgICAgICAgMTE2LFxuICAgICAgICAxMDEsXG4gICAgICAgIDI1MSxcbiAgICAgICAgNCxcbiAgICAgICAgNTksXG4gICAgICAgIDkwLFxuICAgICAgICAxOTksXG4gICAgICAgIDYxLFxuICAgICAgICAxMzMsXG4gICAgICAgIDcwLFxuICAgICAgICAyMDIsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjQyLFxuICAgICAgICAyNDQsXG4gICAgICAgIDU1LFxuICAgICAgICAxMyxcbiAgICAgICAgMTQsXG4gICAgICAgIDcxLFxuICAgICAgICAyMjAsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTE1LFxuICAgICAgICAxMThcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA1LFxuICAgICAgICAyMDIsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTgwLFxuICAgICAgICA4NCxcbiAgICAgICAgODgsXG4gICAgICAgIDExNyxcbiAgICAgICAgNjUsXG4gICAgICAgIDEzMixcbiAgICAgICAgOTQsXG4gICAgICAgIDU0LFxuICAgICAgICA0MyxcbiAgICAgICAgMTk0LFxuICAgICAgICAxNjIsXG4gICAgICAgIDg3LFxuICAgICAgICAyNDMsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjA4LFxuICAgICAgICA2NSxcbiAgICAgICAgMTgxLFxuICAgICAgICAxNDAsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjMzLFxuICAgICAgICAxMzgsXG4gICAgICAgIDgxLFxuICAgICAgICA4MCxcbiAgICAgICAgMjMwLFxuICAgICAgICAxMTIsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjQ2LFxuICAgICAgICAyMzEsXG4gICAgICAgIDc4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjgsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjUwLFxuICAgICAgICA4NixcbiAgICAgICAgMTk5LFxuICAgICAgICAxMTEsXG4gICAgICAgIDcxLFxuICAgICAgICA4OSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxNixcbiAgICAgICAgMTU1LFxuICAgICAgICAxODAsXG4gICAgICAgIDg2LFxuICAgICAgICA1OCxcbiAgICAgICAgMjMyLFxuICAgICAgICAyMjgsXG4gICAgICAgIDM2LFxuICAgICAgICAyMDMsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjQyLFxuICAgICAgICAxNDgsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjIwLFxuICAgICAgICAxMSxcbiAgICAgICAgMjAzLFxuICAgICAgICAzMyxcbiAgICAgICAgMTAxLFxuICAgICAgICA1OCxcbiAgICAgICAgMjE2LFxuICAgICAgICAxOTAsXG4gICAgICAgIDExOCxcbiAgICAgICAgODRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE4LFxuICAgICAgICAyNDcsXG4gICAgICAgIDM4LFxuICAgICAgICAyNDgsXG4gICAgICAgIDc4LFxuICAgICAgICAxMTEsXG4gICAgICAgIDM4LFxuICAgICAgICA1OSxcbiAgICAgICAgMjQyLFxuICAgICAgICAyMDQsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTQwLFxuICAgICAgICAyOSxcbiAgICAgICAgMTMsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjI3LFxuICAgICAgICAxNTQsXG4gICAgICAgIDkyLFxuICAgICAgICAxMjQsXG4gICAgICAgIDUyLFxuICAgICAgICAyMTgsXG4gICAgICAgIDM0LFxuICAgICAgICAxOTIsXG4gICAgICAgIDgxLFxuICAgICAgICAxNjEsXG4gICAgICAgIDQ5LFxuICAgICAgICAxNzgsXG4gICAgICAgIDMwLFxuICAgICAgICAxMSxcbiAgICAgICAgMjM3LFxuICAgICAgICA3MCxcbiAgICAgICAgNTlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICA3NlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICA1NixcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAzNixcbiAgICAgICAgICA0NixcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgNCxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTEyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM2LFxuICAgICAgICAxMTYsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTI3LFxuICAgICAgICAxNTAsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTc2LFxuICAgICAgICAxNDAsXG4gICAgICAgIDE4OCxcbiAgICAgICAgNzEsXG4gICAgICAgIDU1LFxuICAgICAgICA2OSxcbiAgICAgICAgMTY0LFxuICAgICAgICAxNjgsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjIwLFxuICAgICAgICA2MixcbiAgICAgICAgMjQsXG4gICAgICAgIDIzNixcbiAgICAgICAgNDMsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTUsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTI3LFxuICAgICAgICA0MSxcbiAgICAgICAgNDQsXG4gICAgICAgIDI2LFxuICAgICAgICAxNDEsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTk5LFxuICAgICAgICAxMjksXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTk3LFxuICAgICAgICAyMzksXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTYyLFxuICAgICAgICA0NSxcbiAgICAgICAgNSxcbiAgICAgICAgMTA0LFxuICAgICAgICA2NCxcbiAgICAgICAgNDQsXG4gICAgICAgIDM2LFxuICAgICAgICAxMTUsXG4gICAgICAgIDMyLFxuICAgICAgICA2MyxcbiAgICAgICAgMTMsXG4gICAgICAgIDQ3LFxuICAgICAgICA5MCxcbiAgICAgICAgMTY5LFxuICAgICAgICAxODUsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjU1LFxuICAgICAgICAyMzAsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTg4LFxuICAgICAgICAxODYsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTM2LFxuICAgICAgICAxNzMsXG4gICAgICAgIDY5LFxuICAgICAgICAxOTksXG4gICAgICAgIDIyNixcbiAgICAgICAgMjE2LFxuICAgICAgICAxNDFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDY0LFxuICBcImFkdlNlY3JldEtleVwiOiBcIkpWSE9RcTZiVGljcGM3ZjI3OEZqK05QTG1UQytxQWM0MVBOQysyS0d1dUU9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjU1NzQyNjk1MjE5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI2OTkwMDAyOUJDQUZCNUQzNURBN0M1NUYzMjczQkE0MVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MTkyMjQ0ODFcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiakZGajVaRU5USW00NTZFc0dfLVVfQVwiLFxuICBcInBob25lSWRcIjogXCI1MjJjOGY1Yy03ZWJhLTQyMTItOTYyNS00Nzk5ZWI1N2VkZGJcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjA2LFxuICAgICAgNTMsXG4gICAgICAxMDgsXG4gICAgICAxMzUsXG4gICAgICAyMjcsXG4gICAgICAxNyxcbiAgICAgIDE1MixcbiAgICAgIDE2MSxcbiAgICAgIDIyNixcbiAgICAgIDg4LFxuICAgICAgMjAzLFxuICAgICAgMjI2LFxuICAgICAgMjA1LFxuICAgICAgMzcsXG4gICAgICA2MyxcbiAgICAgIDE3NSxcbiAgICAgIDk2LFxuICAgICAgMjAxLFxuICAgICAgMTc1LFxuICAgICAgNTNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgOTEsXG4gICAgICAzMyxcbiAgICAgIDEzOSxcbiAgICAgIDE3NSxcbiAgICAgIDgyLFxuICAgICAgMjgsXG4gICAgICAxMDUsXG4gICAgICAxOTUsXG4gICAgICA1OSxcbiAgICAgIDI1MSxcbiAgICAgIDE4OSxcbiAgICAgIDk5LFxuICAgICAgMTUyLFxuICAgICAgMTIwLFxuICAgICAgMTIsXG4gICAgICAxODMsXG4gICAgICAxMDUsXG4gICAgICAyMzcsXG4gICAgICAyMTUsXG4gICAgICAxMDZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiUFYyWTVINU5cIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI1NTc0MjY5NTIxOToxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxNzU1ODI3OTM0MDI0MzoxQGxpZFwiLFxuICAgIFwibmFtZVwiOiBcInJhcGhhYfCfjJ5cIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNQYUp4UGdIRUphUjViTUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcInFSZ29LR3phNVJvamFIMkx4WWRhbUJGZWk2dmRqVC8xTHZESGpncHBlMms9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiYjRhNTlSRFVna1A5YnpvcmhPdXowSm5EZ0xTa3JIQzYyWjJxUTRMK2JpYVpMZHZNeFIrRjcwUFoxSFlZNkZzenZHcUoyVjBUUCtRd0JTa0pVeG5KQUE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiRjY1SExRWWQvQzJCYk54TFQ2eFdSM3pwUWovRk9VYWRSK1FoSGNNSUNzMFM2WFh2Z1lkeDFoSjQ1RmE5d1YxTmt6d0JPQ1huZmNUVmJ6TVJxaUJhZ2c9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjU1NzQyNjk1MjE5OjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDEwNVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE5MjI0NDc0LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBS0g3XCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFLSDcuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJkU3FqV3NNME9IbC8rSUtHbW9kUEk3eENlVE9QK3RHdk53ZlNvdFRqMUk0PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjIxMzE4MjE4MTQsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcxOTIyNDQ3NzA1OVwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

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
