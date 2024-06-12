import React from "react";

import { AppContext } from "../../../../Context";
import "./styles.css";

import { PiMicrosoftExcelLogoFill } from "react-icons/pi";
import { FaFilePdf } from "react-icons/fa";
import { IsAuthWrapper } from "../../AuthWrapper";
import { DeleteButtonCard } from "../../EditDeleteCard/DeleteButtonCard";


const Table = ({values=[], onOpen, onDownload, onExcel, onDelete}) => {
    const context = React.useContext(AppContext)
    const colors = ["#e0161e", "#69CE27", "#3366cc"];

    const color = context.activeHighContrast ? "#FFFFFF" : colors[0];

    const handleRow = (row, cell, cellIndex) => {
        if (cellIndex === 0) {
            return(
                <td key={cellIndex}>
                    {row.fileType == "xlsx" ? <PiMicrosoftExcelLogoFill fill={color}/> : <FaFilePdf fill={color}/>}
                    {cell}
                </td>
            )
        } else if (cellIndex === 2) {
            return(
                <td key={cellIndex} className="cursor-pointer" onClick={() => onOpen(row, onExcel)}>
                    {cell}
                </td>
            )
        } else if (cellIndex === 3) {
            return(
                <td key={cellIndex} className="cursor-pointer" onClick={() => onDownload(row)}>
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
                        <IsAuthWrapper><th>Eliminar</th></IsAuthWrapper>
                    </tr>
                </thead>
                <tbody>
                    {values?.map((row, index) => (
                        <tr key={index}>
                            {row?.array?.map((cell, cellIndex) => (
                                handleRow(row, cell, cellIndex, index)
                            ))}
                            <IsAuthWrapper>
                                <td>
                                    <DeleteButtonCard item={row} onDelete={onDelete} padding={0} border={false}/>
                                </td>
                            </IsAuthWrapper>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>

    );
};

export { Table };