import { LaBaG } from './LaBaG.js'; 

class PlayLaBaG extends LaBaG{
    constructor(){
        super();
        this.Name = "";
        this.HistoryScore = 0;   
    }

    Reset(){
        super().Reset();
        this.HistoryScore = 0;
    }

    Logic(){
        this.ModeRoScreen = false;
        this.OneData = {};
        this.MarginScore = 0;
        this.DoubleScore  = 0;
        this.Random();
        this.CalculateScore();
        this.Result();
        this.JudgeMode();
    }

    Random(){
        super().Random();
        console.log(`機率區間: ${this.rate_ranges[this.NowMode()]}`);
        console.log(`超級阿禾隨機數為: ${this.SuperNum}`)
        console.log(`綠光阿瑋隨機數為: ${this.GreenNum}`)
        console.log(`咖波累積數：${this.GssNum}`)
    }
}