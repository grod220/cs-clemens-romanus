import type { NextApiRequest, NextApiResponse } from 'next';
import { google } from 'googleapis';

const SHEET_ID = '1PyITnQGRqwbYcsXIZNC2sANFlmKrY3SIgV7wKGW3X88';

const getClient = ({ scopes }: { scopes: string[] }) => {
  return google.auth.getClient({
    credentials: JSON.parse(Buffer.from(process.env.GOOGLE_SERVICE_ACCOUNT as string, 'base64').toString('ascii')),
    scopes: scopes,
  });
};

const authorizeSheets = async () => {
  const client = await getClient({
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  });
  return google.sheets({
    version: 'v4',
    auth: client,
  });
};

const addToCol = async (range: string, emailAddress: string) => {
  const sheets = await authorizeSheets();
  return new Promise(async (resolve, reject) => {
    const request = {
      spreadsheetId: SHEET_ID,
      range,
      valueInputOption: 'USER_ENTERED',
      resource: {
        values: [[emailAddress]],
      },
    };

    try {
      const response = (await sheets.spreadsheets.values.append(request)).data;
      resolve(response);
    } catch (err) {
      reject(err);
    }
  });
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const emailToSignup = req.body.email;
    const sheetsRes = await addToCol('Local!F2', emailToSignup); // don't resolve though. Not going to fix if failure.
    res.status(200).json(sheetsRes);
  } catch (err) {
    console.log(err);
    res.status(500).send((err as Error).toString());
  }
}
