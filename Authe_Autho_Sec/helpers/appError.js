export const appError = (message, statusCode) => {
	let error = {
		statusCode,
		message,
	};

	return error.message;
};
