-- CreateTable
CREATE TABLE "locale" (
    "id" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "latitude" DOUBLE PRECISION,
    "longitude" DOUBLE PRECISION,

    CONSTRAINT "locale_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "forecast" (
    "id" TEXT NOT NULL,
    "period_begin" TIMESTAMP(3) NOT NULL,
    "period_end" TIMESTAMP(3) NOT NULL,
    "localeId" INTEGER,

    CONSTRAINT "forecast_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "weather" (
    "id" SERIAL NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "text" TEXT NOT NULL,
    "temperature_max" INTEGER NOT NULL,
    "temperature_min" INTEGER NOT NULL,
    "rain_precipitation" INTEGER NOT NULL,
    "rain_probability" INTEGER NOT NULL,
    "forecastId" TEXT NOT NULL,

    CONSTRAINT "weather_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "forecast" ADD CONSTRAINT "forecast_localeId_fkey" FOREIGN KEY ("localeId") REFERENCES "locale"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "weather" ADD CONSTRAINT "weather_forecastId_fkey" FOREIGN KEY ("forecastId") REFERENCES "forecast"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
