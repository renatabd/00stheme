const audioPlayer = document.getElementById('audioPlayer');
    const playPauseLink = document.getElementById('playPauseLink');

    playPauseLink.addEventListener('click', (event) => {
      event.preventDefault();

      if (audioPlayer.paused) {
        audioPlayer.play();
        playPauseLink.textContent = 'Pause Song';
      } else {
        audioPlayer.pause();
        playPauseLink.textContent = 'Play Song';
      }
    });