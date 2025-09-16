document.addEventListener('DOMContentLoaded', () => {
    const playPauseBtns = document.querySelectorAll('.play-pause-btn');
    let currentAudio = null;
    let currentBtn = null;

    playPauseBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const audioSrc = btn.dataset.src;
        
            if (currentBtn === btn) {
                if (currentAudio.paused) {
                    currentAudio.play();
                    btn.innerHTML = '&#10074;&#10074;';
                    btn.dataset.playing = 'true';
                } else {
                    currentAudio.pause();
                    btn.innerHTML = '&#9658;';
                    btn.dataset.playing = 'false';
                }
            } 
            else {
                if (currentAudio) {
                    currentAudio.pause();
                    currentBtn.innerHTML = '&#9658;';
                    currentBtn.dataset.playing = 'false';
                }
            
                currentAudio = new Audio(audioSrc);
                currentBtn = btn;
                
                currentAudio.play();
                btn.innerHTML = '&#10074;&#10074;';
                btn.dataset.playing = 'true';

                currentAudio.addEventListener('ended', () => {
                    btn.innerHTML = '&#9658;';
                    btn.dataset.playing = 'false';
                    currentAudio = null; 
                    currentBtn = null;
                });
            }
        });
    });
});