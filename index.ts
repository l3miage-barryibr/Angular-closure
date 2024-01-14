function createAdder(n: number): (x: number) => number {
  const NB = 10;
  return (x: number) => NB + n + x;
}

const adder13 = createAdder(3);
const adder15 = createAdder(5);

console.log('_______________________');
console.log(adder13(7));
console.log(adder15(7));

/*
 * Définissez la fonction getFctMessage
 *   qui prend en paramètre une chaîne de caractère str
 *   et qui renvoie une fonction
 *          qui ne prend pas de paramètre
 *       et qui renvoie str.
 * Testez votre fonction
 *
 */
function getFctMessage(str: string): () => string {
  const mess = () => str;
  return mess;
}

const aff = getFctMessage('Bonjour');
const resultat: string = aff();

console.log(resultat);
type T_S_S = (s: string) => string;

const prefixeS: T_S_S = (str: string): string => {
  return `"//"${str}`;
};
const res: string = prefixeS("voici");
console.log(res);