# vehicle

## App Functions
* User can search vehicles based on year, make and model.
* User can browse the vehicle according the search options.
* User can check each vehicle details.

## App Install
* Run `npm install` & `bower install`
* App use [generator-gulp-angular](https://github.com/Swiip/generator-gulp-angular)

## App Running
* Run `gulp serve`
* check [generator doc](https://github.com/Swiip/generator-gulp-angular/blob/master/docs/usage.md) for more gulp tasks

## Current Dev Branch
* branch `dev`

## Used Apis
* [The first endpoint returns all (10) vehicles.](https://7d31xpvdm7.execute-api.us-east-1.amazonaws.com/yulu/vehicles)
* [The second endpoint returns all the details about a specific vehicle.](https://7d31xpvdm7.execute-api.us-east-1.amazonaws.com/yulu/vehicles/{vin})
* [The last endpoint returns historical price information for a specific vehicle.](https://7d31xpvdm7.execute-api.us-east-1.amazonaws.com/yulu/vehicles/price-history/{vin})
