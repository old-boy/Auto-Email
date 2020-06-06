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

let optionEmail = {
    from: '340276673@qq.com', // 邮件发送地址
    to: 'don-pan.cwf@163.com', // 邮件接收地址
    subject: '邮件测试', // 邮件主题 
    html: '<b>Hello world?</b>' // 发送text或者html格式
}

configEmail.sendMail(optionEmail, (error,info) => {
    if (error) {
        return console.log(error);
    }else{
        console.log('Message sent: %s', info.messageId);
    }
})
