export const calcFontSize = (num) => {
  const percent = 50; //root 퍼센트 변경할 시 이 부분을 변경하면 된다.
  const applyingPercent = (16 * percent) / 1000;
  const result = num * applyingPercent;

  return Number(result.toFixed(2));
};
