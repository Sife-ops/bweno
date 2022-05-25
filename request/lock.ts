import { RequestIface } from './request.ts';

export class LockRequestClass implements RequestIface {
  method = 'post';
  path = '/lock';
}
