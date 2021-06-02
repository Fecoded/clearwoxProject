
export const hideUlBox = () => {
    let hideUl = document.getElementById('list-text');
    hideUl.innerHTML= ""
}


export function currencyFormat(num) {
  return '₦' + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
}