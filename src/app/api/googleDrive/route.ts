import {
  google,   // The top level object used to access services
  drive_v3, // For every service client, there is an exported namespace
  Auth,     // Namespace for auth related types
  Common,   // General types used throughout the library
} from 'googleapis';
import { NextRequest, NextResponse } from "next/server"

export async function GET(request: NextRequest) {
  const drive = google.drive({
    version: 'v3',
    auth: process.env.GOOGLE_API_KEY as string // specify your API key here
  });

  const listParams: drive_v3.Params$Resource$Files$List = {
    driveId: '1o0ZC4Vki1U_EyMi96P4KZX-2dfMIbbAH',
  };
  const res = await drive.files.list(listParams);

  return NextResponse.json(res)
}

export async function POST(request: NextRequest) {
  const auth: Auth.GoogleAuth = new google.auth.GoogleAuth();
  const drive: drive_v3.Drive = google.drive({
    version: 'v3',
    auth,
  });

  // There are generated types for every set of request parameters
  const listParams: drive_v3.Params$Resource$Files$List = {};
  const res = await drive.files.list(listParams);

  // There are generated types for the response fields as well
  const listResults: drive_v3.Schema$FileList = res.data;

  return NextResponse.json(listResults)
}
