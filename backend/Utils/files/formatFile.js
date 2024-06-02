const iconv = require("iconv-lite");

const { formatDateFile } = require("./formatDateFile");


const { splitValue } = require("../../middlewares/multer.config");

const formatFile = async (data) => {
	try {
		const formattedData = data.filter(item => item !== "1_no-borrar.txt").map((item) => {

			const parts = item.split(`${splitValue}`);

			const selectedOption = parts[0];
			const originalNameWithExtension = parts.slice(2).join('_');
			const originalName = originalNameWithExtension.split('.')[0];
			const fileType = originalNameWithExtension.split('.')[2]

			const fileDate = parts[1];
			const [ date, time ] = formatDateFile(fileDate)

			return {
				name: iconv.decode(originalName, "utf-8"),
				date: date,
				time: time,
				fullName: item,
				fileType: fileType,
				selectedOption: selectedOption,
			};
		})

		return formattedData;
	}
	catch (err) {
		throw new Error(err);
	}
}

module.exports =  { formatFile };