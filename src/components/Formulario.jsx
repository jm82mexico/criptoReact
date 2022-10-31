import React from 'react'
import styled from '@emotion/styled'
import useSelectMonedas from '../hooks/useSelectMonedas'
import { monedas } from '../data/monedas'


const InputSubmit = styled.input`
    background-color:#9497FF;
    border:none;
    width:100%;
    padding: 10px;
    color: #fff;
    font-weight:700;
    text-transform:uppercase;
    font-size:20px;
    border-radius:5px;
    margin-top:30px;
    transition:background-color .3s ease;
    &:hover{
        background-color:#7A7DFE;
        cursor: pointer;
    }
`

const Formulario = () => {
    const monedas2 = [
        { id: 'USD', nombre: 'Dolar de Estados Unidos' },
        { id: 'MXN', nombre: 'Peso Mexicano' },
        { id: 'EUR', nombre: 'Euro' },
        { id: 'GBP', nombre: 'Libra Esterlina' },
      ]
    const [SelectMonedas] = useSelectMonedas('Elige tu moneda',monedas2)
    


  return (
    <form>
        <SelectMonedas />
        <InputSubmit
            type="submit"
            value="Cotizar"
        />
    </form>
  )
}

export default Formulario