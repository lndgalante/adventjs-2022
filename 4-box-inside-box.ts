// determines whether it is possible to pack all the boxes in one so that each box contains another

type Box = { l: number; w: number; h: number };

function fitsInOneBox(boxes: Box[]) {
  const sortedBoxesBySize = [...boxes].sort((a, b) => a.l + a.w + a.h - (b.l + b.w + b.h));

  const doesAllBoxesFitInOne = sortedBoxesBySize.every((box, index, array) => {
    if (index === array.length - 1) return true;

    const { l: currentBoxLength, w: currentBoxWidth, h: currentBoxHeight } = box;
    const { l: nextBoxLength, w: nextBoxWidth, h: nextBoxHeight } = array[index + 1];

    return currentBoxLength < nextBoxLength && currentBoxWidth < nextBoxWidth && currentBoxHeight < nextBoxHeight;
  });

  return doesAllBoxesFitInOne;
}
