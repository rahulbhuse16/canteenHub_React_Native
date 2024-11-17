declare namespace AuthenticationNS{
    interface IProps{

        userName:string;

        password:string;

        role:IRole;

        onLogin:()=>void;
        
        onRegister:()=>void;

        setUserName:(name:string)=>void;

        setPassword:(password:string)=>void;

        onSelectRole:(role:IRole)=>void;
    }
    type IRole='ADMIN' | 'STUDENT' | 'OTHER'

    interface authRelatedState {
        userName:string;

        password:string;

        role:IRole;

    }
    interface IState{
        authRelatedState:authRelatedState;
    }
}