import React from 'react'

const page = ({ params }) => {
    return (
        <div>
            this is /greetings/name route name is {params.name}
        </div>
    )
}

export default page
