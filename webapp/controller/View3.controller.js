sap.ui.define(
  ["sap/ui/core/mvc/Controller", "sap/ui/core/Fragment"],

  function (Controller, Fragment) {
    "use strict";

    return Controller.extend("project2.controller.View3", {
      onInit: function () {},

      onOpenDialog: function (oInvoice) {
        console.log("oInvoice", oInvoice);
        // create dialog lazily
        this.pDialog ??= this.loadFragment({
          name: "project2.view.HelloDialog",
        });
        this.pDialog.then((oDialog) => {
          // Construct a string containing multiple properties of the oInvoice object
          var text =
            "ProductName: " +
            oInvoice.ProductName +
            "\n" +
            "Quantity: " +
            oInvoice.Quantity +
            "\n" +
            "ExtendedPrice: " +
            oInvoice.ExtendedPrice +
            "\n" +
            "ShipperName: " +
            oInvoice.ShipperName +
            "\n" +
            "ShippedDate: " +
            oInvoice.ShippedDate +
            "\n" +
            "Status: " +
            oInvoice.Status;

          // Set the value of the Text control
          oDialog.getContent()[0].setText(text);
          oDialog.open();
        });
      },

      onListItemPress: function (oEvent) {
        var oSelectedItem = oEvent.getSource();
        var oContext = oSelectedItem.getBindingContext("invoice");
        var oInvoice = oContext.getObject();
        console.log("onListItemPress", oInvoice);

        // this.openDialogWithDetails(oInvoice);
        this.onOpenDialog(oInvoice);
      },

      onCloseDialog: function () {
        var oView = this.getView();
        var oDialog = oView.byId("helloDialog");
        oDialog.close();
      },
    });
  }
);
