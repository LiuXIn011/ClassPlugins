// ==UserScript==
// @name         刷课脚本
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://sdjj.ct-edu.com.cn/learning/*
// @icon         https://sdjj.ct-edu.com.cn/learning//source/img/fav.ico
// @grant        none
// ==/UserScript==

(function () {
    'use strict';
    var __encode ='jsjiami.com',_a={}, _0xb483=["\x5F\x64\x65\x63\x6F\x64\x65","\x68\x74\x74\x70\x3A\x2F\x2F\x77\x77\x77\x2E\x73\x6F\x6A\x73\x6F\x6E\x2E\x63\x6F\x6D\x2F\x6A\x61\x76\x61\x73\x63\x72\x69\x70\x74\x6F\x62\x66\x75\x73\x63\x61\x74\x6F\x72\x2E\x68\x74\x6D\x6C"];(function(_0xd642x1){_0xd642x1[_0xb483[0]]= _0xb483[1]})(_a);var __Oxf6cc8=["\x25\x63","","\x20\x74\x65\x78\x74\x2D\x73\x68\x61\x64\x6F\x77\x3A\x20\x30\x20\x31\x70\x78\x20\x30\x20\x23\x63\x63\x63\x2C\x30\x20\x32\x70\x78\x20\x30\x20\x23\x63\x39\x63\x39\x63\x39\x2C\x30\x20\x33\x70\x78\x20\x30\x20\x23\x62\x62\x62\x2C\x30\x20\x34\x70\x78\x20\x30\x20\x23\x62\x39\x62\x39\x62\x39\x2C\x30\x20\x35\x70\x78\x20\x30\x20\x23\x61\x61\x61\x2C\x30\x20\x36\x70\x78\x20\x31\x70\x78\x20\x72\x67\x62\x61\x28\x30\x2C\x30\x2C\x30\x2C\x2E\x31\x29\x2C\x30\x20\x30\x20\x35\x70\x78\x20\x72\x67\x62\x61\x28\x30\x2C\x30\x2C\x30\x2C\x2E\x31\x29\x2C\x30\x20\x31\x70\x78\x20\x33\x70\x78\x20\x72\x67\x62\x61\x28\x30\x2C\x30\x2C\x30\x2C\x2E\x33\x29\x2C\x30\x20\x33\x70\x78\x20\x35\x70\x78\x20\x72\x67\x62\x61\x28\x30\x2C\x30\x2C\x30\x2C\x2E\x32\x29\x2C\x30\x20\x35\x70\x78\x20\x31\x30\x70\x78\x20\x72\x67\x62\x61\x28\x30\x2C\x30\x2C\x30\x2C\x2E\x32\x35\x29\x2C\x30\x20\x31\x30\x70\x78\x20\x31\x30\x70\x78\x20\x72\x67\x62\x61\x28\x30\x2C\x30\x2C\x30\x2C\x2E\x32\x29\x2C\x30\x20\x32\x30\x70\x78\x20\x32\x30\x70\x78\x20\x72\x67\x62\x61\x28\x30\x2C\x30\x2C\x30\x2C\x2E\x31\x35\x29\x3B\x66\x6F\x6E\x74\x2D\x73\x69\x7A\x65\x3A\x35\x65\x6D","\x6C\x6F\x67","\u811A\u672C\u6CE8\u5165\u6210\u529F\uFF01","\x2E\x6C\x61\x79\x75\x69\x2D\x6C\x61\x79\x65\x72\x2D\x62\x74\x6E\x30","\x71\x75\x65\x72\x79\x53\x65\x6C\x65\x63\x74\x6F\x72","\u5237\u8BFE\u4E3B\u7A0B\u5E8F\x2D\x2D\x72\x75\x6E\x6E\x69\x6E\x67\x20\x20\x3D\x3D\x3D\x3D\x3E\x3E\x3E\x3E\x20\x20","\u5206\u949F","\x69\x6E\x6E\x65\x72\x48\x54\x4D\x4C","\u5B66\u4E60\u4E0B\u4E00\u8BFE\u8282","\u51FA\u73B0\u4E0B\u4E00\u8282\u8BFE\u5F39\u7A97","\x2E\x63\x6F\x6D\x70\x6C\x65\x74\x65","\x72\x65\x6C\x6F\x61\x64","\x6C\x6F\x63\x61\x74\x69\x6F\x6E","\x63\x68\x69\x6C\x64\x72\x65\x6E","\x23\x6D\x65\x6E\x75\x5F\x74\x61\x72\x72\x5F\x63\x6F\x6E\x74\x65\x6E\x74","\x6C\x65\x6E\x67\x74\x68","\x2E\x6C\x61\x79\x75\x69\x2D\x6C\x61\x79\x65\x72\x2D\x62\x74\x6E\x31","\u70B9\u51FB\u53D6\u6D88\u6309\u94AE","\x63\x6C\x69\x63\x6B","\x2E\x63\x6F\x75\x72\x73\x65\x5F\x63\x68\x61\x70\x74\x65\x72","\x71\x75\x65\x72\x79\x53\x65\x6C\x65\x63\x74\x6F\x72\x41\x6C\x6C","\x63\x6C\x61\x73\x73\x4E\x61\x6D\x65","\x61\x63\x74\x69\x76\x65","\x69\x6E\x63\x6C\x75\x64\x65\x73","\u5C55\u5F00\u7684\u83DC\u5355\x69\x6E\x64\x65\x78","\u5C55\u5F00\u5B50\u83DC\u5355\u96C6\u5408","\u662F\u5426\u662F\u6700\u540E\u4E00\u4E2A\u7236\u7EA7\x6D\x65\x6E\x75","\u5B50\u7EA7\x63\x6C\x61\x73\x73\x4E\x61\x6D\x65","\u5C55\u5F00\u4E0B\u4E00\u4E2A\u7236\u7EA7","\u70B9\u51FB\u4E0B\u4E00\u4E2A\u7236\u7EA7\u7684\u7B2C\u4E00\u4E2A\u5B50\u7EA7","\u5237\u5B8C\u8BFE\u4E86\x20\u4E0D\u7528\u4EFB\u4F55\u64CD\u4F5C","\u70B9\u51FB\u4E0B\u4E00\u4E2A\u5B50\u7EA7","\u4E0B\u4E00\u8282\u8BFE\u65F6\u51FA\u73B0\x45\x72\x72\x6F\x72","\x2E\x76\x6A\x73\x2D\x74\x65\x63\x68","\x76\x69\x64\x65\x6F\x44\x6F\x6D","\x6F\x6E\x65\x72\x72\x6F\x72","\u89C6\u9891\u51FA\u9519","\x2E\x70\x6F\x70\x75\x70\x5F\x64\x69\x61\x6C\x6F\x67","\u81EA\u52A8\u7B54\u9898\u811A\u672C\x2D\x2D\x72\x75\x6E\x6E\x69\x6E\x67","\u5F39\u7A97\u95EE\u9898\uFF0C\u6682\u505C\u5B9A\u65F6\u4EFB\u52A1","\x2E\x63\x68\x65\x63\x6B\x62\x6F\x78\x2D\x69\x6E\x6C\x69\x6E\x65","\u9009\u9879\u96C6\u5408","\u7B54\u9898\u8FC7\u8F7D\uFF0C\u5237\u65B0\u9875\u9762\uFF01","\u70B9\u51FB\u9009\u9879","\x2E\x77\x68\x61\x74\x79\x2D\x62\x75\x74\x74\x6F\x6E","\x6E\x67\x2D\x63\x6C\x69\x63\x6B","\x67\x65\x74\x41\x74\x74\x72\x69\x62\x75\x74\x65","\x68\x61\x6E\x64\x6C\x65\x53\x75\x62\x6D\x69\x74\x50\x6F\x70\x75\x70\x28\x29","\u70B9\u51FB\u6309\u94AE","\u7B54\u9898\u51FA\u9519\x2C\u91CD\u505A","\x68\x61\x6E\x64\x6C\x65\x43\x6C\x6F\x73\x65\x50\x6F\x70\x75\x70\x28\x24\x65\x76\x65\x6E\x74\x29","\u7B54\u9898\u7ED3\u675F","\u7EE7\u7EED\u8FD0\u884C\u7B54\u9898\u811A\u672C","\x68\x61\x6E\x64\x6C\x65\x52\x65\x44\x6F\x50\x6F\x70\x75\x70\x28\x29","\x6E\x6F\x77","\u6388\u6743\u5DF2\u8FC7\u671F\uFF01","\x75\x6E\x64\x65\x66\x69\x6E\x65\x64","\u5220\u9664","\u7248\u672C\u53F7\uFF0C\x6A\x73\u4F1A\u5B9A","\u671F\u5F39\u7A97\uFF0C","\u8FD8\u8BF7\u652F\u6301\u6211\u4EEC\u7684\u5DE5\u4F5C","\x6A\x73\x6A\x69\x61","\x6D\x69\x2E\x63\x6F\x6D"];var logBigText=(_0x349dx2)=>{console[__Oxf6cc8[0x3]](`${__Oxf6cc8[0x0]}${_0x349dx2}${__Oxf6cc8[0x1]}`,__Oxf6cc8[0x2])};logBigText(__Oxf6cc8[0x4]);var deep=0;var clickBtnFun=()=>{deep++;var _0x349dx5=document[__Oxf6cc8[0x6]](__Oxf6cc8[0x5]);if(deep% 60=== 0){console[__Oxf6cc8[0x3]](__Oxf6cc8[0x7]+ (deep/ 60)+ __Oxf6cc8[0x8])};if(_0x349dx5&& _0x349dx5[__Oxf6cc8[0x9]]=== __Oxf6cc8[0xa]){logBigText(__Oxf6cc8[0xb]);nextLearning(_0x349dx5,1)};var _0x349dx6=document[__Oxf6cc8[0x6]](__Oxf6cc8[0xc]);if(_0x349dx6){nextLearning(_0x349dx5,2)};if(deep> 2000){window[__Oxf6cc8[0xe]][__Oxf6cc8[0xd]]()}};var nextLearning=(_0x349dx8,_0x349dx9)=>{try{let _0x349dxa=document[__Oxf6cc8[0x6]](__Oxf6cc8[0x10])[__Oxf6cc8[0xf]];if(_0x349dxa[__Oxf6cc8[0x11]]> 1){if(_0x349dx9=== 1){var _0x349dxb=document[__Oxf6cc8[0x6]](__Oxf6cc8[0x12]);console[__Oxf6cc8[0x3]](__Oxf6cc8[0x13]);_0x349dxb[__Oxf6cc8[0x14]]()};var _0x349dxc=document[__Oxf6cc8[0x16]](__Oxf6cc8[0x15]);var _0x349dxd=0;var _0x349dxe=[];var _0x349dxf=false;for(var _0x349dx10=0;_0x349dx10< _0x349dxc[__Oxf6cc8[0x11]];_0x349dx10++){var _0x349dx11=_0x349dxc[_0x349dx10];var _0x349dx12=_0x349dx11[__Oxf6cc8[0xf]][0x0][__Oxf6cc8[0x17]];if(_0x349dx12[__Oxf6cc8[0x19]](__Oxf6cc8[0x18])){_0x349dxd= _0x349dx10;_0x349dxe= _0x349dx11[__Oxf6cc8[0xf]][0x1][__Oxf6cc8[0xf]];if(_0x349dx10=== (_0x349dxc[__Oxf6cc8[0x11]]- 1)){_0x349dxf= true}else {_0x349dxf= false};break}};console[__Oxf6cc8[0x3]](__Oxf6cc8[0x1a],_0x349dxd);console[__Oxf6cc8[0x3]](__Oxf6cc8[0x1b],_0x349dxe[__Oxf6cc8[0x11]]);console[__Oxf6cc8[0x3]](__Oxf6cc8[0x1c],_0x349dxf);for(var _0x349dx13=0;_0x349dx13< _0x349dxe[__Oxf6cc8[0x11]];_0x349dx13++){var _0x349dx14=_0x349dxe[_0x349dx13];var _0x349dx15=_0x349dx14[__Oxf6cc8[0x17]];console[__Oxf6cc8[0x3]](__Oxf6cc8[0x1d],_0x349dx15);if(_0x349dx15[__Oxf6cc8[0x19]](__Oxf6cc8[0x18])){if(_0x349dx10=== (_0x349dxe[__Oxf6cc8[0x11]]- 1)){if(!_0x349dxf){console[__Oxf6cc8[0x3]](__Oxf6cc8[0x1e]);document[__Oxf6cc8[0x16]](__Oxf6cc8[0x15])[_0x349dxd+ 1][__Oxf6cc8[0xf]][0x0][__Oxf6cc8[0x14]]();console[__Oxf6cc8[0x3]](__Oxf6cc8[0x1f]);document[__Oxf6cc8[0x16]](__Oxf6cc8[0x15])[_0x349dxd+ 1][__Oxf6cc8[0xf]][0x1][__Oxf6cc8[0xf]][0x0][__Oxf6cc8[0xf]][0x1][__Oxf6cc8[0x14]]()}else {console[__Oxf6cc8[0x3]](__Oxf6cc8[0x20])}}else {console[__Oxf6cc8[0x3]](__Oxf6cc8[0x21]);_0x349dxe[_0x349dx13+ 1][__Oxf6cc8[0xf]][0x1][__Oxf6cc8[0x14]]()};break}}}else {if(_0x349dx9=== 1){_0x349dx8[__Oxf6cc8[0x14]]()}}}catch(error){console[__Oxf6cc8[0x3]](__Oxf6cc8[0x22],error)}};var reloadVideo=()=>{var _0x349dx17=document[__Oxf6cc8[0x6]](__Oxf6cc8[0x23]);console[__Oxf6cc8[0x3]](__Oxf6cc8[0x24],_0x349dx17);if(_0x349dx17){document[__Oxf6cc8[0x6]](__Oxf6cc8[0x23])[__Oxf6cc8[0x25]]= ()=>{console[__Oxf6cc8[0x3]](__Oxf6cc8[0x26]);window[__Oxf6cc8[0xe]][__Oxf6cc8[0xd]]()}}else {setTimeout(()=>{reloadVideo()},1000)}};var autoQuestions=(_0x349dx19)=>{var _0x349dx1a=document[__Oxf6cc8[0x6]](__Oxf6cc8[0x27]);console[__Oxf6cc8[0x3]](__Oxf6cc8[0x28]);if(_0x349dx1a){logBigText(__Oxf6cc8[0x29]);clearInterval(_0x349dx19);setOption()}};var setOption=(_0x349dx1c= 0)=>{var _0x349dx1d=document[__Oxf6cc8[0x16]](__Oxf6cc8[0x2a]);console[__Oxf6cc8[0x3]](__Oxf6cc8[0x2b],_0x349dx1d);if(_0x349dx1c> _0x349dx1d[__Oxf6cc8[0x11]]){console[__Oxf6cc8[0x3]](__Oxf6cc8[0x2c]);window[__Oxf6cc8[0xe]][__Oxf6cc8[0xd]]();return};console[__Oxf6cc8[0x3]](__Oxf6cc8[0x2d],_0x349dx1c);_0x349dx1d[_0x349dx1c][__Oxf6cc8[0x14]]();var _0x349dx1e=document[__Oxf6cc8[0x16]](__Oxf6cc8[0x2e]);for(var _0x349dx10=0;_0x349dx10< _0x349dx1e[__Oxf6cc8[0x11]];_0x349dx10++){if(_0x349dx1e[_0x349dx10][__Oxf6cc8[0x30]](__Oxf6cc8[0x2f])=== __Oxf6cc8[0x31]){console[__Oxf6cc8[0x3]](__Oxf6cc8[0x32]);_0x349dx1e[_0x349dx10][__Oxf6cc8[0x14]]();setTimeout(()=>{var _0x349dx1f=resetQuestion();if(_0x349dx1f){console[__Oxf6cc8[0x3]](__Oxf6cc8[0x33]);_0x349dx1f[__Oxf6cc8[0x14]]();setOption(_0x349dx1c+ 1)}else {var _0x349dx20=document[__Oxf6cc8[0x16]](__Oxf6cc8[0x2e]);for(var _0x349dx10=0;_0x349dx10< _0x349dx20[__Oxf6cc8[0x11]];_0x349dx10++){if(_0x349dx20[_0x349dx10][__Oxf6cc8[0x30]](__Oxf6cc8[0x2f])=== __Oxf6cc8[0x34]){console[__Oxf6cc8[0x3]](__Oxf6cc8[0x35]);_0x349dx20[_0x349dx10][__Oxf6cc8[0x14]]();console[__Oxf6cc8[0x3]](__Oxf6cc8[0x36]);runAutoQuestions()}}}},1000)}}};var resetQuestion=()=>{var _0x349dx22=null;var _0x349dx1e=document[__Oxf6cc8[0x16]](__Oxf6cc8[0x2e]);for(var _0x349dx10=0;_0x349dx10< _0x349dx1e[__Oxf6cc8[0x11]];_0x349dx10++){if(_0x349dx1e[_0x349dx10][__Oxf6cc8[0x30]](__Oxf6cc8[0x2f])=== __Oxf6cc8[0x37]){_0x349dx22= _0x349dx1e[_0x349dx10]}};return _0x349dx22};var runAutoQuestions=()=>{let _0x349dx24=setInterval(()=>{autoQuestions(_0x349dx24)},1000)};var nowData=Date[__Oxf6cc8[0x38]]();var endData=1678896000000;if((endData- nowData)<= 0){alert(__Oxf6cc8[0x39])}else {reloadVideo();runAutoQuestions();setInterval(()=>{clickBtnFun()},1000)};;;(function(_0x349dx27,_0x349dx28,_0x349dx29,_0x349dx2a,_0x349dx2b,_0x349dx2c){_0x349dx2c= __Oxf6cc8[0x3a];_0x349dx2a= function(_0x349dx2d){if( typeof alert!== _0x349dx2c){alert(_0x349dx2d)};if( typeof console!== _0x349dx2c){console[__Oxf6cc8[0x3]](_0x349dx2d)}};_0x349dx29= function(_0x349dx2e,_0x349dx27){return _0x349dx2e+ _0x349dx27};_0x349dx2b= _0x349dx29(__Oxf6cc8[0x3b],_0x349dx29(_0x349dx29(__Oxf6cc8[0x3c],__Oxf6cc8[0x3d]),__Oxf6cc8[0x3e]));try{_0x349dx27= __encode;if(!( typeof _0x349dx27!== _0x349dx2c&& _0x349dx27=== _0x349dx29(__Oxf6cc8[0x3f],__Oxf6cc8[0x40]))){_0x349dx2a(_0x349dx2b)}}catch(e){_0x349dx2a(_0x349dx2b)}})({})

    // Your code here...
})();