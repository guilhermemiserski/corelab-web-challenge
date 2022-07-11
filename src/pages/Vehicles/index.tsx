import { Key, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom"
import { BsFilterLeft } from "react-icons/bs";
import { BiCar } from "react-icons/bi";


import { getVehicles } from "../../lib/api";
import { Button, Card, Search } from "../../components";
import { IVehicle } from "../../types/Vehicle";

import styles from "./Vehicles.module.scss";


const VehiclesPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const objetoSearch: any = location.state;
  const [vehicles, setVehicles] = useState<IVehicle[]>([]);
  const [filteredResults, setFilteredResults] = useState<IVehicle[]>([]);
  const [search, setSearch] = useState<string>("");

  useEffect(() => {
    const fetchVehicles = async () => {
      const payload = await getVehicles();
      setVehicles(payload);
    };

    fetchVehicles();
  }, []);


  const searchItems = (searchValue: string) => {
    setSearch(searchValue);
    if (search !== '') {
      const filteredData = vehicles.filter((item) => {
        return Object.values(item).join('').toLowerCase().includes(search.toLowerCase())
      })
      setFilteredResults(filteredData);
    }
    else {
      setFilteredResults(vehicles)
    }
  }

  return (
    <div className={styles.Vehicles}>
      <main className={styles.main}>
        <div className={styles.searchInputDiv}>
          <Search placeholder="&#xF002; Buscar" onChange={(e) => searchItems(e.target.value)} />
          <BsFilterLeft onClick={() => navigate("/filtrar")} size={45} className={styles.filterIcon} ></BsFilterLeft>
        </div>
        <Button text="ADICIONAR" onClick={() => navigate("/adicionar")} />
        {search.length > 1 ? (
          filteredResults.map((vehicle, index) => {
            return (
              <Card key={index} colorDefault={vehicle.color} isFavorite={vehicle.isFavorite} id={vehicle._id} title={vehicle.name} nameDefault={vehicle.name} descriptionDefault={vehicle.description} brandDefault={vehicle.brand} plateDefault={vehicle.plate} yearDefault={vehicle.year} priceDefault={vehicle.price}>
                <p>Preço: {vehicle.price}</p>
                <p>Descrição: {vehicle.description} </p>
                <p>Ano: {vehicle.year}</p>
                <p>Cor: <BiCar className={styles.carIcon} size={18} style={{ color: vehicle.color }}></BiCar></p>
              </Card>
            )
          })
        ) : (objetoSearch === null ? (
          vehicles.map((vehicle, index) => {
            return (
              <Card key={index} colorDefault={vehicle.color} isFavorite={vehicle.isFavorite} id={vehicle._id} title={vehicle.name} nameDefault={vehicle.name} descriptionDefault={vehicle.description} brandDefault={vehicle.brand} plateDefault={vehicle.plate} yearDefault={vehicle.year} priceDefault={vehicle.price}>
                <p>Preço: {vehicle.price}</p>
                <p>Descrição: {vehicle.description} </p>
                <p>Ano: {vehicle.year}</p>
                <p>Cor: <BiCar className={styles.carIcon} size={18} style={{ color: vehicle.color }}></BiCar></p>
              </Card>
            )
          })) : (objetoSearch.map((vehicle: { color: string; isFavorite: boolean; _id: string; name: string; description: string; brand: string; plate: string; year: number, price: number }, index: Key | null | undefined) => {
            return (
              <Card key={index} colorDefault={vehicle.color} isFavorite={vehicle.isFavorite} id={vehicle._id} title={vehicle.name} nameDefault={vehicle.name} descriptionDefault={vehicle.description} brandDefault={vehicle.brand} plateDefault={vehicle.plate} yearDefault={vehicle.year} priceDefault={vehicle.price}>
                <p>Preço: {vehicle.price}</p>
                <p>Descrição: {vehicle.description} </p>
                <p>Ano: {vehicle.year}</p>
                <p>Cor: <BiCar className={styles.carIcon} size={18} style={{ color: vehicle.color }}></BiCar></p>
              </Card>
            )
          })
        )
        )}
      </main>
    </div>
  );

};

export default VehiclesPage;