import * as express from "express";
import { Connection } from "typeorm";
import { LocaleRepository, WeatherRepository } from "./repositories";

export interface IContext {
  captureException(error: Error): void;
  app: express.Application;
  db: {
    connection: Connection;
    locales: LocaleRepository;
    weathers: WeatherRepository;
  };
  integrations: {};
}

export class Context {
  private static instance: IContext;

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  private constructor() {}

  public static getInstance(): IContext {
    if (Context.instance === undefined) {
      throw Error("Context not created yet");
    }

    return Context.instance;
  }

  public static createContext(args: { connection: Connection; app: express.Application }) {
    const { connection, app } = args;

    Context.instance = {
      app,
      captureException: () => null,
      db: {
        connection,
        locales: connection.getCustomRepository(LocaleRepository),
        weathers: connection.getCustomRepository(WeatherRepository),
      },
      integrations: {},
    };
  }
}
