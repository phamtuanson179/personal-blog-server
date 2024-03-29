import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type CategoryDocument = HydratedDocument<Category>;

@Schema({
  timestamps: true,
})
export class Category {
  @Prop({ required: true })
  name: string;

  @Prop()
  description: string;

  @Prop()
  order: number;

  @Prop()
  updatedAt: number;

  @Prop()
  createdAt: number;

  @Prop()
  isDeleted: boolean;
}

export const CategorySchema = SchemaFactory.createForClass(Category);
