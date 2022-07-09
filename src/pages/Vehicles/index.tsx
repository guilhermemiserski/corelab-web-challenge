import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaFilter } from "react-icons/fa"
import { BiCar } from "react-icons/bi";


import { getVehicles } from "../../lib/api";
import { Button, Card, Search } from "../../components";
import { IVehicle } from "../../types/Vehicle";

import styles from "./Vehicles.module.scss";


const VehiclesPage = () => {
  const navigate = useNavigate();
  const [vehicles, setVehicles] = useState<IVehicle[]>([]);
  const [search, setSearch] = useState<string>("");

  useEffect(() => {
    const fetchVehicles = async () => {
      const payload = await getVehicles();
      setVehicles(payload);
    };

    fetchVehicles();
  }, []);

  console.log({ vehicles });
  
  

   return (
    <div className={styles.Vehicles}>
      <main className={styles.main}>
        <div className={styles.searchInputDiv}>
        <Search placeholder="Buscar" value={search} onChange={() => {}} />
        <FaFilter onClick={() => navigate("/filtrar")} size={30} className={styles.filterIcon} ></FaFilter>
        </div>
        <Button text="ADICIONAR" onClick={() => navigate("/adicionar")} />
        {vehicles.map((vehicle, index) => (
          <Card colorDefault={vehicle.color} isFavorite={vehicle.isFavorite} id={vehicle._id} title={vehicle.name} nameDefault={vehicle.name} descriptionDefault={vehicle.description} brandDefault={vehicle.brand} plateDefault={vehicle.plate} yearDefault={vehicle.year} priceDefault={vehicle.price}>
            <p>Preço: {vehicle.price}</p>
            <p>Descrição: {vehicle.description} </p>
            <p>Ano: {vehicle.year}</p>
            <p>Cor: <BiCar className={styles.carIcon} size={18} style={{color:vehicle.color}}></BiCar></p>
          </Card>
        ))}
      </main>
    </div>
  );
};

export default VehiclesPage;