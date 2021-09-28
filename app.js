'use strict';

// leave global variables at top for all to reference later on. Leaving at top is a "Best Practice".
let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'] // Global array for hours.
let tableElement = document.getElementById("Stores")  // Id to call out specific place in HTML page of where to plug in.
let tableFooter = document.getElementById("tableFooter") // Made footer global so able call it in 'add new store' function. Added a tablefooter Id on html pg to locate
let storeFormEl = document.getElementById('addStore') // Made for new store creation function, after the footer render function.

function StoreSales(storeName, minCust, maxCust, avgCookieSale) {   // method variables list.
    this.storeName = storeName;
    this.minCust = minCust;
    this.maxCust = maxCust;
    this.avgCookieSale = avgCookieSale;
    this.totalCookieSold = 0;
    this.cookieSoldArray = [];
    StoreSales.all.push(this);
}

function randoNumber(minCust, maxCust) {  // Function for random number generator.
    return Math.floor(Math.random() * (maxCust - minCust +1)) + minCust;
}

StoreSales.prototype.cookiesPurchased = function() {  // Function for getting avg. cookies/hour & total cookies per hour.
    randoNumber(this.minCust, this.maxCust) 
    for (let i = 0; i < hours.length; i++) {
        this.cookieSoldArray.push(Math.ceil(randoNumber(this.minCust, this.maxCust) * this.avgCookieSale))   
        this.totalCookieSold += this.cookieSoldArray[i];
        console.log(this.totalCookieSold, "this is total sold")
    }
}

StoreSales.prototype.render = function() {  // Function to return values.
    makeTableHeader();
    this.cookiesPurchased()
    const tableRow = document.createElement('tr');
    const tableData = document.createElement('td');
    tableData.textContent = this.storeName;
    tableRow.appendChild(tableData);
    for (let i = 0; i < this.cookieSoldArray.length; i++) {
        let td = document.createElement("td");
        td.textContent = this.cookieSoldArray[i] + " Cookies";
        tableRow.appendChild(td);
    }
    const rowTotal = document.createElement('th');
    rowTotal.textContent = this.totalCookieSold;
    tableRow.appendChild(rowTotal);
    tableElement.appendChild(tableRow); 
}
StoreSales.all = [];

let Seattle = new StoreSales('Seattle', 23, 65, 6.3);  // method prototype variables plugged in.
Seattle.render()

let Tokyo = new StoreSales('Tokyo', 3, 24, 1.2);
Tokyo.render()

let Dubai = new StoreSales('Dubai', 11, 38, 3.7);
Dubai.render()

let Paris = new StoreSales('Paris', 20 , 38, 2.3);
Paris.render()

let Lima = new StoreSales('Lima', 2, 16, 4.6);
Lima.render()

function makeTableHeader() {        // Function to create and populate the table with above data.
    const tableRow = document.createElement('tr');
    let tableHeader = document.createElement('th');
    tableHeader.textContent = 'Store Location';
    tableRow.appendChild(tableHeader);
    for (let i = 0; i < hours.length; i++) {
        tableHeader = document.createElement('th');
        tableHeader.textContent = hours[i];
        tableRow.appendChild(tableHeader);
    }
    tableHeader = document.createElement('th');
    tableHeader.textContent = 'Location Totals';
    tableRow.appendChild(tableHeader);
    tableElement.appendChild(tableRow);
}

// function makeTableRow() {
//     const tableRowEL = document.createElement('tr');
//     let tableRow = document.createElement('th');
//     tableHeader.textContent = 'Store Location';
//     tableRow.appendChild(tableHeader);
// }

// function makeTableHeader() {
//     const tableHeader = document.createElement('tr');
//     let tableHeader = document.createElement('th');
//     tableHeader.textContent = 'Store Location';
//     tableRow.appendChild(tableHeader);
//     for (let i = 0; i < hours.length; i++) {
//         tableHeader = document.createElement('th');
//         tableHeader.textContent = hours[i];
// }



function renderFooter() {  // Function to create and populate the footer section of table.
    const tableRow = document.createElement('tr');
    let tableFoot = document.createElement('th');
    tableFoot.textContent = 'Grand Total per Day';
    tableRow.appendChild(tableFoot);
    let grandTotal = 0;
    for (let i = 0; i < hours.length; i++) {
        let sum = 0;
        for (let j = 0; j < StoreSales.all.length; j++) {
            sum = sum + StoreSales.all[j].cookieSoldArray[i];
            grandTotal = grandTotal + StoreSales.all[j].cookieSoldArray[i];
        }
        tableFoot = document.createElement('th');
        tableFoot.textContent = sum;
        tableRow.appendChild(tableFoot);
    }    
    tableFoot = document.createElement('th');
    tableFoot.textContent = grandTotal;
    tableRow.appendChild(tableFoot);
    tableFooter.appendChild(tableRow);
}
renderFooter();

function handleaddStore(event) {  // Add new store function. Will create data, remove footer, populate with new data and re-render footer with new totals.
    event.preventDefault();
    let newLocation = event.target.storeLocation.value;
    let newMinCust = event.target.minCust.value;
    let newMaxCust = event.target.maxCust.value;
    let newAvgCookieSale = event.target.avgCookieSale.value;
    let newStore = new StoreSales(newLocation, newMinCust, newMaxCust, newAvgCookieSale);
    newStore.render();
    tableFooter.removeChild(tableFooter.lastChild);
    renderFooter();
}
storeFormEl.addEventListener('submit', handleaddStore);

















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