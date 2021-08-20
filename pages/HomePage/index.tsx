import React, { FC } from 'react'
import usePath from 'react-use-path'

import './index.scss'

const HomePage: FC = () => {
    const [_, setPath] = usePath()

    return <div className ='page'>
        <div>eshop</div>
        <button className= "shop-button" onClick={() => setPath('/domains')}>learn more</button>
        <div>e-educationi</div>
        <button className= "edu-button" onClick={() => setPath('/domains')}>learn-more</button>
    </div>
}

export default HomePage