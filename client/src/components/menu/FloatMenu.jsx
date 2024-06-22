import React, { useEffect, useState } from 'react'
import { Container, Tabs, Tab } from '@mui/material'
import { Link } from 'react-router-dom'
import { categories } from '../../utils/categories'
import { UIContext } from '../../context/context'
import { useContext } from 'react'

const FloatMenu = () => {

    const {selectedItem} = useContext(UIContext)

    useEffect(() => {
        setValue(selectedItem)
    }, [selectedItem]);

    const [value, setValue] = useState(-1);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };



    return (
        <Container className='d-flex flex-column align-items-center justify-content-center'>
            <Tabs
                value={value}
                onChange={handleChange}
                variant="scrollable"
                sx={{ "& .Mui-selected": { backgroundColor: '#1f1c3e', color: 'white' }, "& .MuiTabs-indicator": { backgroundColor: 'white' } }}
                textColor='white'
                scrollButtons
                allowScrollButtonsMobile
                aria-label="scrollable force tabs example"
                className='tabContainer'
            >
                {categories.map((category, index) => (
                    <Tab
                        label={category.name}
                        key={index}
                        component={Link}
                        to={category.link}
                        className='tabElement'
                    />
                ))}
            </Tabs>
        </Container>
    )
}

export default FloatMenu