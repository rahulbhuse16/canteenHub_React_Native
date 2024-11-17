declare namespace OrderManageMentNS{

    interface IProps{
        orderList:any;
        

        onUpdateOrderStatus:(item:ProductInfoCard.IProduct)=>void;

       



    }

    interface IOrderManageMent{

        menuId:string;
    }
    


    interface OrderManageMentRelatedState{
        orderList:any;

        orderStatus:orderStatus;
    }
    type orderStatus='Recieved' | 'Picked' | 'Prepared'
}