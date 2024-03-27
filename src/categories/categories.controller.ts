import { UpdateCategoryDto } from '@categories/dto/update-category.dto';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CategoriesService } from 'src/categories/categories.service';
import { CreateCategoryDto } from 'src/categories/dto/create-category.dto';

@ApiTags('categories')
@Controller('categories')
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  @Post()
  async create(@Body() createCategoryDto: CreateCategoryDto) {
    await this.categoriesService.create(createCategoryDto);
  }

  @Get()
  async get() {
    await this.categoriesService.get();
  }

  @Put()
  async update(
    @Param('id') id: string,
    @Body() updateCategoryDto: UpdateCategoryDto,
  ) {
    await this.categoriesService.update(id, updateCategoryDto);
  }

  @Delete()
  async delete(@Param('id') id: string) {
    await this.categoriesService.detele(id);
  }
}
