/** @format */
import { FORMDATA } from "./type";
export const formData = (data) => {
	alert(JSON.stringify(data));
	return {
		type: FORMDATA,
		payload: data,
	};
};
