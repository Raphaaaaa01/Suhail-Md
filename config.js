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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_12_16_06_24_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM2LFxuICAgICAgICAxNjUsXG4gICAgICAgIDI2LFxuICAgICAgICAyMjgsXG4gICAgICAgIDkzLFxuICAgICAgICAxMjEsXG4gICAgICAgIDUsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjI4LFxuICAgICAgICAxMTgsXG4gICAgICAgIDMxLFxuICAgICAgICA5MSxcbiAgICAgICAgMjQzLFxuICAgICAgICAxNTksXG4gICAgICAgIDM3LFxuICAgICAgICA2NSxcbiAgICAgICAgNTksXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTI4LFxuICAgICAgICA5NixcbiAgICAgICAgNzMsXG4gICAgICAgIDIzOCxcbiAgICAgICAgOTQsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTU5LFxuICAgICAgICA3MSxcbiAgICAgICAgMTIzLFxuICAgICAgICAxODMsXG4gICAgICAgIDExNixcbiAgICAgICAgMTIxLFxuICAgICAgICAxMSxcbiAgICAgICAgNzNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzIsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTgwLFxuICAgICAgICA0NCxcbiAgICAgICAgMTU2LFxuICAgICAgICAxNTcsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTYsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjM5LFxuICAgICAgICA5NCxcbiAgICAgICAgMTYxLFxuICAgICAgICAxODUsXG4gICAgICAgIDQwLFxuICAgICAgICA4MixcbiAgICAgICAgNjgsXG4gICAgICAgIDUzLFxuICAgICAgICAxNDYsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyMTMsXG4gICAgICAgIDE1NSxcbiAgICAgICAgNjUsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjI0LFxuICAgICAgICAyNixcbiAgICAgICAgMTAwLFxuICAgICAgICAyMTcsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyMjIsXG4gICAgICAgIDEyNVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICAxODgsXG4gICAgICAgIDE4MyxcbiAgICAgICAgODYsXG4gICAgICAgIDAsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjM0LFxuICAgICAgICAxOTMsXG4gICAgICAgIDMsXG4gICAgICAgIDE4LFxuICAgICAgICA4OCxcbiAgICAgICAgNCxcbiAgICAgICAgMjksXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjM3LFxuICAgICAgICAxOTYsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjE2LFxuICAgICAgICAxMDgsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTE0LFxuICAgICAgICA5NCxcbiAgICAgICAgMTQ0LFxuICAgICAgICA4NSxcbiAgICAgICAgMTI3LFxuICAgICAgICAzMCxcbiAgICAgICAgMjUsXG4gICAgICAgIDYzLFxuICAgICAgICA0NCxcbiAgICAgICAgMTQ1LFxuICAgICAgICA5OSxcbiAgICAgICAgMTI0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0LFxuICAgICAgICA4LFxuICAgICAgICAxODUsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTgsXG4gICAgICAgIDQ1LFxuICAgICAgICAyNDQsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjI5LFxuICAgICAgICAxNzksXG4gICAgICAgIDE1OCxcbiAgICAgICAgMzEsXG4gICAgICAgIDcxLFxuICAgICAgICAyMzEsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjMsXG4gICAgICAgIDcyLFxuICAgICAgICAyMCxcbiAgICAgICAgMTQxLFxuICAgICAgICA1MyxcbiAgICAgICAgNDQsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjM2LFxuICAgICAgICAxNDgsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTU2LFxuICAgICAgICAyNTMsXG4gICAgICAgIDEzOSxcbiAgICAgICAgNzEsXG4gICAgICAgIDcwLFxuICAgICAgICAyNTEsXG4gICAgICAgIDE2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDQsXG4gICAgICAgIDI0LFxuICAgICAgICA1MyxcbiAgICAgICAgMzUsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjcsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjA2LFxuICAgICAgICAxNTIsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTg1LFxuICAgICAgICAxMSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxLFxuICAgICAgICA3NCxcbiAgICAgICAgMTYsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjE0LFxuICAgICAgICA0MSxcbiAgICAgICAgMjIwLFxuICAgICAgICAyNTIsXG4gICAgICAgIDksXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTk0LFxuICAgICAgICAxMyxcbiAgICAgICAgMzgsXG4gICAgICAgIDEyOSxcbiAgICAgICAgNzIsXG4gICAgICAgIDEyMyxcbiAgICAgICAgOTIsXG4gICAgICAgIDcsXG4gICAgICAgIDEyNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzNyxcbiAgICAgICAgMTYwLFxuICAgICAgICA1NyxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyNyxcbiAgICAgICAgMjUxLFxuICAgICAgICAyOCxcbiAgICAgICAgMTQyLFxuICAgICAgICAyNDgsXG4gICAgICAgIDcsXG4gICAgICAgIDM4LFxuICAgICAgICAyMDQsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMixcbiAgICAgICAgMjA1LFxuICAgICAgICAyOSxcbiAgICAgICAgMTMzLFxuICAgICAgICAxMjQsXG4gICAgICAgIDIsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTgxLFxuICAgICAgICAxODYsXG4gICAgICAgIDc4LFxuICAgICAgICAyMixcbiAgICAgICAgOSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyMjMsXG4gICAgICAgIDIxOSxcbiAgICAgICAgNjIsXG4gICAgICAgIDIzOCxcbiAgICAgICAgOTAsXG4gICAgICAgIDExMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAwLFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMixcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgOTRcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDIsXG4gICAgICAgICAgODksXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgNTZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODAsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTMsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjI2LFxuICAgICAgICA0MyxcbiAgICAgICAgMTEyLFxuICAgICAgICAxNixcbiAgICAgICAgMTQsXG4gICAgICAgIDkyLFxuICAgICAgICAzLFxuICAgICAgICA4OCxcbiAgICAgICAgMjA1LFxuICAgICAgICAxODEsXG4gICAgICAgIDE0NSxcbiAgICAgICAgNzEsXG4gICAgICAgIDE2MixcbiAgICAgICAgODQsXG4gICAgICAgIDUsXG4gICAgICAgIDgwLFxuICAgICAgICAxNzksXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxNTMsXG4gICAgICAgIDMxLFxuICAgICAgICAxMjIsXG4gICAgICAgIDEyNixcbiAgICAgICAgODgsXG4gICAgICAgIDE0NCxcbiAgICAgICAgNTcsXG4gICAgICAgIDE5NyxcbiAgICAgICAgNSxcbiAgICAgICAgMTc4LFxuICAgICAgICAxNzcsXG4gICAgICAgIDIwNCxcbiAgICAgICAgNTQsXG4gICAgICAgIDIxLFxuICAgICAgICAyMzgsXG4gICAgICAgIDEyLFxuICAgICAgICAxNzIsXG4gICAgICAgIDExNyxcbiAgICAgICAgNjEsXG4gICAgICAgIDIzNSxcbiAgICAgICAgODQsXG4gICAgICAgIDEzLFxuICAgICAgICAxNjYsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjEwLFxuICAgICAgICAyOCxcbiAgICAgICAgMTc0LFxuICAgICAgICA2MixcbiAgICAgICAgOSxcbiAgICAgICAgMjQzLFxuICAgICAgICAzMCxcbiAgICAgICAgNDEsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTU5LFxuICAgICAgICA3OSxcbiAgICAgICAgMTMsXG4gICAgICAgIDIxNyxcbiAgICAgICAgNDUsXG4gICAgICAgIDIyOSxcbiAgICAgICAgNzIsXG4gICAgICAgIDEzM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTc0LFxuICBcImFkdlNlY3JldEtleVwiOiBcIlA3ekNLN3FJaDRMcFF6QUZpQXFQUEFXQmFFNGVzWFowSCsrQ0JxSnVEd3c9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIlRjcnJLZ3ptUURpUm0wOVVvYXkzT1FcIixcbiAgXCJwaG9uZUlkXCI6IFwiN2QxYTgyMTktMmFhNi00YWQxLWE0MmEtNzU1ZDA5NDE3NjQ0XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE3NSxcbiAgICAgIDEwMyxcbiAgICAgIDE5NyxcbiAgICAgIDI1LFxuICAgICAgMTE5LFxuICAgICAgMjYsXG4gICAgICA2OCxcbiAgICAgIDUzLFxuICAgICAgMzIsXG4gICAgICA0MSxcbiAgICAgIDE1NSxcbiAgICAgIDEwNyxcbiAgICAgIDgwLFxuICAgICAgMjExLFxuICAgICAgMjU1LFxuICAgICAgMTc2LFxuICAgICAgMjksXG4gICAgICA0MSxcbiAgICAgIDEyNyxcbiAgICAgIDM2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDk3LFxuICAgICAgMTYxLFxuICAgICAgMTIxLFxuICAgICAgMjM1LFxuICAgICAgMjMyLFxuICAgICAgMTYwLFxuICAgICAgMzIsXG4gICAgICAxMDAsXG4gICAgICAyMTIsXG4gICAgICA4OSxcbiAgICAgIDE3MyxcbiAgICAgIDE0NixcbiAgICAgIDEyNixcbiAgICAgIDYwLFxuICAgICAgOTgsXG4gICAgICAxNzksXG4gICAgICA0NixcbiAgICAgIDIwOSxcbiAgICAgIDIxOSxcbiAgICAgIDQxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkxTMloxWEFDXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNTU2OTg3MDkyMDk6NjNAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjE0MDc2Mzc5NTA2NzA3NDo2M0BsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNOZUpyNHdERUtYSDViTUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjhQZmdwRGpDM0JOVmlyUmdMSGwvWGZ2QWRoWDlIZENvR0d0OXhhL1R0RXc9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiTHM2M3MxRDVoWjNodXJneHgrU0FvU1lDY0VuSnVaV1lwUEEyVEZnMUxjZFNkR3dDNVlneFBLWXZROTZVa2RiL0Y2cGpDL3hHQTBlajUwTzRxOFJzQUE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwidEpLREFaYVZFR2l4VElqQzMxZDFvZTBIUGhxTTRFTHdZbDlTNXRIQ0U2cy9pc3ZxdURCN0xxQkYzOGhZbGdDZ1pKVHh2elhlY3RtUkR5bHRubVZBaHc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjU1Njk4NzA5MjA5OjYzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICA5NixcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDc2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTkyMzE0MDRcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


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
