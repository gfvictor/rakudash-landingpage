import type { NextConfig } from 'next'
import createNextIntlPlugin from 'next-intl/plugin'

const withNextIntl = createNextIntlPlugin('./src/packages/i18n/src/request.ts')

const nextConfig: NextConfig = {/* config options here */}

export default withNextIntl(nextConfig)
