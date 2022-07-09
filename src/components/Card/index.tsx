import { ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import { FaEdit, FaHeart, FaRegHeart, FaTimes } from "react-icons/fa";
import styles from "./Card.module.scss";
import VehiclesPage from "../../pages/Vehicles";

interface ICard {
  title: string;
  children: ReactNode;
  isFavorite: boolean;
  id: string;
  nameDefault: string;
  descriptionDefault: string;
  brandDefault: string
  plateDefault: string;
  yearDefault: number;
  colorDefault: string;
  priceDefault: number;
}

const Card = ({ id, title, children, isFavorite, nameDefault, descriptionDefault, brandDefault, plateDefault, yearDefault, colorDefault, priceDefault }: ICard) => {
  const navigate = useNavigate();

  const deletar = (id: string) => {
    let options = {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
    };



    fetch("http://localhost:5000/veiculos/" + id, options)
      .then(res => res.json())
      .then(json => console.log(json))
      .catch(err => console.error('error:' + err));

    window.location.reload();
  }

  const favorite = (isFavorite: boolean) => {

    if (isFavorite) {
      isFavorite = false;
    } else {
      isFavorite = true;
    }

    let options = {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        isFavorite,
      })
    };

    fetch("http://localhost:5000/veiculos/" + id, options)
      .then(res => res.json())
      .then(json => console.log(json))
      .catch(err => console.error('error:' + err));

    window.location.reload();
  }

  const renderFavorite = (isFavorite: boolean) => {
    if (isFavorite) {
      return <FaHeart onClick={() => favorite(isFavorite)} className={styles.iconsCard} size={25}></FaHeart>
    }
    return <FaRegHeart onClick={() => favorite(isFavorite)} className={styles.iconsCard} size={25}></FaRegHeart>
  }


  return (
    <div className={styles.Card} style={{ color: colorDefault }}>
      <FaEdit onClick={() => navigate("/editar", { state: { id: id, nameDefault, descriptionDefault, brandDefault, plateDefault, yearDefault, colorDefault, priceDefault } })} className={styles.iconsCard} size={25}></FaEdit>
      {renderFavorite(isFavorite)}
      <FaTimes onClick={() => deletar(id)} className={styles.iconsCard} size={25}></FaTimes>
      <h2>{title}</h2>

      <div className={styles.content}>{children}</div>
    </div>
  );
};

export default Card;
