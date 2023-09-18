import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.getElementById('vimeo-player');
const player = new Player(iframe);
const LS_TIME = "videoplayer-current-time";

player.on('timeupdate', throttle(setTime, 1000));

let time = localStorage.getItem(LS_TIME);

if (time !== null) {
    player.setCurrentTime(time);
}

function setTime({ seconds }) {
    localStorage.setItem(LS_TIME, seconds);
}
