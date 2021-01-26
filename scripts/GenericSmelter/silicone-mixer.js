// var speed = -0.5;
	// const siliconeMixer = extendContent(GenericCrafter, "silicone-mixer", {
		// drawLayer(tile){
		// Draw.rect("cotton-wool-mixer-rotator.png", tile.drawx(), tile.drawy(), tile.entity.totalProgress * speed);
		// Draw.rect("cotton-wool-mixer-top", tile.drawx(), tile.drawy(), 0);
		// }
	// });
	// siliconeMixer.layer = Layer.turret;

const siliconeMixer = extendContent (GenericCrafter,"silicone-mixer",{});
siliconeMixer.drawer = new DrawWeave();