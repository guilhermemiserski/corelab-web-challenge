import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../Form.module.scss"

interface IEditForm {
    id: string;
    nameDefault: string;
    descriptionDefault: string;
    brandDefault: string
    plateDefault: string;
    yearDefault: number;
    colorDefault: string;
    priceDefault: number;
}

function EditForm({ id, nameDefault, descriptionDefault, brandDefault, plateDefault, yearDefault, colorDefault, priceDefault }: IEditForm) {

    const yearString = yearDefault as unknown as string;
    const priceString = priceDefault as unknown as string;

    const [name, setName] = useState(nameDefault);
    const [description, setDescription] = useState(descriptionDefault);
    const [brand, setBrand] = useState(brandDefault);
    const [color, setColor] = useState(colorDefault);
    const [plate, setPlate] = useState(plateDefault);
    const [price, setPrice] = useState(priceString);
    const [year, setYear] = useState(yearString);
    const navigate = useNavigate();



    let handleSubmit = async (e: any) => {
        e.preventDefault();
        try {
            let options = {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    name,
                    price,
                    description,
                    year,
                    color,
                    brand,
                    plate
                })
            };

            fetch("http://localhost:5000/veiculos/" + id, options)
                .then(res => res.json())
                .then(json => console.log(json))
                .catch(err => console.error('error:' + err));
        } catch (err) {
            console.log(err);
        }

        setTimeout(() => navigate("/"), 1000);
    };

    return (
        <form onSubmit={handleSubmit} className={styles.form}>
            <div>
                <label>
                    Nome:
                    <input className={styles.input} type="text" placeholder={nameDefault} onChange={(e) => setName(e.target.value)} />
                </label>
            </div>
            <div>
                <label>
                    Descrição:
                    <input className={styles.input} type="text" placeholder={descriptionDefault} onChange={(e) => setDescription(e.target.value)} />
                </label>
            </div>
            <div>
                <label>
                    Marca:
                    <input className={styles.input} type="text" placeholder={brandDefault} onChange={(e) => setBrand(e.target.value)} />
                </label>
            </div>
            <div>
                <label>
                    Cor:
                    <input className={styles.input} type="color" list="" placeholder={colorDefault} onChange={(e) => setColor(e.target.value)} />
                </label>
            </div>
            <div>
                <label>
                    Ano:
                    <input className={styles.input} type="number" placeholder={yearString} onChange={(e) => setYear(e.target.value)} />
                </label>
            </div>
            <div>
                <label>
                    Placa:
                    <input className={styles.input} type="text" placeholder={plateDefault} onChange={(e) => setPlate(e.target.value)} />
                </label>
            </div>
            <div>
                <label>
                    Preço:
                    <input className={styles.input} type="number" placeholder={priceString} onChange={(e) => setPrice(e.target.value)} />
                </label>
            </div>

            <input className={styles.buttonSave} type="submit" value="SALVAR" />
        </form>
    )
}

export default EditForm;