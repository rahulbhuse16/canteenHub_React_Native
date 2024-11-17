declare namespace TextInputNS{
    interface IProps{
        value:string;

        onChangeText:(...args:any)=>void;

        height?:import('react-native').ViewStyle['height'];

        width?:import('react-native').ViewStyle['width'];

        
    }
}