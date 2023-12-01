// get input field
function getinput(inputid){
    return document.getElementById(inputid)
}

function calculator(num1, num2) {
    // claculation result show section
    const subtotal = document.getElementById('subtotal')
    const tax = document.getElementById('tax')
    const total = document.getElementById('total')

    // take price
    const price1 =  parseInt(document.getElementById('iprice').innerText) 
    const price2 = parseInt(document.getElementById('cprice').innerText)  

    // calculaton and show result
    const amount = (num1 * price1) + (num2 * price2)
    subtotal.innerText =   amount
    tax.innerText = amount * (10/100)
    total.innerText = parseInt(subtotal.innerText) + parseInt(tax.innerText)
    
}

// click iphone minus button
document.getElementById('iminus').addEventListener('click', () => {
    const iphone_input = getinput('iinput')
    const inum = parseInt(iphone_input.value)
    if (inum > 0){
        iphone_input.value = inum - 1

        const casenumber = parseInt(getinput('cinput').value)
        
        calculator(inum - 1, casenumber)
    }
    
})

// click iphone pluss button
document.getElementById('ipluss').addEventListener('click', () => {
    const iphone_input = getinput('iinput')
    const inum = parseInt(iphone_input.value)
    iphone_input.value = inum + 1

    const casenumber = parseInt(getinput('cinput').value)    

    calculator(inum+1, casenumber)
    
})

// click case minus button
document.getElementById('cminus').addEventListener('click', () => {
    const case_input = getinput('cinput')
    const cnum = parseInt(case_input.value)
    if (cnum > 0){
        case_input.value = cnum - 1

        const iphonenumber = parseInt(getinput('iinput').value)
        
        calculator(iphonenumber, cnum-1)
    }
})

// click case pluss button
document.getElementById('cpluss').addEventListener('click', () => {
    const case_input = getinput('cinput')
    const cnum = parseInt(case_input.value)
    
    case_input.value = cnum + 1

    const iphonenumber = parseInt(getinput('iinput').value)

    calculator(iphonenumber, cnum+1)
    
    
})

// buy button 
document.getElementById('buy_btn').addEventListener('click', () => {
    const subtotal = document.getElementById('subtotal')
    const tax = document.getElementById('tax')
    const total = document.getElementById('total')
    alert(
        `
        Subtotal price = $${subtotal.innerText}
        Total Tax = $${tax.innerText}
        Total price = $${total.innerText}
        `
    )

    subtotal.innerText = '00'
    tax.innerText = '00'
    total.innerText = '00'

    getinput('iinput').value ='0'
    getinput('cinput').value ='0'
})