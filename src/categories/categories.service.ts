import { Category } from '@categories/categories.schema';
import { UpdateCategoryDto } from '@categories/dto/update-category.dto';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateCategoryDto } from 'src/categories/dto/create-category.dto';

@Injectable()
export class CategoriesService {
  constructor(
    @InjectModel(Category.name) private readonly categoryModel: Model<Category>,
  ) {}

  async create(createCategoryDto: CreateCategoryDto): Promise<Category> {
    const res = await this.categoryModel.create({
      ...createCategoryDto,
      isDeleted: false,
    });

    return res;
  }

  async get(): Promise<Category[]> {
    const res = await this.categoryModel.find();
    return res;
  }

  async update(
    id: string,
    updateCategoryDto: UpdateCategoryDto,
  ): Promise<Category> {
    const res = await this.categoryModel.findOneAndUpdate(
      { _id: id },
      updateCategoryDto,
      { returnOriginal: false },
    );

    return res;
  }

  async detele(id: string) {
    const res = await this.categoryModel.deleteOne({ id });
    return res;
  }

  async softDetele(id: string) {
    const res = await this.categoryModel.findByIdAndUpdate(
      { _id: id },
      { isDeleted: true },
      { returnOriginal: false },
    );
    return res;
  }
}
