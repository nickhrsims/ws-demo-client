import * as serverConfig from './server';

describe('Server Configuration Specification', () => {
    it('has values defined for each requisite export', () => {
        expect(serverConfig.host).toBeDefined();
        expect(serverConfig.port).toBeDefined();
    });
});
