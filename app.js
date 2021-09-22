'use strict'

// leave global for all to reference later on.

let hours= ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'] //Array for hours
let tableElement= document.getElementById("Stores")  // Id to call out specific place in HTML page of where to plug in.

function StoreSales(storeName, minCust, maxCust, avgCookieSale) {
    this.storeName= storeName;
    this.minCust= minCust;
    this.maxCust= maxCust;
    this.avgCookieSale= avgCookieSale;
    this.totalCookieSold= 0;
    this.cookieSoldArray= [];
}

function randoNumber(minCust, maxCust) {  // function for random number generator
    return Math.floor(Math.random() * (maxCust - minCust +1)) + minCust;
}

StoreSales.prototype.cookiesPurchased= function() {  // function for getting avg. cookies/hour
    randoNumber(this.minCust, this.maxCust) 
    for (let i= 0; i < hours.length; i++) {
        this.cookieSoldArray.push(Math.ceil(randoNumber(this.minCust, this.maxCust) * this.avgCookieSale))   
        this.totalCookieSold += this.cookieSoldArray[i];
        console.log(this.totalCookieSold, "this is total sold")
    }
}

StoreSales.prototype.render= function() {  // function to return values and for printing to HTML
    makeTableHeader();
    this.cookiesPurchased()
    const tableRow= document.createElement('tr');
    const tableData= document.createElement('td');
    const tableFoot= document.createElement('tfoot')
    tableData.textContent= this.storeName;
    tableRow.appendChild(tableData);
    tableFoot.appendChild(tableData);
    for (let i=0; i < this.cookieSoldArray.length; i++) {
        let td = document.createElement("td");
        td.textContent= this.cookieSoldArray[i] + " Cookies";
        tableRow.appendChild(td);
    }
    const rowTotal= document.createElement('th');
    rowTotal.textContent= this.totalCookieSold;
    tableRow.appendChild(rowTotal);
    tableElement.appendChild(tableRow);
    const rowFtTotal= document.createElement('tfoot');
    rowFtTotal.textContent= this.totalCookieSold;
    tableFoot.appendChild(rowFtTotal);
    tableElement.appendChild(tableFoot);    
}

let Seattle= new StoreSales('Seattle', 23, 65, 6.3);
Seattle.render()

let Tokyo= new StoreSales('Tokyo', 3, 24, 1.2);
Tokyo.render()

let Dubai= new StoreSales('Dubai', 11, 38, 3.7);
Dubai.render()

let Paris= new StoreSales('Paris', 20 , 38, 2.3);
Paris.render()

let Lima= new StoreSales('Lima', 2, 16, 4.6);
Lima.render()


function makeTableHeader() {
    const tableRow= document.createElement('tr');
    let tableHeader= document.createElement('th');
    tableHeader.textContent= 'Locations';
    tableRow.appendChild(tableHeader);
    for (let i=0; i < hours.length; i++) {
        tableHeader= document.createElement('th');
        tableHeader.textContent= hours[i];
        tableRow.appendChild(tableHeader);
    }
    tableHeader= document.createElement('th');
    tableHeader.textContent= 'Location Totals';
    tableRow.appendChild(tableHeader);
    tableElement.appendChild(tableRow);
}

function makeTableHeader() {
    const tableFoot= document.createElement('tr');
    let tableFooter= document.createElement('tfoot');
    tableFooter.textContent= 'Totals per Stores';
    tableFoot.appendChild(tableFooter);
    for (let i=0; i < null; i++) {
        tableFooter= document.createElement('tfoot');
        tableFooter.textContent= totalCookieSold;
        tableFoot.appendChild(tableFooter);
    }
    tableFooter= document.createElement('tfoot');
    tableFooter.textContent= "null";
    tableFoot.appendChild(tableFooter);
    tableElement.appendChild(tableFoot);
}


//     Code below from initial beginning of assignment.
// let limaList= document.getElementById("Lima")
// let Lima = {  
//     storeName: 'Lima',
//     minCust: 2,     
//     maxCust: 16,            
//     avgCookieSale: 4.6,     
//     randoNumber: function () {  
//         return Math.floor(Math.random() * (this.maxCust - this.minCust +1)) + this.minCust;
//     },
//     cookiesPurchased: function() {  
//         this.randoNumber() 
//         for (let i =0; i < hours.length; i++) {
//         this.cookieSoldArray.push(Math.ceil(this.randoNumber() * this.avgCookieSale))   
//         }
//     },
//         cookieSoldArray: [],  
//         render: function() {
//             this.cookiesPurchased()
//             for (let i=0; i < this.cookieSoldArray.length; i++) {
//                 let li = document.createElement("li");
//                 li.innerText=hours[i] + ": " + this.cookieSoldArray[i] + " Cookies";
//                 limaList.appendChild(li);
//             }
//         }
// }
// Lima.render()