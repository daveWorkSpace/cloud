window.onload = function (){

    var bf = document.getElementById("play");
    var player = document.getElementById("player");
    var finish = document.getElementById("video-finish");

    bf.onclick = function () {
        player.style.display = 'block';
        finish.style.display = 'block';
        bf.style.display = 'none';
        if (player.paused) {
            player.play();
        }
    };

    finish.onclick = function () {
        player.style.display = 'none';
        bf.style.display = 'block';
    };
}