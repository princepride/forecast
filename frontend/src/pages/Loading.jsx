import React, {useEffect, useState} from 'react'
import { useStateContext } from '../context/ContextProvider'
//import 'https://fonts.googleapis.com/css?family=Cabin+Condensed:700'
import './Loading.css'
import Forecast from "./Forecast"
function Loading() {
  const { loading } = useStateContext()
  const [showLoading, setShowLoading] = useState(true)
  useEffect(() => {
    if (loading) {
      setTimeout(() => {setShowLoading(false)},6000)
    }},[loading])
  return (
    <>
    {showLoading && <div class="loading wave">Loading</div>}
    {!showLoading && <Forecast />}
    </>
  )
}

export default Loading
