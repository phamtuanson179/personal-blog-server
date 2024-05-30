import { BlogsService } from '@blogs/blogs.service';
import { CreateBlogDto } from '@blogs/dto/create-blog.dto';
import { UpdateBlogDto } from '@blogs/dto/update-blog.dto';
import { TransformResponseInterceptor } from '@core/interceptors/transform-response.interceptor';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseInterceptors,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('blogs')
@Controller('blogs')
@UseInterceptors(TransformResponseInterceptor)
export class BlogsController {
  constructor(private readonly blogsService: BlogsService) {}

  @Post()
  async create(@Body() createBlogDto: CreateBlogDto) {
    const createdBlog = await this.blogsService.create(createBlogDto);
    return createdBlog;
  }

  @Get()
  async get() {
    const blogs = await this.blogsService.get();
    return blogs;
  }

  @Get(':id')
  async getById(@Param('id') id: string) {
    const blog = await this.blogsService.getById(id);
    return blog;
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateBlogDto: UpdateBlogDto) {
    const updatedBlog = await this.blogsService.update(id, updateBlogDto);

    return updatedBlog;
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    const deletedBlog = await this.blogsService.softDetele(id);

    return deletedBlog;
  }
}
