'use client'

import { Navbar, Footer, NeuralNetworkBackground, PrivacyModal } from '@/ui'
import { sendContactEmail } from '@/components/actions/send-email'
import { useTranslation, Trans } from 'react-i18next'
import { useState } from 'react'

export default function ContactPage() {
  const { t } = useTranslation()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [isPrivacyModalOpen, setIsPrivacyModalOpen] = useState(false)
  const [isFormValid, setIsFormValid] = useState(false)
  
  const [formData, setFormData] = useState({
    companyName: '',
    personInCharge: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    privacyConsent: false
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target
    const checked = (e.target as HTMLInputElement).checked
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  const handleFormChange = (e: React.FormEvent<HTMLFormElement>) => {
    setIsFormValid(e.currentTarget.checkValidity())
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    const formData = new FormData(e.currentTarget)
    const result = await sendContactEmail(formData)
    
    setIsSubmitting(false)
    
    if (result.success) {
      setSubmitted(true)
    } else {
      alert(t('contact_page.error_message', 'Ocorreu um erro ao enviar sua mensagem. Tente novamente.'))
    }
  }

  return (
    <>
      <Navbar />
      <main className="bg-background text-foreground flex min-h-screen flex-col items-center">
        <section className="relative flex min-h-screen w-full flex-col items-center justify-start overflow-hidden pt-12 pb-24">
          <div className="from-primary/[0.02] dark:from-primary/5 pointer-events-none absolute inset-0 z-0 bg-gradient-to-b via-transparent to-transparent"></div>
          <div className="bg-primary/[0.02] dark:bg-primary/5 pointer-events-none absolute top-1/4 -left-20 z-0 h-96 w-96 rounded-full blur-[100px]"></div>
          <div className="bg-primary/[0.02] dark:bg-primary/5 pointer-events-none absolute -right-20 bottom-1/4 z-0 h-96 w-96 rounded-full blur-[100px]"></div>
          <NeuralNetworkBackground />

          <div className="container mx-auto mt-8 px-6 relative z-10 max-w-4xl">
            <div className="text-center mb-12 flex flex-col items-center">
              <h1 className="text-foreground z-10 mb-12 text-4xl font-bold tracking-tight md:text-6xl">
                {t('contact_page.title')}
              </h1>
              <p className="text-muted-foreground z-10 max-w-2xl font-medium whitespace-pre-line text-xl">
                {t('contact_page.subtitle')}
              </p>
            </div>

            <div className="bg-card border border-border/50 rounded-2xl p-8 md:p-12 shadow-xl backdrop-blur-sm">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="bg-primary/10 text-primary w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{t('contact_page.success_title')}</h3>
                  <p className="text-muted-foreground">{t('contact_page.success_message')}</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} onChange={handleFormChange} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="companyName" className="text-sm uppercase font-medium">
                        {t('contact_page.fields.company')} <span className="text-red-500">*</span>
                      </label>
                      <input 
                        type="text" 
                        id="companyName" 
                        name="companyName"
                        value={formData.companyName}
                        onChange={handleInputChange}
                        required
                        className="w-full mt-2 bg-background border border-border rounded-2xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-colors" 
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="personInCharge" className="text-sm uppercase font-medium">
                        {t('contact_page.fields.person')} <span className="text-red-500">*</span>
                      </label>
                      <input 
                        type="text" 
                        id="personInCharge" 
                        name="personInCharge"
                        value={formData.personInCharge}
                        onChange={handleInputChange}
                        required
                        className="w-full mt-2 bg-background border border-border rounded-2xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-colors" 
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm uppercase font-medium">
                        {t('contact_page.fields.email')} <span className="text-red-500">*</span>
                      </label>
                      <input 
                        type="email" 
                        id="email" 
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full mt-2 bg-background border border-border rounded-2xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-colors" 
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-sm uppercase font-medium">
                        {t('contact_page.fields.phone')} <span className="text-red-500">*</span>
                      </label>
                      <input 
                        type="tel" 
                        id="phone" 
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        pattern="[0-9\-\+\s\(\)]*"
                        title={t('contact_page.fields.phone_title')}
                        className="w-full mt-2 bg-background border border-border rounded-2xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-colors" 
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm uppercase font-medium">
                      {t('contact_page.fields.subject')} <span className="text-red-500">*</span>
                    </label>
                    <input 
                      type="text" 
                      id="subject" 
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full mt-2 bg-background border border-border rounded-2xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-colors" 
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm uppercase font-medium">
                      {t('contact_page.fields.message')} <span className="text-red-500">*</span>
                    </label>
                    <textarea 
                      id="message" 
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={5}
                      required
                      className="w-full mt-2 bg-background border border-border rounded-2xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-colors resize-none" 
                    ></textarea>
                  </div>
                  
                  <div className="pt-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-border/50">
                    <div className="flex items-start gap-3 max-w-sm text-left mt-2">
                      <input 
                        type="checkbox" 
                        id="privacy-consent" 
                        name="privacyConsent"
                        checked={formData.privacyConsent}
                        onChange={handleInputChange}
                        required 
                        className="mt-1 w-4 h-4 rounded border-border bg-background focus:ring-primary/50 text-primary transition-colors cursor-pointer"
                      />
                      <label htmlFor="privacy-consent" className="text-xs text-muted-foreground cursor-pointer">
                        <Trans
                          i18nKey="contact_page.privacy_notice"
                          components={{
                            1: (
                              <button 
                                type="button"
                                onClick={(e) => {
                                  e.preventDefault()
                                  setIsPrivacyModalOpen(true)
                                }}
                                className="text-primary hover:underline font-medium focus:outline-none focus:ring-2 focus:ring-primary/50 rounded"
                              />
                            ),
                          }}
                        />
                      </label>
                    </div>
                    <button 
                      type="submit" 
                      disabled={isSubmitting || !isFormValid}
                      className="w-full sm:w-auto bg-primary text-primary-foreground px-8 py-3 rounded-xl font-bold shadow-xl transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                    >
                      {isSubmitting ? t('contact_page.sending') : t('contact_page.submit')}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <PrivacyModal 
        isOpen={isPrivacyModalOpen} 
        onClose={() => setIsPrivacyModalOpen(false)} 
      />
    </>
  )
}
