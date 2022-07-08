import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://Portes:Antso2003@cluster.ubdvy.mongodb.net/db_api_nest'),
    UsersModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
