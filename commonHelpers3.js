import"./assets/modulepreload-polyfill-ec808ebb.js";/* empty css                      */import{i}from"./assets/vendor-651d7991.js";const h=document.querySelector(".form"),d=e=>{e.preventDefault();const{delay:t,step:o,amount:s}=e.currentTarget.elements,r=s.value,c=Number(t.value),l=o.value;Array.from({length:r}).forEach((g,a)=>{const u=a+1,p=c+l*a;f(u,p).then(({position:n,delay:m})=>{i.show({message:`✅ Fulfilled promise ${n} in ${m}ms`,position:"topRight",color:"green"})}).catch(({position:n,delay:m})=>{i.show({message:`❌ Rejected promise ${n} in ${m}ms`,position:"topRight",color:"red"})})}),e.currentTarget.reset()};h.addEventListener("submit",d);const f=(e,t)=>new Promise((o,s)=>{const r=Math.random()>.3;setTimeout(()=>{r?o({position:e,delay:t}):s({position:e,delay:t})},t)});
//# sourceMappingURL=commonHelpers3.js.map
