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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_13_47_11_22_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEyLFxuICAgICAgICAxMzYsXG4gICAgICAgIDUsXG4gICAgICAgIDI0MSxcbiAgICAgICAgNDUsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTkyLFxuICAgICAgICAyNSxcbiAgICAgICAgMCxcbiAgICAgICAgMTk3LFxuICAgICAgICAxNDYsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjU1LFxuICAgICAgICAyNDEsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjQ5LFxuICAgICAgICA0NixcbiAgICAgICAgMTIyLFxuICAgICAgICAxMjQsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjI4LFxuICAgICAgICAyMDIsXG4gICAgICAgIDg5LFxuICAgICAgICAxMzEsXG4gICAgICAgIDEyMixcbiAgICAgICAgNjMsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTU2LFxuICAgICAgICAyMjAsXG4gICAgICAgIDg3LFxuICAgICAgICA4LFxuICAgICAgICA4MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTMsXG4gICAgICAgIDQ2LFxuICAgICAgICAyOCxcbiAgICAgICAgMTg5LFxuICAgICAgICAyNDYsXG4gICAgICAgIDUzLFxuICAgICAgICA4MyxcbiAgICAgICAgMTg2LFxuICAgICAgICAxMTcsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyNTUsXG4gICAgICAgIDMsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTk1LFxuICAgICAgICA1MCxcbiAgICAgICAgMjQsXG4gICAgICAgIDU0LFxuICAgICAgICAxODcsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTY3LFxuICAgICAgICAxODIsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTI4LFxuICAgICAgICAxNzQsXG4gICAgICAgIDIzNixcbiAgICAgICAgNjQsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjUzLFxuICAgICAgICA5NSxcbiAgICAgICAgNDYsXG4gICAgICAgIDJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2LFxuICAgICAgICAyMjksXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTAsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTgyLFxuICAgICAgICA4NyxcbiAgICAgICAgNDMsXG4gICAgICAgIDE2MyxcbiAgICAgICAgNjcsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTI0LFxuICAgICAgICA1LFxuICAgICAgICAxNTUsXG4gICAgICAgIDIyMSxcbiAgICAgICAgNCxcbiAgICAgICAgMjEyLFxuICAgICAgICAxNTIsXG4gICAgICAgIDEzMCxcbiAgICAgICAgODAsXG4gICAgICAgIDExNSxcbiAgICAgICAgNzEsXG4gICAgICAgIDIwOCxcbiAgICAgICAgNTUsXG4gICAgICAgIDQ0LFxuICAgICAgICA0NyxcbiAgICAgICAgMjM1LFxuICAgICAgICAxMzMsXG4gICAgICAgIDUxLFxuICAgICAgICA2OSxcbiAgICAgICAgMjAsXG4gICAgICAgIDc0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyOCxcbiAgICAgICAgMSxcbiAgICAgICAgMTQyLFxuICAgICAgICAxNjksXG4gICAgICAgIDExNCxcbiAgICAgICAgNTAsXG4gICAgICAgIDkxLFxuICAgICAgICA1NSxcbiAgICAgICAgMTg2LFxuICAgICAgICA3OCxcbiAgICAgICAgOCxcbiAgICAgICAgMTk5LFxuICAgICAgICAyMDIsXG4gICAgICAgIDcyLFxuICAgICAgICAyNyxcbiAgICAgICAgMjE2LFxuICAgICAgICA3NixcbiAgICAgICAgMTIzLFxuICAgICAgICA5NCxcbiAgICAgICAgNjIsXG4gICAgICAgIDE5MCxcbiAgICAgICAgODEsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTAzLFxuICAgICAgICAxMTIsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTIsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjQxLFxuICAgICAgICAyMjUsXG4gICAgICAgIDIyMyxcbiAgICAgICAgNzVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDAsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMCxcbiAgICAgICAgMTI0LFxuICAgICAgICA3MSxcbiAgICAgICAgMTE2LFxuICAgICAgICAyMTIsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTEyLFxuICAgICAgICAxNDcsXG4gICAgICAgIDAsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxLFxuICAgICAgICAxMzcsXG4gICAgICAgIDE3LFxuICAgICAgICAxNzYsXG4gICAgICAgIDY1LFxuICAgICAgICAyMjMsXG4gICAgICAgIDM3LFxuICAgICAgICA2MSxcbiAgICAgICAgMTIsXG4gICAgICAgIDIxNixcbiAgICAgICAgMzgsXG4gICAgICAgIDI5LFxuICAgICAgICA1MyxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyMzAsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjQyLFxuICAgICAgICA4OSxcbiAgICAgICAgOTJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM5LFxuICAgICAgICAxODcsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTY5LFxuICAgICAgICA4MyxcbiAgICAgICAgMjQwLFxuICAgICAgICA2NyxcbiAgICAgICAgOTEsXG4gICAgICAgIDE4NCxcbiAgICAgICAgNjYsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjM2LFxuICAgICAgICA0NCxcbiAgICAgICAgMjExLFxuICAgICAgICAzOSxcbiAgICAgICAgMTI5LFxuICAgICAgICAyMjAsXG4gICAgICAgIDI0MyxcbiAgICAgICAgNzMsXG4gICAgICAgIDM0LFxuICAgICAgICAyMzAsXG4gICAgICAgIDIxNixcbiAgICAgICAgNCxcbiAgICAgICAgMTA0LFxuICAgICAgICAzNixcbiAgICAgICAgMTQyLFxuICAgICAgICAyMjIsXG4gICAgICAgIDIxLFxuICAgICAgICAxMDgsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTE5LFxuICAgICAgICA4OVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICA2NVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAzNixcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgODRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2MCxcbiAgICAgICAgMTM1LFxuICAgICAgICA1NCxcbiAgICAgICAgMjMzLFxuICAgICAgICAxNDQsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjI0LFxuICAgICAgICAyNTQsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTgsXG4gICAgICAgIDIxLFxuICAgICAgICAxMjQsXG4gICAgICAgIDcxLFxuICAgICAgICAxMyxcbiAgICAgICAgMjM2LFxuICAgICAgICA0OCxcbiAgICAgICAgODgsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTk1LFxuICAgICAgICAxNTQsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTE3LFxuICAgICAgICA5NyxcbiAgICAgICAgMTI2LFxuICAgICAgICA4MyxcbiAgICAgICAgMjMzLFxuICAgICAgICAxODMsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjM3LFxuICAgICAgICAxNjIsXG4gICAgICAgIDI0MyxcbiAgICAgICAgNjcsXG4gICAgICAgIDIwOCxcbiAgICAgICAgNTIsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTY2LFxuICAgICAgICAxMzksXG4gICAgICAgIDM5LFxuICAgICAgICA0OCxcbiAgICAgICAgMjQxLFxuICAgICAgICAxOTksXG4gICAgICAgIDE2MSxcbiAgICAgICAgODcsXG4gICAgICAgIDkzLFxuICAgICAgICA2NixcbiAgICAgICAgMjE1LFxuICAgICAgICAxMDEsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTg3LFxuICAgICAgICAxNjEsXG4gICAgICAgIDgwLFxuICAgICAgICAxOTksXG4gICAgICAgIDQyLFxuICAgICAgICAxOTksXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjAsXG4gICAgICAgIDkyLFxuICAgICAgICAyMjcsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTE2LFxuICAgICAgICAxOTAsXG4gICAgICAgIDUyLFxuICAgICAgICAxMzUsXG4gICAgICAgIDEzMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTM2LFxuICBcImFkdlNlY3JldEtleVwiOiBcIkIyajNpRXdBWWtyN1FLRGxHTUdtODJ2WEtIVmFwLzM3SUNCek9tTml4RFk9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjM0OTEyMjMxODUxMkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiM0E0ODA2RkM1NjE3NEY3M0ZFOEVcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzMyMjgzMjI0XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIkZWaXJ0WnM2VHh1OFZyZGRIc3BuTmdcIixcbiAgXCJwaG9uZUlkXCI6IFwiYzM3MTBiOTItOTgzOC00ZThjLTgzNzAtZjNkY2Q2YTc0M2E0XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIwMixcbiAgICAgIDU4LFxuICAgICAgMTA1LFxuICAgICAgMTI0LFxuICAgICAgMTkzLFxuICAgICAgNDYsXG4gICAgICA4MSxcbiAgICAgIDQsXG4gICAgICAzNyxcbiAgICAgIDg4LFxuICAgICAgMTExLFxuICAgICAgMjM5LFxuICAgICAgMTEyLFxuICAgICAgODQsXG4gICAgICAyNDgsXG4gICAgICAxNTMsXG4gICAgICAyMjYsXG4gICAgICAyMjAsXG4gICAgICAyMTUsXG4gICAgICAxOVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA5NCxcbiAgICAgIDk1LFxuICAgICAgMTg5LFxuICAgICAgNDYsXG4gICAgICAxOTIsXG4gICAgICA3OSxcbiAgICAgIDE4MyxcbiAgICAgIDE1NixcbiAgICAgIDEyLFxuICAgICAgMTYsXG4gICAgICA3MyxcbiAgICAgIDE1NCxcbiAgICAgIDcwLFxuICAgICAgMTM2LFxuICAgICAgMTg0LFxuICAgICAgOTUsXG4gICAgICAxNTUsXG4gICAgICAxNzcsXG4gICAgICAxMzYsXG4gICAgICAyMFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJSQ1NUNUxYQVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0OTEyMjMxODUxMjoxNkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiNTA1NjA3NTc2NjE3NDI6MTZAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwi77yq772P772T772I772V772B4pyfXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDUE9za3Y0REVOQ1dncm9HR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJUM2Jtd1ZmMTdQU2hrUy80cGRtcUtXVG12SHR2RnVxT085TGtFdFZJdERRPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkZHU01Wd2M4amFxaklWKzUwM3ZrVFFYWFRHTjMrOHBlZytHLzczOFMvYmVOTG52aGFVd3FDU2JGMnorYm1mTEszSnZXSVYwOEd5dXVNQk1VbE5tZmlBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcInp5VDhFTElkcGpqT2RodCtvWld0V0h1SU5naEpMMWFaTWFRU3VpWFROZWcwR2Jzdit2VEg2YjZCcU9MT2prdXpDckQ4NnV3U0cwLzNUdWhoa3oyQmd3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDkxMjIzMTg1MTI6MTZAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDUyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJpcGhvbmVcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczMjI4MzIxOCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUJWbFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBQlZsLmpzb24iOiAie1wia2V5RGF0YVwiOlwiNCsxQVdpUXQ2SmtCN24rMFJOYnhTWGdiSkxQVVBROUQyMXNVR28zSE02WT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMDY5ODQ4MTc5LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMSwwXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MzIyODMyMjA5NDBcIn0iCn0="  // PUT your SESSION_ID 


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
