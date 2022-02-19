// javascript


//跳轉連結至首頁

// document.getElementById('home').onclick = function () {
//     window.location.href='../Tourime/index1.html';
// };

/// TDX API 取得所有觀光景點資料

// let data;
//
// axios.get('https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot?%24top=30&%24format=JSON').then(function(res){
//       let data = res.data;
//     console.log(data);
//   document.querySelector('.spot').innerHTML = `
//     <h1>${data[0].Name}</h1>
//     <img src="${data[0].Picture.PictureUrl1}">`
// })

//<script src="https://unpkg.com/axios/dist/axios.min.js"></script>
// axios.get(
//    'https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot?%24select=ScenicSpotName&%24top=5&%24format=JSON',
//    {
//       headers: getAuthorizationHeader()
//    }
// )
// .then(function (response) {
//   document.querySelector('.spot').textContent=JSON.stringify(response.data);
// })
// .catch(function (error) {
//   console.log(error);
// });
//
// function getAuthorizationHeader() {
// //  填入自己 ID、KEY 開始
//     let AppID = 'd595bbed3b664388a6813b013e4a6d3a';
//     let AppKey = 'vB1_5kfk4LixTqh_YHdhx9XAAmY';
// //  填入自己 ID、KEY 結束
//     let GMTString = new Date().toGMTString();
//     let ShaObj = new jsSHA('SHA-1', 'TEXT');
//     ShaObj.setHMACKey(AppKey, 'TEXT');
//     ShaObj.update('x-date: ' + GMTString);
//     let HMAC = ShaObj.getHMAC('B64');
//     let Authorization = 'hmac username=\"' + AppID + '\", algorithm=\"hmac-sha1\", headers=\"x-date\", signature=\"' + HMAC + '\"';
//     return { 'Authorization': Authorization, 'X-Date': GMTString };
// }
//-------------------------------------------------------------------------------
// $(function () {
//     $.ajax({
//         type: 'GET',
//         url: 'https://ptx.transportdata.tw/MOTC/v2/Rail/TRA/Station?$top=10&$format=JSON', //欲呼叫之API網址(此範例為台鐵車站資料)
//         dataType: 'json',
//         headers: GetAuthorizationHeader(),
//         success: function (Data) {
//             $('.spot').text(JSON.stringify(Data));
//         }
//     });
// });

// function GetAuthorizationHeader() {
//     var AppID = 'd595bbed3b664388a6813b013e4a6d3a';
//     var AppKey = 'vB1_5kfk4LixTqh_YHdhx9XAAmY';

//     var GMTString = new Date().toGMTString();
//     var ShaObj = new jsSHA('SHA-1', 'TEXT');
//     ShaObj.setHMACKey(AppKey, 'TEXT');
//     ShaObj.update('x-date: ' + GMTString);
//     var HMAC = ShaObj.getHMAC('B64');
//     var Authorization = 'hmac username=\"' + AppID + '\", algorithm=\"hmac-sha1\", headers=\"x-date\", signature=\"' + HMAC + '\"';

//     return { 'Authorization': Authorization, 'X-Date': GMTString /*,'Accept-Encoding': 'gzip'*/}; //如果要將js運行在伺服器，可額外加入 'Accept-Encoding': 'gzip'，要求壓縮以減少網路傳輸資料量
// }
//-------------------------------------------------------------------------------------------
// let data;


// axios.get('https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot?$top=30&$format=JSON').then(function(res){
//   let data = res.data;
//  console.log(data); document.querySelector('.container').innerHTML = `
//  <h1>${data[0].ScenicSpotName}</h1>
//  <img src="${data[0].Picture.PictureUrl1}">`
// })
// ------------------------------------------------------------------------------------------------------
// (function() {
//     const BASE_URL = "https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot?$top=30&$format=JSON/";

//     axios.get(BASE_URL).then(response => {
//     const data = response.data[0];
//     renderNavbarAvatar(data)
//     console.log('data', data)
//     })

//   })();

//   function renderNavbarAvatar(data) {
//     console.log('data', data)
//     const avatar = document.querySelector('[data-target="avatar-thumbnail"]')
//     // avatar.innerHTML = '<h2>hello!</h2>'
//     // console.log('avatar',avatar)
//   //   avatar.innerHTML = `
//   // <img src="${data.picture.thumbnail}" alt="avatar">
//   //         <span>${data.name.first}</span>
//   //         `

//     avatar.innerHTML = `
//     <img src="${data.Picture.PictureUrl1}" alt="avatar">
//     <span>${data.ScenicSpotName}</span>
//   `
//   }

//https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot/Taichung?%24filter=contains(ScenicSpotName%2C'%E5%B1%B1')&%24top=6&%24format=JSON
//https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot/Taipei?%24filter=contains(ScenicSpotName%2C'%E5%B1%B1')&%24top=5&%24format=JSON
//https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot?%24filter=contains(ScenicSpotName%2C'%E5%B1%B1')&%24top=3&%24format=JSON
const city = document.querySelector('.city');
const keyword = document.querySelector('.keyword');
const limit = document.querySelector('.limit');
const send = document.querySelector('.send');
const list = document.querySelector('.list');
send.addEventListener('click',function(e){
  const cityarea = city.value;
  const keywordTxt = keyword.value;
  const limitNum = limit.value;

  axios.get(
   `https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot/${cityarea}?%24select=ScenicSpotName&%24filter=contains(ScenicSpotName%2C'${keywordTxt}')&%24top=${limitNum}&%24format=JSON
`,
   {
      headers: getAuthorizationHeader()
   }
  )
  .then(function (response) {
    const thisData = response.data;
    let str="";
    thisData.forEach(item=>{
      console.log(item)
      str+=`<li>${item.ScenicSpotName}</li>`
    })
    list.innerHTML = str;
  })
  .catch(function (error) {
    console.log(error);
  });
})




function getAuthorizationHeader() {
//   ID、KEY 開始
    let AppID = 'd595bbed3b664388a6813b013e4a6d3a';
    let AppKey = 'vB1_5kfk4LixTqh_YHdhx9XAAmY';
//   ID、KEY 結束
    let GMTString = new Date().toGMTString();
    let ShaObj = new jsSHA('SHA-1', 'TEXT');
    ShaObj.setHMACKey(AppKey, 'TEXT');
    ShaObj.update('x-date: ' + GMTString);
    let HMAC = ShaObj.getHMAC('B64');
    let Authorization = 'hmac username=\"' + AppID + '\", algorithm=\"hmac-sha1\", headers=\"x-date\", signature=\"' + HMAC + '\"';
    return { 'Authorization': Authorization, 'X-Date': GMTString };
}
