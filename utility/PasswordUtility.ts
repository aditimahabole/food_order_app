import * as bcrypt from 'bcrypt';
export const generate_salt = async()=>{
    console.log('Generating salt...')
    return await bcrypt.genSalt()
}

export const generate_password = async(password:string,salt:string)=>{
    console.log('Hashing password...')
    return await bcrypt.hash(password,salt)
}
// generating salt then hashing it 