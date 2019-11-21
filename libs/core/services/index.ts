import { LogService } from './log.service';
import { WindowService } from './window.service';
import { ApiService } from './base/api.service';

export const CORE_PROVIDERS: any[] = [
  LogService,
  WindowService,
  ApiService
];

export * from './log.service';
export * from './window.service';
export * from './tokens';
export * from './base';
