import { AsyncStorage } from 'react-native';
import { formatCalendarResults, CALENDAR_STORAGE_KEY } from './_calendar';

export const fetchCalendarResults = async () => {
  try {
    const entries = await AsyncStorage.getItem(CALENDAR_STORAGE_KEY)
      .then((results) => formatCalendarResults(results));
    return entries;
  } catch (error) {
    console.log(error.message);
  }
}

export function submitEntry ({ entry, key }) {
  return AsyncStorage.mergeItem(CALENDAR_STORAGE_KEY, JSON.stringify({
    [key]: entry,
  }));
}

export function removeEntry (key) {
  return AsyncStorage.getItem(CALENDAR_STORAGE_KEY)
    .then((results) => {
      const data = JSON.parse(results);
      data[key] = undefined;
      delete data[key];
      AsyncStorage.setItem(CALENDAR_STORAGE_KEY, JSON.stringify(data));
    })
}