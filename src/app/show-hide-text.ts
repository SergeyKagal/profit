export const hideText = (textElement: HTMLElement) => {
  if (textElement.classList.contains('show-text'))
    textElement.classList.remove('show-text');
};
export const showText = (textElement: HTMLElement, delay: number) => {
  hideText(textElement);
  setTimeout(() => {
    textElement.classList.add('show-text');
  }, delay);
};
