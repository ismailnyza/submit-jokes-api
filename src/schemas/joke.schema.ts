// src/schemas/joke.schema.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Joke extends Document {
  @Prop({ required: true })
  text: string;

  @Prop({ required: true })
  type: string;

  @Prop({ default: 'pending' })
  status: string;

  @Prop({ default: Date.now })
  createdAt: Date;

  @Prop({ default: Date.now })
  updatedAt: Date;
}

export const JokeSchema = SchemaFactory.createForClass(Joke);
