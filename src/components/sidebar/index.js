import React from 'react';

import { SidebarStyled } from './styles';
import { FaPlus } from "react-icons/fa";
import List from '../list';

const Sidebar = () => {

    const htmlList = [
        (<> <FaPlus></FaPlus> Criar Plano </>) 
    ];

    return (
        <SidebarStyled>
            <List items={htmlList} color={'#fff'} />
        </SidebarStyled>
    );
}

export default Sidebar;