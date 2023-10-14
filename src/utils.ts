import nodemailer from 'nodemailer'

const userEnv = process.env.FAKESMTP_AUTHENTICATION_USERNAME ?? ''
const passwordEnv = process.env.FAKESMTP_AUTHENTICATION_PASSWORD ?? ''
const fakeSmtpPortEnv = Number(process.env.FAKESMTP_PORT) ?? 25

export function mockMailClient(): nodemailer.Transporter {
  const mailStorageConfig = {
    host: 'localhost',
    port: fakeSmtpPortEnv,
    secure: false,
    auth: { user: userEnv, pass: passwordEnv },
  }

  return nodemailer.createTransport(mailStorageConfig)
}
