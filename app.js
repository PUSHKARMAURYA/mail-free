
var nodemailer = require("nodemailer");
function mail(service,user,password,reciever,subject,text){


var smtpTransport = nodemailer.createTransport({
        service: service, 
        auth: {
          user:user,
			
          pass: password
        }
      });
	
		 var mailOptions = {
      from: user,
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
		  
		  return;
		  
		  
		  
      }
    });
		
		
		
		

}
	module.exports.mail=mail;