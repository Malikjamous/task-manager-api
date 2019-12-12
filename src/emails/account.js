const sgMail = require('@sendgrid/mail');

// const sendGridAPIKey = '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';

sgMail.setApiKey(process.env.SENDGRIDAPIKEY);


const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'malik.aljamous@bevelop.de',
        subject: 'this is my first Creation i had send it',
        text: `big thank to you men,${name}.hello`
    });
}

const sendCancelcations = (email, name) => {
    sgMail.send({
        to: email,
        from: 'malik.aljamous@bevelop.de',
        subject: 'this is my first email',
        text: `hello from this Func sendCancelcations().and from this name ${name}`
    })
}


module.exports = {
    sendWelcomeEmail,
    sendCancelcations
}


