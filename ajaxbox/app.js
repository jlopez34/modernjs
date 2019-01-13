document.getElementById('btnCustomer').addEventListener('click', loadCustomer);
document.getElementById('btnCustomers').addEventListener('click', loadCustomers);

function loadCustomer(e){
    const xhr =  new XMLHttpRequest();
    let output = '';
    xhr.open('GET','customer.json',true);
    xhr.onload = function(){
        if(this.status === 200 ){
            const customer = JSON.parse(this.responseText);
            output =
            `<ul>
                <li>Name:${customer.firstName}</li>
                <li>LastName:${customer.lastName}</li>
                <li>phone:${customer.phoneNumber[0].number}</li>
                <li>city:${customer.address.city}</li>            
            </ul>`;
        }

        document.getElementById('custumer').innerHTML = output;
    }

    xhr.send();
}

function loadCustomers(e){
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'customers.json', true);
    let outCustumer = '';
    xhr.onload = function(){
        if(this.status === 200){
            const customers = JSON.parse(this.responseText);           
            customers.forEach(customer => {
               const output = `<ul>
                <li>Name:${customer.firstName}</li>
                <li>LastName:${customer.lastName}</li>
                <li>phone:${customer.phoneNumber[0].number}</li>
                <li>city:${customer.address.city}</li>            
            </ul>`;
               outCustumer += output;
            });        
        
            document.getElementById('custumers').innerHTML = outCustumer;
        }
    }

    xhr.send();
}