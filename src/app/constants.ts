import { MovebleBlock } from './Moveble';

const block1: HTMLElement = document.querySelector('.bubble1');
const block2: HTMLElement = document.querySelector('.bubble2');
const block3: HTMLElement = document.querySelector('.bubble3');
const block4: HTMLElement = document.querySelector('.bubble4');
const block5: HTMLElement = document.querySelector('.bubble5');
const block6: HTMLElement = document.querySelector('.bubble6');

export const container1: HTMLElement = document.querySelector('.container1');
export const container2: HTMLElement = document.querySelector('.container2');

export const text1 = document.querySelectorAll('.text-block')[0] as HTMLElement;
export const text2 = document.querySelectorAll('.text-block')[1] as HTMLElement;

export const PI: number = Math.PI;

export const bubble1 = new MovebleBlock(block1);
export const bubble2 = new MovebleBlock(block2);
export const bubble3 = new MovebleBlock(block3);
export const bubble4 = new MovebleBlock(block4);
export const bubble5 = new MovebleBlock(block5);
export const bubble6 = new MovebleBlock(block6);
