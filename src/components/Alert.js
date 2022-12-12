import { useAppContext } from "../context/appContext"

const Alert = () => {
  const { alertType, alertText } = useAppContext()
  return(
         <div className={`alert roboto alert-${alertType}`}>{alertText}</div>
      )

  
}

export default Alert
