#!/usr/bin/env node
// One-time migration: copies spell.yaml and tooltip images from Blue-Academy.
// Run from the Blue-Mage-Data repo root: node scripts/migrate.mjs <path-to-Blue-Academy>
import { copyFileSync, readdirSync, mkdirSync, existsSync } from 'fs'
import { join } from 'path'

const blueAcademy = process.argv[2]
if (!blueAcademy) {
  console.error('Usage: node scripts/migrate.mjs <path-to-Blue-Academy>')
  process.exit(1)
}

copyFileSync(join(blueAcademy, 'data/spell.yaml'), 'spell.yaml')
console.log('Copied spell.yaml')

if (!existsSync('images')) mkdirSync('images')
const src = join(blueAcademy, 'assets/images/tooltips')
let count = 0
for (const file of readdirSync(src)) {
  if (file.endsWith('.png')) {
    copyFileSync(join(src, file), join('images', file))
    count++
  }
}
console.log(`Copied ${count} images`)
