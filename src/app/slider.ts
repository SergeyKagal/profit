import { block4, container1, container2, text1, text2 } from './constants';
import { hideText, showText } from './show-hide-text';

export const slider = () => {
  document.addEventListener('wheel', (e: WheelEvent) => {
    if (e.deltaY < 0) {
      if (document.body.classList.contains('purple')) {
        document.body.classList.remove('purple');
        container1.classList.remove('hide');
        container2.classList.remove('hide');
        block4.classList.remove('show-bubble4');
        hideText(text2);
        showText(text1, 2500);
      }
      document.body.classList.add('green');
    }
    if (e.deltaY > 0) {
      if (document.body.classList.contains('green')) {
        document.body.classList.remove('green');
        container1.classList.add('hide');
        container2.classList.add('hide');
        block4.classList.add('show-bubble4');
        hideText(text1);
        showText(text2, 2500);
      }
      document.body.classList.add('purple');
    }
    container1.style.transition = '1s';
    container2.style.transition = '1s';
    document.body.style.transition = '1s';
  });
};
