class TextInputPage {
    let 

    get NewButtonName() {
        return this.page.locator('#newButtonName');
    }

    get UpdatingButton() {
        return this.page.locator('#updatingButton');
    }

    constructor(page) {
        this.page = page;
    }

    async navigate() {
        await this.page.goto('/textinput');
    }

    async updateButtonName(newButtonText) {
        await this.NewButtonName.fill(newButtonText);
        await this.UpdatingButton.click();
    }
}

module.exports = { TextInputPage };