import React from 'react';
import NavBarPrincipal from './components/nabvar2';
import Sidemenu from './components/sidemenu';
import ListaUsuarios from './components/user_list';

function Usuarios() {
    return (
        <div>
            <NavBarPrincipal />
            <Sidemenu />
            <ListaUsuarios/>
        </div>

    );
}

export default Usuarios;