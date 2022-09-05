import { combineReducers } from "redux";
import home_product from "../Components/modules/Home/store/reducer";
import Shop from "../Components/modules/Shop/store/reducer";
import Blog from "../Components/modules/Blog/store/reducer";
import CartProduct from "../Components/modules/Features/store/reducer";
const rootReducer = combineReducers({
  home_product,
  Shop,
  Blog,
  CartProduct,
});
export default rootReducer;
