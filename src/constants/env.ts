import { ENVIRONMENTS } from "./enums/environments";

const currentEnv = ENVIRONMENTS.DEV;

const host = {
  PORT: currentEnv === ENVIRONMENTS.DEV ? 3000 : 5000,
  ADDRESS: currentEnv === ENVIRONMENTS.DEV ? `http://localhost` : `http://127.0.0.1`
}

export const HOST_URL = `${host.ADDRESS}:${host.PORT}/`

