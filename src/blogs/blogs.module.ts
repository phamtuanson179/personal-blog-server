import { Blog, BlogSchema } from '@blogs/blogs.schema';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BlogsController } from './blogs.controller';
import { BlogsService } from './blogs.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Blog.name, schema: BlogSchema }]),
  ],
  providers: [BlogsService],
  controllers: [BlogsController],
})
export class BlogsModule {}
