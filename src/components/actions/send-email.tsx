'use server'

import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function sendContactEmail(formData: FormData) {
  try {
    const data = {
      companyName: formData.get('companyName'),
      personInCharge: formData.get('personInCharge'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      subject: formData.get('subject'),
      message: formData.get('message'),
    }

    const destinationEmail = 'contact@openscope-systems.com'

    const { data: resendData, error } = await resend.emails.send({
      from: 'Rakudash Contact <onboarding@resend.dev>',
      to: [destinationEmail],
      subject: `[Rakudash LP] Novo Contato: ${data.subject}`,
      html: `
        <h2>Novo Contato via Landing Page - Rakudash</h2>
        <p><strong>Empresa:</strong> ${data.companyName}</p>
        <p><strong>Pessoa Responsável:</strong> ${data.personInCharge}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Telefone:</strong> ${data.phone}</p>
        <br />
        <p><strong>Assunto:</strong> ${data.subject}</p>
        <p><strong>Mensagem:</strong></p>
        <p style="white-space: pre-wrap; background: #f4f4f4; padding: 12px; border-radius: 8px;">${data.message}</p>
      `,
    })

    if (error) {
      console.error('Resend error:', error)
      return { success: false, error: 'Failed to send e-mail' }
    }

    return { success: true }
  } catch (error) {
    console.error('Server Action Error:', error)
    return { success: false, error: 'An unexpected error has occurred' }
  }
}
