//for Add Item to Cart 
export const AddCart=(product)=> {
  return {
    type:'ADDITEM',
    payload:product
  }
}
export const DelCart=(product)=> {
  return {
    type:'DELITEM',
    payload:product
  }
}