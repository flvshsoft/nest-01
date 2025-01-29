import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql', // Ganti sesuai database yang digunakan
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'belajar_nest',
      autoLoadEntities: true, // Load entity otomatis
      synchronize: true, // Auto sync database
      entities: [User],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
