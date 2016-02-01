/* @flow */
import isotropyBody from "isotropy-body";
import type { IncomingMessage, ServerResponse } from "./flow/http-types";

export default async function(req: IncomingMessage, res: ServerResponse, options: Object) : Promise {
  req.body = await isotropyBody(req, options);
}
