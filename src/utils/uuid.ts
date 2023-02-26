const getRandomString = (stringLength = 4): string =>
  Math.random()
    .toString(32)
    .substring(2, stringLength + 2);

export const genUid = () =>
  `${getRandomString(8)}-${getRandomString(8)}-${getRandomString(8)}`;
