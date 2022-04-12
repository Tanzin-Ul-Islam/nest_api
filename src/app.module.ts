import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { ProductModule } from './product/product.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { User } from './user/entities/user.entity';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'Tanzin',
      password: 'root',
      database: 'nest-db',
      entities: [User],
      synchronize: true,
    }),
    AuthModule,
    UserModule,
    ProductModule
  ],
})
export class AppModule {
  constructor(private connection: Connection) {}
 }
