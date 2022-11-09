import { NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { Observable } from 'rxjs';
interface ClassContructor {
    new (...args: any[]): any;
}
export declare function Serialize(dto: any): MethodDecorator & ClassDecorator;
export declare class SerializeInterceptor implements NestInterceptor {
    private dto;
    constructor(dto: ClassContructor);
    intercept(context: ExecutionContext, handler: CallHandler): Observable<any>;
}
export {};
