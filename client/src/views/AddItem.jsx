import React from 'react'
import { Form, Button, Container } from 'react-bootstrap'
import { useState, useEffect } from 'react'
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { storage } from '../services/db';
import { auth } from '../services/db.mjs';
import {categories} from '../utils/categories'

import { useContext } from 'react';
import { AuthContext } from '../context/context';

const AddItem = () => {

    const { currentUser } = useContext(AuthContext);


    return (
        <div>
            {
                currentUser && <p>{currentUser.email} is signed in</p>      
            }
        </div>

    )
}

export default AddItem