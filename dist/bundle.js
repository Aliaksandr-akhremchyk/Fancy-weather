(()=>{"use strict";var e={449:(e,t,o)=>{o.d(t,{X:()=>ke});const n=document.querySelector(".time"),r=document.querySelector(".day"),l=document.querySelector(".title-day-first"),c=document.querySelector(".title-day-second"),s=document.querySelector(".title-day-third");let a,i=0,u=!1,d="en";function g(e){a=e;let t=new Date;i=60*t.getTimezoneOffset(),t.setSeconds(t.getSeconds()+(e||0===e?e+i:0));let o=t.getHours(),r=t.getMinutes(),l=t.getSeconds();n.innerHTML=`${o}:${m(r)}:${m(l)}`,(o<6||o>=22)&&(u=!u),0===o&&0===r&&0===l&&y(),22===o&&0===r&&0===l&&de()}function m(e){return(parseInt(e,10)<10?"0":"")+e}function y(){let e=new Date;e.setSeconds(e.getSeconds()+(a?a+i:0));let t="ru"===d?0:1,o=[[["Воскресенье","Sunday"],["Вс","Sun"]],[["Понедельник","Monday"],["Пн","Mon"]],[["Вторник","Tuesday"],["Вт","Tue"]],[["Среда","Wednesday"],["Ср","Wed"]],[["Четверг","Thursday"],["Чт","Thu"]],[["Пятница","Friday"],["Пт","Fri"]],[["Суббота","Saturday"],["Сб","Sat"]]],n=e.getDay(),u=e.getDate(),g=e.getMonth();r.innerHTML=`${o[n][1][t]}, ${u} ${[["Января","January"],["Февраля","February"],["Марта","March"],["Апреля","April"],["Мая","May"],["Июня","June"],["Июля","July"],["Августа","August"],["Сентября","September"],["Октября","October"],["Ноября","November"],["Декабря","December"]][g][t]}`,e.setDate(e.getDate()+1),l.innerHTML=o[e.getDay()][0][t],e.setDate(e.getDate()+1),c.innerHTML=o[e.getDay()][0][t],e.setDate(e.getDate()+1),s.innerHTML=o[e.getDay()][0][t]}function p(e,t){return fetch(`https://api.climacell.co/v3/weather/forecast/daily?lat=${t}&lon=${e}&unit_system=si&start_time=now&fields=feels_like%2Ctemp%2Chumidity%2Cwind_speed%2Cweather_code&apikey=jvts28CAJvZln9V73cFjUSQCFtLnX2GT`).then((e=>e.json())).then((e=>{for(let t=0;t<4;++t)ce.temp[t]=(e[t].temp[0].min.value+e[t].temp[1].max.value)/2,ce.tempFeels[t]=(e[t].feels_like[0].min.value+e[t].feels_like[1].max.value)/2,ce.wind[t]=(e[t].wind_speed[0].min.value+e[t].wind_speed[1].max.value)/2,ce.humidity[t]=(e[t].humidity[0].min.value+e[t].humidity[1].max.value)/2,ce.weatherCode[t]=e[t].weather_code.value;return"ok"})).catch((e=>console.log("не получилось с погодой")))}const h=document.querySelector(".t-search"),f=document.querySelector(".t-tempFeels"),v=document.querySelector(".t-wind"),S=document.querySelector(".d-wind"),_=document.querySelector(".t-humidity"),w=document.querySelector(".t-latitude"),q=document.querySelector(".t-longitude"),L=document.querySelector(".weatherCode"),C=document.querySelector(".city"),$=document.querySelector(".start-overlay"),k=document.querySelector(".message");let b=[h,f,v,S,_,w,q,k,$],x=[["Поиск","Search"],["Ощущается: ","Feels like: "],["Ветер: ","Wind: "],["м/с","m/s"],["Влажность: ","Humidity: "],["Широта: ","Latitude: "],["Долгота: ","Longitude: "],["Что-то пошло не так...","Something went wrong..."],["Загрузка...","Loading..."]],I=["freezing_rain_heavy","freezing_rain","freezing_rain_light","freezing_drizzle","ice_pellets_heavy","ice_pellets","ice_pellets_light","snow_heavy","snow","snow_light","flurries","tstorm","rain_heavy","rain","rain_light","drizzle","fog_light","fog","cloudy","mostly_cloudy","partly_cloudy","mostly_clear","clear"],z=[["Сильный ледяной дождь","Heavy freezing rain"],["Ледяной дождь","Freezing rain"],["Легкий ледяной дождь","Light freezing rain"],["Ледяная изморось","Freezing drizzle"],["Сильный град","Heavy ice pellets"],["Град","Ice pellets"],["Лекгий град","Light ice pellets"],["Сильный снег","Heavy snow_heavy"],["Снег","Snow"],["Слабый снег","Light snow"],["Хрень","Flurries"],["Шторм","Tstorm"],["Сильный дождь","Heavy rain"],["Дождь","Rain"],["Легкий дождь","Light rain"],["Изморось","Drizzle"],["Легкий туман","Light fog"],["Туман","Fog"],["Сильная облачность","Cloudy"],["Значительная облачность","Mostly cloudy"],["Переменная облачность","Partly cloudy"],["Незначительная облачность","Mostly clear"],["Ясно","Clear"]];function F(){let e="ru"===d?0:1;for(let t=0;t<b.length;++t)b[t].textContent=x[t][e];M(ce.weatherCode[0]),R.setAttribute("placeholder",e?"Сity or ZIP":"Город или Индекс"),C.textContent=ce.place[e]}function M(e){let t="ru"===d?0:1;for(let o=0;o<I.length;++o)if(e==I[o])return void(L.textContent=z[o][t])}const T=document.querySelector(".start-message"),j=document.querySelector(".start-confirm");function D(){navigator.geolocation.getCurrentPosition(O,A,H)}let E;var H={enableHighAccuracy:!0,timeout:5e3,maximumAge:0};function O(e){console.log("получили местные координаты");var t=e.coords;ce.lat=t.latitude,ce.lng=t.longitude,E.flyTo({center:[t.longitude,t.latitude],essential:!0}),function(e,t){let o="ru"===d?0:1;return fetch(`https://api.opencagedata.com/geocode/v1/json?q=${t}%2C%20${e}&key=75fa2f2d37824a27be34212ce12f3406&language=${d}`).then((e=>e.json())).then((e=>(ce.place[o]=`${e.results[0].components.city||e.results[0].components.town||e.results[0].components.village||e.results[0].components["ISO_3166-1_alpha-3"]}, ${e.results[0].components.country}`,ce.offset=e.results[0].annotations.timezone.offset_sec,"ok"))).catch((e=>console.log("не получилось с Местом")))}(t.longitude,t.latitude).then((e=>p(t.longitude,t.latitude))).then((e=>se()))}function A(e){J(),console.warn(`ERROR(${e.code}): ${e.message}`)}function J(){T.classList.toggle("move")}j.addEventListener("click",(()=>{$.style.display="none",J()}));const P=document.querySelector(".search-btn"),R=document.querySelector(".search-input");function W(){(function(e){let t="ru"===d?0:1;return fetch(`https://api.opencagedata.com/geocode/v1/json?q=${e}&key=75fa2f2d37824a27be34212ce12f3406&language=${d}`).then((e=>e.json())).then((e=>(ce.place[t]=`${e.results[0].components.city||e.results[0].components.town||e.results[0].components.village||e.results[0].components["ISO_3166-1_alpha-3"]}, ${e.results[0].components.country}`,ce.offset=e.results[0].annotations.timezone.offset_sec,ce.lng=e.results[0].geometry.lng,ce.lat=e.results[0].geometry.lat,[e.results[0].geometry.lng,e.results[0].geometry.lat]))).catch((e=>console.log("не получилось с кооординатами")))})(R.value).then((e=>(console.log("сюда дошли"),E.flyTo({center:[...e],essential:!0}),p(...e)))).then((e=>{Ce(),se()})).catch((e=>{console.log("не получилось ваще"),N(),setTimeout((()=>{k.classList.remove("move")}),8e3)}))}function N(){k.classList.toggle("move")}P.addEventListener("click",W),R.addEventListener("keypress",(e=>{13!=e.which&&13!=e.keyCode||(W(),R.blur())})),R.addEventListener("focus",(()=>R.value="")),k.addEventListener("click",N);const Q=document.querySelector(".temp"),X=document.querySelector(".temp-day-first"),Z=document.querySelector(".temp-day-second"),V=document.querySelector(".temp-day-third"),Y=document.querySelector(".tempFeels"),B=document.querySelector(".wind"),G=document.querySelector(".humidity"),U=document.querySelector(".latitude"),K=document.querySelector(".longitude"),ee=document.querySelector(".icon-today"),te=document.querySelector(".icon-first"),oe=document.querySelector(".icon-second"),ne=document.querySelector(".icon-third");let re=[Q,X,Z,V],le=[ee,te,oe,ne],ce={temp:[0,0,0,0],tempFeels:[0,0,0,0],wind:[0,0,0,0],weatherCode:["Clear","Clear","Clear","Clear"],humidity:[0,0,0,0],place:["Город, Республика","City, Country"],offset:0,lng:0,lat:0};function se(){clearInterval(ke),g(ce.offset),ke=setInterval(g,1e3,ce.offset),y(),localStorage.setItem("search-city",R.value),ie(),de(),M(ce.weatherCode[0]),B.textContent=ce.wind[0].toFixed(1),G.textContent=`${Math.round(ce.humidity[0])} %`,K.textContent=ae(ce.lng),U.textContent=ae(ce.lat),function(e,t){let o="ru"===d?"en":"ru",n="ru"===o?0:1;fetch(`https://api.opencagedata.com/geocode/v1/json?q=${t}%2C%20${e}&key=75fa2f2d37824a27be34212ce12f3406&language=${o}`).then((e=>e.json())).then((e=>(ce.place[n]=`${e.results[0].components.city||e.results[0].components.town||e.results[0].components.village||e.results[0].components["ISO_3166-1_alpha-3"]}, ${e.results[0].components.country}`,"ok"))).catch((e=>console.log("не получилось с Местом")))}(ce.lng,ce.lat),F(),$.style.display="none"}function ae(e){return` ${(e=(e+="").split("."))[0]}°  ${e[1][0]+e[1][1]}'  ${e[1][2]+e[1][3]}" `}function ie(){for(let e=0;e<re.length;++e){let t=Math.round("°f"===we?ue(ce.temp[e]):ce.temp[e]);re[e].textContent=`${t>0?"+":""}${t}`}let e=Math.round("°f"===we?ue(ce.tempFeels[0]):ce.tempFeels[0]);Y.textContent=`${e>0?"+":""}${e}`}function ue(e){return 1.8*e+32}function de(){let e="";u&&(e="-night");for(let t=0;t<le.length;++t)le[t].style.backgroundImage=`url(./src/assets/icons/${ce.weatherCode[t]}${e}.svg)`}const ge=document.querySelector(".background__img"),me=document.querySelector(".header__refreshBtn"),ye=document.querySelector(".inVector"),pe=document.querySelector(".leng-en"),he=document.querySelector(".leng-ru"),fe=document.querySelector(".deg-f"),ve=document.querySelector(".deg-c");let Se=180,_e=!1,we="°с";function qe(e){var t;e.target.classList.contains("passive")&&(d=e.target.textContent.toLowerCase(),t=d,localStorage.setItem("weather-leng",t),y(),F(),pe.classList.toggle("passive"),he.classList.toggle("passive"))}function Le(e){var t;e.target.classList.contains("passive")&&(we=e.target.textContent.toLowerCase(),t=we,localStorage.setItem("weather-deg",t),ie(),fe.classList.toggle("passive"),ve.classList.toggle("passive"))}function Ce(){fetch("https://api.unsplash.com/photos/random?query=morning&client_id=e2077ad31a806c894c460aec8f81bc2af4d09c4f8104ae3177bb809faf0eac17").then((e=>e.json())).then((e=>function(e){const t=new Image;t.src=e,t.onload=()=>{_e?(document.body.style.backgroundImage=`url(${t.src})`,$e(),_e=!_e):(ge.style.backgroundImage=`url(${t.src})`,$e(),_e=!_e)}}(e.urls.regular)))}function $e(){ge.style.opacity=_e?"0":"1"}fe.addEventListener("click",Le),ve.addEventListener("click",Le),pe.addEventListener("click",qe),he.addEventListener("click",qe),me.addEventListener("click",(()=>{ye.style.transform=`rotate(${Se}deg)`,Se+=180,Ce()})),mapboxgl.accessToken="pk.eyJ1IjoiYWxleDE5ODQwNSIsImEiOiJja2k4dzc2aTcwOXRmMzRtemFjN3ZjYWdpIn0.iu__APcp4HT_E4a1CHa6jQ",E=new mapboxgl.Map({container:"map",style:"mapbox://styles/mapbox/streets-v11",center:[0,0],zoom:9.5}),g();let ke=setInterval(g,1e3);"°f"===localStorage.getItem("weather-deg")&&(we="°f",fe.classList.toggle("passive"),ve.classList.toggle("passive")),"ru"===localStorage.getItem("weather-leng")&&(d="ru",pe.classList.toggle("passive"),he.classList.toggle("passive")),y(),null===localStorage.getItem("search-city")||""===localStorage.getItem("search-city")?(D(),console.log("пошли в местную локацию")):(R.value=localStorage.getItem("search-city"),D(),console.log("пошли по главному поиску"))}},t={};function o(n){if(t[n])return t[n].exports;var r=t[n]={exports:{}};return e[n](r,r.exports,o),r.exports}o.d=(e,t)=>{for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o(449)})();