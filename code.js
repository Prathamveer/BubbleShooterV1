var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["6b88c2aa-5a33-4996-96dc-c865d80a51a5","74605f4e-dc7d-4463-a74c-46a341f3b3db","5a452709-f9b2-41aa-ac0c-2556fc547089","73e5ea28-0e47-44ed-8610-bd0b5d9c87fc","ea96444d-efc7-4043-adb3-89ace0ea6edd","1ba77908-bdc8-43c1-bc9b-b747bde93e2a"],"propsByKey":{"6b88c2aa-5a33-4996-96dc-c865d80a51a5":{"name":"bubble.png_1","sourceUrl":"assets/v3/animations/1cJEBrXDTzOr1FRScFW-YKlE35Ne3MS1DAvbvp0dhZg/6b88c2aa-5a33-4996-96dc-c865d80a51a5.png","frameSize":{"x":200,"y":165},"frameCount":1,"looping":true,"frameDelay":4,"version":"tRXCt8bwUpMp.N17m09MIQh.9rZy6izR","loadedFromSource":true,"saved":true,"sourceSize":{"x":200,"y":165},"rootRelativePath":"assets/v3/animations/1cJEBrXDTzOr1FRScFW-YKlE35Ne3MS1DAvbvp0dhZg/6b88c2aa-5a33-4996-96dc-c865d80a51a5.png"},"74605f4e-dc7d-4463-a74c-46a341f3b3db":{"name":"cannon","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"TgAkUKmWorGsk88X.nUohfq7tp3nwrCI","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/74605f4e-dc7d-4463-a74c-46a341f3b3db.png"},"5a452709-f9b2-41aa-ac0c-2556fc547089":{"name":"cannon2","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"62Mj.2UUl5BUvJwX0TjGIGkO0xghGN4J","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/5a452709-f9b2-41aa-ac0c-2556fc547089.png"},"73e5ea28-0e47-44ed-8610-bd0b5d9c87fc":{"name":"cannon3","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"TxesNJjhw1hEmBFg_rDh7ltcRYphL9M0","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/73e5ea28-0e47-44ed-8610-bd0b5d9c87fc.png"},"ea96444d-efc7-4043-adb3-89ace0ea6edd":{"name":"bgg3 copy.png_1","sourceUrl":"assets/v3/animations/1cJEBrXDTzOr1FRScFW-YKlE35Ne3MS1DAvbvp0dhZg/ea96444d-efc7-4043-adb3-89ace0ea6edd.png","frameSize":{"x":626,"y":626},"frameCount":1,"looping":true,"frameDelay":4,"version":"c6ZG.kFLfNghr3a0YdRhtDb8zkYOnuob","loadedFromSource":true,"saved":true,"sourceSize":{"x":626,"y":626},"rootRelativePath":"assets/v3/animations/1cJEBrXDTzOr1FRScFW-YKlE35Ne3MS1DAvbvp0dhZg/ea96444d-efc7-4043-adb3-89ace0ea6edd.png"},"1ba77908-bdc8-43c1-bc9b-b747bde93e2a":{"name":"ball.png_1","sourceUrl":"assets/v3/animations/1cJEBrXDTzOr1FRScFW-YKlE35Ne3MS1DAvbvp0dhZg/1ba77908-bdc8-43c1-bc9b-b747bde93e2a.png","frameSize":{"x":512,"y":512},"frameCount":1,"looping":true,"frameDelay":4,"version":"6wbx8GaFdTNZj.Lsg5QUvoHIyTnBpJw7","loadedFromSource":true,"saved":true,"sourceSize":{"x":512,"y":512},"rootRelativePath":"assets/v3/animations/1cJEBrXDTzOr1FRScFW-YKlE35Ne3MS1DAvbvp0dhZg/1ba77908-bdc8-43c1-bc9b-b747bde93e2a.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var ball=createSprite(195,310,20,20);
ball.setAnimation("ball.png_1");
ball.scale=0.05;

var ball2=createSprite(315,310,20,20);
ball2.setAnimation("ball.png_1");
ball2.scale=0.05;

var ball3=createSprite(70,310,20,20);
ball3.setAnimation("ball.png_1");
ball3.scale=0.05;

var cannon=createSprite(200,330,20,20);
cannon.setAnimation("cannon3");
cannon.scale=2;

var cannon2=createSprite(315,330,20,20);
cannon2.setAnimation("cannon");
cannon2.scale=2;

var cannon3=createSprite(70,330,20,20);
cannon3.setAnimation("cannon2");
cannon3.scale=2;

var bubble1=createSprite(25,25,20,20);
bubble1.scale=0.4;
bubble1.setAnimation("bubble.png_1");

var bubble2=createSprite(25,70,20,20);
bubble2.scale=0.4;
bubble2.setAnimation("bubble.png_1");

var bubble3=createSprite(25,115,20,20);
bubble3.scale=0.4;
bubble3.setAnimation("bubble.png_1");

var bubble4=createSprite(75,25,40,20);
bubble4.scale=0.4;
bubble4.setAnimation("bubble.png_1");

var bubble5=createSprite(75,70,20,20);
bubble5.scale=0.4;
bubble5.setAnimation("bubble.png_1");

var bubble6=createSprite(75,115,20,20);
bubble6.scale=0.4;
bubble6.setAnimation("bubble.png_1");

var bubble7=createSprite(75,160,20,20);
bubble7.scale=0.4;
bubble7.setAnimation("bubble.png_1");

var bubble8=createSprite(125,25,20,20);
bubble8.scale=0.4;
bubble8.setAnimation("bubble.png_1");

var bubble9=createSprite(125,70,20,20);
bubble9.scale=0.4;
bubble9.setAnimation("bubble.png_1");

var bubble10=createSprite(175,25,20,20);
bubble10.scale=0.4;
bubble10.setAnimation("bubble.png_1");

var bubble11=createSprite(175,70,20,20);
bubble11.scale=0.4;
bubble11.setAnimation("bubble.png_1");

var bubble12=createSprite(175,115,20,20);
bubble12.scale=0.4;
bubble12.setAnimation("bubble.png_1");

var bubble13=createSprite(175,160,20,20);
bubble13.scale=0.4;
bubble13.setAnimation("bubble.png_1");

var bubble14=createSprite(175,205,20,20);
bubble14.scale=0.4;
bubble14.setAnimation("bubble.png_1");

var bubble15=createSprite(225,25,20,20);
bubble15.scale=0.4;
bubble15.setAnimation("bubble.png_1");

var bubble17=createSprite(225,70,20,20);
bubble17.scale=0.4;
bubble17.setAnimation("bubble.png_1");

var bubble16=createSprite(275,25,20,20);
bubble16.scale=0.4;
bubble16.setAnimation("bubble.png_1");

var bubble18=createSprite(275,70,20,20);
bubble18.scale=0.4;
bubble18.setAnimation("bubble.png_1");

var bubble19=createSprite(275,115,20,20);
bubble19.scale=0.4;
bubble19.setAnimation("bubble.png_1");

var bubble20=createSprite(275,160,20,20);
bubble20.scale=0.4;
bubble20.setAnimation("bubble.png_1");

var bubble21=createSprite(325,25,20,20);
bubble21.scale=0.4;
bubble21.setAnimation("bubble.png_1");

var bubble22=createSprite(325,73,20,20);
bubble22.scale=0.4;
bubble22.setAnimation("bubble.png_1");

var bubble23=createSprite(325,120,20,20);
bubble23.scale=0.4;
bubble23.setAnimation("bubble.png_1");

var bubble24=createSprite(375,25,20,20);
bubble24.scale=0.4;
bubble24.setAnimation("bubble.png_1");

var line1=createSprite(400,200,2,400);
line1.visible=false;

var line2=createSprite(1,200,2,400);
line2.visible=false;

var line3=createSprite(200,0,400,2);
line3.visible=false;

var line4=createSprite(200,365,400,2);
line4.visible=false;

var ground=createSprite(200,600,400,40);
ground.setAnimation("bgg3 copy.png_1");





function draw() {
  background("grey");
  if(keyDown("space")){
    ball.velocityY=-3;
    ball.velocityX=0;
  }
  if(keyDown("a")){
    ball2.velocityY=-3;
    ball2.velocityX=-3;
  }
  if(keyDown("s")){
    ball3.velocityY=-7;
    ball3.velocityX=-3;
  }
  

  if(ball.isTouching(bubble1)){
    bubble1.visible=false;
    ball.velocityY=2;
    ball.velocityX=4;
    bubble1.x=600;

  }
  
   if(ball.isTouching(bubble2)){
    bubble2.visible=false;
    ball.velocityX=4;
    ball.velocityY=2;
    bubble2.x=600;

  }
  if(ball.isTouching(bubble3)){
    bubble3.visible=false;
    ball.velocityX=4;
    bubble3.x=600;

  }
  
  if(ball.isTouching(bubble4)){
    bubble4.visible=false;
    ball.velocityX=4;
    bubble4.x=600;

  }
  
  if(ball.isTouching(bubble5)){
    bubble5.visible=false;
    ball.velocityX=4;
    bubble5.x=600;

  }
  
  if(ball.isTouching(bubble6)){
    bubble6.visible=false;
    ball.velocityX=4;
    bubble6.x=600;

  }
  
  if(ball.isTouching(bubble7)){
    bubble7.visible=false;
    ball.velocityX=4;
    bubble7.x=600;

  }
  
  if(ball.isTouching(bubble8)){
    bubble8.visible=false;
    ball.velocityX=4;
    bubble8.x=600;

  }
  
  if(ball.isTouching(bubble9)){
    bubble9.visible=false;
    ball.velocityX=4;
    bubble9.x=600;

  }
  
  if(ball.isTouching(bubble10)){
    bubble10.visible=false;
    ball.velocityX=4;
    bubble10.x=600;

  }
  
  
  if(ball.isTouching(bubble11)){
    bubble11.visible=false;
    ball.velocityX=4;
    bubble11.x=600;

  }
  
  if(ball.isTouching(bubble12)){
    bubble12.visible=false;
    ball.velocityX=4;
    bubble12.x=600;

  }
  
  if(ball.isTouching(bubble13)){
    bubble13.visible=false;
    ball.velocityX=4;
    bubble13.x=600;

  }
  
  if(ball.isTouching(bubble14)){
    bubble14.visible=false;
    ball.velocityX=4;
    bubble14.x=600;

  }
  
  if(ball.isTouching(bubble15)){
    bubble15.visible=false;
    ball.velocityX=4;
    bubble15.x=600;

  }
  
  if(ball.isTouching(bubble16)){
    bubble16.visible=false;
    ball.velocityX=4;
    bubble16.x=600;

  }
  
  if(ball.isTouching(bubble17)){
    bubble17.visible=false;
    ball.velocityX=4;
    bubble17.x=600;

  }
  if(ball.isTouching(bubble18)){
    bubble18.visible=false;
    ball.velocityX=4;
    bubble18.x=600;

  }
  
  if(ball.isTouching(bubble19)){
    bubble19.visible=false;
    ball.velocityX=4;
    bubble19.x=600;

  }
  
  if(ball.isTouching(bubble20)){
    bubble20.visible=false;
    ball.velocityX=4;
    bubble20.x=600;

  }
  
  if(ball.isTouching(bubble21)){
    bubble21.visible=false;
    ball.velocityX=4;
    bubble21.x=600;

  }
  
  if(ball.isTouching(bubble22)){
    bubble22.visible=false;
    ball.velocityX=4;
    bubble22.x=600;

  }
  
  if(ball.isTouching(bubble23)){
    bubble23.visible=false;
    ball.velocityX=4;
    bubble23.x=600;

  }
  
  if(ball.isTouching(bubble24)){
    bubble24.visible=false;
    ball.velocityX=4;
    bubble24.x=600;

  }
  
  
  
  
  ////////////////////////////////
  if(ball2.isTouching(bubble1)){
    bubble1.visible=false;
    ball2.velocityY=2;
    ball2.velocityX=4;
    bubble1.x=600;

  }

  
   if(ball2.isTouching(bubble2)){
    bubble2.visible=false;
    ball2.velocityX=4;
    ball2.velocityY=2;
    bubble2.x=600;

  }
  if(ball2.isTouching(bubble3)){
    bubble3.visible=false;
    ball2.velocityX=4;
    bubble3.x=600;

  }
  
  if(ball2.isTouching(bubble4)){
    bubble4.visible=false;
    ball2.velocityX=4;
    bubble4.x=600;

  }
  
  if(ball2.isTouching(bubble5)){
    bubble5.visible=false;
    ball2.velocityX=4;
    bubble5.x=600;

  }
  
  if(ball2.isTouching(bubble6)){
    bubble6.visible=false;
    ball2.velocityX=4;
    bubble6.x=600;

  }
  
  if(ball2.isTouching(bubble7)){
    bubble7.visible=false;
    ball2.velocityX=4;
    bubble7.x=600;

  }
  
  if(ball2.isTouching(bubble8)){
    bubble8.visible=false;
    ball2.velocityX=4;
    bubble8.x=600;

  }
  
  if(ball2.isTouching(bubble9)){
    bubble9.visible=false;
    ball2.velocityX=4;
    bubble9.x=600;

  }
  
  if(ball2.isTouching(bubble10)){
    bubble10.visible=false;
    ball2.velocityX=4;
    bubble10.x=600;

  }
  
  
  if(ball2.isTouching(bubble11)){
    bubble11.visible=false;
    ball2.velocityX=4;
    bubble11.x=600;

  }
  
  if(ball2.isTouching(bubble12)){
    bubble12.visible=false;
    ball2.velocityX=4;
    bubble12.x=600;

  }
  
  if(ball2.isTouching(bubble13)){
    bubble13.visible=false;
    ball2.velocityX=4;
    bubble13.x=600;

  }
  
  if(ball2.isTouching(bubble14)){
    bubble14.visible=false;
    ball2.velocityX=4;
    bubble14.x=600;

  }
  
  if(ball2.isTouching(bubble15)){
    bubble15.visible=false;
    ball2.velocityX=4;
    bubble15.x=600;

  }
  
  if(ball2.isTouching(bubble16)){
    bubble16.visible=false;
    ball2.velocityX=4;
    bubble16.x=600;

  }
  
  if(ball2.isTouching(bubble17)){
    bubble17.visible=false;
    ball2.velocityX=4;
    bubble17.x=600;

  }
  if(ball2.isTouching(bubble18)){
    bubble18.visible=false;
    ball2.velocityX=4;
    bubble18.x=600;

  }
  
  if(ball2.isTouching(bubble19)){
    bubble19.visible=false;
    ball2.velocityX=4;
    bubble19.x=600;

  }
  
  if(ball2.isTouching(bubble20)){
    bubble20.visible=false;
    ball2.velocityX=4;
    bubble20.x=600;

  }
  
  if(ball2.isTouching(bubble21)){
    bubble21.visible=false;
    ball2.velocityX=4;
    bubble21.x=600;

  }
  
  if(ball2.isTouching(bubble22)){
    bubble22.visible=false;
    ball2.velocityX=4;
    bubble22.x=600;

  }
  
  if(ball2.isTouching(bubble23)){
    bubble23.visible=false;
    ball2.velocityX=4;
    bubble23.x=600;

  }
  
  if(ball2.isTouching(bubble24)){
    bubble24.visible=false;
    ball2.velocityX=4;
    bubble24.x=600;

  }
  
  
  
  
  //////////////////////////////////
  if(ball3.isTouching(bubble1)){
    bubble1.visible=false;
    ball3.velocityY=2;
    ball3.velocityX=4;
    bubble1.x=600;

  }
  
   if(ball3.isTouching(bubble2)){
    bubble2.visible=false;
    ball3.velocityX=4;
    ball3.velocityY=2;
    bubble2.x=600;

  }
  if(ball3.isTouching(bubble3)){
    bubble3.visible=false;
    ball3.velocityX=4;
    bubble3.x=600;

  }
  
  if(ball3.isTouching(bubble4)){
    bubble4.visible=false;
    ball3.velocityX=4;
    bubble4.x=600;

  }
  
  if(ball3.isTouching(bubble5)){
    bubble5.visible=false;
    ball3.velocityX=4;
    bubble5.x=600;

  }
  
  if(ball3.isTouching(bubble6)){
    bubble6.visible=false;
    ball3.velocityX=4;
    bubble6.x=600;

  }
  
  if(ball3.isTouching(bubble7)){
    bubble7.visible=false;
    ball3.velocityX=4;
    bubble7.x=600;

  }
  
  if(ball3.isTouching(bubble8)){
    bubble8.visible=false;
    ball3.velocityX=4;
    bubble8.x=600;

  }
  
  if(ball3.isTouching(bubble9)){
    bubble9.visible=false;
    ball3.velocityX=4;
    bubble9.x=600;

  }
  
  if(ball3.isTouching(bubble10)){
    bubble10.visible=false;
    ball3.velocityX=4;
    bubble10.x=600;

  }
  
  
  if(ball3.isTouching(bubble11)){
    bubble11.visible=false;
    ball3.velocityX=4;
    bubble11.x=600;

  }
  
  if(ball3.isTouching(bubble12)){
    bubble12.visible=false;
    ball3.velocityX=4;
    bubble12.x=600;

  }
  
  if(ball3.isTouching(bubble13)){
    bubble13.visible=false;
    ball3.velocityX=4;
    bubble13.x=600;

  }
  
  if(ball3.isTouching(bubble14)){
    bubble14.visible=false;
    ball3.velocityX=4;
    bubble14.x=600;

  }
  
  if(ball3.isTouching(bubble15)){
    bubble15.visible=false;
    ball3.velocityX=4;
    bubble15.x=600;

  }
  
  if(ball3.isTouching(bubble16)){
    bubble16.visible=false;
    ball3.velocityX=4;
    bubble16.x=600;

  }
  
  if(ball3.isTouching(bubble17)){
    bubble17.visible=false;
    ball3.velocityX=4;
    bubble17.x=600;

  }
  if(ball3.isTouching(bubble18)){
    bubble18.visible=false;
    ball3.velocityX=4;
    bubble18.x=600;

  }
  
  if(ball3.isTouching(bubble19)){
    bubble19.visible=false;
    ball3.velocityX=4;
    bubble19.x=600;

  }
  
  if(ball3.isTouching(bubble20)){
    bubble20.visible=false;
    ball3.velocityX=4;
    bubble20.x=600;

  }
  
  if(ball3.isTouching(bubble21)){
    bubble21.visible=false;
    ball3.velocityX=4;
    bubble21.x=600;

  }
  
  if(ball3.isTouching(bubble22)){
    bubble22.visible=false;
    ball3.velocityX=4;
    bubble22.x=600;

  }
  
  if(ball3.isTouching(bubble23)){
    bubble23.visible=false;
    ball3.velocityX=4;
    bubble23.x=600;

  }
  
  if(ball3.isTouching(bubble24)){
    bubble24.visible=false;
    ball3.velocityX=4;
    bubble24.x=600;

  }
  fill("blue");
  textFont("Candara");
  textSize(30);
  text("Press key A,S or Space to Shoot",1,270);
  drawSprites();
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
