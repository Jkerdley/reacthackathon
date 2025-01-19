export const isValidEmail = (value) => {
	return /\S+@\S+\.\S+/.test(value);
};
