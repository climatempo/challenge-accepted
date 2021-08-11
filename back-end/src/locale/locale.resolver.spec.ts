import { Test, TestingModule } from '@nestjs/testing';
import { LocaleResolver } from './locale.resolver';
import { LocaleService } from './locale.service';

describe('LocaleResolver', () => {
  let resolver: LocaleResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LocaleResolver, LocaleService],
    }).compile();

    resolver = module.get<LocaleResolver>(LocaleResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
