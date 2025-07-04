/**
 * vcharm Driver API
 * API for Vector's vcharm electric vehicle charging application
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: support@vector.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.VcharmDriverApi);
  }
}(this, function(expect, VcharmDriverApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new VcharmDriverApi.VehicleDetail();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('VehicleDetail', function() {
    it('should create an instance of VehicleDetail', function() {
      // uncomment below and update the code to test VehicleDetail
      //var instance = new VcharmDriverApi.VehicleDetail();
      //expect(instance).to.be.a(VcharmDriverApi.VehicleDetail);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new VcharmDriverApi.VehicleDetail();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instance = new VcharmDriverApi.VehicleDetail();
      //expect(instance).to.be();
    });

    it('should have the property make (base name: "make")', function() {
      // uncomment below and update the code to test the property make
      //var instance = new VcharmDriverApi.VehicleDetail();
      //expect(instance).to.be();
    });

    it('should have the property model (base name: "model")', function() {
      // uncomment below and update the code to test the property model
      //var instance = new VcharmDriverApi.VehicleDetail();
      //expect(instance).to.be();
    });

    it('should have the property year (base name: "year")', function() {
      // uncomment below and update the code to test the property year
      //var instance = new VcharmDriverApi.VehicleDetail();
      //expect(instance).to.be();
    });

    it('should have the property licensePlate (base name: "licensePlate")', function() {
      // uncomment below and update the code to test the property licensePlate
      //var instance = new VcharmDriverApi.VehicleDetail();
      //expect(instance).to.be();
    });

    it('should have the property batteryCapacity (base name: "batteryCapacity")', function() {
      // uncomment below and update the code to test the property batteryCapacity
      //var instance = new VcharmDriverApi.VehicleDetail();
      //expect(instance).to.be();
    });

    it('should have the property currentBatteryLevel (base name: "currentBatteryLevel")', function() {
      // uncomment below and update the code to test the property currentBatteryLevel
      //var instance = new VcharmDriverApi.VehicleDetail();
      //expect(instance).to.be();
    });

    it('should have the property isCharging (base name: "isCharging")', function() {
      // uncomment below and update the code to test the property isCharging
      //var instance = new VcharmDriverApi.VehicleDetail();
      //expect(instance).to.be();
    });

    it('should have the property lastSeen (base name: "lastSeen")', function() {
      // uncomment below and update the code to test the property lastSeen
      //var instance = new VcharmDriverApi.VehicleDetail();
      //expect(instance).to.be();
    });

    it('should have the property totalMileage (base name: "totalMileage")', function() {
      // uncomment below and update the code to test the property totalMileage
      //var instance = new VcharmDriverApi.VehicleDetail();
      //expect(instance).to.be();
    });

    it('should have the property avgConsumption (base name: "avgConsumption")', function() {
      // uncomment below and update the code to test the property avgConsumption
      //var instance = new VcharmDriverApi.VehicleDetail();
      //expect(instance).to.be();
    });

    it('should have the property vinNumber (base name: "vinNumber")', function() {
      // uncomment below and update the code to test the property vinNumber
      //var instance = new VcharmDriverApi.VehicleDetail();
      //expect(instance).to.be();
    });

    it('should have the property chargePortType (base name: "chargePortType")', function() {
      // uncomment below and update the code to test the property chargePortType
      //var instance = new VcharmDriverApi.VehicleDetail();
      //expect(instance).to.be();
    });

    it('should have the property maxChargingRate (base name: "maxChargingRate")', function() {
      // uncomment below and update the code to test the property maxChargingRate
      //var instance = new VcharmDriverApi.VehicleDetail();
      //expect(instance).to.be();
    });

    it('should have the property estimatedRange (base name: "estimatedRange")', function() {
      // uncomment below and update the code to test the property estimatedRange
      //var instance = new VcharmDriverApi.VehicleDetail();
      //expect(instance).to.be();
    });

    it('should have the property settings (base name: "settings")', function() {
      // uncomment below and update the code to test the property settings
      //var instance = new VcharmDriverApi.VehicleDetail();
      //expect(instance).to.be();
    });

  });

}));
