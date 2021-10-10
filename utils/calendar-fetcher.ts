import { BASE_URL } from './env';
import { GoogleSheetRow } from '../pages/api/calendar-events';
import { CalendarEvent, parseGoogleSheetRows } from './event-parser';

export const CalEventsFetcher: () => Promise<CalendarEvent[]> = async () => {
  const res = await fetch(BASE_URL + '/api/calendar-events');
  const data: { events: GoogleSheetRow[] } = await res.json();
  return parseGoogleSheetRows(data.events);
};
