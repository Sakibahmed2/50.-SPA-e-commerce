import { getShoppingCart } from "../component/utilities/fakedb";

const cartProductLoader = async () => {
    const productLoaded = await fetch('products.json')
    const product = await productLoaded.json()

    // if cart data is in database, you have to use async await
    const storedCart = getShoppingCart();
    const savedCart = [];
    for(const id in storedCart){
        const addedProduct = product.find(pd => pd.id === id);
        if(addedProduct){
            const quantity = storedCart[id];
            addedProduct.quantity = quantity;
            savedCart.push(addedProduct)
        }
    }

    return savedCart;
}

export default cartProductLoader;