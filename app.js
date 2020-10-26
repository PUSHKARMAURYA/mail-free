
var nodemailer = require("nodemailer");
var smtpTransport;

function login(service,user,password){
		smtpTransport = nodemailer.createTransport({
        service: service, 
        auth: {
          user: user,
			
          pass: password
        }
      });
return;
	
	
}




function mail(reciever,subject,text){

	

		 var mailOptions = {
     
      to:reciever,
      subject:subject,
			 text:text
    };
     smtpTransport.sendMail(mailOptions, function(error, info) {
      if (error) {
        console.log(error);
      } else {
		  console.log(info);
		console.log('Email sent: ' + info.response);
		  
	
		  
		  
		  
      }
    });
		
		return;
		
		
		
		

}
module.exports.login=login;
	module.exports.mail=mail;