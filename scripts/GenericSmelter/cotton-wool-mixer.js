// var speed = 4.2;
	// const cottonWoolMixer = extendContent(GenericCrafter, "cotton-wool-mixer", {
		// drawLayer(tile){
		// Draw.rect(this.name + "-rotator.png", tile.drawx(), tile.drawy(), tile.entity.totalProgress * speed);
		// Draw.rect(this.name + "-top", tile.drawx(), tile.drawy(), 0);
		// }
	// });
	// cottonWoolMixer.layer = Layer.turret;

const cottonWoolMixer = extendContent (GenericCrafter,"cotton-wool-mixer",{});
cottonWoolMixer.drawer = new DrawMixer();