 /**
 * @api {patch} /location/:id UpdateLocationCar
 * @apiDescription Actualiza la ubicacion del automovil
 * @apiName UpdateLocation
 * @apiGroup Location
 * @apiHeaderExample {json} Headers:
 *  {
 *     "Content-Type": "application/json"
 *  }
 * @apiParam {Number} id Id del automovil
 * @apiParam {Decimal} lat Latitud
 * @apiParam {Decimal} lng Longitud
 * @apiParamExample {JSON} Request
 * {
        "lat": 20.9619692,
        "lng": -89.5403268
 * }
 * @apiSuccessExample Success-Response:
 * HTTP/1.1 200 OK
 *
    {
        "message": "Ubicación Actualizada con exito"
    }
 * @apiError BadRequest Errores por las validaciones de json schema como pueden ser enviar un tipo diferente de dato o longitud de los datos.
 *@apiErrorExample BadRequest
 *  HTTP/1.1 400
 * {
    "error": [
        {
            "field": "brand",
            "error": [
                "required"
            ]
        }
     ]
   }
 * @apiError NotFound No se encontro el automovil
 * @apiErrorExample NotFound
 *  HTTP/1.1 404
 * {
 *    "error": "Automovil no encontrado"
 * }
 *
 * @apiError InternalServerError Problemas en el servidor
 * @apiErrorExample InternalServerError
 *  HTTP/1.1 500 Internal Server Error
 */
