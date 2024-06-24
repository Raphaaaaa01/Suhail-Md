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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_15_08_06_24_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDc1LFxuICAgICAgICAxLFxuICAgICAgICAxNzgsXG4gICAgICAgIDE3OCxcbiAgICAgICAgNDksXG4gICAgICAgIDIwLFxuICAgICAgICA1NSxcbiAgICAgICAgMTgzLFxuICAgICAgICAxNDYsXG4gICAgICAgIDYwLFxuICAgICAgICAyMSxcbiAgICAgICAgMTQzLFxuICAgICAgICA0NyxcbiAgICAgICAgMTYzLFxuICAgICAgICAxNDUsXG4gICAgICAgIDMzLFxuICAgICAgICAxMjMsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTY2LFxuICAgICAgICAxMjEsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTAzLFxuICAgICAgICAxNzQsXG4gICAgICAgIDMsXG4gICAgICAgIDExLFxuICAgICAgICAxNzAsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTA5LFxuICAgICAgICAyMjAsXG4gICAgICAgIDE4NSxcbiAgICAgICAgNzZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDYsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTYwLFxuICAgICAgICAxMCxcbiAgICAgICAgMTA3LFxuICAgICAgICA4NyxcbiAgICAgICAgODYsXG4gICAgICAgIDEzMixcbiAgICAgICAgNTMsXG4gICAgICAgIDM0LFxuICAgICAgICAyMzMsXG4gICAgICAgIDExNixcbiAgICAgICAgMjUxLFxuICAgICAgICAxMzIsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTM2LFxuICAgICAgICAxMTIsXG4gICAgICAgIDMwLFxuICAgICAgICAxNTYsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTksXG4gICAgICAgIDY0LFxuICAgICAgICAzNSxcbiAgICAgICAgMzAsXG4gICAgICAgIDM5LFxuICAgICAgICAyNixcbiAgICAgICAgMTI4LFxuICAgICAgICA5NCxcbiAgICAgICAgMTkyLFxuICAgICAgICAyMjYsXG4gICAgICAgIDE1MyxcbiAgICAgICAgNTJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjI3LFxuICAgICAgICAxMzMsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjQzLFxuICAgICAgICAyOCxcbiAgICAgICAgMTE1LFxuICAgICAgICAyNDUsXG4gICAgICAgIDE5NyxcbiAgICAgICAgNTYsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTMwLFxuICAgICAgICA2MCxcbiAgICAgICAgNyxcbiAgICAgICAgMTg5LFxuICAgICAgICAxNzAsXG4gICAgICAgIDU5LFxuICAgICAgICA3OSxcbiAgICAgICAgMjE3LFxuICAgICAgICAxMCxcbiAgICAgICAgMTA3LFxuICAgICAgICA0MCxcbiAgICAgICAgMjA1LFxuICAgICAgICAxNzksXG4gICAgICAgIDE5MixcbiAgICAgICAgNzMsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjMyLFxuICAgICAgICAxNDgsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjksXG4gICAgICAgIDkxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyNSxcbiAgICAgICAgNDksXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTI5LFxuICAgICAgICAyNyxcbiAgICAgICAgNzEsXG4gICAgICAgIDY3LFxuICAgICAgICA2NixcbiAgICAgICAgMjU0LFxuICAgICAgICAxNzksXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTcxLFxuICAgICAgICAxMCxcbiAgICAgICAgMTQyLFxuICAgICAgICAxMjksXG4gICAgICAgIDg1LFxuICAgICAgICAxMyxcbiAgICAgICAgMTk4LFxuICAgICAgICAxMjIsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTMxLFxuICAgICAgICAyMTMsXG4gICAgICAgIDMsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjI3LFxuICAgICAgICA3MixcbiAgICAgICAgOTksXG4gICAgICAgIDE0NCxcbiAgICAgICAgNTAsXG4gICAgICAgIDAsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTE0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3MixcbiAgICAgICAgMjExLFxuICAgICAgICAxOTQsXG4gICAgICAgIDc3LFxuICAgICAgICAxNTQsXG4gICAgICAgIDI3LFxuICAgICAgICAyMDgsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTI2LFxuICAgICAgICAyNDIsXG4gICAgICAgIDI3LFxuICAgICAgICAyMjcsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjQyLFxuICAgICAgICA0LFxuICAgICAgICAxOTEsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyMTcsXG4gICAgICAgIDM3LFxuICAgICAgICAxODAsXG4gICAgICAgIDk2LFxuICAgICAgICAyMjIsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjM1LFxuICAgICAgICAyNTQsXG4gICAgICAgIDU4LFxuICAgICAgICAyMDYsXG4gICAgICAgIDE2MixcbiAgICAgICAgNTMsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTIwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDUyLFxuICAgICAgICAyMDksXG4gICAgICAgIDcsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxMzIsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMSxcbiAgICAgICAgMjIzLFxuICAgICAgICAxNTQsXG4gICAgICAgIDk2LFxuICAgICAgICA2MSxcbiAgICAgICAgMTgyLFxuICAgICAgICA2NCxcbiAgICAgICAgMTI4LFxuICAgICAgICAxNTgsXG4gICAgICAgIDEzMyxcbiAgICAgICAgNDMsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjU0LFxuICAgICAgICAxOTcsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjQ1LFxuICAgICAgICA4OSxcbiAgICAgICAgNzgsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyMzEsXG4gICAgICAgIDIwLFxuICAgICAgICAxNTQsXG4gICAgICAgIDEwLFxuICAgICAgICA0NVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMTIyXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICA3MFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTc5LFxuICAgICAgICAyMjYsXG4gICAgICAgIDI0MyxcbiAgICAgICAgNjksXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjI5LFxuICAgICAgICAyMjcsXG4gICAgICAgIDE4NCxcbiAgICAgICAgNDcsXG4gICAgICAgIDM0LFxuICAgICAgICA5MixcbiAgICAgICAgMTgyLFxuICAgICAgICA2OSxcbiAgICAgICAgMTg1LFxuICAgICAgICAyNixcbiAgICAgICAgMzYsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTQsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMzcsXG4gICAgICAgIDE5MSxcbiAgICAgICAgODksXG4gICAgICAgIDEzNixcbiAgICAgICAgMjM2LFxuICAgICAgICAyNDYsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTksXG4gICAgICAgIDc2LFxuICAgICAgICAxMTcsXG4gICAgICAgIDg0LFxuICAgICAgICAxMDIsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTMsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTU4LFxuICAgICAgICA3MyxcbiAgICAgICAgMjU1LFxuICAgICAgICAxNTMsXG4gICAgICAgIDE2NCxcbiAgICAgICAgODMsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxMDcsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTgyLFxuICAgICAgICAxNTAsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjcsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTAzLFxuICAgICAgICA4NyxcbiAgICAgICAgMTY0LFxuICAgICAgICAxMDQsXG4gICAgICAgIDE3MCxcbiAgICAgICAgNDcsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTYzLFxuICAgICAgICAyMjMsXG4gICAgICAgIDg3LFxuICAgICAgICAxMTYsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjQxLFxuICAgICAgICAzXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyNTIsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiMTFVTkpsSzZUOHNLUy9OR1hveHphUEtMc0t4OFhicjhtSCtPTWRxUnkydz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiSExxNWxHN01UaXlRNDVCQ1hwT0I2d1wiLFxuICBcInBob25lSWRcIjogXCIyOTg4NWFkNS05MjQ3LTRiNjgtYjA3MS02YjRiZjVjMzFjM2VcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTEsXG4gICAgICAxNSxcbiAgICAgIDEyNCxcbiAgICAgIDE4NyxcbiAgICAgIDc5LFxuICAgICAgMTY4LFxuICAgICAgMzIsXG4gICAgICA0NCxcbiAgICAgIDE2MyxcbiAgICAgIDE4NyxcbiAgICAgIDIyOSxcbiAgICAgIDE2MixcbiAgICAgIDQ1LFxuICAgICAgMTk3LFxuICAgICAgMTQ1LFxuICAgICAgMTMyLFxuICAgICAgMTYwLFxuICAgICAgMTYzLFxuICAgICAgMzIsXG4gICAgICAxNjdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjM0LFxuICAgICAgMjUsXG4gICAgICAxNDQsXG4gICAgICAyNixcbiAgICAgIDc5LFxuICAgICAgODcsXG4gICAgICAxLFxuICAgICAgNDUsXG4gICAgICAxNzQsXG4gICAgICAxMDcsXG4gICAgICA3MyxcbiAgICAgIDIzNCxcbiAgICAgIDQ0LFxuICAgICAgMjM3LFxuICAgICAgNDYsXG4gICAgICAxODMsXG4gICAgICA4NyxcbiAgICAgIDE3MixcbiAgICAgIDAsXG4gICAgICAxNzZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiUlg0NDZNODlcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI1NTc0MjY5NTIxOTozQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxNzU1ODI3OTM0MDI0MzozQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ1BpSnhQZ0hFTmlYNXJNR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwicVJnb0tHemE1Um9qYUgyTHhZZGFtQkZlaTZ2ZGpULzFMdkRIamdwcGUyaz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJDc2lEeDBjUlZicm9Vc0p2YVZTSWlLZHdYRVgwVU1CdTk3b3FFVlN4N3BzUVA4ZEdIbVBRVDV2eEJRYk05QVZPOUJSV2FMWHJWVWhBdzBJeVBwTjVDZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCIvZFg0OXVNdXRyM2tSMGJUaTRYOFRwMUZBdjdtVDFuYWdEVE1WanpOdnRkRzdrR2lRM2U0RXhoa0Iyb3ZqZVgrRTdYTk8wTXBrdE9ENVpuTzBiRGtBZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNTU3NDI2OTUyMTk6M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAxNyxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMTA1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTkyNDE2OTIsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFLSDdcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUtINy5qc29uIjogIntcImtleURhdGFcIjpcImRTcWpXc00wT0hsLytJS0dtb2RQSTd4Q2VUT1ArdEd2TndmU290VGoxSTQ9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MjEzMTgyMTgxNCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9"  // PUT your SESSION_ID 


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
