import type { NextConfig } from 'next';

const nextConfig: NextConfig =
  process.env.PORTFOLIO_DEPLOY_TARGET === 'vercel'
    ? { output: 'export' }
    : {};

export default nextConfig;
