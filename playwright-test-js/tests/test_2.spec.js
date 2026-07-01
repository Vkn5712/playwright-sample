const { test } = require('../lambdatest-setup')
const { expect } = require('@playwright/test')

test.describe('Browse LambdaTest in different search engines', () => {
  test('Open LambdaTest Blog', async ({ page }) => {
    await page.goto('https://www.lambdatest.com/blog/', { waitUntil: 'domcontentloaded' })
    await expect(page).toHaveTitle(/LambdaTest/i)

    console.log('Page title:: ', await page.title())
  })
})
