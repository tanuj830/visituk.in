module.exports=(price)=>{
    if(typeof price!=="number"){
        price=Number(price);
    }
    
    return new Intl.NumberFormat('en-IN').format(price)
}