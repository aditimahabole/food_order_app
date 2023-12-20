import * as bcrypt from 'bcrypt';
export const generate_salt = async()=>{
    return await bcrypt.genSalt()
}

export const generate_password = async(password:string,salt:string)=>{
    return await bcrypt.hash(password,salt)
}