import {useContext} from 'react'
import CategoriasContext from '../context/CategoríasProvider'

const useCategorias = () => {
    return useContext(CategoriasContext)
}

export default useCategorias