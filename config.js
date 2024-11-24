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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_09_21_11_24_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICAxNjMsXG4gICAgICAgIDYzLFxuICAgICAgICAxMDQsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTI2LFxuICAgICAgICAyNTQsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTg3LFxuICAgICAgICAzOCxcbiAgICAgICAgNDAsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTE0LFxuICAgICAgICAyMjMsXG4gICAgICAgIDIwNyxcbiAgICAgICAgNzMsXG4gICAgICAgIDgyLFxuICAgICAgICAyMDMsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjAzLFxuICAgICAgICA4NixcbiAgICAgICAgMjA5LFxuICAgICAgICA4MSxcbiAgICAgICAgMTIsXG4gICAgICAgIDQ1LFxuICAgICAgICAxNzAsXG4gICAgICAgIDEwOCxcbiAgICAgICAgOTYsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTg2LFxuICAgICAgICAzNixcbiAgICAgICAgMTA1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwMSxcbiAgICAgICAgMCxcbiAgICAgICAgODEsXG4gICAgICAgIDIzMSxcbiAgICAgICAgNzQsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTYxLFxuICAgICAgICAzNixcbiAgICAgICAgMTYxLFxuICAgICAgICAxLFxuICAgICAgICAyMDIsXG4gICAgICAgIDIzMixcbiAgICAgICAgNTcsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTkwLFxuICAgICAgICAyOSxcbiAgICAgICAgMjEyLFxuICAgICAgICAxNjAsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjM1LFxuICAgICAgICAxMjIsXG4gICAgICAgIDE2MixcbiAgICAgICAgNTIsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTIyLFxuICAgICAgICAyLFxuICAgICAgICAzMCxcbiAgICAgICAgMjksXG4gICAgICAgIDExNyxcbiAgICAgICAgMTg5LFxuICAgICAgICAxODIsXG4gICAgICAgIDEwMlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICA0NixcbiAgICAgICAgMTQ0LFxuICAgICAgICAzOCxcbiAgICAgICAgMjUzLFxuICAgICAgICAxOTAsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjQyLFxuICAgICAgICAxNDAsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjgsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTY2LFxuICAgICAgICAxMTAsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTk4LFxuICAgICAgICA2LFxuICAgICAgICAxNDQsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjM0LFxuICAgICAgICAxNjksXG4gICAgICAgIDE5NSxcbiAgICAgICAgMzYsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTc2LFxuICAgICAgICAxOTEsXG4gICAgICAgIDIzLFxuICAgICAgICAxMzEsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjQxLFxuICAgICAgICAxNTksXG4gICAgICAgIDEyNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0OCxcbiAgICAgICAgMjM1LFxuICAgICAgICAxNjAsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTcwLFxuICAgICAgICAxOTUsXG4gICAgICAgIDcyLFxuICAgICAgICAyMDAsXG4gICAgICAgIDk5LFxuICAgICAgICAyMzYsXG4gICAgICAgIDcwLFxuICAgICAgICAyMzgsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjEyLFxuICAgICAgICAxNSxcbiAgICAgICAgMTQwLFxuICAgICAgICA3MyxcbiAgICAgICAgMTk1LFxuICAgICAgICA3NixcbiAgICAgICAgNTUsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjQyLFxuICAgICAgICAxNjksXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjM0LFxuICAgICAgICA4OCxcbiAgICAgICAgMTI5LFxuICAgICAgICAxNjMsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTIwLFxuICAgICAgICAxNDgsXG4gICAgICAgIDg3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4LFxuICAgICAgICAyMzYsXG4gICAgICAgIDUxLFxuICAgICAgICAyMTMsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTU2LFxuICAgICAgICA2OSxcbiAgICAgICAgMzYsXG4gICAgICAgIDE0LFxuICAgICAgICAxMzUsXG4gICAgICAgIDExMSxcbiAgICAgICAgOTYsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTg2LFxuICAgICAgICAxMTcsXG4gICAgICAgIDEwNyxcbiAgICAgICAgODQsXG4gICAgICAgIDUsXG4gICAgICAgIDE0OSxcbiAgICAgICAgOTQsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjAzLFxuICAgICAgICAzNixcbiAgICAgICAgMjIzLFxuICAgICAgICAxMTIsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTI0LFxuICAgICAgICA1LFxuICAgICAgICAxMzgsXG4gICAgICAgIDE4MSxcbiAgICAgICAgOTgsXG4gICAgICAgIDk2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExOSxcbiAgICAgICAgMjEzLFxuICAgICAgICAwLFxuICAgICAgICAyNDgsXG4gICAgICAgIDEwNCxcbiAgICAgICAgNjAsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjIsXG4gICAgICAgIDM5LFxuICAgICAgICA3OCxcbiAgICAgICAgNjgsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTU2LFxuICAgICAgICAxODYsXG4gICAgICAgIDk1LFxuICAgICAgICAyNTAsXG4gICAgICAgIDQwLFxuICAgICAgICAxNDMsXG4gICAgICAgIDI0LFxuICAgICAgICA2MyxcbiAgICAgICAgNzYsXG4gICAgICAgIDU3LFxuICAgICAgICAyMzUsXG4gICAgICAgIDM4LFxuICAgICAgICAxNTcsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxODQsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTA4LFxuICAgICAgICAyNDksXG4gICAgICAgIDg3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDk2LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICA1NixcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDExNVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgOTFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1NixcbiAgICAgICAgNSxcbiAgICAgICAgMjUxLFxuICAgICAgICAzMixcbiAgICAgICAgMzEsXG4gICAgICAgIDY0LFxuICAgICAgICAyMDEsXG4gICAgICAgIDUxLFxuICAgICAgICAxNDEsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjI3LFxuICAgICAgICAyMTIsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTI2LFxuICAgICAgICA5MixcbiAgICAgICAgMjIsXG4gICAgICAgIDg5LFxuICAgICAgICAyMzcsXG4gICAgICAgIDgzLFxuICAgICAgICAyMzgsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNjUsXG4gICAgICAgIDQ0LFxuICAgICAgICAzNCxcbiAgICAgICAgMTgyLFxuICAgICAgICAxNCxcbiAgICAgICAgMTA3LFxuICAgICAgICA3MSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyMTYsXG4gICAgICAgIDU4LFxuICAgICAgICAxMSxcbiAgICAgICAgMTc5LFxuICAgICAgICA3OSxcbiAgICAgICAgNjIsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTc0LFxuICAgICAgICAyMTQsXG4gICAgICAgIDE5NixcbiAgICAgICAgOTUsXG4gICAgICAgIDgyLFxuICAgICAgICAxMDUsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTY5LFxuICAgICAgICAyMTMsXG4gICAgICAgIDQ2LFxuICAgICAgICAxNDYsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjIxLFxuICAgICAgICA5OSxcbiAgICAgICAgMTY2LFxuICAgICAgICAxMzksXG4gICAgICAgIDg5LFxuICAgICAgICAxNjIsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjIwLFxuICAgICAgICA4MyxcbiAgICAgICAgNTQsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTc3LFxuICAgICAgICA1NixcbiAgICAgICAgMTAzLFxuICAgICAgICAxOTgsXG4gICAgICAgIDFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDEyMixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJUeXc2VzIyRE9RNFJ0L3dJOGlBTWhGOEdRU1NOcThldW9xN0w4aWtZVnJBPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJfV0xrQzVSZ1RkeWpoX2FZNlhnRGFnXCIsXG4gIFwicGhvbmVJZFwiOiBcIjFiMDNjYzMxLWViMmYtNDc3My1hZWE3LWEzNDdkN2M3ZTE5YVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyNDcsXG4gICAgICAyNDIsXG4gICAgICAxNSxcbiAgICAgIDEyMyxcbiAgICAgIDE3MCxcbiAgICAgIDE4MyxcbiAgICAgIDY1LFxuICAgICAgMTIwLFxuICAgICAgMTYzLFxuICAgICAgMjU1LFxuICAgICAgNTUsXG4gICAgICAxODEsXG4gICAgICA0OSxcbiAgICAgIDc5LFxuICAgICAgMTg5LFxuICAgICAgMTg5LFxuICAgICAgMjEwLFxuICAgICAgMTcxLFxuICAgICAgNjMsXG4gICAgICAyMDRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiBmYWxzZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDY1LFxuICAgICAgMTgwLFxuICAgICAgMjQ4LFxuICAgICAgOSxcbiAgICAgIDIyNixcbiAgICAgIDE4NSxcbiAgICAgIDIxNyxcbiAgICAgIDgsXG4gICAgICAyMjQsXG4gICAgICA0NSxcbiAgICAgIDEwLFxuICAgICAgMjQyLFxuICAgICAgMTQ5LFxuICAgICAgNjYsXG4gICAgICA0MyxcbiAgICAgIDE0OSxcbiAgICAgIDEyNCxcbiAgICAgIDcxLFxuICAgICAgMTI5LFxuICAgICAgMTYwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSUxpMUtBSEVKTGdpN29HR0FJZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJraU1ueWVaWjFpQ0xtYWxLQWplaGd3UGt2REdCelU1bHFXRkhJMkloRHdrPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIjB2MUJFSHduNmNwaE51RjBGZ0hmZ1NTa3Ircm9JZ0xXNG9jZDVZZ2xVZ3h2TnZyMGtsWCtPL3JGN3JtdmdmM1JQcFZteDM2OVdxbUpZMS81WkdzUUR3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImtxRHNEWTU4SzVCSEN3R1ZvaXlmZUFSWXJiaWp1VytPM095Y3ZiUkNDSm9SVUtlVFJ4UGNPYnBjYUdsNXA3Mlc2QXo5eTlNQzBaSFdyMW1uTFRLM0FRPT1cIlxuICB9LFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0ODE4OTg2MjE0NToyMEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIvCTiojwkoac8JOKieKAouqqnF/hqLbqq4Dqq4DigKLigKfigorLmi7Ki865yb7PhdaGLsua4oKK4oCn44CQ8JOGo+OAkVwiLFxuICAgIFwibGlkXCI6IFwiMjM3MjUwMjUyMTQ0ODY3OjIwQGxpZFwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0ODE4OTg2MjE0NToyMEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICA5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzI0NDAxMDdcbn0iCn0="  // PUT your SESSION_ID 


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
