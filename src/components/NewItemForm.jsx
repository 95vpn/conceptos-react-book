import React, { useState } from 'react'

export const NewItemForm = ({onAddItem}) => {

    const [newItem, setNewItem] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        if (newItem.trim()) {
            onAddItem(newItem);
            setNewItem('')
        }
    }

  return (
    <form onSubmit={handleSubmit}>NewItemForm
        <input type="text" value={newItem} onChange={(e) => setNewItem(e.target.value)} placeholder='Add new item'/>
        <button type='submit'>Add Item</button>
    </form>
  )
}
