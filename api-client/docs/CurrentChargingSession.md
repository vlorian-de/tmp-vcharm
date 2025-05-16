# VcharmDriverApi.CurrentChargingSession

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** |  | [optional] 
**vehicleId** | **String** |  | [optional] 
**startTime** | **Date** |  | [optional] 
**endTime** | **Date** |  | [optional] 
**duration** | **Number** | Duration in seconds | [optional] 
**startBatteryLevel** | **Number** | Battery level at start in percentage | [optional] 
**endBatteryLevel** | **Number** | Battery level at end in percentage | [optional] 
**energyDelivered** | **Number** | Energy delivered in kWh | [optional] 
**cost** | **Number** | Cost in currency units | [optional] 
**currency** | **String** |  | [optional] 
**chargingStationId** | **String** |  | [optional] 
**location** | [**ChargingSessionLocation**](ChargingSessionLocation.md) |  | [optional] 
**chargingCurve** | [**[ChargingSessionChargingCurveInner]**](ChargingSessionChargingCurveInner.md) |  | [optional] 
**status** | **String** |  | [optional] 
**estimatedTimeRemaining** | **Number** | Estimated time remaining in seconds | [optional] 
**currentChargingRate** | **Number** | Current charging rate in kW | [optional] 
**errorCode** | **String** |  | [optional] 
**errorMessage** | **String** |  | [optional] 



## Enum: StatusEnum


* `active` (value: `"active"`)

* `paused` (value: `"paused"`)

* `completed` (value: `"completed"`)

* `error` (value: `"error"`)




