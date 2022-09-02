import { angleMake } from './angle-make';
import { getBlockCenter } from './get-center';

export class MovebleBlock {
  block: HTMLElement;

  constructor(block: HTMLElement) {
    this.block = block;
  }
  moveBlock(x: number, y: number) {
    const tan =
      (y - getBlockCenter(this.block).y) / (x - getBlockCenter(this.block).x);

    const angleRad = Math.atan(tan);
    const angleReal = angleMake(
      x - getBlockCenter(this.block).x,
      y - getBlockCenter(this.block).y,
      angleRad
    );
    const dx =
      Math.cos(angleReal) * this.block.getBoundingClientRect().width * 1;
    const dy =
      Math.sin(angleReal) * this.block.getBoundingClientRect().height * 1;

    this.block.style.transform = `translate(${dx}px,${dy}px)`;
    this.block.style.transition = '0.5s';
  }
}
