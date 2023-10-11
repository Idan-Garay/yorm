import {test, expect} from '@playwright/test';

test('has title', async ({page})=> {
    await page.goto('http://localhost:3000');
    
    await expect(page).toHaveTitle('Yorm');
})

test('has button', async ({page})=> {
    await page.goto('http://localhost:3000');
    
    await page.getByRole('button', {name: 'Test Playwright'}).click();

    await expect(page.getByLabel('card-content')).toHaveText('An e-commerce platform for the modern web.');
})   