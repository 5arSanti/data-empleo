import { ScrollableWrapper } from "../../ScrollableWrapper";
import { TextCard } from "../../TextComponents";
import "./styles.css";

const ExcelTable = ({ data }) => {
    return(
        <div className="table-container">
            <ScrollableWrapper maxHeight={650} alignItems="flex-start">
                <table className="my-table ">
                    <thead >
                        <tr >
                            {Object.keys(data?.[0]).map((key) => (
                                <th className="header-style text-style" key={key}>{key}</th>
                            ))}
                        </tr>
                    </thead>

                    <tbody>
                        {data?.map((row, index) => (
                            <tr key={index}>
                                {Object.values(row).map((value, idx) => (
                                    <td className="text-style" key={idx}>{value}</td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>

            </ScrollableWrapper>

        </div>

    );
}

export { ExcelTable };