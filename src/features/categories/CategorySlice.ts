import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

//Quais elementos quero buscar e como vamos tratar, representar estado categoria -> obj
interface Category {
    id: string;
    name: string;
    is_active: boolean;
    created_at: string;
    updated_at: null | string;
    deleted_at: null | string;
    description: null | string;
}

export const category : Category = {
    id:"001",
    name:'gustavo',
    description:'Aleatorio',
    is_active: true,
    deleted_at: null,
    created_at: "2022-08-15T10:59:09+0000",
    updated_at: null
}

//aqui já colocam uma tipagem para nós de forma automatica, não precisa da interface caso esteja tudo certo
export const initialState = [
         category,
         {
            ...category,
            id:"002",
            name:'leo',
        }
        ,
        {
            ...category,
            id:"003",
            name:'don quixote',
        }
 ,
]

const categoriesSlice = createSlice({
    name: 'categories',
    initialState: initialState,
    reducers: {
        createCategory(state,action){},
        updateCategory(state,action){},
        deletedCategory(state,action){},
    }
});

export const selectCategories = (state: RootState) => state.categories;
export const selectCategoriesById = (state: RootState, id: string) => 
state.categories.find(category => category.id === id);
export default categoriesSlice.reducer;