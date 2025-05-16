# VcharmDriverApi.ProfileApi

All URIs are relative to *https://api-driverapp.vcharm.vector.com/driver-api/zsasmjc3q9*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getDriverProfile**](ProfileApi.md#getDriverProfile) | **GET** /drivers/{driver_id}/profile | Get driver profile information



## getDriverProfile

> DriverProfile getDriverProfile(driverId)

Get driver profile information

Returns the profile information for a specific driver

### Example

```javascript
import VcharmDriverApi from 'vcharm_driver_api';
let defaultClient = VcharmDriverApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new VcharmDriverApi.ProfileApi();
let driverId = "33842832-6051-70be-3e49-6f63ec847e0c"; // String | ID of the driver
apiInstance.getDriverProfile(driverId, (error, data, response) => {
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

### Return type

[**DriverProfile**](DriverProfile.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

