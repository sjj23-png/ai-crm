const regex = {
  email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,

  mobile: /^[6-9]\d{9}$/,

  alphaNumeric: /^[a-zA-Z0-9]+$/,

  noLeadingSpace: /^\S.*$/,
} as const;

export default regex;