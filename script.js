function buy(name,price,bots){
localStorage.setItem('product',name);
localStorage.setItem('price',price);
window.location.href='pay.html';
}
function goForm(){
window.location.href='form.html';
}
function submitForm(){
alert('Order submitted successfully! Contact @surajxmodz');
}