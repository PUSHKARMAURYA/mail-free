# mail-free

[![Rate on Openbase](https://badges.openbase.io/js/rating/mail-free.svg)](https://openbase.io/js/mail-free?utm_source=embedded&utm_medium=badge&utm_campaign=rate-badge)

> Send  emails free and easy.

mail-free is an email package  that let's send emails any number of times and any numbber of pepole.
## Get started


### Install NPM dependency
```javascript
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
### Response
```javascript
Email sent: 250 2.0.0 OK  1603766622 s8sm100565pjn.46 - gsmtp
{ accepted: [ 'xyz@gmail.com' ],
  rejected: [],
  envelopeTime: 766,
  messageTime: 1459,
  messageSize: 251,
  response: '250 2.0.0 OK  1603766623 kk14sm95620pjb.47 - gsmtp',
  envelope: { from: 'sender@gmail.com', to: [ 'xyz@gmail.com' ] },
  messageId: '<e6914739-021e-9522-c39a-05df5fccef82@goorm>' }
Email sent: 250 2.0.0 OK  1603766623 kk14sm95620pjb.47 - gsmtp ^C
```

## Service & Permission for Errors

### Gmail
```
Use :

    service: 'Gmail',

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

    service: 'Yahoo',

Goto : 

    https://login.yahoo.com/account/security

Enable : 

    Allow apps that use less secure sign in
```
# Contribution

Very much appreciate any types of donation and support. 

## Code

`mail-free` follows github convention for contributions. Here are some steps:

1. Fork the repo to your github account
2. Checkout code from your github repo to your local machine.
3. Make code changes and don't forget add related tests.
4. Run `npm test` locally before pushing code back.
5. Create a [Pull Request](https://help.github.com/articles/creating-a-pull-request/) on github.
6. Code review and merge
7. Changes will be published to NPM within next version.

