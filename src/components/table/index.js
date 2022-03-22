import React from "react";
import { FaTrashAlt, FaPen } from "react-icons/fa";
import { TableStyled } from "./styles";

const Table = ({headers, items, removeItem, editItem}) => {

    return (
        <TableStyled>
            <table>
                <thead>
                    <tr>
                        {headers && headers.map((header, index) => (
                            <th key={index}>
                                {header}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {items && items.map((item, index) => (
                        <tr key={index}>
                            <td className="actions">
                                <FaTrashAlt onClick={() => removeItem(index)}></FaTrashAlt>
                                <FaPen onClick={() => editItem(index)}></FaPen>
                            </td>
                            
                            <td>
                                {item}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </TableStyled>
    )
}

export default Table;