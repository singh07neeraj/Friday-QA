export const headerFields = {
    //SB header with not logged user
    loginButton: {
        name: 'loginButton',
        cssSel: '.account-tab__text.-login',
    },
    registerButton: {
        name: 'registerButton',
        cssSel: '#joinLink',
    },
    //SB header with logged user
    depositButton: {
        name: 'depositButton',
        cssSel: '#depositHeaderButtonLink',
    },
    balanceButton: {
        name: 'balanceButton',
        cssSel: '.account-tab__text.-account',
    },
    //login part
    usernameInput: {
        name: 'usernameInput',
        cssSel: '#loginUsernameInput',
    },
    passwordInput: {
        name: 'passwordInput',
        cssSel: '#loginPasswordInput',
    },
    loginSubmitButton: {
        name: 'loginSubmitButton',
        cssSel: '#loginButton',
    },
    //account menu part
    menuDepositButton: {
        name: 'menuDepositButton',
        cssSel: '#depositLink',
    },
    menuWithdrawButton: {
        name: 'menuWithdrawButton',
        cssSel: '#withdrawLink',
    },
    menuPrefButton: {
        name: 'menuPreferencesButton',
        cssSel: '#preferencesLink',
    },
    menuGCButton: {
        name: 'menuGamblingControlsButton',
        cssSel: '#gcHubLink',
    },
    logoutButton: {
        name: 'logoutButton',
        cssSel: '#logoutLink',
    },
    //deposit part
    depositIframe: {
        cssSel: '.mfp-iframe',
    },
    accountIframe: {
        cssSel: '.mfp-iframe',
    },
    depositMethodButton: {
        name: 'depositMethodButton',
        cssSel: '#paymentGROUP_DEBITCARD_CC',
    },
    //withdraw
    withdrawAmount: {
        name: 'withdrawAmount',
        cssSel: '#txnAmount',
    },
    //registration
    registerIframe: {
        cssSel: '#cp-reg-modal-iframe',
    },
    regFirstName: {
        name: 'regFirstName',
        cssSel: '#reg-firstName',
    },
};
