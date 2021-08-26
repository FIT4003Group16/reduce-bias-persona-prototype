import React, { FC } from 'react'
import { useEffect, useState } from 'react'
import usePath from 'react-use-path'
import useQuery from '../../hook/useQuery'
import { persona }from '../../shared/api'
import './index.scss'

interface DetailPagePros {

    id?: string
}

const DetailPage: FC<DetailPagePros> = ( {id} ) => {
    const[path, setPaht] = usePath()
    const { loading,data } = useQuery(persona(id!))
    return <div>detail page
        <button onClick={() => {
            setPaht(`/${data?.domain.toLowerCase()}/${data?.bias.id}`)
        }}>back</button>
        <div>{data?.name}</div>
        <div>{data?.age}</div>
        <div>{data?.gender}</div>
        <div>{data?.toDoList}</div>
        <div>{data?.goals}</div>
    </div>
}

export default DetailPage