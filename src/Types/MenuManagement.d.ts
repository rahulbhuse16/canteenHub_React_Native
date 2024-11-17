declare namespace MenuManageMentNS{
    interface IProps{

        onAdd:()=>void;

        onEdit:(item:IMenu)=>void;

        onDelete:(item:IMenu)=>void;

        menuList:IMenu[];

        isAddItemOpen:boolean;

        onAddToList:()=>void;

        menuName:string;

        menuId:string;

        quantity:number;

        setMenuName:()=>void;

        setMenuId:()=>void;

        setQuantity:()=>void;

        onCloseItem:()=>void;





    }
    interface IMenu{
        menuName:string;

        menuId:string;

        quantity:number;

        
    }
    interface MenuManageMentRelatedState{
        menuList:IMenu[];

        isAddItemOpen:boolean;

        

        menuName:string;

        menuId:string;

        quantity:number;
    }
    interface IState{
        MenuManageMentRelatedState:MenuManageMentRelatedState;
    }
}