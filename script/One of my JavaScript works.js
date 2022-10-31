var mouseHover = document.getElementById('mouseHover');
    var mouseClick = document.getElementById('mouseClick');
    var mouseLight = document.getElementById('mouseLight');
    var keyboardButton = document.getElementById('keyboardButton');
    let arr = ['red', 'blue', 'green', 'orange', 'purple'];
    let hoverResult = document.getElementById('hoverResult');


    //first button
    mouseHover.onmouseenter = function () {
      let rndCollor = getRandomIntInclusive(0, arr.length);
      let li = document.createElement('li');
      li.classList.add(arr[rndCollor]);
      hoverResult.appendChild(li);
      li.innerText = "hovered!";
    }

    function getRandomIntInclusive(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    //second button
    var clickIndex = 0;
    var direction = false;

    let numberArr = ['six', 'two', 'three', 'four', 'one', 'five'];
    let rightArr = ['one', 'two', 'three', 'four', 'five', 'six'];
    let clickResult = document.getElementById('clickResult');

    mouseClick.onclick = function () {
      if (!direction) {
        for (let i = 0; i < numberArr.length; i++) {
          if (clickResult.classList.contains(numberArr[i])) {
            clickResult.classList.remove(numberArr[i]);
            if (numberArr[i] === numberArr[numberArr.length - 1]) {
              direction = true;
            }
            break;
          }
        }
      } else {
        for (let i = 0; i < rightArr.length; i++) {
          if (!clickResult.classList.contains(rightArr[i])) {
            clickResult.classList.add(rightArr[i]);
            if (rightArr[i] === rightArr[rightArr.length - 1]) {
              direction = false;
            }
            break;
          }
        }
      }
    }

    //third button
    let arrOfLights = ['Off', 'Red', 'Yellow', 'Green'];
    mouseLight.onclick = function (e) {
      if (counter === arrOfLights.length) {
        counter = 0;
      }
      var light = arrOfLights[counter];
      e.target.nextElementSibling.innerText = light;
      counter ++;
    }


    //fours button
    var counter = 0;
    let key = document.getElementById('keyboardResult');
    let arrKey = [];

    keyboardButton.onkeydown = function () {
      key.innerText = counter;
      counter += 1;
      let arrOfNum = counter.toString().split('');
      let arrOfStringNumber = [];

      for (let i = 0; i < arrOfNum.length; i++) {
        let number;
        switch (arrOfNum[i]) {
          case '1': number = 'one';
            break;
          case '2': number = 'two';
            break;
          case '3': number = 'three';
            break;
          case '4': number = 'four';
            break;
          case '5': number = 'five';
            break;
          case '6': number = 'six';
            break;
          case '7': number = 'seven';
            break;
          case '8': number = 'nine';
            break;
          case '9': number = 'ten';
            break;
          case '0': number = 'zero';
            break;
        }
        arrOfStringNumber.push(number);
      }
      let countOfStrings = arrOfStringNumber.join(' ');
      document.querySelector('#keyboardResult').className = "resultBlock key-colors " + countOfStrings;
      document.querySelector('#keyboardResult').innerHTML = countOfStrings;
    }