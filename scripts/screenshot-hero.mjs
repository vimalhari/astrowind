import { chromium } from 'playwright';

const url = process.env.TARGET_URL ?? 'http://localhost:4321/';
const outputPath = process.env.OUTPUT_PATH ?? 'artifacts/hero.png';

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });

try {
  await page.goto(url, { waitUntil: 'networkidle' });

  const hero = page.locator('#hero');
  await hero.waitFor({ state: 'visible', timeout: 30_000 });

  const heroVideo = hero.locator('video');
  if (await heroVideo.count()) {
    await page.waitForFunction(
      () => {
        const el = document.querySelector('#hero video');
        return Boolean(el && el.readyState >= 2);
      },
      { timeout: 30_000 }
    );
  }

  await hero.screenshot({ path: outputPath });

  console.log(`Saved hero screenshot to ${outputPath}`);
} finally {
  await page.close();
  await browser.close();
}
