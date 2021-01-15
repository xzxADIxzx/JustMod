var speed = 4.2;
	const cottonWoolMixer = extendContent(GenericCrafter, "cotton-wool-mixer", {
	  drawLayer(tile){
	  draw.rect(this.name + "-rotator", drawx(), drawy(), totalProgress * speed);
	  draw.rect(this.name + "-top", drawx(), drawy(), 0);
	  }
	});
	cottonWoolMixer.layer = Layer.turret;
	cottonWoolMixer.localizedName = "cotton-wool-mixer";