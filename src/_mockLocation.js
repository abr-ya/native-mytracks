import * as Location from 'expo-location';

const tenMetersWithDegrees = 0.0001;
const lon = 39.6701973;
const lat = 47.2097883;

const getLocation = increment => {
  return {
    timestamp: 10000000,
    coords: {
      speed: 0,
      heading: 0,
      accuracy: 5,
      altitudeAccuracy: 5,
      altitude: 5,
      longitude: lon + increment * tenMetersWithDegrees,
      latitude: lat + increment * tenMetersWithDegrees,
    },
  };
};

let counter = 0;
setInterval(() => {
  Location.EventEmitter.emit('Expo.locationChanged', {
    watchId: Location._getCurrentWatchId(),
    location: getLocation(counter),
  });
  counter++;
}, 1000);
