require('./cover.css');
var createCover = ()=>{
	console.dir(document);
	var div = document.createElement("div");
	div.className = "cover";
	div.innerHTML = '<img src="http://higege.hustonline.net/img/share.png">';
	return div;
}
exports.createCover = createCover;