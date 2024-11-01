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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348189862145";




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
global.waPresence= process.env.WAPRESENCE ||  "online" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api.kyuurzy.site/api/download/aio" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_03_13_11_01_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgMTkwLFxuICAgICAgICA3MixcbiAgICAgICAgMjEzLFxuICAgICAgICA1OSxcbiAgICAgICAgNCxcbiAgICAgICAgMTE5LFxuICAgICAgICAwLFxuICAgICAgICAxODMsXG4gICAgICAgIDQ3LFxuICAgICAgICAxMDksXG4gICAgICAgIDE4LFxuICAgICAgICAyMCxcbiAgICAgICAgMjMsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjI0LFxuICAgICAgICAyMjEsXG4gICAgICAgIDI3LFxuICAgICAgICA3NCxcbiAgICAgICAgNjAsXG4gICAgICAgIDE0OSxcbiAgICAgICAgOTMsXG4gICAgICAgIDczLFxuICAgICAgICAxNzgsXG4gICAgICAgIDExNSxcbiAgICAgICAgNTIsXG4gICAgICAgIDIsXG4gICAgICAgIDY1LFxuICAgICAgICAyMTUsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTI0LFxuICAgICAgICA2OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDcsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMCxcbiAgICAgICAgMTU3LFxuICAgICAgICAxNzksXG4gICAgICAgIDExOSxcbiAgICAgICAgMzYsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjQ0LFxuICAgICAgICA4MyxcbiAgICAgICAgMjYsXG4gICAgICAgIDE4OSxcbiAgICAgICAgODAsXG4gICAgICAgIDg4LFxuICAgICAgICAxNzcsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTY5LFxuICAgICAgICAzMixcbiAgICAgICAgMTY1LFxuICAgICAgICAxMzQsXG4gICAgICAgIDExNyxcbiAgICAgICAgMzgsXG4gICAgICAgIDgyLFxuICAgICAgICAxMDksXG4gICAgICAgIDE5OCxcbiAgICAgICAgNjksXG4gICAgICAgIDE3MixcbiAgICAgICAgMTg1LFxuICAgICAgICAxOTAsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTI4LFxuICAgICAgICA3N1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDgsXG4gICAgICAgIDQzLFxuICAgICAgICAxMzAsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTYsXG4gICAgICAgIDc3LFxuICAgICAgICA4MSxcbiAgICAgICAgMjQyLFxuICAgICAgICAxNSxcbiAgICAgICAgNDIsXG4gICAgICAgIDE2NSxcbiAgICAgICAgNjQsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjA3LFxuICAgICAgICAyMDQsXG4gICAgICAgIDI1MSxcbiAgICAgICAgNTcsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjU0LFxuICAgICAgICAxODEsXG4gICAgICAgIDczLFxuICAgICAgICAyMTUsXG4gICAgICAgIDE5NCxcbiAgICAgICAgNzgsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjQzLFxuICAgICAgICA3LFxuICAgICAgICAxNSxcbiAgICAgICAgMjYsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTc5LFxuICAgICAgICA5MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5MyxcbiAgICAgICAgMTMwLFxuICAgICAgICA2NyxcbiAgICAgICAgMTYzLFxuICAgICAgICAxNzUsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjExLFxuICAgICAgICAxMjgsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTEwLFxuICAgICAgICAxMjgsXG4gICAgICAgIDExMixcbiAgICAgICAgMTMsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjQxLFxuICAgICAgICAxNDYsXG4gICAgICAgIDMxLFxuICAgICAgICA3MyxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxMjIsXG4gICAgICAgIDY3LFxuICAgICAgICAxNixcbiAgICAgICAgNzksXG4gICAgICAgIDE5LFxuICAgICAgICA0NixcbiAgICAgICAgNSxcbiAgICAgICAgMjAwLFxuICAgICAgICAxNDIsXG4gICAgICAgIDI4LFxuICAgICAgICAxMTQsXG4gICAgICAgIDI0LFxuICAgICAgICA5MVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM2LFxuICAgICAgICA2NSxcbiAgICAgICAgMTM0LFxuICAgICAgICAyNTEsXG4gICAgICAgIDEwLFxuICAgICAgICAxOTksXG4gICAgICAgIDcyLFxuICAgICAgICAyNCxcbiAgICAgICAgMTMyLFxuICAgICAgICAxMTMsXG4gICAgICAgIDQwLFxuICAgICAgICA4NCxcbiAgICAgICAgMjE1LFxuICAgICAgICAxMjYsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTUwLFxuICAgICAgICA1OSxcbiAgICAgICAgNTcsXG4gICAgICAgIDM2LFxuICAgICAgICA1MCxcbiAgICAgICAgNzUsXG4gICAgICAgIDE0MSxcbiAgICAgICAgNzQsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjMwLFxuICAgICAgICAxMTYsXG4gICAgICAgIDgsXG4gICAgICAgIDg4LFxuICAgICAgICA3NyxcbiAgICAgICAgMTYsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTExXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDc2LFxuICAgICAgICA5OSxcbiAgICAgICAgMTgzLFxuICAgICAgICAxNTAsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTAzLFxuICAgICAgICA1NixcbiAgICAgICAgMTgsXG4gICAgICAgIDM3LFxuICAgICAgICAxNzIsXG4gICAgICAgIDU2LFxuICAgICAgICAyMDksXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTY2LFxuICAgICAgICAyNDksXG4gICAgICAgIDc0LFxuICAgICAgICA3NyxcbiAgICAgICAgMTI3LFxuICAgICAgICAzMixcbiAgICAgICAgMjI1LFxuICAgICAgICA4OSxcbiAgICAgICAgMTg5LFxuICAgICAgICAxNDksXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMzYsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTQ2LFxuICAgICAgICA3NyxcbiAgICAgICAgMTA2LFxuICAgICAgICAxMTIsXG4gICAgICAgIDg0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE2LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDEyMlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDgsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMjdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNyxcbiAgICAgICAgMTkzLFxuICAgICAgICAxNDgsXG4gICAgICAgIDE0NSxcbiAgICAgICAgNzIsXG4gICAgICAgIDAsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjE4LFxuICAgICAgICAyNTIsXG4gICAgICAgIDM1LFxuICAgICAgICA0MCxcbiAgICAgICAgMTk4LFxuICAgICAgICAxMCxcbiAgICAgICAgMjEwLFxuICAgICAgICAyMTQsXG4gICAgICAgIDI0NyxcbiAgICAgICAgODIsXG4gICAgICAgIDM5LFxuICAgICAgICAxODAsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTQzLFxuICAgICAgICAxNyxcbiAgICAgICAgMjMsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTE5LFxuICAgICAgICAxNjQsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyNTUsXG4gICAgICAgIDY2LFxuICAgICAgICAyMTcsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjcsXG4gICAgICAgIDE3MixcbiAgICAgICAgOTQsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjksXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTI4LFxuICAgICAgICAyNDMsXG4gICAgICAgIDk0LFxuICAgICAgICA3NCxcbiAgICAgICAgMTU1LFxuICAgICAgICAxMDAsXG4gICAgICAgIDEzNyxcbiAgICAgICAgOTUsXG4gICAgICAgIDUyLFxuICAgICAgICAyMDcsXG4gICAgICAgIDkxLFxuICAgICAgICAxNjAsXG4gICAgICAgIDksXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTI0LFxuICAgICAgICAxMTEsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjM5LFxuICAgICAgICAyMDMsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjAsXG4gICAgICAgIDE2MixcbiAgICAgICAgNTIsXG4gICAgICAgIDExOCxcbiAgICAgICAgNixcbiAgICAgICAgMTM2XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxNDQsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiNFZENmJoRDMzQk9KeXNzODBFcnJwemdhRDhNNnFORkhBUTJVK2c3NXlCUT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzQ4MTg5ODYyMTQ1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJDNUVDQUUxQjgzQjgzOTEyMzQ4ODM5QzFFQ0IyQzVFM1wiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MzA0MzA3ODRcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiUlJ5WTlYMmtRU1dPeDBGTW9fSmktZ1wiLFxuICBcInBob25lSWRcIjogXCIzYzU0ZGFkZi1hYmI0LTQzYzYtYjlhMi1kYTE5ZTc4ZjcwNzhcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjQsXG4gICAgICAxNjgsXG4gICAgICAxNDIsXG4gICAgICAxMTgsXG4gICAgICAyNTEsXG4gICAgICAyMDcsXG4gICAgICA2MixcbiAgICAgIDExMixcbiAgICAgIDEzMCxcbiAgICAgIDg5LFxuICAgICAgMTA1LFxuICAgICAgMTkyLFxuICAgICAgMjQ3LFxuICAgICAgMTQ2LFxuICAgICAgMjU0LFxuICAgICAgMjMsXG4gICAgICAyMTksXG4gICAgICAyMDMsXG4gICAgICAxMzYsXG4gICAgICAzMFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMTAsXG4gICAgICAxNzIsXG4gICAgICAxNDgsXG4gICAgICAxNDUsXG4gICAgICA1OSxcbiAgICAgIDUwLFxuICAgICAgMjAwLFxuICAgICAgMjQxLFxuICAgICAgMTcsXG4gICAgICAxMzIsXG4gICAgICA3OSxcbiAgICAgIDE0MCxcbiAgICAgIDY1LFxuICAgICAgMTE3LFxuICAgICAgMTQ0LFxuICAgICAgODksXG4gICAgICAyNDIsXG4gICAgICA4NixcbiAgICAgIDYxLFxuICAgICAgNTdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiUllNRkhRQTVcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDgxODk4NjIxNDU6MTBAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCLqqpxf4ai26quA6quAXCIsXG4gICAgXCJsaWRcIjogXCIyMzcyNTAyNTIxNDQ4Njc6MTBAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDUE83aXIwR0VMaU9rYmtHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJrc3ZYV0lvaVAwMnNkbW9qODBCZy9ndkJ0NGtQdXZ3cnhiV29KWkt2ZTNFPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImtiSWd0aytCSkg3TUVOUGRWVjVNYzJXSWpHa2huZ09DRjJyZk1vTkNCd2xqc05RU3pZQmtQcVRIQ2N4QlZKSldHRHlwdmVLT090MElZeFFmZHc1d0JnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImRMTUYzQ2VLRTNDN2p5UkkwWUxRU2F5RlB2ek54VW92dzlOUW1PaHVER1F0RnlEQlFZZHk5TEt1TTZkdkN2SkNZb1FhSHhYMlJCSlpObkZLQUFkOWpnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDgxODk4NjIxNDU6MTBAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDExM1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzMwNDMwNzgwXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "null",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "༒︎☠︎︎ˡᵒʳᵈ☠︎ꪜ_ᥴꫀꫀ༒︎",
  packname: process.env.PACK_NAME || "༒︎☠︎︎ˡᵒʳᵈ☠︎ꪜ_ᥴꫀꫀ༒︎",
  botname : process.env.BOT_NAME  || "𖤍ʟᴏʀᴅꪜ_ᥴꫀꫀM̥ͦD⃠𖤍",
  ownername:process.env.OWNER_NAME|| "ꪜ_ᥴꫀe⃠",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "V⃠C̸e̸e̸"  ).toUpperCase(),



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
