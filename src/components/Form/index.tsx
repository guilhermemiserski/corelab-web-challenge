import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Form.module.scss"


 function Form() {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [brand, setBrand] = useState("");
    const [color, setColor] = useState("");
    const [plate, setPlate] = useState("");
    const [price, setPrice] = useState("");
    const [year, setYear] = useState("");
    const navigate = useNavigate();

  let handleSubmit = async (e : any) => {
    e.preventDefault();
    try {
        let options = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                name: name,
                price: price,
                description: description,
                year: year,
                color: color
            })
          };
          
          fetch("http://localhost:5000/veiculos", options)
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
                <input className={styles.input} type="text" placeholder='Sandero' name="name" onChange={(e) => setName(e.target.value)} />
            </label>
            </div>
            <div>
            <label>
                Descrição:
                <input className={styles.input} type="text" placeholder='Usado por 3 anos' name="description" onChange={(e) => setDescription(e.target.value)} />
            </label>
            </div>
            <div>
            <label>
                Marca:
                <input className={styles.input} type="text" placeholder='Renault' name="brand" onChange={(e) => setBrand(e.target.value)}/>
            </label>
            </div>
            <div>
            <label>
                Cor:
                <input className={styles.input} type="text" placeholder='Vermelho' name="color" onChange={(e) => setColor(e.target.value)}/>
            </label>
            </div>
            <div>
            <label>
                Ano:
                <input className={styles.input} type="text" placeholder='2016' name="year" onChange={(e) => setYear(e.target.value)} />
            </label>
            </div>
            <div>
            <label>
                Placa:
                <input className={styles.input} type="text" placeholder='XYZ1234' name="plate" onChange={(e) => setPlate(e.target.value)}/>
            </label>
            </div>
            <div>
            <label>
                Preço:
                <input className={styles.input} type="text" placeholder='20000' name="price" onChange={(e) => setPrice(e.target.value)}/>
            </label>
            </div>

            <input className={styles.buttonSave} type="submit" value="SALVAR" />
        </form>
    )
}

export default Form;