import { PartialType } from '@nestjs/swagger';
import { CreateBlogDto } from 'src/blogs/dto/create-blog.dto';

export class UpdateBlogDto extends PartialType(CreateBlogDto) {}
