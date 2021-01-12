import React from 'react'
import { ListItem } from './components'

const List = (props) => {
    console.log(props);
    return (
        <ul>
            {props.items.map(item => {
                return <ListItem item={item} />
            })}
        </ul>
    )
}

export { List }