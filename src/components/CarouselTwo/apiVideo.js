// initiate videosdk 
import {register} from '@videosdk.live/react-native-sdk';
register();

//Please go into .env file and copy and paste TOKEN into this line below:
export const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGlrZXkiOiI3MDk0Y2E5Zi00NzFjLTRiZmItOGEzNi0yZTE0YzFiOTlkMDAiLCJwZXJtaXNzaW9ucyI6WyJhbGxvd19qb2luIl0sImlhdCI6MTcxMjE2MzA3NywiZXhwIjoxNzE0NzU1MDc3fQ.ZwuKcliAE_lrZ07vOx0daG-0SVJQ0ndwajL9NvLv8Ms';
// API call to create meeting
export const createMeeting = async ({token}) => {
  const res = await fetch('https://api.videosdk.live/v1/meetings', {
    method: 'POST',
    headers: {
      authorization: `${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({region: 'sg001'}),
  });

  const {meetingId} = await res.json();
  return meetingId;
};
