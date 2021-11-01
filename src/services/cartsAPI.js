import axios from "axios";
import { urlCart } from "../functions/globals";

function getCart(id) {
  try {
    return axios({
      method: 'get',
      url: `${urlCart}/?user_id=${id}`,
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

function addCart(prod, count) {
    if (count == 0) {
      count = 1
    }
    checkProduct(localStorage.getItem('userId'), prod.id).then(data => {
    if (!data) {
      const product = {	
      "user_id": {
        "id": localStorage.getItem('userId')
      },
      "quantity": count,
      "product": {
        "id" : prod.id
      }
      }
      try {
        add(product);
      }
      catch(error) {
        console.log(error);
      }
    }
    else if (data) {
      increment(data[0].id, data[0].quantity, count);	
    }
    }) 	
}

async function increment(id, quantity, count = 0) {
  try {
    if (count === 0) {
      quantity = quantity + 1;
    }
    else {
      quantity = quantity + count;
    }
    return await axios({
      method: 'put',
      url: `${urlCart}/${id}`,
      data: {
        quantity: quantity
      },
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('userToken')
      }
    }).then(res => {
      return res.data;
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
      }).then(res => {
        return res.data;
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
    }).then(res => {
      return res.data;
    })
  }
  catch (error) {
    console.log(error);
  }
}



export default {
  getCart,
  addCart,
  add,
  checkProduct,
  increment,
  decrement,
  remove
};