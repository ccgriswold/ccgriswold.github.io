!function n(r,i,e){function o(u,f){if(!i[u]){if(!r[u]){var l="function"==typeof require&&require;if(!f&&l)return l(u,!0);if(t)return t(u,!0);var s=new Error("Cannot find module '"+u+"'");throw s.code="MODULE_NOT_FOUND",s}var p=i[u]={exports:{}};r[u][0].call(p.exports,function(n){var i=r[u][1][n];return o(i?i:n)},p,p.exports,n,r,i,e)}return i[u].exports}for(var t="function"==typeof require&&require,u=0;u<e.length;u++)o(e[u]);return o}({1:[function(n,r,i){$(".buttonFlip").on("click",function(){"none"!=$(".flipper").css("display")?$(".buttonFlip2").show().siblings("li").hide():"none"!=$(".buttonFlip2").css("display")&&$(".flipper").show().siblings("li").hide()})},{}]},{},[1]);