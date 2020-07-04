
$(document).ready(function(){
/*	$('[data-toggle="popover"]').popover({
		   title:validatePassword,
		   html:true,
		   placement:'right'
		});*/
 // $("#btn").hide();
  $("#firstnameMsg").hide();
  $("#lastnameMsg").hide();
  $("#emailMsg").hide();
  $("#passMsg").hide();
  $("#confPassMsg").hide();
  $("#mobileMsg").hide();


  var error_fname=false;
  var error_lname=false;
  var error_email=false;
  var error_password=false;
  var error_repassword=false;
  var error_mobile=false;

  $("#firstname").focusout(function(){
	check_fname();
	buttonState();
  });

  $("#lastname").focusout(function(){
	check_lname();
	buttonState();
  });

  $("#email").focusout(function(){
	validateEmail();        
	buttonState();
  });
	 
  // use focusout event on password
  $("#pass").focusout(function(){
	validatePassword();
	buttonState();
  });


  $("#confpass").focusout(function(){
	check_retype_password();
	buttonState();
  });

  //use focusout event on mobile

   $("#mobile").focusout(function(){
	validateMobile();
	buttonState();
  });

}); 



function check_fname()
  {
	var pattern=/^[a-zA-Z]*$/;
	var fname=$("#firstname").val();
	if(pattern.test(fname) && fname !==''){
	  $("#firstnameMsg").hide();
	  $("#firstname").css("border","3px solid deepskyblue");
	}
	else if(fname === ''){
	   
	  $("#firstnameMsg").html("<p class='text-danger'>Please enter First name</p>");
	  $("#firstnameMsg").hide();
	  $("#firstname").css("border","2px solid red");
	  var error_fname=true; 
	}
	else{
	  $("#firstnameMsg").html("<p class='text-danger'>Should contain only characters</p>");
	  $("#firstnameMsg").show();
	  $("#firstname").css("border","2px solid red");
	  var error_fname=true;
	}
  }

  function check_lname()
  {
	var pattern=/^[a-zA-Z]*$/;
	var lname=$("#lastname").val();
	if(pattern.test(lname) && lname !==''){
	  $("#lastnameMsg").hide();
	  $("#lastname").css("border","3px solid deepskyblue");
	}

	else if(lname ===''){
	  $("#lastnameMsg").html("<p class='text-danger'>Enter Last name</p>");
	  $("#lastnameMsg").hide();
	  $("#lastname").css("border","2px solid red");
	  var error_lname=true;
	}
	else{
	  $("#lastnameMsg").html("<p class='text-danger'>Should contain only characters</p>");
	  $("#lastnameMsg").show();
	  $("#lastname").css("border","2px solid red");
	  var error_lname=true;
	}
  }

function validateEmail(){
  // get value of input email
  var email=$("#email").val();
  // use regular expression
   var reg = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
   if(reg.test(email) && email !== ''){
	$("#emailMsg").hide();
	$("#email").css("border","3px solid deepskyblue");
   }
   else if(email === ''){
	$("#emailMsg").html("<p class='text-danger'>Enter email</p>");
	  $("#emailMsg").hide();
	  $("#email").css("border","2px solid red");
	  var error_email=true;
   }
   else{
	$("#emailMsg").html("<p class='text-danger'>Invalid email</p>");
	  $("#emailMsg").show();
	  $("#email").css("border","2px solid red");
	  var error_email=true;
   }

}
function validatePassword(){
	// var fetch_data='';
  //get input password value
  var pass=$("#pass").val();
  var reg=/(?=^.{8,}$)(?=.*\d)(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/
  //use regular expression
  if(reg.test(pass) && pass !== ''){
	$("#passMsg").hide();
	$("#pass").css("border","3px solid deepskyblue");
  }
  else if(pass === ''){
	  $("#passMsg").html("<p class='text-danger'>Enter Password</p>");
	  $("#passMsg").hide();
	  $("#pass").css("border","2px solid red");
	  var error_password=true;
	 // fetch_data="<p class='text-danger'>Enter Password</p>";
	  
  }
  else{
	$("#passMsg").html("<p class='text-danger'>Should contain atleast 1 Uppercase,1 special charcter and number</p>");
	  $("#passMsg").show();
	  $("#pass").css("border","2px solid red");
	  var error_password=true;
	  //fetch_data="<p class='text-danger'>Should contain atleast 1 Uppercase,1 special character and number</p>";
  }

  //return fetch_data;
}

function check_retype_password()
  {
	var password=$("#pass").val();
	var  retype_password=$("#confpass").val();
	if(password !== retype_password)
	{
	  $("#confPassMsg").html("<p class='text-danger'>Passwords did not match</p>");
	  $("#confPassMsg").show();
	  $("#confpass").css("border","2px solid red");
	  var error_repassword=true;
	}

	else if(retype_password === ''){
	  $("#confPassMsg").html("<p class='text-danger'>Enter password</p>");
	  $("#confPassMsg").hide();
	  $("#confpass").css("border","2px solid red");
	  var error_repassword=true;
	}
	else{
	  $("#confPassMsg").hide();
	  $("#confpass").css("border","3px solid deepskyblue");
	}
  }

function validateMobile(){
	 // get value of mobile input
	 var mobile=$("#mobile").val();
  //use regular expression
  var reg=/^(0|[+91]{3})?[7-9][0-9]{9}$/;

  if(reg.test(mobile) && mobile !== '')
  {
	$("#mobileMsg").hide();
	$("#mobile").css("border","3px solid deepskyblue");
  }
  else if(mobile === '')
  {
	$("#mobileMsg").html("<p class='text-danger'>Enter mobile</p>");
	  $("#mobileMsg").hide();
	  $("#mobile").css("border","2px solid red");
	  var error_mobile=true;
  }
  else{
	$("#mobileMsg").html("<p class='text-danger'>Invalid mobile</p>");
	  $("#mobileMsg").show();
	  $("#mobile").css("border","2px solid red");
	  var error_mobile=true;
  }
}
function buttonState(){
  $("input[type=submit]").attr("disabled", "disabled");
  $('input').change(function(){
	  //Validate your form here, example:
	  var validated = false;
	  if(validateEmail() && validatePassword()) validated = true;

	  //If form is validated enable form
	  if(validated) $("input[type=submit]").removeAttr("disabled");                             
});
}
  // if(validateEmail() && validatePassword()){
  //   // if the both email and password are validate
  //   // then button should show visible
  //   $("#btn").removeAttr('disabled');
  // }else{
  //   // if both email and pasword are not validated
  //   // button state should hidden
  //   //$("#btn").attr('disabled',true);
  // }


  /*function for Country,State,City */
  
  function getCountries()
{
	var req= new XMLHttpRequest();
	req.open("GET", "/countries", true);
	req.send();
	req.onreadystatechange=function() 
	{
		
		if (req.readyState==4 && req.status==200)
		{
			var obj = JSON.parse(req.responseText);
			var country= document.getElementById("country");
			for(var i=0; i<obj.length; i++)
				{
				var op=document.createElement("option");
				//op.value=obj[i].countryId;
		
				op.text=obj[i].countryName;
				country.add(op);
				
				}
		}
	}
}

 
/*Function for registration api call*/
function register()
{
  var firstname=document.getElementById("firstname").value;
  var lastname=document.getElementById("lastname").value;
  var pass=document.getElementById("pass").value;
  var confpass=document.getElementById("confpass").value;
  var email=document.getElementById("email").value;
  var mobile=document.getElementById("mobile").value;
  var country=document.getElementById("country").value;

  var req=new XMLHttpRequest();
  req.open("POST", "/register", "true");
  var student={firstname:firstname, lastname:lastname,pass:pass,confpass:confpass,email:email,mobile:mobile,country:country};

  var stujson=JSON.stringify(student);
  
  req.setRequestHeader("Content-type","application/json");
  
  req.send(stujson);
  req.onreadystatechange=function()
  {
	if(req.readyState==4 && req.status==200)
	{
	
		 var data=req.responseText;
		 var jsonResponse = JSON.parse(req.responseText);
   	  if(jsonResponse["msg"]=="Registration Successfull"){
   		//login(jsonResponse);
		  window.location="/login";
		 // redirectRegisterPage();
		 
		 }
	  
	  else{
		  document.getElementById("registerMsg").style.color="red";
		  document.getElementById("registerMsg").innerHTML=jsonResponse["msg"];
		 
	  }
	}
	
  }
}

/*function for login api call*/

function login()
{
  var email=document.getElementById("email").value;
  var password=document.getElementById("password").value;
  var message='';
  var subscribercode='';
  var req=new XMLHttpRequest();
  req.open("POST", "/loginCheck", "true");
  var student={email:email,password:password};

  var stujson=JSON.stringify(student);
  
  req.setRequestHeader("Content-type","application/json");
  
  req.send(stujson);
  req.onreadystatechange=function()
  {
	if(req.readyState==4 && req.status==200)
	{
		alert(req.responseText);
		var jsonResponse=req.responseText;
		var obj= JSON.parse(req.responseText);
		
		for(x in obj){
			if(x == "msg")
				{
				message=obj[x];
				//alert("message is "+x);
				//alert("message variable value is "+message);
				}
			else{
				subscribercode=obj[x];
				//alert("Code is"+x);
				//alert("subscriber code value is "+subscribercode);
			}
			
		}
		if(message == "valid credentials")
			{
			 sessionStorage.setItem('subs',subscribercode);
			 sessionStorage.setItem('emailId',email);
			 window.location="/userprofilePage";
			}
		
		else{
			
			document.getElementById("loginMsg").style.color="red";
			document.getElementById("loginMsg").innerHTML=message;
		}
		
	}
  }
}

function forgotPasword()
{
	  var email=document.getElementById("email").value;
	  var req=new XMLHttpRequest();
	  req.open("POST", "/forgotPass", "true");
	  var forgotPwd={email:email};

	  var stujson=JSON.stringify(forgotPwd);
	  alert(stujson);
	  req.setRequestHeader("Content-type","application/json");
	  
	  req.send(stujson);
	  req.onreadystatechange=function()
	  {
		if(req.readyState==4 && req.status==200)
		{
			alert(req.responseText);
			var jsonResponse=req.responseText;
			var obj= JSON.parse(req.responseText);
			
   	     }
	  }

}
	  
function redirectRegisterPage()
{
	 window.location="/";
	
}

function forgotPasswordPage()
{
	 window.location="/forgotPwdPage";
}

function updateprofilePage() 
{

	window.location="/updateprofilepage";
}

function profileupdate()
{
	 var code=sessionStorage.getItem('subs');
	 var email=sessionStorage.getItem('emailId');
	
	 var obj = JSON.parse(sessionStorage.obj);
	 
	 
	 for(x in obj){
		 
			if(x == "first_name")
				{
				firstname=obj[x];
				}
			else if(x == "last_name")
				{
				lastname=obj[x];
				}
			else if(x == "email_id")
				{
				emailId=obj[x];
				}
			else if(x == "country")
				{
				country=obj[x];
				}
			else if(x == "contact_no")
				{
				mobile=obj[x];
				}
			else if(x == "password")
				{
				pass=obj[x];
				}
	      }
			document.getElementById("firstname").style.color="red";
			document.getElementById("firstname").value=firstname;
			
			document.getElementById("lastname").style.color="red";
			document.getElementById("lastname").value=lastname;
			
			document.getElementById("email").style.color="red";
			document.getElementById("email").value=emailId;
			
			document.getElementById("country").style.color="red";
			document.getElementById("country").value=country;
			
			document.getElementById("mobile").style.color="red";
			document.getElementById("mobile").value=mobile;
			
			document.getElementById("pincode").style.color="red";
			document.getElementById("pincode").value=pass;
	
			
	
  	
}


function submitUpdateProfile()
{

	 var firstname=document.getElementById("firstname").value;
	 var lastname=document.getElementById("lastname").value;
	 var email=document.getElementById("email").value;
	 var country=document.getElementById("country").value;
	 var mobile=document.getElementById("mobile").value;
	 var pincode=document.getElementById("pincode").value;
	 
	 var req=new XMLHttpRequest();
	 req.open("POST", "/updateprofile", "true");
	 req.setRequestHeader("Content-type","application/json");
	 
	 var student={first_nm:firstname, last_nm:lastname,password:pincode,email:email,mobile_no:mobile,country:country};

	 var stujson=JSON.stringify(student);

	 req.send(stujson);
	 req.onreadystatechange=function()
	  {
		if(req.readyState==4 && req.status==200)
		{
			
			var jsonResponse=req.responseText;
			var obj= JSON.parse(req.responseText);
			for(x in obj)
			{
			 var message=obj[x];
			 
			}
			
			alert(message);
		 }
			
  	   }
			
}
function saPage()
{

	window.location="/sapage"
}

function userprofilePage()
{
  window.location="/userprofilePage"	
}

function customerProfile()
{
	 var firstname='';
	 var lastname='';
	 var emailId='';
	 var country='';
	 var state='';
	 var city='';
	 var code=sessionStorage.getItem('subs');
	 var email=sessionStorage.getItem('emailId');
	
	 var req=new XMLHttpRequest();
	 req.open("GET", "/customerprofile?email="+email, "true");
	 
	 req.setRequestHeader("Content-type","application/json");
	  
	  req.send();
	  req.onreadystatechange=function()
	  {
		if(req.readyState==4 && req.status==200)
		{
			
			var jsonResponse=req.responseText;
			var obj= JSON.parse(req.responseText);
			
			for(x in obj){
				if(x == "first_name")
					{
					firstname=obj[x];
					}
				else if(x == "last_name")
					{
					lastname=obj[x];
					}
				else if(x == "email_id")
					{
					emailId=obj[x];
					}
				else if(x == "country")
					{
					country=obj[x];
					}
				else if(x == "state")
					{
					state=obj[x];
					}
				else if(x == "city")
					{
					city=obj[x];
					}
			    }
			document.getElementById("firstname").style.color="blue";
			document.getElementById("firstname").innerHTML=firstname;
			
			document.getElementById("lastname").style.color="blue";
			document.getElementById("lastname").innerHTML=lastname;
			
			document.getElementById("email").style.color="blue";
			document.getElementById("email").innerHTML=emailId;
			
			document.getElementById("country").style.color="blue";
			document.getElementById("country").innerHTML=country;
			
			document.getElementById("state").style.color="blue";
			document.getElementById("state").innerHTML=state;
			
			document.getElementById("city").style.color="blue";
			document.getElementById("city").innerHTML=city;
			
			sessionStorage.obj = JSON.stringify(obj);
			
  	     }
	  }
  }

function reset(){
    var resetButton = document.getElementById("comment");
        if(resetButton){
        resetButton.value= "";
        }
    }

function planUsagePage()
{
	window.location="/planUsagePage"; 	
}
function planUsage()
{
	document.getElementById("plan_id").style.color="blue";
	document.getElementById("plan_id").innerHTML="Plan 101";
	
	document.getElementById("plan_desc").style.color="blue";
	document.getElementById("plan_desc").innerHTML="Free Trial";
	
	document.getElementById("plan_value").style.color="blue";
	document.getElementById("plan_value").innerHTML="Free";
	
	document.getElementById("plan_validity").style.color="blue";
	document.getElementById("plan_validity").innerHTML="1 Month";
	
	document.getElementById("plan_start_date").style.color="blue";
	document.getElementById("plan_start_date").innerHTML="03 Jul 2020";
	
	document.getElementById("plan_end_date").style.color="blue";
	document.getElementById("plan_end_date").innerHTML="02 August 2020";
	
	document.getElementById("used_queries_count").style.color="blue";
	document.getElementById("used_queries_count").innerHTML="5";
	
	document.getElementById("leftover_queries_count").style.color="blue";
	document.getElementById("leftover_queries_count").innerHTML="95";
}