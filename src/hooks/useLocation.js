import { useEffect, useState } from "react";
import { Accuracy, requestPermissionsAsync, watchPositionAsync } from 'expo-location';

// isActive - продолжать ли "мониторинг"
// callback - функция, которая будет вызвана с координатами
export default (isActive, callback) => {
  const [err, setErr] = useState('');
  const [subscriber, setSubscriber] = useState(null);

  const startWatching = async () => {
    try {
      await requestPermissionsAsync();
      const sub = await watchPositionAsync({
        accuracy: Accuracy.BestForNavigation,
        timeInterval: 1000,
        distanceInterval: 10,
      }, (location) => {
        //console.log(location); // демо данные в консоль
        callback(location)
      });
      setSubscriber(sub);
    } catch (e) {
      setErr(e);
      console.log(e);
    }
  };

  useEffect(() => {
    if (isActive) {
      startWatching();
    } else {
      // stop watching
      subscriber.remove();
      setSubscriber(null);
    }
  }, [isActive]);

  return [err, ];
};
