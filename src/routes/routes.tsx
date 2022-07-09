import { Route, Routes } from "react-router-dom"
import AddVehiclesPage from "../pages/AddVehicles"
import EditVehiclesPage from "../pages/EditVehicles"
import FilterVehiclesPage from "../pages/FilterVehicles"
import VehiclesPage from "../pages/Vehicles"

const Rotas = () => {
    return (
        <Routes>
            <Route path="/" element={<VehiclesPage />}></Route>
            <Route path="/home" element={<VehiclesPage />}></Route>
            <Route path="/adicionar" element={<AddVehiclesPage />}></Route>
            <Route path="/editar" element={<EditVehiclesPage />}></Route>
            <Route path="/filtrar" element={<FilterVehiclesPage />}></Route>

        </Routes>
    )
}

export { Rotas }