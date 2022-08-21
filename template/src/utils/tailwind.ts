// we default to red because we want to see if it doesn't work asap
const extractTextColor = (tailwindClass: {color?: string}) =>
  tailwindClass?.color ?? 'red';

export {extractTextColor};
