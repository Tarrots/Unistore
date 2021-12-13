import React, { useState, useEffect } from 'react'
import Tags from "./component/Tags"
import ProductBody from './component/ProductBody'
import CatalogApi from 'api/catalogApi'
import Alert from 'components/Alert/Alert'

export default function Products() {

  const [data, setData] = useState(
    {
      status : "ok",
      message : "Request all products successfully",
      data : [
          {
              name : "Laptop MSI Katana GF76",
              memory : "8GB, DDR4 2 khe",
              description : "Moder 15 A11MU (680 VN) là phiên bản trí và làm việc cho người dùng.",
              status : "1",
              catalog : "MSI",
              hardDrive : "SSD 512GB NVMe PCIe",
              os : "Windows 10 Home SL",
              processer : "Intel Core i5 Tiger Lake - 1155G7",
              graphics : "Intel Iris Xe Graphics",
              Wireless : "Bluetooth 5.2, Wi-Fi 6 (802.11ax)",
              battery : "3 cell, 52 Wh",
              image : "https://i.ibb.co/sPJN7wS/image.png",
              productID : 11,
              price : 795.45
          }
      ],
      pagination: {
          page : 40,
          totalPage: 50,
          totalRow: 2
      }

    }
  );

  const [page,setPage] = useState({ page : 2, limit: 6 });

  useEffect(() => {
    const fetchProductList = async () => {
      try {
        const response = await CatalogApi.getAll(page);
        setData(response);
      } catch (error) {
        console.log("Failed to fetch product list ", error);
      }
    }

    fetchProductList();
  },[page])

  const handlePagination = (value) => {
    
    setPage({...page, page: value});
  }

  const addToCart = (data) => {
    const initCart = {
      isActive: false,
      list: [],
      quantity: 0
    }
    let status = false;

    //Create cart if it doesn't exist
    if(localStorage.getItem("cart") === null) {
      localStorage.setItem("cart", JSON.stringify(initCart));
    }

    //Get cart
    const cart = JSON.parse(localStorage.getItem("cart"));

    //Update if product is already
    cart.list.forEach(product => {
      if(product.id === data.productId) {
        console.log("UPDATE AMOUNT");
        product.amount = product.amount + 1;
        cart.quantity += 1;
        cart.isActive = true;
        localStorage.setItem("cart", JSON.stringify(cart));
        status = true;
      }
    })

    //Add product to cart
    if(!status) {
      console.log("ADD PRODUCT TO CART");
      cart.list.push({id: data.productId, amount: 1});
      cart.isActive = true;
      cart.quantity += 1;
      localStorage.setItem("cart", JSON.stringify(cart));
    }

    showAlert();
  }

  const showAlert = () => {
    const alert = document.getElementById('alert');
    document.getElementById('alert').style.display = "block";

    setTimeout(function() {alert.style.display='none'}, 2000);
  }
  
  return (
    <>
      <Alert/>
      <Tags />
      <ProductBody data={data} handlePagination={handlePagination} addToCart={addToCart}/>
    </>
  )
}