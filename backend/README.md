# Api endpoints

## /api/floors/

Sending a post request to the `/api/floors/:floorId` endpoint will call an elevator to the floor specified by `:floorId`. If no elevators are available, the request will be added to a queue and the first elevator to free up will be sent to the respective floor.

## /api/elevators/

Sending a get request to the `/api/elevators/:elevatorId` endpoint will result in a response of the current status of the elevator specified with `:elevatorId`. If no elevator is specified, the response will contain the status of every elevator.

Sending a post request to the `/api/elevators/:elevatorId/:targetFloor` endpoint will send the elevator with `elevatorId` to the target floor.

## /api/events/

The clients can subscribe to the ```/api/events/elevators``` endpoint to get notifications about the status change of elevators. This endpoint uses server sent events to deliver the notification. The first response is always a status report that contains the current status of each elevator, later requests will only contain the elevators that triggered the response.
