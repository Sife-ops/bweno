import { RequestIface } from './request.ts';

export class StatusRequestClass implements RequestIface {
  method = 'get';
  path = '/status';
}
