require('./cover.css');
var createCover = ()=>{
	console.dir(document);
	var div = document.createElement("div");
	div.className = "cover";
	return div;
}
exports.createCover = createCover;