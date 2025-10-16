import { describe, it } from 'node:test';
import assert from 'node:assert';
import { greet, greetWithTime, getInfo } from './index.js';

describe('Hello World Tests', () => {

  describe('greet()', () => {
    it('should return "Hello, World!" when called without arguments', () => {
      const result = greet();
      assert.strictEqual(result, 'Hello, World!');
    });

    it('should return personalized greeting when given a name', () => {
      const result = greet('Marqeta');
      assert.strictEqual(result, 'Hello, Marqeta!');
    });

    it('should handle empty string', () => {
      const result = greet('');
      assert.strictEqual(result, 'Hello, !');
    });

    it('should handle special characters', () => {
      const result = greet('User@123');
      assert.strictEqual(result, 'Hello, User@123!');
    });
  });

  describe('greetWithTime()', () => {
    it('should return a time-based greeting', () => {
      const result = greetWithTime();
      assert.ok(typeof result === 'string');
      assert.ok(result.includes('World!'));
      assert.ok(
        result.includes('Good morning') ||
        result.includes('Good afternoon') ||
        result.includes('Good evening')
      );
    });
  });

  describe('getInfo()', () => {
    it('should return package information object', () => {
      const info = getInfo();
      assert.ok(typeof info === 'object');
      assert.strictEqual(info.name, '@marqeta/helloworld');
      assert.strictEqual(info.version, '1.0.0');
      assert.ok(info.description);
    });

    it('should have all required properties', () => {
      const info = getInfo();
      assert.ok('name' in info);
      assert.ok('version' in info);
      assert.ok('description' in info);
    });
  });
});