import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const AddProperty = () => {
    const [property, setProperty] = useState({
        name: '',
        address: '',
        price: ''
    })
    const [confirmationMessage, setConfirmationMessage] = useState()
    const handleChange = (e) => {
        setConfirmationMessage('')
        setProperty({
            ...property,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:8080/api/properties', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(property),
            });

            if (response.ok) {
                console.log('came in this block')
                setConfirmationMessage('Property added successfully')
            } else {
                setConfirmationMessage('Error adding property')
            }
        } catch (error) {
            setConfirmationMessage(`Error adding property ${error}`)
        }
    };

    return (
        <>
            <div className="container">
                <h2 className="mt-4">Add New Property</h2>
                <form onSubmit={handleSubmit} className="mt-4">
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Property Name</label>
                        <input
                            type="text"
                            className="form-control"
                            id="name"
                            name="name"
                            value={property.name}
                            onChange={handleChange}
                            placeholder="Enter Property Name"
                            required
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="address" className="form-label">Property Address</label>
                        <input
                            type="text"
                            className="form-control"
                            id="address"
                            name="address"
                            value={property.address}
                            onChange={handleChange}
                            placeholder="Enter Property Address"
                            required
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="price" className="form-label">Price</label>
                        <input
                            type="number"
                            className="form-control"
                            id="price"
                            name="price"
                            value={property.price}
                            onChange={handleChange}
                            placeholder="Enter Price"
                            required
                        />
                    </div>

                    <button type="submit" className="btn btn-primary">Add Property</button>
                </form>
                <div className='mt-3'>
                    <Link to="/">
                        <button type="button" class="btn btn-primary">Back</button>
                    </Link>
                </div>
                {confirmationMessage ? confirmationMessage : ''}
            </div>

        </>
    )
}

export default AddProperty
