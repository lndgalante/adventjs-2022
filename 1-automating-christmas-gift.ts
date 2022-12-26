function wrapping(gifts: string[]) {
  return gifts.map((gift) => {
    const wrappingPaper = '*'.repeat(2 + gift.length);
    return `${wrappingPaper}\n*${gift}*\n${wrappingPaper}`;
  });
}

wrapping(['midu']); //?
