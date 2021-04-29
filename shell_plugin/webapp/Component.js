sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/Device",
	"shell/timeout/shellplugin/model/models"
], function (UIComponent, Device, models) {
	"use strict";
    jQuery.sap.declare("shell.timeout.Component");
    jQuery.sap.require("sap.ui.core.UIComponent");

    sap.ui.core.UIComponent.extend("shell.timeout.Component", {

        // use inline declaration instead of component.json to save 1 round trip
        metadata : {
            "manifest": "json"
        },

        createContent : function () {
            // make a request to the server every 15 minutes
            setInterval(function () {
                jQuery.ajax({
                    type: "HEAD",
                    cache: false,
                    url: "the URL to the Component.js of the plugin"
                }).done(
                    function (result) {
                        jQuery.sap.log.debug("pingServer", "Successfully pinged the server to extend the session");
                    }
                ).fail(
                    function () {
                        jQuery.sap.log.error("pingServer", "failed to ping the server to extend the session");
                    }
                );
            }, 900000); //15 minutes
        }
    })

});
