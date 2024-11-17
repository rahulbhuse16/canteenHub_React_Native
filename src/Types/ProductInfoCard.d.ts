declare namespace ProductInfoCard{
    interface IProps{
        productName:string;

        quantity:number;

        productId:string;

        productImage:string;

        /**
         * callback for adding item to cart
         * @param item 
         * @returns 
         */

        onAddToCart:(item:IProduct)=>void;
        /**
         * callback for removing item to cart
         * 
         * @param item 
         * @returns 
         */

        onRemoveFromCart:(item:IProduct)=>void;

    }
    interface IProduct{
        productName:string;

        quantity:number;

        productId:string;

        productImage:string;

    }
}