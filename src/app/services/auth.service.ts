
export class authenticationService  {

    private loggedIn = false;  
        
    userstate:string='user'
    auth(username:string) {
            if (username='admin'){
              console.log('you are admin')
            
              const state='admin'
              // return this.userstate=localStorage.setItem('user',state)
              return localStorage.setItem('user',state);
            }

            else if(username='user') {
              console.log('you are users not admin')
              // return this.userstate='user';
              
              return 
        }  
            else{
              const state='invalid'
              localStorage.setItem('user',state);
            }
      }
           
      
    }
 



