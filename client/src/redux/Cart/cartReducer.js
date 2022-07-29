import {
    ADD_ITEM_REQUEST,
    ADD_ITEM_SUCCESS,
    ADD_ITEM_FAILURE,
    INCREASE_QUANTITY,
    DECREASE_QUANTITY,
    ADD_NEW_QUANTITY
  } from "./cartActionTypes";
  
  const intialState = {
    loading: true,
    data: [],
    error: "",
  };
  
  const cartReducer = (state = intialState, action) => {
    switch (action.type) {
      case ADD_ITEM_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case ADD_ITEM_SUCCESS: {
        return {
          loading: false,
          data: action.payload,
          error: "",
        };
      }
      case ADD_ITEM_FAILURE:
        return {
          loading: false,
          data: [],
          error: action.payload,
        };
      case INCREASE_QUANTITY: {
        return {
          loading: false,
          data: action.payload,
          error: "",
        };
      }

      case ADD_NEW_QUANTITY: {
        return {
          loading: false,
          data: action.payload,
          error: "",
        };
      }
  
      case DECREASE_QUANTITY: {
        return {
          loading: false,
          data: action.payload,
          error: "",
        };
      }
  
      default:
        return state;
    }
  };
  
  // function updateQuantity(currentState, action, type) {
  //   if(type == 'new') {
  //     let itemList = itemAdded.cartList;
  //     let addedObj = itemList.find(obj.id);
  //     let cartObj = {};
  //     let totalCartObj = {};

  //     if(addedObj) {
  //       addedObj.quantity = addedObj.quantity < addedObj.stock ? addedObj.quantity + 1 : addedObj.quantity;
  //       addedObj.totalPrice = addedObj.quantity < addedObj.stock ? addedObj.totalPrice + obj.price : addedObj.totalPrice;
  //       itemList.forEach((item,i)=> {
  //         if(item.id == obj.id) {
  //           itemList[i] = addedObj
  //         }
  //       })
  //     }else {
  //       cartObj.id = obj.id;
  //       cartObj.quantity = 1;
  //       cartObj.stock = obj.stock;
  //       cartObj.unitPrice = obj.price;
  //       cartObj.totalItemPrice = obj.price;
  //       itemList.push(cartObj)
  //     }

  //     totalCartObj.cartList = itemList;
  //     totalCartObj.totalPrice = itemList.reduce((acc, curr) => acc + curr.totalPrice, 0);
  //   }
  // }
  
  export default cartReducer;
  