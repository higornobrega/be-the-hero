import React from 'react';


export default function Header({children}) {
    return(
    <header>
        <h1>{children}</h1>
    </header>
    );
}

//Se não quiser exportar na função

//export default Header;