import { notFound } from 'next/navigation'
import { getRequestConfig } from 'next-intl/server'
import { type Locale, routing } from '@/i18n'

export default getRequestConfig(async ({ requestLocale }) => {
  const locale = await requestLocale

  if (!locale || !routing.locales.includes(locale as Locale)) {
    notFound()
  }

  return {
    locale,
    messages: (await import(`../locales/${locale}.json`)).default,
  }
})
