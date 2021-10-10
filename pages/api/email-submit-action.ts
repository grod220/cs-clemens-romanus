import type { NextApiRequest, NextApiResponse } from 'next';
import { google } from 'googleapis';

const SHEET_ID = '1PyITnQGRqwbYcsXIZNC2sANFlmKrY3SIgV7wKGW3X88';

export type GoogleSheetRow = string[];

export default async function handler(req: NextApiRequest, res: NextApiResponse<{ events: GoogleSheetRow[] }>) {
  const auth = await google.auth.getClient({
    credentials: JSON.parse(Buffer.from(process.env.GOOGLE_SERVICE_ACCOUNT as string, 'base64').toString('ascii')),
    scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly'],
  });

  const sheets = google.sheets({ version: 'v4', auth });

  const response = await sheets.spreadsheets.values.get({
    spreadsheetId: SHEET_ID,
    range: `Calendar!A3:E1000`,
  });

  const events = response.data.values as GoogleSheetRow[];

  res.status(200).json({ events });
}
