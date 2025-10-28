// Format date
export const formatDate = (date) => {
  const d = new Date(date);
  return d.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
};

// Validate email
export const isValidEmail = (email) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};

// Capitalize first letter
export const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

// Generate random ID
export const randomId = (prefix = 'id') => `${prefix}_${Math.random().toString(36).substr(2, 9)}`;
