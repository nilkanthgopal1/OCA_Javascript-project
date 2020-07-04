package com.example.Registration;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;


@Controller
public class Homecontroller {
	
	@Autowired
	private StudentRepo repo;
	
	@RequestMapping("/")
	public String registration()
	{
		System.out.println("In registration page API");
		return "registration";
	}

	@RequestMapping("/login")
	public String login()
	{
		System.out.println("In login API");
		return "login";
	}
	
	/*@RequestMapping("/userprofile")
	public String dashboard()
	{
		System.out.println("In dashboard API");
		return "userprofile";
	}	*/
	
	@RequestMapping("/forgotPwdPage")
	public String forgotPwdPage()
	{
		System.out.println("In forgotPwdPage API");
		return "forgotPassword";
	}	
	
	@RequestMapping("/updateprofilepage")
	public String updateprofilepage()
	{
		System.out.println("In updateprofilepage API");
		return "updateprofilepage";
	}	
	
	@RequestMapping("/sapage")
	public String sapage()
	{
		System.out.println("In sapage API");
		return "sapage";
	}	
	
	@RequestMapping("/userprofilePage")
	public String userprofilePage()
	{
		System.out.println("In userprofilePage API");
		return "userprofile";
	}	
	
	@RequestMapping("/planUsagePage")
	public String planUsagePage()
	{
		System.out.println("In planUsagePage API");
		return "planUsage";
	}
	
	@PostMapping("/register")
	@ResponseBody
	public String register(@RequestBody Student stu)
	{
		System.out.println(stu.getFirstname());
		System.out.println(stu.getLastname());
		repo.save(stu);
		return "{\"msg\":\"Registration Successfull\"}";
	}
	
	@PostMapping("/loginCheck")
	@ResponseBody
	public String loginPage(@RequestBody Student stu)
	{
		System.out.println("In loginCheck");
		System.out.println(stu.getEmail());
		String email=stu.getEmail();
		String pwd=stu.getPass();
		if(repo.findByEmail(email).equals(null)){
			System.out.println("In if cond");
			return "{\"msg\":\"Invalid Credentials\"}";
		}
		else{
			System.out.println("In else cond");
			return "{\"msg\":\"valid credentials\",\"subscriber_code\":\"uytrsdfgiogfd\"}";
		}
		
	}
	
	
	
	@PostMapping("/posresult")
	@ResponseBody
	public String dashBoardMsg(@RequestBody String review)
	{
		System.out.println("In dashBoardMsg");
		System.out.println(review);
		
		
		return"{\"data\":\"Positive Comment\"}";
	}
	
	@GetMapping("/customerprofile")
	@ResponseBody
	public String customerprofile(@RequestParam(value="email") String email)
	{
		//String mail=email;
		System.out.println("In customerprofile API");
		System.out.println(email);
		
		
		return"{\"city\": \"Pune\",\"contact_no\": 9980987654,\"country\":\"India\",\"cust_id\": 120,\"email_id\":\"varsha.kumari@hoonartek.com\",\"first_name\": \"varsha\", \"is_active\": 1,\"isd_code\": \"91\",\"last_name\": \"kumari\",\"leftover_queries_count\": 998,\"max_queries_count\": 1000,\"old_password\": null,\"password\": \"Test1234\",\"pincode\": \"411028\",\"plan_end_date\": \"07/30/20\",\"plan_id\": -99,\"plan_start_date\": \"06/30/20\",\"state\": \"MH\",\"subscriber_code\": \"990C694725707103813E37096B69322542B9C9A8B665142F298563D4\",\"todays_login_attempt\": 0,\"update_dttm\": \"07/01/20\",\"used_queries_count\": 2,\"wrong_login_attempt\": 0}";
	}
	
	@PostMapping("/updateprofile")
	@ResponseBody
	public String profileupdate(@RequestBody Student stu)
	{
		//Student stu=repo.findByEmail(email);
		String first_name=stu.getFirstname();
		String last_name=stu.getLastname();
		String email_id=stu.getEmail();
		String country=stu.getCountry();
		long mobile=stu.getMobile();
		String pass=stu.getPass();
		return "{\"msg\": \"record updated\"}";
	}
}
