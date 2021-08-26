import { string } from 'prop-types'
import React, { FC } from 'react'
import { useEffect,useState } from 'react'
import useQuery from '../../hook/useQuery'
import usePath from 'react-use-path'
import { biases } from '../../shared/api'
import './index.scss'

interface DomainsPageProps {
    mode: 'eshop' | 'eedu'
}

const DomainsPage: FC<DomainsPageProps> = ({mode}) => {
    const [_, setPath] = usePath()
    const { loading,error,data } = useQuery(biases(),[])
    const [mutableData, setMutableData] = useState(data)

    useEffect(() => {
        setMutableData(data)
    },[data])

    return <div>
        <div>{mode === 'eshop' ? 'eshop':'eedu' }</div>
        <button onClick={() => setPath('/')}>back</button>
        <div>{mutableData?.map((b)=>{
            return <div onClick={()=> setPath(`/${mode}/${b.id}`)}>{b.name}</div>
        })}</div>
    </div>
}

export default DomainsPage