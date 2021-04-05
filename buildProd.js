require('esbuild').buildSync({
  entryPoints: ['src/handler.ts', 'src/anotherHandler.ts', 'src/manageItems.ts'],
  bundle: true,
  write: true,
  minify: true,
  platform: 'node',
  target: ['node12'],
  outdir: 'dist',
})