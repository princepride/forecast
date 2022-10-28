import React from 'react'
//import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Button } from 'react-bootstrap';
import MyForm from './pages/MyForm';
import Loading from './pages/Loading'
import { useStateContext } from './context/ContextProvider'
import "./App.css"

function App() {
  const { loading, setLoading } = useStateContext();
  return (
    <>
      {!loading && <MyForm />}
      { loading && <Loading />}
    </>
  )
}

export default App