import { GoogleSheetRow } from '../pages/api/calendar-events';

export interface CalendarEvent {
  name: string;
  description: string;
  location: string;
  date: string;
  time: string;
}

const twentyFourHours = 1000 * 60 * 60 * 24;

export const parseGoogleSheetRows = (rawEventStrings: GoogleSheetRow[]): CalendarEvent[] => {
  return rawEventStrings
    .filter((rawEvent) => rawEvent[3] && rawEvent[4]) // don't show events without date and time
    .filter((rawEvent) => Date.parse(rawEvent[3]) + twentyFourHours > Date.now()) // date is not in the past
    .map((rawEvent) => ({
      name: rawEvent[0] ?? '',
      description: rawEvent[1] ?? '',
      location: rawEvent[2] ?? '',
      date:
        new Date(rawEvent[3]).toLocaleString('en', {
          weekday: 'long',
          month: 'long',
          day: 'numeric',
        }) ?? '',
      time: rawEvent[4] ?? '',
    }));
};
