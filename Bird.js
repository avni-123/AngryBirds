class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("bird.png");

    this.smokeImage = loadImage("smoke.png");

    this.path = [];

  }

  display() {

    if(this.body.velocity.x > 10 && this.body.position.x > 210){

      var Posi = [this.body.position.x, this.body.position.y];

    this.path.push(Posi);

    }
  
    for(var i = 0; i<this.path.length ; i = i + 1){
      image(this.smokeImage, this.path[i][0], this.path[i][1]);
  }

  console.log(this.body.velocity.x);

    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;

    super.display();

  }
}
