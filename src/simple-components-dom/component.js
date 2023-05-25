export default((text='Hellow friends----')=>{
const element =document.createElement('H1');
element.innerHTML=text
element.style.cssText=`display:grid; place-content: center;`
return element
})