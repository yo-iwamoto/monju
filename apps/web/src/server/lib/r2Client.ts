import { R2_ACCESS_KEY_ID, R2_ENDPOINT, R2_SECRET_ACCESS_KEY } from '@/config/const';
import S3Client from 'aws-sdk/clients/s3';

export const r2Client = new S3Client({
  endpoint: R2_ENDPOINT,
  region: 'auto',
  accessKeyId: R2_ACCESS_KEY_ID,
  secretAccessKey: R2_SECRET_ACCESS_KEY,
  signatureVersion: 'v4',
});

export const upload = async () => {
  const signedUrl = await r2Client.getSignedUrlPromise('putObject', {
    Bucket: 'my-bucket',
    Key: `${new Date().getTime()}.png`,
    Expires: 3600,
  });
  return signedUrl;
};
