function saveStorage(data){
	var str=JSON.stringify(data);
	if(data.username!=""){
		localStorage.setItem(data.username,str);
	}
}

function findStorage(key){

	var str=localStorage.getItem(key);

	if(str){
		var data=JSON.parse(str);
		return data;
	}
	return false;

}

function getCookie(c_name)
{
if (document.cookie.length>0)
  {
    c_start=document.cookie.indexOf(c_name + "=")
    if (c_start!=-1)
      { 
      c_start=c_start + c_name.length+1 
      c_end=document.cookie.indexOf(";",c_start)
      if (c_end==-1) c_end=document.cookie.length
      return unescape(document.cookie.substring(c_start,c_end))
      } 
  }
return ""
}

function setCookie(c_name,value,expiredays)
{
  var exdate=new Date()

  exdate.setDate(exdate.getDate()+expiredays)
  document.cookie=c_name+ "=" +escape(value)+
  ((expiredays==null) ? "" : ";expires="+exdate.toGMTString())
  
}

function checkCookie()
{
  var username=getCookie('username');
  if (username!=null && username!="")
    {
    	$(".login").addClass("dplynone");
		$(".welcome").removeClass("dplynone");
	}
}

var indexObj=function(){
	this.init();
}

indexObj.prototype={


	init:function(){
		this.indexLoginSwitch();
		this.mapClick();
		this.loginOperate();
		this.relationRsg();
		this.showAnswer();
		this.showPrison();
		this.login();
		checkCookie();

	},

	indexLoginSwitch:function(){
		$(".ljiashu").on("click",function(){
			$(this).removeClass("bgnone");
			$(this).css("color","#FFFFFF");
			$(".llvshi").addClass("bgnone");
			$(".llvshi").css("color","#A8A8A8");
			$(".userbg").removeClass("userlsbg");
		});
		$(".llvshi").on("click",function(){
			$(this).removeClass("bgnone");
			$(this).css("color","#FFFFFF");
			$(".ljiashu").addClass("bgnone");
			$(".ljiashu").css("color","#A8A8A8");
			$(".userbg").addClass("userlsbg");
		});
	},

	mapClick:function(){
		$("#map [class$='shi']").on("click",function(){
			$(".kanshousuo").removeClass("dplynone");
			$(".kanshousuo [class$='shi']").css("display","none");
			$(".kanshousuo ."+$(this).attr("class")).css("display","block");
		})
	},

	loginOperate:function(){
		$(".apmclose").on("click",function(){
			$(".shader").addClass("dplynone");
			$(".apmlogin").addClass("dplynone");
		});
		$(".nubg").on("click",function(){
			$(".shader").addClass("dplynone");
			$(".apmlogin").addClass("dplynone");
		})
	},

	relationRsg:function(){
		var stepState="",stepIndex="";changeStep="";
		$("div[class^='nextprebt'] input").on("mouseover",function(){
			$(this).addClass("inputhover")
		});
		$("div[class^='nextprebt'] input").on("mouseout",function(){
			$(this).removeClass("inputhover")
		});
		$("div[class^='nextprebt'] input").on("click",function(){

			stepState=$(this).attr("class").match(/[a-z]+/g)[0];
			stepIndex=$(this).attr("class").match(/\d/g)[0];

			if(stepState==="next"&&stepIndex!=="4"){
				
				if($(".dplyblock").eq(0).find("p[class$='dterrorhint']").length){
					alert("请检查各项是否正确填写")
					return false;
				}
				changeStep=(parseInt(stepIndex)+1).toString();
				$(".nextprebt"+stepIndex).removeClass("dplyblock")
				$(".nextprebt"+changeStep).addClass("dplyblock")
				
			}
			else if(stepState==="next"&&stepIndex==="4"){
				
				if($(".dplyblock").eq(0).find("p[class$='dterrorhint']").length){
					alert("请检查各项是否正确填写")
					return false;
				}
			}
			else if(stepState==="pre"){
				changeStep=(parseInt(stepIndex)-1).toString();					
				$(".nextprebt"+stepIndex).removeClass("dplyblock")

				$(".nextprebt"+changeStep).addClass("dplyblock")
			}

			if($(".rldtcontain")[0]){
				$("[class^='rlstep']").attr("class","rlstep"+changeStep);
				$(".rldtinput"+stepIndex).removeClass("dplyblock")				
				$(".rldtinput"+changeStep).addClass("dplyblock")					
			}

			if($(".lydtcontain")[0]){
				$("[class^='lystep']").attr("class","lystep"+changeStep);
				$(".lydtinput"+stepIndex).removeClass("dplyblock")				
				$(".lydtinput"+changeStep).addClass("dplyblock")
			}
		});
	},

	showAnswer:function(){

		$(".collapse").on("click",function(){
			$(this).toggleClass("uncollapse");
			$(this).parent().next().toggle(500);
		})

		$(".mscollapse").on("click",function(){

			$(this).toggleClass("msuncollapse");
			$(this).closest(".msdtquestion").next().toggle();
		})

		$(".msbt,.msadd").on("click",function(){
			$(".msbox").show();
		})

		$(".msbxclose").on("click",function(){
			$(".msbox").hide();
		})
	},

	showPrison:function(){
		var thisObj;
		$(".mr1city td").on("click",function(){
			thisObj=$(".tdhover")[0];
			$(".mr1city .tdhover").removeClass("tdhover");
			$(".psdetail.dplyblock").removeClass("dplyblock");
			$("img.arrow").removeClass("dplyblock");
			if($(this)[0]!=thisObj){
				
				$("#"+$(this).attr("class")).addClass("dplyblock");
				$(this).find("img").addClass("dplyblock");
				$(this).addClass("tdhover");
			}
		})

	},

	login:function(){
		$(".denglu").on("click",function(){
			var username="",password="",data={};
			username=$(".user-name input").val();
			password=$(".pwd input").val();
			data=findStorage(username);
			if(data){
				if(data.password===password){
					$(".login").addClass("dplynone");
					$(".welcome").removeClass("dplynone");
					setCookie("username",data.username);
				}
				else{
					alert("用户名与密码不匹配")
				}
			}
			else{
				alert("用户名不存在")
			}
			
		})
	}
}