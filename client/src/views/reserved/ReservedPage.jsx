import React, { useEffect } from 'react'
import { findAll } from '../../services/articoli.mjs'
import { useState } from 'react'
import { Container, Table } from 'react-bootstrap'
import ItemRow from '../../components/reserved/ItemRow'


const ReservedPage = () => {

  const [prodotti, setProdotti] = useState([])
  const [loading, setLoading] = useState(false)

  const fetchData = async () => {

    setLoading(true)
    const res = await findAll()

    console.log(res)

    setProdotti([...res]);
    setLoading(false)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <>
      <div className='d-flex flex-column justify-content-center align-items-center pt-5 pb-5 text-light' style={{ backgroundColor: '#7D8B9C', fontFamily: 'Montserrat' }}>
        <h1 className='text-center'>Area riservata</h1>
        <h4>Lista di tutti i prodotti</h4>
      </div>

      <Container className='mt-5'>
        {loading
          ? <p className='text-center'>Caricamento ...</p>
          : prodotti.length === 0 ? <p>Nessun prodotto caricato al momento</p> :
            <Table striped bordered hover responsive>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Nome</th>
                  <th>Descrizione</th>
                  <th>Prezzo</th>
                  <th>Categoria</th>
                  <th>Azioni</th>
                </tr>
              </thead>
              <tbody>
                {prodotti.map((item, index) => (
                  <ItemRow key={index} item={item} index={index} fetchData={fetchData} />
                ))}
              </tbody>
            </Table>
        }
      </Container>


    </>
  )
}

export default ReservedPage