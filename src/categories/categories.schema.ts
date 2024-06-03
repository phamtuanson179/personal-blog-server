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

  @Prop({ unique: true })
  order: number;

  @Prop()
  updatedAt: number;

  @Prop()
  createdAt: number;

  @Prop()
  isDeleted: boolean;
}

export const CategorySchema = SchemaFactory.createForClass(Category);

CategorySchema.virtual('id').get(function () {
  return this._id.toHexString();
});

// Ensure virtual fields are serialised.
CategorySchema.set('toJSON', {
  virtuals: true,
});

CategorySchema.set('toObject', {
  virtuals: true,
});
