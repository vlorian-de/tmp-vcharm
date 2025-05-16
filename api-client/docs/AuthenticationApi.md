# VcharmDriverApi.AuthenticationApi

All URIs are relative to *https://api-driverapp.vcharm.vector.com/driver-api/zsasmjc3q9*

Method | HTTP request | Description
------------- | ------------- | -------------
[**changePassword**](AuthenticationApi.md#changePassword) | **POST** /change-password | Change password
[**forgotPassword**](AuthenticationApi.md#forgotPassword) | **POST** /forgot-password | Request password reset
[**login**](AuthenticationApi.md#login) | **POST** /login | Login to the system



## changePassword

> ChangePasswordResponse changePassword(changePasswordRequest)

Change password

Changes the user&#39;s password

### Example

```javascript
import VcharmDriverApi from 'vcharm_driver_api';
let defaultClient = VcharmDriverApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new VcharmDriverApi.AuthenticationApi();
let changePasswordRequest = new VcharmDriverApi.ChangePasswordRequest(); // ChangePasswordRequest | 
apiInstance.changePassword(changePasswordRequest, (error, data, response) => {
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
 **changePasswordRequest** | [**ChangePasswordRequest**](ChangePasswordRequest.md)|  | 

### Return type

[**ChangePasswordResponse**](ChangePasswordResponse.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## forgotPassword

> ForgotPasswordResponse forgotPassword(forgotPasswordRequest)

Request password reset

Initiates the password reset process

### Example

```javascript
import VcharmDriverApi from 'vcharm_driver_api';

let apiInstance = new VcharmDriverApi.AuthenticationApi();
let forgotPasswordRequest = new VcharmDriverApi.ForgotPasswordRequest(); // ForgotPasswordRequest | 
apiInstance.forgotPassword(forgotPasswordRequest, (error, data, response) => {
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
 **forgotPasswordRequest** | [**ForgotPasswordRequest**](ForgotPasswordRequest.md)|  | 

### Return type

[**ForgotPasswordResponse**](ForgotPasswordResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## login

> LoginResponse login(loginRequest)

Login to the system

Authenticates a user and returns a session token

### Example

```javascript
import VcharmDriverApi from 'vcharm_driver_api';

let apiInstance = new VcharmDriverApi.AuthenticationApi();
let loginRequest = new VcharmDriverApi.LoginRequest(); // LoginRequest | 
apiInstance.login(loginRequest, (error, data, response) => {
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
 **loginRequest** | [**LoginRequest**](LoginRequest.md)|  | 

### Return type

[**LoginResponse**](LoginResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

