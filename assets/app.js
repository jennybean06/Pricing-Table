const toggler = document.querySelector("#toggle");
const basicAnnualPrice = document.getElementById ("basic-price");
const proAnnualPrice = document.getElementById ("pro-price");
const masterAnnualPrice = document.getElementById ("master-price");

toggler.addEventListener("change", ()=> {
  if (toggler.checked) {
    basicAnnualPrice.innerHTML =`$199.99`;
    proAnnualPrice.innerHTML =`$249.99`;
    masterAnnualPrice.innerHTML =`$399.99`;
  } else {
    basicAnnualPrice.innerHTML =`$19.99`;
    proAnnualPrice.innerHTML =`$24.99`;
    masterAnnualPrice.innerHTML =`$39.99`;
  }
})