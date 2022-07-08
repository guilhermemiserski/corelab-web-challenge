import { FaArrowLeft } from 'react-icons/fa';
import Form from '../../components/Form'
import styles from './AddVehicles.module.scss'
import { useNavigate } from 'react-router-dom';

const AddVehiclesPage = () => {
    const navigate = useNavigate();

    return (
        <>
        <FaArrowLeft onClick={() => navigate("/home")} size={30} className={styles.iconBack}></FaArrowLeft>
        <Form></Form>
        </>
    )
}

export default AddVehiclesPage;