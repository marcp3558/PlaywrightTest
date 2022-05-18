const { test, expect } = require('@playwright/test');
const { TextInputPage } = require('../pages/TextInputPage');

test.describe.serial('Text Input Page', () => {
    let page, textInputPage;

    test.beforeAll(async ({browser}) => {
        page = await browser.newPage();
        textInputPage = new TextInputPage(page);
    });

    test.afterAll(async () => {
        await page.close();
    });

    test('The page should load', async ({}) => {
        await textInputPage.navigate();
        await expect(textInputPage.NewButtonName).toBeVisible();
        await expect(textInputPage.UpdatingButton).toBeVisible();
        await expect(textInputPage.UpdatingButton).toContainText('Button That Should Change it\'s Name Based on Input Value');
    });

    test('The button text should update to a new value', async ({}) => {
        let str = 'Test123';
        await textInputPage.updateButtonName(str);
        await expect(textInputPage.UpdatingButton).toContainText(str);
    });
});