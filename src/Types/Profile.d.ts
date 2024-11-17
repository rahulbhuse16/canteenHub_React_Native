declare namespace ProfileNS{
    interface IProps{
        userName:string;

        userRole:AuthenticationNS.IRole;

        onLogout:()=>void;
    }
}