declare namespace OrderPlaceMentNS{
    interface IProps{

        orderList:IOrder[];

        onPlaceOrder:()=>void;

        onAddToCart:(item:IOrder)=>void;

        onRemoveFromCart:(item:IOrder)=>void;

        totalQuantity:number;


    }
    interface IOrder{
        menuId:string;

        menuName:string;

        currentQuanity?:number;

        Quantity:number;




    }
    interface OrderPlaceMentRelatedState{
        orderList:IOrder[];

        totalQuantity:number;



    }
    interface IState{
        orderPlaceMentRelatedState:OrderPlaceMentRelatedState;
    }
}