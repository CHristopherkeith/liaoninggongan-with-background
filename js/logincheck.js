$(document).ready(function(){

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
    username=getCookie('username')
    if (username!=null && username!="")
      {
      	$(".rlusername span").text(username);
  		  $(".rllogin").val("退出");
        $(".rlloginlink").attr("href","javascript:;")
  	}
  }

  checkCookie();

})