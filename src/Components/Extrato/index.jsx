import React from 'react'
import { Box, Btn } from '../../Components/UI/index'
import { extratoLista } from '../../info'
import Itens from '../Itens/index'

export const Extrato = () => {

    return (
        <Box>
            {
                extratoLista.updates.map(({ id, value, date, from, type }) => {
                    return (

                        <Itens key={id} type={type} from={from} value={value} data={date} />
                    )
                })
            }
            <Btn>Ver mais </Btn>
        </Box>
    )
}
