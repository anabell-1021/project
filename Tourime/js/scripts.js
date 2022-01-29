
(function(){
    const area = document.querySelector('.area');
    const keyword = document.querySelector('.keyword');
    const limit = document.querySelector('.limit');
    const send = document.querySelector('.send');
    const list = document.querySelector('.list');
    send.addEventListener('click',function(e){
      const areacity = area.value;
      const keywordTxt = keyword.value; 
      const limitNum = limit.value;
  
      axios.get(`https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot/${areacity}?%24filter=contains(ScenicSpotName%2C'${keywordTxt}')&%24top=${limitNum}&%24format=JSON` 
       ,
        {
          headers: getAuthorizationHeader()
        }
      )
        .then(function (response) {
        const thisData = response.data;
        let str="";
        thisData.forEach(item=>{
          console.log(`https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot/${areacity}?%24select=ScenicSpotName&%24filter=contains(ScenicSpotName%2C'${keywordTxt}')&%24top=${limitNum}&%24format=JSON
      `)
          console.log(item)
          str+=`<li class="box" data-target="box">
          <img class="spot-bg"
            src="${item.Picture.PictureUrl1}"
            alt="景點圖片"
          >
          <div class="txt mt-1">
            <span class="font-3">${item.ScenicSpotName}</span>
            <br>
            <span class="font-4">${item.City}</span>
            <br>
            <input type="button" id ="tag" class="tag" value="${item.Class1}">
            <input type="button" id ="tag" class="tag" value="${item.Class2}">
          </div>
        
        </li>`
        })
        list.innerHTML = str;
      })
        .catch(function (error) {
        console.log(error);
      }); 
    })
  
  
  
  
    function getAuthorizationHeader() {
      //  填入自己 ID、KEY 開始
      let AppID = 'd595bbed3b664388a6813b013e4a6d3a';
      let AppKey = 'vB1_5kfk4LixTqh_YHdhx9XAAmY';
      //  填入自己 ID、KEY 結束
      let GMTString = new Date().toGMTString();
      let ShaObj = new jsSHA('SHA-1', 'TEXT');
      ShaObj.setHMACKey(AppKey, 'TEXT');
      ShaObj.update('x-date: ' + GMTString);
      let HMAC = ShaObj.getHMAC('B64');
      let Authorization = 'hmac username=\"' + AppID + '\", algorithm=\"hmac-sha1\", headers=\"x-date\", signature=\"' + HMAC + '\"';
      return { 'Authorization': Authorization, 'X-Date': GMTString }; 
    }
  
  })();
  
  //`https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot/${areacity}?%24filter=contains(ScenicSpotName%2C'${keywordTxt}')&%24top=${limitNum}&%24format=JSON`   
      
  