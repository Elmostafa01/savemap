import { useNavigate } from "react-router-dom";
import styles from './Button.module.css'


const BackButton = () => {
  const navigate = useNavigate()
  return (
<button className={styles.transparent} type="back" onClick={(e) => {
    e.preventDefault()
    navigate(-1)
    }}
    >
   Go Back
</button>
  )
}

export default BackButton
