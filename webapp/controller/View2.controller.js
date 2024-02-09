// sap.ui.define([
//     "sap/ui/core/mvc/Controller",
//     'sap/ui/model/json/JSONModel'
// ],
//     /**
//      * @param {typeof sap.ui.core.mvc.Controller} Controller
//      */
//     function (Controller,JSONModel) {
//         "use strict";

//         return Controller.extend("project2.controller.View2", {
//             onInit: function () {

//             },
//             onClicking:function(){
//                 console.log("I am getting clicked")
//             }
//         });
//     });


sap.ui.define([
    "sap/ui/core/mvc/Controller",
    'sap/ui/model/json/JSONModel',
    "sap/ui/model/resource/ResourceModel",
],
// function (Controller, JSONModel,ResourceModel,View3Controller) {
function (Controller, JSONModel,ResourceModel) {
    "use strict";

    return Controller.extend("project2.controller.View2", {
        onInit: function () {
            // Initialize the model
            var oModel = new JSONModel({
                countries: [
                    { key: "US", text: "United States" },
                    { key: "DE", text: "Germany" },
                    { key: "IN", text: "India" }
                    // Add more countries as needed
                ],
                selectedCountry: "US" // Default selected country
            });

            // Set the model to the view
            // const oModel = new JSONModel(oData);
            this.getView().setModel(oModel);

                   // set i18n model on view
        //  const i18nModel = new ResourceModel({
        //     bundleName: "project2.i18n.i18n"
        //  });
        //  this.getView().setModel(i18nModel, "i18n");
        },
        onClicking: function () {
            console.log("I am getting clicked");
                     // read msg from i18n model
        //  const oBundle = this.getView().getModel("i18n").getResourceBundle();
        //  const sRecipient = this.getView().getModel().getProperty("/recipient/name");
        //  const sMsg = oBundle.getText("helloMsg", [sRecipient]);

         // show message
         MessageToast.show(sMsg);
        },

        // --------------------TODO-------------------------------->>>>>>
        //  // Accessing onOpenDialog() from View3 controller
        //  onOpenDialogFromView1: function() {
        //     View3Controller.prototype.onOpenDialog.call(this);
        // },

        // // Accessing onCloseDialog() from View3 controller
        // onCloseDialogFromView1: function() {
        //     View3Controller.prototype.onCloseDialog.call(this);
        // }
    });
});
