import { handleNotifications } from "./handleNotifications";

const handleDownload = (url, name) => {
    const pdfUrl = url;
    const link = document.createElement("a");

    link.href = pdfUrl;
    link.download = name;
    link.click();
    handleNotifications("info", `Se descargó ${name}`);
}

const handleOpenFile = (uri) => {
    window.open(uri, '_blank');
}

export { handleDownload, handleOpenFile }