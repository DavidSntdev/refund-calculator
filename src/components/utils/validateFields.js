export const validateFields = (amount, years, rate, type, setErrors) => {
  const messageError = "The Field is required";
  const newErrors = {};
  if (!amount) newErrors.amount = messageError;
  if (!years) newErrors.years = messageError;
  if (!rate) newErrors.rate = messageError;
  if (!type) newErrors.type = messageError;
  setErrors(newErrors);

  return Object.keys(newErrors).length === 0;
};
