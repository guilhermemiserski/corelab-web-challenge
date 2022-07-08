import { ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import { FaEdit, FaHeart, FaTimes } from "react-icons/fa";
import styles from "./Card.module.scss";
import ReactDOM from "react-dom";
import VehiclesPage from "../../pages/Vehicles";

interface ICard {
  title: string;
  children: ReactNode;
  id: string;
}

const Card = ({ id, title, children }: ICard) => {
  const navigate = useNavigate(); 

  const deletar = (id: string) => {
    let options = {
      method: 'DELETE',
      headers: {'Content-Type': 'application/json'},
    };

    

    fetch("http://localhost:5000/veiculos/" + id , options)
            .then(res => res.json())
            .then(json => console.log(json))
            .catch(err => console.error('error:' + err));

            window.location.reload();
  }


  return (
    <div className={styles.Card}>
      <FaEdit onClick={() => navigate("/editar")} className={styles.iconsCard} size={25}></FaEdit>
      <FaHeart className={styles.iconsCard} size={25}></FaHeart>
      <FaTimes onClick={() => deletar(id)}className={styles.iconsCard} size={25}></FaTimes>
      <h2>{title}</h2>

      <div className={styles.content}>{children}</div>
    </div>
  );
};

export default Card;
