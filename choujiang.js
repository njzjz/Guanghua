$(function(){
	$("#form").submit(function(e) {
		choujiang(parseInt($("#number").val()));
		return false;
	});
	if($.cookie('submit')=="yes"){
		$("#wxinput").html("您已提交，请等待开奖！");
		$("#wxsubmit").html("");
	};
	gettime();
});
function choujiang(number){
	var changci=getchangci(number);
	if(changci>0){
		if(intime(changci)){
			upload(number,changci);
		}else{
			tishi("不在时间范围内！");
		}
	}else{
		tishi("输入有误！");
	}
}
function upload(number,changci){
	var LuckObject = AV.Object.extend('luck');
	var luckObject = new LuckObject();
	luckObject.set('Number',number);
	luckObject.set('Changci',changci);
	luckObject.save().then(function(todo) {
		tishi("提交成功，请等待开奖！");
		$.cookie('submit', 'yes',{expires: 7});
		$("#wxinput").html("您已提交，请等待开奖！");
		$("#wxsubmit").html("");
	}, function(error) {
		tishi("提交失败，请重试！");
	});
}
function intime(changci){
	if(changci==1){
		if(/*leantime>new Date("2017-10-04T09:45:00.000Z")&&*/leantime<new Date("2017-10-04T11:00:00.000Z")){
			return true;
		}else{
			return false;
		}
	}else if(changci==2){
		if(leantime>new Date("2017-10-04T10:45:00.000Z")&&leantime<new Date("2017-10-04T12:00:00.000Z")){
			return true;
		}else{
			return false;
		}
	}else if(changci==3){
		if(leantime>new Date("2017-10-04T11:45:00.000Z")&&leantime<new Date("2017-10-04T13:00:00.000Z")){
			return true;
		}else{
			return false;
		}
	}else if(changci==10){
		if(leantime>new Date("2017-10-01T14:45:00.000Z")&&leantime<new Date("2017-10-04T09:00:00.000Z")){
			return true;
		}else{
			return false;
		}
	}else{
		return true;
	}
}
function getchangci(number){
	if(number>1000&&number<1201){
		return 1;
	}else if(number>2000&&number<2201){
		return 2;
	}else if(number>3000&&number<3201){
		return 3;
	}else if(number>12100&&number<12200){
		return 10;
	}else{
		return 0;
	}
}
function tishi(neirong){
	$('#tishi').show();
	$("#neirong").html(neirong);
}