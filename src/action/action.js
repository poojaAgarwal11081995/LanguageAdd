/** @format */
import { FORMDATA } from "./type";
export const reqFormData = (data) => {
	// alert(JSON.stringify(data));
	return {
		type: FORMDATA,
		payload: data,
	};
};
