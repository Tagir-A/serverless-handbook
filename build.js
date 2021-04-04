require('esbuild').buildSync({
  entryPoints: ['src/handler.ts', 'src/anotherHandler.ts'],
  bundle: true,
  write: true,
  platform: 'node',
  target: ['node12'],
  outdir: 'dist',
})