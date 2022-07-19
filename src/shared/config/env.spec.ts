import * as env from './env';

describe('Environment Variable Specification', () => {
    it('has value definitions for each requisite key', () => {
        expect(env.WS_HOST).toBeDefined();
        expect(env.WS_PORT).toBeDefined();
    });
});
