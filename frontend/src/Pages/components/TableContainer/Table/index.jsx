import React from "react";
import { AppContext } from "../../../../Context";
import { handleDownload, handleOpenFile } from "../../../../utils/downloadFile";
import "./styles.css";

import { PiMicrosoftExcelLogoFill } from "react-icons/pi";
import { FaFilePdf } from "react-icons/fa";


const Table = ({values}) => {
    const context = React.useContext(AppContext)
    const colors = ["#e0161e", "#69CE27", "#3366cc"];

    const handleRow = (row, cell, cellIndex) => {
        if (cellIndex === 0) {
            return(
                <td key={cellIndex}>
                    <a>
                         {row.link ? <PiMicrosoftExcelLogoFill fill={context.activeHighContrast ? "#FFFFFF" : colors[0]}/> : <FaFilePdf fill={context.activeHighContrast ? "#FFFFFF" : colors[0]}/>}
                        {cell}
                    </a>
                </td>
            )
        } else if (cellIndex === 2) {
            return(
                <td key={cellIndex} className="cursor-pointer" onClick={() => handleOpenFile(row.link || row.file)}>
                    {cell}
                </td>
            )
        } else if (cellIndex === 3) {
            return(
                <td key={cellIndex} className="cursor-pointer" onClick={() => handleDownload(row.file, row.array[0])}>
                    {cell}
                </td>
            )
        } else {
            return(
                <td key={cellIndex}>
                    {cell}
                </td>
            );
        }
    }

    return (
        <div className="table-container">
            <table className="my-table">
                <thead>
                    <tr>
                        <th>Documento</th>
                        <th>Fecha de Publicación</th>
                        <th>Acción</th>
                        <th>Descargar</th>
                    </tr>
                </thead>
                <tbody>
                    {values?.map((row, index) => (
                        <tr key={index}>
                            {row?.array?.map((cell, cellIndex) => (
                                handleRow(row, cell, cellIndex, index)
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>

    );
};

export { Table };