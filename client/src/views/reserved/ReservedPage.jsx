import React, { useEffect } from 'react'
import { findAll } from '../../services/articoli.mjs'
import { useState } from 'react'
import { Container, Table, Pagination, Form } from 'react-bootstrap'
import ItemRow from '../../components/reserved/ItemRow'


const ReservedPage = () => {

  const [prodotti, setProdotti] = useState([])
  const [loading, setLoading] = useState(false)
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const itemsPerPage = 10;

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

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1); // Reset to first page on search
  };

  const filteredProducts = prodotti.filter((item) =>
    item.nome.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.descrizione.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.categoria.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const currentProducts = filteredProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );


  return (
    <>
      <div className='d-flex flex-column justify-content-center align-items-center pt-5 pb-5 text-light' style={{ backgroundColor: '#7D8B9C', fontFamily: 'Montserrat' }}>
        <h1 className='text-center'>Area riservata</h1>
        <h4>Lista di tutti i prodotti</h4>
      </div>

      <Container className='mt-5'>
      <Form className='mb-3'>
          <Form.Control
            type='text'
            placeholder='Cerca per nome, descrizione o categoria ...'
            value={searchQuery}
            onChange={handleSearchChange}
          />
        </Form>
        {loading
          ? <p className='text-center'>Caricamento ...</p>
          : prodotti.length === 0 ? <p className='text-center' style={{ marginBottom: '15rem' }}>Nessun prodotto caricato al momento</p> :
            (
              <>
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
                    {currentProducts.map((item, index) => (
                      <ItemRow key={index} item={item} index={index} fetchData={fetchData} />
                    ))}
                  </tbody>
                </Table>
                <Pagination>
                  <Pagination.First onClick={() => handlePageChange(1)} disabled={currentPage === 1} />
                  <Pagination.Prev onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1} />
                  {[...Array(totalPages)].map((_, index) => (
                    <Pagination.Item
                      key={index}
                      active={index + 1 === currentPage}
                      onClick={() => handlePageChange(index + 1)}
                    >
                      {index + 1}
                    </Pagination.Item>
                  ))}
                  <Pagination.Next onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages} />
                  <Pagination.Last onClick={() => handlePageChange(totalPages)} disabled={currentPage === totalPages} />
                </Pagination>
              </>
            )
        }
      </Container>


    </>
  )
}

export default ReservedPage