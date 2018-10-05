export const testDesc = {
    suiteE2E: 'E2E',
    suiteVRT: 'VRT',
    acceptance: (story = 'add user story!') => (
        description = 'add description!',
        criterion = 'QA',
    ) => `${story}.${criterion} ${description}`,
};

export const asserMsg = {
    notVisible: 'is not visible',
    isVisible: 'is still visible, but shouldn\'t be',
    hasNoText: 'has no text or text is and empty string',
    wrongTranslation: 'translation is wrong',
};
