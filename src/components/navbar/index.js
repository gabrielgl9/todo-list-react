import React from 'react';

import { NavbarStyled } from './styles';

const Navbar = ({logo}) => {

    return (
        <NavbarStyled>
            {logo}
        </NavbarStyled>
    );
}

export default Navbar;