import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type BlogDocument = HydratedDocument<Blog>;

@Schema({
  timestamps: true,
})
export class Blog {
  @Prop({ required: true })
  name: string;

  @Prop()
  summary: string;

  @Prop()
  thumbnail: string;

  @Prop({ required: true })
  content: string;

  @Prop({ required: true })
  categoryIds: string[];

  @Prop()
  tags: string[];

  @Prop()
  updatedAt: number;

  @Prop()
  createdAt: number;

  @Prop()
  isDeleted: boolean;
}

export const BlogSchema = SchemaFactory.createForClass(Blog);
