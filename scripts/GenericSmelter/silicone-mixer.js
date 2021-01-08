var speed = -0.5;
  const siliconeMixer = extendContent(GenericCrafter, "silicone-mixer", {
    drawLayer(tile){
    draw.rect(this.name + "-rotator", drawx(), drawy(), totalProgress * speed);
    draw.rect(this.name + "-top", drawx(), drawy(), 0);
    }
  });
  siliconeMixer.layer = Layer.turret;