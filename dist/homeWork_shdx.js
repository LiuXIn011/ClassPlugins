// ==UserScript==
// @name         上海大学答题脚本
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://sdjj.ct-edu.com.cn/learning/*
// @icon         https://sdjj.ct-edu.com.cn/learning//source/img/fav.ico
// @grant        none
// @require      https://cdn.jsdelivr.net/npm/axios@1.1.2/dist/axios.min.js
// ==/UserScript==
(function () {
  'use strict';
    // Your code here...
    var __encode ='jsjiami.com',_a={}, _0xb483=["\x5F\x64\x65\x63\x6F\x64\x65","\x68\x74\x74\x70\x3A\x2F\x2F\x77\x77\x77\x2E\x73\x6F\x6A\x73\x6F\x6E\x2E\x63\x6F\x6D\x2F\x6A\x61\x76\x61\x73\x63\x72\x69\x70\x74\x6F\x62\x66\x75\x73\x63\x61\x74\x6F\x72\x2E\x68\x74\x6D\x6C"];(function(_0xd642x1){_0xd642x1[_0xb483[0]]= _0xb483[1]})(_a);var __Oxf78a2=["\x75\x73\x65\x20\x73\x74\x72\x69\x63\x74","\x25\x63","","\x20\x74\x65\x78\x74\x2D\x73\x68\x61\x64\x6F\x77\x3A\x20\x30\x20\x31\x70\x78\x20\x30\x20\x23\x63\x63\x63\x2C\x30\x20\x32\x70\x78\x20\x30\x20\x23\x63\x39\x63\x39\x63\x39\x2C\x30\x20\x33\x70\x78\x20\x30\x20\x23\x62\x62\x62\x2C\x30\x20\x34\x70\x78\x20\x30\x20\x23\x62\x39\x62\x39\x62\x39\x2C\x30\x20\x35\x70\x78\x20\x30\x20\x23\x61\x61\x61\x2C\x30\x20\x36\x70\x78\x20\x31\x70\x78\x20\x72\x67\x62\x61\x28\x30\x2C\x30\x2C\x30\x2C\x2E\x31\x29\x2C\x30\x20\x30\x20\x35\x70\x78\x20\x72\x67\x62\x61\x28\x30\x2C\x30\x2C\x30\x2C\x2E\x31\x29\x2C\x30\x20\x31\x70\x78\x20\x33\x70\x78\x20\x72\x67\x62\x61\x28\x30\x2C\x30\x2C\x30\x2C\x2E\x33\x29\x2C\x30\x20\x33\x70\x78\x20\x35\x70\x78\x20\x72\x67\x62\x61\x28\x30\x2C\x30\x2C\x30\x2C\x2E\x32\x29\x2C\x30\x20\x35\x70\x78\x20\x31\x30\x70\x78\x20\x72\x67\x62\x61\x28\x30\x2C\x30\x2C\x30\x2C\x2E\x32\x35\x29\x2C\x30\x20\x31\x30\x70\x78\x20\x31\x30\x70\x78\x20\x72\x67\x62\x61\x28\x30\x2C\x30\x2C\x30\x2C\x2E\x32\x29\x2C\x30\x20\x32\x30\x70\x78\x20\x32\x30\x70\x78\x20\x72\x67\x62\x61\x28\x30\x2C\x30\x2C\x30\x2C\x2E\x31\x35\x29\x3B\x66\x6F\x6E\x74\x2D\x73\x69\x7A\x65\x3A\x35\x65\x6D","\x6C\x6F\x67","\x28\x5E\x7C\x26\x29","\x3D\x28\x5B\x5E\x26\x5D\x2A\x29\x28\x26\x7C\x24\x29","\x69","\x3F","\x73\x70\x6C\x69\x74","\x68\x61\x73\x68","\x6C\x6F\x63\x61\x74\x69\x6F\x6E","\x6D\x61\x74\x63\x68","\u83B7\u53D6\u9898\u5E93","\x63\x61\x74\x63\x68","\u8BF7\u6C42\u6210\u529F","\x73\x74\x61\x74\x75\x73","\u4F5C\u4E1A\u7C7B\u578B\u4E3A\uFF1A","\x68\x6F\x6D\x65\x77\x6F\x72\x6B\x54\x79\x70\x65","\x68\x6F\x6D\x65\x77\x6F\x72\x6B\x4F\x62\x6A","\x64\x61\x74\x61","\x30","\x71\x75\x65\x73\x74\x69\x6F\x6E\x4F\x62\x6A","\x69\x73\x41\x72\x72\x61\x79","\x31","\x64\x75\x6F\x78\x75\x61\x6E\x4C\x69\x73\x74","\x74\x68\x65\x6E","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x73\x64\x6A\x6A\x2E\x63\x74\x2D\x65\x64\x75\x2E\x63\x6F\x6D\x2E\x63\x6E\x2F\x6C\x65\x61\x72\x6E\x69\x6E\x67\x2F\x73\x74\x75\x64\x65\x6E\x74\x2F\x73\x74\x75\x64\x65\x6E\x74\x44\x61\x74\x61\x41\x50\x49\x2E\x61\x63\x74\x69\x6F\x6E\x3F\x66\x75\x6E\x63\x74\x69\x6F\x6E\x43\x6F\x64\x65\x3D\x64\x6F\x48\x6F\x6D\x65\x77\x6F\x72\x6B","\x70\x6F\x73\x74","\x61\x70\x70\x6C\x69\x63\x61\x74\x69\x6F\x6E\x2F\x78\x2D\x77\x77\x77\x2D\x66\x6F\x72\x6D\x2D\x75\x72\x6C\x65\x6E\x63\x6F\x64\x65\x64\x3B\x63\x68\x61\x72\x73\x65\x74\x3D\x55\x54\x46\x2D\x38","\u7B54\u6848\u96C6\u5408\uFF1A","\u6267\u884C\u7684\x6B\x65\x79\uFF1A","\x6C\x65\x6E\x67\x74\x68","\x2E\x74\x6F\x70\x69\x63\x2D\x61\x72\x65\x61","\x71\x75\x65\x72\x79\x53\x65\x6C\x65\x63\x74\x6F\x72\x41\x6C\x6C","\x69\x6E\x63\x6C\x75\x64\x65\x73","\x76\x61\x6C\x75\x65","\x6E\x67\x2D\x72\x65\x70\x65\x61\x74","\x61\x74\x74\x72\x69\x62\x75\x74\x65\x73","\x70\x75\x73\x68","\u51FA\u73B0\u9519\u8BEF\uFF1A","\u9009\u9879\u96C6\u5408\uFF1A","\x63\x68\x69\x6C\x64\x72\x65\x6E","\x6F\x70\x74\x69\x6F\x6E\x4C\x69\x73\x74","\x69\x73\x41\x6E\x73\x77\x65\x72","\x63\x6C\x69\x63\x6B","\u9898\u76EE\u7C7B\u578B\uFF1A","\u7B2C","\u9898\u7684\u6B63\u786E\u7B54\u6848\u662F","\x69\x6E\x64\x65\x78\x4E\x61\x6D\x65","\u7B54\u6848\u6570\u91CF\u548C\u9009\u9879\u6570\u91CF\u4E0D\u5339\u914D\uFF01","\u7B54\u6848\u6570\u91CF\u548C\u95EE\u9898\u6570\u91CF\u4E0D\u5339\u914D\uFF01","\x2E\x71\x75\x65\x73\x74\x69\x6F\x6E\x2D\x6F\x70\x74\x69\x6F\x6E\x2D\x69\x74\x65\x6D","\x6E\x6F\x77","\u6388\u6743\u5DF2\u8FC7\u671F\uFF01","\u6388\u6743\u6B63\u5E38\uFF01","\x63\x6F\x75\x72\x73\x65\x49\x64","\x68\x6F\x6D\x65\x77\x6F\x72\x6B\x49\x64","\x75\x6E\x64\x65\x66\x69\x6E\x65\x64","\u5220\u9664","\u7248\u672C\u53F7\uFF0C\x6A\x73\u4F1A\u5B9A","\u671F\u5F39\u7A97\uFF0C","\u8FD8\u8BF7\u652F\u6301\u6211\u4EEC\u7684\u5DE5\u4F5C","\x6A\x73\x6A\x69\x61","\x6D\x69\x2E\x63\x6F\x6D"];__Oxf78a2[0x0];var logBigText=(_0xe248x2)=>{console[__Oxf78a2[0x4]](`${__Oxf78a2[0x1]}${_0xe248x2}${__Oxf78a2[0x2]}`,__Oxf78a2[0x3])};function getQueryString(_0xe248x4){var _0xe248x5= new RegExp(__Oxf78a2[0x5]+ _0xe248x4+ __Oxf78a2[0x6],__Oxf78a2[0x7]);var _0xe248x6=window[__Oxf78a2[0xb]][__Oxf78a2[0xa]][__Oxf78a2[0x9]](__Oxf78a2[0x8])[0x1];if(_0xe248x6&& _0xe248x6[__Oxf78a2[0xc]](_0xe248x5)){return _0xe248x6[__Oxf78a2[0xc]](_0xe248x5)[0x2]};return null}function getHomeWork(data){console[__Oxf78a2[0x4]](__Oxf78a2[0xd]);axios({url:__Oxf78a2[0x1b],method:__Oxf78a2[0x1c],headers:{'\x43\x6F\x6E\x74\x65\x6E\x74\x2D\x54\x79\x70\x65':__Oxf78a2[0x1d]},data})[__Oxf78a2[0x1a]]((_0xe248xa)=>{console[__Oxf78a2[0x4]](__Oxf78a2[0xf],_0xe248xa[__Oxf78a2[0x10]]);if(_0xe248xa[__Oxf78a2[0x10]]=== 200){logBigText(`${__Oxf78a2[0x11]}${_0xe248xa[__Oxf78a2[0x14]][__Oxf78a2[0x13]][__Oxf78a2[0x12]]}${__Oxf78a2[0x2]}`);if(_0xe248xa[__Oxf78a2[0x14]][__Oxf78a2[0x13]][__Oxf78a2[0x12]]=== __Oxf78a2[0x15]){setTimeout(()=>{for(const _0xe248xb in _0xe248xa[__Oxf78a2[0x14]][__Oxf78a2[0x16]]){if(Array[__Oxf78a2[0x17]](_0xe248xa[__Oxf78a2[0x14]][__Oxf78a2[0x16]][_0xe248xb])){doHomeWorkType_0(_0xe248xa[__Oxf78a2[0x14]][__Oxf78a2[0x16]][_0xe248xb],_0xe248xb)}}},2000)}else {if(_0xe248xa[__Oxf78a2[0x14]][__Oxf78a2[0x13]][__Oxf78a2[0x12]]=== __Oxf78a2[0x18]){setTimeout(()=>{doHomeWorkType_1(_0xe248xa[__Oxf78a2[0x14]][__Oxf78a2[0x16]][__Oxf78a2[0x19]]|| [])},2000)}}}})[__Oxf78a2[0xe]]((_0xe248x9)=>{console[__Oxf78a2[0x4]](_0xe248x9)})}function doHomeWorkType_0(_0xe248xd,_0xe248xb){console[__Oxf78a2[0x4]](`${__Oxf78a2[0x1e]}${_0xe248xd}${__Oxf78a2[0x2]}`);console[__Oxf78a2[0x4]](`${__Oxf78a2[0x1f]}${_0xe248xb}${__Oxf78a2[0x2]}`);let _0xe248xe=[];try{for(let _0xe248xf=0;_0xe248xf< document[__Oxf78a2[0x22]](__Oxf78a2[0x21])[__Oxf78a2[0x20]];_0xe248xf++){const _0xe248x10=document[__Oxf78a2[0x22]](__Oxf78a2[0x21])[_0xe248xf];if(_0xe248x10[__Oxf78a2[0x26]][__Oxf78a2[0x25]][__Oxf78a2[0x24]][__Oxf78a2[0x23]](_0xe248xb)){_0xe248xe[__Oxf78a2[0x27]](_0xe248x10)}}}catch(error){console[__Oxf78a2[0x4]](`${__Oxf78a2[0x28]}${error}${__Oxf78a2[0x2]}`)};console[__Oxf78a2[0x4]](`${__Oxf78a2[0x29]}${_0xe248xe}${__Oxf78a2[0x2]}`);if(_0xe248xe[__Oxf78a2[0x20]]=== _0xe248xd[__Oxf78a2[0x20]]){for(let _0xe248xf=0;_0xe248xf< _0xe248xe[__Oxf78a2[0x20]];_0xe248xf++){const _0xe248x10=_0xe248xe[_0xe248xf];try{const _0xe248x11=_0xe248x10[__Oxf78a2[0x2a]][0x1][__Oxf78a2[0x2a]];const _0xe248x12=_0xe248xd[_0xe248xf][__Oxf78a2[0x2b]];if(_0xe248x11[__Oxf78a2[0x20]]=== _0xe248x12[__Oxf78a2[0x20]]){for(let _0xe248x13=0;_0xe248x13< _0xe248x12[__Oxf78a2[0x20]];_0xe248x13++){const _0xe248x14=_0xe248x12[_0xe248x13];if(_0xe248x14[__Oxf78a2[0x2c]]){_0xe248x11[_0xe248x13][__Oxf78a2[0x2a]][0x0][__Oxf78a2[0x2d]]();console[__Oxf78a2[0x4]](`${__Oxf78a2[0x2e]}${_0xe248xb}${__Oxf78a2[0x2f]}${_0xe248xf}${__Oxf78a2[0x30]}${_0xe248x14[__Oxf78a2[0x31]]}${__Oxf78a2[0x2]}`)}}}else {logBigText(__Oxf78a2[0x32])}}catch(error){console[__Oxf78a2[0x4]](`${__Oxf78a2[0x28]}${error}${__Oxf78a2[0x2]}`)}}}else {logBigText(__Oxf78a2[0x33])}}function doHomeWorkType_1(_0xe248xd){console[__Oxf78a2[0x4]](`${__Oxf78a2[0x1e]}${_0xe248xd}${__Oxf78a2[0x2]}`);let _0xe248xe=document[__Oxf78a2[0x22]](__Oxf78a2[0x34]);console[__Oxf78a2[0x4]](`${__Oxf78a2[0x29]}${_0xe248xe}${__Oxf78a2[0x2]}`);if(_0xe248xe[__Oxf78a2[0x20]]=== _0xe248xd[__Oxf78a2[0x20]]){for(let _0xe248xf=0;_0xe248xf< _0xe248xe[__Oxf78a2[0x20]];_0xe248xf++){const _0xe248x10=_0xe248xe[_0xe248xf];try{const _0xe248x11=_0xe248x10[__Oxf78a2[0x2a]][0x0][__Oxf78a2[0x2a]][0x1][__Oxf78a2[0x2a]];const _0xe248x12=_0xe248xd[_0xe248xf][__Oxf78a2[0x2b]];if(_0xe248x11[__Oxf78a2[0x20]]=== _0xe248x12[__Oxf78a2[0x20]]){for(let _0xe248x13=0;_0xe248x13< _0xe248x12[__Oxf78a2[0x20]];_0xe248x13++){const _0xe248x14=_0xe248x12[_0xe248x13];if(_0xe248x14[__Oxf78a2[0x2c]]){_0xe248x11[_0xe248x13][__Oxf78a2[0x2d]]();console[__Oxf78a2[0x4]](`${__Oxf78a2[0x2f]}${_0xe248xf}${__Oxf78a2[0x30]}${_0xe248x14[__Oxf78a2[0x31]]}${__Oxf78a2[0x2]}`)}}}else {logBigText(__Oxf78a2[0x32])}}catch(error){console[__Oxf78a2[0x4]](`${__Oxf78a2[0x28]}${error}${__Oxf78a2[0x2]}`)}}}else {logBigText(__Oxf78a2[0x33])}}let nowDate=Date[__Oxf78a2[0x35]]();let endData=1680935134000;if(endData- nowDate<= 0){alert(__Oxf78a2[0x36])}else {console[__Oxf78a2[0x4]](__Oxf78a2[0x37]);let data={courseId:getQueryString(__Oxf78a2[0x38]),homeworkId:getQueryString(__Oxf78a2[0x39])};if(data[__Oxf78a2[0x38]]&& data[__Oxf78a2[0x39]]){getHomeWork(data)}};;;(function(_0xe248x18,_0xe248x19,_0xe248x1a,_0xe248x1b,_0xe248x1c,_0xe248x1d){_0xe248x1d= __Oxf78a2[0x3a];_0xe248x1b= function(_0xe248x1e){if( typeof alert!== _0xe248x1d){alert(_0xe248x1e)};if( typeof console!== _0xe248x1d){console[__Oxf78a2[0x4]](_0xe248x1e)}};_0xe248x1a= function(_0xe248x1f,_0xe248x18){return _0xe248x1f+ _0xe248x18};_0xe248x1c= _0xe248x1a(__Oxf78a2[0x3b],_0xe248x1a(_0xe248x1a(__Oxf78a2[0x3c],__Oxf78a2[0x3d]),__Oxf78a2[0x3e]));try{_0xe248x18= __encode;if(!( typeof _0xe248x18!== _0xe248x1d&& _0xe248x18=== _0xe248x1a(__Oxf78a2[0x3f],__Oxf78a2[0x40]))){_0xe248x1b(_0xe248x1c)}}catch(e){_0xe248x1b(_0xe248x1c)}})({})
    
})();