import { useEffect, useState, useRef } from "react"

const Main = () => {
  const [tareas, setTareas] = useState([])
  const input = useRef()

  const handleSave = () => {
    setTareas([...tareas, input.current.value])
    input.current.value = ''
  }
  return (
    <>
    <h1>Tareas</h1>
    <input ref={input} />
    <button type="button" onClick={handleSave} >Guardar</button>
    {
      tareas.map((item) => (
        <p>{item}</p>
      ))
    }
    </>
  )
}

export default Main
