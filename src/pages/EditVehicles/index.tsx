import { FaArrowLeft } from "react-icons/fa"
import { useNavigate } from "react-router-dom"
import { useLocation } from "react-router-dom"
import EditForm from "../../components/Form/EditForm"
import styles from "./EditVehicles.module.scss"

const EditVehiclesPage = () => {

    const navigate = useNavigate();
    const location = useLocation();
    const objeto : any = location.state;
    const id = objeto.id;
    const name = objeto.nameDefault;
    const description = objeto.descriptionDefault;
    const brand = objeto.brandDefault;
    const plate = objeto.plateDefault;
    const year = objeto.yearDefault;
    const color = objeto.colorDefault;
    const price = objeto.priceDefault;
    

    return (
        <>
        <FaArrowLeft onClick={() => navigate("/home")} size={30} className={styles.iconBack}></FaArrowLeft>
        <EditForm id={id} nameDefault={name} descriptionDefault={description} brandDefault={brand} plateDefault={plate} yearDefault={year} colorDefault={color} priceDefault={price} ></EditForm>
        </>
    )
}

export default EditVehiclesPage