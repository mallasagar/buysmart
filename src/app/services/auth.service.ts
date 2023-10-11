
export class authenticationService  {

    private loggedIn = false;
    // auth(username: string):boolean{
        
        //     console.log(username.loginemail)
        //     console.log(username.loginpassword)
        // }


        
        userstate:string='user'
        auth(username:any): string {
            if (username.loginemail === 'admin@gmail.com' &&  username.loginpassword=== 'admin') {
                // this.userstate='admin';
                console.log('Authentication');
          return this.userstate='admin';
        }
        // this.userstate='user';
        console.log('unAuthentication')
        return this.userstate='user';
      }




 



}