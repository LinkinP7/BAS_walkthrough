sap.ui.define([
   "sap/ui/core/UIComponent",
   "sap/ui/model/json/JSONModel",
   //"sap/ui/model/resource/ResourceModel",
   "sap/ui/Device"
], function (UIComponent, JSONModel, Device) {
   "use strict";
   return UIComponent.extend("testDigimon.project1.Component", {
      metadata : {
         "interfaces": ["sap.ui.core.IAsyncContentCreation"],
         "rootView": {
            "viewName": "testDigimon.project1.view.App",
            "type": "XML",
            /*"async": true, // implicitly set via the sap.ui.core.IAsyncContentCreation interface*/
            "id": "app"
         }
      },
      
      init : function () {
         // call the init function of the parent
         UIComponent.prototype.init.apply(this, arguments);
         // set data model
         var oData = {
            recipient : {
               name : "Daniel",
               name2 : "Hi, I'm noty :)"
            }
         };
         var oModel = new JSONModel(oData);
         this.setModel(oModel);

        // set device model
        var oDeviceModel = new JSONModel(Device);
        oDeviceModel.setDefaultBindingMode("OneWay");
        this.setModel(oDeviceModel, "device");
        //  // set i18n model
        //  var i18nModel = new ResourceModel({
        //     bundleName: "testDigimon.project1.i18n.i18n"
        //  });
        //  this.setModel(i18nModel, "i18n");

         // create the views based on the url/hash
        this.getRouter().initialize();
      },

      getContentDensityClass : function () {
			if (!this._sContentDensityClass) {
				if (!Device.support.touch) {
					this._sContentDensityClass = "sapUiSizeCompact";
				} else {
					this._sContentDensityClass = "sapUiSizeCozy";
				}
			}
			return this._sContentDensityClass;
	  }
   });
});