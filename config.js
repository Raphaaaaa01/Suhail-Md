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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_14_43_06_24_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDgsXG4gICAgICAgIDcwLFxuICAgICAgICAxMTAsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMzQsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTc1LFxuICAgICAgICA1NCxcbiAgICAgICAgNTEsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNjAsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTUsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjE1LFxuICAgICAgICAxODgsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjU0LFxuICAgICAgICAxNjMsXG4gICAgICAgIDIyMixcbiAgICAgICAgNzQsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTk1LFxuICAgICAgICAxMDMsXG4gICAgICAgIDQ1LFxuICAgICAgICAxNjcsXG4gICAgICAgIDEyLFxuICAgICAgICAxNTksXG4gICAgICAgIDc3LFxuICAgICAgICAyNDQsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTA2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzMCxcbiAgICAgICAgNzksXG4gICAgICAgIDQ3LFxuICAgICAgICA0LFxuICAgICAgICAxNTAsXG4gICAgICAgIDE5MyxcbiAgICAgICAgNDgsXG4gICAgICAgIDU0LFxuICAgICAgICAyMjIsXG4gICAgICAgIDMyLFxuICAgICAgICAxMzQsXG4gICAgICAgIDExNCxcbiAgICAgICAgMzIsXG4gICAgICAgIDg1LFxuICAgICAgICAxMDEsXG4gICAgICAgIDgxLFxuICAgICAgICAyMDksXG4gICAgICAgIDkwLFxuICAgICAgICA4NyxcbiAgICAgICAgMzcsXG4gICAgICAgIDk2LFxuICAgICAgICAyNTUsXG4gICAgICAgIDI2LFxuICAgICAgICAxMTksXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTgsXG4gICAgICAgIDk4LFxuICAgICAgICA4NSxcbiAgICAgICAgNzAsXG4gICAgICAgIDk5LFxuICAgICAgICAxNDEsXG4gICAgICAgIDEyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0OCxcbiAgICAgICAgMTksXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTksXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTM2LFxuICAgICAgICA3NyxcbiAgICAgICAgMTMzLFxuICAgICAgICAzLFxuICAgICAgICA5OCxcbiAgICAgICAgMjUsXG4gICAgICAgIDI1MSxcbiAgICAgICAgNjYsXG4gICAgICAgIDM1LFxuICAgICAgICAyMzksXG4gICAgICAgIDE0LFxuICAgICAgICA0NCxcbiAgICAgICAgNTAsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTU2LFxuICAgICAgICAyNTAsXG4gICAgICAgIDgwLFxuICAgICAgICAxNzYsXG4gICAgICAgIDI1MSxcbiAgICAgICAgNDYsXG4gICAgICAgIDM4LFxuICAgICAgICA5MSxcbiAgICAgICAgMTc1LFxuICAgICAgICAxNzgsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTA1LFxuICAgICAgICAxMDFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM3LFxuICAgICAgICAxMjIsXG4gICAgICAgIDc2LFxuICAgICAgICAyNyxcbiAgICAgICAgMTk2LFxuICAgICAgICAyNixcbiAgICAgICAgMTI3LFxuICAgICAgICA5MCxcbiAgICAgICAgMTkyLFxuICAgICAgICA0NSxcbiAgICAgICAgNzAsXG4gICAgICAgIDExNixcbiAgICAgICAgMTA2LFxuICAgICAgICA0NyxcbiAgICAgICAgMTQ1LFxuICAgICAgICA5NixcbiAgICAgICAgMTg4LFxuICAgICAgICA3MSxcbiAgICAgICAgMzQsXG4gICAgICAgIDE2NCxcbiAgICAgICAgNzksXG4gICAgICAgIDk1LFxuICAgICAgICAxMTAsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjE0LFxuICAgICAgICAyMzgsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTU2LFxuICAgICAgICAxNDcsXG4gICAgICAgIDEzNixcbiAgICAgICAgMzQsXG4gICAgICAgIDY0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5NixcbiAgICAgICAgODgsXG4gICAgICAgIDIwOSxcbiAgICAgICAgNzYsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTU4LFxuICAgICAgICAxNTksXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTIsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTA3LFxuICAgICAgICAxMjIsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjE2LFxuICAgICAgICA5MCxcbiAgICAgICAgMTMwLFxuICAgICAgICAyMDYsXG4gICAgICAgIDgsXG4gICAgICAgIDI0MixcbiAgICAgICAgODQsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTg4LFxuICAgICAgICAxNzIsXG4gICAgICAgIDU3LFxuICAgICAgICA1LFxuICAgICAgICAxNTEsXG4gICAgICAgIDY0LFxuICAgICAgICA3LFxuICAgICAgICAxMjEsXG4gICAgICAgIDU1LFxuICAgICAgICA0LFxuICAgICAgICA5OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOCxcbiAgICAgICAgODgsXG4gICAgICAgIDE3MSxcbiAgICAgICAgNjQsXG4gICAgICAgIDI4LFxuICAgICAgICAxODUsXG4gICAgICAgIDY3LFxuICAgICAgICAxMTYsXG4gICAgICAgIDE3LFxuICAgICAgICAxMzIsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTU2LFxuICAgICAgICAxODQsXG4gICAgICAgIDAsXG4gICAgICAgIDg0LFxuICAgICAgICAxOTEsXG4gICAgICAgIDM1LFxuICAgICAgICAxOTEsXG4gICAgICAgIDI0LFxuICAgICAgICAxOCxcbiAgICAgICAgNyxcbiAgICAgICAgMTEyLFxuICAgICAgICAxMTEsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjEyLFxuICAgICAgICAxLFxuICAgICAgICAxODEsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTY2LFxuICAgICAgICAxMDQsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTIwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDgsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAxMixcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDEyN1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICA0NixcbiAgICAgICAgICAwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzksXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTkxLFxuICAgICAgICAxNDUsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTA5LFxuICAgICAgICAyMzYsXG4gICAgICAgIDg5LFxuICAgICAgICAxMjUsXG4gICAgICAgIDE2LFxuICAgICAgICAxMjEsXG4gICAgICAgIDY3LFxuICAgICAgICAxOSxcbiAgICAgICAgMTM0LFxuICAgICAgICAxLFxuICAgICAgICAxMixcbiAgICAgICAgMjIsXG4gICAgICAgIDQ2LFxuICAgICAgICA2MSxcbiAgICAgICAgMjQyLFxuICAgICAgICA5MSxcbiAgICAgICAgMTkyLFxuICAgICAgICAyMjMsXG4gICAgICAgIDIxLFxuICAgICAgICA0OCxcbiAgICAgICAgNzcsXG4gICAgICAgIDk1LFxuICAgICAgICA2OCxcbiAgICAgICAgMyxcbiAgICAgICAgMjI1LFxuICAgICAgICAxNzMsXG4gICAgICAgIDIyLFxuICAgICAgICA2NSxcbiAgICAgICAgMTYyLFxuICAgICAgICAyMzcsXG4gICAgICAgIDU2LFxuICAgICAgICAxOTcsXG4gICAgICAgIDMyLFxuICAgICAgICA2NSxcbiAgICAgICAgMTA2LFxuICAgICAgICAxOTQsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjA1LFxuICAgICAgICAyNSxcbiAgICAgICAgODIsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTMsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjAzLFxuICAgICAgICAxOCxcbiAgICAgICAgMCxcbiAgICAgICAgMjYsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjMzLFxuICAgICAgICAxMzgsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjQxLFxuICAgICAgICA2NSxcbiAgICAgICAgNjMsXG4gICAgICAgIDM0LFxuICAgICAgICA1OSxcbiAgICAgICAgODIsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTMwXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA2MyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJjaXoyUjlGTzBRdzZzZWwwN2FGVWwrQmdkTUlxV3U1RjFkRnZhWllncHljPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCI0dXBETHJpRlRIcTM2bWpZeUZKdzJ3XCIsXG4gIFwicGhvbmVJZFwiOiBcImU5YjU4YmQyLTE4ZWMtNDI3ZS1hNjRmLWRiYmFkYTliNGE0MFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMjIsXG4gICAgICAzMixcbiAgICAgIDE0OCxcbiAgICAgIDMwLFxuICAgICAgMjIxLFxuICAgICAgNTUsXG4gICAgICAxODUsXG4gICAgICA4NixcbiAgICAgIDQyLFxuICAgICAgMTg4LFxuICAgICAgMTc2LFxuICAgICAgMTcsXG4gICAgICAyNDIsXG4gICAgICAxNjksXG4gICAgICAxODksXG4gICAgICAxNjYsXG4gICAgICAyMDcsXG4gICAgICAxMjIsXG4gICAgICAzMCxcbiAgICAgIDI0NFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyNCxcbiAgICAgIDIwLFxuICAgICAgMTE5LFxuICAgICAgMCxcbiAgICAgIDEyMCxcbiAgICAgIDQyLFxuICAgICAgMTI1LFxuICAgICAgODMsXG4gICAgICAyMixcbiAgICAgIDg2LFxuICAgICAgMjA3LFxuICAgICAgMjMxLFxuICAgICAgMjMsXG4gICAgICAxODMsXG4gICAgICA5MyxcbiAgICAgIDE3MyxcbiAgICAgIDk1LFxuICAgICAgMjI1LFxuICAgICAgMTgyLFxuICAgICAgMTYxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIllCS1gxWTNLXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNTU3NDI2OTUyMTk6MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTc1NTgyNzkzNDAyNDM6MkBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNQZUp4UGdIRUpXTTVyTUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcInFSZ29LR3phNVJvamFIMkx4WWRhbUJGZWk2dmRqVC8xTHZESGpncHBlMms9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiVm55Yis5YXdET2V4WW9qc2hZMDBianZUL3dZcitHMXFIeDJnb0t6M0tMWEROVk9zUUxJcURLdGl3MEtSNWVaTTRVZDZqK3ltRWxqMkpPWEIvWFQxRFE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiYkI5S0dWcC9qRVo3S0h5ZnNYWllneW1wQXE0TUF6NUhQV29kWCtYS0JLTjBXY2JWNHNIWjYyQWFzZjZLL2JyMVpaN0RCb2FVTmpRa1JvS3NDS1MzaXc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjU1NzQyNjk1MjE5OjJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDEwNVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE5MjQwMjE3XG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Raphaaaaa01",
  ownername:process.env.OWNER_NAME|| "Raphaa",


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
