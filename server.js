const nodemailer = require('nodemailer')
const path = require('path')
const fs = require('fs')
const ejs = require('ejs')


let configEmail = nodemailer.createTransport({
    service: 'qq',
    port: 465, // SMTP 端口
    secureConnection: true, // 使用了 SSL
    auth: {
        user: '340276673@qq.com',
        // 是你设置的smtp授权码
        pass: 'solyxbbhhckubiic',
    }
});

//接收地址
let recipientPerson = ['don-pan.cwf@163.com','2853163150@qq.com']


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

let imgAttachments = [
    {
        filename:'web-dashboard-events-V03.jpg',
        path: 'D:/Code/vue/vue-email/Auto-Email/img/web-dashboard-events-V03.jpg'
    },
    {
        filename:'web-dashboard.jpg',
        path: 'D:/Code/vue/vue-email/Auto-Email/img/web-dashboard.jpg' //从绝对地址中获取图片
    },
    {
        filename: 'web-login.jpg',
        path: path.resolve(__dirname, './img/web-login.jpg'), //从相对目录中获取图片
    }
]

// EDM


// 二进制附件
let icalEventContent = 'BEGIN:VCALENDAR\r\nPRODID:-//ACME/DesktopCalendar//EN\r\nMETHOD:REQUEST\r\n...';
let icalEvent = {
    filename: 'invitation.ics',
    method: 'request',
    content: icalEventContent
}

let optionEmail = {
    from: '340276673@qq.com', // 发送地址
    to: recipientPerson, // 接收地址
    cc: 'kevin.chen@anviz.com', //抄送
    subject: '邮件测试', // 邮件主题 
    // alternatives: imgAttachments,
    html:  fs.createReadStream(path.resolve(__dirname, './email/c.html'))
}

configEmail.sendMail(optionEmail, (error,info) => {
    if (error) {
        return console.log(error);
    }else{
        console.log('Message sent: %s', info.messageId);
    }
})
