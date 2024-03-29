import { BaseException } from '@models/base-exception';
import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable, catchError, of } from 'rxjs';

@Injectable()
export class TransformExceptionInterceptor implements NestInterceptor {
  intercept(
    context: ExecutionContext,
    next: CallHandler,
  ): Observable<BaseException> {
    return next.handle().pipe(
      catchError((error: { response: BaseException }) => {
        return of(
          new BaseException(
            error.response?.statusCode ?? 400,
            error.response.error,
            error.response.message,
          ),
        );
      }),
    );
  }
}
