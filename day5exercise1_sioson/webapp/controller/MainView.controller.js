sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, MessageToast) {
        "use strict";

        return Controller.extend("zbtp.day5exercise1sioson.controller.MainView", {
            onInit: function () {
                this.oResourceModel = this.getOwnerComponent().getModel("i18n").getResourceBundle()
            },

            onSend:function(oEvent){

                var oView = this.getView();
                var sName = oView.byId("NameInput").getValue();
                var sSurname = oView.byId("SurnameInput").getValue();
                var sAge = oView.byId("AgeInput").getValue();
                var oTech = oView.byId("TechInput");

                console.log(oView);
                console.log(sName);
                console.log(sSurname);
                console.log(sAge);
                console.log(oTech);
                MessageToast.show(this.oResourceModel.getText("labelYourNameIs") + sName + 
                                  this.oResourceModel.getText("labelYourFamilyName") + sSurname + 
                                  this.oResourceModel.getText("labelYourAge") + sAge + 
                                  this.oResourceModel.getText("labelYourTech") + oTech.getSelectedKey() );
            }
        });
    });
