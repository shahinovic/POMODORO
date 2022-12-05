let startBtn = document.querySelector('.start'),
  settingBtn = document.querySelector('.settings'),
  minuteInput = document.querySelector('.minutes input'),
  secondInput = document.querySelector('.seconds input'),
  ring = document.querySelector('.ring'),
  stop = true,
  SettingsBtn = document.querySelector('.Settings'),
  displayTime = () => {
    minuteInput.disabled = true;
    secondInput.disabled = true;
    ring.classList.contains('ending') ? ring.classList.remove('ending') : null;

    let timer = setInterval(() => {
      if (stop) {
        clearInterval(timer);
      } else {
        if (+minuteInput.value >= 0) {
          if (+secondInput.value > 0) {
            secondInput.value = +secondInput.value - 1 > 9 ? +secondInput.value - 1 : '0' + (+secondInput.value - 1);
          } else {
            if (+minuteInput.value > 0) {
              minuteInput.value = +minuteInput.value - 1 > 9 ? +minuteInput.value - 1 : '0' + (+minuteInput.value - 1);
              secondInput.value = 60;
              secondInput.value = +secondInput.value - 1 > 9 ? +secondInput.value - 1 : '0' + (+secondInput.value - 1);
            } else {
              ring.classList.add('ending');
              clearInterval(timer);
              startBtn.classList.remove('pause');
              startBtn.innerHTML = 'Start';
            }
          }
        }
      }
    }, 1000);
  },
  stopFun = () => {
    stop ? (stop = false) : (stop = true);
    startBtn.classList.toggle('pause');
    if (startBtn.classList.contains('pause')) {
      startBtn.innerHTML = 'Pause';
    } else {
      startBtn.innerHTML = 'Start';
    }
  },
  settingsFun = () => {
    stop = true;
    minuteInput.disabled = false;
    secondInput.disabled = false;
    startBtn.innerHTML = 'Start';
  };

startBtn.addEventListener('click', displayTime);
startBtn.addEventListener('click', stopFun);
settingBtn.addEventListener('click', settingsFun);
