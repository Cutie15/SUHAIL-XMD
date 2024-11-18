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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_19_30_11_18_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgMTQ0LFxuICAgICAgICA0MyxcbiAgICAgICAgMTUyLFxuICAgICAgICAxNTcsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxOSxcbiAgICAgICAgMTEsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTgsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTkyLFxuICAgICAgICAyMTgsXG4gICAgICAgIDE1LFxuICAgICAgICAxOTIsXG4gICAgICAgIDE3OSxcbiAgICAgICAgODIsXG4gICAgICAgIDgzLFxuICAgICAgICA5OSxcbiAgICAgICAgMSxcbiAgICAgICAgMTk4LFxuICAgICAgICA0OSxcbiAgICAgICAgMTI2LFxuICAgICAgICAxNzcsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjI4LFxuICAgICAgICA3NSxcbiAgICAgICAgMTUzLFxuICAgICAgICA4OCxcbiAgICAgICAgMTI4LFxuICAgICAgICA2OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0LFxuICAgICAgICAxOTgsXG4gICAgICAgIDMzLFxuICAgICAgICAyMDIsXG4gICAgICAgIDQ4LFxuICAgICAgICAxNTQsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjI4LFxuICAgICAgICAyNDUsXG4gICAgICAgIDQxLFxuICAgICAgICAxNzQsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTEwLFxuICAgICAgICAxNyxcbiAgICAgICAgMTkxLFxuICAgICAgICAyMTEsXG4gICAgICAgIDI2LFxuICAgICAgICAyNDYsXG4gICAgICAgIDE2NSxcbiAgICAgICAgOTgsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjgsXG4gICAgICAgIDI0NSxcbiAgICAgICAgNjEsXG4gICAgICAgIDMzLFxuICAgICAgICAxODAsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTI2LFxuICAgICAgICAxODcsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjMxLFxuICAgICAgICA3NFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDEwLFxuICAgICAgICAxNTMsXG4gICAgICAgIDg0LFxuICAgICAgICAxMjEsXG4gICAgICAgIDExLFxuICAgICAgICAxNzgsXG4gICAgICAgIDQxLFxuICAgICAgICAwLFxuICAgICAgICA5MixcbiAgICAgICAgMTgsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTE5LFxuICAgICAgICAzLFxuICAgICAgICAyMDUsXG4gICAgICAgIDMzLFxuICAgICAgICAxNzcsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjUzLFxuICAgICAgICAyMjksXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTAsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTksXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjUxLFxuICAgICAgICA3OSxcbiAgICAgICAgNSxcbiAgICAgICAgMTM4LFxuICAgICAgICA3NyxcbiAgICAgICAgOTYsXG4gICAgICAgIDEyNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjIsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTksXG4gICAgICAgIDI1LFxuICAgICAgICAxMzYsXG4gICAgICAgIDQsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTQ1LFxuICAgICAgICA1MixcbiAgICAgICAgODUsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTE5LFxuICAgICAgICAxOTAsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTMzLFxuICAgICAgICAyNyxcbiAgICAgICAgMTE0LFxuICAgICAgICA5NSxcbiAgICAgICAgNDYsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjUxLFxuICAgICAgICA3NyxcbiAgICAgICAgMTcsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyNTEsXG4gICAgICAgIDU2LFxuICAgICAgICAxMzMsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMzksXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTA0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4MCxcbiAgICAgICAgMjMsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTcxLFxuICAgICAgICAxMDIsXG4gICAgICAgIDE2LFxuICAgICAgICAxOTIsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTY4LFxuICAgICAgICA3NSxcbiAgICAgICAgMjI0LFxuICAgICAgICAzNSxcbiAgICAgICAgMTE4LFxuICAgICAgICA4MyxcbiAgICAgICAgMTUsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxNTIsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTQzLFxuICAgICAgICAyNDAsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjM1LFxuICAgICAgICAyMDksXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjYsXG4gICAgICAgIDEzLFxuICAgICAgICAxMjEsXG4gICAgICAgIDE4LFxuICAgICAgICAxMzEsXG4gICAgICAgIDExNixcbiAgICAgICAgMTA3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDczLFxuICAgICAgICAyMzcsXG4gICAgICAgIDEwMyxcbiAgICAgICAgODYsXG4gICAgICAgIDc4LFxuICAgICAgICA4OCxcbiAgICAgICAgMjEzLFxuICAgICAgICAxMTgsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjA0LFxuICAgICAgICAxNjUsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTk3LFxuICAgICAgICAyMzksXG4gICAgICAgIDYzLFxuICAgICAgICAyMDUsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjcsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTAsXG4gICAgICAgIDIsXG4gICAgICAgIDExOSxcbiAgICAgICAgNDMsXG4gICAgICAgIDc4LFxuICAgICAgICAxOTksXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTM3LFxuICAgICAgICAxMTgsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjA3LFxuICAgICAgICAxMjYsXG4gICAgICAgIDQ1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICA2MixcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAxMixcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAxMDZcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAzNyxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgNjlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDYsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTUwLFxuICAgICAgICA0OSxcbiAgICAgICAgMTU1LFxuICAgICAgICAyMzgsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAzNixcbiAgICAgICAgMTE3LFxuICAgICAgICA5MixcbiAgICAgICAgMTI0LFxuICAgICAgICA5MSxcbiAgICAgICAgMTk3LFxuICAgICAgICAyMjUsXG4gICAgICAgIDYzLFxuICAgICAgICAxMzMsXG4gICAgICAgIDE4MyxcbiAgICAgICAgNTksXG4gICAgICAgIDExNyxcbiAgICAgICAgMjA5LFxuICAgICAgICA0NixcbiAgICAgICAgODUsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxNzYsXG4gICAgICAgIDY2LFxuICAgICAgICAxNDcsXG4gICAgICAgIDczLFxuICAgICAgICAyMzksXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTQsXG4gICAgICAgIDUyLFxuICAgICAgICA0MixcbiAgICAgICAgMTM3LFxuICAgICAgICAxMzksXG4gICAgICAgIDQwLFxuICAgICAgICA5NCxcbiAgICAgICAgOTMsXG4gICAgICAgIDc1LFxuICAgICAgICA3NixcbiAgICAgICAgMTE0LFxuICAgICAgICAxNzgsXG4gICAgICAgIDEwOSxcbiAgICAgICAgOTksXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTMsXG4gICAgICAgIDE2MyxcbiAgICAgICAgNzksXG4gICAgICAgIDMxLFxuICAgICAgICAxOTAsXG4gICAgICAgIDIzLFxuICAgICAgICAxODYsXG4gICAgICAgIDYzLFxuICAgICAgICA0NCxcbiAgICAgICAgMTk3LFxuICAgICAgICAyMzMsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMzAsXG4gICAgICAgIDE0OCxcbiAgICAgICAgODcsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjUwLFxuICAgICAgICAxMzdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDEyMCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCI2VENxNlFCRFpCbkpwbXZWWmZiU3BwUG8vRlJnZHRWVlh1R3NYT3dKWDY4PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNDkxMjIzMTg1MTJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjNBMUYzMjc3RjMyODM4QUM1Mzg5XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTczMTk1ODI1NVxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJQY1JVSnRuYlJCLWI3Q2daLTB2MmF3XCIsXG4gIFwicGhvbmVJZFwiOiBcIjQ0NzcxZjRmLWEzM2ItNGYzOC1iYzZmLTdhMzg4OWVkY2ViZlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA3MCxcbiAgICAgIDMzLFxuICAgICAgNjksXG4gICAgICAxNTEsXG4gICAgICAyNTIsXG4gICAgICAyMTAsXG4gICAgICAxMDksXG4gICAgICAyMzcsXG4gICAgICA0LFxuICAgICAgNDksXG4gICAgICA4NixcbiAgICAgIDI0OCxcbiAgICAgIDE1NyxcbiAgICAgIDU2LFxuICAgICAgMjQ5LFxuICAgICAgMjE2LFxuICAgICAgMjMzLFxuICAgICAgMTIxLFxuICAgICAgMTE5LFxuICAgICAgMjdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjE1LFxuICAgICAgMjUsXG4gICAgICA1NyxcbiAgICAgIDcyLFxuICAgICAgMjExLFxuICAgICAgMjUwLFxuICAgICAgMTQzLFxuICAgICAgODMsXG4gICAgICA2NCxcbiAgICAgIDE4NyxcbiAgICAgIDIyMSxcbiAgICAgIDIzNCxcbiAgICAgIDIzNyxcbiAgICAgIDE2MSxcbiAgICAgIDUxLFxuICAgICAgMjM3LFxuICAgICAgMjIsXG4gICAgICAyNTEsXG4gICAgICAxMSxcbiAgICAgIDI0M1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCI3OVFESzJQWFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0OTEyMjMxODUxMjoxM0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiNTA1NjA3NTc2NjE3NDI6MTNAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwi77yq772P772T772I772V772B4pyfXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTDc4OWRFSUVPYXI3cmtHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJUM2Jtd1ZmMTdQU2hrUy80cGRtcUtXVG12SHR2RnVxT085TGtFdFZJdERRPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIm9QcDBtdWZPM2pHd0hhWkN6TzB5THMxWWFzbHl2WjV2L0FSQ2lkenBVMUZSUGlXaS91UEY5MHh5aCtMalRqeEdBSFlPVnBXVVdLNnRhT2xpd2ljNGpRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcInZlWHJjU2U4VTBtZFpveTdhSTdZRzJSeTgvQmIyZXlLOG9XMTlyQkJoaDB0TitKSXRPRGZPYWdmMm1IYlk3MHFRZngyZzJUNTJYZkJCeTM3d1JGSGpRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDkxMjIzMTg1MTI6MTNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDUyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJpcGhvbmVcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczMTk1ODI0OSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUlNalwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSU1qLmpzb24iOiAie1wia2V5RGF0YVwiOlwiVGhTU2prS2c1ZytjaGIzOEJwNjdwT1dmTVJuOUFyNytxVmtybzdqUkNVOD1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoyMzE5Mjg1ODIyLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMSwwXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MzE5NTgyNTA1ODhcIn0iCn0="  // PUT your SESSION_ID 


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
