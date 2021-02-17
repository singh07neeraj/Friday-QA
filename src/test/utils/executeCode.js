export const executeClick = (element) => {
  const clickInBrowser = (elem) => elem.click();

  browser.execute(clickInBrowser, element);
};

export const disableOnboarding = () => {
  const openRequest = indexedDB.open('OnboardingGuide', 2);
  openRequest.onupgradeneeded = function () {
    const db = openRequest.result;
    db.createObjectStore('keyvaluepairs');
  };
  openRequest.onsuccess = function () {
    const res = openRequest.result;
    res.transaction('keyvaluepairs', 'readwrite').objectStore('keyvaluepairs').add(true, 'GUIDE_COMPLETED_');
  };
};
