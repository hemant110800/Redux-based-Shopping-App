import { createSlice } from '@reduxjs/toolkit'

export const cartSlice = createSlice({
    name: "HandleCart",
    initialState: { cartValues: [], totalItems: 0, changeCart:false},
    reducers: {
        replaceCart(state, action) {
            console.log("Replacement");
            state.cartValues = action.payload.cartValues;
            state.totalItems = action.payload.totalItems;
            console.log(action.payload);
        },
        addItem(state, action) {
            console.log("Adding Items in Cart");
            state.totalItems++;
            state.changeCart=true;
            //instead of filter we can also use find()
            // let filtered_dt = state.cartValues.filter((listItem) => {
            //   return  listItem.id == action.payload.id;
            // })
            // if (filtered_dt.length === 0) {
            //     let new_item = {};
            //     new_item["id"] = action.payload.id;
            //     new_item["title"] = action.payload.title;
            //     new_item["price"] = action.payload.price;
            //     new_item["quantity"] = 1;
            //     new_item["total"] = action.payload.price;
            //     state.cartValues.push(new_item);
            // }
            // else {
            //     state.cartValues = state.cartValues.reduce((prevList, curr) => {
            //         if (curr.id === action.payload.id) {
            //             let new_item = {};
            //             new_item["id"] = action.payload.id;
            //             new_item["title"] = action.payload.title;
            //             new_item["price"] = action.payload.price;
            //             new_item["total"] = curr.total + action.payload.price;
            //             new_item["quantity"] = curr.quantity + 1;
            //             prevList.push(new_item);
            //         }
            //         else {
            //             prevList.push(curr);
            //         }
            //         return prevList;
            //     }, []);
            // }
            let selItem = state.cartValues.find((item) => item.id === action.payload.id);
            console.log(selItem);
            if (!selItem) {
                state.cartValues.push({
                    id: action.payload.id,
                    title: action.payload.title,
                    price: action.payload.price,
                    quantity: 1,
                    total: action.payload.price
                })
            }
            else {
                selItem.quantity = selItem.quantity + 1;
                selItem.total = selItem.total + action.payload.price;
            }

        },
        removeItem(state, action) {
            state.totalItems--;
            state.changeCart=true;
            // state.cartValues = state.cartValues.reduce((prevValue, currValue) => {
            //     if (currValue.id === action.payload.id) {
            //         if (currValue.quantity - 1 != 0) {
            //             let new_item = {};
            //             new_item["id"] = currValue.id;
            //             new_item["title"] = currValue.title;
            //             new_item["price"] = currValue.price;
            //             new_item["total"] = currValue.total - currValue.price;
            //             new_item["quantity"] = currValue.quantity - 1;
            //             prevValue.push(new_item);
            //         }
            //     }
            //     else {
            //         prevValue.push(currValue);
            //     }
            //     return prevValue;
            // }, []);

            let selectedItem = state.cartValues.find((item) => item.id === action.payload.id);
            if (selectedItem.quantity > 1) {
                selectedItem.quantity -= 1;
                selectedItem.total -= selectedItem.price;
            }
            else {
                state.cartValues = state.cartValues.filter((item) => item.id !== action.payload.id);
            }
        }
    }
})


export const cartActions = cartSlice.actions;
