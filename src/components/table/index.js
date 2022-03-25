import React, { useEffect, useState } from "react";
import { FaTrashAlt, FaPen } from "react-icons/fa";
import Pagination from "../pagination";
import { TableStyled } from "./styles";

const Table = ({headers, items, removeItem, editItem, itemsPerPage = 3}) => {
    
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPagination, setItemsPagination] = useState([])
    const [pagesNumber, setPagesNumber] = useState(1);

    useEffect(() => {
        // get array with only items for current page
        setItemsPagination(items.slice((currentPage - 1) * itemsPerPage, itemsPerPage * currentPage));

        // get pages number
        setPagesNumber(items.length ? Math.ceil(items.length / itemsPerPage) : 1);

      }, [items, currentPage, itemsPerPage]); 

    const deleteItem = (item) => {
        removeItem(item);
        if (itemsPagination.length < 2 && currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    }

    return (
        <TableStyled>
            {itemsPagination.length > 0 && (
                <>
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
                            {itemsPagination && itemsPagination.map((item) => (
                                <tr key={item}>
                                    <td className="actions">
                                        <FaTrashAlt onClick={() => deleteItem(item)}></FaTrashAlt>
                                        <FaPen onClick={() => editItem(item)}></FaPen>
                                    </td>
                                    
                                    <td>
                                        {item}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <Pagination pagesNumber={pagesNumber} currentPage={currentPage} setNewPage={setCurrentPage}></Pagination>
                </>
            )}
        </TableStyled>
    )
}

export default Table;