import nodemailer from "nodemailer"
import { MailAdapter, SendMailData } from "../mail-adapter";

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "5cdd7c72676dc1",
      pass: "c783033dd687c4"
    }
})

export class NodemailerMailAdapter implements MailAdapter {
    async sendMail({ subject, body }: SendMailData) {
        await transport.sendMail({
            from: 'Equipe Feedget <oi@feedget.com>',
            to: 'Felipe Macci <felipemacci@gmail.com>',
            subject,
            html: body
        })
    }
}