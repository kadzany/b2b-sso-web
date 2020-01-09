(function(){
    $(document).ready(function() {

        let data = [
            { productName: "QUESO CABRALES", unitPrice: 1000, qty: 5,uom:'kg', remark:"Budget maksimal Rp 3.000.000,00" },
            { productName: "ALICE MUTTON", unitPrice: 2000, qty: 7,uom:'kg',remark:"Budget maksimal Rp 3.000.000,00" },
            { productName: "GENEN SHOUYU", unitPrice: 3000, qty: 3,uom:'kg',remark:"Budget maksimal Rp 3.000.000,00" },
            { productName: "CHARTREUSE VERTE", unitPrice: 4000, qty: 1,uom:'kg',remark:"Budget maksimal Rp 3.000.000,00" }
        ];

        let store_schema = {
            model: {
                productName: { type: "string" },
                unitPrice: { type: "number"},
                qty: { type: "number" }
            },
            parse: function (data) {
                $.each(data, function () {
                    this.total = this.qty * this.unitPrice;
                });
                return data;
            }
        };
        let store_aggregate = [
            { field: "qty", aggregate: "sum" },
            { field: "unitPrice", aggregate: "sum" },
            { field: "total", aggregate: "sum" }
        ];
        let store_columns = [
            { 
                field: "productName", 
                title: "Nama Produk",
                template: "<div class='product-photo'" +
                "style='background-image: url(../img/logo.jpg);'></div>" +
                "<div class='product-name'>#: productName #</div>",
                footerTemplate: "Total"
            },{
                field: "unitPrice", 
                title: "Harga per Unit", 
                aggregates: ["sum"], 
                footerTemplate: "#=sum#"                    
            },{
                field: "qty", 
                title: "Quantity", 
                aggregates: ["sum"], 
                footerTemplate: "Jumlah Barang: #=sum#"
            },{
                field: "total",
                title: "Total",
                aggregates: ["sum"],
                footerTemplate: "Total: #=sum#"
            }
        ];

        $("#grid-store-checkout").kendoGrid({
            dataSource: {
                data: data,
                aggregate: store_aggregate,
                schema: store_schema
            },
            editable:false,
            sortable: false,
            scrollable:true,
            columns: store_columns
        });

        let request_schema = {
            model: {
                num : {type:"number"},
                productName: { type: "string" },
                uom: { type: "string"},
                qty: { type: "number" },
                unitPrice: { type: "number"},
                remark: {type: "string"}         
            },
            parse: function (data) {
                $.each(data, function (i) {
                    this.total = this.qty * this.unitPrice;
                    this.num = i+1;
                });
                return data;
            }
        }

        let request_aggregate = [
            { field: "qty", aggregate: "sum" },
            { field: "unitPrice", aggregate: "sum" },
            { field: "total", aggregate: "sum" }
        ];

        let request_columns = [
            { 
                field: "num", 
                title: "Nomor"
            },                
            { 
                field: "productName", 
                title: "Item Description",
                template: "<div class='product-photo'" +
                "style='background-image: url(../img/logo.jpg);'></div>" +
                "<div class='product-name'>#: productName #</div>"
            },
            {
                field: "qty", 
                title: "Quantity", 
                aggregates: ["sum"], 
                footerTemplate: "Jumlah Barang: #=sum#"
            },
            { 
                field: "uom", 
                title: "Satuan"
            },
            {
                field: "unitPrice", 
                title: "Harga per Unit", 
                aggregates: ["sum"], 
                footerTemplate: "Sub Total: #=sum#"
            },
            { 
                field: "remark", 
                title: "Remark"
            }
        ];

        $("#grid-request-checkout").kendoGrid({
            dataSource: {
                data: data,
                aggregate: request_aggregate,
                schema: request_schema
            },
            editable: false,
            sortable: false,
            scrollable:true,
            columns: request_columns
        });

    });
})();