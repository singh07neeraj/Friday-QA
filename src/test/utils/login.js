import header from "../page_objects/page/Header";

export const logIntoSportsbook = (login, password) => {
    header.loginButton.waitForElement();
    header.loginButton.click();
    header.usernameInput.waitForElement();
    header.usernameInput.inputValue = login;
    header.passwordInput.inputValue = password;
    header.loginSubmitButton.click();
    header.balanceButton.waitForElement();
    browser.waitUntil(function () {
        return header.balanceButton.text.length > 1
    }, 10000, 'expected text to be visible after 10s');
};