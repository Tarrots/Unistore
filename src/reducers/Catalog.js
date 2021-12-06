
/*
-- API chưa render được

const fetchAPI = async () => {
    try {
        const pagram = {
            _page  : 1,
            _limit : 3,
        };
        const reponse = await catalogAPI.getAll(pagram);

        localStorage.setItem('catalog',JSON.stringify(await Object.assign({}, reponse.data)))
    } catch (error) {
        console.log(error) 
    }
  }
 
fetchAPI();

var catalog = JSON.parse(localStorage.getItem('catalog'))
const initState = catalog ? catalog : []
console.log(initState)
*/

var initStateAPI = {
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
        },
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
            productID : 12,
            price : 795.45
        },
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
            productID : 13,
            price : 795.45
        }
    ],
    pagination: {
        page : 1,
        totalPage: 2,
        totalRow: 2
    }

}

const initState = Object.assign({}, initStateAPI.data)
localStorage.setItem('catalog',JSON.stringify(initState))

const Catalog = (state = initStateAPI, action) => {
    switch (action.type) {
        default:
            return state;
    }
}
export default Catalog;