import { spawnSync } from 'node:child_process';
import { accessSync, constants } from 'node:fs';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('../', import.meta.url));
const cli = fileURLToPath(new URL('../node_modules/vinext/dist/cli.js', import.meta.url));
const result = spawnSync(process.execPath, [cli, 'build'], {
  cwd: root,
  env: { ...process.env, PORTFOLIO_DEPLOY_TARGET: 'vercel' },
  stdio: 'inherit',
});

if (result.error) throw result.error;
if (result.status !== 0) process.exit(result.status ?? 1);

// Refuse to publish a partial build without the page and its public assets.
for (const asset of ['index.html', 'og.png', 'favicon.svg']) {
  accessSync(new URL(`../dist/client/${asset}`, import.meta.url), constants.R_OK);
}
console.log('Vercel static build ready in dist/client.');
