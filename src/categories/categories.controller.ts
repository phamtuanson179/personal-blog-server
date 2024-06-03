import { CreateCategoryDto } from '@categories/dto/create-category.dto';
import { UpdateCategoryDto } from '@categories/dto/update-category.dto';
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
import { CategoriesService } from 'src/categories/categories.service';

@ApiTags('categories')
@Controller('categories')
@UseInterceptors(TransformResponseInterceptor)
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  @Post()
  async create(@Body() createCategoryDto: CreateCategoryDto) {
    const createdCategory =
      await this.categoriesService.create(createCategoryDto);
    return createdCategory;
  }

  @Get()
  async get() {
    const categories = await this.categoriesService.get();
    return categories;
  }

  @Get(':id')
  async getById(@Param('id') id: string) {
    const category = await this.categoriesService.getById(id);
    return category;
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateCategoryDto: UpdateCategoryDto,
  ) {
    const updatedCategory = await this.categoriesService.update(
      id,
      updateCategoryDto,
    );

    return updatedCategory;
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    const deletedCategory = await this.categoriesService.softDelete(id);
    return deletedCategory;
  }
}
