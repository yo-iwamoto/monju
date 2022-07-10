import jwt from 'jsonwebtoken';

export interface Env {
  BUCKET: R2Bucket;
  JWT_SECRET: string;
}

// const corsHeaders = {
//   'Access-Control-Allow-Origin': '*',
//   'Access-Control-Allow-Methods': 'GET,HEAD,POST,OPTIONS',
//   'Access-Control-Max-Age': '86400',
// };
// function handleOptions(request: Request) {
//   let headers = request.headers;
//   if (
//     headers.get('Origin') !== null &&
//     headers.get('Access-Control-Request-Method') !== null &&
//     headers.get('Access-Control-Request-Headers') !== null
//   ) {
//     let respHeaders = {
//       ...corsHeaders,
//       'Access-Control-Allow-Headers': request.headers.get('Access-Control-Request-Headers') ?? '',
//     };
//     return new Response(null, {
//       headers: respHeaders,
//     });
//   } else {
//     return new Response(null, {
//       headers: {
//         Allow: 'GET, HEAD, POST, OPTIONS',
//       },
//     });
//   }
// }

export default {
  async fetch(request: Request, env: Env, _ctx: ExecutionContext) {
    // if (request.method === 'OPTIONS') {
    //   return handleOptions(request);
    // }

    const url = new URL(request.url);
    const key = url.pathname.slice(1);

    switch (request.method) {
      case 'PUT':
        await env.BUCKET.put(key, request.body);
        return new Response(`Put ${key} successfully!`);
      case 'GET':
        const object = await env.BUCKET.get(key);

        if (object === null) {
          return new Response('Object Not Found');
        }

        const headers = new Headers();
        object.writeHttpMetadata(headers);
        headers.set('etag', object.httpEtag);

        return new Response(object.body, { headers });
      case 'DELETE':
        await env.BUCKET.delete(key);
        return new Response('Deleted!');

      default:
        return new Response('Method Not Allowed', {
          status: 405,
          headers: {
            Allow: 'PUT, GET, DELETE',
          },
        });
    }
  },
};
