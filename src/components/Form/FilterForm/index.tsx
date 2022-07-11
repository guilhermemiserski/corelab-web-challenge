import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getVehicles } from "../../../lib/api";


import { IVehicle } from "../../../types/Vehicle";

import styles from "../Form.module.scss"


function FilterForm() {
    const [brandSearch, setBrand] = useState("");
    const [colorSearch, setColor] = useState("");
    const [yearSearch, setYear] = useState("");
    const [minPriceSearch, setMinPrice] = useState("");
    const [maxPriceSearch, setMaxPrice] = useState("");
    const [vehicles, setVehicles] = useState<IVehicle[]>([]);
    const navigate = useNavigate();


    useEffect(() => {
        const fetchVehicles = async () => {
            const payload = await getVehicles();
            setVehicles(payload);
        };

        fetchVehicles();
    }, []);

    


    return (
        <form className={styles.form}>
            <div>
                <label>Marca: </label>
                <input className={styles.input} name="brand" list="brands" onChange={(e) => setBrand(e.target.value)} />
                <datalist id="brands">
                    {vehicles.map((vehicle, index) => <option key={index} value={vehicle.brand}></option>)}
                </datalist>
            </div>
            <div>
                <label>
                    Cor:
                    <input className={styles.input} type="color" name="color" list="colors" onChange={(e) => setColor(e.target.value)} />
                    <datalist id="colors">
                        {vehicles.map((vehicle, index) => <option key={index} value={vehicle.color}></option>)}
                    </datalist>
                </label>
            </div>
            <div>
                <label>
                    Ano:
                    <input className={styles.input} name="year" list="years" onChange={(e) => setYear(e.target.value)} />
                    <datalist id="years">
                        {vehicles.map((vehicle, index) => <option key={index} value={vehicle.year}></option>)}
                    </datalist>
                </label>
            </div>
            <div>
                <label>
                    Preço mín.
                    <input className={styles.inputPrice} name="minPrice" onChange={(e) => setMinPrice(e.target.value)} />
                </label>
                <label>
                    Preço máx.
                    <input className={styles.inputPrice} name="maxPrice" onChange={(e) => setMaxPrice(e.target.value)} />
                </label>
            </div>

            <input className={styles.buttonSave} onClick={() => navigate('/home', { state: { brandSearch, colorSearch, yearSearch, minPriceSearch, maxPriceSearch } })} type="button" value="SALVAR" />
        </form>
    )
}

export default FilterForm;