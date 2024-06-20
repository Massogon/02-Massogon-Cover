window.addEventListener('DOMContentLoaded', (event) => {
    // Select the audio element and source
    const audioElement = document.getElementById('background-audio');
    const audioSource = document.getElementById('audio-source');
    const playButton = document.getElementById('play-button');

    // Set the source file
    audioSource.src = '/02-Challenge/Assets/Media/avatar-last-airbender-last-agni-kai-epic-emotional-version.mp3';

    // Event listener to play audio on button click
    playButton.addEventListener('click', () => {
        audioElement.load();
        var playPromise = audioElement.play();

        if (playPromise !== undefined) {
            playPromise.then(_ => {
                // Automatic playback started!
                // Show playing UI.
                console.log("Playback started successfully");
            })
            .catch(error => {
                // Auto-play was prevented
                // Show paused UI.
                console.error("Playback failed:", error);
            });
        }
    });
});
