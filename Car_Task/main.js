// const carList = [
//     {
//         licensePlate: '1234',
//         maker: 'TVS',
//         model: 'maruti',
//         currentOwner: 'Maruti',
//         price: '100,000',
//         color: 'Black'
//     },
//     {
//         licensePlate: 'TN670',
//         maker: 'TVS',
//         model: 'maruti',
//         currentOwner: 'Maruti',
//         price: '100,000',
//         color: 'Black'
//     },
//     {
//         licensePlate: 'KR1234',
//         maker: 'TVS',
//         model: 'maruti',
//         currentOwner: 'Maruti',
//         price: '100,000',
//         color: 'Black'
//     },
//     {
//         licensePlate: 'KL1234',
//         maker: 'TVS',
//         model: 'maruti',
//         currentOwner: 'Maruti',
//         price: '100,000',
//         color: 'Black'
//     }

// ];
const carList = [];
const tableContainer = document.getElementById('table-container');
// uncomment this line if pre-filled data from above is used
// tableContainer.innerHTML = generateTable(carList); 

class car {
    constructor(licensePlate, maker, model, currentOwner, price, color, carYear, discountedPrice) {
        this.licensePlate = licensePlate;
        this.maker = maker;
        this.model = model;
        this.currentOwner = currentOwner;
        this.price = price;
        this.color = color;
        this.carYear = carYear;
        this.discountedPrice = discountedPrice;
    }


    displayCardetails() {
        return `Car Details:
    License Plate : ${this.licensePlate}
    model : ${this.model}
    Maker : ${this.maker}
    currentOwner : ${this.currentOwner}
    price : ${this.price}
    color : ${this.color}
    year: ${this.carYear}
     discountedPrice: ${this.discountedPrice}`;
    }
}
function generateTable(carList) {
    let table = '<table>';
    table += '<tr><th>LicensePlate</th><th>Maker</th><th>Model</th><th>CurrentOwner</th><th>Year</th><th>Color</th><th>Price</th></tr>';
    carList.forEach(item => {
        let priceHtml;
        if (item.carYear <= 2014) {
            priceHtml = `<td><p class = 'OriginalPrice'>${item.price}</p><p class = 'DiscountedPrice'>${item.discountedPrice}</p></td>`

        }
        else {
            priceHtml = `<td>${item.price}</td>`
        }
        table += `<tr><td>${item.licensePlate}</td><td>${item.maker}</td><td>${item.model}</td><td>${item.currentOwner}</td><td>${item.carYear}</td><td>${item.color}</td>${priceHtml}</tr>`;
    });
    table += '</table>';
    return table;
}

// This function executes when submit button is clicked
// This function adds new values(car) to the carlist in the table
document.getElementById("carForm").addEventListener("submit", function (event) {
    event.preventDefault(); //this will not allow the form to get submitted in the middle of the funtion

    const licensePlate = document.getElementById("licensePlate").value;
    const maker = document.getElementById("maker").value;
    const model = document.getElementById("model1").value;
    const currentOwner = document.getElementById("currentOwner").value;
    const price = document.getElementById("price").value;
    const color = document.getElementById("color").value;
    const carYear = document.getElementById("year").value;



    // Using the car class we create new object with the user input details
    const discountedPrice = getDiscountedPrice(carYear, price)
    const mycar = new car(licensePlate, maker, model, currentOwner, price, color, carYear, discountedPrice);
    //console.log(mycar.displayCardetails());
    // document.getElementById("output").textContent = mycar.displayCardetails();

    carList.push(mycar)
    // console.log(carList)

    // reset is used to clear the previous form inputs
    document.getElementById('carForm').reset();


    // Table values change according to the values in car list array
    const tableContainer = document.getElementById('table-container');
    tableContainer.innerHTML = generateTable(carList);

    console.log(carList);




});

// There should be a new function with year and price as inputs which returns discounted price
function getDiscountedPrice(carYear, price) {
    let discount = 0;
    let discountedPrice = 0;
    if (carYear <= 2014) {
        discount = price / 100 * 15;
        discountedPrice = price - discount;
    }
    else {
        discountedPrice = 'Discount Not Applicable';
    }
    return discountedPrice;



}

// let getDiscountedPrice = (carYear, price) => carYear <= 2014 ? price * 0.85 : 'Discount Not Applicable';



function searchcar() {
    const searchElement = document.querySelector("#searchinput").value;
    const searchResult = document.getElementById("Search");
    //searchResult.innerHTML = '';

    const car = carList.find(car => car.licensePlate === searchElement);
    if (car) {
        // const discountedPrice = getDiscountedPrice(carYear, price)
        const resultTable = `<table class = "Search">
                <thead>
                    <tr>
                        <th>License Plate</th>
                        <th>Maker</th>
                        <th>Model</th>
                        <th>Owner</th>
                        
                        <th>Color</th>
                        <th>Year</th>
                        <th>Price</th>
                         <th>Discounted Price</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>${car.licensePlate}</td>
                        <td>${car.maker}</td>
                        <td>${car.model}</td>
                        <td>${car.currentOwner}</td>
                      
                        <td>${car.color}</td>
                         <td>${car.carYear}</td>
                           <td>${car.price}</td>
                        <td>${car.discountedPrice}</td>
                    </tr>
                </tbody>
            </table>
        `;

        searchResult.innerHTML = resultTable

    } else {
        searchResult.innerHTML = '<p>No car found with that license plate.</p>';
    }

}







