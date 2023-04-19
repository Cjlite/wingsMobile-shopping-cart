export const addItem=(mobile)=>{
    return{
        type:"ADDITEM",
        payload:mobile
    }
}

export const delItem=(mobile)=>{
    return{
        type:"DELITEM",
        payload:mobile
    }
}