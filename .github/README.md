# FundEase

![Logo Codicon](../src/assets/codicon.png)

FundEase es un proyecto presentado en la Hackathon de Codicon 2023, que busca facilitar la utilidad del sobrante en efectivo utilizado en los pagos de servicios en apps mobile para servicios de transporte, comida, etc. para que este pueda ser donado a fundaciones sin fines de lucro, simplificando el proceso de pago al prestador del servicio al evitar la gestión del vuelto entre usuario y prestador.

## Iniciar el proyecto

Recuerde copiar el archivo `.env.example` a `.env` y configurar el endpoint asociado al ![backend del app](https://github.com/Akrista/codicon-05-back).

Puede ejecutar fácilmente el proyecto de dos maneras:

### Via Docker

Se requiere tener instalado [Docker](https://docs.docker.com/get-docker/) y [Docker Compose](https://docs.docker.com/compose/install/).

```bash
# Compilar la imagen
docker-compose build
# Correr el proyecto
docker-compose up -d --force-recreate
```

### Via NPM / Yarn / PNPM

Se requiere tener instalado [Node.js](https://nodejs.org/en/download/).

```bash
# Instalar dependencias
npm install
# Correr el proyecto
npm run dev
# Con Yarn
yarn install
yarn dev
# Con PNPM
pnpm install
pnpm dev
```
