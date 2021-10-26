import axios from "axios";
import { urlCart } from "../functions/globals";



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
  catch (error) {
    console.log(error);
  }
}

async function increment(id, quantity) {
  try {
    quantity = quantity + 1;
    return await axios({
      method: 'put',
      url: `${urlCart}/${id}`,
      data: {
        quantity: quantity
      },
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('userToken')
      }
    })
  }
  catch (error) {
    console.log(error);
  }
}

async function decrement(id, quantity) {
  try {
    quantity = quantity - 1;
    if (quantity >= 1) {
      return await axios({
        method: 'put',
        url: `${urlCart}/${id}`,
        data: {
          quantity: quantity
        },
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('userToken')
        }
      })
    }
    else if (quantity == 0) {
      remove(id);
    }
  }
  catch (error) {
    console.log(error);
  }
}


async function remove(id) {
  try {
    return await axios({
      method: 'delete',
      url: `${urlCart}/${id}`,
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('userToken')
      }
    })
  }
  catch (error) {
    console.log(error);
  }
}



export default {
  add,
  checkProduct,
  increment,
  decrement,
};