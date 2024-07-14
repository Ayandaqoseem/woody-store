import { createSlice } from "@reduxjs/toolkit";


// function getCartQuantityById(products, id) {
//     for (let i = 0; i < products.length; i++) {
//       if (products[i].id === id) {
//         return products[i].cartQuantity;
//       }
//     }
//     return 0;
//   }

const initialState = {
    items: localStorage.getItem("carts") ? JSON.parse(localStorage.getItem("carts")) : [],
    statusTab: false
}

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action){
        const {productId, quantity} = action.payload;
        const indexProductId = (state.items).findIndex(item => item.productId === productId);
        if(indexProductId >= 0){
            state.items[indexProductId].quantity += quantity;
        }else{
            state.items.push({productId, quantity});
        }
        localStorage.setItem("carts", JSON.stringify(state.items));
    },
    changeQuantity(state, action){
      const {productId, quantity} = action.payload;
      const indexProductId = (state.items).findIndex(item => item.productId === productId);
      if(quantity > 0){
          state.items[indexProductId].quantity = quantity;
      }else{
          state.items = (state.items).filter(item => item.productId !== productId);
      }
      localStorage.setItem("carts", JSON.stringify(state.items));
  },
  toggleStatusTab(state){
    if(state.statusTab === false){
        state.statusTab = true;
    }else{
        state.statusTab = false;
    }
}
  },
});

export const { addToCart, changeQuantity, toggleStatusTab } = cartSlice.actions;

export default cartSlice.reducer;

