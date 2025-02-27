import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div>
            <Link to="/addProperty">
                <button type="button" class="btn btn-primary">Add Property</button>
            </Link>
        </div>
    )
}

export default Home
