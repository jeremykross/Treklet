/* CryptoTweets, a game built using Enyo 2.0 */

/* custom events:
 *
 * /onGuess/
 * sent from app down into cells when a guess is made,
 * either by the user or by the hint button. There are three
 *   cypher: the encrypted letter
 *   guess: what letter was guessed
 *   hint: if true, this was a hint given by the system
 *
 * /onStartGuess/
 * sent from a cell or from the keyboard handler, it signals
 * that the app should popup the guess UI.
 *   cypher: what letter was picked to start the guess
 *
 * /onFinishGuess/
 * sent from popup when second key is hit.
 *   cypher: what letter was picked to start the guess
 *   guess: what letter was picked to start the guess
 *
 * /resetGuess/
 * sent to cells to have them revert to their original form
 */

enyo.kind({
	name: "PickLetterPopup",
	kind: "onyx.Popup",
	centered: true,
	modal: true,
	floating: true,
	style: "padding: 10px; font-size: 30px;",
	handlers: {
		onkeypress: "keypress"
	},
	show: function(cypherLetter) {
		this.cypherLetter = cypherLetter;
		this.setContent(this.cypherLetter + " " + Unicode.rightwardArrow + " ?");
		this.inherited(arguments);
	},
	keypress: function(inSender, inEvent) {
		var key = String.fromCharCode(inEvent.charCode).toUpperCase();
		// allow backspace or space to clear a cell
		if (inEvent.charCode === 8 || inEvent.charCode === 32) {
			this.setContent(this.cypherLetter + " " + Unicode.rightwardArrow +
				" " + Unicode.nbsp);
			setTimeout(enyo.bind(this, this.hide), 1000);
			this.bubble("onFinishGuess", {
				cypher: this.cypherLetter,
				guess: null
			});
			return true;
		}

		if (key >= "A" && key <= "Z") {
			this.setContent(this.cypherLetter + " " + Unicode.rightwardArrow +
				" " + key);
			setTimeout(enyo.bind(this, this.hide), 1000);
			this.bubble("onFinishGuess", {
				cypher: this.cypherLetter,
				guess: key
			});
			return true;
		}
	}
});

enyo.kind({
	name: "App",
	kind: "Control",
	classes: "onyx",
	handlers: {
		onStartGuess: "startGuess",
		onFinishGuess: "finishGuess"
	},
	components: [
		{ kind: "enyo.Signals",
			onkeypress: "handleKeyPress",
			onkeydown: "handleKeyDown" },
		{ kind: "onyx.Toolbar", components: [
			//{kind: onyx.Grabber},
			{content: "CryptoTweets", style: "padding-right: 30px"},
			{kind: enyo.Group, highlander: false, components: [
				{kind: onyx.Button, content: "Hint", onclick: "giveHint"},
				{kind: onyx.Button, content: "Reset", onclick: "restart"},
				{kind: onyx.Button, content: "Next", onclick: "nextTweet"}
			]},
			{kind: enyo.Group, highlander: false, components: [
				{kind: onyx.Button, content: "Fetch Tweets", onclick: "fetchTweets"},
				{kind: onyx.Button, content: "Fetch News", onclick: "fetchNews"}
			]}
		]},
		{ kind: "Cryptogram" },
		{ name: "popup", kind: "PickLetterPopup" }
	],
	create: function() {
		this.inherited(arguments);

		this.tweets = [
			"Tweets are being loaded!",
			"This is a very long message used to test how well we're able to word-wrap very long messages."
		];
		this.nextTweetIndex = 0;
		//this.nextTweet();
	},
	fetchTweets: function() {
		var request = new enyo.JsonpRequest({
			url: "http://search.twitter.com/search.json",
			callbackName: "callback"
		});
		request.response(enyo.bind(this, "handleTwitterResults"));
		request.go({
			q: "from:TopTweets -filter:links"
		});
	},
	fetchNews: function() {
		var request = new enyo.JsonpRequest({
			url: "http://api.usatoday.com/open/articles/topnews",
			callbackName: "jsoncallbackmethod"
		});
		request.response(enyo.bind(this, "handleUSATodayResults"));
		request.go({
			encoding: "json",
			api_key: "wcucm5mftznpwrembw824np3",
			count: 15
		});
	},
	handleTwitterResults: function(inRequest, inResponse) {
		this.tweets = [];
		enyo.forEach(inResponse.results, function(t) {
			this.tweets.push(t.text);
		}, this);
		this.nextTweetIndex = 0;
		this.nextTweet();
	},
	handleUSATodayResults: function(inRequest, inResponse) {
		this.tweets = [];
		enyo.forEach(inResponse.stories, function(t) {
			this.tweets.push(t.title);
		}, this);
		this.nextTweetIndex = 0;
		this.nextTweet();
	},
	giveHint: function() {
		this.$.cryptogram.giveHint();
	},
	restart: function() {
		this.$.cryptogram.restart();
	},
	nextTweet: function() {
		this.$.cryptogram.resetCypher();
		this.$.cryptogram.setText(this.tweets[this.nextTweetIndex++]);
		if (this.nextTweetIndex >= this.tweets.length) {
			this.nextTweetIndex = 0;
		}
	},
	handleKeyDown: function(inSender, inEvent) {
		// prevent backspace from changing page
		if (inEvent.keyCode === 8) return true;
	},
	handleKeyPress: function(inSender, inEvent) {
		var key = String.fromCharCode(inEvent.charCode).toUpperCase();
		if (key >= "A" && key <= "Z") {
			this.waterfall("onStartGuess", { cypher: key });
		}
		else if (key === "?") {
			this.giveHint();
		}
	},
	startGuess: function(inSender, inEvent) {
		this.$.popup.show(inEvent.cypher);
		return true;
	},
	finishGuess: function(inSender, inEvent) {
		this.$.cryptogram.guessLetter(inEvent.cypher, inEvent.guess, false);
	}
});
