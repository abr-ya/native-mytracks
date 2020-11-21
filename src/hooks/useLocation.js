import { useEffect, useState } from "react";
import { Accuracy, requestPermissionsAsync, watchPositionAsync } from 'expo-location';

// isActive - продолжать ли "мониторинг"
// callback - функция, которая будет вызвана с координатами
export default (isActive, callback) => {
  const [err, setErr] = useState('');

  // isActive для паузы на других экранах
  // callback - мониторим для запуска/остановки
  useEffect(() => {
    // effect var
    let subscriber;

    // helper
    const startWatching = async () => {
      try {
        await requestPermissionsAsync();
        subscriber = await watchPositionAsync({
          accuracy: Accuracy.BestForNavigation,
          timeInterval: 1000,
          distanceInterval: 10,
        }, (location) => {
          //console.log(location); // демо данные в консоль
          callback(location)
        });
      } catch (e) {
        setErr(e);
        console.log(e);
      }
    };

    // main part
    if (isActive) {
      startWatching();
    } else {
      // stop watching
      if (subscriber) subscriber.remove();
      subscriber = null;
    }
    // cleaner
    return () => {
      if (subscriber) subscriber.remove();
    };
  }, [isActive, callback]);

  return [err];
};
