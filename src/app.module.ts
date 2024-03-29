import { LoggerMiddleware } from '@core/middlewares/logger.middleware';
import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { CategoriesModule } from './categories/categories.module';
import { AppService } from 'src/app.service';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://10.10.10.15:27017/personal-blog'),
    CategoriesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('');
  }
}
