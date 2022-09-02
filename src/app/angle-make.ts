import { PI } from './constants';

export const angleMake = (x: number, y: number, angle: number) => {
  if (x < 0 && angle < 0 && y > 0) {
    return PI + angle;
  } else if (x < 0 && y < 0 && angle > 0) {
    return PI + angle;
  }
  return angle;
};
