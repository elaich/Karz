export const colorMapperFn = (color: string) => {
  const parts = color.split('');
  parts[0] = parts[0].toUpperCase();

  return {
    label: parts.join(''),
    value: color
  };
};
