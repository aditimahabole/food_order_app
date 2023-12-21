import * as bcrypt from 'bcrypt';
export const generate_salt = async()=>{
    console.log('Generating salt...')
    return await bcrypt.genSalt()
}
// generating salt then hashing it 
export const generate_password = async(password:string,salt:string)=>{
    console.log('Hashing password...')
    return await bcrypt.hash(password,salt)
}

export const validate_password = async (enteredPassword:string,savedPassword:string,salt:string) => {
    return await generate_password(enteredPassword,salt) === savedPassword;
    
}