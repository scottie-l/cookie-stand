// leave global for all to reference later on.
let hours= ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm']
let seattleList= document.getElementById("Seattle")


let Seattle = {
    storeName: 'Seattle',   // Object properties
    minCust: 23,            // Object properties
    maxCust: 65,            // Object properties
    avgCookieSale: 6.3,     // Object properties
    randoNumber: function () {  // object function for random number generator
        return Math.floor(Math.random() * (this.maxCust - this.minCust +1)) + this.minCust;
    },
    cookiesPurchased: function() {  // function for getting 
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
                seattleList.appendChild(li);
            }
        }
}
Seattle.render() 



// Objectives:
// X1- Object properties:min/max hrly customers.  Avg. cookies/customer
// X2- Uses method of that object to generate random number of ea customer/hour.
// 3- Calculate and store simulated amts. of cookies purchased & the random number of customers generated
// 4- Store results for each location in separate array... Perhaps as a property of the object representing the location.
// 5- Display values of each array as unordered list
// 6- Calculate sum of these hourly totals. Output should like below: & display the lists on sales.html.
// 
// Seattle 
// 6am: 16 cookies
// 7am: 20 cookies
// 8am: 35 cookies
// 9am: 48 cookies
// 10am: 56 cookies
// 11am: 77 cookies
// 12am: 93 cookies
// 1pm: 144 cookies
// 2pm: 119 cookies
// 3pm: 84 cookies
// 4pm: 61 cookies
// 5pm: 23 cookies
// 6pm: 42 cookies
// 7pm: 57 cookies
// total: 875 cookies

// Location    Min/Cust.   Max/Cust.   Avg. Cookie/sale
// seattle         23          65    42      6.3  
// tokyo           3           24    21      1.2
// dubai           11          38    27      3.7 
// paris           20          38    18      2.3
// lima            2           16    14      4.6
// each location should be its own js object