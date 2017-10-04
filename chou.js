var changci=parseInt(getQueryString("changci"));
function leanchoujiang(){
	var num=Array();
	var query = new AV.Query('luck');
	query.equalTo('Changci', changci);
	query.limit(1000);
	query.ascending('Number');
	query.find().then(function (results) {
		for(i in results){
			var temp=results[i].get('Number');
			if(temp!==num[num.length-1]){
				num.push(temp);
			}
		}
		alert(num[Math.floor(Math.random()*(num.length))]);
	}, function (error) {
	});
}
function getQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]); return null;
}