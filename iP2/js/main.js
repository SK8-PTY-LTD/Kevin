function get() {


    $.ajax({

        url: "xml/categories.xml",
        dataType: "xml",
        success: function (data) {
            var cnameArray = data.getElementsByTagName("CategoryName");
            var categoryIncategoryArray = data.getElementsByTagName("CategoryID");
            var categoryInfoArray = data.getElementsByTagName("Description");
            var categoryDesArray = [];

            $.ajax({

                url: "xml/products.xml",
                dataType: "xml",
                success: function (product) {

                    var pnameArray = product.getElementsByTagName("ProductName");
                    var categoryidInproductArray = product.getElementsByTagName("CategoryID");
                    var QuantityPerUnitArray = product.getElementsByTagName("QuantityPerUnit");
                    var UnitPriceArray = product.getElementsByTagName("UnitPrice");
                    var productInfoArray = [];

                    //create productInfor Array
                    for (var i = 0; i < pnameArray.length; i++) {
                        var QuantityPerUnit = QuantityPerUnitArray.item(i).firstChild.data;
                        var UnitPrice = UnitPriceArray.item(i).firstChild.data;
                        var productInfo = 'QuantityPerUnit: ' + QuantityPerUnit + ' UnitPrice: ' + UnitPrice;
                        productInfoArray.push(productInfo);

                    }


                    //loop for category
                    for (var i = 0; i < cnameArray.length; i++) {


                        var categoryid = categoryIncategoryArray.item(i).firstChild.data;
                        var categoryDes = categoryInfoArray.item(i).firstChild.data;

                        categoryDesArray.push(categoryDes);


                        cnames = '<li id="cn"  class="list-group-item" type="button" data-toggle="modal" data-target=".bs-example-modal-sm"><span class="badge"><button class="btn btn-default " type="hide">show/hide</button></span><p>' + cnameArray.item(i).firstChild.data + '</p><ul id="p' + categoryid + '" class="list-group productUl hideList" type="on"></ul></li>';


                        $("#list-group").append(cnames);


                        //loop for product

                        for (var j = 0; j < pnameArray.length; j++) {

                            var categoryidInproduct = categoryidInproductArray.item(j).firstChild.data;

                            var pname = '<li class="list-group-item productList">' + pnameArray.item(j).firstChild.data + '</li>';

                            //console.log(categoryidInproduct, categoryid, pname)


                            if (parseInt(categoryidInproduct) == parseInt(categoryid)) {

                                $("#p" + categoryid + "").append(pname);


                            }
                        }
                    }


                    $(document).on('click', "p", function () {
                        var i = $("#list-group p").index(this);
                        alert(categoryDesArray[i])
                    });

                    $(document).on('click', ".productList", function () {
                        var i = $(".productList").index(this);
                        alert(productInfoArray[i]);
                    })



                }
            })


            // close products ajax
        }
    })// close categories ajax
}





$(document).on('click', ".btn", function () {
    var i = $(".btn").index(this);
    var btnNumber = i + 1;



    console.log($("ul[type]").hasClass("showList"))
    console.log($("ul[type]").hasClass("hideList"))
    console.log($("ul[type]").attr("type")=="on")

    if ($("ul[type]").attr("type")=="on") {

        console.log($("ul[type]").attr("type")=="on")
        console.log($("ul[type]").hasClass("showList"),"1")
        console.log($("ul[type]").hasClass("hideList"),"1")
        //alert("a")


        $("#p" + btnNumber + "").removeClass("hideList");
        $("#p" + btnNumber + "").addClass("showList");
        $("ul[type]").attr("type","off");


    }else if ($("ul[type]").attr("type")=="off") {

        console.log($("ul[type]").hasClass("showList"),"2")
        console.log($("ul[type]").hasClass("hideList"),"2")
        //alert("b")

        $("#p" + btnNumber + "").removeClass("showList");
        $("#p" + btnNumber + "").addClass("hideList");
        $("ul[type]").attr("type","on");

    }

})







