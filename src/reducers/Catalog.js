const initState = [
    {
        id: 0,
        name: 'HP Chromebook 11',
        image: 'https://cdn-amz.fadoglobal.io/images/I/81b0LvcpIPL.jpg',
        description: 'Sản phẩm của HP thế hệ 11',
        category: 'Laptop',
        price: 200,
        inventory: 10

    },
    {
        id: 1,
        name: 'HP Chromebook 14',
        image: 'https://cdn-amz.fadoglobal.io/images/I/81bYnMz1BbL.jpg',
        description: 'Sản phẩm của HP thế hệ 14',
        category: 'Laptop',
        price: 350,
        inventory: 20

    },
    {
        id: 2,
        name: 'Asus Chromebook',
        image: 'https://cdn-amz.fadoglobal.io/images/I/81U7Nn4gplL.jpg',
        description: 'Sản phẩm của Asus',
        category: 'Laptop',
        price: 299,
        inventory: 15

    }
];
const Catalog = (state = initState, action) => {
    switch (action.type) {
        default:
            return [...state];
    }
}
export default Catalog;