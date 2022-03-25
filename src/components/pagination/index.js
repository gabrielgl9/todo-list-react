import React from "react";
import { Button } from "../../components";
import { PaginationStyled } from "./styles";
import { FaAngleDoubleLeft, FaAngleLeft, FaAngleRight, FaAngleDoubleRight } from "react-icons/fa";

const Pagination = ({pagesNumber, currentPage, setNewPage}) => {

    const getButtons = () => {
        const buttons = [];
        if (pagesNumber) {
            for (let i = 1; i <= pagesNumber; i++) {
                buttons.push(
                    <div key={i}>
                        <Button 
                            type="button" 
                            value={i} 
                            clickButton={() => setNewPage(i)} 
                            styles={{height: '40px', width: '35px'}}>
                        </Button>
                    </div>
                );
            }
        }
        return buttons;
    }

    return (
        <PaginationStyled>
            <Button type="button" 
                clickButton={() => setNewPage(1)} 
                disabled={currentPage === 1} 
                styles={{height: '40px', width: '35px'}}>
                <FaAngleDoubleLeft></FaAngleDoubleLeft>
            </Button>
            <Button 
                type="button" 
                clickButton={() => setNewPage(currentPage - 1)} 
                disabled={currentPage === 1} 
                styles={{height: '40px', width: '35px'}}>
                <FaAngleLeft></FaAngleLeft>
            </Button>
            {getButtons()}
            <Button 
                type="button" 
                clickButton={() => setNewPage(currentPage + 1)} 
                disabled={currentPage === pagesNumber} 
                styles={{height: '40px', width: '35px'}}>
                <FaAngleRight></FaAngleRight>
            </Button>
            <Button 
                type="button" 
                clickButton={() => setNewPage(pagesNumber)} 
                disabled={currentPage === pagesNumber} 
                styles={{height: '40px', width: '35px'}}>
                <FaAngleDoubleRight></FaAngleDoubleRight>
            </Button>
        </PaginationStyled>
    )
}

export default Pagination;