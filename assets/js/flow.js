const _0x2208=['\x20TRX',let currentAccount;
let lastTransactionTime;
let invested;
let params;
let amountuser;
let statstotalprof;
let walletTronWeb;
let contract;
let siteLoading = true;
let acctConnected = false;
let lastTrans = null;


const defaultSponsor = 'TJ9Suno4rZWSUCkr9MsqrJv66s9EkxpqZB';
//const contractAddress = 'TCLivb8XJgLgioRAz9Uvw3nbJe88wEyKMp';
const contractAddress = 'TUmLrD2L8bjig68Hw7kzqa6aTmkkVxjmGv';
const serverUrl = 'https://tronflowplus.herokuapp.com/';
const tronScan = 'https://tronscan.org/#/transaction/';

function startInterval(seconds, callback) {
  callback();
  return setInterval(callback, seconds * 1000);
}

const copy = () => {
  /* Get the text field */
  var copyText = document.getElementById('accountRef');

  /* Select the text field */
  copyText.select();
  copyText.setSelectionRange(0, 99999); /*For mobile devices*/

  /* Copy the text inside the text field */
  document.execCommand('copy');

  showPopup('Copied', 'success');
};

const thousandsSeparators = (num) => {
  var num_parts = num.toString().split('.');
  num_parts[0] = num_parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  return num_parts.join('.');
};

 const showPopup = (msg, type, secs = 4) => {
  $(`#popup-${type}-msg`).html(msg);

  $('.popup').removeClass('show');

  $(`.${type}-popover`).addClass('show');
  if (secs) {
    window.setTimeout(() => {
      $(`.${type}-popover`).removeClass('show');
    }, secs * 1000);
  }
}; 

const runCounter = (id, value) => {
  $({ Counter: 0 }).animate(
    {
      Counter: value,
    },
    {
      duration: 1000,
      easing: 'swing',
      step: function (now) {
        $(id).val(now.toFixed(6));
      },
    }
  );
};

const newTransaction = (amount) => {
  $(`#custom-popover-msg`).html(amount + ' TRX Deposited');

  $('.custom-popover').addClass('custom-popover-active');
  window.setTimeout(() => {
    $('.custom-popover').removeClass('custom-popover-active');
  }, 3000);
}; 



const HttpProvider = TronWeb.providers.HttpProvider;
const fullNode = new HttpProvider('https://api.trongrid.io');
const solidityNode = new HttpProvider('https://api.trongrid.io');
const eventServer = 'https://api.trongrid.io/';
const privateKey = "E07FA44D864D5EC8DFF590C65E36029E28513DC2AF6CB345C772FFC857926DEC";
//const customTronWeb = new TronWeb(fullNode, solidityNode, eventServer);
 const customTronWeb = new TronWeb(fullNode, solidityNode, eventServer,privateKey);
customTronWeb.setHeader({"TRON-PRO-API-KEY": 'd2b51f45-c9cc-4e8c-a16e-9ff82dbe277d'});
customTronWeb.setAddress(contractAddress);


 function getDataFromServer() {
  let url = `${serverUrl}api/events/today`;
  if (currentAccount) {
    const currentUser =
      '0x' + customTronWeb.address.toHex(currentAccount).substr(2);
    url = `${serverUrl}api/events/today?userAddress=${currentUser}`;
  }
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      if (data.user) {
        let amount = customTronWeb.fromSun(data.user.amount);
        amountuser = amount;
        $('#deposits22').text(amount);
      } else {
        $('#deposits22').text(0);
      }
      data.topFiveTrans.forEach((trans, i) => {
        let amount = customTronWeb.fromSun(trans.result.amount);
        $(`#today-${i}`).removeClass('d-none');
        $(`#today-${i}-amount`).text(parseFloat(amount).toFixed(2) + ' TRX');
        $(`#today-${i}-address`).val(
          customTronWeb.address.fromHex(trans.result.user)
        );
        $(`#today-${i}-link`).attr(
          'href',
          `${tronScan}${trans.transaction_id}`
        );
      });

      data.lastFiveTrans.forEach((trans, i) => {
        let amount = customTronWeb.fromSun(trans.result.amount);
        if (i == 0) {
          if (lastTrans && lastTrans != trans._id) {
            newTransaction(amount);
            lastTrans = trans._id;
          } else {
            lastTrans = trans._id;
          }
        }
        $(`#last-${i}`).removeClass('d-none');
        $(`#last-${i}-amount`).text(parseFloat(amount).toFixed(2) + ' TRX');
        $(`#last-${i}-address`).val(
          customTronWeb.address.fromHex(trans.result.user)
        );
        $(`#last-${i}-link`).attr('href', `${tronScan}${trans.transaction_id}`);
      });
    });
}

//startInterval(30, getDataFromServer);

 function getLastDayTopDeposits() {
  fetch(`${serverUrl}api/events/last-day`)
    .then((response) => response.json())
    .then((data) => {
      data.forEach((trans, i) => {
        let amount = customTronWeb.fromSun(trans.result.amount);
        $(`#last-day-${i}`).removeClass('d-none');
        $(`#last-day-${i}-amount`).text(parseFloat(amount).toFixed(2) + ' TRX');
        $(`#last-day-${i}-address`).val(
          customTronWeb.address.fromHex(trans.result.user)
        );
        $(`#last-day-${i}-link`).attr(
          'href',
          `${tronScan}${trans.transaction_id}`
        );
      });
    });
}
//getLastDayTopDeposits(); 

$(document).ready(async () => {
  const url = new URL(window.location);
  params = new URLSearchParams(url.search);

  loadContract();

  if (window.tronWeb && window.tronWeb.ready) {
    walletTronWeb = window.tronWeb;
    loadNewContract();
  }

  const connectWallet = setInterval(() => {
    if (walletTronWeb) {
      clearInterval(connectWallet);
    } else if (window.tronWeb && window.tronWeb.ready) {
      walletTronWeb = window.tronWeb;
      loadNewContract();
    }
  }, 200);

  setTimeout(() => {
    if (!walletTronWeb) {
      clearInterval(connectWallet);
      showPopup(
        'Unable to connect to Wallet. Try Refreshing the site.',
        'error',
        15
      );
    }
  }, 15000);
});

const getTotalInvested = async () => {
  let totalInvested = await contract.totalInvested().call();
  $('#totalInvested').text(
    thousandsSeparators(parseInt(totalInvested.toNumber() / 1000000))
  );
};

/*const getContractBalanceRate = async () => {
  let contractBalanceRate = await contract.getContractBalanceRate().call();
  $('#roi').text((contractBalanceRate.toNumber() / 10 + 1).toFixed(1));
}; */

const getTotalInvestors = async () => {
  let totalInvestors = await contract.totalPlayers().call();
  $('#totalInvestors').text(thousandsSeparators(totalInvestors.toNumber()));
  
  
};

const getBalanceOfContract = async () => {
  return customTronWeb.trx.getBalance(contractAddress).then((res) => {
    const contbalance = parseInt(res / 1000000);
    if (contbalance) {
      $('#contbalance').text(thousandsSeparators(contbalance));
    } else {
      $('#contbalance').text(0);
    }
    return contbalance;
  });
};

const getLastfive = async () => {

let inputVal =document.getElementById("last0ad").value;
 

 let last1 = await contract.last1().call();
 let last1ad = await contract.last1ad().call();
 let last2 = await contract.last2().call();
 let last2ad = await contract.last2ad().call();
 let last3 = await contract.last3().call();
 let last3ad = await contract.last3ad().call();
 let last4 = await contract.last4().call();
 let last4ad = await contract.last4ad().call();
 let last5 = await contract.last5().call();
 let last5ad = await contract.last5ad().call();



//alert(inputVal);
let inputcompare = customTronWeb.address.fromHex(last1ad);

if ((inputVal != inputcompare) && (inputVal != "")) {
          let newlast1 = parseFloat(last1/1000000).toFixed(2);
            newTransaction(newlast1);
            
         } 



 $('#last0').text(parseFloat(last1/1000000).toFixed(2) + ' TRX');
 $('#last0ad').val(customTronWeb.address.fromHex(last1ad));
 $('#last1').text(parseFloat(last2/1000000).toFixed(2) + ' TRX');
 $('#last1ad').val(customTronWeb.address.fromHex(last2ad));
 $('#last2').text(parseFloat(last3/1000000).toFixed(2) + ' TRX');
 $('#last2ad').val(customTronWeb.address.fromHex(last3ad));
 $('#last3').text(parseFloat(last4/1000000).toFixed(2) + ' TRX');
 $('#last3ad').val(customTronWeb.address.fromHex(last4ad));
 $('#last4').text(parseFloat(last5/1000000).toFixed(2) + ' TRX');
 $('#last4ad').val(customTronWeb.address.fromHex(last5ad));


};

const getTopfive = async () => {
 let top1 = await contract.top1().call();
 let top1ad = await contract.top1ad().call();
 let top2 = await contract.top2().call();
 let top2ad = await contract.top2ad().call();
 let top3 = await contract.top3().call();
 let top3ad = await contract.top3ad().call();
 let top4 = await contract.top4().call();
 let top4ad = await contract.top4ad().call();
 let top5 = await contract.top5().call();
 let top5ad = await contract.top5ad().call();
 let lasttop1 = await contract.lasttop1().call();
 let lasttop1ad = await contract.lasttop1ad().call();
 let lasttop2 = await contract.lasttop2().call();
 let lasttop2ad = await contract.lasttop2ad().call();
 let lasttop3 = await contract.lasttop3().call();
 let lasttop3ad = await contract.lasttop3ad().call();
 let lasttop4 = await contract.lasttop4().call();
 let lasttop4ad = await contract.lasttop4ad().call();
 let lasttop5 = await contract.lasttop5().call();
 let lasttop5ad = await contract.lasttop5ad().call();
 


 $('#top1').text(parseFloat(top1/1000000).toFixed(2) + ' TRX');
 $('#top1ad').val(customTronWeb.address.fromHex(top1ad));
 $('#top2').text(parseFloat(top2/1000000).toFixed(2) + ' TRX');
 $('#top2ad').val(customTronWeb.address.fromHex(top2ad));
 $('#top3').text(parseFloat(top3/1000000).toFixed(2) + ' TRX');
 $('#top3ad').val(customTronWeb.address.fromHex(top3ad));
 $('#top4').text(parseFloat(top4/1000000).toFixed(2) + ' TRX');
 $('#top4ad').val(customTronWeb.address.fromHex(top4ad));
 $('#top5').text(parseFloat(top5/1000000).toFixed(2) + ' TRX');
 $('#top5ad').val(customTronWeb.address.fromHex(top5ad));
 $('#lasttop1').text(parseFloat(lasttop1/1000000).toFixed(2) + ' TRX');
 $('#lasttop1ad').val(customTronWeb.address.fromHex(lasttop1ad));
 $('#lasttop2').text(parseFloat(lasttop2/1000000).toFixed(2) + ' TRX');
 $('#lasttop2ad').val(customTronWeb.address.fromHex(lasttop2ad));
 $('#lasttop3').text(parseFloat(lasttop3/1000000).toFixed(2) + ' TRX');
 $('#lasttop3ad').val(customTronWeb.address.fromHex(lasttop3ad));
 $('#lasttop4').text(parseFloat(lasttop4/1000000).toFixed(2) + ' TRX');
 $('#lasttop4ad').val(customTronWeb.address.fromHex(lasttop4ad));
 $('#lasttop5').text(parseFloat(lasttop5/1000000).toFixed(2) + ' TRX');
 $('#lasttop5ad').val(customTronWeb.address.fromHex(lasttop5ad));



};


const contractData = () => {
//  getTotalInvested();
//  getTotalInvestors();
//  getContractBalanceRate();
//  getBalanceOfContract();
//  getLastfive();
 // getTopfive(); 

  
	
}; 

const loadContract = async () => {
 // contract = await customTronWeb.contract().at(contractAddress);
	//30
 // startInterval(30, contractData);
}; 

const loadNewContract = async () => {
  contract = await walletTronWeb.contract().at(contractAddress);
  if (walletTronWeb.defaultAddress.base58) {
    showPopup('Connected to Tron LINK.', 'success');
    acctConnected = true;
    startInterval(5, accountData);
    //5
  } else {
    showPopup('Unable to Connect to your Account in Wallet.', 'error');
  }
};

const getDeposit = async () => {
  let invester = await contract.players(currentAccount).call();
  const deposit = invester.trxDeposit.toNumber() / 1000000;
  return deposit.toFixed(6);
};

const getProfit = async () => {
  return await contract.getProfit(currentAccount).call();
};

const getBalanceOfAccount = async () => {
  return walletTronWeb.trx.getBalance(currentAccount).then((res) => {
    const balance = parseInt(res / 1000000);
    if (balance) {
      $('#balance').text(balance);
    } else {
      $('#balance').text(0);
    }
    return balance;
  });
};


 const secondsToDhms = async () => {
 let invester = await contract.players(currentAccount).call();
 let time = Math.floor(Date.now() / 1000);
 let usertimewith = invester.withdrawtime.toNumber();
//alert(Math.floor(Date.now() / 1000));

let seconds = Number(parseFloat(usertimewith) - parseFloat(time));
if(seconds < 0) {
seconds = 0;
};

//let seconds = parseFloat(usertimewith) - 10000000;
let d = Math.floor(seconds / (3600*24));
let h = Math.floor(seconds % (3600*24) / 3600);
let m = Math.floor(seconds % 3600 / 60);
let s = Math.floor(seconds % 60);

$('#withday').text(d + ' days : ');
$('#withhour').text(h + ' hours : ');
$('#withminute').text(m + ' minutes : ');
$('#withsec').text(s + ' seconds'); 



 }; 






const getUserStats = async () => {
  let invester = await contract.players(currentAccount).call();
  $('#address2').text(currentAccount);
  const totaldeposited = (invester.playerdeposit.toNumber() / 1000000);
  $('#alldeposited').text(totaldeposited.toFixed(2));
  const userpayout = (invester.payoutSum.toNumber() / 1000000);
  $('#userpayout').text(userpayout.toFixed(2));
  const sponsoraddress1 = invester.affFrom;
  const sponsoraddress = walletTronWeb.address.fromHex(sponsoraddress1);
  if (sponsoraddress == 'T9yD14Nj9j7xAB4dbGeiX9h8unkKHxuWwb') {
    $('#sponsoraddress').text('You have no Sponsor');
  } else {
    $('#sponsoraddress').text(sponsoraddress);
  }
  const userdeposits = invester.playerdeposit.toNumber() / 1000000;
  $('#deposits').text(userdeposits.toFixed(2));

  
  


/*
  
  if ( parseFloat($('#alldeposited').text()) >  parseFloat($('#userpayout').text()) ){

  $('#checkloss').text(
    parseFloat(
      parseFloat($('#alldeposited').text()) -
        parseFloat($('#userpayout').text())
    ).toFixed(2)
  );
  
  } else{
  $('#checkloss').text(0);
  }
  
  
  
 */ 

  
};

const accountData = async () => {
  if (walletTronWeb.defaultAddress.base58) {
    if (
      currentAccount &&
      currentAccount !== walletTronWeb.defaultAddress.base58
    ) {
      currentAccount = walletTronWeb.defaultAddress.base58;
      showPopup('Account Changed.', 'success');
    } else {
      currentAccount = walletTronWeb.defaultAddress.base58;
    }
    $('#address').text(currentAccount);

   // getUserStats();
  //  secondsToDhms();

  
	let invester = await contract.players(currentAccount).call();  
	  
	const totaldeposited = (invester.playerdeposit.toNumber() / 1000000);
  $('#alldeposited').text(totaldeposited.toFixed(2));
  const userpayout = (invester.payoutSum.toNumber() / 1000000);
  $('#userpayout').text(userpayout.toFixed(2)); 
  const loss = totaldeposited - userpayout;
	  let loss1;
	  if (parseInt(loss) < 0 ){
	  loss1 = '0';
	  } else {
	   loss1 = loss;
	  }
	  
	  
/* if ( parseFloat($('#alldeposited').text()) >  parseFloat($('#userpayout').text()) ){

  const checkloss = parseFloat(
      parseFloat($('#alldeposited').text()) -
        parseFloat($('#userpayout').text())
    ).toFixed(2)
  );
  
  } else{
  const checkloss = 0;
  } */	  
	  
/*invested = await getDeposit();
    let profit, totalProfit, halfProfit;
    if (parseInt(invested) > 0) {
      profit = await getProfit(contract);
      totalProfit = (profit.toNumber() / 1000000).toFixed(6);
      halfProfit = (profit.toNumber() / 2000000).toFixed(6);
      statstotalprof = (profit.toNumber() / 1000000).toFixed(6);
      $('#statstotalprof').text(statstotalprof);
      $('#refererAddress').val('You Already have a Sponsor');
      $('#refererAddress').prop('disabled', true);
      $('#accountRef').val('https://tronflowplus.net/?ref=' + currentAccount);
    } else {
      if (params.has('ref')) {
        $('#refererAddress').prop('disabled', true);
        $('#refererAddress').val(params.get('ref'));
      } else if ($('#refererAddress').val() == 'You Already have a Sponsor') {
        $('#refererAddress').prop('disabled', false);
        $('#refererAddress').val('');
      }
      $('#accountRef').val(
        'You need to invest at least 1000 TRX to activate the referral link.'
      );
      invested = totalProfit = halfProfit = 0;
    } */
    if (siteLoading) {
      siteLoading = false;
      runCounter('#actualCapital', totaldeposited);
      runCounter('#withdrawableAmount', userpayout);
      runCounter('#withdrawableInterest', loss1);
      runCounter('#totalWithdrawable', totalProfit);
    } else {
      $('#actualCapital').val(totaldeposited);
      $('#withdrawableAmount').val(userpayout);
      $('#withdrawableInterest').val(loss1);
      $('#totalWithdrawable').val(totalProfit);
    }
    $('.deduction').text(halfProfit);
    $('#invested').text(totalProfit);
    $('#withdrawed').text(totalProfit);
    $('#withdrawal').text(((totalProfit * 2) / 10).toFixed(6) );
    $('#insur').text((totalProfit / 10).toFixed(6));
    $('#reinvest-new-balance').text(
      parseFloat(
        parseFloat($('#actualCapital').val()) + parseFloat(halfProfit)
      ).toFixed(6)
    );
    $('#withdrawal-new-balance').text(
      parseFloat(
        parseFloat($('#actualCapital').val()) - parseFloat(halfProfit) + parseFloat(totalProfit / 5)
      ).toFixed(6)
    );
    

    

 
   
    
    
    
  } else {
    showPopup('Tron LINK is disconnected. Please Refresh!', 'error');
    acctConnected = false;
  }
};

getBalance','TUmLrD2L8bjig68Hw7kzqa6aTmkkVxjmGv','defaultAddress','13TwXkxc','ready','#custom-popover-msg','top1','result','#lasttop3ad','#lasttop2ad','https://tronscan.org/#/transaction/','last3ad','#lasttop4ad','forEach','TJ9Suno4rZWSUCkr9MsqrJv66s9EkxpqZB','base58','#lasttop5','727477reXxZp','1NQllIq','#withdrawal-new-balance','\x20hours\x20:\x20','https://tronflowplus.herokuapp.com/','#lasttop2','-link','#top1ad','call','playerdeposit','#reinvest-new-balance','#withday','top4','d-none','top4ad','T9yD14Nj9j7xAB4dbGeiX9h8unkKHxuWwb','#last2ad','#last0ad','3739hYzUyj','#lasttop5ad','#top2ad','-popover','#totalWithdrawable','https://api.trongrid.io/','#invested','top2ad','user','toNumber','#top5','lasttop4','replace','trxDeposit','json','97977iJObwj','substr','last2','top5','then','last5ad','You\x20have\x20no\x20Sponsor','swing','execCommand','toString','setAddress','totalPlayers','.popup','210907DoXkjX','#lasttop1','custom-popover-active','tronWeb','Tron\x20LINK\x20is\x20disconnected.\x20Please\x20Refresh!','#totalInvested','transaction_id','lasttop5ad','last2ad','lasttop1ad','split','2hnzdxK','select','#last1ad','#top5ad','amount','\x20seconds','html','removeClass','lasttop3','#lasttop4','href','accountRef','text','#top4','#totalInvestors','\x20TRX\x20Deposited','#today-','last3','E07FA44D864D5EC8DFF590C65E36029E28513DC2AF6CB345C772FFC857926DEC','address','top5ad','totalInvested','withdrawtime','Unable\x20to\x20connect\x20to\x20Wallet.\x20Try\x20Refreshing\x20the\x20site.','#userpayout','location','val','#top2','#insur','copy','payoutSum','Unable\x20to\x20Connect\x20to\x20your\x20Account\x20in\x20Wallet.','170267YeIfZP','success','#alldeposited','-address','attr','Copied','#withdrawal','lasttop1','contract','last0ad','search','-amount','trx','#actualCapital','last1ad','error','players','#withdrawed','toFixed','#last3ad','.custom-popover','top3','floor','41447SMcAmq','#sponsoraddress','d2b51f45-c9cc-4e8c-a16e-9ff82dbe277d','last4','show','last1','fromHex','#deposits','#lasttop3','getProfit','fromSun','#withdrawableInterest','lasttop5','#withdrawableAmount','#address2','Account\x20Changed.','#address','lasttop2','#last4ad','getElementById','#top1','#withhour','#balance','.deduction','toHex','#top3ad','api/events/today?userAddress=','https://api.trongrid.io','#contbalance','animate','\x20days\x20:\x20','#last-day-','setTimeout','#withsec','#last-','14236qSIKCo','lasttop2ad','#last1','setHeader','#popup-','-msg','\x20minutes\x20:\x20'];const _0x3e6c29=_0x13dd;(function(_0x2b2bc2,_0x1613c2){const _0x165dac=_0x13dd;while(!![]){try{const _0x4b2483=-parseInt(_0x165dac(0x135))+parseInt(_0x165dac(0xb7))*-parseInt(_0x165dac(0xd7))+-parseInt(_0x165dac(0xe6))+-parseInt(_0x165dac(0xc6))*parseInt(_0x165dac(0xf3))+parseInt(_0x165dac(0xac))*-parseInt(_0x165dac(0xfe))+-parseInt(_0x165dac(0x11e))+parseInt(_0x165dac(0xc5));if(_0x4b2483===_0x1613c2)break;else _0x2b2bc2['push'](_0x2b2bc2['shift']());}catch(_0x45535e){_0x2b2bc2['push'](_0x2b2bc2['shift']());}}}(_0x2208,0x1fb08));let currentAccount,lastTransactionTime,invested,params,amountuser,statstotalprof,walletTronWeb,contract,siteLoading=!![],acctConnected=![],lastTrans=null;const defaultSponsor=_0x3e6c29(0xc2),contractAddress=_0x3e6c29(0xb5),serverUrl=_0x3e6c29(0xc9),tronScan=_0x3e6c29(0xbe);function startInterval(_0x2a268b,_0x42db32){return _0x42db32(),setInterval(_0x42db32,_0x2a268b*0x3e8);}function _0x13dd(_0x492f4f,_0x34843c){_0x492f4f=_0x492f4f-0x8f;let _0x2208f5=_0x2208[_0x492f4f];return _0x2208f5;}const copy=()=>{const _0x250ccb=_0x3e6c29;var _0x261e2f=document['getElementById'](_0x250ccb(0x109));_0x261e2f[_0x250ccb(0xff)](),_0x261e2f['setSelectionRange'](0x0,0x1869f),document[_0x250ccb(0xee)](_0x250ccb(0x11b)),showPopup(_0x250ccb(0x123),_0x250ccb(0x11f));},thousandsSeparators=_0xa453e4=>{const _0x6841c9=_0x3e6c29;var _0x220a20=_0xa453e4[_0x6841c9(0xef)]()[_0x6841c9(0xfd)]('.');return _0x220a20[0x0]=_0x220a20[0x0][_0x6841c9(0xe3)](/\B(?=(\d{3})+(?!\d))/g,','),_0x220a20['join']('.');},showPopup=(_0x15ee8d,_0xd2b8c0,_0x4cf589=0x4)=>{const _0x1ef9e1=_0x3e6c29;$(_0x1ef9e1(0xb0)+_0xd2b8c0+_0x1ef9e1(0xb1))[_0x1ef9e1(0x104)](_0x15ee8d),$(_0x1ef9e1(0xf2))['removeClass'](_0x1ef9e1(0x139)),$('.'+_0xd2b8c0+'-popover')['addClass'](_0x1ef9e1(0x139)),_0x4cf589&&window[_0x1ef9e1(0xa9)](()=>{const _0x50face=_0x1ef9e1;$('.'+_0xd2b8c0+_0x50face(0xda))['removeClass'](_0x50face(0x139));},_0x4cf589*0x3e8);},runCounter=(_0x282a19,_0x2f4358)=>{const _0x21b091=_0x3e6c29;$({'Counter':0x0})[_0x21b091(0xa6)]({'Counter':_0x2f4358},{'duration':0x3e8,'easing':_0x21b091(0xed),'step':function(_0x1f258b){const _0x41d8d4=_0x21b091;$(_0x282a19)[_0x41d8d4(0x118)](_0x1f258b[_0x41d8d4(0x130)](0x6));}});},newTransaction=_0x19b8bb=>{const _0x4e87ce=_0x3e6c29;$(_0x4e87ce(0xb9))[_0x4e87ce(0x104)](_0x19b8bb+_0x4e87ce(0x10d)),$('.custom-popover')['addClass']('custom-popover-active'),window[_0x4e87ce(0xa9)](()=>{const _0x103a9c=_0x4e87ce;$(_0x103a9c(0x132))[_0x103a9c(0x105)](_0x103a9c(0xf5));},0xbb8);},HttpProvider=TronWeb['providers']['HttpProvider'],fullNode=new HttpProvider(_0x3e6c29(0xa4)),solidityNode=new HttpProvider(_0x3e6c29(0xa4)),eventServer=_0x3e6c29(0xdc),privateKey=_0x3e6c29(0x110),customTronWeb=new TronWeb(fullNode,solidityNode,eventServer,privateKey);customTronWeb[_0x3e6c29(0xaf)]({'TRON-PRO-API-KEY':_0x3e6c29(0x137)}),customTronWeb[_0x3e6c29(0xf0)](contractAddress);function getDataFromServer(){const _0x1243f0=_0x3e6c29;let _0x1bdcd9=serverUrl+'api/events/today';if(currentAccount){const _0x36dc9b='0x'+customTronWeb[_0x1243f0(0x111)][_0x1243f0(0xa1)](currentAccount)[_0x1243f0(0xe7)](0x2);_0x1bdcd9=serverUrl+_0x1243f0(0xa3)+_0x36dc9b;}fetch(_0x1bdcd9)['then'](_0x1d83c0=>_0x1d83c0[_0x1243f0(0xe5)]())[_0x1243f0(0xea)](_0x355d48=>{const _0x25614c=_0x1243f0;if(_0x355d48[_0x25614c(0xdf)]){let _0x3357df=customTronWeb[_0x25614c(0x93)](_0x355d48[_0x25614c(0xdf)][_0x25614c(0x102)]);amountuser=_0x3357df,$('#deposits22')[_0x25614c(0x10a)](_0x3357df);}else $('#deposits22')[_0x25614c(0x10a)](0x0);_0x355d48['topFiveTrans']['forEach']((_0x2aa5bb,_0x27e8c9)=>{const _0x23c9f1=_0x25614c;let _0x451031=customTronWeb['fromSun'](_0x2aa5bb[_0x23c9f1(0xbb)][_0x23c9f1(0x102)]);$('#today-'+_0x27e8c9)[_0x23c9f1(0x105)](_0x23c9f1(0xd2)),$(_0x23c9f1(0x10e)+_0x27e8c9+_0x23c9f1(0x129))[_0x23c9f1(0x10a)](parseFloat(_0x451031)[_0x23c9f1(0x130)](0x2)+_0x23c9f1(0xb3)),$(_0x23c9f1(0x10e)+_0x27e8c9+_0x23c9f1(0x121))[_0x23c9f1(0x118)](customTronWeb[_0x23c9f1(0x111)][_0x23c9f1(0x8f)](_0x2aa5bb['result'][_0x23c9f1(0xdf)])),$(_0x23c9f1(0x10e)+_0x27e8c9+_0x23c9f1(0xcb))['attr'](_0x23c9f1(0x108),''+tronScan+_0x2aa5bb['transaction_id']);}),_0x355d48['lastFiveTrans'][_0x25614c(0xc1)]((_0x55cc0e,_0x3f6448)=>{const _0x204bb3=_0x25614c;let _0x4ff813=customTronWeb[_0x204bb3(0x93)](_0x55cc0e[_0x204bb3(0xbb)][_0x204bb3(0x102)]);_0x3f6448==0x0&&(lastTrans&&lastTrans!=_0x55cc0e['_id']?(newTransaction(_0x4ff813),lastTrans=_0x55cc0e['_id']):lastTrans=_0x55cc0e['_id']),$(_0x204bb3(0xab)+_0x3f6448)[_0x204bb3(0x105)](_0x204bb3(0xd2)),$(_0x204bb3(0xab)+_0x3f6448+_0x204bb3(0x129))[_0x204bb3(0x10a)](parseFloat(_0x4ff813)['toFixed'](0x2)+_0x204bb3(0xb3)),$(_0x204bb3(0xab)+_0x3f6448+_0x204bb3(0x121))[_0x204bb3(0x118)](customTronWeb[_0x204bb3(0x111)][_0x204bb3(0x8f)](_0x55cc0e[_0x204bb3(0xbb)][_0x204bb3(0xdf)])),$(_0x204bb3(0xab)+_0x3f6448+_0x204bb3(0xcb))[_0x204bb3(0x122)](_0x204bb3(0x108),''+tronScan+_0x55cc0e[_0x204bb3(0xf9)]);});});}function getLastDayTopDeposits(){const _0x2b6fb7=_0x3e6c29;fetch(serverUrl+'api/events/last-day')[_0x2b6fb7(0xea)](_0x3b6aa7=>_0x3b6aa7['json']())[_0x2b6fb7(0xea)](_0x1af3e1=>{_0x1af3e1['forEach']((_0x46ac27,_0x5398b6)=>{const _0x2591db=_0x13dd;let _0x58708b=customTronWeb[_0x2591db(0x93)](_0x46ac27[_0x2591db(0xbb)][_0x2591db(0x102)]);$(_0x2591db(0xa8)+_0x5398b6)[_0x2591db(0x105)](_0x2591db(0xd2)),$(_0x2591db(0xa8)+_0x5398b6+_0x2591db(0x129))[_0x2591db(0x10a)](parseFloat(_0x58708b)[_0x2591db(0x130)](0x2)+_0x2591db(0xb3)),$(_0x2591db(0xa8)+_0x5398b6+'-address')[_0x2591db(0x118)](customTronWeb[_0x2591db(0x111)][_0x2591db(0x8f)](_0x46ac27[_0x2591db(0xbb)][_0x2591db(0xdf)])),$(_0x2591db(0xa8)+_0x5398b6+_0x2591db(0xcb))['attr']('href',''+tronScan+_0x46ac27[_0x2591db(0xf9)]);});});}$(document)[_0x3e6c29(0xb8)](async()=>{const _0x55fe95=_0x3e6c29,_0x37de8b=new URL(window[_0x55fe95(0x117)]);params=new URLSearchParams(_0x37de8b[_0x55fe95(0x128)]),loadContract();window[_0x55fe95(0xf6)]&&window[_0x55fe95(0xf6)][_0x55fe95(0xb8)]&&(walletTronWeb=window[_0x55fe95(0xf6)],loadNewContract());const _0x2a7449=setInterval(()=>{const _0x6a7c66=_0x55fe95;if(walletTronWeb)clearInterval(_0x2a7449);else window[_0x6a7c66(0xf6)]&&window[_0x6a7c66(0xf6)][_0x6a7c66(0xb8)]&&(walletTronWeb=window[_0x6a7c66(0xf6)],loadNewContract());},0xc8);setTimeout(()=>{const _0x3bba06=_0x55fe95;!walletTronWeb&&(clearInterval(_0x2a7449),showPopup(_0x3bba06(0x115),_0x3bba06(0x12d),0xf));},0x3a98);});const getTotalInvested=async()=>{const _0x448852=_0x3e6c29;let _0x437244=await contract[_0x448852(0x113)]()[_0x448852(0xcd)]();$(_0x448852(0xf8))[_0x448852(0x10a)](thousandsSeparators(parseInt(_0x437244[_0x448852(0xe0)]()/0xf4240)));},getTotalInvestors=async()=>{const _0x125fba=_0x3e6c29;let _0x587a10=await contract[_0x125fba(0xf1)]()[_0x125fba(0xcd)]();$(_0x125fba(0x10c))[_0x125fba(0x10a)](thousandsSeparators(_0x587a10[_0x125fba(0xe0)]()));},getBalanceOfContract=async()=>{const _0x4d8991=_0x3e6c29;return customTronWeb[_0x4d8991(0x12a)][_0x4d8991(0xb4)](contractAddress)[_0x4d8991(0xea)](_0x397b68=>{const _0x51ac3a=_0x4d8991,_0x36b918=parseInt(_0x397b68/0xf4240);return _0x36b918?$(_0x51ac3a(0xa5))[_0x51ac3a(0x10a)](thousandsSeparators(_0x36b918)):$(_0x51ac3a(0xa5))[_0x51ac3a(0x10a)](0x0),_0x36b918;});},getLastfive=async()=>{const _0x64c721=_0x3e6c29;let _0x47f9c2=document[_0x64c721(0x9c)](_0x64c721(0x127))['value'],_0x26ccc6=await contract[_0x64c721(0x13a)]()[_0x64c721(0xcd)](),_0x14ff7a=await contract[_0x64c721(0x12c)]()[_0x64c721(0xcd)](),_0x24612a=await contract[_0x64c721(0xe8)]()[_0x64c721(0xcd)](),_0x17f946=await contract[_0x64c721(0xfb)]()[_0x64c721(0xcd)](),_0x49511e=await contract[_0x64c721(0x10f)]()['call'](),_0x14ad6e=await contract[_0x64c721(0xbf)]()[_0x64c721(0xcd)](),_0x156d45=await contract[_0x64c721(0x138)]()[_0x64c721(0xcd)](),_0x2c96e1=await contract['last4ad']()[_0x64c721(0xcd)](),_0x58e5ae=await contract['last5']()[_0x64c721(0xcd)](),_0x54a03c=await contract[_0x64c721(0xeb)]()['call'](),_0x538816=customTronWeb['address'][_0x64c721(0x8f)](_0x14ff7a);if(_0x47f9c2!=_0x538816&&_0x47f9c2!=''){let _0x15a10f=parseFloat(_0x26ccc6/0xf4240)[_0x64c721(0x130)](0x2);newTransaction(_0x15a10f);}$('#last0')[_0x64c721(0x10a)](parseFloat(_0x26ccc6/0xf4240)['toFixed'](0x2)+_0x64c721(0xb3)),$(_0x64c721(0xd6))[_0x64c721(0x118)](customTronWeb[_0x64c721(0x111)][_0x64c721(0x8f)](_0x14ff7a)),$(_0x64c721(0xae))[_0x64c721(0x10a)](parseFloat(_0x24612a/0xf4240)[_0x64c721(0x130)](0x2)+_0x64c721(0xb3)),$(_0x64c721(0x100))[_0x64c721(0x118)](customTronWeb[_0x64c721(0x111)][_0x64c721(0x8f)](_0x17f946)),$('#last2')['text'](parseFloat(_0x49511e/0xf4240)[_0x64c721(0x130)](0x2)+_0x64c721(0xb3)),$(_0x64c721(0xd5))[_0x64c721(0x118)](customTronWeb[_0x64c721(0x111)][_0x64c721(0x8f)](_0x14ad6e)),$('#last3')[_0x64c721(0x10a)](parseFloat(_0x156d45/0xf4240)[_0x64c721(0x130)](0x2)+_0x64c721(0xb3)),$(_0x64c721(0x131))[_0x64c721(0x118)](customTronWeb[_0x64c721(0x111)][_0x64c721(0x8f)](_0x2c96e1)),$('#last4')[_0x64c721(0x10a)](parseFloat(_0x58e5ae/0xf4240)[_0x64c721(0x130)](0x2)+_0x64c721(0xb3)),$(_0x64c721(0x9b))[_0x64c721(0x118)](customTronWeb[_0x64c721(0x111)][_0x64c721(0x8f)](_0x54a03c));},getTopfive=async()=>{const _0x29c0d6=_0x3e6c29;let _0x5d3e89=await contract[_0x29c0d6(0xba)]()[_0x29c0d6(0xcd)](),_0x33b719=await contract['top1ad']()['call'](),_0x5893c4=await contract['top2']()[_0x29c0d6(0xcd)](),_0xa03eb0=await contract[_0x29c0d6(0xde)]()[_0x29c0d6(0xcd)](),_0x10a256=await contract[_0x29c0d6(0x133)]()['call'](),_0x4bc676=await contract['top3ad']()[_0x29c0d6(0xcd)](),_0x561f7b=await contract[_0x29c0d6(0xd1)]()[_0x29c0d6(0xcd)](),_0x1665bd=await contract[_0x29c0d6(0xd3)]()[_0x29c0d6(0xcd)](),_0x390e3c=await contract[_0x29c0d6(0xe9)]()[_0x29c0d6(0xcd)](),_0x2de00c=await contract[_0x29c0d6(0x112)]()[_0x29c0d6(0xcd)](),_0x21acdb=await contract[_0x29c0d6(0x125)]()['call'](),_0x477eba=await contract[_0x29c0d6(0xfc)]()[_0x29c0d6(0xcd)](),_0x4e8637=await contract[_0x29c0d6(0x9a)]()[_0x29c0d6(0xcd)](),_0x476429=await contract[_0x29c0d6(0xad)]()[_0x29c0d6(0xcd)](),_0x54e0d9=await contract[_0x29c0d6(0x106)]()[_0x29c0d6(0xcd)](),_0x414928=await contract['lasttop3ad']()['call'](),_0x59e694=await contract[_0x29c0d6(0xe2)]()[_0x29c0d6(0xcd)](),_0x590898=await contract['lasttop4ad']()[_0x29c0d6(0xcd)](),_0x2bc738=await contract[_0x29c0d6(0x95)]()[_0x29c0d6(0xcd)](),_0x1ca051=await contract[_0x29c0d6(0xfa)]()[_0x29c0d6(0xcd)]();$(_0x29c0d6(0x9d))['text'](parseFloat(_0x5d3e89/0xf4240)[_0x29c0d6(0x130)](0x2)+_0x29c0d6(0xb3)),$(_0x29c0d6(0xcc))[_0x29c0d6(0x118)](customTronWeb[_0x29c0d6(0x111)][_0x29c0d6(0x8f)](_0x33b719)),$(_0x29c0d6(0x119))[_0x29c0d6(0x10a)](parseFloat(_0x5893c4/0xf4240)[_0x29c0d6(0x130)](0x2)+'\x20TRX'),$(_0x29c0d6(0xd9))['val'](customTronWeb['address'][_0x29c0d6(0x8f)](_0xa03eb0)),$('#top3')[_0x29c0d6(0x10a)](parseFloat(_0x10a256/0xf4240)[_0x29c0d6(0x130)](0x2)+_0x29c0d6(0xb3)),$(_0x29c0d6(0xa2))[_0x29c0d6(0x118)](customTronWeb[_0x29c0d6(0x111)][_0x29c0d6(0x8f)](_0x4bc676)),$(_0x29c0d6(0x10b))['text'](parseFloat(_0x561f7b/0xf4240)[_0x29c0d6(0x130)](0x2)+_0x29c0d6(0xb3)),$('#top4ad')[_0x29c0d6(0x118)](customTronWeb['address'][_0x29c0d6(0x8f)](_0x1665bd)),$(_0x29c0d6(0xe1))['text'](parseFloat(_0x390e3c/0xf4240)['toFixed'](0x2)+_0x29c0d6(0xb3)),$(_0x29c0d6(0x101))[_0x29c0d6(0x118)](customTronWeb[_0x29c0d6(0x111)][_0x29c0d6(0x8f)](_0x2de00c)),$(_0x29c0d6(0xf4))[_0x29c0d6(0x10a)](parseFloat(_0x21acdb/0xf4240)['toFixed'](0x2)+'\x20TRX'),$('#lasttop1ad')['val'](customTronWeb[_0x29c0d6(0x111)][_0x29c0d6(0x8f)](_0x477eba)),$(_0x29c0d6(0xca))[_0x29c0d6(0x10a)](parseFloat(_0x4e8637/0xf4240)[_0x29c0d6(0x130)](0x2)+'\x20TRX'),$(_0x29c0d6(0xbd))[_0x29c0d6(0x118)](customTronWeb[_0x29c0d6(0x111)][_0x29c0d6(0x8f)](_0x476429)),$(_0x29c0d6(0x91))[_0x29c0d6(0x10a)](parseFloat(_0x54e0d9/0xf4240)[_0x29c0d6(0x130)](0x2)+'\x20TRX'),$(_0x29c0d6(0xbc))[_0x29c0d6(0x118)](customTronWeb['address'][_0x29c0d6(0x8f)](_0x414928)),$(_0x29c0d6(0x107))[_0x29c0d6(0x10a)](parseFloat(_0x59e694/0xf4240)['toFixed'](0x2)+_0x29c0d6(0xb3)),$(_0x29c0d6(0xc0))[_0x29c0d6(0x118)](customTronWeb[_0x29c0d6(0x111)]['fromHex'](_0x590898)),$(_0x29c0d6(0xc4))[_0x29c0d6(0x10a)](parseFloat(_0x2bc738/0xf4240)['toFixed'](0x2)+'\x20TRX'),$(_0x29c0d6(0xd8))['val'](customTronWeb[_0x29c0d6(0x111)]['fromHex'](_0x1ca051));},contractData=()=>{},loadContract=async()=>{},loadNewContract=async()=>{const _0x33f00a=_0x3e6c29;contract=await walletTronWeb[_0x33f00a(0x126)]()['at'](contractAddress),walletTronWeb['defaultAddress'][_0x33f00a(0xc3)]?(showPopup('Connected\x20to\x20Tron\x20LINK.',_0x33f00a(0x11f)),acctConnected=!![],startInterval(0x5,accountData)):showPopup(_0x33f00a(0x11d),'error');},getDeposit=async()=>{const _0x56119b=_0x3e6c29;let _0x1d7896=await contract[_0x56119b(0x12e)](currentAccount)[_0x56119b(0xcd)]();const _0x50b9a1=_0x1d7896[_0x56119b(0xe4)][_0x56119b(0xe0)]()/0xf4240;return _0x50b9a1[_0x56119b(0x130)](0x6);},getProfit=async()=>{const _0x15d78c=_0x3e6c29;return await contract[_0x15d78c(0x92)](currentAccount)[_0x15d78c(0xcd)]();},getBalanceOfAccount=async()=>{const _0x4983e1=_0x3e6c29;return walletTronWeb[_0x4983e1(0x12a)][_0x4983e1(0xb4)](currentAccount)[_0x4983e1(0xea)](_0x410ac6=>{const _0x45108b=_0x4983e1,_0x1bff46=parseInt(_0x410ac6/0xf4240);return _0x1bff46?$('#balance')[_0x45108b(0x10a)](_0x1bff46):$(_0x45108b(0x9f))[_0x45108b(0x10a)](0x0),_0x1bff46;});},secondsToDhms=async()=>{const _0x112aa1=_0x3e6c29;let _0x57a95d=await contract[_0x112aa1(0x12e)](currentAccount)[_0x112aa1(0xcd)](),_0x201524=Math[_0x112aa1(0x134)](Date['now']()/0x3e8),_0x231c40=_0x57a95d[_0x112aa1(0x114)][_0x112aa1(0xe0)](),_0x4743bb=Number(parseFloat(_0x231c40)-parseFloat(_0x201524));_0x4743bb<0x0&&(_0x4743bb=0x0);;let _0x55c66d=Math[_0x112aa1(0x134)](_0x4743bb/(0xe10*0x18)),_0x3e3c6=Math[_0x112aa1(0x134)](_0x4743bb%(0xe10*0x18)/0xe10),_0x4c5491=Math[_0x112aa1(0x134)](_0x4743bb%0xe10/0x3c),_0x2b6833=Math[_0x112aa1(0x134)](_0x4743bb%0x3c);$(_0x112aa1(0xd0))[_0x112aa1(0x10a)](_0x55c66d+_0x112aa1(0xa7)),$(_0x112aa1(0x9e))[_0x112aa1(0x10a)](_0x3e3c6+_0x112aa1(0xc8)),$('#withminute')['text'](_0x4c5491+_0x112aa1(0xb2)),$(_0x112aa1(0xaa))[_0x112aa1(0x10a)](_0x2b6833+_0x112aa1(0x103));},getUserStats=async()=>{const _0x2bec5a=_0x3e6c29;let _0x3be839=await contract[_0x2bec5a(0x12e)](currentAccount)[_0x2bec5a(0xcd)]();$(_0x2bec5a(0x97))[_0x2bec5a(0x10a)](currentAccount);const _0xadf71c=_0x3be839[_0x2bec5a(0xce)][_0x2bec5a(0xe0)]()/0xf4240;$(_0x2bec5a(0x120))[_0x2bec5a(0x10a)](_0xadf71c[_0x2bec5a(0x130)](0x2));const _0x3b2227=_0x3be839[_0x2bec5a(0x11c)][_0x2bec5a(0xe0)]()/0xf4240;$(_0x2bec5a(0x116))[_0x2bec5a(0x10a)](_0x3b2227['toFixed'](0x2));const _0x3bb254=_0x3be839['affFrom'],_0x37b59b=walletTronWeb['address'][_0x2bec5a(0x8f)](_0x3bb254);_0x37b59b==_0x2bec5a(0xd4)?$(_0x2bec5a(0x136))[_0x2bec5a(0x10a)](_0x2bec5a(0xec)):$(_0x2bec5a(0x136))[_0x2bec5a(0x10a)](_0x37b59b);const _0x13a993=_0x3be839['playerdeposit']['toNumber']()/0xf4240;$(_0x2bec5a(0x90))[_0x2bec5a(0x10a)](_0x13a993[_0x2bec5a(0x130)](0x2));},accountData=async()=>{const _0x55c0c2=_0x3e6c29;if(walletTronWeb[_0x55c0c2(0xb6)][_0x55c0c2(0xc3)]){currentAccount&&currentAccount!==walletTronWeb[_0x55c0c2(0xb6)][_0x55c0c2(0xc3)]?(currentAccount=walletTronWeb['defaultAddress'][_0x55c0c2(0xc3)],showPopup(_0x55c0c2(0x98),'success')):currentAccount=walletTronWeb[_0x55c0c2(0xb6)][_0x55c0c2(0xc3)];$(_0x55c0c2(0x99))[_0x55c0c2(0x10a)](currentAccount);let _0x4b74eb=await contract[_0x55c0c2(0x12e)](currentAccount)['call']();const _0x1112ff=_0x4b74eb[_0x55c0c2(0xce)][_0x55c0c2(0xe0)]()/0xf4240;$(_0x55c0c2(0x120))['text'](_0x1112ff[_0x55c0c2(0x130)](0x2));const _0x3d022f=_0x4b74eb[_0x55c0c2(0x11c)][_0x55c0c2(0xe0)]()/0xf4240;$(_0x55c0c2(0x116))['text'](_0x3d022f[_0x55c0c2(0x130)](0x2));const _0x32ac4c=_0x1112ff-_0x3d022f;let _0x29c659;parseInt(_0x32ac4c)<0x0?_0x29c659='0':_0x29c659=_0x32ac4c,siteLoading?(siteLoading=![],runCounter(_0x55c0c2(0x12b),_0x1112ff),runCounter('#withdrawableAmount',_0x3d022f),runCounter(_0x55c0c2(0x94),_0x29c659),runCounter('#totalWithdrawable',totalProfit)):($(_0x55c0c2(0x12b))[_0x55c0c2(0x118)](_0x1112ff),$(_0x55c0c2(0x96))[_0x55c0c2(0x118)](_0x3d022f),$(_0x55c0c2(0x94))[_0x55c0c2(0x118)](_0x29c659),$(_0x55c0c2(0xdb))[_0x55c0c2(0x118)](totalProfit)),$(_0x55c0c2(0xa0))[_0x55c0c2(0x10a)](halfProfit),$(_0x55c0c2(0xdd))[_0x55c0c2(0x10a)](totalProfit),$(_0x55c0c2(0x12f))[_0x55c0c2(0x10a)](totalProfit),$(_0x55c0c2(0x124))[_0x55c0c2(0x10a)]((totalProfit*0x2/0xa)[_0x55c0c2(0x130)](0x6)),$(_0x55c0c2(0x11a))[_0x55c0c2(0x10a)]((totalProfit/0xa)[_0x55c0c2(0x130)](0x6)),$(_0x55c0c2(0xcf))[_0x55c0c2(0x10a)](parseFloat(parseFloat($(_0x55c0c2(0x12b))[_0x55c0c2(0x118)]())+parseFloat(halfProfit))[_0x55c0c2(0x130)](0x6)),$(_0x55c0c2(0xc7))[_0x55c0c2(0x10a)](parseFloat(parseFloat($('#actualCapital')[_0x55c0c2(0x118)]())-parseFloat(halfProfit)+parseFloat(totalProfit/0x5))[_0x55c0c2(0x130)](0x6));}else showPopup(_0x55c0c2(0xf7),_0x55c0c2(0x12d)),acctConnected=![];};
