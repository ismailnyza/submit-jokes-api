import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { JokeType } from './joke-type.schema';

@Schema({
  toJSON: {
    transform: function (doc, ret) {
      ret.id = ret._id;
      delete ret._id;
      delete ret.__v;
    },
  },
})
export class Joke extends Document {
  @Prop({ required: true })
  content: string;

  @Prop({ required: true, type: Types.ObjectId, ref: 'JokeType' })
  type: JokeType;
}

export const JokeSchema = SchemaFactory.createForClass(Joke);
