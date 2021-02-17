export const waitForExisting = (selector) => {
  selector.waitForDisplayed();
  return selector.isExisting();
};
