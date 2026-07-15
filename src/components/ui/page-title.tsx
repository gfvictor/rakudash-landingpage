'use client'

import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'

export function PageTitle({ pageKey }: { pageKey: string }) {
  const { t, i18n } = useTranslation()

  useEffect(() => {
    if (i18n.isInitialized) {
      document.title = `OpenScope | ${t(pageKey)}`
    }
  }, [t, i18n.isInitialized, pageKey])

  return null
}
