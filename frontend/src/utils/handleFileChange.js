import { handleInputChange } from "./handleInputChange";
import { handleNotifications } from "./handleNotifications";

const handleFileChange = (event, extensions, setState) => {
    let file = event.target.files[0];

    if (file) {
        const fileExtension = file.name.slice(((file.name.lastIndexOf(".") - 1) >>> 0) + 2);

        if (extensions.includes(`.${fileExtension}`)) {
            handleInputChange("files", event.target.files, setState);
        } else {
            file = null;
            handleInputChange("files", null, setState);
            handleNotifications("error", "Por favor, seleccione un archivo .xlsx o .pdf válido.")
        }
    }
};

export { handleFileChange };