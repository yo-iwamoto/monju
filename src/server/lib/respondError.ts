import type { NextApiResponse } from 'next';

export const respond400 = (res: NextApiResponse, code = 'invalid-data') => res.status(400).json({ code });
export const respond401 = (res: NextApiResponse, code = 'unauthorized') => res.status(401).json({ code });
export const respond403 = (res: NextApiResponse, code = 'forbidden') => res.status(403).json({ code });
export const respond405 = (res: NextApiResponse, code = 'method-not-allowed') => res.status(405).json({ code });
export const respond500 = (res: NextApiResponse, code = 'internal') => res.status(500).json({ code });
