const Redis = require('ioredis');
require('dotenv').config();

const redisUrl = process.env.REDIS_URL || 'redis://localhost:6379';

const redis = new Redis(redisUrl, {
  tls: redisUrl.startsWith('rediss://') ? { rejectUnauthorized: false } : undefined,
  maxRetriesPerRequest: 3,
  lazyConnect: true
});

redis.on('connect', () => console.log('Redis connected ✅'));
redis.on('error', (err) => console.log('Redis error:', err.message));

module.exports = redis;
