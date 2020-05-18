class Snake{
    constructor(){
        this.xposition = [];
        this.yposition = [];
        this.xdir = 0;
        this.ydir = 0;
        this.tailcount = 1;
        this.x = 0;
        this.y = 0;
    }
    eat(x,y){
        if(this.x === x && this.y === y){
            this.tailcount = this.tailcount+1;
            return true;
        }
        else {
            return false;
        }
    }
    display(){
        for(var i = 0;i < this.tailcount;i++){
            var y = this.yposition[i];
            var x = this.xposition[i];
            fill("red");
            rect(x,y,20,20);
        }
    }
    update(){
        this.x += this.xdir;
        this.y += this.ydir;
        if(this.xposition.length >= this.tailcount){
            this.xposition.shift();
            this.yposition.shift();
        }
        this.xposition.push(this.x);
        this.yposition.push(this.y);
    }
}