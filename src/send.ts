import nodemailer from 'nodemailer'

export type Mail = {
    from: string
    to?: string[]
    cc?: string[]
    bcc?: string[]
    subject: string
    text?: string
}

export async function send(params: {
    transport: nodemailer.Transporter
    mail: Mail
}): Promise<void> {
    const { mail, transport } = params
  
    await transport.sendMail(mail)
  
    transport.close()
}
