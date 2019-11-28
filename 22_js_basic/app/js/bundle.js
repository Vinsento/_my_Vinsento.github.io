(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

// app 1
document.querySelector('#app1_a').addEventListener('click', function (e) {
  e.preventDefault();
  var firstName = document.querySelector('#app1_b').value;
  document.querySelector('#app1').innerText = 'Привет ' + firstName + '!';
  document.querySelector('#app1_b').value = '';
}); // app 2

document.querySelector('#app2_a').addEventListener('click', function (e) {
  e.preventDefault();
  var year = 2019;
  var birthDay = +document.querySelector('#app2_b').value;
  var age = year - birthDay;
  document.querySelector('#app2').innerText = 'Вам ' + age + ' год(а)!';
  document.querySelector('#app2_b').value = '';
}); //app 3

document.querySelector('#app3_a').addEventListener('click', function (e) {
  e.preventDefault();
  var side = document.querySelector('#app3_b').value;
  var app = document.querySelector('#app3');
  app.innerText = 'Периметр: ' + side * 4;
  document.querySelector('#app3_b').value = '';
}); //app 4

document.querySelector('#app4_a').addEventListener('click', function (e) {
  e.preventDefault();
  var rad = document.querySelector('#app4_b').value;
  var app = document.querySelector('#app4');
  app.innerText = 'Площадь круга: ' + Math.round(Math.PI * rad * rad);
  document.querySelector('#app4_b').value = '';
}); //app 5

document.querySelector('#app5_a').addEventListener('click', function (e) {
  e.preventDefault();
  var dist = document.querySelector('#app5_b').value,
      hours = document.querySelector('#app5_c').value,
      app = document.querySelector('#app5'),
      speed = Math.round(dist / hours);
  app.innerText = 'скорость: ' + speed + ' км/ч';
  document.querySelector('#app5_b').value = '';
  document.querySelector('#app5_c').value = '';
}); //app 6

document.querySelector('#app6_a').addEventListener('click', function (e) {
  e.preventDefault();
  var usd = document.querySelector('#app6_b').value;
  var app = document.querySelector('#app6');
  var eur = 0.91;
  app.innerText = 'В евро: ' + usd * eur;
  document.querySelector('#app6_b').value = '';
}); //app 7

document.querySelector('#app7_a').addEventListener('click', function (e) {
  e.preventDefault();
  var currentMemory = document.querySelector('#app7_b').value;
  var app = document.querySelector('#app7');
  var file = Math.round(currentMemory / 0.82);
  app.innerText = 'Файлов поместиться: ' + file;
  document.querySelector('#app7_b').value = '';
}); //app 8

document.querySelector('#app8_a').addEventListener('click', function (e) {
  e.preventDefault();
  var cash = document.querySelector('#app8_b').value,
      chocoPrice = document.querySelector('#app8_c').value,
      app = document.querySelector('#app8'),
      quantity = Math.floor(cash / chocoPrice),
      change = cash - quantity * chocoPrice;

  if (cash <= 0) {
    app.innerText = 'Ваш кошелек пуст...';
  } else if (chocoPrice <= 0) {
    app.innerText = 'Неверная цена...';
  } else {
    app.innerText = 'Шоколадок: ' + quantity + ' ' + 'Сдача: ' + change;
  }

  ;
  document.querySelector('#app8_b').value = '';
  document.querySelector('#app8_c').value = '';
}); //app 9

document.querySelector('#app9_a').addEventListener('click', function (e) {
  e.preventDefault();
  var num = document.querySelector('#app9_b').value,
      app = document.querySelector('#app9'),
      numOne = num % 10,
      numTwo = (num - num % 10) / 10 % 10,
      numThree = (num - num % 100) / 100;

  if (num / 1000 > 1) {
    app.innerText = 'Число не трехзначное...';
  } else {
    app.innerText = 'Вот наоборот: ' + numOne + numTwo + numThree;
  }

  document.querySelector('#app9_b').value = '';
}); //app 10

document.querySelector('#app10_a').addEventListener('click', function (e) {
  e.preventDefault();
  var currentSum = document.querySelector('#app10_b').value,
      rate = 0.05,
      deposit = currentSum * rate / 12,
      app = document.querySelector('#app10');
  app.innerText = 'Процент за 2 мес: ' + deposit.toFixed(2) * 2;
  document.querySelector('#app10_b').value = '';
});

},{}]},{},[1])

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJwcm9qZWN0cy8yMl9qc19iYXNpYy9zcmMvanMvYXBwLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQTtBQUVBLFFBQVEsQ0FBQyxhQUFULENBQXVCLFNBQXZCLEVBQWtDLGdCQUFsQyxDQUFtRCxPQUFuRCxFQUE0RCxVQUFTLENBQVQsRUFBVztBQUN0RSxFQUFBLENBQUMsQ0FBQyxjQUFGO0FBQ0EsTUFBSSxTQUFTLEdBQUcsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsU0FBdkIsRUFBa0MsS0FBbEQ7QUFDQSxFQUFBLFFBQVEsQ0FBQyxhQUFULENBQXVCLE9BQXZCLEVBQWdDLFNBQWhDLEdBQTRDLFlBQVksU0FBWixHQUF3QixHQUFwRTtBQUNBLEVBQUEsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsU0FBdkIsRUFBa0MsS0FBbEMsR0FBMEMsRUFBMUM7QUFDQSxDQUxELEUsQ0FPQTs7QUFFQSxRQUFRLENBQUMsYUFBVCxDQUF1QixTQUF2QixFQUFrQyxnQkFBbEMsQ0FBbUQsT0FBbkQsRUFBNEQsVUFBUyxDQUFULEVBQVc7QUFDdEUsRUFBQSxDQUFDLENBQUMsY0FBRjtBQUNBLE1BQUksSUFBSSxHQUFHLElBQVg7QUFDQSxNQUFJLFFBQVEsR0FBRyxDQUFFLFFBQVEsQ0FBQyxhQUFULENBQXVCLFNBQXZCLEVBQWtDLEtBQW5EO0FBQ0EsTUFBSSxHQUFHLEdBQUcsSUFBSSxHQUFHLFFBQWpCO0FBQ0EsRUFBQSxRQUFRLENBQUMsYUFBVCxDQUF1QixPQUF2QixFQUFnQyxTQUFoQyxHQUE0QyxTQUFTLEdBQVQsR0FBZSxVQUEzRDtBQUNBLEVBQUEsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsU0FBdkIsRUFBa0MsS0FBbEMsR0FBMEMsRUFBMUM7QUFDQSxDQVBELEUsQ0FTQTs7QUFFQSxRQUFRLENBQUMsYUFBVCxDQUF1QixTQUF2QixFQUFrQyxnQkFBbEMsQ0FBbUQsT0FBbkQsRUFB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LFVBQVUsR0FBQyxJQUFYLEdBQWdCLEVBRjlCO0FBQUEsTUFHSSxHQUFHLEdBQUcsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsUUFBdkIsQ0FIVjtBQUlBLEVBQUEsR0FBRyxDQUFDLFNBQUosR0FBZ0IsdUJBQXVCLE9BQU8sQ0FBQyxPQUFSLENBQWdCLENBQWhCLElBQW1CLENBQTFEO0FBQ0EsRUFBQSxRQUFRLENBQUMsYUFBVCxDQUF1QixVQUF2QixFQUFtQyxLQUFuQyxHQUEyQyxFQUEzQztBQUNBLENBUkQiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsIi8vIGFwcCAxXHJcblxyXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYXBwMV9hJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKXtcclxuXHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblx0bGV0IGZpcnN0TmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhcHAxX2InKS52YWx1ZTtcclxuXHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYXBwMScpLmlubmVyVGV4dCA9ICfQn9GA0LjQstC10YIgJyArIGZpcnN0TmFtZSArICchJztcclxuXHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYXBwMV9iJykudmFsdWUgPSAnJztcclxufSk7XHJcblxyXG4vLyBhcHAgMlxyXG5cclxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FwcDJfYScpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSl7XHJcblx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdGxldCB5ZWFyID0gMjAxOTtcclxuXHRsZXQgYmlydGhEYXkgPSArKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhcHAyX2InKS52YWx1ZSk7XHJcblx0bGV0IGFnZSA9IHllYXIgLSBiaXJ0aERheTtcclxuXHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYXBwMicpLmlubmVyVGV4dCA9ICfQktCw0LwgJyArIGFnZSArICcg0LPQvtC0KNCwKSEnO1xyXG5cdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhcHAyX2InKS52YWx1ZSA9ICcnO1xyXG59KTtcclxuXHJcbi8vYXBwIDNcclxuXHJcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhcHAzX2EnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpe1xyXG5cdGUucHJldmVudERlZmF1bHQoKTtcclxuXHRsZXQgc2lkZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhcHAzX2InKS52YWx1ZTtcclxuXHRsZXQgYXBwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FwcDMnKTtcclxuXHRhcHAuaW5uZXJUZXh0ID0gJ9Cf0LXRgNC40LzQtdGC0YA6ICcgKyBzaWRlKjQ7XHJcblx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FwcDNfYicpLnZhbHVlID0gJyc7XHJcbn0pO1xyXG5cclxuLy9hcHAgNFxyXG5cclxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FwcDRfYScpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSl7XHJcblx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdGxldCByYWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYXBwNF9iJykudmFsdWU7XHJcblx0bGV0IGFwcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhcHA0Jyk7XHJcblx0YXBwLmlubmVyVGV4dCA9ICfQn9C70L7RidCw0LTRjCDQutGA0YPQs9CwOiAnICsgTWF0aC5yb3VuZChNYXRoLlBJICogcmFkICogcmFkKTtcclxuXHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYXBwNF9iJykudmFsdWUgPSAnJztcclxufSk7XHJcblxyXG4vL2FwcCA1XHJcblxyXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYXBwNV9hJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKXtcclxuXHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblx0bGV0IGRpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYXBwNV9iJykudmFsdWUsXHJcblx0XHRob3VycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhcHA1X2MnKS52YWx1ZSxcclxuXHQgICAgYXBwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FwcDUnKSxcclxuXHQgICAgc3BlZWQgPSBNYXRoLnJvdW5kKGRpc3QvaG91cnMpO1xyXG5cdGFwcC5pbm5lclRleHQgPSAn0YHQutC+0YDQvtGB0YLRjDogJyArIHNwZWVkICsgJyDQutC8L9GHJztcclxuXHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYXBwNV9iJykudmFsdWUgPSAnJztcclxuXHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYXBwNV9jJykudmFsdWUgPSAnJztcclxufSk7XHJcblxyXG4vL2FwcCA2XHJcblxyXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYXBwNl9hJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKXtcclxuXHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblx0bGV0IHVzZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhcHA2X2InKS52YWx1ZTtcclxuXHRsZXQgYXBwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FwcDYnKTtcclxuXHRjb25zdCBldXIgPSAwLjkxO1xyXG5cdGFwcC5pbm5lclRleHQgPSAn0JIg0LXQstGA0L46ICcgKyB1c2QqZXVyO1xyXG5cdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhcHA2X2InKS52YWx1ZSA9ICcnO1xyXG59KTtcclxuXHJcbi8vYXBwIDdcclxuXHJcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhcHA3X2EnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpe1xyXG5cdGUucHJldmVudERlZmF1bHQoKTtcclxuXHRsZXQgY3VycmVudE1lbW9yeSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhcHA3X2InKS52YWx1ZTtcclxuXHRsZXQgYXBwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FwcDcnKTtcclxuXHRsZXQgZmlsZSA9IE1hdGgucm91bmQoY3VycmVudE1lbW9yeS8wLjgyKTtcclxuXHRhcHAuaW5uZXJUZXh0ID0gJ9Ck0LDQudC70L7QsiDQv9C+0LzQtdGB0YLQuNGC0YzRgdGPOiAnICsgZmlsZTtcclxuXHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYXBwN19iJykudmFsdWUgPSAnJztcclxufSk7XHJcblxyXG4vL2FwcCA4XHJcblxyXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYXBwOF9hJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKXtcclxuXHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblx0bGV0IGNhc2ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYXBwOF9iJykudmFsdWUsXHJcblx0ICAgIGNob2NvUHJpY2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYXBwOF9jJykudmFsdWUsXHJcblx0ICAgIGFwcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhcHA4JyksXHJcblx0ICAgIHF1YW50aXR5ID0gTWF0aC5mbG9vcihjYXNoL2Nob2NvUHJpY2UpLFxyXG5cdCAgICBjaGFuZ2UgPSBjYXNoIC0gcXVhbnRpdHkqY2hvY29QcmljZTtcclxuXHRpZiAoY2FzaCA8PSAwKSB7XHJcblx0XHRhcHAuaW5uZXJUZXh0ID0gJ9CS0LDRiCDQutC+0YjQtdC70LXQuiDQv9GD0YHRgi4uLic7XHJcblx0fSBlbHNlIGlmIChjaG9jb1ByaWNlIDw9IDApIHtcclxuXHRcdGFwcC5pbm5lclRleHQgPSAn0J3QtdCy0LXRgNC90LDRjyDRhtC10L3QsC4uLic7XHJcblx0fSBlbHNlIHtcclxuXHRcdGFwcC5pbm5lclRleHQgPSAn0KjQvtC60L7Qu9Cw0LTQvtC6OiAnICsgcXVhbnRpdHkgKyAnICcgKyAn0KHQtNCw0YfQsDogJyArIGNoYW5nZTtcclxuXHR9O1xyXG5cdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhcHA4X2InKS52YWx1ZSA9ICcnO1xyXG5cdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhcHA4X2MnKS52YWx1ZSA9ICcnO1xyXG59KTtcclxuXHJcbi8vYXBwIDlcclxuXHJcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhcHA5X2EnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpe1xyXG5cdGUucHJldmVudERlZmF1bHQoKTtcclxuXHRsZXQgbnVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FwcDlfYicpLnZhbHVlLFxyXG5cdCAgICBhcHAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYXBwOScpLFxyXG5cdCAgICBudW1PbmUgPSBudW0lMTAsXHJcblx0ICAgIG51bVR3byA9ICgobnVtIC0gbnVtJTEwKS8xMCklMTAsXHJcblx0ICAgIG51bVRocmVlID0gKG51bSAtIG51bSUxMDApLzEwMDtcclxuXHRpZiAobnVtLzEwMDAgPiAxKSB7XHJcblx0XHRhcHAuaW5uZXJUZXh0ID0gJ9Cn0LjRgdC70L4g0L3QtSDRgtGA0LXRhdC30L3QsNGH0L3QvtC1Li4uJztcclxuXHR9IGVsc2Uge1xyXG5cdFx0YXBwLmlubmVyVGV4dCA9ICfQktC+0YIg0L3QsNC+0LHQvtGA0L7RgjogJyArIG51bU9uZSArIG51bVR3byArIG51bVRocmVlO1xyXG5cdH1cclxuXHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYXBwOV9iJykudmFsdWUgPSAnJztcclxufSk7XHJcblxyXG4vL2FwcCAxMFxyXG5cclxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FwcDEwX2EnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpe1xyXG5cdGUucHJldmVudERlZmF1bHQoKTtcclxuXHRsZXQgY3VycmVudFN1bSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhcHAxMF9iJykudmFsdWUsXHJcblx0ICAgIHJhdGUgPSAwLjA1LFxyXG5cdCAgICBkZXBvc2l0ID0gY3VycmVudFN1bSpyYXRlLzEyLFxyXG5cdCAgICBhcHAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYXBwMTAnKTtcclxuXHRhcHAuaW5uZXJUZXh0ID0gJ9Cf0YDQvtGG0LXQvdGCINC30LAgMiDQvNC10YE6ICcgKyBkZXBvc2l0LnRvRml4ZWQoMikqMjtcclxuXHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYXBwMTBfYicpLnZhbHVlID0gJyc7XHJcbn0pOyJdLCJwcmVFeGlzdGluZ0NvbW1lbnQiOiIvLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbTV2WkdWZmJXOWtkV3hsY3k5aWNtOTNjMlZ5TFhCaFkyc3ZYM0J5Wld4MVpHVXVhbk1pTENKd2NtOXFaV04wY3k4eU1sOXFjMTlpWVhOcFl5OXpjbU12YW5NdllYQndMbXB6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUpCUVVGQk96czdRVU5CUVR0QlFVVkJMRkZCUVZFc1EwRkJReXhoUVVGVUxFTkJRWFZDTEZOQlFYWkNMRVZCUVd0RExHZENRVUZzUXl4RFFVRnRSQ3hQUVVGdVJDeEZRVUUwUkN4VlFVRlRMRU5CUVZRc1JVRkJWenRCUVVOMFJTeEZRVUZCTEVOQlFVTXNRMEZCUXl4alFVRkdPMEZCUTBFc1RVRkJTU3hUUVVGVExFZEJRVWNzVVVGQlVTeERRVUZETEdGQlFWUXNRMEZCZFVJc1UwRkJka0lzUlVGQmEwTXNTMEZCYkVRN1FVRkRRU3hGUVVGQkxGRkJRVkVzUTBGQlF5eGhRVUZVTEVOQlFYVkNMRTlCUVhaQ0xFVkJRV2RETEZOQlFXaERMRWRCUVRSRExGbEJRVmtzVTBGQldpeEhRVUYzUWl4SFFVRndSVHRCUVVOQkxFVkJRVUVzVVVGQlVTeERRVUZETEdGQlFWUXNRMEZCZFVJc1UwRkJka0lzUlVGQmEwTXNTMEZCYkVNc1IwRkJNRU1zUlVGQk1VTTdRVUZEUVN4RFFVeEVMRVVzUTBGUFFUczdRVUZGUVN4UlFVRlJMRU5CUVVNc1lVRkJWQ3hEUVVGMVFpeFRRVUYyUWl4RlFVRnJReXhuUWtGQmJFTXNRMEZCYlVRc1QwRkJia1FzUlVGQk5FUXNWVUZCVXl4RFFVRlVMRVZCUVZjN1FVRkRkRVVzUlVGQlFTeERRVUZETEVOQlFVTXNZMEZCUmp0QlFVTkJMRTFCUVVrc1NVRkJTU3hIUVVGSExFbEJRVmc3UVVGRFFTeE5RVUZKTEZGQlFWRXNSMEZCUnl4RFFVRkZMRkZCUVZFc1EwRkJReXhoUVVGVUxFTkJRWFZDTEZOQlFYWkNMRVZCUVd0RExFdEJRVzVFTzBGQlEwRXNUVUZCU1N4SFFVRkhMRWRCUVVjc1NVRkJTU3hIUVVGSExGRkJRV3BDTzBGQlEwRXNSVUZCUVN4UlFVRlJMRU5CUVVNc1lVRkJWQ3hEUVVGMVFpeFBRVUYyUWl4RlFVRm5ReXhUUVVGb1F5eEhRVUUwUXl4VFFVRlRMRWRCUVZRc1IwRkJaU3hWUVVFelJEdEJRVU5CTEVWQlFVRXNVVUZCVVN4RFFVRkRMR0ZCUVZRc1EwRkJkVUlzVTBGQmRrSXNSVUZCYTBNc1MwRkJiRU1zUjBGQk1FTXNSVUZCTVVNN1FVRkRRU3hEUVZCRUxFVXNRMEZUUVRzN1FVRkZRU3hSUVVGUkxFTkJRVU1zWVVGQlZDeERRVUYxUWl4VFFVRjJRaXhGUVVGclF5eG5Ra0ZCYkVNc1EwRkJiVVFzVDBGQmJrUXNSVUZCTkVRc1ZVRkJVeXhEUVVGVUxFVkJRVmM3UVVGRGRFVXNSVUZCUVN4RFFVRkRMRU5CUVVNc1kwRkJSanRCUVVOQkxFMUJRVWtzU1VGQlNTeEhRVUZITEZGQlFWRXNRMEZCUXl4aFFVRlVMRU5CUVhWQ0xGTkJRWFpDTEVWQlFXdERMRXRCUVRkRE8wRkJRMEVzVFVGQlNTeEhRVUZITEVkQlFVY3NVVUZCVVN4RFFVRkRMR0ZCUVZRc1EwRkJkVUlzVDBGQmRrSXNRMEZCVmp0QlFVTkJMRVZCUVVFc1IwRkJSeXhEUVVGRExGTkJRVW9zUjBGQlowSXNaVUZCWlN4SlFVRkpMRWRCUVVNc1EwRkJjRU03UVVGRFFTeEZRVUZCTEZGQlFWRXNRMEZCUXl4aFFVRlVMRU5CUVhWQ0xGTkJRWFpDTEVWQlFXdERMRXRCUVd4RExFZEJRVEJETEVWQlFURkRPMEZCUTBFc1EwRk9SQ3hGTEVOQlVVRTdPMEZCUlVFc1VVRkJVU3hEUVVGRExHRkJRVlFzUTBGQmRVSXNVMEZCZGtJc1JVRkJhME1zWjBKQlFXeERMRU5CUVcxRUxFOUJRVzVFTEVWQlFUUkVMRlZCUVZNc1EwRkJWQ3hGUVVGWE8wRkJRM1JGTEVWQlFVRXNRMEZCUXl4RFFVRkRMR05CUVVZN1FVRkRRU3hOUVVGSkxFZEJRVWNzUjBGQlJ5eFJRVUZSTEVOQlFVTXNZVUZCVkN4RFFVRjFRaXhUUVVGMlFpeEZRVUZyUXl4TFFVRTFRenRCUVVOQkxFMUJRVWtzUjBGQlJ5eEhRVUZITEZGQlFWRXNRMEZCUXl4aFFVRlVMRU5CUVhWQ0xFOUJRWFpDTEVOQlFWWTdRVUZEUVN4RlFVRkJMRWRCUVVjc1EwRkJReXhUUVVGS0xFZEJRV2RDTEc5Q1FVRnZRaXhKUVVGSkxFTkJRVU1zUzBGQlRDeERRVUZYTEVsQlFVa3NRMEZCUXl4RlFVRk1MRWRCUVZVc1IwRkJWaXhIUVVGblFpeEhRVUV6UWl4RFFVRndRenRCUVVOQkxFVkJRVUVzVVVGQlVTeERRVUZETEdGQlFWUXNRMEZCZFVJc1UwRkJka0lzUlVGQmEwTXNTMEZCYkVNc1IwRkJNRU1zUlVGQk1VTTdRVUZEUVN4RFFVNUVMRVVzUTBGUlFUczdRVUZGUVN4UlFVRlJMRU5CUVVNc1lVRkJWQ3hEUVVGMVFpeFRRVUYyUWl4RlFVRnJReXhuUWtGQmJFTXNRMEZCYlVRc1QwRkJia1FzUlVGQk5FUXNWVUZCVXl4RFFVRlVMRVZCUVZjN1FVRkRkRVVzUlVGQlFTeERRVUZETEVOQlFVTXNZMEZCUmp0QlFVTkJMRTFCUVVrc1NVRkJTU3hIUVVGSExGRkJRVkVzUTBGQlF5eGhRVUZVTEVOQlFYVkNMRk5CUVhaQ0xFVkJRV3RETEV0QlFUZERPMEZCUVVFc1RVRkRReXhMUVVGTExFZEJRVWNzVVVGQlVTeERRVUZETEdGQlFWUXNRMEZCZFVJc1UwRkJka0lzUlVGQmEwTXNTMEZFTTBNN1FVRkJRU3hOUVVWSkxFZEJRVWNzUjBGQlJ5eFJRVUZSTEVOQlFVTXNZVUZCVkN4RFFVRjFRaXhQUVVGMlFpeERRVVpXTzBGQlFVRXNUVUZIU1N4TFFVRkxMRWRCUVVjc1NVRkJTU3hEUVVGRExFdEJRVXdzUTBGQlZ5eEpRVUZKTEVkQlFVTXNTMEZCYUVJc1EwRklXanRCUVVsQkxFVkJRVUVzUjBGQlJ5eERRVUZETEZOQlFVb3NSMEZCWjBJc1pVRkJaU3hMUVVGbUxFZEJRWFZDTEU5QlFYWkRPMEZCUTBFc1JVRkJRU3hSUVVGUkxFTkJRVU1zWVVGQlZDeERRVUYxUWl4VFFVRjJRaXhGUVVGclF5eExRVUZzUXl4SFFVRXdReXhGUVVFeFF6dEJRVU5CTEVWQlFVRXNVVUZCVVN4RFFVRkRMR0ZCUVZRc1EwRkJkVUlzVTBGQmRrSXNSVUZCYTBNc1MwRkJiRU1zUjBGQk1FTXNSVUZCTVVNN1FVRkRRU3hEUVZSRUxFVXNRMEZYUVRzN1FVRkZRU3hSUVVGUkxFTkJRVU1zWVVGQlZDeERRVUYxUWl4VFFVRjJRaXhGUVVGclF5eG5Ra0ZCYkVNc1EwRkJiVVFzVDBGQmJrUXNSVUZCTkVRc1ZVRkJVeXhEUVVGVUxFVkJRVmM3UVVGRGRFVXNSVUZCUVN4RFFVRkRMRU5CUVVNc1kwRkJSanRCUVVOQkxFMUJRVWtzUjBGQlJ5eEhRVUZITEZGQlFWRXNRMEZCUXl4aFFVRlVMRU5CUVhWQ0xGTkJRWFpDTEVWQlFXdERMRXRCUVRWRE8wRkJRMEVzVFVGQlNTeEhRVUZITEVkQlFVY3NVVUZCVVN4RFFVRkRMR0ZCUVZRc1EwRkJkVUlzVDBGQmRrSXNRMEZCVmp0QlFVTkJMRTFCUVUwc1IwRkJSeXhIUVVGSExFbEJRVm83UVVGRFFTeEZRVUZCTEVkQlFVY3NRMEZCUXl4VFFVRktMRWRCUVdkQ0xHRkJRV0VzUjBGQlJ5eEhRVUZETEVkQlFXcERPMEZCUTBFc1JVRkJRU3hSUVVGUkxFTkJRVU1zWVVGQlZDeERRVUYxUWl4VFFVRjJRaXhGUVVGclF5eExRVUZzUXl4SFFVRXdReXhGUVVFeFF6dEJRVU5CTEVOQlVFUXNSU3hEUVZOQk96dEJRVVZCTEZGQlFWRXNRMEZCUXl4aFFVRlVMRU5CUVhWQ0xGTkJRWFpDTEVWQlFXdERMR2RDUVVGc1F5eERRVUZ0UkN4UFFVRnVSQ3hGUVVFMFJDeFZRVUZUTEVOQlFWUXNSVUZCVnp0QlFVTjBSU3hGUVVGQkxFTkJRVU1zUTBGQlF5eGpRVUZHTzBGQlEwRXNUVUZCU1N4aFFVRmhMRWRCUVVjc1VVRkJVU3hEUVVGRExHRkJRVlFzUTBGQmRVSXNVMEZCZGtJc1JVRkJhME1zUzBGQmRFUTdRVUZEUVN4TlFVRkpMRWRCUVVjc1IwRkJSeXhSUVVGUkxFTkJRVU1zWVVGQlZDeERRVUYxUWl4UFFVRjJRaXhEUVVGV08wRkJRMEVzVFVGQlNTeEpRVUZKTEVkQlFVY3NTVUZCU1N4RFFVRkRMRXRCUVV3c1EwRkJWeXhoUVVGaExFZEJRVU1zU1VGQmVrSXNRMEZCV0R0QlFVTkJMRVZCUVVFc1IwRkJSeXhEUVVGRExGTkJRVW9zUjBGQlowSXNlVUpCUVhsQ0xFbEJRWHBETzBGQlEwRXNSVUZCUVN4UlFVRlJMRU5CUVVNc1lVRkJWQ3hEUVVGMVFpeFRRVUYyUWl4RlFVRnJReXhMUVVGc1F5eEhRVUV3UXl4RlFVRXhRenRCUVVOQkxFTkJVRVFzUlN4RFFWTkJPenRCUVVWQkxGRkJRVkVzUTBGQlF5eGhRVUZVTEVOQlFYVkNMRk5CUVhaQ0xFVkJRV3RETEdkQ1FVRnNReXhEUVVGdFJDeFBRVUZ1UkN4RlFVRTBSQ3hWUVVGVExFTkJRVlFzUlVGQlZ6dEJRVU4wUlN4RlFVRkJMRU5CUVVNc1EwRkJReXhqUVVGR08wRkJRMEVzVFVGQlNTeEpRVUZKTEVkQlFVY3NVVUZCVVN4RFFVRkRMR0ZCUVZRc1EwRkJkVUlzVTBGQmRrSXNSVUZCYTBNc1MwRkJOME03UVVGQlFTeE5RVU5KTEZWQlFWVXNSMEZCUnl4UlFVRlJMRU5CUVVNc1lVRkJWQ3hEUVVGMVFpeFRRVUYyUWl4RlFVRnJReXhMUVVSdVJEdEJRVUZCTEUxQlJVa3NSMEZCUnl4SFFVRkhMRkZCUVZFc1EwRkJReXhoUVVGVUxFTkJRWFZDTEU5QlFYWkNMRU5CUmxZN1FVRkJRU3hOUVVkSkxGRkJRVkVzUjBGQlJ5eEpRVUZKTEVOQlFVTXNTMEZCVEN4RFFVRlhMRWxCUVVrc1IwRkJReXhWUVVGb1FpeERRVWhtTzBGQlFVRXNUVUZKU1N4TlFVRk5MRWRCUVVjc1NVRkJTU3hIUVVGSExGRkJRVkVzUjBGQlF5eFZRVW8zUWpzN1FVRkxRU3hOUVVGSkxFbEJRVWtzU1VGQlNTeERRVUZhTEVWQlFXVTdRVUZEWkN4SlFVRkJMRWRCUVVjc1EwRkJReXhUUVVGS0xFZEJRV2RDTEhGQ1FVRm9RanRCUVVOQkxFZEJSa1FzVFVGRlR5eEpRVUZKTEZWQlFWVXNTVUZCU1N4RFFVRnNRaXhGUVVGeFFqdEJRVU16UWl4SlFVRkJMRWRCUVVjc1EwRkJReXhUUVVGS0xFZEJRV2RDTEd0Q1FVRm9RanRCUVVOQkxFZEJSazBzVFVGRlFUdEJRVU5PTEVsQlFVRXNSMEZCUnl4RFFVRkRMRk5CUVVvc1IwRkJaMElzWjBKQlFXZENMRkZCUVdoQ0xFZEJRVEpDTEVkQlFUTkNMRWRCUVdsRExGTkJRV3BETEVkQlFUWkRMRTFCUVRkRU8wRkJRMEU3TzBGQlFVRTdRVUZEUkN4RlFVRkJMRkZCUVZFc1EwRkJReXhoUVVGVUxFTkJRWFZDTEZOQlFYWkNMRVZCUVd0RExFdEJRV3hETEVkQlFUQkRMRVZCUVRGRE8wRkJRMEVzUlVGQlFTeFJRVUZSTEVOQlFVTXNZVUZCVkN4RFFVRjFRaXhUUVVGMlFpeEZRVUZyUXl4TFFVRnNReXhIUVVFd1F5eEZRVUV4UXp0QlFVTkJMRU5CYUVKRUxFVXNRMEZyUWtFN08wRkJSVUVzVVVGQlVTeERRVUZETEdGQlFWUXNRMEZCZFVJc1UwRkJka0lzUlVGQmEwTXNaMEpCUVd4RExFTkJRVzFFTEU5QlFXNUVMRVZCUVRSRUxGVkJRVk1zUTBGQlZDeEZRVUZYTzBGQlEzUkZMRVZCUVVFc1EwRkJReXhEUVVGRExHTkJRVVk3UVVGRFFTeE5RVUZKTEVkQlFVY3NSMEZCUnl4UlFVRlJMRU5CUVVNc1lVRkJWQ3hEUVVGMVFpeFRRVUYyUWl4RlFVRnJReXhMUVVFMVF6dEJRVUZCTEUxQlEwa3NSMEZCUnl4SFFVRkhMRkZCUVZFc1EwRkJReXhoUVVGVUxFTkJRWFZDTEU5QlFYWkNMRU5CUkZZN1FVRkJRU3hOUVVWSkxFMUJRVTBzUjBGQlJ5eEhRVUZITEVkQlFVTXNSVUZHYWtJN1FVRkJRU3hOUVVkSkxFMUJRVTBzUjBGQlNTeERRVUZETEVkQlFVY3NSMEZCUnl4SFFVRkhMRWRCUVVNc1JVRkJXQ3hKUVVGbExFVkJRV2hDTEVkQlFXOUNMRVZCU0dwRE8wRkJRVUVzVFVGSlNTeFJRVUZSTEVkQlFVY3NRMEZCUXl4SFFVRkhMRWRCUVVjc1IwRkJSeXhIUVVGRExFZEJRVmdzU1VGQlowSXNSMEZLTDBJN08wRkJTMEVzVFVGQlNTeEhRVUZITEVkQlFVTXNTVUZCU2l4SFFVRlhMRU5CUVdZc1JVRkJhMEk3UVVGRGFrSXNTVUZCUVN4SFFVRkhMRU5CUVVNc1UwRkJTaXhIUVVGblFpeDVRa0ZCYUVJN1FVRkRRU3hIUVVaRUxFMUJSVTg3UVVGRFRpeEpRVUZCTEVkQlFVY3NRMEZCUXl4VFFVRktMRWRCUVdkQ0xHMUNRVUZ0UWl4TlFVRnVRaXhIUVVFMFFpeE5RVUUxUWl4SFFVRnhReXhSUVVGeVJEdEJRVU5CT3p0QlFVTkVMRVZCUVVFc1VVRkJVU3hEUVVGRExHRkJRVlFzUTBGQmRVSXNVMEZCZGtJc1JVRkJhME1zUzBGQmJFTXNSMEZCTUVNc1JVRkJNVU03UVVGRFFTeERRV0pFTEVVc1EwRmxRVHM3UVVGRlFTeFJRVUZSTEVOQlFVTXNZVUZCVkN4RFFVRjFRaXhWUVVGMlFpeEZRVUZ0UXl4blFrRkJia01zUTBGQmIwUXNUMEZCY0VRc1JVRkJOa1FzVlVGQlV5eERRVUZVTEVWQlFWYzdRVUZEZGtVc1JVRkJRU3hEUVVGRExFTkJRVU1zWTBGQlJqdEJRVU5CTEUxQlFVa3NWVUZCVlN4SFFVRkhMRkZCUVZFc1EwRkJReXhoUVVGVUxFTkJRWFZDTEZWQlFYWkNMRVZCUVcxRExFdEJRWEJFTzBGQlFVRXNUVUZEU1N4SlFVRkpMRWRCUVVjc1NVRkVXRHRCUVVGQkxFMUJSVWtzVDBGQlR5eEhRVUZITEZWQlFWVXNSMEZCUXl4SlFVRllMRWRCUVdkQ0xFVkJSamxDTzBGQlFVRXNUVUZIU1N4SFFVRkhMRWRCUVVjc1VVRkJVU3hEUVVGRExHRkJRVlFzUTBGQmRVSXNVVUZCZGtJc1EwRklWanRCUVVsQkxFVkJRVUVzUjBGQlJ5eERRVUZETEZOQlFVb3NSMEZCWjBJc2RVSkJRWFZDTEU5QlFVOHNRMEZCUXl4UFFVRlNMRU5CUVdkQ0xFTkJRV2hDTEVsQlFXMUNMRU5CUVRGRU8wRkJRMEVzUlVGQlFTeFJRVUZSTEVOQlFVTXNZVUZCVkN4RFFVRjFRaXhWUVVGMlFpeEZRVUZ0UXl4TFFVRnVReXhIUVVFeVF5eEZRVUV6UXp0QlFVTkJMRU5CVWtRaUxDSm1hV3hsSWpvaVoyVnVaWEpoZEdWa0xtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpSXNJbk52ZFhKalpYTkRiMjUwWlc1MElqcGJJaWhtZFc1amRHbHZiaWdwZTJaMWJtTjBhVzl1SUhJb1pTeHVMSFFwZTJaMWJtTjBhVzl1SUc4b2FTeG1LWHRwWmlnaGJsdHBYU2w3YVdZb0lXVmJhVjBwZTNaaGNpQmpQVndpWm5WdVkzUnBiMjVjSWowOWRIbHdaVzltSUhKbGNYVnBjbVVtSm5KbGNYVnBjbVU3YVdZb0lXWW1KbU1wY21WMGRYSnVJR01vYVN3aE1DazdhV1lvZFNseVpYUjFjbTRnZFNocExDRXdLVHQyWVhJZ1lUMXVaWGNnUlhKeWIzSW9YQ0pEWVc1dWIzUWdabWx1WkNCdGIyUjFiR1VnSjF3aUsya3JYQ0luWENJcE8zUm9jbTkzSUdFdVkyOWtaVDFjSWsxUFJGVk1SVjlPVDFSZlJrOVZUa1JjSWl4aGZYWmhjaUJ3UFc1YmFWMDllMlY0Y0c5eWRITTZlMzE5TzJWYmFWMWJNRjB1WTJGc2JDaHdMbVY0Y0c5eWRITXNablZ1WTNScGIyNG9jaWw3ZG1GeUlHNDlaVnRwWFZzeFhWdHlYVHR5WlhSMWNtNGdieWh1Zkh4eUtYMHNjQ3h3TG1WNGNHOXlkSE1zY2l4bExHNHNkQ2w5Y21WMGRYSnVJRzViYVYwdVpYaHdiM0owYzMxbWIzSW9kbUZ5SUhVOVhDSm1kVzVqZEdsdmJsd2lQVDEwZVhCbGIyWWdjbVZ4ZFdseVpTWW1jbVZ4ZFdseVpTeHBQVEE3YVR4MExteGxibWQwYUR0cEt5c3BieWgwVzJsZEtUdHlaWFIxY200Z2IzMXlaWFIxY200Z2NuMHBLQ2tpTENJdkx5QmhjSEFnTVZ4eVhHNWNjbHh1Wkc5amRXMWxiblF1Y1hWbGNubFRaV3hsWTNSdmNpZ25JMkZ3Y0RGZllTY3BMbUZrWkVWMlpXNTBUR2x6ZEdWdVpYSW9KMk5zYVdOckp5d2dablZ1WTNScGIyNG9aU2w3WEhKY2JseDBaUzV3Y21WMlpXNTBSR1ZtWVhWc2RDZ3BPMXh5WEc1Y2RHeGxkQ0JtYVhKemRFNWhiV1VnUFNCa2IyTjFiV1Z1ZEM1eGRXVnllVk5sYkdWamRHOXlLQ2NqWVhCd01WOWlKeWt1ZG1Gc2RXVTdYSEpjYmx4MFpHOWpkVzFsYm5RdWNYVmxjbmxUWld4bFkzUnZjaWduSTJGd2NERW5LUzVwYm01bGNsUmxlSFFnUFNBbjBKL1JnTkM0MExMUXRkR0NJQ2NnS3lCbWFYSnpkRTVoYldVZ0t5QW5JU2M3WEhKY2JseDBaRzlqZFcxbGJuUXVjWFZsY25sVFpXeGxZM1J2Y2lnbkkyRndjREZmWWljcExuWmhiSFZsSUQwZ0p5YzdYSEpjYm4wcE8xeHlYRzVjY2x4dUx5OGdZWEJ3SURKY2NseHVYSEpjYm1SdlkzVnRaVzUwTG5GMVpYSjVVMlZzWldOMGIzSW9KeU5oY0hBeVgyRW5LUzVoWkdSRmRtVnVkRXhwYzNSbGJtVnlLQ2RqYkdsamF5Y3NJR1oxYm1OMGFXOXVLR1VwZTF4eVhHNWNkR1V1Y0hKbGRtVnVkRVJsWm1GMWJIUW9LVHRjY2x4dVhIUnNaWFFnZVdWaGNpQTlJREl3TVRrN1hISmNibHgwYkdWMElHSnBjblJvUkdGNUlEMGdLeWhrYjJOMWJXVnVkQzV4ZFdWeWVWTmxiR1ZqZEc5eUtDY2pZWEJ3TWw5aUp5a3VkbUZzZFdVcE8xeHlYRzVjZEd4bGRDQmhaMlVnUFNCNVpXRnlJQzBnWW1seWRHaEVZWGs3WEhKY2JseDBaRzlqZFcxbGJuUXVjWFZsY25sVFpXeGxZM1J2Y2lnbkkyRndjREluS1M1cGJtNWxjbFJsZUhRZ1BTQW4wSkxRc05DOElDY2dLeUJoWjJVZ0t5QW5JTkN6MEw3UXRDalFzQ2toSnp0Y2NseHVYSFJrYjJOMWJXVnVkQzV4ZFdWeWVWTmxiR1ZqZEc5eUtDY2pZWEJ3TWw5aUp5a3VkbUZzZFdVZ1BTQW5KenRjY2x4dWZTazdYSEpjYmx4eVhHNHZMMkZ3Y0NBelhISmNibHh5WEc1a2IyTjFiV1Z1ZEM1eGRXVnllVk5sYkdWamRHOXlLQ2NqWVhCd00xOWhKeWt1WVdSa1JYWmxiblJNYVhOMFpXNWxjaWduWTJ4cFkyc25MQ0JtZFc1amRHbHZiaWhsS1h0Y2NseHVYSFJsTG5CeVpYWmxiblJFWldaaGRXeDBLQ2s3WEhKY2JseDBiR1YwSUhOcFpHVWdQU0JrYjJOMWJXVnVkQzV4ZFdWeWVWTmxiR1ZqZEc5eUtDY2pZWEJ3TTE5aUp5a3VkbUZzZFdVN1hISmNibHgwYkdWMElHRndjQ0E5SUdSdlkzVnRaVzUwTG5GMVpYSjVVMlZzWldOMGIzSW9KeU5oY0hBekp5azdYSEpjYmx4MFlYQndMbWx1Ym1WeVZHVjRkQ0E5SUNmUW45QzEwWURRdU5DODBMWFJndEdBT2lBbklDc2djMmxrWlNvME8xeHlYRzVjZEdSdlkzVnRaVzUwTG5GMVpYSjVVMlZzWldOMGIzSW9KeU5oY0hBelgySW5LUzUyWVd4MVpTQTlJQ2NuTzF4eVhHNTlLVHRjY2x4dVhISmNiaTh2WVhCd0lEUmNjbHh1WEhKY2JtUnZZM1Z0Wlc1MExuRjFaWEo1VTJWc1pXTjBiM0lvSnlOaGNIQTBYMkVuS1M1aFpHUkZkbVZ1ZEV4cGMzUmxibVZ5S0NkamJHbGpheWNzSUdaMWJtTjBhVzl1S0dVcGUxeHlYRzVjZEdVdWNISmxkbVZ1ZEVSbFptRjFiSFFvS1R0Y2NseHVYSFJzWlhRZ2NtRmtJRDBnWkc5amRXMWxiblF1Y1hWbGNubFRaV3hsWTNSdmNpZ25JMkZ3Y0RSZllpY3BMblpoYkhWbE8xeHlYRzVjZEd4bGRDQmhjSEFnUFNCa2IyTjFiV1Z1ZEM1eGRXVnllVk5sYkdWamRHOXlLQ2NqWVhCd05DY3BPMXh5WEc1Y2RHRndjQzVwYm01bGNsUmxlSFFnUFNBbjBKL1F1OUMrMFluUXNOQzAwWXdnMExyUmdOR0QwTFBRc0RvZ0p5QXJJRTFoZEdndWNtOTFibVFvVFdGMGFDNVFTU0FxSUhKaFpDQXFJSEpoWkNrN1hISmNibHgwWkc5amRXMWxiblF1Y1hWbGNubFRaV3hsWTNSdmNpZ25JMkZ3Y0RSZllpY3BMblpoYkhWbElEMGdKeWM3WEhKY2JuMHBPMXh5WEc1Y2NseHVMeTloY0hBZ05WeHlYRzVjY2x4dVpHOWpkVzFsYm5RdWNYVmxjbmxUWld4bFkzUnZjaWduSTJGd2NEVmZZU2NwTG1Ga1pFVjJaVzUwVEdsemRHVnVaWElvSjJOc2FXTnJKeXdnWm5WdVkzUnBiMjRvWlNsN1hISmNibHgwWlM1d2NtVjJaVzUwUkdWbVlYVnNkQ2dwTzF4eVhHNWNkR3hsZENCa2FYTjBJRDBnWkc5amRXMWxiblF1Y1hWbGNubFRaV3hsWTNSdmNpZ25JMkZ3Y0RWZllpY3BMblpoYkhWbExGeHlYRzVjZEZ4MGFHOTFjbk1nUFNCa2IyTjFiV1Z1ZEM1eGRXVnllVk5sYkdWamRHOXlLQ2NqWVhCd05WOWpKeWt1ZG1Gc2RXVXNYSEpjYmx4MElDQWdJR0Z3Y0NBOUlHUnZZM1Z0Wlc1MExuRjFaWEo1VTJWc1pXTjBiM0lvSnlOaGNIQTFKeWtzWEhKY2JseDBJQ0FnSUhOd1pXVmtJRDBnVFdGMGFDNXliM1Z1WkNoa2FYTjBMMmh2ZFhKektUdGNjbHh1WEhSaGNIQXVhVzV1WlhKVVpYaDBJRDBnSjlHQjBMclF2dEdBMEw3UmdkR0MwWXc2SUNjZ0t5QnpjR1ZsWkNBcklDY2cwTHJRdkMvUmh5YzdYSEpjYmx4MFpHOWpkVzFsYm5RdWNYVmxjbmxUWld4bFkzUnZjaWduSTJGd2NEVmZZaWNwTG5aaGJIVmxJRDBnSnljN1hISmNibHgwWkc5amRXMWxiblF1Y1hWbGNubFRaV3hsWTNSdmNpZ25JMkZ3Y0RWZll5Y3BMblpoYkhWbElEMGdKeWM3WEhKY2JuMHBPMXh5WEc1Y2NseHVMeTloY0hBZ05seHlYRzVjY2x4dVpHOWpkVzFsYm5RdWNYVmxjbmxUWld4bFkzUnZjaWduSTJGd2NEWmZZU2NwTG1Ga1pFVjJaVzUwVEdsemRHVnVaWElvSjJOc2FXTnJKeXdnWm5WdVkzUnBiMjRvWlNsN1hISmNibHgwWlM1d2NtVjJaVzUwUkdWbVlYVnNkQ2dwTzF4eVhHNWNkR3hsZENCMWMyUWdQU0JrYjJOMWJXVnVkQzV4ZFdWeWVWTmxiR1ZqZEc5eUtDY2pZWEJ3Tmw5aUp5a3VkbUZzZFdVN1hISmNibHgwYkdWMElHRndjQ0E5SUdSdlkzVnRaVzUwTG5GMVpYSjVVMlZzWldOMGIzSW9KeU5oY0hBMkp5azdYSEpjYmx4MFkyOXVjM1FnWlhWeUlEMGdNQzQ1TVR0Y2NseHVYSFJoY0hBdWFXNXVaWEpVWlhoMElEMGdKOUNTSU5DMTBMTFJnTkMrT2lBbklDc2dkWE5rS21WMWNqdGNjbHh1WEhSa2IyTjFiV1Z1ZEM1eGRXVnllVk5sYkdWamRHOXlLQ2NqWVhCd05sOWlKeWt1ZG1Gc2RXVWdQU0FuSnp0Y2NseHVmU2s3WEhKY2JseHlYRzR2TDJGd2NDQTNYSEpjYmx4eVhHNWtiMk4xYldWdWRDNXhkV1Z5ZVZObGJHVmpkRzl5S0NjallYQndOMTloSnlrdVlXUmtSWFpsYm5STWFYTjBaVzVsY2lnblkyeHBZMnNuTENCbWRXNWpkR2x2YmlobEtYdGNjbHh1WEhSbExuQnlaWFpsYm5SRVpXWmhkV3gwS0NrN1hISmNibHgwYkdWMElHTjFjbkpsYm5STlpXMXZjbmtnUFNCa2IyTjFiV1Z1ZEM1eGRXVnllVk5sYkdWamRHOXlLQ2NqWVhCd04xOWlKeWt1ZG1Gc2RXVTdYSEpjYmx4MGJHVjBJR0Z3Y0NBOUlHUnZZM1Z0Wlc1MExuRjFaWEo1VTJWc1pXTjBiM0lvSnlOaGNIQTNKeWs3WEhKY2JseDBiR1YwSUdacGJHVWdQU0JOWVhSb0xuSnZkVzVrS0dOMWNuSmxiblJOWlcxdmNua3ZNQzQ0TWlrN1hISmNibHgwWVhCd0xtbHVibVZ5VkdWNGRDQTlJQ2ZRcE5DdzBMblF1OUMrMExJZzBML1F2dEM4MExYUmdkR0MwTGpSZ3RHTTBZSFJqem9nSnlBcklHWnBiR1U3WEhKY2JseDBaRzlqZFcxbGJuUXVjWFZsY25sVFpXeGxZM1J2Y2lnbkkyRndjRGRmWWljcExuWmhiSFZsSUQwZ0p5YzdYSEpjYm4wcE8xeHlYRzVjY2x4dUx5OWhjSEFnT0Z4eVhHNWNjbHh1Wkc5amRXMWxiblF1Y1hWbGNubFRaV3hsWTNSdmNpZ25JMkZ3Y0RoZllTY3BMbUZrWkVWMlpXNTBUR2x6ZEdWdVpYSW9KMk5zYVdOckp5d2dablZ1WTNScGIyNG9aU2w3WEhKY2JseDBaUzV3Y21WMlpXNTBSR1ZtWVhWc2RDZ3BPMXh5WEc1Y2RHeGxkQ0JqWVhOb0lEMGdaRzlqZFcxbGJuUXVjWFZsY25sVFpXeGxZM1J2Y2lnbkkyRndjRGhmWWljcExuWmhiSFZsTEZ4eVhHNWNkQ0FnSUNCamFHOWpiMUJ5YVdObElEMGdaRzlqZFcxbGJuUXVjWFZsY25sVFpXeGxZM1J2Y2lnbkkyRndjRGhmWXljcExuWmhiSFZsTEZ4eVhHNWNkQ0FnSUNCaGNIQWdQU0JrYjJOMWJXVnVkQzV4ZFdWeWVWTmxiR1ZqZEc5eUtDY2pZWEJ3T0NjcExGeHlYRzVjZENBZ0lDQnhkV0Z1ZEdsMGVTQTlJRTFoZEdndVpteHZiM0lvWTJGemFDOWphRzlqYjFCeWFXTmxLU3hjY2x4dVhIUWdJQ0FnWTJoaGJtZGxJRDBnWTJGemFDQXRJSEYxWVc1MGFYUjVLbU5vYjJOdlVISnBZMlU3WEhKY2JseDBhV1lnS0dOaGMyZ2dQRDBnTUNrZ2UxeHlYRzVjZEZ4MFlYQndMbWx1Ym1WeVZHVjRkQ0E5SUNmUWt0Q3cwWWdnMExyUXZ0R0kwTFhRdTlDMTBMb2cwTC9SZzlHQjBZSXVMaTRuTzF4eVhHNWNkSDBnWld4elpTQnBaaUFvWTJodlkyOVFjbWxqWlNBOFBTQXdLU0I3WEhKY2JseDBYSFJoY0hBdWFXNXVaWEpVWlhoMElEMGdKOUNkMExYUXN0QzEwWURRdmRDdzBZOGcwWWJRdGRDOTBMQXVMaTRuTzF4eVhHNWNkSDBnWld4elpTQjdYSEpjYmx4MFhIUmhjSEF1YVc1dVpYSlVaWGgwSUQwZ0o5Q28wTDdRdXRDKzBMdlFzTkMwMEw3UXVqb2dKeUFySUhGMVlXNTBhWFI1SUNzZ0p5QW5JQ3NnSjlDaDBMVFFzTkdIMExBNklDY2dLeUJqYUdGdVoyVTdYSEpjYmx4MGZUdGNjbHh1WEhSa2IyTjFiV1Z1ZEM1eGRXVnllVk5sYkdWamRHOXlLQ2NqWVhCd09GOWlKeWt1ZG1Gc2RXVWdQU0FuSnp0Y2NseHVYSFJrYjJOMWJXVnVkQzV4ZFdWeWVWTmxiR1ZqZEc5eUtDY2pZWEJ3T0Y5akp5a3VkbUZzZFdVZ1BTQW5KenRjY2x4dWZTazdYSEpjYmx4eVhHNHZMMkZ3Y0NBNVhISmNibHh5WEc1a2IyTjFiV1Z1ZEM1eGRXVnllVk5sYkdWamRHOXlLQ2NqWVhCd09WOWhKeWt1WVdSa1JYWmxiblJNYVhOMFpXNWxjaWduWTJ4cFkyc25MQ0JtZFc1amRHbHZiaWhsS1h0Y2NseHVYSFJsTG5CeVpYWmxiblJFWldaaGRXeDBLQ2s3WEhKY2JseDBiR1YwSUc1MWJTQTlJR1J2WTNWdFpXNTBMbkYxWlhKNVUyVnNaV04wYjNJb0p5TmhjSEE1WDJJbktTNTJZV3gxWlN4Y2NseHVYSFFnSUNBZ1lYQndJRDBnWkc5amRXMWxiblF1Y1hWbGNubFRaV3hsWTNSdmNpZ25JMkZ3Y0RrbktTeGNjbHh1WEhRZ0lDQWdiblZ0VDI1bElEMGdiblZ0SlRFd0xGeHlYRzVjZENBZ0lDQnVkVzFVZDI4Z1BTQW9LRzUxYlNBdElHNTFiU1V4TUNrdk1UQXBKVEV3TEZ4eVhHNWNkQ0FnSUNCdWRXMVVhSEpsWlNBOUlDaHVkVzBnTFNCdWRXMGxNVEF3S1M4eE1EQTdYSEpjYmx4MGFXWWdLRzUxYlM4eE1EQXdJRDRnTVNrZ2UxeHlYRzVjZEZ4MFlYQndMbWx1Ym1WeVZHVjRkQ0E5SUNmUXA5QzQwWUhRdTlDK0lOQzkwTFVnMFlMUmdOQzEwWVhRdDlDOTBMRFJoOUM5MEw3UXRTNHVMaWM3WEhKY2JseDBmU0JsYkhObElIdGNjbHh1WEhSY2RHRndjQzVwYm01bGNsUmxlSFFnUFNBbjBKTFF2dEdDSU5DOTBMRFF2dEN4MEw3UmdOQyswWUk2SUNjZ0t5QnVkVzFQYm1VZ0t5QnVkVzFVZDI4Z0t5QnVkVzFVYUhKbFpUdGNjbHh1WEhSOVhISmNibHgwWkc5amRXMWxiblF1Y1hWbGNubFRaV3hsWTNSdmNpZ25JMkZ3Y0RsZllpY3BMblpoYkhWbElEMGdKeWM3WEhKY2JuMHBPMXh5WEc1Y2NseHVMeTloY0hBZ01UQmNjbHh1WEhKY2JtUnZZM1Z0Wlc1MExuRjFaWEo1VTJWc1pXTjBiM0lvSnlOaGNIQXhNRjloSnlrdVlXUmtSWFpsYm5STWFYTjBaVzVsY2lnblkyeHBZMnNuTENCbWRXNWpkR2x2YmlobEtYdGNjbHh1WEhSbExuQnlaWFpsYm5SRVpXWmhkV3gwS0NrN1hISmNibHgwYkdWMElHTjFjbkpsYm5SVGRXMGdQU0JrYjJOMWJXVnVkQzV4ZFdWeWVWTmxiR1ZqZEc5eUtDY2pZWEJ3TVRCZllpY3BMblpoYkhWbExGeHlYRzVjZENBZ0lDQnlZWFJsSUQwZ01DNHdOU3hjY2x4dVhIUWdJQ0FnWkdWd2IzTnBkQ0E5SUdOMWNuSmxiblJUZFcwcWNtRjBaUzh4TWl4Y2NseHVYSFFnSUNBZ1lYQndJRDBnWkc5amRXMWxiblF1Y1hWbGNubFRaV3hsWTNSdmNpZ25JMkZ3Y0RFd0p5azdYSEpjYmx4MFlYQndMbWx1Ym1WeVZHVjRkQ0E5SUNmUW45R0EwTDdSaHRDMTBMM1JnaURRdDlDd0lESWcwTHpRdGRHQk9pQW5JQ3NnWkdWd2IzTnBkQzUwYjBacGVHVmtLRElwS2pJN1hISmNibHgwWkc5amRXMWxiblF1Y1hWbGNubFRaV3hsWTNSdmNpZ25JMkZ3Y0RFd1gySW5LUzUyWVd4MVpTQTlJQ2NuTzF4eVhHNTlLVHNpWFgwPSJ9
