// ==UserScript==
// @name         上海大学刷课脚本
// @namespace    http://tampermonkey.net/
// @version      1.0.7
// @description  try to take over the world!
// @author       You
// @match        https://sdjj.ct-edu.com.cn/learning/*
// @icon         https://sdjj.ct-edu.com.cn/learning//source/img/fav.ico
// @grant        none
// ==/UserScript==

(function () {
  'use strict';
  // log输出
  var logBigText = (text) => {
    console.log(`%c${text}`, " text-shadow: 0 1px 0 #ccc,0 2px 0 #c9c9c9,0 3px 0 #bbb,0 4px 0 #b9b9b9,0 5px 0 #aaa,0 6px 1px rgba(0,0,0,.1),0 0 5px rgba(0,0,0,.1),0 1px 3px rgba(0,0,0,.3),0 3px 5px rgba(0,0,0,.2),0 5px 10px rgba(0,0,0,.25),0 10px 10px rgba(0,0,0,.2),0 20px 20px rgba(0,0,0,.15);font-size:5em");
  }
  logBigText("脚本注入成功！version:1.0.7")
  var deep = 0
  // 刷课主程序
  var clickBtnFun = () => {
    deep++
    var btnDom = document.querySelector(".layui-layer-btn0")
    if (deep % 60 === 0) {
      console.log('刷课主程序--running  ====>>>>  ' + (deep / 60) + '分钟')
    }
    if (
      btnDom &&
      btnDom.innerHTML === "学习下一课节"
    ) {
      logBigText("出现下一节课弹窗");
      nextLearning()
    }
    // 无意义 鼠标离开后不会自动播放
    // else if (
    //   btnDom &&
    //   btnDom.innerHTML === "继续播放"
    // ) {
    //   console.log("出现播放暂停");
    //   btnDom.click()
    // }
    // 防止过载 2000次刷新
    if (deep > 2000) {
      window.location.reload()
    }
  }
  var clickNextMenu = () => {
    // 点击取消按钮
    var cancelBtnDom = document.querySelector(".layui-layer-btn1")
    console.log("点击取消按钮");
    cancelBtnDom.click()
    // 所有的左侧菜单
    var allParentMenuList = document.querySelectorAll(".course_chapter")
    // 展开的菜单index
    var activeMenuIndex = 0
    // 展开子菜单集合
    var childrenMenuNode = []
    // 是否是最后一个父级menu
    var isLastParentMenu = false
    // 找到展开的菜单index和子菜单集合
    for (var i = 0; i < allParentMenuList.length; i++) {
      var element = allParentMenuList[i];
      var chapterTitleClassName = element.children[0].className
      if (chapterTitleClassName.includes("active")) {
        activeMenuIndex = i
        childrenMenuNode = element.children[1].children
        if (i === (allParentMenuList.length - 1)) {
          isLastParentMenu = true
        } else {
          isLastParentMenu = false
        }
        break
      }
    }
    console.log("展开的菜单index", activeMenuIndex);
    console.log("展开子菜单集合", childrenMenuNode.length);
    console.log("是否是最后一个父级menu", isLastParentMenu);
    for (var j = 0; j < childrenMenuNode.length; j++) {
      var childrenMenuElement = childrenMenuNode[j];
      var childrenMenuElementClassName = childrenMenuElement.className
      console.log("子级className", childrenMenuElementClassName);
      // 找到激活的item
      if (
        childrenMenuElementClassName.includes("active")
      ) {
        // 判断下一步操作
        if (
          // 判断当前active菜单是否是当前子级的最后一个
          j === (childrenMenuNode.length - 1) ||
          // 或者下一个菜单是作业
          childrenMenuNode[j + 1].children[1].innerText.includes("作业")
        ) {
          console.log('当前active菜单是当前子级的最后一个，或者下一个菜单是作业');
          // 判断是否最后一个父级
          if (isLastParentMenu) {
            // 刷完课了 不用任何操作
            console.log("刷完课了 不用任何操作");
          } else {
            // 展开下一个父级
            console.log("展开下一个父级");
            document.querySelectorAll(".course_chapter")[activeMenuIndex + 1].children[0].click()
            // 点击下一个父级的第一个子级
            console.log("点击下一个父级的第一个子级");
            document.querySelectorAll(".course_chapter")[activeMenuIndex + 1].children[1].children[0].children[1].click()
            setTimeout(() => {
              // 如果没继续播放，点击一下播放按钮
              console.log("检测是否自动播放")
              if (document.querySelector(".vjs-current-time-display").innerText === "0:00") {
                console.log("没有自动播放，点击播放按钮");
                document.querySelector(".vjs-play-control").click()
              }
            }, 5000)
          }
        } else {
          // 点击下一个子级
          console.log("点击下一个子级");
          childrenMenuNode[j + 1].children[1].click()
          setTimeout(() => {
            // 如果没继续播放，点击一下播放按钮
            console.log("检测是否自动播放")
            if (document.querySelector(".vjs-current-time-display").innerText === "0:00") {
              console.log("没有自动播放，点击播放按钮");
              document.querySelector(".vjs-play-control").click()
            }
          }, 5000)
        }
        break
      }
    }
  }
  // 下一节课
  var nextLearning = () => {
    try {
      let headMenuBtn = document.querySelector('#menu_tarr_content').children
      // 需要自检的课程
      if (headMenuBtn.length > 1) {
        // 点击下一章节
        clickNextMenu()
      } else {
        // 不需要自检的课程
        // 校验下一章节是否是作业
        // 获取所有菜单项
        let allChildrenMenu = document.querySelectorAll(".course_chapter_item")
        let nextIsHomeWork = false
        // 获取激活的菜单项序号
        let activeMenuIndex = 0
        for (let i = 0; i < allChildrenMenu.length; i++) {
          const element = allChildrenMenu[i];
          const elementClassName = element.className
          if (elementClassName.includes("active")) {
            activeMenuIndex = i
          }
        }
        if (
          // 判断必须不是最后一个菜单
          activeMenuIndex + 1 < allChildrenMenu.length &&
          // 且下一个菜单是作业
          allChildrenMenu[activeMenuIndex + 1].children[1].innerText.includes("作业")
        ) {
          nextIsHomeWork = true
        }
        if (nextIsHomeWork) {
          console.log('下一节课是作业');
          clickNextMenu()
        } else {
          document.querySelector(".layui-layer-btn0").click()
          setTimeout(() => {
            // 如果没继续播放，点击一下播放按钮
            console.log("检测是否自动播放")
            if (document.querySelector(".vjs-current-time-display").innerText === "0:00") {
              console.log("没有自动播放，点击播放按钮");
              document.querySelector(".vjs-play-control").click()
            }
          }, 5000)
        }
      }
    } catch (error) {
      console.log("下一节课时出现Error", error);
    }
  }

  // 视频出错刷新页面
  var reloadVideo = () => {
    var videoDom = document.querySelector(".vjs-tech")
    console.log("videoDom", videoDom)
    if (videoDom) {
      document.querySelector(".vjs-tech").onerror = () => {
        console.log("视频出错");
        window.location.reload()
      }
    } else {
      setTimeout(() => {
        reloadVideo()
      }, 1000)
    }
  }


  //自动答题脚本
  var autoQuestions = (runWorkId) => {
    var dialog = document.querySelector('.popup_dialog')
    console.log("自动答题脚本--running");
    // 有弹窗就是有问题了
    if (dialog) {
      logBigText("弹窗问题，暂停定时任务");
      // 暂停定时任务  
      clearInterval(runWorkId)
      // 开始答题
      setOption()
    }
  }
  // 选项提交
  var setOption = (index = 0) => {
    var optionList = document.querySelectorAll(".checkbox-inline")
    console.log("选项集合", optionList);
    if (index > optionList.length) {
      console.log('答题过载，刷新页面！');
      window.location.reload()
      return
    }
    // 点击选项
    console.log("点击选项", index);
    optionList[index].click()
    // 按钮集合
    var submitBtnList = document.querySelectorAll(".whaty-button")
    for (var i = 0; i < submitBtnList.length; i++) {
      // 找到提交问题的按钮
      if (submitBtnList[i].getAttribute("ng-click") === "handleSubmitPopup()") {
        // 点击按钮
        console.log("点击按钮");
        submitBtnList[i].click()
        // 观测是否答题出错
        setTimeout(() => {
          var resetQuestionDom = resetQuestion()
          // 如果出错 切换下一个选项 递归提交
          if (resetQuestionDom) {
            console.log("答题出错,重做");
            resetQuestionDom.click()
            setOption(index + 1)
          } else {
            // 点击继续按钮
            var goOnBtnList = document.querySelectorAll(".whaty-button")
            for (var i = 0; i < goOnBtnList.length; i++) {
              // 找到继续按钮
              if (goOnBtnList[i].getAttribute("ng-click") === "handleClosePopup($event)") {
                console.log("答题结束");
                goOnBtnList[i].click()
                console.log("继续运行答题脚本");
                runAutoQuestions()
              }
            }
          }
        }, 1000)
      }
    }
  }
  //回答错误  重做按钮
  var resetQuestion = () => {
    var redoBtn = null
    // 按钮集合
    var submitBtnList = document.querySelectorAll(".whaty-button")
    for (var i = 0; i < submitBtnList.length; i++) {
      // 找到提交问题的按钮
      if (submitBtnList[i].getAttribute("ng-click") === "handleReDoPopup()") {
        redoBtn = submitBtnList[i]
      }
    }
    return redoBtn
  }

  var runAutoQuestions = () => {
    let Timer = setInterval(() => {
      autoQuestions(Timer)
    }, 1000)
  }



  let nowDate = Date.now()
  let endData = 1699082940000
  if (endData - nowDate <= 0) {
    alert("授权已过期！")
  } else {
    console.log("授权正常！");
    // 视频出错检测
    reloadVideo()
    // 答题程序
    runAutoQuestions()
    // 定时任务
    setInterval(() => {
      // 刷课主程序
      clickBtnFun()

    }, 1000)
  }
})();