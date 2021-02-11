export const required = (value) => {
  return value ? undefined : "Required";
};

export const sowingFormat = (value) => {
  return value && !/^[0-9]{1,3}[-]{1}[0-9]{1,3} [a-z]{5} [a-z]{6}$/.test(value)
    ? `Invalid format. Ex: "4-6 weeks before".`
    : undefined;
};

export const daysToMatFormat = (value) => {
  return value && !/^[0-9]{2}([-0-9]{0,2})?([0-9]{0,3})?$/.test(value)
    ? `Invalid format. Ex: "55-65 -or- 90"`
    : undefined;
};
