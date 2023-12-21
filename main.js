//1111111111111111111111111
var prodName = document.getElementById("pn");
var prodPrice = document.getElementById("pp");
var prodCategory = document.getElementById("pc");
var prodDesc = document.getElementById("pd");
//2222222222222222222222
var productList = [];


//88888888888888
if(localStorage.getItem("products")){
    productList = JSON.parse(localStorage.getItem("products"));
    displayProducts (productList);
}
//333333333333333333333333333
function AddProduct() {
    // console.log("added");
if (validateProductName() && validateProductPrice() && validateProductCategory() && validateProductDesc()) {
     
    var product = {
        name: prodName.value,
        price: prodPrice.value,
        category: prodCategory.value, 
        desc: prodDesc.value,
    };
    //444444444444444
    productList.push(product);

    // console.log(productList);
    displayProducts (productList);
    clearForm ();
    localStorage.setItem("products",JSON.stringify(productList)); 
};



};


//for looping555555555555555555
function displayProducts (list) {

 var blackBox="";

 for (var i=0; i<list.length; i++) {


//.newName ? list[i].newName : list[i].name
blackBox += `
<tr>
<td>${i+1}</td>
<td>${list[i].newName ? list[i].newName : list[i].name}</td>
<td>${list[i].price}</td>
<td>${list[i].category}</td>
<td>${list[i].desc}</td>
<td>
    <button onclick="editProduct(${i})"  class="btn btn-success">Edit</button>
</td>
<td>
    <button onclick="deletProduct(${i})" class="btn btn-danger">Delet</button>
</td>
</tr>`;
 } ;
 
 document.getElementById("products").innerHTML = blackBox;
};
//666666666666666666666
function clearForm (){
    prodName.value="";
    prodPrice.value="";
    prodCategory.value="";
    prodDesc.value="";
};
//777777777777777777777777
function deletProduct(index){
    // console.log("deleted");
productList.splice(index,1);

localStorage.setItem("products",JSON.stringify(productList)); 
displayProducts (productList);
};

//99999999999999999999999999
var asd;
function editProduct(index){

// console.log(index);

prodName.value=productList[index].name;
prodPrice.value=productList[index].price;
prodCategory.value=productList[index].category;
prodDesc.value=productList[index].desc;
asd = index;
document.getElementById("addBtn").classList.add('d-none');
document.getElementById("updateBtn").classList.remove('d-none');
};

//1000000000000000000000000000000

function updateProduct(){
    if (validateProductName() && validateProductPrice() && validateProductCategory() && validateProductDesc()) {

    var product = {
        name: prodName.value,
        price: prodPrice.value,
        category: prodCategory.value, 
        desc: prodDesc.value,
    };
    productList[asd]=product
  console.log( productList);
    document.getElementById("addBtn").classList.remove('d-none');
    document.getElementById("updateBtn").classList.add('d-none');

    displayProducts ( productList);
    localStorage.setItem("products",JSON.stringify(productList));

};

};
//11111111111search
// var res="ihpone".toLowerCase().includes("P".toLowerCase());
// console.log(res);

function searchProduct() {
    var matchedList = [];
    var keyword = document.getElementById("psearch").value;

   for(var i=0; i<productList.length; i++){
    // console.log(productList[i].name .toLowerCase().includes(keyword.toLowerCase()));

    if (productList[i].name.toLowerCase().includes(keyword.toLowerCase())) {
        //push matched data
        productList[i].newName = productList[i].name
         .toLowerCase().replace(keyword,
             `<span class="text-danger fw-bold">${keyword}</span>`);
             
             console.log(matchedList);  
        matchedList.push(productList[i]);
        
        displayProducts( matchedList);
    } else if (matchedList == 0) {
       //show not matched
       document.getElementById("products").innerHTML = `show not matched`;
    // console.log("show not matched");
    }
   }
};

// searchProduct("ip")

function validateProductName() {
    var regex = /^[A-Z][a-z]{3,6}$/;
    var isValid = regex.test(prodName.value);


    if (isValid) {
        
        document.getElementById("nameError")
        .classList.replace("d-inline-block", "d-none");
    }else{

        document.getElementById("nameError")
        .classList.replace("d-none", "d-inline-block");
    }
    return isValid
};


function validateProductPrice() {
    var regex = /^([1-9][0-9]{3}|10000)$/;
    var isValid = regex.test(prodPrice.value);


    if (isValid) {
        
        document.getElementById("priceError")
        .classList.replace("d-inline-block", "d-none");
    }else{

        document.getElementById("priceError")
        .classList.replace("d-none", "d-inline-block");
    }
    return isValid
};


function validateProductCategory() {
    var regex = /^(mobile|screen|watch)$/;
    var isValid = regex.test(prodCategory.value);


    if (isValid) {
        
        document.getElementById("categoryError")
        .classList.replace("d-inline-block", "d-none");
    }else{

        document.getElementById("categoryError")
        .classList.replace("d-none", "d-inline-block");
    }
    return isValid
};

function validateProductDesc() {
    var regex = /^[A-Za-z ]{1,250}$/;
    var isValid = regex.test(prodDesc.value);


    if (isValid) {
        
        document.getElementById("descyError")
        .classList.replace("d-inline-block", "d-none");
    }else{

        document.getElementById("descyError")
        .classList.replace("d-none", "d-inline-block");
    }
    return isValid
};