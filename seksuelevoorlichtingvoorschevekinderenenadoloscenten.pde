int count, womanetn, womanetn2;
boolean oef;

void setup() {
  size(1000, 1000);
  noStroke();
  womanetn = round(random(0, 2));
  womanetn2 = round(random(0, 2));
}

void draw() {
  background(150);
  vj();
}

void pjemel() {
  fill(count*3,0,0);
  circle(mouseX-120, mouseY, 300+count);
  circle(mouseX+120, mouseY, 300+count);
  rect(mouseX-100-(count/2), mouseY+50, 200+count, 500+count, 200);
}

void vj() {
  if (mouseY>300) {
    oef = true;
  }
  if (mouseY<300 && oef == true) {
    oef = false;
    count+=1;
    println(count);
  }
  fill(200, 100*womanetn, 100*womanetn2);
  if (count*3>=255){
  fill(255);
  }
  rect(0, (height/2)+20+(mouseY/10), width, height);
  if (count*3<255){
  pjemel();
  }
  fill(255, 100*womanetn, 100*womanetn2);
  rect(-200, (height/2)+(mouseY/12), width-380, height, 100);
  rect(600, (height/2)+(mouseY/12), width-380, height, 100);
}
