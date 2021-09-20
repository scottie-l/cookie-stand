// leave global for all to reference later on.
let hours= ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'] //Array for hours
let seattleList= document.getElementById("Seattle") // Id to call out specific place in HTML page of where to plug in.
let tokyoList= document.getElementById("Tokyo")
let dubaiList= document.getElementById("Dubai")
let parisList= document.getElementById("Paris")
let limaList= document.getElementById("Lima")


let Seattle = {
    storeName: 'Seattle',   // Object properties
    minCust: 23,            // Object properties
    maxCust: 65,            // Object properties
    avgCookieSale: 6.3,     // Object properties
    randoNumber: function () {  // object function for random number generator
        return Math.floor(Math.random() * (this.maxCust - this.minCust +1)) + this.minCust;
    },
    cookiesPurchased: function() {  // function for getting avg. cookies/sale
        this.randoNumber() 
        for (let i =0; i < hours.length; i++) {
        this.cookieSoldArray.push(Math.ceil(this.randoNumber() * this.avgCookieSale))   
        }
    },
        cookieSoldArray: [], // function to insert onto HTML page
        render: function() {
            this.cookiesPurchased()
            for (let i=0; i < this.cookieSoldArray.length; i++) {
                let li = document.createElement("li");
                li.innerText=this.cookieSoldArray[i];
                seattleList.appendChild(li);
            }  //need store at top and tiems listed on side
        }
}
Seattle.render() 


let Tokyo = {
    storeName: 'Tokyo',   // Object properties
    minCust: 3,            // Object properties
    maxCust: 24,            // Object properties
    avgCookieSale: 1.2,     // Object properties
    randoNumber: function () {  // object function for random number generator
        return Math.floor(Math.random() * (this.maxCust - this.minCust +1)) + this.minCust;
    },
    cookiesPurchased: function() {  
        this.randoNumber() 
        for (let i =0; i < hours.length; i++) {
        this.cookieSoldArray.push(Math.ceil(this.randoNumber() * this.avgCookieSale))   
        }
    },
        cookieSoldArray: [],  
        render: function() {
            this.cookiesPurchased()
            for (let i=0; i < this.cookieSoldArray.length; i++) {
                let li = document.createElement("li");
                li.innerText=this.cookieSoldArray[i];
                tokyoList.appendChild(li);
            }
        }
}
Tokyo.render() 

let Dubai = {
    storeName: 'Dubai',   // Object properties
    minCust: 11,            // Object properties
    maxCust: 38,            // Object properties
    avgCookieSale: 3.7,     // Object properties
    randoNumber: function () {  // object function for random number generator
        return Math.floor(Math.random() * (this.maxCust - this.minCust +1)) + this.minCust;
    },
    cookiesPurchased: function() {  
        this.randoNumber() 
        for (let i =0; i < hours.length; i++) {
        this.cookieSoldArray.push(Math.ceil(this.randoNumber() * this.avgCookieSale))   
        }
    },
        cookieSoldArray: [],  
        render: function() {
            this.cookiesPurchased()
            for (let i=0; i < this.cookieSoldArray.length; i++) {
                let li = document.createElement("li");
                li.innerText=this.cookieSoldArray[i];
                dubaiList.appendChild(li);
            }
        }
}
Dubai.render() 

let Paris = {
    storeName: 'Paris',   // Object properties
    minCust: 20,            // Object properties
    maxCust: 38,            // Object properties
    avgCookieSale: 2.3,     // Object properties
    randoNumber: function () {  // object function for random number generator
        return Math.floor(Math.random() * (this.maxCust - this.minCust +1)) + this.minCust;
    },
    cookiesPurchased: function() {  
        this.randoNumber() 
        for (let i =0; i < hours.length; i++) {
        this.cookieSoldArray.push(Math.ceil(this.randoNumber() * this.avgCookieSale))   
        }
    },
        cookieSoldArray: [],  
        render: function() {
            this.cookiesPurchased()
            for (let i=0; i < this.cookieSoldArray.length; i++) {
                let li = document.createElement("li");
                li.innerText=this.cookieSoldArray[i];
                parisList.appendChild(li);
            }
        }
}
Paris.render() 

let Lima = {
    storeName: 'Lima',   // Object properties
    minCust: 2,            // Object properties
    maxCust: 16,            // Object properties
    avgCookieSale: 4.6,     // Object properties
    randoNumber: function () {  // object function for random number generator
        return Math.floor(Math.random() * (this.maxCust - this.minCust +1)) + this.minCust;
    },
    cookiesPurchased: function() {  
        this.randoNumber() 
        for (let i =0; i < hours.length; i++) {
        this.cookieSoldArray.push(Math.ceil(this.randoNumber() * this.avgCookieSale))   
        }
    },
        cookieSoldArray: [],  
        render: function() {
            this.cookiesPurchased()
            for (let i=0; i < this.cookieSoldArray.length; i++) {
                let li = document.createElement("li");
                li.innerText=this.cookieSoldArray[i];
                limaList.appendChild(li);
            }
        }
}
Lima.render() 





// Objectives:
// X1- Object properties:min/max hrly customers.  Avg. cookies/customer
// X2- Uses method of that object to generate random number of ea customer/hour.
// 3- Calculate and store simulated amts. of cookies purchased & the random number of customers generated
// 4- Store results for each location in separate array... Perhaps as a property of the object representing the location.
// 5- Display values of each array as unordered list
// 6- Calculate sum of these hourly totals. Output should like below: & display the lists on sales.html.

// Location    Min/Cust.   Max/Cust.   Avg. Cookie/sale
// seattle         23          65    42      6.3  
// tokyo           3           24    21      1.2
// dubai           11          38    27      3.7 
// paris           20          38    18      2.3
// lima            2           16    14      4.6
// each location should be its own js object