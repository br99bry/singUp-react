import { useEffect, useState, useRef } from "react"
import MainStyled from "../../Styles/Home/Main"

const Main = () => {
  const [form, setForm] = useState({})
  const handleChangeValue = (input) => {
    setForm({
      ...form,
      [input.target.name]: input.target.value,
    })
  }

  const handleSubmit = () => {
    console.log('voy a enviar al back ', form)
  }

  return (
    <MainStyled>
      <h4>REGISTRATE AMIGO</h4>
      <label>Nombre</label>
      <input name="name" onChange={handleChangeValue} placeholder="Tu nombre" />
      <label>Apellido</label>
      <input name="lastname" onChange={handleChangeValue} placeholder="Tu apellido" />
      <label>email</label>
      <input name="email" onChange={handleChangeValue} type="email" placeholder="Tu email" />
      <button onClick={handleSubmit}>Enviar</button>
    </MainStyled>
  )
}

export default Main
