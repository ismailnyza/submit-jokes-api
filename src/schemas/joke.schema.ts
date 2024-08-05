import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';

export type JokeDocument = Joke & Document;

@Schema()
export class Joke {
  @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'JokeType' })
  type: MongooseSchema.Types.ObjectId;

  @Prop()
  content: string;

  @Prop()
  status: string;
}

export const JokeSchema = SchemaFactory.createForClass(Joke);
