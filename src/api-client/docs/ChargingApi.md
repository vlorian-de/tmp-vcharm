# VcharmDriverApi.ChargingApi

All URIs are relative to *https://api-driverapp.vcharm.vector.com/driver-api/zsasmjc3q9*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getChargingHistory**](ChargingApi.md#getChargingHistory) | **GET** /drivers/{driver_id}/vehicles/{vehicle_id}/charging-sessions | Get charging history
[**getCurrentChargingSession**](ChargingApi.md#getCurrentChargingSession) | **GET** /drivers/{driver_id}/vehicles/{vehicle_id}/charging-sessions/current | Get current charging session



## getChargingHistory

> [ChargingSession] getChargingHistory(driverId, vehicleId, opts)

Get charging history

Returns the charging history for a specific vehicle

### Example

```javascript
import VcharmDriverApi from 'vcharm_driver_api';
let defaultClient = VcharmDriverApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new VcharmDriverApi.ChargingApi();
let driverId = "33842832-6051-70be-3e49-6f63ec847e0c"; // String | ID of the driver
let vehicleId = "15093"; // String | ID of the vehicle
let opts = {
  'from': new Date("2013-10-20T19:20:30+01:00"), // Date | Start date for filtering (ISO 8601)
  'to': new Date("2013-10-20T19:20:30+01:00"), // Date | End date for filtering (ISO 8601)
  'limit': 20, // Number | Maximum number of records to return
  'offset': 0 // Number | Number of records to skip
};
apiInstance.getChargingHistory(driverId, vehicleId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **driverId** | **String**| ID of the driver | 
 **vehicleId** | **String**| ID of the vehicle | 
 **from** | **Date**| Start date for filtering (ISO 8601) | [optional] 
 **to** | **Date**| End date for filtering (ISO 8601) | [optional] 
 **limit** | **Number**| Maximum number of records to return | [optional] [default to 20]
 **offset** | **Number**| Number of records to skip | [optional] [default to 0]

### Return type

[**[ChargingSession]**](ChargingSession.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getCurrentChargingSession

> CurrentChargingSession getCurrentChargingSession(driverId, vehicleId)

Get current charging session

Returns information about the current charging session for a specific vehicle

### Example

```javascript
import VcharmDriverApi from 'vcharm_driver_api';
let defaultClient = VcharmDriverApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new VcharmDriverApi.ChargingApi();
let driverId = "33842832-6051-70be-3e49-6f63ec847e0c"; // String | ID of the driver
let vehicleId = "15093"; // String | ID of the vehicle
apiInstance.getCurrentChargingSession(driverId, vehicleId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **driverId** | **String**| ID of the driver | 
 **vehicleId** | **String**| ID of the vehicle | 

### Return type

[**CurrentChargingSession**](CurrentChargingSession.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

