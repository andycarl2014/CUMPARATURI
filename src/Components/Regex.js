const validateName = (name) => {
  const regexName = new RegExp('^[0-9a-zA-Z ]*$');
  return regexName.test(name);
};
// Name must contain only letters, numbers and space
const validateQuantity = (quantity) => {
  const regexQuantity = new RegExp('^[1-9][0-9]*$');
  return regexQuantity.test(quantity);
};
// Quantity must be a positive integer

export { validateName, validateQuantity };
