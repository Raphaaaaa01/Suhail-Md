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

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Tanzania";
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
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "true"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "true"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_23_18_06_25_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTM0LFxuICAgICAgICAxOTksXG4gICAgICAgIDIyMixcbiAgICAgICAgMjQ1LFxuICAgICAgICAxMTksXG4gICAgICAgIDE3LFxuICAgICAgICAyNDgsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTUwLFxuICAgICAgICAxMDEsXG4gICAgICAgIDQ5LFxuICAgICAgICA1LFxuICAgICAgICAyMDYsXG4gICAgICAgIDU0LFxuICAgICAgICAyMTIsXG4gICAgICAgIDUzLFxuICAgICAgICAzNSxcbiAgICAgICAgMjQzLFxuICAgICAgICAyMDgsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTgxLFxuICAgICAgICAxLFxuICAgICAgICAyNDMsXG4gICAgICAgIDIyNyxcbiAgICAgICAgNzcsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTkyLFxuICAgICAgICAyMTgsXG4gICAgICAgIDExMixcbiAgICAgICAgNzZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMxLFxuICAgICAgICAxOTcsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjI3LFxuICAgICAgICAyMzUsXG4gICAgICAgIDY5LFxuICAgICAgICAxODYsXG4gICAgICAgIDI5LFxuICAgICAgICAxMzIsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTUwLFxuICAgICAgICAzMyxcbiAgICAgICAgMjI4LFxuICAgICAgICA1OSxcbiAgICAgICAgMTIsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTgwLFxuICAgICAgICA0MSxcbiAgICAgICAgMTgxLFxuICAgICAgICA1MyxcbiAgICAgICAgMTAwLFxuICAgICAgICAxMDMsXG4gICAgICAgIDU0LFxuICAgICAgICAxMDcsXG4gICAgICAgIDgzLFxuICAgICAgICAxMDksXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjEsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTU0LFxuICAgICAgICAyMTAsXG4gICAgICAgIDYyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzYsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMCxcbiAgICAgICAgMTg2LFxuICAgICAgICA3MyxcbiAgICAgICAgMTYxLFxuICAgICAgICAxMjksXG4gICAgICAgIDIzOCxcbiAgICAgICAgNTIsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNTcsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjAyLFxuICAgICAgICA0NCxcbiAgICAgICAgMTA0LFxuICAgICAgICAxNzIsXG4gICAgICAgIDg4LFxuICAgICAgICAxNDYsXG4gICAgICAgIDY5LFxuICAgICAgICAxMixcbiAgICAgICAgMjI5LFxuICAgICAgICA5MyxcbiAgICAgICAgODksXG4gICAgICAgIDIwMyxcbiAgICAgICAgMzIsXG4gICAgICAgIDM3LFxuICAgICAgICAyMTQsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjI1LFxuICAgICAgICAxMDYsXG4gICAgICAgIDQ5LFxuICAgICAgICA3N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4OSxcbiAgICAgICAgMTYsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjE0LFxuICAgICAgICAxNTEsXG4gICAgICAgIDY1LFxuICAgICAgICAxMDIsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTIsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTY1LFxuICAgICAgICAxNTcsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjQyLFxuICAgICAgICAyNCxcbiAgICAgICAgNzAsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTk1LFxuICAgICAgICA3MCxcbiAgICAgICAgNTEsXG4gICAgICAgIDQ2LFxuICAgICAgICA2NSxcbiAgICAgICAgMjMxLFxuICAgICAgICAxMjEsXG4gICAgICAgIDExMCxcbiAgICAgICAgNjIsXG4gICAgICAgIDIxLFxuICAgICAgICAyMjIsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTczLFxuICAgICAgICAxNjAsXG4gICAgICAgIDExNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM2LFxuICAgICAgICAyOSxcbiAgICAgICAgMTc1LFxuICAgICAgICAxNTQsXG4gICAgICAgIDkzLFxuICAgICAgICA3MSxcbiAgICAgICAgMTYwLFxuICAgICAgICAyMDYsXG4gICAgICAgIDY0LFxuICAgICAgICAxNSxcbiAgICAgICAgNyxcbiAgICAgICAgMjUwLFxuICAgICAgICAyNDcsXG4gICAgICAgIDE2NyxcbiAgICAgICAgNTMsXG4gICAgICAgIDM1LFxuICAgICAgICA2MCxcbiAgICAgICAgMjE5LFxuICAgICAgICA4MCxcbiAgICAgICAgNzMsXG4gICAgICAgIDIxNSxcbiAgICAgICAgNDAsXG4gICAgICAgIDE5NixcbiAgICAgICAgODMsXG4gICAgICAgIDEyNyxcbiAgICAgICAgNzksXG4gICAgICAgIDEyMyxcbiAgICAgICAgNjgsXG4gICAgICAgIDk0LFxuICAgICAgICAxNDAsXG4gICAgICAgIDE4OSxcbiAgICAgICAgODlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQzLFxuICAgICAgICAyMyxcbiAgICAgICAgMTk1LFxuICAgICAgICAyMjUsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjI1LFxuICAgICAgICAxMzAsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTQsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjAwLFxuICAgICAgICAxNyxcbiAgICAgICAgMTMxLFxuICAgICAgICAzMCxcbiAgICAgICAgOTksXG4gICAgICAgIDEwMCxcbiAgICAgICAgNTgsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjM3LFxuICAgICAgICAxNTQsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTc5LFxuICAgICAgICA5NCxcbiAgICAgICAgODMsXG4gICAgICAgIDM5LFxuICAgICAgICAxNDIsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjUxLFxuICAgICAgICA4NCxcbiAgICAgICAgMjMzLFxuICAgICAgICAyMzQsXG4gICAgICAgIDkxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDgsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgOSxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMTE5XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAxMjFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyOSxcbiAgICAgICAgMTg5LFxuICAgICAgICAxODAsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNzYsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTE0LFxuICAgICAgICAxODgsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTA3LFxuICAgICAgICAxNyxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNzAsXG4gICAgICAgIDI0LFxuICAgICAgICA1NCxcbiAgICAgICAgNjcsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTU5LFxuICAgICAgICAxMyxcbiAgICAgICAgNjcsXG4gICAgICAgIDQ4LFxuICAgICAgICAxMzUsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTY5LFxuICAgICAgICAxMTQsXG4gICAgICAgIDIxNixcbiAgICAgICAgNDksXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTUxLFxuICAgICAgICAyMzgsXG4gICAgICAgIDcxLFxuICAgICAgICAyMDYsXG4gICAgICAgIDY0LFxuICAgICAgICA3NCxcbiAgICAgICAgMTQxLFxuICAgICAgICAyMTIsXG4gICAgICAgIDU4LFxuICAgICAgICAyNTMsXG4gICAgICAgIDIyLFxuICAgICAgICA5MixcbiAgICAgICAgNDEsXG4gICAgICAgIDE5OCxcbiAgICAgICAgNzYsXG4gICAgICAgIDczLFxuICAgICAgICAxNjAsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTkwLFxuICAgICAgICAyMzQsXG4gICAgICAgIDgxLFxuICAgICAgICAyMzAsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTI1LFxuICAgICAgICAyNDUsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjE4LFxuICAgICAgICA3NyxcbiAgICAgICAgMTgyLFxuICAgICAgICAxOTIsXG4gICAgICAgIDc3LFxuICAgICAgICAxMDUsXG4gICAgICAgIDg0LFxuICAgICAgICAyLFxuICAgICAgICAxNDNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE1LFxuICBcImFkdlNlY3JldEtleVwiOiBcIlplcForQ1dJY0M0NUNGNDh6d1VjZTQvR0N3Q1NGK01vM01OaytyRmZOYVk9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjU1NzQyNjk1MjE5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJBQjIwMEY5NkEzOTEwMjdGQzc4RjM3QjRFQzMxMkIzRlwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MTkzNTc1MjRcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiV3JqY1dYTVRSWUctOTdIMEJCdjRHZ1wiLFxuICBcInBob25lSWRcIjogXCI4NjZmNWZkMC01MDdiLTRkMjctOGI4Ni03YTZhZWQ5NDQ4NGZcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjgsXG4gICAgICA0OSxcbiAgICAgIDE3NSxcbiAgICAgIDEyMSxcbiAgICAgIDU2LFxuICAgICAgMzUsXG4gICAgICAyNTIsXG4gICAgICAxODcsXG4gICAgICAzMCxcbiAgICAgIDE0LFxuICAgICAgOTcsXG4gICAgICAyMzAsXG4gICAgICAzNSxcbiAgICAgIDU0LFxuICAgICAgODIsXG4gICAgICAxMixcbiAgICAgIDUzLFxuICAgICAgMTA0LFxuICAgICAgMTcxLFxuICAgICAgMTM0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIxOCxcbiAgICAgIDIzMSxcbiAgICAgIDE3MixcbiAgICAgIDE1OSxcbiAgICAgIDEzMixcbiAgICAgIDE0MCxcbiAgICAgIDIzMixcbiAgICAgIDE3OCxcbiAgICAgIDkxLFxuICAgICAgMzAsXG4gICAgICA3MCxcbiAgICAgIDEyNSxcbiAgICAgIDIzMyxcbiAgICAgIDY1LFxuICAgICAgMzYsXG4gICAgICAxNzMsXG4gICAgICAyNDYsXG4gICAgICA4MSxcbiAgICAgIDEyOCxcbiAgICAgIDExNVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCI1S1A5SlRER1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjU1NzQyNjk1MjE5OjE0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxNzU1ODI3OTM0MDI0MzoxNEBsaWRcIixcbiAgICBcIm5hbWVcIjogXCJyYXBoYWHwn4yeXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSU9LeFBnSEVNbWc3Yk1HR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJxUmdvS0d6YTVSb2phSDJMeFlkYW1CRmVpNnZkalQvMUx2REhqZ3BwZTJrPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIlN6eWQ4dnUxTUZlUjc5WkxFeUlNemRZekx1cUZ6NFRBK29uK1BoeSt6eFlhVjZKdzZNRGdOMCttTkdOWXZUUnNxYUVyT28vMmpYbFErVFNPMEREY0RBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIjBhYitrUDQ5cEZkMnY2R3VpZ1ZxR3dNWks5REN3V1cxQWRvMUhnOVREVHZYWU8rNCtYM28yY1pnZ25xRHpkSWRBQ3hySzVJelpjZ29sNHF4a2NaTWd3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI1NTc0MjY5NTIxOToxNEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAxNyxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMTA1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTkzNTc1MTcsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFQVTlcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQVBVOS5qc29uIjogIntcImtleURhdGFcIjpcIkhPcTZOWUV0QVpLdzJiVGJGWTlVeGJYOHE2RzY2OFNaU1g3aTFuMk9qT009XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MjEzMTgyMTgyMCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzBdfSxcInRpbWVzdGFtcFwiOlwiMTcxOTI1MzUzMjMwNlwifSIKfQ=="  // PUT your SESSION_ID 


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
  antilink_values:process.env.ANTILINK_VALUES|| "as admin delete all in my group",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
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
