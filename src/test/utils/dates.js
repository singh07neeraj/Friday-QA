const buildDateString = (date) => {
  const dayString = date.getDate().toString().padStart(2, '0');
  const monthString = (date.getMonth() + 1).toString().padStart(2, '0');
  const yearString = date.getFullYear().toString();

  return `${dayString}/${monthString}/${yearString}`;
};

export default buildDateString;
