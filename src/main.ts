import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  let port=process.env.PORT||3000
  
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  
  await app.listen(port, () => {
    console.log(`App running on port ${port} `);
  });
}
bootstrap();
