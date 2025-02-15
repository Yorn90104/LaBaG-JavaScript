import { PlayLaBaG } from "./PlayLaBaG.js";


const Game = new PlayLaBaG();
Game.Reset;
while(Game.GameRunning()){
    Game.Logic(); // 執行遊戲邏輯
}
Game.GameOver(); // 遊戲結束
