import {combineReducers} from 'redux'
import ProductReducer from './product'
import CategoryReducer from './category'
import ChoosenCategoryReducer from './choosenCategory'
import ModelReducer from './model'

const RootReducer = combineReducers ({
    // Danh sách state lưu trữ trên store
    products: ProductReducer,
    categories: CategoryReducer,
    choosenCategory: ChoosenCategoryReducer,
    model: ModelReducer
})


export default RootReducer