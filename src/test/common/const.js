export const fields = {
    //SB header with not logged user
    loginButton: {
        name: 'loginButton',
        cssSelector: '.account-tab__text.-login',
    },
    registerButton: {
        name: 'registerButton',
        cssSelector: '#joinLink',
    },
    //SB header with logged user
    depositButton: {
        name: 'depositButton',
        cssSelector: '#depositHeaderButtonLink',
    },
    balanceButton: {
        name: 'balanceButton',
        cssSelector: '.account-tab__text.-account',
    },
    //login part
    usernameInput: {
        name: 'usernameInput',
        cssSelector: '#loginUsernameInput',
    },
    passwordInput: {
        name: 'passwordInput',
        cssSelector: '#loginPasswordInput',
    },
    loginSubmitButton: {
        name: 'loginSubmitButton',
        cssSelector: '#loginButton',
    },
    //account menu part
    menuDepositButton: {
        name: 'menuDepositButton',
        cssSelector: '#depositLink',
    },
    menuWithdrawButton: {
        name: 'menuWithdrawButton',
        cssSelector: '#withdrawLink',
    },
    menuPrefButton: {
        name: 'menuPreferencesButton',
        cssSelector: '#preferencesLink',
    },
    menuGCButton: {
        name: 'menuGamblingControlsButton',
        cssSelector: '#gcHubLink',
    },
    logoutButton: {
        name: 'logoutButton',
        cssSelector: '#logoutLink',
    },
    //deposit part
    depositIframe: {
        cssSelector: '.mfp-iframe',
    },
    depositMethodButton: {
        name: 'depositMethodButton',
        cssSelector: '#paymentGROUP_DEBITCARD_CC',
    },
    //withdraw
    withdrawAmount: {
        name: 'withdrawAmount',
        cssSelector: '#txnAmount',
    },
    //preferences
    updateMarketing: {
        name: 'updateMarketingButton',
        cssSelector: '#updateMarketingDetails',
    },
    //gambling controls
    GCContent: {
        name: 'gamblingControlsContent',
        cssSelector: '.content.landing',
    },
    //registration
    registerIframe: {
        cssSelector: '#cp-reg-modal-iframe',
    },
    regFirstName: {
        name: 'regFirstName',
        cssSelector: '#reg-firstName',
    },
};
