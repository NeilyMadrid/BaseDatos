import React from 'react'
import AgregarHabilidad from '../components/AgregarHabilidad'
import AgregarTrabajo from '../components/AgregarTrabajo'
import AgregarCity from '../components/AgregarCity'
import AgregarCountry from '../components/AgregarCountry'
import AgregarCountryLanguage from '../components/AgregarCountryLanguage'

const Crear = () => {
  return (
    <div className='main-crear'>
      {/* <AgregarHabilidad></AgregarHabilidad>
      <AgregarTrabajo></AgregarTrabajo> */}
      <AgregarCity></AgregarCity>
      <AgregarCountry></AgregarCountry>
      <AgregarCountryLanguage></AgregarCountryLanguage>
    </div>
  )
}

export default Crear