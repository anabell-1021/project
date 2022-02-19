(function() {
  const BASE_URL = "https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot?$top=30&$format=JSON/";

  axios.get(BASE_URL,{
    headers: getAuthorizationHeader()
    }).then(response => {
  const data = response.data[0];
  renderNavbarAvatar(data)
  console.log('data', data)
  })

})();

function renderNavbarAvatar(data) {
  console.log('data', data)
  const avatar = document.querySelector('[data-target="avatar-thumbnail"]')
  // avatar.innerHTML = '<h2>hello!</h2>'
  // console.log('avatar',avatar)
  avatar.innerHTML = `
  <li>${data.ScenicSpotName}</li>
`
}

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
