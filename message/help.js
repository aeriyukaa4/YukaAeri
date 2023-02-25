import moment from "moment-timezone"
import fs from "fs"
import chalk from 'chalk'
import ms from "parse-ms"
import {runtime,kyun} from "../lib/myfunc.js" 
const timeWib = moment().tz('Asia/Jakarta').format('HH:mm:ss')
const timeWit= moment().tz('Asia/Makassar').format('HH:mm:ss')
const timeWita = moment().tz('Asia/Jayapura').format('HH:mm:ss')
moment.tz.setDefault("Asia/Jakarta").locale("id");

//Total fitur by Official Dittaz
const totalFitur = () =>{
var mytext = fs.readFileSync("./message/case.js").toString()
var numUpper = (mytext.match(/case '/g) || []).length;
return numUpper
}

const more = String.fromCharCode(8206)
const readmore = more.repeat(4001) 

let dt = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('a')
const ucapanWaktu = "Selamat "+dt.charAt(0).toUpperCase() + dt.slice(1)

let dot = new Date(new Date + 3600000)
const dateIslamic = Intl.DateTimeFormat("id" + '-TN-u-ca-islamic', {day: 'numeric',month: 'long',year: 'numeric'}).format(dot)

let yes = "*Error* ❌"
let no =""


const feat = (q) => {
let status = false
Object.keys(db.data.listerror).forEach((i) => {
if (db.data.listerror[i].cmd === q) {
status = true
}
})
return status
}

const app = `*▸*`
const apz = `*❏*`


export const allmenu =  ( limitCount, isPremium,thisHit, publik, sender, prefix, pushname) => {
return `*${botName}*
${week}, ${calender} 

 ❏ Running On : *${runWith}*
 ❏ Mode : ${publik ? "Public" : "Self"}
 ❏ Time : ${timeWib} WIB 
 ❏ Islamic : ${dateIslamic}
 ❏ Hit Today : ${thisHit.toLocaleString()}
 ❏ Total Feature : ${totalFitur()}
 ❏ Total Error : ${db.data.listerror.length}
 ❏ Total User : ${Object.keys(db.data.users).length}
 ❏ User Banned : ${db.data.banned.length}
					    `}

export const fitur = (prefix) => {
const data = global.db.data.others['newinfo']
const info = data ? data.info : ""

const timeInfo = data ? clockString(new Date - data.lastinfo)  : "tidak ada"
  
return`
${apz} *MENU DOWNLOAD*
${app} fb
${app} ig
${app} play
${app} tiktok
${app} twitter
${app} sfile
${app} zippy
${app} song
${app} mediafire
${app} gitclone
${app} ytmp4
${app} ytmp3
${app} gdrive
${app} whatmusic

${apz} *MENU STICKER*
${app} s
${app} gura
${app} doge
${app} patrick
${app} kiss
${app} bite
${app} yeet
${app} neko
${app} bully
${app} bonk
${app} wink
${app} poke
${app} nom
${app} slap
${app} smile
${app} wave
${app} awoo
${app} blush
${app} smug
${app} glomp
${app} happyy
${app} dance
${app} cringe
${app} cuddle
${app} highfive
${app} shinobu 
${app} megumin
${app} handhold

${apz} *MENU GROUP*
${app} ke qq Weda kick
${app} add
${app} promote
${app} demote
${app} closetime
${app} opentime
${app} revoke
${app} hidetag
${app} listoline
${app} afk
${app} ceksewa
${app} cekprem 
${app} ceklimit 
${app} ban
${app} unban
${app} listban
${app} addkick
${app} delkick
${app} moveongc
${app} out


${apz} *MENU TOOLS*
${app} ttp
${app} attp
${app} resize
${app} inspect
${app} tr
${app} ss
${app} runtime
${app} speed
${app} rules
${app} speedest
${app} volume
${app} transfer

${apz} *MENU COVERTER*
${app} tomp3
${app} tomp4
${app} toimg
${app} togif
${app} toptt


${apz} *MENU STORAGE*
${app} addvn
${app} addstik
${app} delvn 
${app} delstik
${app} liststik
${app} listvn 
${app} getallstik 


${apz} *MENU DATABASE*
${app} addcmdowner
${app} addcmdlimit
${app} addcmdprem
${app} addowner
${app} addprem
${app} addsewa
${app} blockcmd
${app} unblockcmd
${app} delowner
${app} delprem
${app} delowner
${app} delcmdowner
${app} delcmdlimit
${app} delcmdprem
${app} listcmdowner
${app} listblockcmd
${app} listprem
${app} listsewa
${app} listowner
${app} listcmdlimit

${apz} *SETTING BOT*
${app} setmenu
${app} setnamebot
${app} setppbot
${app} setimgreply
${app} setimgquoted
${app} setimgdoc   

${apz} *MENU GAME*
${app} family100
${app} math
${app} caklontong


${apz} *MENU DEPELOVER*
${app} banchat
${app} public
${app} self
${app} > evalcode
${app} $ executor
${app} join
${app} bcgc
${app} ambilcase
${app} getfile
${app} restart
${app} delsampah
${app} delchat
${app} listblock
${app} sendbug
${app} savefile
${app} buggc
${app} out
${app} Verify
${app} listgc


❏ *THANKS TO* 
• Lana
• dittaz 
• irfan haryanto ( base ori )

`+'𝘗𝘰𝘸𝘦𝘳𝘦𝘥 𝘉𝘺 𝘕𝘰𝘥𝘦𝘫𝘴'
}
// !! JANGAN DI HAPUS THANKS TO !!
// SCRIPT DI KEMBANGKAN OLEH : LANA DEV
// EROR?? WA : 085773089737
// JANGAN DI HAPUS ASU
// JUAL SCRIPT?? NERAKA PALING BAWAH!!

//===================//
  //https://maulanabot.my.id//



