import * as crypto from 'crypto';

const secretKey = process.env.SECRET;

export function generateTokenFromIPAndUserAgent(
  ip: string,
  userAgent: string,
): string {
  const combinedData = `${ip}-${userAgent}`;
  const hash = crypto
    .createHmac('sha256', secretKey)
    .update(combinedData)
    .digest('hex');

  const cipher = crypto.createCipher('aes-256-ctr', secretKey);
  let encryptedToken = cipher.update(hash, 'utf-8', 'hex');
  encryptedToken += cipher.final('hex');

  return encryptedToken;
}

export function compareTokens(tokenA: string, tokenB: string): boolean {
  return crypto.timingSafeEqual(
    Buffer.from(tokenA, 'hex'),
    Buffer.from(tokenB, 'hex'),
  );
}
