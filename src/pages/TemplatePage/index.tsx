import React, { FC } from 'react'
import usePath from 'react-use-path'

import './index.scss'

const TemplatePage: FC = () => {
    const [_, setPath] = usePath()

    return <div>
        <div>TemplatePage</div>
    </div>
}

export default TemplatePage