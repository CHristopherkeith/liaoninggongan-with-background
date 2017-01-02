$(document).ready(function(){


	function checkLength(value,minLen,maxLen){
		var len=value.length;
		if(len>=minLen&&len<=maxLen){
			return true;
		}
		else return false;
	}

	function showOkHint(thisInput){
		thisInput.nextAll("p").attr("class","rldtokhint");
		thisInput.nextAll("p").find("span[class$='error']").hide();
		thisInput.nextAll("p").find("span[class$='ok']").show();
	}

	function showErrorHint(thisInput){		
		thisInput.nextAll("p").attr("class","rldterrorhint");
		thisInput.nextAll("p").find("span[class$='ok']").hide();
		thisInput.nextAll("p").find("span[class$='error']").show();
	}

	function checkDocNum(preClassName,val,docNum){
		if($(preClassName+" select").find(":selected").text()==="身份证"){
			if(val.match(/^(^[1-9]\d{7}((0\d)|(1[0-2]))(([0-2]\d)|3[0-1])\d{3}$)|(^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0-2]\d)|3[0-1])((\d{4})|\d{3}[Xx])$)$/)){
				showOkHint(docNum);
			}
			else{
				showErrorHint(docNum);
			}
		}
		else{			
			if(val.match(/^[a-zA-Z0-9]{1,20}$/)){
				showOkHint(docNum);
			}
			else{
				showErrorHint(docNum);
			}
		}
	}

	function getPhotoSize(obj){

	    photoExt=obj.value.substr(obj.value.lastIndexOf(".")).toLowerCase();//获得文件后缀名
	    if(photoExt!='.jpg'){
	        alert("请上传后缀名为jpg的照片!");
	        return false;
	    }
	    var fileSize = 0;
	    var isIE = /msie/i.test(navigator.userAgent) && !window.opera;            
	    if (isIE && !obj.files) {          
	         var filePath = obj.value;            
	         var fileSystem = new ActiveXObject("Scripting.FileSystemObject");   
	         var file = fileSystem.GetFile (filePath);fileSize = file.Size;         
	    }else {  
	         fileSize = obj.files[0].size;
	    } 
	    fileSize=Math.round(fileSize/1024*100)/100; //单位为KB
	    if(fileSize>=1024){
	        alert("照片最大尺寸为1M，请重新上传!");
	        return false;
	    }

	    return true;
	}

	var val="";
	var userName=$(".rldtusername input"),
		passWord=$(".rldtpsw input"),
		pswConfirm=$(".rldtpswcfm input"),
		trueName=$(".rldttruename input"),
		birthDate=$(".rldtbirthdate input"),
		identity=$(".rldtidentity input"),
		docType=$(".rldtdoctype select"),
		docNum=$(".rldtdocnum input"),
		photo=$(".rldtphoto input"),
		location=$(".rldtlocation input"),
		address=$(".rldtaddress input"),
		email=$(".rldtemail input"),
		mbPhone=$(".rldtmphone input"),
		prisoner=$(".rldtprisoner input"),
		prsDocType=$(".rldtprsdoctype select"),
		prsDocNum=$(".rldtprsdocnum input"),
		prison=$(".rldtprison input"),
		relation=$(".rldtrelation input"),
		time=$(".rldttime input"),
		reason=$(".rldtreason input"),
		accompany=$(".rldtaccompany input");
		submit=$(".next4");

	submit.on("click",function(){
		$.ajax({
			"url":"index.php",
			"data":$("#rlifo").serialize(),
			"success":function(data){
				saveStorage(data);
				alert("注册成功，请返回首页以此账号登录");
				window.location.href="index.html";
			},
			"type":"POST",
			"dataType":"json"
		})
	})

	userName.on("blur",function(){
		val=$(this).val();
		if(val.match(/^[a-zA-Z]/g)&&!val.match(/\s+/g)&&checkLength(val,6,15)){
			showOkHint(userName);
		}
		else{
			showErrorHint(userName);
		}
	})

	passWord.on("blur",function(){
		val=$(this).val();
		if(!val.match(/\s+/g)&&checkLength(val,6,15)){
			showOkHint(passWord);
		}
		else{
			showErrorHint(passWord);
		}

		if(!pswConfirm.val().match(/\s+/g)&&checkLength(pswConfirm.val(),6,15)&&pswConfirm.val()===val){
			showOkHint(pswConfirm);
		}
		else{
			showErrorHint(pswConfirm);
		}

	})

	pswConfirm.on("blur",function(){
		val=$(this).val();
		if(!val.match(/\s+/g)&&checkLength(val,6,15)&&val===passWord.val()){
			showOkHint(pswConfirm);
		}
		else{
			showErrorHint(pswConfirm);
		}
	})

	trueName.on("blur",function(){
		val=$(this).val();
		if(!val.match(/\s+/g)&&checkLength(val,1,15)){
			showOkHint(trueName);
		}
		else{
			showErrorHint(trueName);
		}
	})

	birthDate.on("blur",function(){
		val=$(this).val();
		if(!val.match(/\s+/g)&&val.match(/^(\d{4}\-\d{2}\-\d{2})$/g)){
			showOkHint(birthDate);
		}
		else{
			showErrorHint(birthDate);
		}
	})

	identity.on("blur",function(){
		val=$(this).val();
		if(!val.match(/\s+/g)&&val!==""){
			showOkHint(identity);
		}
		else{
			showErrorHint(identity);
		}
	})

	docType.on("change",function(){
		//
		checkDocNum(".rldtdoctype",docNum.val(),docNum);
	})

	docNum.on("blur",function(){
		val=$(this).val();
		checkDocNum(".rldtdoctype",val,docNum);		
	})

	photo.on("change",function(){
		if(getPhotoSize(this)){
			showOkHint(photo);
		}
		else{
			showErrorHint(photo);
		}
	})

	location.on("blur",function(){
		val=$(this).val();
		if(!val.match(/\s+/g)&&checkLength(val,1,100)){
			showOkHint(location);
		}
		else showErrorHint(location);
	})

	address.on("blur",function(){
		val=$(this).val();
		if(!val.match(/\s+/g)&&checkLength(val,1,100)){
			showOkHint(address);
		}
		else showErrorHint(address);
	})

	email.on("blur",function(){
		val=$(this).val();
		if(val.match(/^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/)){
			showOkHint(email);
		}
		else showErrorHint(email);
	})

	mbPhone.on("blur",function(){
		val=$(this).val();
		if(val.match(/^(\d{11,13})$/)){
			showOkHint(mbPhone);
		}
		else showErrorHint(mbPhone);
	})

	prisoner.on("blur",function(){
		val=$(this).val();
		if(!val.match(/\s+/g)&&checkLength(val,1,15)){
			showOkHint(prisoner);
		}
		else{
			showErrorHint(prisoner);
		}
	})


	prsDocType.on("change",function(){
		//
		checkDocNum(".rldtprsdoctype",prsDocNum.val(),prsDocNum);
	})

	prsDocNum.on("blur",function(){
		val=$(this).val();
		checkDocNum(".rldtprsdoctype",val,prsDocNum);	
	})

	prison.on("blur",function(){
		val=$(this).val();
		if(!val.match(/\s+/g)&&val!==""){
			showOkHint(prison);
		}
		else{
			showErrorHint(prison);
		}
	})

	relation.on("blur",function(){
		val=$(this).val();
		if(!val.match(/\s+/g)&&val!==""){
			showOkHint(relation);
		}
		else{

			showErrorHint(relation);
		}
	})

	time.on("blur",function(){
		val=$(this).val();
		if(val.match(/^(\d{4}\-\d{2}\-\d{2})$/)){
			showOkHint(time);
		}
		else showErrorHint(time);
	})

	reason.on("blur",function(){
		val=$(this).val();
		if(!val.match(/\s+/g)&&checkLength(val,1,10)){
			showOkHint(reason);
		}
		else showErrorHint(reason);
	})

	accompany.on("blur",function(){
		val=$(this).val();
		if(val.match(/^[1-3]$/)){
			showOkHint(accompany);
		}
		else showErrorHint(accompany);
	})



})