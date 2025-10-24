#!/usr/bin/env node

/**
 * Optimized build script for Vercel deployment
 * This script ensures clean builds and handles any potential issues
 */

import { execSync } from 'child_process'
import { existsSync, rmSync } from 'fs'
import { join } from 'path'

console.log('🚀 Starting optimized build for Vercel...')

// Clean previous builds
const distDir = join(process.cwd(), 'dist')
if (existsSync(distDir)) {
  console.log('🧹 Cleaning previous build...')
  rmSync(distDir, { recursive: true, force: true })
}

// Clean node_modules cache if it exists
const nodeModulesDir = join(process.cwd(), 'node_modules')
if (existsSync(nodeModulesDir)) {
  console.log('🧹 Cleaning node_modules cache...')
  rmSync(nodeModulesDir, { recursive: true, force: true })
}

try {
  // Install dependencies with optimized settings
  console.log('📦 Installing dependencies...')
  execSync('pnpm install --frozen-lockfile --prefer-offline', { 
    stdio: 'inherit',
    cwd: process.cwd()
  })

  // Run TypeScript compilation
  console.log('🔨 Compiling TypeScript...')
  execSync('pnpm run tsc', { 
    stdio: 'inherit',
    cwd: process.cwd()
  })

  // Build with Vite
  console.log('⚡ Building with Vite...')
  execSync('pnpm run vite build', { 
    stdio: 'inherit',
    cwd: process.cwd()
  })

  console.log('✅ Build completed successfully!')
  console.log('📊 Build artifacts:')
  
  // List build artifacts
  execSync('ls -la dist/', { 
    stdio: 'inherit',
    cwd: process.cwd(),
    shell: true
  })

} catch (error) {
  console.error('❌ Build failed:', error.message)
  process.exit(1)
}
