
var nodemailer = require("nodemailer");
function mail(){


var smtpTransport = nodemailer.createTransport({
        service: 'Gmail', 
        auth: {
          user: 'complaint.prankcord@gmail.com',
			
          pass: 'prank123@'
        }
      });
	
		 var mailOptions = {
      from: 'mail.pushkar2020@gmail.com',
      to:"pushkarmaurya20052001@gmail.com" ,
      subject:"",
      text:""
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