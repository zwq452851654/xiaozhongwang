export const testPhoneHandle = (phone)=>{
    if(/^1[3456789]\d{9}$/.test(phone)){
        return true
    }else{
        return false
    }
}