# mail-free

> Send  emails free and easy.

mail-freeis an email package  that let's send emails any number of times and any numbber of pepole.
## Get started


### Install NPM dependency
```
npm install --save mail-free
```
### Include

```javascript
var mail=require('mail-free')
```

### Login  in your account

```javascript
mail.login('Service','Sender mail address','Sender password');
```
### Mail to reciever

```javascript
mail.mail('Reciever mail address','Subject of mail','Body of the mail');
```

## Common use case examples

### Include
```javascript
var mail=require('mail-free')
```
### login
```javascript
mail.login("Gmail","xyz@gmail.com","password@123");
```
### mail
```javascript
mail.mail('reciever@gmail.com',"Hello","How its going");
```

## Service & Permission

### Gmail
```
Use :

    service: 'gmail',

Goto : 

    https://myaccount.google.com/lesssecureapps
    
Enable : 

    Allow less secure apps: ON
    
Goto :
     
     https://accounts.google.com/b/0/DisplayUnlockCaptcha
     
 Enable :
 
    Allow Acess
```
### Yahoo
```Use :

    service: 'yahoo',

Goto : 

    https://login.yahoo.com/account/security

Enable : 

    Allow apps that use less secure sign in
```
