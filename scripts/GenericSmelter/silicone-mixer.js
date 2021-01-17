var speed = -0.5;
	const siliconeMixer = extendContent(GenericCrafter, "silicone-mixer", {
		drawLayer(tile){
		Draw.rect(this.name + "-rotator", drawx(), drawy(), this.totalProgress * speed);
		Draw.rect(this.name + "-top", drawx(), drawy(), 0);
		}
	});
	siliconeMixer.layer = Layer.turret;