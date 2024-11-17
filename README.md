# Conexión a la base de datos de MongoDB con prisma

1. Instalar prisma

```npm install prisma```

2. invocar prisma e inicializar el archivo schema de prisma

```
npm prisma
npm prisma init
```

3. Configurar la variable de entorno generada con la URL de conecxión a la base de datos

4. Crear el schema de prisma, luce algo asi:

```
model Post {
  id       String    @id @default(auto()) @map("_id") @db.ObjectId
  slug     String    @unique
  title    String
  body     String
  author   User      @relation(fields: [authorId], references: [id])
  authorId String    @db.ObjectId
  comments Comment[]
}
```

5. Instalar el cliente de prisma

```npm install @prisma/client```

 - Cada vez que modifique el schema prisma debe invocar ```npm prisma db psuh``` para sincronizar el cliente con la base de datos

 6. Crear el archivo src/lib/prisma.js/ts y generar el acceso del cliente prisma 

 ```
 import { PrismaClient } from '@prisma/client';

let prisma;

if (process.env.NODE_ENV === 'production') {
  prisma = new PrismaClient();
} else {
  if (!global.prisma) {
    global.prisma = new PrismaClient();
  }
  prisma = global.prisma;
}

export default prisma;
```

# TODO LISTO PARA CONECTARSE A LA BASE DE DATOS





