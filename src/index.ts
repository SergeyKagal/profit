import {
  bubble1,
  bubble2,
  bubble3,
  bubble4,
  bubble5,
  bubble6,
  container1,
  container2,
} from './app/constants';
import { text1 } from './app/constants';
import { showText } from './app/show-hide-text';
import { slider } from './app/slider';
import './style/style.scss';

slider();
showText(text1, 2500);

container1.addEventListener('mousemove', (e: MouseEvent) => {
  e.preventDefault();
  bubble1.moveBlock(e.x, e.y);
  bubble2.moveBlock(e.x, e.y);
  bubble3.moveBlock(e.x, e.y);
});

container2.addEventListener('mousemove', (e: MouseEvent) => {
  e.preventDefault();
  bubble4.moveBlock(e.x, e.y);
  bubble5.moveBlock(e.x, e.y);
  bubble6.moveBlock(e.x, e.y);
});
