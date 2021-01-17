var speed = -0.5;
	const siliconeMixer = extendContent(GenericCrafter, "silicone-mixer", {
		Draw.drawLayer(tile){
		Draw.rect(this.name + "-rotator", Draw.drawx(), Draw.drawy(), this.totalProgress * speed);
		Draw.rect(this.name + "-top", Draw.drawx(), Draw.drawy(), 0);
		}
	});
	siliconeMixer.layer = Layer.turret;