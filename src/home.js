import React from 'react';
import NavBarPrincipal from './components/nabvar2';
import Sidemenu from './components/sidemenu';
import Kpis from './components/kpis';

function HomePrincipal() {
    return (
        <div>
            <NavBarPrincipal/>
            <Sidemenu/>
            <Kpis/>
        </div>
    );
}

export default HomePrincipal;