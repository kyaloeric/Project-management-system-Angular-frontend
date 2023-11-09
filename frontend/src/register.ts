let first_name = document.getElementById('first_name') as HTMLInputElement
let last_name = document.getElementById('last_name') as HTMLInputElement
let email = document.getElementById('email') as HTMLInputElement
let password = document.getElementById('password') as HTMLInputElement
let confirm_password = document.getElementById('confirm_password') as HTMLInputElement
let eror_container = document.getElementById('small-error') as HTMLElement
let reg_form = document.getElementById('registration-form') as HTMLFormElement

function showToast(message:string, type = 'error') {
    const toast = document.querySelector('.toast') as HTMLElement;
    const messageElement = document.getElementById('error-message') as HTMLElement;
  
    messageElement.innerText = message;
  
    if (type === 'error') {
      toast.classList.add('error-toast');
    } 
  
    toast.style.display = 'block';
    setTimeout(() => {
      toast.style.display = 'none';
      toast.classList.remove('error-toast');
    }, 3000); 
  }
  
  

reg_form.addEventListener('submit', (event)=>{
    event.preventDefault()

    let Fname = first_name.value
    let Lname = last_name.value
    let user_email = email.value
    let pass = password.value
    let confirm_pass = confirm_password.value

    let state = Fname.trim() != '' && Lname.trim() != '' &&  user_email.trim() != '' &&  pass.trim() != '' && confirm_pass.trim() != ''
 
    if(state){
        if(pass == confirm_pass){

            const promise = new Promise <{error:string, message:string}> ((resolve, reject)=>{
                fetch('http://localhost:5000/user/register', {
                    headers:{
                        'Accept': 'application/json',
                        'Content-type': 'application/json'
                    },
                    method: "POST",
                    body: JSON.stringify({
                        "first_name": Fname,
                        "last_name": Lname,
                        "email": user_email,
                        "password": pass
                    })
                }).then((res=>res.json())).then(data=>{
                    
                    if (data.error) {
                        showToast(`${data.error}`);

                    }
                    else{
                        location.href = 'login.html'
                    }
                    
                    console.log(data);
                
                    resolve(data) 
                }).catch(error=>{
                    console.log(error);
                })
            })

         
        }else{
            showToast('Password mismatch');
        }
    }
})