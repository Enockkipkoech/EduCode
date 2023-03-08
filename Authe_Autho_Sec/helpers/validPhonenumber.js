import { isValidPhoneNumber } from "libphonenumber-js";

const validNumber = (number) => {
	const validPhoneNo = isValidPhoneNumber(number, "KE") === true;
	if (validNumber) {
		return validPhoneNo;
	}
	let msg = "Invalid Number";
	console.log(msg);
	return msg;
};
export { validNumber };
