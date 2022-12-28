function getGiftsToRefill(a1: string[], a2: string[], a3: string[]) {
  const giftsToRefill: string[] = [];

  for (let i = 0; i < a1.length; i++) {
    const gift = a1[i];

    if (!a2.includes(gift) && !a3.includes(gift)) {
      giftsToRefill.push(gift);
    }
  }

  for (let i = 0; i < a2.length; i++) {
    const gift = a2[i];

    if (!a1.includes(gift) && !a3.includes(gift)) {
      giftsToRefill.push(gift);
    }
  }

  for (let i = 0; i < a3.length; i++) {
    const gift = a3[i];

    if (!a1.includes(gift) && !a2.includes(gift)) {
      giftsToRefill.push(gift);
    }
  }

  return [...new Set(giftsToRefill)];
}

const a1 = ['bike', 'car', 'bike', 'bike'];
const a2 = ['car', 'bike', 'doll', 'car'];
const a3 = ['bike', 'pc', 'pc'];

/* The store a1 has "bike" and "car".
The store a2 has "car", "bike" and "doll".
The store a3 has "bike" and "pc".

The gift "doll" and "pc" are only in the stores a2 and a3 respectively.
*/

getGiftsToRefill(a1, a2, a3); //?
// ['doll', 'pc']
