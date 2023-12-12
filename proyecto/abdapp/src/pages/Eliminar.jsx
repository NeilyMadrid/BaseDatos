import React from 'react'
import EliminarTrabajo from '../components/EliminarTrabajo'
import EliminarCountry from '../components/EliminarCountry'
import EliminarCity from '../components/EliminarCity'

const Eliminar = () => {
  return (
    <div className='main-eliminar'>
    <EliminarCountry></EliminarCountry>
    <EliminarCity></EliminarCity>
    </div>
  )
}

export default Eliminar