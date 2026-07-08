import type { NextConfig } from 'next'
import createNextIntlPlugin from 'next-intl/plugin'

const withNextIntl = createNextIntlPlugin('./src/packages/i18n/src/request.ts')

const nextConfig: NextConfig = {
  allowedDevOrigins: ['192.168.11.7'],
}

export default withNextIntl(nextConfig)
