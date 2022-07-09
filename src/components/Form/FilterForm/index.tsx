import { useState } from "react";
import { useNavigate } from "react-router-dom";

import styles from "../Form.module.scss"


function FilterForm() {
    const [brand, setBrand] = useState("");
    const [color, setColor] = useState("");
    const [minPrice, setMinPrice] = useState("");
    const [maxPrice, setMaxPrice] = useState("");
    const [year, setYear] = useState("");
    const navigate = useNavigate();


    return (
        <form className={styles.form}>
            <div>
                <label>Marca: </label>
                <input className={styles.input} name="brand" list="brands" onChange={(e) => setBrand(e.target.value)} />
                <datalist id="brands">
                    <option value="Volvo"></option>
                    <option value="VW"></option>
                </datalist>
            </div>
            <div>
                <label>
                    Cor:
                    <input className={styles.input} name="color" list="colors" onChange={(e) => setColor(e.target.value)} />
                    <datalist id="colors">
                        <option value="Azul"></option>
                        <option value="Preto"></option>
                    </datalist>
                </label>
            </div>
            <div>
                <label>
                    Ano:
                    <input className={styles.input} name="year" list="years" onChange={(e) => setYear(e.target.value)} />
                    <datalist id="years">
                    <option value="2010"></option>
                    <option value="2011"></option>
                </datalist>
                </label>
            </div>
            <div>
                <label>
                    Preço mín.
                    <input className={styles.inputPrice} name="price" onChange={(e) => setMinPrice(e.target.value)} />
                </label>
                <label>
                    Preço máx.
                    <input className={styles.inputPrice} name="price" onChange={(e) => setMaxPrice(e.target.value)} />
                </label>
            </div>

            <input className={styles.buttonSave} type="submit" value="SALVAR" />
        </form>
    )
}

export default FilterForm;