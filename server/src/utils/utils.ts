import * as crypto from 'crypto';

export function hashUser(ip: string, userAgent: string): string {
  const secretKey = process.env.SECRET_KEY;
  const hash = crypto.createHash('sha256');
  hash.update(`${ip}-${userAgent}-${secretKey}`);
  return hash.digest('hex');
}

export function compareHash(hash1: string, hash2: string): boolean {
  return hash1 === hash2;
}
