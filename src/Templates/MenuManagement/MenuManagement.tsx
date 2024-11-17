import React from "react"
import { FlatList, Modal, Pressable, StyleSheet, View } from "react-native"
import Typography from "../../Atoms/Typography/Typography"
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Ionicons from '@expo/vector-icons/Ionicons';
import Button from "../../Atoms/Button/Button";
import AntDesign from '@expo/vector-icons/AntDesign';
import Textinput from "../../Atoms/Textinput/Textinput";
const MenuManageMentTemp: React.FC<MenuManageMentNS.IProps> = ({
    menuList,
    onAdd,
    onDelete,
    onEdit,
    onAddToList,
    setMenuId,
    setMenuName,
    setQuantity,
    isAddItemOpen,
    onCloseItem,
    menuId,
    menuName,
    quantity
}) => {

    const renderItem = ({ item }: { item: MenuManageMentNS.IMenu }) => {

        return (
            <View style={{
                paddingHorizontal: 10,
                paddingVertical: 10,
                backgroundColor:'#F3E6F4',
                
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
                            text={item.quantity.toString()}
                        />

                    </View>
                    <View style={
                        {
                            marginLeft:45,
                            flexDirection:"row",
                            gap:12
                        }
                    }>
                        <Pressable onPress={() => { onDelete(item) }}>
                            <MaterialIcons name="delete" size={24} color="red" />
                        </Pressable>
                        <Pressable onPress={() => { onEdit(item) }}>
                            <MaterialIcons name="edit" size={24} color="gray" />
                        </Pressable>
                    </View>


                </View>

            </View>

        )
    }
    return (


        <View style={styles.container}>
            <Pressable 
             style={{
                height:34,
                marginVertical:20,
                alignSelf:'center',
                flexDirection:"row",
                justifyContent:"center",
                gap:10,
                width:160,
                backgroundColor:'purple',
                alignItems:"center",
                borderRadius:6
             }}
             onPress={()=>{
                onAdd()
             }}>
                <Typography
                  text="Add Items"
                  color="white"

                />
                <Ionicons name="add" size={24} color="white" />

            </Pressable>
            <Modal
              visible={isAddItemOpen}
              transparent
              
              >
                <View style={{

                    alignItems:'center',
                    backgroundColor:'rgba(0,0,0,0.85)',
                    marginVertical:130,
                    flex:1
                }}>
                <View style={{
                    backgroundColor:'white',
                    paddingHorizontal:20,
                    gap:6,
                    paddingVertical:20,
                    borderRadius:8,
                    
                }}>
                    <View style={{
                        flexDirection:"row",
                        alignItems:'center',
                        justifyContent:"space-between"
                        
                    }}>
                    <Typography
                     text="New Item"
                     fontSize={16}
                     />
                     <Pressable 
                     style={{
                        height:24,
                        width:24
                     }}
                      onPress={onCloseItem}>
                     <AntDesign name="close" size={24} color="black" />
                     </Pressable>

                    
                       


                     </View>
                     <View style={{
                        gap:6
                     }}>
                        <Typography
                          text="menuId"
                        />
                        <Textinput
                          value={menuId}
                          onChangeText={setMenuId}
                          
                          />

                     </View>
                     <View style={{
                        gap:6
                     }}>
                     <Typography
                          text="menuName"
                        />
                        <Textinput
                          value={menuName}
                          onChangeText={setMenuName}
                          
                          />

                     </View>
                     <View style={{
                        gap:6
                     }}>
                     <Typography
                          text="quanity"
                        />
                        <Textinput
                        //@ts-ignore
                          value={quantity}
                          onChangeText={setQuantity}
                          
                          />

                     </View>
                     <View>
                   </View>
                   <View style={{
                    alignSelf:"center",
                    marginVertical:10
                   }}>
                   <Button
                       title="Submit"
                       backgroundColor={'purple'}
                       color="white"
                       width={150}
                       height={41}
                       onClick={onAddToList}
                       fontSize={16}
                       fontWeight="bold"
                       />
                       </View>
                     </View>
                    


                </View>


              </Modal>

            <FlatList
                data={menuList}
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



        </View>

    )



}

export default MenuManageMentTemp
const styles = StyleSheet.create({
    menuContainer: {
        flexDirection: 'row',
        gap: 12,
        alignItems:"center"

    },
    menuItem: {
        gap: 2
    },
    container: {
        flex: 1
    }
})
