import { ApiService } from './api.service';

describe('ApiService', () => {
    let service: ApiService;

    test('should create', () => {
        service = new ApiService(null);
        expect(service).toBeTruthy();
    });
});
