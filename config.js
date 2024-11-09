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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_19_20_11_09_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkyLFxuICAgICAgICA2OSxcbiAgICAgICAgMTk1LFxuICAgICAgICAyMTAsXG4gICAgICAgIDE1LFxuICAgICAgICAxNzIsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMzYsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjMxLFxuICAgICAgICA5NyxcbiAgICAgICAgMjQwLFxuICAgICAgICA1NixcbiAgICAgICAgMTk2LFxuICAgICAgICAxNjUsXG4gICAgICAgIDE2MixcbiAgICAgICAgNTksXG4gICAgICAgIDg4LFxuICAgICAgICAxNTYsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjQsXG4gICAgICAgIDcyLFxuICAgICAgICAxMixcbiAgICAgICAgMzMsXG4gICAgICAgIDc3LFxuICAgICAgICAzMixcbiAgICAgICAgNDUsXG4gICAgICAgIDE0NyxcbiAgICAgICAgOTAsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMzIsXG4gICAgICAgIDEyNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3MCxcbiAgICAgICAgMTksXG4gICAgICAgIDIxNixcbiAgICAgICAgMTU1LFxuICAgICAgICAxNzEsXG4gICAgICAgIDI1LFxuICAgICAgICAxMjksXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTA5LFxuICAgICAgICAyMTMsXG4gICAgICAgIDMwLFxuICAgICAgICAxNDMsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjE3LFxuICAgICAgICAzNSxcbiAgICAgICAgMTc0LFxuICAgICAgICAxODMsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTg4LFxuICAgICAgICA2LFxuICAgICAgICAyMDAsXG4gICAgICAgIDEzOCxcbiAgICAgICAgNTEsXG4gICAgICAgIDEwNixcbiAgICAgICAgNzUsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjQsXG4gICAgICAgIDE1MSxcbiAgICAgICAgNzIsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTU5LFxuICAgICAgICAxNVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMTksXG4gICAgICAgIDM0LFxuICAgICAgICAzLFxuICAgICAgICA0NixcbiAgICAgICAgMTE3LFxuICAgICAgICAyNyxcbiAgICAgICAgMjE5LFxuICAgICAgICAxNTIsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyNDEsXG4gICAgICAgIDc2LFxuICAgICAgICAxODAsXG4gICAgICAgIDExLFxuICAgICAgICAxMTUsXG4gICAgICAgIDUwLFxuICAgICAgICAxNTQsXG4gICAgICAgIDEyLFxuICAgICAgICAyMTQsXG4gICAgICAgIDExMixcbiAgICAgICAgMjEyLFxuICAgICAgICAxNzUsXG4gICAgICAgIDQ0LFxuICAgICAgICAxNjUsXG4gICAgICAgIDUwLFxuICAgICAgICA0NixcbiAgICAgICAgMTQxLFxuICAgICAgICAxNDgsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjMyLFxuICAgICAgICA3N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNixcbiAgICAgICAgNTgsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTYwLFxuICAgICAgICAxOTcsXG4gICAgICAgIDIwLFxuICAgICAgICAyNDksXG4gICAgICAgIDIsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTcyLFxuICAgICAgICAyNTEsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjE1LFxuICAgICAgICAxNzAsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTEwLFxuICAgICAgICA0MyxcbiAgICAgICAgMjAyLFxuICAgICAgICAxLFxuICAgICAgICA1NyxcbiAgICAgICAgMjQ0LFxuICAgICAgICA2MyxcbiAgICAgICAgNDUsXG4gICAgICAgIDIxMSxcbiAgICAgICAgNzUsXG4gICAgICAgIDkwLFxuICAgICAgICAyMDQsXG4gICAgICAgIDU2LFxuICAgICAgICAzOCxcbiAgICAgICAgMTc1LFxuICAgICAgICAxNjEsXG4gICAgICAgIDdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2MCxcbiAgICAgICAgNjYsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjEyLFxuICAgICAgICAxNzcsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxNzEsXG4gICAgICAgIDE2NixcbiAgICAgICAgNDAsXG4gICAgICAgIDkzLFxuICAgICAgICAxNjEsXG4gICAgICAgIDg4LFxuICAgICAgICAxNTMsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTY5LFxuICAgICAgICAyMixcbiAgICAgICAgMTA4LFxuICAgICAgICA4OSxcbiAgICAgICAgMjE2LFxuICAgICAgICAxMDksXG4gICAgICAgIDExNCxcbiAgICAgICAgNTUsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTkwLFxuICAgICAgICAxNjQsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjI3LFxuICAgICAgICAyMDksXG4gICAgICAgIDExMyxcbiAgICAgICAgMTk2LFxuICAgICAgICAxMTVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzgsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTI5LFxuICAgICAgICAyNCxcbiAgICAgICAgMTQyLFxuICAgICAgICAyMjEsXG4gICAgICAgIDEzOCxcbiAgICAgICAgODIsXG4gICAgICAgIDUwLFxuICAgICAgICAxNTYsXG4gICAgICAgIDQwLFxuICAgICAgICA3LFxuICAgICAgICAxMzYsXG4gICAgICAgIDEwMyxcbiAgICAgICAgNTEsXG4gICAgICAgIDQyLFxuICAgICAgICAzMSxcbiAgICAgICAgNzcsXG4gICAgICAgIDI0NixcbiAgICAgICAgNzcsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTcyLFxuICAgICAgICA1MyxcbiAgICAgICAgMjIzLFxuICAgICAgICAxMTcsXG4gICAgICAgIDE4NSxcbiAgICAgICAgNDAsXG4gICAgICAgIDE3MixcbiAgICAgICAgOTMsXG4gICAgICAgIDk1LFxuICAgICAgICA5NSxcbiAgICAgICAgODNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAxMDFcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAxMDlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTMsXG4gICAgICAgIDMxLFxuICAgICAgICAyMjQsXG4gICAgICAgIDczLFxuICAgICAgICA2NixcbiAgICAgICAgMTIyLFxuICAgICAgICAxNjIsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTgyLFxuICAgICAgICAyNDMsXG4gICAgICAgIDYsXG4gICAgICAgIDg4LFxuICAgICAgICAyMTEsXG4gICAgICAgIDcxLFxuICAgICAgICAyMixcbiAgICAgICAgODcsXG4gICAgICAgIDE1LFxuICAgICAgICAxODgsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMzksXG4gICAgICAgIDc1LFxuICAgICAgICA5NSxcbiAgICAgICAgMjM3LFxuICAgICAgICAyNTUsXG4gICAgICAgIDMxLFxuICAgICAgICAyMTksXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTgwLFxuICAgICAgICA0OSxcbiAgICAgICAgMjE3LFxuICAgICAgICAxODUsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTIsXG4gICAgICAgIDc0LFxuICAgICAgICAzMixcbiAgICAgICAgMixcbiAgICAgICAgMSxcbiAgICAgICAgOTEsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTk3LFxuICAgICAgICAyMjAsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxNTMsXG4gICAgICAgIDE4MixcbiAgICAgICAgNjMsXG4gICAgICAgIDYsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTYyLFxuICAgICAgICAxMjcsXG4gICAgICAgIDIzLFxuICAgICAgICAxNyxcbiAgICAgICAgMTcxLFxuICAgICAgICA2MyxcbiAgICAgICAgMTAzLFxuICAgICAgICA2NSxcbiAgICAgICAgMTc2LFxuICAgICAgICAyMDgsXG4gICAgICAgIDMwLFxuICAgICAgICAxMDYsXG4gICAgICAgIDI0NyxcbiAgICAgICAgNDcsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTI4XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA0NCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCI5Tyt5TFltMkNsUnQvQWlqTTd3RFRJOE1aZGxjM24xSncwZnlTMHgyOEtjPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNDgxODk4NjIxNDVAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkUwRTQ2NzI1RjFCMzJCMUExRkY5REVDMTU0NkJDRjJCXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTczMTE4MDAzNlxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJoWjJQMUhQalJCUzYtd2JtWEZ1ZldBXCIsXG4gIFwicGhvbmVJZFwiOiBcImU2ZTg2MmZjLThjOWYtNGQ0NS1iZDZhLTdiYjE2MWE2ZTQyZlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMzMsXG4gICAgICA0MixcbiAgICAgIDE5OCxcbiAgICAgIDkyLFxuICAgICAgMTAxLFxuICAgICAgNTQsXG4gICAgICA0LFxuICAgICAgNDYsXG4gICAgICA0MCxcbiAgICAgIDIyMyxcbiAgICAgIDc0LFxuICAgICAgMjA4LFxuICAgICAgNCxcbiAgICAgIDUyLFxuICAgICAgMTE4LFxuICAgICAgMjM1LFxuICAgICAgMzgsXG4gICAgICAxMDIsXG4gICAgICAxMzMsXG4gICAgICAxNTlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgOSxcbiAgICAgIDU2LFxuICAgICAgMjIyLFxuICAgICAgODEsXG4gICAgICAxNCxcbiAgICAgIDE5OSxcbiAgICAgIDk1LFxuICAgICAgNDEsXG4gICAgICA2OCxcbiAgICAgIDIyOCxcbiAgICAgIDE5MCxcbiAgICAgIDE2OCxcbiAgICAgIDEwMixcbiAgICAgIDIyOSxcbiAgICAgIDQyLFxuICAgICAgMTk5LFxuICAgICAgMTY1LFxuICAgICAgNzUsXG4gICAgICAyNDksXG4gICAgICA2MlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCI2NlRHTVIzTlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0ODE4OTg2MjE0NToxNUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIvCTiojwkoac4oCi6qqcX+GotuqrgOqrgCDigorigKfPhc65yb7PhdaG4oCn4oKKy5rigKLwkoac8JOKiVwiLFxuICAgIFwibGlkXCI6IFwiMjM3MjUwMjUyMTQ0ODY3OjE1QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0xpanUrY0NFUG5ydnJrR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiVkozNyszTkVhaWlmQldXY1liWXlPbzBVZVBCVWVrWU9IVXVRTFdrTDFqOD1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJlRzA0VGxjZE53Y0lNaG9UaDZJeDFuQWZlUlMwaW9QR0gvcll0ZTlNODB1ajZaK1VGUHdKd2hRMGRrbG5oaCtDSC9oaFRsVW9TaHQwZ0hoSVNBbHFDQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJoNWduYUlFQ0t4ODZYdGoySGJJZ2ZQcEJ1N21iRUhpd0pTRDU5RjZpNlVEby9jWkxZOWlwWXpYemRtbDZ2VTJpUjIwaXJLZVdqdW41dGlOTkkxMjNpUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ4MTg5ODYyMTQ1OjE1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICA1MCxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgNjNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczMTE4MDAzMFxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


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
