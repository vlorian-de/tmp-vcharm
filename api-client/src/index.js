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


import ApiClient from './ApiClient';
import ChangePasswordRequest from './model/ChangePasswordRequest';
import ChangePasswordResponse from './model/ChangePasswordResponse';
import ChargingSession from './model/ChargingSession';
import ChargingSessionChargingCurveInner from './model/ChargingSessionChargingCurveInner';
import ChargingSessionLocation from './model/ChargingSessionLocation';
import CurrentChargingSession from './model/CurrentChargingSession';
import DriverProfile from './model/DriverProfile';
import DriverProfilePreferences from './model/DriverProfilePreferences';
import ForgotPasswordRequest from './model/ForgotPasswordRequest';
import ForgotPasswordResponse from './model/ForgotPasswordResponse';
import LoginRequest from './model/LoginRequest';
import LoginResponse from './model/LoginResponse';
import Vehicle from './model/Vehicle';
import VehicleDetail from './model/VehicleDetail';
import VehicleDetailAllOfSettings from './model/VehicleDetailAllOfSettings';
import VehicleDetailAllOfSettingsPreferredChargingTimes from './model/VehicleDetailAllOfSettingsPreferredChargingTimes';
import AuthenticationApi from './api/AuthenticationApi';
import ChargingApi from './api/ChargingApi';
import DriversApi from './api/DriversApi';
import ProfileApi from './api/ProfileApi';
import VehiclesApi from './api/VehiclesApi';


/**
* API for Vector&#39;s vcharm electric vehicle charging application.<br>
* The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
* <p>
* An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
* <pre>
* var VcharmDriverApi = require('index'); // See note below*.
* var xxxSvc = new VcharmDriverApi.XxxApi(); // Allocate the API class we're going to use.
* var yyyModel = new VcharmDriverApi.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
* and put the application logic within the callback function.</em>
* </p>
* <p>
* A non-AMD browser application (discouraged) might do something like this:
* <pre>
* var xxxSvc = new VcharmDriverApi.XxxApi(); // Allocate the API class we're going to use.
* var yyy = new VcharmDriverApi.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* </p>
* @module index
* @version 1.0.0
*/
export {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient,

    /**
     * The ChangePasswordRequest model constructor.
     * @property {module:model/ChangePasswordRequest}
     */
    ChangePasswordRequest,

    /**
     * The ChangePasswordResponse model constructor.
     * @property {module:model/ChangePasswordResponse}
     */
    ChangePasswordResponse,

    /**
     * The ChargingSession model constructor.
     * @property {module:model/ChargingSession}
     */
    ChargingSession,

    /**
     * The ChargingSessionChargingCurveInner model constructor.
     * @property {module:model/ChargingSessionChargingCurveInner}
     */
    ChargingSessionChargingCurveInner,

    /**
     * The ChargingSessionLocation model constructor.
     * @property {module:model/ChargingSessionLocation}
     */
    ChargingSessionLocation,

    /**
     * The CurrentChargingSession model constructor.
     * @property {module:model/CurrentChargingSession}
     */
    CurrentChargingSession,

    /**
     * The DriverProfile model constructor.
     * @property {module:model/DriverProfile}
     */
    DriverProfile,

    /**
     * The DriverProfilePreferences model constructor.
     * @property {module:model/DriverProfilePreferences}
     */
    DriverProfilePreferences,

    /**
     * The ForgotPasswordRequest model constructor.
     * @property {module:model/ForgotPasswordRequest}
     */
    ForgotPasswordRequest,

    /**
     * The ForgotPasswordResponse model constructor.
     * @property {module:model/ForgotPasswordResponse}
     */
    ForgotPasswordResponse,

    /**
     * The LoginRequest model constructor.
     * @property {module:model/LoginRequest}
     */
    LoginRequest,

    /**
     * The LoginResponse model constructor.
     * @property {module:model/LoginResponse}
     */
    LoginResponse,

    /**
     * The Vehicle model constructor.
     * @property {module:model/Vehicle}
     */
    Vehicle,

    /**
     * The VehicleDetail model constructor.
     * @property {module:model/VehicleDetail}
     */
    VehicleDetail,

    /**
     * The VehicleDetailAllOfSettings model constructor.
     * @property {module:model/VehicleDetailAllOfSettings}
     */
    VehicleDetailAllOfSettings,

    /**
     * The VehicleDetailAllOfSettingsPreferredChargingTimes model constructor.
     * @property {module:model/VehicleDetailAllOfSettingsPreferredChargingTimes}
     */
    VehicleDetailAllOfSettingsPreferredChargingTimes,

    /**
    * The AuthenticationApi service constructor.
    * @property {module:api/AuthenticationApi}
    */
    AuthenticationApi,

    /**
    * The ChargingApi service constructor.
    * @property {module:api/ChargingApi}
    */
    ChargingApi,

    /**
    * The DriversApi service constructor.
    * @property {module:api/DriversApi}
    */
    DriversApi,

    /**
    * The ProfileApi service constructor.
    * @property {module:api/ProfileApi}
    */
    ProfileApi,

    /**
    * The VehiclesApi service constructor.
    * @property {module:api/VehiclesApi}
    */
    VehiclesApi
};
