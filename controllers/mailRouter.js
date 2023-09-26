import {request, response} from 'express'
import nodemailer from "nodemailer"

export const sendEmail =  async (req = request,res=response) =>{

const {name,email,message,phone} = req.body

if (!name || !email || !message ||!phone) return res.status(400).status({msg: "campos vacios"})

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
  port: 587,
  tls: {
		rejectUnauthorized: false,
	},
  auth: {
    user: "serviceemailprovider@gmail.com",
    pass: "vplj mnhb gtvp kgyv",
  },
})
const template = `
	<h1>Has recibido un nuevo mensaje</h1>
	<hr />
	<p>De: ${name}</p>
	<p>Email del interesado: ${email}</p>
  <p>Teléfono del interesado: ${phone}</p>
	<p>Mensaje: ${message}</p>
	<hr />
    `

try {
  console.log("hashkjhbnkn");
     await transporter.sendMail({
    from: email, // sender address
    to: "davfer070900@gmail.com", // list of receivers
    subject: "Email de cliente", // Subject line
    html: template, // html body
  });
  return res.status(200).json({msg:"mensaje enviado"})
} catch (error) {
    return res.status(400).json({ msg: error.message })
}

}