import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getVehicles } from "../../lib/api";
import { Button, Card, Search } from "../../components";
import styles from "./Vehicles.module.scss";
import { IVehicle } from "../../types/Vehicle";


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
        <Search placeholder="Buscar" value={search} onChange={() => {}} />
        <Button text="ADICIONAR" onClick={() => navigate("/adicionar")} />
        {vehicles.map((vehicle, index) => (
          <Card title={vehicle.name}>
            <p>Preço: {vehicle.price}</p>
            <p>Descrição: {vehicle.description} </p>
            <p>Ano: {vehicle.year}</p>
            <p>Cor: {vehicle.color}</p>
          </Card>
        ))}
      </main>
    </div>
  );
};

export default VehiclesPage;