enyo.kind({
	name: "jmtk.FileInput",
	style: "padding: 5px; text-align: left;",
	
	events: {
		onFileSelected: ""
	},

	published: {
		buttonCaption: "Choose File",
		uploadNote: "",
		uploadNoteStyle: "font-weight: bold; font-size: 18px",
		uploadNoteClass: "",
		inputElementName: "",
		placeholder: "No file chosen",
		multiple: false
	},


	components: [
		{
			kind:"enyo.ToolDecorator",
			components: [
				{
					kind: "onyx.Button", content: "", name: "selectFileButton",
					ontap: "triggerUpload", style: "margin-right: 10px;"
				},
				{name: "fileName", content: ""}
			]
		},
		{name: "uploadNote", content: "", style: "margin-left: 3px;"},
		{kind: "enyo.Input", name: "fileInput", type: "file", style: "position: absolute; visibility: hidden;", onchange: "fileSelected"}
	],

	create: function() {
		this.inherited(arguments);
		this.buttonCaptionChanged();
		this.uploadNoteChanged();
		this.uploadNoteStyleChanged();
		this.uploadNoteClassChanged();
		this.inputElementNameChanged();
		this.placeholderChanged();
		this.multipleChanged();
	},

	triggerUpload: function() {
		var node = this.$.fileInput.hasNode();
		if ( node ) {
			node.click();
		}
	},

	getFiles: function() {
		var files = [];
		var node = this.$.fileInput.hasNode();
		if ( node ) {
			files = node.files;
		}
		return files;
	},

	clearFiles: function() {
		this.$.fileInput.destroy();
		this.createComponent({kind: "enyo.Input", name: "fileInput", type: "file", style: "position: absolute; visibility: hidden;", onchange: "fileSelected"}).render();
		this.$.fileName.setContent(this.placeholder);
	},
	
	//* @protected
	fileSelected: function( inSender ) {
		var fileName = inSender.getValue().replace("C:\\fakepath\\", "");
		if ( !fileName.length ) {
			this.$.fileName.setContent(this.placeholder);
			fileName = null;
		}
		else if ( this.getFiles().length > 1 ) {
			this.$.fileName.setContent("[Multiple files selected]");
		}
		else {
			this.$.fileName.setContent(fileName);
		}

		this.doFileSelected({fileName: fileName});
	},

	buttonCaptionChanged: function() {
		this.$.selectFileButton.setContent(this.buttonCaption);
	},

	uploadNoteChanged: function() {
		this.$.uploadNote.setContent(this.uploadNote);
	},

	uploadNoteStyleChanged: function() {
		this.$.uploadNote.addStyles(this.uploadNoteStyle);
	},

	uploadNoteClassChanged: function() {
		this.$.uploadNote.addClass(this.uploadNoteClass);
	},

	inputElementNameChanged: function() {
		this.$.fileInput.setAttribute("name", this.inputElementName);
	},

	placeholderChanged: function( inOldValue ) {
		if ( !inOldValue || this.$.fileName.getContent() == inOldValue ) {
			this.$.fileName.setContent( this.placeholder );
		}
	},

	multipleChanged: function() {
		this.$.fileInput.setAttribute("multiple", (this.multiple ? "multiple" : null));
	}

});