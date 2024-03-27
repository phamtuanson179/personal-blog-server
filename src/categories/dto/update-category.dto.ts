import { ApiProperty } from '@nestjs/swagger';
import { CreateCategoryDto } from 'src/categories/dto/create-category.dto';

export class UpdateCategoryDto implements CreateCategoryDto {
  @ApiProperty()
  name: string;

  @ApiProperty({ required: false })
  description: string;

  @ApiProperty()
  order: number;
}
