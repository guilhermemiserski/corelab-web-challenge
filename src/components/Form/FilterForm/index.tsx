import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { getVehicles } from "../../../lib/api";
import { IVehicle } from "../../../types/Vehicle";

import styles from "../Form.module.scss"


function FilterForm() {
    const [brand, setBrand] = useState("1");
    const [year, setYear] = useState("1");
    const [minPrice, setMinPrice] = useState("1");
    const [maxPrice, setMaxPrice] = useState("1");
    const [vehicles, setVehicles] = useState<IVehicle[]>([]);
    const navigate = useNavigate();


    useEffect(() => {
        const fetchVehicles = async () => {
            const payload = await getVehicles();
            setVehicles(payload);
        };
        fetchVehicles();
    }, []);

    let handleSubmit = async (e: any) => {
        e.preventDefault();
        try {
            let options = {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' },
            };
            fetch("http://localhost:5000/filtrar/" + brand + '/' + year + '/' + minPrice + '/' + maxPrice, options)
                .then(res => res.json())
                .then(json => {
                    console.log(json);
                    setTimeout(() => navigate("/home", { state: json }), 1000);
                })

                .catch(err => console.error('error:' + err));
        } catch (err) {
            console.log(err);
        }
    };




    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <div>
                <label>Marca: </label>
                <input className={styles.input} name="brand" list="brands" onChange={(e) => setBrand(e.target.value)} />
                <datalist id="brands">
                    {vehicles.map((vehicle, index) => <option key={index} value={vehicle.brand}></option>)}
                </datalist>
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

            <input className={styles.buttonSave} type="submit" value="SALVAR" />
        </form>
    )
}

export default FilterForm;