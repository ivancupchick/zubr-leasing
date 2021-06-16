// const ALLPRICE = 15000;
// const SROK = 36;
// const STAVKA = 17;

const calculatePLT = (ALLPRICE: number, SROK: number, STAVKA: number, firstPaymentValue: number): number => {
  const all = (ALLPRICE * (0.01 * (100 - firstPaymentValue)))
  const stavkaCredInMonth = +((STAVKA * 0.01) / 12).toFixed(3);
  const kofAnnuet = (
    (stavkaCredInMonth * +Math.pow((1+stavkaCredInMonth), SROK).toFixed(6)) /
    (+Math.pow((1+stavkaCredInMonth),SROK).toFixed(6) - 1)
  );
  return +(((all * 0.8) * kofAnnuet)).toFixed(2);
}

export {
  calculatePLT
};
