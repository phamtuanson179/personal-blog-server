import { Blog } from '@blogs/blogs.schema';
import { CreateBlogDto } from '@blogs/dto/create-blog.dto';
import { UpdateBlogDto } from '@blogs/dto/update-blog.dto';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class BlogsService {
  constructor(
    @InjectModel(Blog.name) private readonly blogModel: Model<Blog>,
  ) {}

  async create(createBlogDto: CreateBlogDto): Promise<Blog> {
    const res = await this.blogModel.create({
      ...createBlogDto,
      isDeleted: false,
    });

    return res;
  }

  async get(): Promise<Blog[]> {
    const res = await this.blogModel.find({ isDeleted: false });
    return res;
  }

  async getById(id: string): Promise<Blog> {
    const res = await this.blogModel.findById(id, { isDeleted: false });
    return res;
  }

  async update(id: string, updateBlogDto: UpdateBlogDto): Promise<Blog> {
    const res = await this.blogModel.findOneAndUpdate(
      { _id: id },
      updateBlogDto,
      { returnOriginal: false },
    );

    return res;
  }

  async detele(id: string) {
    const res = await this.blogModel.deleteOne({ id });
    return res;
  }

  async softDetele(id: string) {
    const res = await this.blogModel.findByIdAndUpdate(
      { _id: id },
      { isDeleted: true },
      { returnOriginal: false },
    );
    return res;
  }
}
