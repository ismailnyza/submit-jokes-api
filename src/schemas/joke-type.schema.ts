import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({
  toJSON: {
    transform: function (doc, ret) {
      ret.id = ret._id;
      delete ret._id;
      delete ret.__v;
    },
  },
})
export class JokeType extends Document {
  @Prop({ required: true, unique: true })
  name: string;
}

export const JokeTypeSchema = SchemaFactory.createForClass(JokeType);
