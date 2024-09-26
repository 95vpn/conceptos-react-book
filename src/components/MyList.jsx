import React, { useState } from 'react'
import { NewItemForm } from './NewItemForm'

const MyList = () => {

    const [items, setItems] = useState(['I LOVE', 'sdfd', 'dfsd'])

  return (
    <div>MyList
        <ul>
            {
                items.map((i, index) => (
                    <li key={index}>{i}</li>
                ))
            }
        </ul>
        <NewItemForm onAddItem={(newItem) => setItems([...items, newItem])}/>
    </div>
  )
}

export default MyList