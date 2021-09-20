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
                li.innerText= hours[i] + ": " + this.cookieSoldArray[i] + " Cookies";
                seattleList.appendChild(li);
            }  //need store at top and tiems listed on side
        }
}
Seattle.render() 


let Tokyo = {
    storeName: 'Tokyo',   
    minCust: 3,   
    maxCust: 24,          
    avgCookieSale: 1.2,
    randoNumber: function () {  
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
                li.innerText= hours[i] + ": " + this.cookieSoldArray[i] + " Cookies";
                tokyoList.appendChild(li);
            }
        }
}
Tokyo.render() 

let Dubai = {
    storeName: 'Dubai',   
    minCust: 11,            
    maxCust: 38,            
    avgCookieSale: 3.7,     
    randoNumber: function () {  
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
                li.innerText= hours[i] + ": " + this.cookieSoldArray[i] + " Cookies";
                dubaiList.appendChild(li);
            }
        }
}
Dubai.render() 

let Paris = {
    storeName: 'Paris',   
    minCust: 20,            
    maxCust: 38,            
    avgCookieSale: 2.3,     
    randoNumber: function () {  
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
                li.innerText= hours[i] + ": " + this.cookieSoldArray[i] + " Cookies";
                parisList.appendChild(li);
            }
        }
}
Paris.render() 

let Lima = {
    storeName: 'Lima',
    minCust: 2,     
    maxCust: 16,            
    avgCookieSale: 4.6,     
    randoNumber: function () {  
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
                li.innerText=hours[i] + ": " + this.cookieSoldArray[i] + " Cookies";
                limaList.appendChild(li);
            }
        }
}
Lima.render()