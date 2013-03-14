Enyo 2.0 Decorated-File-Input
=============================

An Enyo 2 Decorator for the &lt;input type="file"> HTML element, also known in Enyo 2 as {kind:"enyo.Input", type:"file"}

For a demo of the Decorated File Input, visit <a href="http://jmtk.us.to#fileInput">this page</a>.

<b>NOTICE: this component does no server communication internally. For a complete usage and implementation guide, see below.</b>
###Published Properties###
    
```
published: {
    // The content of the button
    buttonCaption: "Choose File",

    // The content of the upload note
    uploadNote: "",

	// The style of the upload note
    uploadNoteStyle: "font-weight: bold; font-size: 18px",
    
	// The CSS class of the upload note (may be overkill but oh well!)
    uploadNoteClass: "",
    
	// This is the name of the <input> HtmlElement and thus the
    // $_POST[] key in your PHP script. Set this if you want
    // to wrap your Enyo generated HTML in a <form> for convenience or less JS-oriented web programming.
    // NOTE: if you use FormData as described below, this property is unnecessary
    inputElementName: "",
    
	// The text shown next to the button when no file is chosen
    placeholder: "No file chosen",
    
    // Determines whether or not multiple files can be selected for upload
    multiple: false
},

```

###Functions###
```
// Basically emulates clicking the 'Choose File' button. May or may not need this.
triggerUpload()

// Returns an array of File objects. Returns empty array if no file selected.
// Use this for form validation and for posting to upload, as shown later
getFiles()

// Clears the File objects from the <input>'s File array. Undoes any file choosing
// performed by the user
clearFiles()
```

###Events###
```
events: {
	// Event that is bubbled up when the user chooses a file.
	// You can access the short name of the selected file like so: inEvent.fileName
	// NOTE: this is not the full path, but only something like 'myFile.txt'. Use as you wish.
	onFileSelected: ""
}
```

###Usage###

Using the custom File Input is straightforward:

* Include it in your components, be sure to hook into the `onFileSelected` event.

```
components: [
    {...},
    // In this example we will POST to the server immediately
    // after the user chooses a file
    {kind: "jmtk.FileInput", name: "fileInput", onFileSelected: "uploadFile"}
	{...}
]
```

* Create the `onFileSelected` event handler. In this case we call it 'uploadFile' and it will attempt to upload the selected file to the server.

```
uploadFile: function( inSender, inEvent ) {
	this.log("File name: " + inEvent.fileName);
	// This is a JavaScript abstraction of an HTML <form>. This makes posting data to a PHP page very easy
	var form = new FormData();

	// Simply attach the selected file to the FormData like so.
	// The name you choose here is how you will access the File from PHP.
	// E.g. <?php $file = $_POST['uploadedFile']; ?>
	// Also remember to access the File from the FileInput using Array notation
	form.append('uploadedFile', this.$.fileInput.getFiles()[0]);
	
	// Now we start the request
	var xhr = new XMLHttpRequest();
	// Setup the response handler for the XHR using Enyo's binding function.
	// Remember to pass along the XHR
	xhr.onreadystatechange = enyo.bind( this, "serverResponse", xhr );
	
	// Open the request for communication with the server
	// POST means we are sending data. 'yourPhpFile.php' is where the server handles the uploaded file.
	// And true means do not make the browser wait on the request
	xhr.open("POST", "yourPhpFile.php", true);
	
	// Send!
	xhr.send( form );
}
```

* Then your `serverResponse` function can do whatever you like. Here is a simple example:

```
serverResponse: function( xhr ) {
    if ( xhr.status == 200 && xhr.readyState == 4 ) {
    	alert("The file was uploaded!");
    }
}
```
