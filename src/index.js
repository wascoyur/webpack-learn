import component from './simple-components-dom/component';

const value=`New Value: ${Math.random()}`
const element = component(value)
document.body.appendChild(element)


console.log(`Hello World!-${value}`);
