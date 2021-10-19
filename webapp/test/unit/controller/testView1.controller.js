/*global QUnit*/

sap.ui.define([
	"testDigimon/project1/controller/testView1.controller"
], function (Controller) {
	"use strict";

	QUnit.module("testView1 Controller");

	QUnit.test("I should test the testView1 controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
