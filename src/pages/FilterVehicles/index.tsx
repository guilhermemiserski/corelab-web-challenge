import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom"
import { useLocation } from "react-router-dom"
import FilterForm from "../../components/Form/FilterForm";
import styles from "./FilterVehicles.module.scss"


const FilterVehiclesPage = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const objeto : any = location.state;
    

    return (
        <>
        <FaArrowLeft onClick={() => navigate("/home")} size={30} className={styles.iconBack}></FaArrowLeft>
        <FilterForm />
        </>
    )
}

export default FilterVehiclesPage