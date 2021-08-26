import React, { FC } from 'react'
import { useEffect, useState } from 'react'
import usePath from 'react-use-path'
import useQuery from '../../hook/useQuery'
import { bias, biases,personas } from '../../shared/api'
import './index.scss'

interface TemplatePageProps {
    mode: 'eshop' | 'eedu'
    id?: string
}

const TemplatePage: FC<TemplatePageProps> = ( {mode, id} ) => {
    const [_, setPath] = usePath()
    const { loading,data: personasData } = useQuery(personas())
    const [mutableData, setMutableData] = useState(personasData)

    useEffect(()=>{
        setMutableData(personasData?.filter((p) => {
            if(p.bias.id === id && p.domain === mode.toUpperCase()){
                return p
            }
        }))
    },[personasData])
    console.log(mutableData)

    return <div>
        <div>TemplatePage</div>
        <div>{mode}</div>
        <button onClick={() => {setPath(`/${mode}`)}}>back</button>
        {mutableData?.map((p)=>{
            return <div onClick={() => setPath(`/${mode}/template/${p.id}`)}>{p.detail}</div>
        })}
        
    </div>
}

export default TemplatePage