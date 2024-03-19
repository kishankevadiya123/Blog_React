import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'



const Cprotect = (props) => {

    const history = useHistory()
    const [istoken, setIstoken] = useState('')
    useEffect(() => {
        let token = localStorage.getItem('customertoken')
        if (!token) {
            // setTimeout(() => history.push('/login'), 2000)
            return history.push('/vehical')
        }
        setTimeout(() => setIstoken(token), 2000)
        // setIstoken(token)
    }, [])

    if (!istoken) {
        return <div className='parentLoader'>
            <span className="loader"></span>
        </div>
    }


    return (
        <div>
            {/* <h1>Hello</h1> */}
            {props.children}
        </div>
    )
}

export default Cprotect