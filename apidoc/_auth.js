/**
 * @api {post} /login Login
 * @apiDescription Login de usuario
 * @apiName Login
 * @apiGroup Auth
 * @apiPermission none
 * @apiHeaderExample {json} Headers:
 *  {
 *     "Content-Type": "application/json"
 *  }
 * @apiParam {String}   email Email del usuario
 * @apiParam {String}   password Password del usario
 * @apiParamExample {JSON} Request
 * {
 *    "email": "ing.victopalomo@gmail.com",
 *    "password": "password"
 * }
 * @apiSuccess {String} token Token que se utiliza dentro de la aplicación para poder administrar el catalogo de automoviles
 * @apiSuccessExample Success-Response:
 * HTTP/1.1 200 OK
 * {
 *    token: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MywibmFtZSI6IkpvcmdlIiwicm9sZSI6MiwiaWF0IjoxNTkzNjY3NjYyLCJleHAiOjE1OTM2OTY0NjJ9.7k0KumLm5vyxEKXD2pzuZEdt9rdT3NraISgh-eYkvx4"
 * }
 * @apiError Unauthorized Si no se envian parametros(email o password), Si los parametros no se encuentran en la base de datos
 * @apiErrorExample Unauthorized
 *  HTTP/1.1 401 Unauthorized
 *
 * @apiError InternalServerError Problemas en el servidor
 * @apiErrorExample InternalServerError
 *  HTTP/1.1 500 Internal Server Error
 */
