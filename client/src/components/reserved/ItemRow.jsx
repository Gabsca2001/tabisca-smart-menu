import React from 'react'
import { useState } from 'react'
import { Button, Modal } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { deleteItem } from '../../services/articoli.mjs'

const ItemRow = (props) => {

    const navigate = useNavigate();

    const handleEdit = (item) => {
        try {
            navigate('/reserved/editItem', { state: item })
        } catch (err) {
            console.log(err)
        }
    }

    const handleDeleteItem = (id, image) => {
        //delete item
        try {
            deleteItem(id, image)
            props.fetchData()
        } catch (err) {
            console.log(err)
        }
    }



    return (
        <>
            <tr key={props.index}>
                <td>{props.index + 1}</td>
                <td>{props.item.nome}</td>
                <td>{props.item.descrizione}</td>
                <td>{props.item.prezzo.toFixed(2)}</td>
                <td>{props.item.categoria}</td>
                <td className='d-flex align-content-between justify-content-between gap-3'>
                    <Button variant="primary" onClick={() => { handleEdit(props.item) }}>Visualizza/Modifica</Button>
                    <Button variant="danger" onClick={() => handleDeleteItem(props.item.id, props.item.image)}>Elimina</Button>
                </td>
            </tr>

        </>
    )
}

export default ItemRow