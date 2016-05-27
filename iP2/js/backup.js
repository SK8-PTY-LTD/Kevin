$(data).find("Categories").each(function () {

    var info = '<li>Name: '+$(this).find("CategoryName").text() + '    ID:' + $(this).find("CategoryID").text() + '</li>';

    $("#c").append(info);



})


$(product).find("Products").each(function () {
    var productName = '<li>Name: ' + $(this).find("ProductName").text() + '    cID:' + $(this).find("CategoryID").text() + '</li>';
})


$("#c #a").append(products[i][1])




var products = new Array();
$(product).find('Products').each(function(){
    var proid = $(this).find('ProductID').text();
    var proname = $(this).find('ProductName').text();
    var catid = $(this).find('CategoryID').text();
    var qua=$(this).find('QuantityPerUnit').text();
    var price=$(this).find('UnitPrice').text();
    var product = new Array();
    product.push(proid);
    product.push(proname);
    product.push(catid);
    product.push(qua);
    product.push(price);
    products.push(product);

})
for(var i=0; i<products.length;i++){
    if($cid===products[i][2]){
        $("#a").append(products[i][1])
        console.log($cid,products)
    }

}



$(data).find("Categories").each(function () {

    var $cid = $(this).find("CategoryID").text();


    var info = '<li id="a">Name: ' + $(this).find("CategoryName").text() + '    ID:' + $(this).find("CategoryID").text() + '</li>';


    $("#c").append(info);


    $("#b").append($cid);
})




var li = product.querySelectorAll('ProductName');
var result = Array.from(li).map(function (e) {
    return e.textContent;
})
var productArray = [];

for (j = 0; j < result.length; j++) {

    productname = '<li >' + result[j] + '</li>';
    productArray.push(productname);
    $("#c #p").append(productname)
}
console.log(productArray)
