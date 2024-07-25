import React from 'react'
import caveImage from "../../assets/beauty-cave.jpg"
import Image from 'next/image'

const page = () => {
    return (
        <div>
            <h1>Here is the image component</h1>
            <p>Download both images to see the difference</p>
            <Image src={caveImage} alt="cave" />
            <Image src={caveImage} alt="cave" width={500} />
        </div>
    )
}

export default page
