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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_23_56_11_07_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDI0OSxcbiAgICAgICAgODIsXG4gICAgICAgIDMxLFxuICAgICAgICAyMTAsXG4gICAgICAgIDg3LFxuICAgICAgICA5MCxcbiAgICAgICAgMjIyLFxuICAgICAgICA1LFxuICAgICAgICA4NSxcbiAgICAgICAgMTkzLFxuICAgICAgICA0LFxuICAgICAgICAyMCxcbiAgICAgICAgNzYsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjE2LFxuICAgICAgICA3MyxcbiAgICAgICAgNzksXG4gICAgICAgIDI0MCxcbiAgICAgICAgNDMsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMzQsXG4gICAgICAgIDIxMCxcbiAgICAgICAgOTcsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTU3LFxuICAgICAgICAzNSxcbiAgICAgICAgMjI1LFxuICAgICAgICAyMjEsXG4gICAgICAgIDMyLFxuICAgICAgICA0MixcbiAgICAgICAgMTI2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyNyxcbiAgICAgICAgNDAsXG4gICAgICAgIDMyLFxuICAgICAgICA2MSxcbiAgICAgICAgMTc2LFxuICAgICAgICAyMzcsXG4gICAgICAgIDE1NyxcbiAgICAgICAgODgsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTIsXG4gICAgICAgIDE5LFxuICAgICAgICA1NyxcbiAgICAgICAgMTcwLFxuICAgICAgICA2MyxcbiAgICAgICAgMTUyLFxuICAgICAgICAyMDIsXG4gICAgICAgIDM0LFxuICAgICAgICAxMjQsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTgxLFxuICAgICAgICA4NCxcbiAgICAgICAgMzEsXG4gICAgICAgIDE0MCxcbiAgICAgICAgOTgsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjMzLFxuICAgICAgICAxMDMsXG4gICAgICAgIDM4LFxuICAgICAgICAzOCxcbiAgICAgICAgMTY3LFxuICAgICAgICAxMzgsXG4gICAgICAgIDEwNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkyLFxuICAgICAgICAyMixcbiAgICAgICAgMTgzLFxuICAgICAgICA4MixcbiAgICAgICAgMTUwLFxuICAgICAgICAyMDcsXG4gICAgICAgIDIzOCxcbiAgICAgICAgODYsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTUwLFxuICAgICAgICAxOTIsXG4gICAgICAgIDM2LFxuICAgICAgICAxMDksXG4gICAgICAgIDI0MixcbiAgICAgICAgMTEyLFxuICAgICAgICA3MyxcbiAgICAgICAgMTkxLFxuICAgICAgICA2NixcbiAgICAgICAgMjEzLFxuICAgICAgICAxMzcsXG4gICAgICAgIDQyLFxuICAgICAgICAxMTgsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTkyLFxuICAgICAgICAzOSxcbiAgICAgICAgMTQzLFxuICAgICAgICA1MCxcbiAgICAgICAgMjMwLFxuICAgICAgICAyMyxcbiAgICAgICAgNTEsXG4gICAgICAgIDI1NSxcbiAgICAgICAgNzNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI5LFxuICAgICAgICA3NixcbiAgICAgICAgMjIzLFxuICAgICAgICAxMDgsXG4gICAgICAgIDE0NSxcbiAgICAgICAgNTYsXG4gICAgICAgIDIyMCxcbiAgICAgICAgNDEsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTgzLFxuICAgICAgICAxMzMsXG4gICAgICAgIDgsXG4gICAgICAgIDI1LFxuICAgICAgICAxNTQsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjE2LFxuICAgICAgICAwLFxuICAgICAgICAyNDcsXG4gICAgICAgIDE5MCxcbiAgICAgICAgNjcsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjEyLFxuICAgICAgICAxOTYsXG4gICAgICAgIDIwMSxcbiAgICAgICAgOTQsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjM4LFxuICAgICAgICAyNDUsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMzksXG4gICAgICAgIDEsXG4gICAgICAgIDk2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4LFxuICAgICAgICAyMTEsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTk1LFxuICAgICAgICAyOCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxMDYsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTE4LFxuICAgICAgICAxOTUsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTY4LFxuICAgICAgICAyNDUsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjM4LFxuICAgICAgICA0NSxcbiAgICAgICAgNSxcbiAgICAgICAgMTgwLFxuICAgICAgICA4MSxcbiAgICAgICAgMjUxLFxuICAgICAgICAyMDksXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTI2LFxuICAgICAgICAxNjUsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTU0LFxuICAgICAgICAxNDksXG4gICAgICAgIDEwOSxcbiAgICAgICAgODcsXG4gICAgICAgIDE1MyxcbiAgICAgICAgOTEsXG4gICAgICAgIDg0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDc5LFxuICAgICAgICAyMDQsXG4gICAgICAgIDcwLFxuICAgICAgICAxNTMsXG4gICAgICAgIDUsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjE3LFxuICAgICAgICAyNDAsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjAsXG4gICAgICAgIDU0LFxuICAgICAgICA4MCxcbiAgICAgICAgMjE0LFxuICAgICAgICAyOCxcbiAgICAgICAgNTksXG4gICAgICAgIDczLFxuICAgICAgICAyMTMsXG4gICAgICAgIDg0LFxuICAgICAgICAyNTUsXG4gICAgICAgIDM4LFxuICAgICAgICAzNCxcbiAgICAgICAgMjIxLFxuICAgICAgICA5MixcbiAgICAgICAgMTA1LFxuICAgICAgICAyMzcsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjQsXG4gICAgICAgIDE2LFxuICAgICAgICA3NCxcbiAgICAgICAgMjMsXG4gICAgICAgIDk3LFxuICAgICAgICAxMjJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgOCxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMTI3XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMTksXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDc2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTAwLFxuICAgICAgICAxOSxcbiAgICAgICAgMjQzLFxuICAgICAgICAyMDEsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjA1LFxuICAgICAgICAxODUsXG4gICAgICAgIDE0OSxcbiAgICAgICAgNTcsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTcyLFxuICAgICAgICAyMTYsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjAxLFxuICAgICAgICAxODEsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTEsXG4gICAgICAgIDQ2LFxuICAgICAgICAyMDYsXG4gICAgICAgIDI5LFxuICAgICAgICA0LFxuICAgICAgICAyMDYsXG4gICAgICAgIDE3MyxcbiAgICAgICAgNDgsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjI2LFxuICAgICAgICA5NyxcbiAgICAgICAgMTc3LFxuICAgICAgICAyNTAsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTkwLFxuICAgICAgICAyNTUsXG4gICAgICAgIDU4LFxuICAgICAgICAxNTcsXG4gICAgICAgIDc3LFxuICAgICAgICA1OSxcbiAgICAgICAgNTcsXG4gICAgICAgIDI1MixcbiAgICAgICAgNTgsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTgxLFxuICAgICAgICA0NSxcbiAgICAgICAgNTgsXG4gICAgICAgIDM3LFxuICAgICAgICAxMDcsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjMsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTIwLFxuICAgICAgICAxOSxcbiAgICAgICAgNjIsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjksXG4gICAgICAgIDU1LFxuICAgICAgICAxNTgsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjM4LFxuICAgICAgICA2NyxcbiAgICAgICAgMjUxLFxuICAgICAgICAxMjgsXG4gICAgICAgIDQwLFxuICAgICAgICAxNjMsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTM5XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA4MixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJCU0dMWTNVNDJ3MzhDWENzbFNXcUw2blFlQ09iOHJranJmZUZzNW54MnNzPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNDgxODk4NjIxNDVAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjk1OUY1NTI5QTYwMjczRDhDMDgzRkFDNTkwQzUwOTk4XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTczMTAyMzc2MVxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCI1UDNhQzZIU1RmcWdFUEY1eFE1YXVnXCIsXG4gIFwicGhvbmVJZFwiOiBcIjAzNDUzNWRhLWEwNmMtNDBjOS04ZDg0LWQyMWI1MTZmYThkZFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxODMsXG4gICAgICAxLFxuICAgICAgMTkzLFxuICAgICAgNTgsXG4gICAgICAxMDUsXG4gICAgICAxNDQsXG4gICAgICAxNTMsXG4gICAgICAxNTIsXG4gICAgICAxNDEsXG4gICAgICAxOTAsXG4gICAgICAxNjUsXG4gICAgICA1MyxcbiAgICAgIDE1MyxcbiAgICAgIDE4MCxcbiAgICAgIDE1MSxcbiAgICAgIDI1NCxcbiAgICAgIDkxLFxuICAgICAgMjQ1LFxuICAgICAgNCxcbiAgICAgIDIwN1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyNDIsXG4gICAgICAyNDUsXG4gICAgICAxODUsXG4gICAgICAxNjIsXG4gICAgICA5MyxcbiAgICAgIDIwNixcbiAgICAgIDE3MCxcbiAgICAgIDkxLFxuICAgICAgMTI4LFxuICAgICAgMTkzLFxuICAgICAgMjQxLFxuICAgICAgMTY2LFxuICAgICAgMjQ1LFxuICAgICAgMTgzLFxuICAgICAgNDksXG4gICAgICAxMzcsXG4gICAgICAxNzEsXG4gICAgICAyMjksXG4gICAgICA5MyxcbiAgICAgIDMxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjVLMjVERUc1XCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ4MTg5ODYyMTQ1OjEzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwi8JOKiPCShpzigKLiipnhn5vigb/qqpxf4ai26quA6quA4oCi4oKK4oCnyovOucm+z4XKguKAp+KCiuKAovCShpzwk4qJXCIsXG4gICAgXCJsaWRcIjogXCIyMzcyNTAyNTIxNDQ4Njc6MTNAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDUE83aXIwR0VJYW50YmtHR0FRZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJrc3ZYV0lvaVAwMnNkbW9qODBCZy9ndkJ0NGtQdXZ3cnhiV29KWkt2ZTNFPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImU0VWJPYjNkMXYzU1hGVTB5cEJEOUo1N3NTaHU1RkRtbDFLQjNrVUM5Wm5MbmtRVW50WHdDNlc4b2NobkJKanlScTUzVC9MYUtkOGROZkhJZXlqdUJ3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIjVpbG5rd0JncDFPUDZZdUdoKzJPSmY3ajRSZUNOeWFONVJiNmVMK1c1bUcwKzE0V25icVJ1Z2JKNVBocXFWNW85Z0JLK1laWk1uWHQwVTMweXQrWmpnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDgxODk4NjIxNDU6MTNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDExM1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzMxMDIzNzU0LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBS00vXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFLTS8uanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


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
