import { ApiProperty } from '@nestjs/swagger';

export class CreateCategoryDto {
  @ApiProperty()
  readonly name: string;

  @ApiProperty({ required: false })
  readonly description: string;

  @ApiProperty()
  readonly order: number;
}
