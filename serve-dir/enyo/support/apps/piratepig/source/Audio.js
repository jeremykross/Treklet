enyo.kind({
	name:"Audio",
	kind:"Control",
	published: {
		src: ""
	},
	events: {
		onEnded: ""
	},
	//* @protected
	create: function() {
		this.inherited(arguments);
		this.srcChanged();
	},
	srcChanged: function() {
		this.destroyClientControls();
		var a = this.createComponent({tag:"audio", name:"client", style:"display:none;", owner:this});
		var srcs = this.src;
		if (srcs && !enyo.isArray(srcs)) {
			srcs = [srcs];
		}
		for (var i = 0, s; s = srcs[i]; i++) {
			var type = s.replace(/[^.]*./,"");
			var mime = {mp3:"audio/mpeg", ogg:"audio/ogg", wav:"audio/wav"}[type];
			a.createComponent({tag:"source", src:s, attributes:{type:mime}, owner:this});
		}
		a.attributes.ended = enyo.bind(this, "doEnded");
	},
	//* @public
	play: function() {
		var a = this.$.client.hasNode();
		if (a && a.play) {
			a.play();
		}
	}
});
