// Each gift inside the pack is represented by a string and it has a weight equal to the number of letters in its name
// The maximum weight limit of each reindeer is equal to twice the number of letters in its name.
// Return the maximum number of gifts packs that Santa Claus can deliver.

function distributeGifts(packOfGifts: string[], reindeers: string[]) {
  const totalGiftsWeight = packOfGifts.map(({ length }) => length).reduce((accumulator, gift) => accumulator + gift, 0);

  const totalReindeersWeight = reindeers
    .map(({ length }) => length * 2)
    .reduce((accumulator, reindeer) => accumulator + reindeer, 0);

  const maximumPackOfGifts = Math.floor(totalReindeersWeight / totalGiftsWeight);

  return maximumPackOfGifts;
}

/* const packOfGifts = ['book', 'doll', 'ball'];
const reindeers = ['dasher', 'dancer'];

// pack weights 4 + 4 + 4 = 12
// reindeers can carry (2 * 6) + (2 * 6) = 24
distributeGifts(packOfGifts, reindeers); //?
// 2 */

distributeGifts(
  ['game', 'videoconsole', 'computer'],
  ['midudev', 'pheralb', 'codingwithdani', 'carlosble', 'blasco', 'facundocapua', 'madeval', 'memxd'],
); //?
// 5
