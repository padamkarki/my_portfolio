/** @type {import('next').NextConfig} */

const isGithubActions = process.env.GITHUB_ACTIONS || false

let assetPrefix = undefined
let basePath = undefined

if (isGithubActions) {
  const repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, '')

  assetPrefix = `/${repo}/`
  basePath = `/${repo}`
}

module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["img.youtube.com"],
  },
  assetPrefix: assetPrefix,
  basePath: basePath
}