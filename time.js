var leantime;
function gettime(){
	$.getJSON("https://api.leancloud.cn/1.1/date", function(json){
		leantime=new Date(json.iso);
	});
}