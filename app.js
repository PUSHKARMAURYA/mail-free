
var nodemailer = require("nodemailer");
function mail(service,user,password,reciever,subject,text){

console.log("reached here");	
	var smtpTransport = nodemailer.createTransport({
        service: 'Gmail', 
        auth: {
          user: 'pushkarmaurya20052001@gmail.com',
			
          pass: 'pusmau@20052001PM'
        }
      });
	console.log("reached here");
		 var mailOptions = {
      from: 'mail.pushkar2020@gmail.com',
      to:"pushkarmaurya20052001@gmail.com" ,
      subject: ""
    };
     smtpTransport.sendMail(mailOptions, function(error, info) {
      if (error) {
        console.log(error);
      } else {
		  console.log(info);
		console.log('Email sent: ' + info.response);
		  
	
		  
		  
		  
      }
    });
		
		
		
		
		
		

}
	module.exports.mail=mail;