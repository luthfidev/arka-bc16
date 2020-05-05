function validation(){
    let username = 'as@dasdas'
    let password = '122s'   
    
    const isUsername = username.length <= 5 ? 'username must more than 5 character': 'True'
    console.log(isUsername)
    const isPassword = password.length <= 8 ? 'password must more than 8 character': 'True'
    console.log(isPassword)

    const regexAlpha = /^[a-zA-Z0-9]*$/
    var regexUsername = regexAlpha.test(username)
    if(regexUsername == false)
    {
        console.log('username must be alphanumeric')
        return false;
    }
  

}

//pembahasan
/* const validate = {
    username: (string='') => {
      return RegExp(/[A-Za-z0-9]{5,}/g).test(string)
    },
    password: (string) => {
      return string.length === 8 ? true : false
    }
  } */

module.exports = validation