import { setupWorker } from 'msw/browser';
import { handlers } from './handlers';

// 서비스 워커를 설정합니다.
export const worker = setupWorker(...handlers);
