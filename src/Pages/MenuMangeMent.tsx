import AsyncStorage from "@react-native-async-storage/async-storage";
import { setMenuManageMentRelatedState } from "../Redux/MenuManageMent";
import { useAppDispatch, useAppSelector } from "../Redux/store"
import MenuManageMentTemp from "../Templates/MenuManagement/MenuManagement"
import React from "react";

const MenuManageMent = () => {



    const authState=useAppSelector(state=>state.authInfo.authRelatedState)

    const menuState = useAppSelector(state => state.menuInfo.MenuManageMentRelatedState);
    const dispatch = useAppDispatch();
    const onCloseItem = () => {
        dispatch(setMenuManageMentRelatedState({
            ...menuState,
            isAddItemOpen: false

        }))

    }
    const onAdd = () => {
        dispatch(setMenuManageMentRelatedState({
            ...menuState,
            isAddItemOpen: true

        }))

    }
    const setMenuId = (menuId: string) => {

        dispatch(setMenuManageMentRelatedState({
            ...menuState,
            menuId: menuId

        }))


    }
    const setMenuName = (menuName: string) => {

        dispatch(setMenuManageMentRelatedState({
            ...menuState,
            menuName: menuName

        }))


    }
    const setQuantity = (quanity: number) => {

        dispatch(setMenuManageMentRelatedState({
            ...menuState,
            quantity: quanity

        }))


    }
    React.useEffect(() => {
        const fetchMenuList = async () => {
            try {
                const storedMenuList = await AsyncStorage.getItem('menuList');
                const menuList = storedMenuList ? JSON.parse(storedMenuList) : [];

                await dispatch(setMenuManageMentRelatedState({
                    ...menuState,
                    menuList: menuList,
                }));
            } catch (error) {
                console.error("Failed to fetch menu list:", error);
            }
        };

        fetchMenuList();
    }, [dispatch]);

    console.log(menuState.menuList)
    const onAddToList = async () => {
        try {

            const storedMenuList = await AsyncStorage.getItem('menuList');
            const menuList = storedMenuList ? JSON.parse(storedMenuList) : [];


            const newMenu = {
                menuId: menuState.menuId,
                menuName: menuState.menuName,
                quantity: menuState.quantity,
            };
            menuList.push(newMenu);


            await AsyncStorage.setItem('menuList', JSON.stringify(menuList));


            await dispatch(
                setMenuManageMentRelatedState({
                    ...menuState,
                    isAddItemOpen: false,
                    menuList: menuList,
                })
            );
        } catch (error) {
            console.error("Failed to add to menu list:", error);
        }
    };

    const onDelete = async(item: MenuManageMentNS.IMenu) => {

        const updatedMenuList = menuState.menuList.filter((m) => m.menuId !== item.menuId);
        
        await AsyncStorage.setItem('menuList',JSON.stringify(updatedMenuList))
        
       await dispatch(
            setMenuManageMentRelatedState({
                ...menuState,
                menuList: updatedMenuList,
            })
        );
    }

    const onEdit = (item: MenuManageMentNS.IMenu) => {
        // Map through the menuList and update the matching item
        const updatedMenuList = menuState.menuList.map((m) =>
            m.menuId === item.menuId
                ? { ...m, menuName: item.menuName, quantity: item.quantity }
                : m
        );
    
        // Dispatch the updated state with the new menu list and other values
        dispatch(
            setMenuManageMentRelatedState({
                ...menuState,
                menuList: updatedMenuList,
                menuId: item.menuId,
                menuName: item.menuName,
                quantity: item.quantity,
                isAddItemOpen: true,
            })
        );
    };
    

    return (
        <MenuManageMentTemp
            menuList={menuState.menuList}
            isAddItemOpen={menuState.isAddItemOpen}
            onCloseItem={onCloseItem}
            onAdd={onAdd}
            setMenuId={setMenuId}
            menuId={menuState.menuId}
            menuName={menuState.menuName}
            quantity={menuState.quantity}
            setMenuName={setMenuName}
            setQuantity={setQuantity}
            onAddToList={onAddToList}
            onDelete={onDelete}
            onEdit={onEdit}

        />
    )
}
export default MenuManageMent;