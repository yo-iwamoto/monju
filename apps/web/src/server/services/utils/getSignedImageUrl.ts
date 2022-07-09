import { CLOUDFLARE_IMAGES_SIGNING_TOKEN } from '@/config/const';

const EXPIRATION = 60 * 60 * 24;

const bufferToHex = (buffer: ArrayBufferLike) =>
  [...new Uint8Array(buffer)].map((x) => x.toString(16).padStart(2, '0')).join('');

export const getSignedImageUrl = async (urlString: string) => {
  const baseUrl = new URL(urlString);
  const url = new URL(baseUrl.pathname.slice(1).replace('https:/imagedelivery.net', 'https://imagedelivery.net'));

  const encoder = new TextEncoder();
  const secretKeyData = encoder.encode(CLOUDFLARE_IMAGES_SIGNING_TOKEN);
  const key = await crypto.subtle.importKey('raw', secretKeyData, { name: 'HMAC', hash: 'SHA-256' }, false, ['sign']);

  const expiry = Math.floor(Date.now() / 1000) + EXPIRATION;
  url.searchParams.set('exp', expiry.toString());

  const stringToSign = url.pathname + '?' + url.searchParams.toString();

  const mac = await crypto.subtle.sign('HMAC', key, encoder.encode(stringToSign));
  const sig = bufferToHex(new Uint8Array(mac).buffer);

  url.searchParams.set('sig', sig);

  return url.toString();
};
