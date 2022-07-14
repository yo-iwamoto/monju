import S3Client from 'aws-sdk/clients/s3';
import { R2_ACCESS_KEY_ID, R2_ENDPOINT, R2_SECRET_ACCESS_KEY } from '@/config/const';

export const r2Client = new S3Client({
  endpoint: R2_ENDPOINT,
  region: 'auto',
  accessKeyId: R2_ACCESS_KEY_ID,
  secretAccessKey: R2_SECRET_ACCESS_KEY,
  signatureVersion: 'v4',
});
