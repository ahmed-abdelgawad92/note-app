export class JWT{
    private storageKey: string = 'ACCESS_TOKEN';
    protected rawToken: string;
    protected payload: Object; 
    protected header: Object;
    //rawToken setter & getter
    setRawToken(value){
        this.rawToken = value;
        console.log(this.rawToken);
        
    }
    getRawToken(){
        return this.rawToken;
    }
    //payload setter & getter
    setPayload(value){
        this.payload = JSON.parse(window.atob(value.replace(/-/g, '+').replace(/_/g, '/')));
    }
    getPayload(){
        return this.payload;
    }
    //header setter & getter
    setHeader(value){
        this.header = JSON.parse(window.atob(value.replace(/-/g, '+').replace(/_/g, '/')));
    }
    getHeader(){
        return this.header;
    }
    // save token in the localstorage and fill class attributes
    saveTokenToStorage(token: string){
        localStorage.setItem(this.storageKey,token);
        let tokenParts = token.split('.');
        this.setRawToken(token);
        this.setHeader(tokenParts[0]);
        this.setPayload(tokenParts[1]);       
    }
    // retrieve token from localstorage and fill class attributes
    getTokenFromStorage(){
        let token = localStorage.getItem(this.storageKey);
        let tokenParts = token.split('.');
        this.setRawToken(token);
        this.setHeader(tokenParts[0]);
        this.setPayload(tokenParts[1]);
    }
    //remove all token details during logout
    deleteToken(){
        this.rawToken = null;
        this.payload = null;
        this.header = null;
        localStorage.removeItem(this.storageKey);
    }
    //return true if the token already expired
    isExpired(){
        return this.payload['exp'] < Math.round((new Date()).getTime() / 1000);
    }
    //return true only if the user is authenticated
    isAuthenticated(){
        if(this.rawToken != null && this.payload != null){
            return (this.isExpired()) ? false : true;
        }
        if(localStorage.getItem(this.storageKey) != null){
            this.getTokenFromStorage();
            return (this.isExpired()) ? false : true;
        }
        return false; 
    }
}