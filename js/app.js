function Player(num, score){
    var that = this;
    this.number=num;
    this.score=score;
    this.ele = document.createElement("div");
    this.ele.innerHTML = "Player "+this.number+": "+this.score;
    document.body.appendChild(this.ele);
    this.ele.addEventListener("click", function () {
        that.increaseNum();
    })
}

Player.prototype.increaseNum = function () {
    this.score = this.score + 1;
    this.ele.innerHTML = "Player "+this.number+": "+this.score;
    if(this.score == 10){
        alert("Player "+this.number+" wins! Click OK to reset game.");
        this.score = 0;
        this.ele.innerHTML = "Player "+this.number+": "+this.score;
    }

}

function Game(){
    this.startGame();
    }

Game.prototype.startGame = function () {
    var player1 = new Player(1,0);
    var player2 = new Player(2,0);
    }

var NewGame = new Game();