import React from 'react'
import AgregarHabilidad from '../components/AgregarHabilidad'
import AgregarTrabajo from '../components/AgregarTrabajo'
import AgregarCity from '../components/AgregarCity'
import AgregarCountry from '../components/AgregarCountry'

const Crear = () => {
  return (
    <div>
      <AgregarHabilidad></AgregarHabilidad>
      <AgregarTrabajo></AgregarTrabajo>
      <AgregarCity></AgregarCity>
      <AgregarCountry></AgregarCountry>
    </div>
  )
}

export default Crear