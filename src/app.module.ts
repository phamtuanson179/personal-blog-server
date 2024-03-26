import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CategoriesModule } from './categories/categories.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    CategoriesModule,
    MongooseModule.forRoot('mongodb://localhost:27017/personal-blog'),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
