import React, { useReducer, useContext } from 'react'

import reducer from './reducer'



import {
  HANDLE_CHANGE,
  HANDLE_CHECK,
  CALL_ALERT,
  CLEAR_ALERT
} from './actions'


const initialState = {
  alertType:"",
  alertText:"",
  showAlert:false
}


const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)
   
  function handleChange(name,value){
    dispatch({type:HANDLE_CHANGE,payload:{name:name,value:value}})
  }

  function handleCheck(name,checked){
    dispatch({type:HANDLE_CHECK,payload:{name:name,value:checked}})
  }

  function AlertFun({type,msg}){
    dispatch({type:CALL_ALERT,payload:{type:type,msg:msg}})

    setTimeout(()=>{
       dispatch({type:CLEAR_ALERT})
    },3000)
   }

  
  return (
    <AppContext.Provider
    value={{
      ...state,
      handleChange,
      handleCheck,
      AlertFun,
     
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

const useAppContext = () => {
  return useContext(AppContext)
}

export { AppProvider, initialState, useAppContext }
