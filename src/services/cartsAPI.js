import axios from "axios";
import { urlCart }from "../functions/globals";



function add(product) {
    axios({
        method: 'post',
        url: urlCart,
        data: product,
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('userToken')
        }
      })
}

async function checkProduct(id, product) {
    try {
        return axios({
        method: 'get',
        url: `${urlCart}/?user_id=${id}&product=${product}`,
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('userToken')
        }
      }).then(response => {
        if (response.data.length != 0) {
          return response.data; 
        }
      })
    }
   catch(error) {
      console.log(error);
    }
}

function increment(id, quantity) {
    try {
      quantity = quantity + 1;
      return axios({
      method: 'put',
      url: `${urlCart}/${id}`,
      data: {
        quantity: quantity
      },
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('userToken')
      }
    }).then(response => {
      console.log(response);
      console.log(quantity);
    })
    }
    catch(error) {
      console.log(error);
    }
}

export default {
    add,
    checkProduct,
    increment
};