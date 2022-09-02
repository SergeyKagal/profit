export const getBlockCenter = (block: HTMLElement) => {
  const center = {
    x:
      block.getBoundingClientRect().x + block.getBoundingClientRect().width / 2,
    y:
      block.getBoundingClientRect().y +
      block.getBoundingClientRect().height / 2,
  };

  return center;
};
