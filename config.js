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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_10_26_11_13_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQwLFxuICAgICAgICAxNzUsXG4gICAgICAgIDgxLFxuICAgICAgICAyNDksXG4gICAgICAgIDEwLFxuICAgICAgICA0MixcbiAgICAgICAgMjQ0LFxuICAgICAgICAxODgsXG4gICAgICAgIDY2LFxuICAgICAgICA3NSxcbiAgICAgICAgMTA1LFxuICAgICAgICAyMjYsXG4gICAgICAgIDI1NCxcbiAgICAgICAgNzUsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjA3LFxuICAgICAgICAzMixcbiAgICAgICAgOTksXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAzLFxuICAgICAgICAyMTksXG4gICAgICAgIDkyLFxuICAgICAgICA2NSxcbiAgICAgICAgMTcyLFxuICAgICAgICAzLFxuICAgICAgICAxMDQsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTA0LFxuICAgICAgICA3NixcbiAgICAgICAgMTE4LFxuICAgICAgICA3MlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjQsXG4gICAgICAgIDc4LFxuICAgICAgICAyNDUsXG4gICAgICAgIDEyNCxcbiAgICAgICAgNjcsXG4gICAgICAgIDEzMyxcbiAgICAgICAgNzcsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTI0LFxuICAgICAgICAxMTIsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTI4LFxuICAgICAgICA5MyxcbiAgICAgICAgMjA4LFxuICAgICAgICAxMzYsXG4gICAgICAgIDI0LFxuICAgICAgICAzNSxcbiAgICAgICAgMTk5LFxuICAgICAgICA3MyxcbiAgICAgICAgMjI5LFxuICAgICAgICAxNzMsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMzAsXG4gICAgICAgIDQxLFxuICAgICAgICA3NSxcbiAgICAgICAgMjQ3LFxuICAgICAgICA1NSxcbiAgICAgICAgNDYsXG4gICAgICAgIDExMSxcbiAgICAgICAgOCxcbiAgICAgICAgMjQ5LFxuICAgICAgICA3OVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDE1MixcbiAgICAgICAgNzgsXG4gICAgICAgIDc0LFxuICAgICAgICAyMTcsXG4gICAgICAgIDgzLFxuICAgICAgICAxMzUsXG4gICAgICAgIDI0NixcbiAgICAgICAgMzksXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjMwLFxuICAgICAgICAyNTIsXG4gICAgICAgIDYsXG4gICAgICAgIDExNyxcbiAgICAgICAgNSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyMTMsXG4gICAgICAgIDIxNSxcbiAgICAgICAgNzMsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTgxLFxuICAgICAgICAxODUsXG4gICAgICAgIDMyLFxuICAgICAgICAyNDAsXG4gICAgICAgIDE3NixcbiAgICAgICAgNCxcbiAgICAgICAgNDgsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTgxLFxuICAgICAgICAyMzIsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTE0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDcyLFxuICAgICAgICAyMjgsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTI3LFxuICAgICAgICAyMTcsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTIwLFxuICAgICAgICAxOTEsXG4gICAgICAgIDIwNyxcbiAgICAgICAgOTUsXG4gICAgICAgIDU2LFxuICAgICAgICA2MixcbiAgICAgICAgMjQ0LFxuICAgICAgICAzNixcbiAgICAgICAgMjE2LFxuICAgICAgICAxODcsXG4gICAgICAgIDQwLFxuICAgICAgICA0MyxcbiAgICAgICAgOTUsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjE4LFxuICAgICAgICAyMjYsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjUsXG4gICAgICAgIDI0MSxcbiAgICAgICAgNyxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxNzAsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTU0LFxuICAgICAgICAxOSxcbiAgICAgICAgMjdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzMixcbiAgICAgICAgMTE1LFxuICAgICAgICAxMjcsXG4gICAgICAgIDYwLFxuICAgICAgICAxNTAsXG4gICAgICAgIDgxLFxuICAgICAgICAyMjksXG4gICAgICAgIDU3LFxuICAgICAgICAyMDIsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTkzLFxuICAgICAgICAyNSxcbiAgICAgICAgMTkyLFxuICAgICAgICA0NyxcbiAgICAgICAgMTM3LFxuICAgICAgICAyMzAsXG4gICAgICAgIDY4LFxuICAgICAgICAyMTUsXG4gICAgICAgIDk5LFxuICAgICAgICAxMTYsXG4gICAgICAgIDM2LFxuICAgICAgICAxNSxcbiAgICAgICAgMTM4LFxuICAgICAgICAyMjEsXG4gICAgICAgIDE0OSxcbiAgICAgICAgNzgsXG4gICAgICAgIDE0OCxcbiAgICAgICAgOCxcbiAgICAgICAgNyxcbiAgICAgICAgMTg5LFxuICAgICAgICAyMTEsXG4gICAgICAgIDExNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzksXG4gICAgICAgIDk5LFxuICAgICAgICAxODUsXG4gICAgICAgIDY2LFxuICAgICAgICAxOTEsXG4gICAgICAgIDIzLFxuICAgICAgICAyMzIsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTg5LFxuICAgICAgICAyMzQsXG4gICAgICAgIDQ0LFxuICAgICAgICA2OCxcbiAgICAgICAgMjIyLFxuICAgICAgICAyNyxcbiAgICAgICAgMjA1LFxuICAgICAgICA0MSxcbiAgICAgICAgMTYyLFxuICAgICAgICA0MixcbiAgICAgICAgMTMwLFxuICAgICAgICAyMDksXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTAxLFxuICAgICAgICAxMzUsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTM3LFxuICAgICAgICAyNTIsXG4gICAgICAgIDIyLFxuICAgICAgICAxNDEsXG4gICAgICAgIDE0MSxcbiAgICAgICAgNTQsXG4gICAgICAgIDQwLFxuICAgICAgICAzNVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgNyxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMTI1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDcwLFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgNyxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAxMTBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDYsXG4gICAgICAgIDI2LFxuICAgICAgICAxMTYsXG4gICAgICAgIDQ1LFxuICAgICAgICAyMTQsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjExLFxuICAgICAgICAxOCxcbiAgICAgICAgMTAwLFxuICAgICAgICAyMyxcbiAgICAgICAgMTM3LFxuICAgICAgICAxNDcsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTE3LFxuICAgICAgICAyNDMsXG4gICAgICAgIDY0LFxuICAgICAgICAxNyxcbiAgICAgICAgMTU2LFxuICAgICAgICAyNCxcbiAgICAgICAgMzUsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjM0LFxuICAgICAgICAyMzYsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTA2LFxuICAgICAgICAyMTUsXG4gICAgICAgIDg2LFxuICAgICAgICAyMTEsXG4gICAgICAgIDExMixcbiAgICAgICAgNTksXG4gICAgICAgIDc4LFxuICAgICAgICAxNixcbiAgICAgICAgMjQ3LFxuICAgICAgICA3OSxcbiAgICAgICAgMTIsXG4gICAgICAgIDEyLFxuICAgICAgICA4LFxuICAgICAgICAxOTIsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTg3LFxuICAgICAgICAxMDIsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTg2LFxuICAgICAgICAyOSxcbiAgICAgICAgNzIsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTEyLFxuICAgICAgICA0NSxcbiAgICAgICAgNixcbiAgICAgICAgMTAzLFxuICAgICAgICAyNTEsXG4gICAgICAgIDMxLFxuICAgICAgICAyMixcbiAgICAgICAgOTgsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTA3LFxuICAgICAgICAxMjMsXG4gICAgICAgIDE5LFxuICAgICAgICAxMDgsXG4gICAgICAgIDU0LFxuICAgICAgICAxMDgsXG4gICAgICAgIDI3LFxuICAgICAgICAxMzcsXG4gICAgICAgIDdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDIwNyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJQL3lVdzF3Wk80eHlOYVRoSG1Rd1FSM3JzOVhpeTlyZnJUM0tVTlJKNW1NPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNDgxODk4NjIxNDVAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjNEODBGM0RBRDc2NzNBQjZGRjhBRENFNTRDMDE1NEZBXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTczMTQ5MzU1OVxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCIyeHhXc3NwMFM1ZThKRXY1VmVlS09RXCIsXG4gIFwicGhvbmVJZFwiOiBcImU3YmJjMjFmLTUwNjUtNGU5OC1hNzY4LWY5ZjU0Y2ZiODMwMVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNzcsXG4gICAgICAxNDMsXG4gICAgICAyMzAsXG4gICAgICAxOTMsXG4gICAgICAyMSxcbiAgICAgIDYwLFxuICAgICAgNSxcbiAgICAgIDY0LFxuICAgICAgMTMzLFxuICAgICAgMTA1LFxuICAgICAgNjYsXG4gICAgICA2NSxcbiAgICAgIDIyNyxcbiAgICAgIDEwNyxcbiAgICAgIDkxLFxuICAgICAgMTU5LFxuICAgICAgMjQ5LFxuICAgICAgMjE3LFxuICAgICAgMjQ2LFxuICAgICAgMTg2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDI0NyxcbiAgICAgIDEzOSxcbiAgICAgIDE1MSxcbiAgICAgIDg0LFxuICAgICAgMTk2LFxuICAgICAgMTAzLFxuICAgICAgMjQ3LFxuICAgICAgMTg5LFxuICAgICAgMjI4LFxuICAgICAgMzcsXG4gICAgICAyMTksXG4gICAgICAxNjcsXG4gICAgICAxNDEsXG4gICAgICA0MCxcbiAgICAgIDIyNyxcbiAgICAgIDM4LFxuICAgICAgMTM1LFxuICAgICAgMTA2LFxuICAgICAgMTI1LFxuICAgICAgMTI1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlpTNkVNV1lEXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ4MTg5ODYyMTQ1OjE2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwi4bWI4bagyrfwk4qI8JKGnPCTionigKLqqpxf4ai26quA6quA4oCi4oCn4oKKy5ouyovOucm+z4XWhi7LmuKCiuKAp+OAkPCThqPjgJFcIixcbiAgICBcImxpZFwiOiBcIjIzNzI1MDI1MjE0NDg2NzoxNkBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNQL2gxS0FIRUt6OTBia0dHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImdRS2ZWU0E0clQ3R0g3MytVWUE1d2p0YzF1WVRDU0dPc3RPUlpmcTQ1MVE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiRzdpOVNBWjdLNWpNa2xQUk9QRWh6ekxvVHJ5SGdDQ3pRSlNDOXBOdXFUeWdKbzk0dHY3SU4rb2l6K0U1MTd4bW5JTWdlMWZ2SEhXa25veEZYM0FzQnc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiYWU4NEVUZDZ4enJQVzhxTFAvenZvOVFETEdDOHNrMHU0YXF6dmdsUVNScGhXcHZHeTFFcjNaL2xOaE9uek1xSTBBcWF0N3FNRXIvM0UzVVY1YUxIQWc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0ODE4OTg2MjE0NToxNkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAzMixcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICA4NFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzMxNDkzNTUzXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


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
