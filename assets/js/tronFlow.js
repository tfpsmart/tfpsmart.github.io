const _0x25c7=['#aff4','split','defaultAddress','api/events/last-day','\x20TRX','address','#last2ad','.deduction','#withdrawed','last3','TronWeb\x20is\x20not\x20Connected','topFiveTrans','1ckbOlO','#statsactivecap','#accountRef','aff1sum','prop','314928tpaayM','last5ad','Insufficient\x20Balance','base58','setTimeout','#last-day-','top5ad','#last0','aff5sum','1381Tctuuf','#sponsoraddress','#statscigenerated','location','lasttop2','1292793emyqvj','lasttop3ad','top5','#top3ad','#last4ad','d-none','deposit','toString','#contbalance','api/events/today?userAddress=','#withhour','lasttop5ad','#refrewards','#statscipending','lasttop1ad','#aff1','user','setSelectionRange','fromHex','getProfit','execCommand','affFrom','Tron\x20LINK\x20is\x20disconnected.\x20Please\x20Refresh!','last2ad','Minimum\x20Amount\x20is\x201000\x20TRX','top1','playerdeposit','#refererAddress','trx','last3ad','#aff5','#lasttop3ad','last5','#aff44','-link','#statsciwith','#lasttop4ad','floor','#invested','#top1','success','trxDeposit','#last2','#statstotalprof','#lasttop2','json','#last3ad','#address','-msg','replace','forEach','then','join','#popup-','#top2','lastFiveTrans','https://tronscan.org/#/transaction/','val','HashId:','lasttop4','You\x20have\x20no\x20Sponsor','#withdrawableAmount','last1','addClass','HttpProvider','getElementById','withdrawtime','#top5ad','#lasttop1ad','withdraw','#aff2','lasttop1','error','#custom-popover-msg','#lasttop5','#last-','text','#statsinaccap','\x20minutes\x20:\x20','accountRef','You\x20Already\x20have\x20a\x20Sponsor','.popup','fromSun','#lasttop1','#withday','#aff11','disabled','913UDhOiZ','#top1ad','players','#deposits','amount','#balance','#top4','show','You\x20need\x20a\x20few(95-105)\x20TRX\x20in\x20your\x20wallet\x20to\x20make\x20an\x20transaction','Hash\x20ID:','tronWeb','#top5','#withdrawal-new-balance','TJ9Suno4rZWSUCkr9MsqrJv66s9EkxpqZB','top1ad','TUmLrD2L8bjig68Hw7kzqa6aTmkkVxjmGv','result','last2','-amount','#lasttop4','toSun','\x20days\x20:\x20','last4','#totalInvestors','#today-','send','#withsec','swing','toFixed','select','#reinvest-new-balance','value','Unable\x20to\x20connect\x20to\x20Wallet.\x20Try\x20Refreshing\x20the\x20site.','now','top2','setAddress','last0ad','#top4ad','providers','#userpayout','https://api.trongrid.io/','#aff33','#lasttop3','transaction_id','#aff3','Deposit\x20Successful','removeClass','.custom-popover','playerreinvest','#lasttop5ad','#totalWithdrawable','search','\x20seconds','#withminute','_id','956517YQfgSa','totalInvested','1014959uoIlug','https://api.trongrid.io','animate','aff4sum','attr','#insur','#aff55','top3ad','Account\x20Changed.','last4ad','#deposits22','contract','payoutSum','has','#actualCapital','104081NenzNq','#last1','999568NBeuOZ','#top3','#refrewards2','ref','api/events/today','toHex','-popover','-address','top4','#depositAmount','Withdraw\x20Successful','info','last1ad','call','#statstotaldouble','https://tronflowplus.herokuapp.com/','aff3sum','href','#withdrawal','html','Your\x20countdown\x20to\x20withdraw\x20is\x20not\x20finished','#statsreinvest','#last0ad','getBalance','top4ad','Connected\x20to\x20Tron\x20LINK.','lasttop3','top3','T9yD14Nj9j7xAB4dbGeiX9h8unkKHxuWwb','affRewards','toNumber'];const _0x5e59=function(_0x176e5f,_0x4fe965){_0x176e5f=_0x176e5f-0xdc;let _0x25c7cd=_0x25c7[_0x176e5f];return _0x25c7cd;};const _0x1c715e=_0x5e59;(function(_0x4ad36f,_0x30e7a9){const _0x4b346b=_0x5e59;while(!![]){try{const _0x39e8e6=parseInt(_0x4b346b(0xf3))+parseInt(_0x4b346b(0x144))+parseInt(_0x4b346b(0xf5))+parseInt(_0x4b346b(0x19b))*-parseInt(_0x4b346b(0x13f))+-parseInt(_0x4b346b(0x136))+parseInt(_0x4b346b(0x131))*-parseInt(_0x4b346b(0x106))+parseInt(_0x4b346b(0x104));if(_0x39e8e6===_0x30e7a9)break;else _0x4ad36f['push'](_0x4ad36f['shift']());}catch(_0x5d3a04){_0x4ad36f['push'](_0x4ad36f['shift']());}}}(_0x25c7,0xc19a9));let currentAccount,lastTransactionTime,invested,params,amountuser,statstotalprof,walletTronWeb,contract,siteLoading=!![],acctConnected=![],lastTrans=null;const defaultSponsor=_0x1c715e(0x1a8),contractAddress=_0x1c715e(0x1aa),serverUrl=_0x1c715e(0x115),tronScan=_0x1c715e(0x17c);function startInterval(_0x2919e0,_0x4b8586){return _0x4b8586(),setInterval(_0x4b8586,_0x2919e0*0x3e8);}const copy=()=>{const _0x3ef13b=_0x1c715e;var _0x53d645=document['getElementById'](_0x3ef13b(0x193));_0x53d645[_0x3ef13b(0x1b8)](),_0x53d645[_0x3ef13b(0x155)](0x0,0x1869f),document[_0x3ef13b(0x158)]('copy'),showPopup('Copied','success');},thousandsSeparators=_0x16e2ae=>{const _0x497d23=_0x1c715e;var _0x7076d5=_0x16e2ae[_0x497d23(0x14b)]()[_0x497d23(0x126)]('.');return _0x7076d5[0x0]=_0x7076d5[0x0][_0x497d23(0x175)](/\B(?=(\d{3})+(?!\d))/g,','),_0x7076d5[_0x497d23(0x178)]('.');},showPopup=(_0x137167,_0xa3e8a6,_0x14c5b0=0x4)=>{const _0x2e8cfc=_0x1c715e;$(_0x2e8cfc(0x179)+_0xa3e8a6+_0x2e8cfc(0x174))[_0x2e8cfc(0x119)](_0x137167),$(_0x2e8cfc(0x195))[_0x2e8cfc(0xea)](_0x2e8cfc(0x1a2)),$('.'+_0xa3e8a6+_0x2e8cfc(0x10c))[_0x2e8cfc(0x183)](_0x2e8cfc(0x1a2)),_0x14c5b0&&window['setTimeout'](()=>{const _0x5b7612=_0x2e8cfc;$('.'+_0xa3e8a6+_0x5b7612(0x10c))[_0x5b7612(0xea)]('show');},_0x14c5b0*0x3e8);},runCounter=(_0xc930fa,_0x54c394)=>{const _0x2ed6f5=_0x1c715e;$({'Counter':0x0})[_0x2ed6f5(0xf7)]({'Counter':_0x54c394},{'duration':0x3e8,'easing':_0x2ed6f5(0x1b6),'step':function(_0x28f3e2){const _0x1967dd=_0x2ed6f5;$(_0xc930fa)[_0x1967dd(0x17d)](_0x28f3e2[_0x1967dd(0x1b7)](0x6));}});},newTransaction=_0x1c09b3=>{const _0x3a5ff8=_0x1c715e;$(_0x3a5ff8(0x18d))['html'](_0x1c09b3+'\x20TRX\x20Deposited'),$(_0x3a5ff8(0xeb))[_0x3a5ff8(0x183)]('custom-popover-active'),window[_0x3a5ff8(0x13a)](()=>{const _0x5e328d=_0x3a5ff8;$(_0x5e328d(0xeb))[_0x5e328d(0xea)]('custom-popover-active');},0xbb8);},HttpProvider=TronWeb[_0x1c715e(0xe2)][_0x1c715e(0x184)],fullNode=new HttpProvider('https://api.trongrid.io'),solidityNode=new HttpProvider(_0x1c715e(0xf6)),eventServer=_0x1c715e(0xe4),customTronWeb=new TronWeb(fullNode,solidityNode,eventServer);customTronWeb[_0x1c715e(0xdf)](contractAddress);function getDataFromServer(){const _0x485982=_0x1c715e;let _0x311681=serverUrl+_0x485982(0x10a);if(currentAccount){const _0x54bfcb='0x'+customTronWeb[_0x485982(0x12a)][_0x485982(0x10b)](currentAccount)['substr'](0x2);_0x311681=serverUrl+_0x485982(0x14d)+_0x54bfcb;}fetch(_0x311681)[_0x485982(0x177)](_0x3c6275=>_0x3c6275[_0x485982(0x171)]())[_0x485982(0x177)](_0xa979b2=>{const _0x5aa4c3=_0x485982;if(_0xa979b2[_0x5aa4c3(0x154)]){let _0x5c475a=customTronWeb[_0x5aa4c3(0x196)](_0xa979b2['user'][_0x5aa4c3(0x19f)]);amountuser=_0x5c475a,$(_0x5aa4c3(0xff))[_0x5aa4c3(0x190)](_0x5c475a);}else $(_0x5aa4c3(0xff))[_0x5aa4c3(0x190)](0x0);_0xa979b2[_0x5aa4c3(0x130)]['forEach']((_0x162a6f,_0x410a1a)=>{const _0x377a3d=_0x5aa4c3;let _0x2d3229=customTronWeb[_0x377a3d(0x196)](_0x162a6f['result'][_0x377a3d(0x19f)]);$(_0x377a3d(0x1b3)+_0x410a1a)[_0x377a3d(0xea)](_0x377a3d(0x149)),$(_0x377a3d(0x1b3)+_0x410a1a+'-amount')[_0x377a3d(0x190)](parseFloat(_0x2d3229)[_0x377a3d(0x1b7)](0x2)+_0x377a3d(0x129)),$(_0x377a3d(0x1b3)+_0x410a1a+_0x377a3d(0x10d))[_0x377a3d(0x17d)](customTronWeb[_0x377a3d(0x12a)][_0x377a3d(0x156)](_0x162a6f[_0x377a3d(0x1ab)]['user'])),$('#today-'+_0x410a1a+_0x377a3d(0x166))[_0x377a3d(0xf9)](_0x377a3d(0x117),''+tronScan+_0x162a6f[_0x377a3d(0xe7)]);}),_0xa979b2[_0x5aa4c3(0x17b)][_0x5aa4c3(0x176)]((_0x238370,_0x229a2b)=>{const _0x58fe5f=_0x5aa4c3;let _0x1a1c46=customTronWeb[_0x58fe5f(0x196)](_0x238370[_0x58fe5f(0x1ab)][_0x58fe5f(0x19f)]);_0x229a2b==0x0&&(lastTrans&&lastTrans!=_0x238370[_0x58fe5f(0xf2)]?(newTransaction(_0x1a1c46),lastTrans=_0x238370['_id']):lastTrans=_0x238370['_id']),$(_0x58fe5f(0x18f)+_0x229a2b)[_0x58fe5f(0xea)](_0x58fe5f(0x149)),$(_0x58fe5f(0x18f)+_0x229a2b+_0x58fe5f(0x1ad))[_0x58fe5f(0x190)](parseFloat(_0x1a1c46)[_0x58fe5f(0x1b7)](0x2)+_0x58fe5f(0x129)),$(_0x58fe5f(0x18f)+_0x229a2b+_0x58fe5f(0x10d))['val'](customTronWeb['address'][_0x58fe5f(0x156)](_0x238370[_0x58fe5f(0x1ab)][_0x58fe5f(0x154)])),$('#last-'+_0x229a2b+_0x58fe5f(0x166))[_0x58fe5f(0xf9)](_0x58fe5f(0x117),''+tronScan+_0x238370[_0x58fe5f(0xe7)]);});});}startInterval(0x1e,getDataFromServer);function getLastDayTopDeposits(){const _0x8d01ec=_0x1c715e;fetch(serverUrl+_0x8d01ec(0x128))[_0x8d01ec(0x177)](_0x111bb9=>_0x111bb9[_0x8d01ec(0x171)]())[_0x8d01ec(0x177)](_0x520380=>{_0x520380['forEach']((_0x15f0bc,_0x1509f6)=>{const _0x4eea54=_0x5e59;let _0x5bdc86=customTronWeb[_0x4eea54(0x196)](_0x15f0bc[_0x4eea54(0x1ab)][_0x4eea54(0x19f)]);$(_0x4eea54(0x13b)+_0x1509f6)[_0x4eea54(0xea)]('d-none'),$(_0x4eea54(0x13b)+_0x1509f6+_0x4eea54(0x1ad))['text'](parseFloat(_0x5bdc86)[_0x4eea54(0x1b7)](0x2)+_0x4eea54(0x129)),$(_0x4eea54(0x13b)+_0x1509f6+_0x4eea54(0x10d))[_0x4eea54(0x17d)](customTronWeb[_0x4eea54(0x12a)][_0x4eea54(0x156)](_0x15f0bc['result'][_0x4eea54(0x154)])),$(_0x4eea54(0x13b)+_0x1509f6+'-link')[_0x4eea54(0xf9)](_0x4eea54(0x117),''+tronScan+_0x15f0bc[_0x4eea54(0xe7)]);});});}getLastDayTopDeposits(),$(document)['ready'](async()=>{const _0x1e7b48=_0x1c715e,_0x3670d7=new URL(window[_0x1e7b48(0x142)]);params=new URLSearchParams(_0x3670d7[_0x1e7b48(0xef)]),loadContract();window[_0x1e7b48(0x1a5)]&&window[_0x1e7b48(0x1a5)]['ready']&&(walletTronWeb=window[_0x1e7b48(0x1a5)],loadNewContract());const _0x2f2797=setInterval(()=>{const _0x250743=_0x1e7b48;if(walletTronWeb)clearInterval(_0x2f2797);else window[_0x250743(0x1a5)]&&window['tronWeb']['ready']&&(walletTronWeb=window[_0x250743(0x1a5)],loadNewContract());},0xc8);setTimeout(()=>{const _0x2122d9=_0x1e7b48;!walletTronWeb&&(clearInterval(_0x2f2797),showPopup(_0x2122d9(0xdc),'error',0xf));},0x3a98);});const getTotalInvested=async()=>{const _0x500e7e=_0x1c715e;let _0x351b6d=await contract[_0x500e7e(0xf4)]()[_0x500e7e(0x113)]();$('#totalInvested')[_0x500e7e(0x190)](thousandsSeparators(parseInt(_0x351b6d['toNumber']()/0xf4240)));},getTotalInvestors=async()=>{const _0x27a066=_0x1c715e;let _0x4128aa=await contract['totalPlayers']()[_0x27a066(0x113)]();$(_0x27a066(0x1b2))['text'](thousandsSeparators(_0x4128aa[_0x27a066(0x124)]()));},getBalanceOfContract=async()=>{const _0x2b7d65=_0x1c715e;return customTronWeb[_0x2b7d65(0x160)][_0x2b7d65(0x11d)](contractAddress)[_0x2b7d65(0x177)](_0x5733f1=>{const _0x3456d2=_0x2b7d65,_0x5e1890=parseInt(_0x5733f1/0xf4240);return _0x5e1890?$(_0x3456d2(0x14c))[_0x3456d2(0x190)](thousandsSeparators(_0x5e1890)):$(_0x3456d2(0x14c))[_0x3456d2(0x190)](0x0),_0x5e1890;});},getLastfive=async()=>{const _0x4e7439=_0x1c715e;let _0x442934=document[_0x4e7439(0x185)](_0x4e7439(0xe0))[_0x4e7439(0x1ba)],_0x3fd588=await contract[_0x4e7439(0x182)]()['call'](),_0x1cd135=await contract[_0x4e7439(0x112)]()[_0x4e7439(0x113)](),_0xd3234d=await contract[_0x4e7439(0x1ac)]()[_0x4e7439(0x113)](),_0x24c991=await contract[_0x4e7439(0x15b)]()[_0x4e7439(0x113)](),_0x558792=await contract[_0x4e7439(0x12e)]()['call'](),_0x6b3b91=await contract[_0x4e7439(0x161)]()[_0x4e7439(0x113)](),_0x50cbaf=await contract[_0x4e7439(0x1b1)]()['call'](),_0x463682=await contract[_0x4e7439(0xfe)]()[_0x4e7439(0x113)](),_0x2c0c71=await contract[_0x4e7439(0x164)]()['call'](),_0x2560c1=await contract[_0x4e7439(0x137)]()[_0x4e7439(0x113)](),_0x503cdb=customTronWeb[_0x4e7439(0x12a)][_0x4e7439(0x156)](_0x1cd135);if(_0x442934!=_0x503cdb&&_0x442934!=''){let _0x66c3c3=parseFloat(_0x3fd588/0xf4240)['toFixed'](0x2);newTransaction(_0x66c3c3);}$(_0x4e7439(0x13d))[_0x4e7439(0x190)](parseFloat(_0x3fd588/0xf4240)[_0x4e7439(0x1b7)](0x2)+_0x4e7439(0x129)),$(_0x4e7439(0x11c))[_0x4e7439(0x17d)](customTronWeb[_0x4e7439(0x12a)][_0x4e7439(0x156)](_0x1cd135)),$(_0x4e7439(0x105))[_0x4e7439(0x190)](parseFloat(_0xd3234d/0xf4240)[_0x4e7439(0x1b7)](0x2)+_0x4e7439(0x129)),$('#last1ad')[_0x4e7439(0x17d)](customTronWeb['address'][_0x4e7439(0x156)](_0x24c991)),$(_0x4e7439(0x16e))[_0x4e7439(0x190)](parseFloat(_0x558792/0xf4240)['toFixed'](0x2)+_0x4e7439(0x129)),$(_0x4e7439(0x12b))[_0x4e7439(0x17d)](customTronWeb[_0x4e7439(0x12a)][_0x4e7439(0x156)](_0x6b3b91)),$('#last3')[_0x4e7439(0x190)](parseFloat(_0x50cbaf/0xf4240)[_0x4e7439(0x1b7)](0x2)+_0x4e7439(0x129)),$(_0x4e7439(0x172))[_0x4e7439(0x17d)](customTronWeb[_0x4e7439(0x12a)][_0x4e7439(0x156)](_0x463682)),$('#last4')[_0x4e7439(0x190)](parseFloat(_0x2c0c71/0xf4240)['toFixed'](0x2)+_0x4e7439(0x129)),$(_0x4e7439(0x148))[_0x4e7439(0x17d)](customTronWeb[_0x4e7439(0x12a)]['fromHex'](_0x2560c1));},getTopfive=async()=>{const _0x3b192e=_0x1c715e;let _0x3bc3d7=await contract[_0x3b192e(0x15d)]()['call'](),_0x2ec81e=await contract[_0x3b192e(0x1a9)]()[_0x3b192e(0x113)](),_0x26908d=await contract[_0x3b192e(0xde)]()[_0x3b192e(0x113)](),_0x42271e=await contract['top2ad']()[_0x3b192e(0x113)](),_0x48f857=await contract[_0x3b192e(0x121)]()[_0x3b192e(0x113)](),_0x9d825=await contract[_0x3b192e(0xfc)]()[_0x3b192e(0x113)](),_0x47b103=await contract[_0x3b192e(0x10e)]()[_0x3b192e(0x113)](),_0x388b4c=await contract[_0x3b192e(0x11e)]()[_0x3b192e(0x113)](),_0x1ee8e1=await contract[_0x3b192e(0x146)]()[_0x3b192e(0x113)](),_0x492b03=await contract[_0x3b192e(0x13c)]()['call'](),_0x8310af=await contract[_0x3b192e(0x18b)]()['call'](),_0x478108=await contract[_0x3b192e(0x152)]()[_0x3b192e(0x113)](),_0x40b6fd=await contract[_0x3b192e(0x143)]()[_0x3b192e(0x113)](),_0x58bbfe=await contract['lasttop2ad']()[_0x3b192e(0x113)](),_0x1d88ad=await contract[_0x3b192e(0x120)]()[_0x3b192e(0x113)](),_0x5c7d93=await contract[_0x3b192e(0x145)]()[_0x3b192e(0x113)](),_0x3a0f0e=await contract[_0x3b192e(0x17f)]()[_0x3b192e(0x113)](),_0x4d4ca8=await contract['lasttop4ad']()[_0x3b192e(0x113)](),_0x30c8d4=await contract['lasttop5']()['call'](),_0x45f487=await contract[_0x3b192e(0x14f)]()['call']();$(_0x3b192e(0x16b))[_0x3b192e(0x190)](parseFloat(_0x3bc3d7/0xf4240)[_0x3b192e(0x1b7)](0x2)+_0x3b192e(0x129)),$(_0x3b192e(0x19c))[_0x3b192e(0x17d)](customTronWeb['address'][_0x3b192e(0x156)](_0x2ec81e)),$(_0x3b192e(0x17a))['text'](parseFloat(_0x26908d/0xf4240)[_0x3b192e(0x1b7)](0x2)+_0x3b192e(0x129)),$('#top2ad')[_0x3b192e(0x17d)](customTronWeb['address'][_0x3b192e(0x156)](_0x42271e)),$(_0x3b192e(0x107))[_0x3b192e(0x190)](parseFloat(_0x48f857/0xf4240)['toFixed'](0x2)+_0x3b192e(0x129)),$(_0x3b192e(0x147))['val'](customTronWeb['address'][_0x3b192e(0x156)](_0x9d825)),$(_0x3b192e(0x1a1))[_0x3b192e(0x190)](parseFloat(_0x47b103/0xf4240)[_0x3b192e(0x1b7)](0x2)+_0x3b192e(0x129)),$(_0x3b192e(0xe1))[_0x3b192e(0x17d)](customTronWeb['address'][_0x3b192e(0x156)](_0x388b4c)),$(_0x3b192e(0x1a6))[_0x3b192e(0x190)](parseFloat(_0x1ee8e1/0xf4240)[_0x3b192e(0x1b7)](0x2)+_0x3b192e(0x129)),$(_0x3b192e(0x187))[_0x3b192e(0x17d)](customTronWeb[_0x3b192e(0x12a)]['fromHex'](_0x492b03)),$(_0x3b192e(0x197))['text'](parseFloat(_0x8310af/0xf4240)[_0x3b192e(0x1b7)](0x2)+_0x3b192e(0x129)),$(_0x3b192e(0x188))[_0x3b192e(0x17d)](customTronWeb[_0x3b192e(0x12a)]['fromHex'](_0x478108)),$(_0x3b192e(0x170))[_0x3b192e(0x190)](parseFloat(_0x40b6fd/0xf4240)[_0x3b192e(0x1b7)](0x2)+_0x3b192e(0x129)),$('#lasttop2ad')[_0x3b192e(0x17d)](customTronWeb['address'][_0x3b192e(0x156)](_0x58bbfe)),$(_0x3b192e(0xe6))[_0x3b192e(0x190)](parseFloat(_0x1d88ad/0xf4240)['toFixed'](0x2)+_0x3b192e(0x129)),$(_0x3b192e(0x163))[_0x3b192e(0x17d)](customTronWeb[_0x3b192e(0x12a)][_0x3b192e(0x156)](_0x5c7d93)),$(_0x3b192e(0x1ae))[_0x3b192e(0x190)](parseFloat(_0x3a0f0e/0xf4240)[_0x3b192e(0x1b7)](0x2)+_0x3b192e(0x129)),$(_0x3b192e(0x168))[_0x3b192e(0x17d)](customTronWeb[_0x3b192e(0x12a)][_0x3b192e(0x156)](_0x4d4ca8)),$(_0x3b192e(0x18e))['text'](parseFloat(_0x30c8d4/0xf4240)[_0x3b192e(0x1b7)](0x2)+'\x20TRX'),$(_0x3b192e(0xed))[_0x3b192e(0x17d)](customTronWeb[_0x3b192e(0x12a)][_0x3b192e(0x156)](_0x45f487));},contractData=()=>{getTotalInvested(),getTotalInvestors(),getBalanceOfContract();},loadContract=async()=>{contract=await customTronWeb['contract']()['at'](contractAddress),startInterval(0x1e,contractData);},loadNewContract=async()=>{const _0x317aa0=_0x1c715e;contract=await walletTronWeb['contract']()['at'](contractAddress),walletTronWeb[_0x317aa0(0x127)][_0x317aa0(0x139)]?(showPopup(_0x317aa0(0x11f),_0x317aa0(0x16c)),acctConnected=!![],startInterval(0x5,accountData)):showPopup('Unable\x20to\x20Connect\x20to\x20your\x20Account\x20in\x20Wallet.',_0x317aa0(0x18c));},getDeposit=async()=>{const _0x2c07e6=_0x1c715e;let _0x57cab3=await contract[_0x2c07e6(0x19d)](currentAccount)[_0x2c07e6(0x113)]();const _0x99c02e=_0x57cab3[_0x2c07e6(0x16d)][_0x2c07e6(0x124)]()/0xf4240;return _0x99c02e[_0x2c07e6(0x1b7)](0x6);},getProfit=async()=>{const _0x2a816d=_0x1c715e;return await contract[_0x2a816d(0x157)](currentAccount)['call']();},getBalanceOfAccount=async()=>{const _0x55e8c2=_0x1c715e;return walletTronWeb[_0x55e8c2(0x160)]['getBalance'](currentAccount)[_0x55e8c2(0x177)](_0x1f63d2=>{const _0x5632b0=_0x55e8c2,_0x3d4f91=parseInt(_0x1f63d2/0xf4240);return _0x3d4f91?$('#balance')['text'](_0x3d4f91):$(_0x5632b0(0x1a0))[_0x5632b0(0x190)](0x0),_0x3d4f91;});},secondsToDhms=async()=>{const _0x884bff=_0x1c715e;let _0x47d039=await contract[_0x884bff(0x19d)](currentAccount)['call'](),_0x234c27=Math['floor'](Date['now']()/0x3e8),_0x35a114=_0x47d039[_0x884bff(0x186)][_0x884bff(0x124)](),_0x599290=Number(parseFloat(_0x35a114)-parseFloat(_0x234c27));_0x599290<0x0&&(_0x599290=0x0);;let _0x5a2055=Math[_0x884bff(0x169)](_0x599290/(0xe10*0x18)),_0x3780ae=Math[_0x884bff(0x169)](_0x599290%(0xe10*0x18)/0xe10),_0x3ffb7c=Math[_0x884bff(0x169)](_0x599290%0xe10/0x3c),_0x10426b=Math[_0x884bff(0x169)](_0x599290%0x3c);$(_0x884bff(0x198))['text'](_0x5a2055+_0x884bff(0x1b0)),$(_0x884bff(0x14e))['text'](_0x3780ae+'\x20hours\x20:\x20'),$(_0x884bff(0xf1))[_0x884bff(0x190)](_0x3ffb7c+_0x884bff(0x192)),$(_0x884bff(0x1b5))[_0x884bff(0x190)](_0x10426b+_0x884bff(0xf0));},getUserStats=async()=>{const _0x4f8ccc=_0x1c715e;let _0x32ea22=await contract['players'](currentAccount)[_0x4f8ccc(0x113)]();$('#address2')[_0x4f8ccc(0x190)](currentAccount);const _0xeec3ce=_0x32ea22[_0x4f8ccc(0x101)][_0x4f8ccc(0x124)]()/0xf4240*0xa/0x7;$(_0x4f8ccc(0xe3))[_0x4f8ccc(0x190)](_0xeec3ce[_0x4f8ccc(0x1b7)](0x2));const _0x55b169=_0x32ea22[_0x4f8ccc(0x159)],_0x34cd56=walletTronWeb['address'][_0x4f8ccc(0x156)](_0x55b169);_0x34cd56==_0x4f8ccc(0x122)?$(_0x4f8ccc(0x140))[_0x4f8ccc(0x190)](_0x4f8ccc(0x180)):$(_0x4f8ccc(0x140))[_0x4f8ccc(0x190)](_0x34cd56);const _0x52e872=_0x32ea22[_0x4f8ccc(0x15e)][_0x4f8ccc(0x124)]()/0xf4240;$(_0x4f8ccc(0x19e))['text'](_0x52e872[_0x4f8ccc(0x1b7)](0x2));const _0x3b78c1=_0x32ea22[_0x4f8ccc(0x123)][_0x4f8ccc(0x124)]()/0xf4240,_0x5da872=_0x32ea22[_0x4f8ccc(0x134)][_0x4f8ccc(0x124)](),_0x3aa0c9=_0x32ea22['aff2sum']['toNumber'](),_0x37db93=_0x32ea22[_0x4f8ccc(0x116)][_0x4f8ccc(0x124)](),_0x444177=_0x32ea22[_0x4f8ccc(0xf8)][_0x4f8ccc(0x124)](),_0x152300=_0x32ea22[_0x4f8ccc(0x13e)][_0x4f8ccc(0x124)]();$(_0x4f8ccc(0x150))[_0x4f8ccc(0x190)](_0x3b78c1['toFixed'](0x2)),$(_0x4f8ccc(0x153))[_0x4f8ccc(0x190)](_0x5da872),$(_0x4f8ccc(0x18a))['text'](_0x3aa0c9),$(_0x4f8ccc(0xe8))['text'](_0x37db93),$(_0x4f8ccc(0x125))[_0x4f8ccc(0x190)](_0x444177),$(_0x4f8ccc(0x162))[_0x4f8ccc(0x190)](_0x152300),$(_0x4f8ccc(0x108))[_0x4f8ccc(0x190)](_0x3b78c1[_0x4f8ccc(0x1b7)](0x2)),$(_0x4f8ccc(0x199))['text'](_0x5da872),$('#aff22')[_0x4f8ccc(0x190)](_0x3aa0c9),$(_0x4f8ccc(0xe5))[_0x4f8ccc(0x190)](_0x37db93),$(_0x4f8ccc(0x165))['text'](_0x444177),$(_0x4f8ccc(0xfb))[_0x4f8ccc(0x190)](_0x152300),$(_0x4f8ccc(0x132))[_0x4f8ccc(0x190)](invested);const _0x39e872=_0x32ea22[_0x4f8ccc(0xec)][_0x4f8ccc(0x124)]()/0xf4240;$(_0x4f8ccc(0x11b))[_0x4f8ccc(0x190)](_0x39e872[_0x4f8ccc(0x1b7)](0x2)),$(_0x4f8ccc(0x191))['text'](parseFloat(parseFloat($(_0x4f8ccc(0x11b))[_0x4f8ccc(0x190)]()/0x2)+parseFloat($(_0x4f8ccc(0xe3))[_0x4f8ccc(0x190)]()/0x2))[_0x4f8ccc(0x1b7)](0x2)),$('#statstotalcap')[_0x4f8ccc(0x190)](parseFloat(parseFloat($(_0x4f8ccc(0x191))[_0x4f8ccc(0x190)]())+parseFloat(invested))[_0x4f8ccc(0x1b7)](0x2)),$(_0x4f8ccc(0x167))['text'](parseFloat(parseFloat($(_0x4f8ccc(0x11b))[_0x4f8ccc(0x190)]())+parseFloat($(_0x4f8ccc(0xe3))[_0x4f8ccc(0x190)]()))[_0x4f8ccc(0x1b7)](0x2)),$(_0x4f8ccc(0x141))[_0x4f8ccc(0x190)](parseFloat(parseFloat($(_0x4f8ccc(0x11b))[_0x4f8ccc(0x190)]())+parseFloat($('#userpayout')[_0x4f8ccc(0x190)]())+parseFloat(statstotalprof))[_0x4f8ccc(0x1b7)](0x2)),$(_0x4f8ccc(0x114))['text'](parseFloat(parseFloat(parseFloat($(_0x4f8ccc(0x191))[_0x4f8ccc(0x190)]())+parseFloat(invested))*0x2)[_0x4f8ccc(0x1b7)](0x2)),$(_0x4f8ccc(0x151))[_0x4f8ccc(0x190)](parseFloat(parseFloat($(_0x4f8ccc(0x114))[_0x4f8ccc(0x190)]())-parseFloat($(_0x4f8ccc(0x141))[_0x4f8ccc(0x190)]()))[_0x4f8ccc(0x1b7)](0x2));},accountData=async()=>{const _0x3ff234=_0x1c715e;if(walletTronWeb['defaultAddress'][_0x3ff234(0x139)]){currentAccount&&currentAccount!==walletTronWeb['defaultAddress'][_0x3ff234(0x139)]?(currentAccount=walletTronWeb[_0x3ff234(0x127)]['base58'],showPopup(_0x3ff234(0xfd),_0x3ff234(0x16c))):currentAccount=walletTronWeb[_0x3ff234(0x127)][_0x3ff234(0x139)];$(_0x3ff234(0x173))[_0x3ff234(0x190)](currentAccount),getUserStats(),secondsToDhms(),invested=await getDeposit();let _0x1ad3a8,_0xe8cab7,_0x2fa620;if(parseInt(invested)>0x0)_0x1ad3a8=await getProfit(contract),_0xe8cab7=(_0x1ad3a8[_0x3ff234(0x124)]()/0xf4240)['toFixed'](0x6),_0x2fa620=(_0x1ad3a8['toNumber']()/0x1e8480)[_0x3ff234(0x1b7)](0x6),statstotalprof=(_0x1ad3a8[_0x3ff234(0x124)]()/0xf4240)[_0x3ff234(0x1b7)](0x6),$(_0x3ff234(0x16f))[_0x3ff234(0x190)](statstotalprof),$(_0x3ff234(0x15f))[_0x3ff234(0x17d)]('You\x20Already\x20have\x20a\x20Sponsor'),$(_0x3ff234(0x15f))[_0x3ff234(0x135)](_0x3ff234(0x19a),!![]),$(_0x3ff234(0x133))[_0x3ff234(0x17d)]('https://tronflowplus.net/?ref='+currentAccount);else{if(params[_0x3ff234(0x102)](_0x3ff234(0x109)))$('#refererAddress')['prop'](_0x3ff234(0x19a),!![]),$('#refererAddress')[_0x3ff234(0x17d)](params['get'](_0x3ff234(0x109)));else $('#refererAddress')['val']()==_0x3ff234(0x194)&&($(_0x3ff234(0x15f))['prop']('disabled',![]),$(_0x3ff234(0x15f))[_0x3ff234(0x17d)](''));$(_0x3ff234(0x133))['val']('You\x20need\x20to\x20invest\x20at\x20least\x201000\x20TRX\x20to\x20activate\x20the\x20referral\x20link.'),invested=_0xe8cab7=_0x2fa620=0x0;}siteLoading?(siteLoading=![],runCounter(_0x3ff234(0x103),invested),runCounter('#withdrawableAmount',_0x2fa620),runCounter('#withdrawableInterest',_0x2fa620),runCounter('#totalWithdrawable',_0xe8cab7)):($(_0x3ff234(0x103))[_0x3ff234(0x17d)](invested),$(_0x3ff234(0x181))[_0x3ff234(0x17d)](_0x2fa620),$('#withdrawableInterest')[_0x3ff234(0x17d)](_0x2fa620),$(_0x3ff234(0xee))[_0x3ff234(0x17d)](_0xe8cab7)),$(_0x3ff234(0x12c))[_0x3ff234(0x190)](_0x2fa620),$(_0x3ff234(0x16a))[_0x3ff234(0x190)](_0xe8cab7),$(_0x3ff234(0x12d))[_0x3ff234(0x190)](_0xe8cab7),$(_0x3ff234(0x118))[_0x3ff234(0x190)]((_0xe8cab7*0x2/0xa)[_0x3ff234(0x1b7)](0x6)),$(_0x3ff234(0xfa))[_0x3ff234(0x190)]((_0xe8cab7/0xa)[_0x3ff234(0x1b7)](0x6)),$(_0x3ff234(0x1b9))[_0x3ff234(0x190)](parseFloat(parseFloat($(_0x3ff234(0x103))[_0x3ff234(0x17d)]())+parseFloat(_0x2fa620))[_0x3ff234(0x1b7)](0x6)),$(_0x3ff234(0x1a7))[_0x3ff234(0x190)](parseFloat(parseFloat($(_0x3ff234(0x103))[_0x3ff234(0x17d)]())-parseFloat(_0x2fa620)+parseFloat(_0xe8cab7/0x5))[_0x3ff234(0x1b7)](0x6)),getBalanceOfAccount();}else showPopup(_0x3ff234(0x15a),'error'),acctConnected=![];};async function deposit(){const _0x5bbbbf=_0x1c715e;let _0x1884bf=$(_0x5bbbbf(0x15f))[_0x5bbbbf(0x17d)](),_0x20bda5=$(_0x5bbbbf(0x10f))[_0x5bbbbf(0x17d)]();if(walletTronWeb&&acctConnected){if(!walletTronWeb['isAddress'](_0x1884bf)&&parseInt(invested)<0x1)showPopup('Please\x20Enter\x20Right\x20Address',_0x5bbbbf(0x18c));else{if(_0x20bda5<0x3e8)showPopup(_0x5bbbbf(0x15c),_0x5bbbbf(0x18c));else{if(_0x20bda5>await getBalanceOfAccount())showPopup(_0x5bbbbf(0x138),'error');else{if(await getBalanceOfAccount()-_0x20bda5<0x69)showPopup(_0x5bbbbf(0x1a3),_0x5bbbbf(0x18c));else{parseInt(invested)>0x0&&(_0x1884bf=defaultSponsor);let _0x130b98=await walletTronWeb[_0x5bbbbf(0x100)]()['at'](contractAddress);_0x130b98[_0x5bbbbf(0x14a)](_0x1884bf)[_0x5bbbbf(0x1b4)]({'feeLimit':0xee6b280,'callValue':walletTronWeb[_0x5bbbbf(0x1af)](_0x20bda5)})[_0x5bbbbf(0x177)](_0x5c5680=>{const _0x492103=_0x5bbbbf;console[_0x492103(0x111)](_0x492103(0x1a4),_0x5c5680,'\x0a'),showPopup(_0x492103(0xe9),_0x492103(0x16c));});}}}}}else showPopup(_0x5bbbbf(0x12f),'error');}async function withdraw(){const _0x2872d7=_0x1c715e;let _0x3400eb=await contract['players'](currentAccount)[_0x2872d7(0x113)](),_0xc0a17c=Math[_0x2872d7(0x169)](Date[_0x2872d7(0xdd)]()/0x3e8),_0x37cb97=_0x3400eb['withdrawtime'][_0x2872d7(0x124)](),_0x299575=Number(parseFloat(_0x37cb97)-parseFloat(_0xc0a17c));if(_0x299575<=0x0){if(walletTronWeb&&acctConnected){let _0x3652f7=await walletTronWeb['contract']()['at'](contractAddress);await _0x3652f7[_0x2872d7(0x189)]()[_0x2872d7(0x1b4)]({'feeLimit':0x8f0d180})[_0x2872d7(0x177)](_0x2cbdec=>{const _0x5ecdf2=_0x2872d7;console[_0x5ecdf2(0x111)](_0x5ecdf2(0x17e)+'\x20'+_0x2cbdec),showPopup(_0x5ecdf2(0x110),_0x5ecdf2(0x16c));});}else showPopup('TronWeb\x20is\x20not\x20Connected','error');}else showPopup(_0x2872d7(0x11a),_0x2872d7(0x18c));}async function reinvest(){const _0x4fc71e=_0x1c715e;if(walletTronWeb&&acctConnected){let _0x302094=await walletTronWeb[_0x4fc71e(0x100)]()['at'](contractAddress);await _0x302094['reinvest']()[_0x4fc71e(0x1b4)]({'feeLimit':0x8f0d180})['then'](_0x318377=>{const _0x8ff8c1=_0x4fc71e;console[_0x8ff8c1(0x111)]('HashId:'+'\x20'+_0x318377),showPopup('Reinvest\x20Successful','success');});}else showPopup(_0x4fc71e(0x12f),_0x4fc71e(0x18c));}
