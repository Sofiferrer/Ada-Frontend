import React from 'react'
import { Nav } from '../Nav'

export const Header = (props) => {

    return (
        <header>
            <div>
                Esta es la cabecera
            </div>
            <Nav items={props.menuItems} />
        </header>
    )
}
