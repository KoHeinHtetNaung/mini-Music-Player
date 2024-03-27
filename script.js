// const playListContainer = document.getElementsByClassName("playListContainer")[0]; 
// const audioTag = document.getElementsByClassName("audioTag")[0]; 
// const currentAndTotalTime = document.getElementsByClassName("currentAndTotalTime")[0];
// const currentProgress = document.getElementById("currentProgress");

// const previousButtonTag = document.getElementsByClassName("previousButton") [0];
// const pauseButtonTag = document.getElementById("pauseButton");
// const playButtonTag = document.getElementsByClassName("playButton") [0];
// const nextButtonTag = document.getElementsByClassName("nextButton") [0];

// const tracks = [
//     {trackId : "mp3/giveMeYourForever.m4a", title: "Give me your forever - unknown"},
//     {trackId : "mp3/holdOn.m4a", title : "Hold On - unknown"},
//     {trackId : "mp3/toTheBone.m4a", title : "To the Bone - unknown"},
//     {trackId : "mp3/youAlways.m4a", title : "You always On my Mind - unknown"},
// ];

// for (let i = 0; i < tracks.length; i++) {
//     const trackTag = document.createElement("div");
//     trackTag.addEventListener("click", () => {
//         currentPlayingIndex = i;
//         playSong()
//     });
//     trackTag.classList.add("trackItem");
//     const Title = (i + 1).toString() + ". " + tracks[i].title; // 1. title
//     trackTag.textContent = Title;
//     playListContainer.append(trackTag);
// };

// let duration = 0;
// let durationText = "00:00"
// audioTag.addEventListener("loadeddata", () => {
//     duration = Math.floor(audioTag.duration); // 242. 4565
//     durationText = creatMinutesAndSeconds(duration);
// });

// audioTag.addEventListener("timeupdate", () => {
//     const currentTime = Math.floor(audioTag.currentTime);
//     const currentTimeText = creatMinutesAndSeconds(currentTime);
//     const currentTimeTextAndDurationText = currentTimeText + " / " + durationText;
//     currentAndTotalTime.textContent = currentTimeTextAndDurationText
//     updateCurrentProgressBar(currentTime);
// });

// const updateCurrentProgressBar = (currentTime) => {
//     const currentProgressWidth = (500 / duration) * currentTime;  //
//     currentProgress.style.width = currentProgressWidth.toString() + "px";
// };

// const creatMinutesAndSeconds = (totalSeconds) => {
//     const minutes = Math.floor(totalSeconds / 60);
//     const seconds = totalSeconds % 60;

//     const minutesText = minutes < 10 ? "0" + minutes.toString() : minutes;
//     const secondsText = seconds < 10 ? "0" + seconds.toString() : seconds;
//     return minutesText + ":" + secondsText;
// };

// let currentPlayingIndex = 0;
// isPlaying = false;
// playButtonTag.addEventListener("click", () => {
//     isPlaying = true;
//     const currentTime = Math.floor(audioTag.currentTime);
//     if (currentTime === 0 ){
//         playSong()
//     }else {
//         audioTag.play();
//         updatePlayAndPauseButton();
//     }
// });

// pauseButtonTag.addEventListener("click", () => {
//     isPlaying = false;
//     audioTag.pause();
//     updatePlayAndPauseButton()
// });

// previousButtonTag.addEventListener("click", () => {
//     if (currentPlayingIndex === 0 ) {
//         return
//     }
//     currentPlayingIndex -= 1;
//     playSong();
// });

// nextButtonTag.addEventListener("click", () => {
//     if (currentPlayingIndex === tracks.length - 1 ) {
//         return
//     }
//     currentPlayingIndex += 1;
//     playSong();
// });

// const playSong = () => {
//     const songIdToPlay = tracks[currentPlayingIndex].trackId;
//     audioTag.src = songIdToPlay;
//     audioTag.play();
//     isPlaying = true;
//     updatePlayAndPauseButton();
// }

// const updatePlayAndPauseButton = () => {
//     if (isPlaying) {
//         playButtonTag.style.display = "none";
//         pauseButtonTag.style.display = "inline";
//     }else {
//         playButtonTag.style.display = "inline";
//         pauseButtonTag.style.display = "none"
//     }
// };

const playListContainerTag = document.getElementsByClassName("playListContainer")[0];
const audioTag = document.getElementsByClassName("audioTag")[0];
const currentAndTotalTimeTag = document.getElementsByClassName("currentAndTotalTime")[0];
const currentProgressTag = document.getElementById("currentProgress");

const previousButtonTag = document.getElementsByClassName("previousButton")[0];
const playButtonTag = document.getElementsByClassName("playButton")[0];
const pauseButtonTag = document.getElementById("pauseButton");
const nextButtonTag = document.getElementsByClassName("nextButton")[0];

const tracks = [
    {trackId : "mp3/giveMeYourForever.m4a", title: "Give me your forever - unknown"},
    {trackId : "mp3/holdOn.m4a", title : "Hold On - unknown"},
    {trackId : "mp3/toTheBone.m4a", title : "To the Bone - unknown"},
    {trackId : "mp3/youAlways.m4a", title : "You always On my Mind - unknown"},
];


//  for song
for (let i = 0; i < tracks.length; i++) {
    const trackTag = document.createElement("div");
    trackTag.addEventListener("click", () => {
        const trackId = tracks[i].trackId;
        audioTag.src = trackId;
        audioTag.play();
        isPlaying = true;
        updatePlayAndPauseButton();
        currentPlayingIndex = i;
    });
    trackTag.classList.add("trackItem");
    const title = (i + 1).toString() + ". " + tracks[i].title;  // 1. song name
    trackTag.textContent = title;
    playListContainerTag.append(trackTag);
}

// let durationText = "00:00"
// audioTag.addEventListener("loadeddata", () => {
//     const duration = Math.floor(audioTag.duration)
//     durationText = creatMinutesAndSecondsText(duration);
// });

// audioTag.addEventListener("timeupdate", () => {
//     const currentTime = Math.floor(audioTag.currentTime);
//     const currentTimeText = creatMinutesAndSecondsText(currentTime);
//     const currentTimeTextAndDurationText = currentTimeText + " / " + durationText;
//     currentAndTotalTimeTag.textContent = currentTimeTextAndDurationText
// });

// const creatMinutesAndSecondsText = (totalSecond) => {
//     const minutes = Math.floor(totalSecond / 60);
//     const seconds = totalSecond % 60;

//     const minutesText = minutes < 10 ? "0" + minutes.toString() : minutes;
//     const secondsText = seconds < 10 ? "0" + seconds.toString() : seconds;
//     return minutesText + ":" + secondsText;
// };


// for 00: 00
let duration = 0;
let durationText = "00:00" ; 
audioTag.addEventListener("loadeddata", () => {
    duration = Math.floor(audioTag.duration);
    durationText = creatMinutesAndSecondsText(duration);
});

audioTag.addEventListener("timeupdate", () => {
    const currentTime = Math.floor(audioTag.currentTime);
    const currentTimeText = creatMinutesAndSecondsText(currentTime);
    const currentTimeTextAndDurationText = currentTimeText + " / " + durationText;
    currentAndTotalTimeTag.textContent = currentTimeTextAndDurationText;
    updateCurrentProgress(currentTime);
})

 
// const updateCurrentProgress = (currentTime) => {
//     const currentProgressWidth = (500 / duration) * currentTime;
//     currentProgressTag.style.width = currentProgressWidth.toString() + "px";
// }

const creatMinutesAndSecondsText = (totalSecond) => {
    const minutes = Math.floor(totalSecond / 60);
    const seconds = totalSecond % 60;

    const minutesText = minutes < 10 ? "0" + minutes.toString() : minutes;
    const secondsText = seconds < 10 ? "0" + seconds.toString() : seconds;
    return minutesText + ":" + secondsText;
}

// let currentPlayingIndex = 0;
// let isPlaying = false;
// playButtonTag.addEventListener("click", () => {
//     const currentTime = Math.floor(audioTag.currentTime);
//     isPlaying = true;
//     if (currentTime === 0 ) {
//         const songIdToPlay = tracks[currentPlayingIndex].trackId;
//         audioTag.src = songIdToPlay;
//         audioTag.play();
//         updatePlayAndPauseButton ();
//     }else {
//         audioTag.play();
//         updatePlayAndPauseButton();
//     };   
// });

// pauseButtonTag.addEventListener("click", () => {
//     isPlaying = false;
//     audioTag.pause();
//     updatePlayAndPauseButton();
// });

// previousButtonTag.addEventListener("click", () => {
//     if (currentPlayingIndex === 0) {
//         return
//     }
//     currentPlayingIndex -= 1;
//     const songIdToPlay = tracks[currentPlayingIndex].trackId;
//     audioTag.src = songIdToPlay;
//     audioTag.play();
//     isPlaying = true;
//     updatePlayAndPauseButton();
// });

// nextButtonTag.addEventListener("click", () => {
//     if (currentPlayingIndex === tracks.length -1) {
//         return
//     }
//     currentPlayingIndex += 1;
//     const songIdToPlay =tracks[currentPlayingIndex].trackId;
//     audioTag.src = songIdToPlay;
//     audioTag.play ();
//     isPlaying = true;
//     updatePlayAndPauseButton();
// });

// const updatePlayAndPauseButton = () => {
//     if (isPlaying) {
//         playButtonTag.style.display = "none";
//         pauseButtonTag.style.display = "inline";
//     }else {
//         pauseButtonTag.style.display = "none";
//         playButtonTag.style.display = "inline";
//     };
// };


const updateCurrentProgress = (currentTime) => {
    const currentProgressWidth = (500 / duration) * currentTime;
    currentProgressTag.style.width = currentProgressWidth.toString() + "px"; // 5px
};

let currentPlayingIndex = 0;
let isPlaying = false;
playButtonTag.addEventListener("click", () => {
    const currentTime = Math.floor(audioTag.currentTime);
    isPlaying = true;
    if (currentTime === 0) {
        playSong()
    }else {
        audioTag.play();
        updatePlayAndPauseButton();
    }
    
});

pauseButtonTag.addEventListener("click", () => {
    isPlaying = false;
    audioTag.pause();
    updatePlayAndPauseButton();
});

previousButtonTag.addEventListener("click", () => {
    if (currentPlayingIndex === 0) {
        return
    }
    currentPlayingIndex -= 1;
    playSong();
});

nextButtonTag.addEventListener("click", () => {
    if (currentPlayingIndex === tracks.length -1) {
        return
    }
    currentPlayingIndex += 1;
    playSong();
});

const playSong = () => {
    const songIdToPlay = tracks[currentPlayingIndex].trackId;
    audioTag.src = songIdToPlay;
    audioTag.play();
    isPlaying = true;
    updatePlayAndPauseButton();
};

const updatePlayAndPauseButton = () => {
    if (isPlaying) {
        playButtonTag.style.display = "none"
        pauseButtonTag.style.display = "inline"
    }else {
        pauseButtonTag.style.display = "none";
        playButtonTag.style.display = "inline"; 
    }
};



