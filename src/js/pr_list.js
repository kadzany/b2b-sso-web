(function(){
    $(document).ready(function(){

        /**
         * variables for showing list of POs
        */

        var po_data = [
            {
                PrNumber: 'PR001', CreatedDate:'01/01/2020', Customer: 'Telkom', Status: 'Approved', Approver: "admin SSO", FullfillmentDate: '03/01/2020',
                poFromStore:[
                    { productName: "QUESO CABRALES", unitPrice: 1000, qty: 5,uom:'kg', remark:"Budget maksimal Rp 3.000.000,00" },
                    { productName: "ALICE MUTTON", unitPrice: 2000, qty: 7,uom:'kg',remark:"Budget maksimal Rp 3.000.000,00" },
                    { productName: "GENEN SHOUYU", unitPrice: 3000, qty: 3,uom:'kg',remark:"Budget maksimal Rp 3.000.000,00" },
                    { productName: "CHARTREUSE VERTE", unitPrice: 4000, qty: 1,uom:'kg',remark:"Budget maksimal Rp 3.000.000,00" }
                ]
            },
            {
                PrNumber: 'PR002', CreatedDate:'01/01/2020', Customer: 'Yakes', Status: 'Rejected', Approver: "admin SSO", FullfillmentDate: '03/01/2020'
            },
            {
                PrNumber: 'PR003', CreatedDate:'01/01/2020', Customer: 'Yakes', Status: 'Requested', Approver: "admin SSO", FullfillmentDate: '03/01/2020'
            },
            {
                PrNumber: 'PR004', CreatedDate:'01/01/2020', Customer: 'Yakes', Status: 'Requested', Approver: "admin SSO", FullfillmentDate: '03/01/2020'
            }
        ];

        var po_schema = {
            model: {
                PrNumber : {type: "string"},
                CreatedDate: {type: "string"},
                Customer: {type: "string"},
                Status: {type: "string"}
            }
        };

        $("#grid-po-list").kendoGrid({
            dataSource: {
                data: po_data,
                schema: po_schema,
                pageSize: 20
            },
            pageable: {
                refresh: true,
                pageSizes: true,
                buttonCount: 5
            },
            sortable: true,
            scrollable: true,
            toolbar: [{text: "Create New PR", click: showCreate }],
            columns: [
                {
                    field: "PrNumber",
                    title: "Nomor PR"
                },
                {
                    field: "CreatedDate",
                    title: "Tanggal PR dibuat"
                },
                {
                    field: "Customer",
                    title: "Customer"
                },
                {
                    field: "Status",
                    title: "Status"
                },
                {
                    command: [
                        { text: "View Details", click: showDetails },
                        { text: "edit", click: showEdit },
                        "destroy"
                    ],
                    title: "Action", 
                    width: "280px"
                }
            ],
            editable: "false"
        });

        function showDetails(e) {
            e.preventDefault();
            window.location.replace("pr_detail.html");
        }

        function showEdit(e) {
            e.preventDefault();
            window.location.replace("pr_edit.html");
        }

        function showCreate(e) {
            e.preventDefault();
            window.location.replace("pr_edit.html");
        }
        
 });
})();