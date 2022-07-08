import { FaArrowLeft } from "react-icons/fa"
import { useNavigate } from "react-router-dom"
import EditForm from "../../components/Form/EditForm"
import styles from "./EditVehicles.module.scss"

const EditVehiclesPage = () => {
    const navigate = useNavigate();

    return (
        <>
        <FaArrowLeft onClick={() => navigate("/home")} size={30} className={styles.iconBack}></FaArrowLeft>
        <EditForm></EditForm>
        </>
    )
}

export default EditVehiclesPage