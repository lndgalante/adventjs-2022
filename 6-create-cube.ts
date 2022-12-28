function createCube(size: number) {
  const cube = { top: '', bottom: '' };

  const topRightSide = '_\\'.repeat(size);
  const bottomRightSide = '_/'.repeat(size);

  for (let i = 1; i <= size; i++) {
    const topLeftSide = '/\\'.repeat(i);
    const topPart = `${topLeftSide}${topRightSide}`;

    const bottomLeftSide = '\\/'.repeat(size - i + 1);
    const bottomPart = `${bottomLeftSide}${bottomRightSide}`;

    cube.top += `${' '.repeat(size - i)}${topPart}\n`;
    cube.bottom += `${' '.repeat(i - 1)}${bottomPart}${i === size ? '' : '\n'}`;
  }

  return `${cube.top}${cube.bottom}`;
}

const cube = createCube(3);
console.log(cube);
