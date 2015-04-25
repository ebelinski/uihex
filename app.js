$(document).ready(function() {
	$("#hex-value").focus();

	$("#hex-value").keyup(function() {
		var rawValue = $("#hex-value").val();
		// console.log("Value: " + rawValue);
		
		if (rawValue.length == 7 && rawValue[0] == '#') {
			console.log("7 and #");

			$("#objective-c-results").html("[UIColor colorWithRed:0.071 green:0.204 blue:0.337 alpha:1] /* "+rawValue+" */");
		} else if (rawValue.length == 6 && rawValue[0] != '#') {

		} else {
			$("#swift-results").html("");
			$("#objective-c-results").html("");
		}
	});
});