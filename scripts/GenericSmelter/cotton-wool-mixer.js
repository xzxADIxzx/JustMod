var speed = 4.2;
	const cottonWoolMixer = extendContent(GenericCrafter, "cotton-wool-mixer", {
		drawLayer(tile){
		Draw.rect(this.name + "-rotator.png", drawx(), drawy(), this.totalProgress * speed);
		Draw.rect(this.name + "-top", drawx(), drawy(), 0);
		}
	});
	cottonWoolMixer.layer = Layer.turret;