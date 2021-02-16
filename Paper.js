class Paper{
    constructor(x, y, width, height) {
        var options = {
            isStatic: false,
            restitution :0.3,
            friction :0.5,
            density : 1.2
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.img = loadImage("paper.png");
        this.width = width;
        this.height = height;
        
        World.add(world, this.body);
      }
      display(){
        var pos =this.body.position;
        var angle = this.body.angle;
        //this.body.position.x = mouseX;
        //this.body.position.y = mouseY;
        if (keyDown("up")){
          //Bodies.setVelocity(5);
          //Bodies.setAngularVelocity(5);

          Body.setVelocity(this.body, {
            x: mouseX - pos.x,
            y: mouseY - pos.y
          })
      
        } 
      
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        fill("white");
        image(this.img, 0, 0, this.width, this.height);
        pop();
      }
      
    }

  
