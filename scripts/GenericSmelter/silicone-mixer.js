var speed = -0.5;
	const siliconeMixer = extendContent(GenericCrafter, "silicone-mixer", {
		drawLayer(tile){
		Draw.rect("cotton-wool-mixer-rotator.png", drawx(), drawy(), this.totalProgress * speed);
		Draw.rect("cotton-wool-mixer-top", drawx(), drawy(), 0);
		}
	});
	siliconeMixer.layer = Layer.turret;