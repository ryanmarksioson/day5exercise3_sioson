sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("sapips.training.jsonbinding.controller.JSONBinding", {
            onInit: function () {
                var oAddressModel = new JSONModel();
                var oAddress = {"EID": "ryan.mark.sioson",
                                "Enabled": true,
                                "Address":{
                                    "Street": "Street St.",
                                    "City"  : "A City",
                                    "Zip"   : 1109,
                                    "Country": "Philippines",
                                },
                                "Sales Amount": 100,
                                "Currency Code": "USD"};
                //Set Data to Model                
                oAddressModel.setData(oAddress);
                
                //Get Current View
                var oView = this.getView();

                //Set Model to View
                oView.setModel(oAddressModel);

            }
        });
    });
