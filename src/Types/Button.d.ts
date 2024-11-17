declare namespace ButtonNS{
    interface IProps{
        title:string;

        onClick:(...args:any)=>void;

        backgroundColor?:import('react-native').ViewStyle['backgroundColor'];

        height?:import('react-native').ViewStyle['height'];

        width?:import('react-native').ViewStyle['width'];

        fontSize?:number;

        fontWeight?:'100' | '200' | '300' | '400' | 'bold';

        color?:string;
    }
}