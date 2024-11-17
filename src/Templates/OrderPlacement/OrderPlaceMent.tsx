import React from "react";
import { View, Pressable, StyleSheet, FlatList } from "react-native";
import Typography from "../../Atoms/Typography/Typography";
import { MaterialIcons } from "@expo/vector-icons";
import Button from "../../Atoms/Button/Button";
import { useAppSelector } from "../../Redux/store";
const OrderPlaceMentTemp: React.FC<OrderPlaceMentNS.IProps> = ({
    orderList,
    onAddToCart,
    onRemoveFromCart,
    onPlaceOrder,


}) => {
    const currentList=useAppSelector(state=>state.orderinfo.orderPlaceMentRelatedState.orderList)

    const renderItem = ({ item }: { item: OrderPlaceMentNS.IOrder }) => {

        const currentMenu=currentList.find((menu)=>menu.menuId===item.menuId)
        return (
            <View style={{
                paddingHorizontal: 10,
                paddingVertical: 10,
                backgroundColor: '#F3E6F4',

                borderRadius: 4
            }}>
                <View style={
                    styles.menuContainer
                }>
                    <View style={styles.menuItem}>
                        <Typography
                            text="MenuID"
                            color="#870091"
                        />
                        <Typography
                            text={item.menuId}
                        />

                    </View>

                    <View style={styles.menuItem}>
                        <Typography
                            text="MenuName"
                            color="#870091"
                        />
                        <Typography
                            text={item.menuName}
                        />

                    </View>
                    <View style={styles.menuItem}>
                        <Typography
                            text="Quantity"
                            color="#870091"
                        />
                        <Typography
                            text={currentMenu?.Quantity}
                        />

                    </View>
                    <View style={
                        {
                            marginLeft: 45,
                            flexDirection: "row",
                            gap: 12
                        }
                    }>
                        <Pressable onPress={() => { onAddToCart(item) }}>
                            <MaterialIcons name="add-circle" size={24} color="red" />
                        </Pressable>
                        <Pressable onPress={() => { onRemoveFromCart(item) }}>
                            <MaterialIcons name="remove-circle" size={24} color="gray" />
                        </Pressable>
                    </View>


                </View>

            </View>

        )
    }
    return (
        <View style={styles.container}>
            <FlatList
                data={orderList}
                renderItem={renderItem}
                ItemSeparatorComponent={() => {
                    return (
                        <View style={{
                            height: 1,
                            backgroundColor: '#DEDEDE'
                        }}>

                        </View>


                    )
                }}
            />
            <View style={{
                alignSelf:"center",
                marginVertical:12
            }}>
            <Button
                title="Place Order"
                onClick={onPlaceOrder}
                backgroundColor={'purple'}
                width={320}
                height={50}
                color="white"
                fontSize={16}
                fontWeight="bold"
                
            />

            </View>

        </View>
    )



}
export default OrderPlaceMentTemp;
const styles = StyleSheet.create({
    menuContainer: {
        flexDirection: 'row',
        gap: 12,
        alignItems: "center"

    },
    menuItem: {
        gap: 2
    },
    container: {
        flex: 1
    }
})