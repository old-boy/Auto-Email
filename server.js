const nodemailer = require('nodemailer')

let configEmail = nodemailer.createTransport({
    service: 'qq',
    port: 465, // SMTP 端口
    secureConnection: true, // 使用了 SSL
    auth: {
        user: '340276673@qq.com',
        // 是你设置的smtp授权码
        pass: 'solyxbbhhckubiic',
    }
})

let apmEmail =  `<!doctype html>
<html ⚡4email>
  <head>
    <meta charset="utf-8">
    <style amp4email-boilerplate>body{visibility:hidden}</style>
    <script async src="https://cdn.ampproject.org/v0.js"></script>
    <script async custom-element="amp-anim" src="https://cdn.ampproject.org/v0/amp-anim-0.1.js"></script>
  </head>
  <body>
    <p>Image: <amp-img src="https://cldup.com/P0b1bUmEet.png" width="16" height="16"/></p>
    <p>GIF (requires "amp-anim" script in header):<br/>
      <amp-anim src="https://cldup.com/D72zpdwI-i.gif" width="500" height="350"/></p>
  </body>
</html>`

let optionEmail = {
    from: '340276673@qq.com', // 邮件发送地址
    to: 'don-pan.cwf@163.com', // 邮件接收地址
    subject: '邮件测试', // 邮件主题 
    html: '<b>Hello 这是一份 AMP 文件</b>', // 发送text或者html格式
    apm: apmEmail
}

configEmail.sendMail(optionEmail, (error,info) => {
    if (error) {
        return console.log(error);
    }else{
        console.log('Message sent: %s', info.messageId);
    }
})
