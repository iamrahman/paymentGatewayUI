const cardNumberFormat = (number) => {
  if ([null, ''].includes(number) ) {
    return '';
  } else {
    return number?.match(/.{1,4}/g).join(' ')
  }
}

export default {
  cardNumberFormat,
};