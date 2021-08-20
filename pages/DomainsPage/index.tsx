import React, { FC } from 'react'
import usePath from 'react-use-path'

import './index.scss'

const DomainsPage: FC = () => {
    const [_, setPath] = usePath()

    return <div>
        <div>DomainsPage</div>
        <button onClick={() => setPath('/')}>back</button>
    </div>
}

export default DomainsPage