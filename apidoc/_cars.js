
/**
 * @api {get} /cars GetCars
 * @apiDescription Obtiene la lista de automoviles
 * @apiName GetCars
 * @apiGroup Cars
 * @apiPermission Login-Token
 * @apiHeaderExample {json} Headers:
 *  {
 *     "Content-Type": "application/json"
 *     "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MywibmFtZSI6IkpvcmdlIiwicm9sZSI6MiwiaWF0IjoxNTkzNjE5NzU0LCJleHAiOjE1OTM2NDg1NTR9.xQVGg_B0jUMQUFeZcyprGta44dEt6FQ_wa7bEiHdxRc"
 *  }
 * @apiSuccess {Object[]} cars Lista de automoviles
 * @apiSuccess {Number} cars.id Identificador del automovil
 * @apiSuccess {String} cars.plates Placas del automovil
 * @apiSuccess {String} cars.brand Marca del automovil
 * @apiSuccess {String} cars.color Color del automovil
 * @apiSuccess {String} cars.model Modelo del automovil
 * @apiSuccess {Decimal} cars.lat Latitud de la ubicacion
 * @apiSuccess {Decimal} cars.lng Longitud de la ubicacion
 * @apiSuccess {String} cars.id_user Identificador del propietario del automovil
 * @apiSuccessExample Success-Response:
 * HTTP/1.1 200 OK
 * [
    {
        "id": 7,
        "plates": "ABG-30-41",
        "brand": "Toyota",
        "color": "Naranja",
        "model": "Corolla",
        "lat": "20.96196920",
        "lng": "20.96196920",
        "id_user": 1
    },
    {
        "id": 8,
        "plates": "YZQ-705-F",
        "brand": "Toyota",
        "color": "Verde",
        "model": "Hilux",
        "lat": null,
        "lng": null,
        "id_user": 1
    }
  ]
 * @apiError Unauthorized Si se omite el token o se envia un token no valido
 * @apiErrorExample Unauthorized
 *  HTTP/1.1 401 Unauthorized
 * @apiError NotFound El usuario no tiene automoviles
 * @apiErrorExample NotFound
 *  HTTP/1.1 404
 * {
 *    "error": "Automoviles no encontrados"
 * }
 *
 * @apiError InternalServerError Problemas en el servidor
 * @apiErrorExample InternalServerError
 *  HTTP/1.1 500 Internal Server Error
 */
/**
 * @api {get} /cars/:id GetCarById
 * @apiDescription Obtiene los datos del automovil
 * @apiName GetCar
 * @apiGroup Cars
 * @apiPermission Login-Token
 * @apiHeaderExample {json} Headers:
 *  {
 *     "Content-Type": "application/json"
 *     "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MywibmFtZSI6IkpvcmdlIiwicm9sZSI6MiwiaWF0IjoxNTkzNjE5NzU0LCJleHAiOjE1OTM2NDg1NTR9.xQVGg_B0jUMQUFeZcyprGta44dEt6FQ_wa7bEiHdxRc"
 *  }
 * @apiParam {Number} id Id del automovil
 * @apiSuccess {Number} id Identificador del automovil
 * @apiSuccess {String} plates Placas del automovil
 * @apiSuccess {String} brand Marca del automovil
 * @apiSuccess {String} color Color del automovil
 * @apiSuccess {String} model Modelo del automovil
 * @apiSuccess {Decimal} lat Latitud de la ubicacion
 * @apiSuccess {Decimal} lng Longitud de la ubicacion
 * @apiSuccess {String} id_user Identificador del propietario del automovil
 * @apiSuccessExample Success-Response:
 * HTTP/1.1 200 OK
    {
        "id": 7,
        "plates": "ABG-30-41",
        "brand": "Toyota",
        "color": "Naranja",
        "model": "Corolla",
        "lat": "20.96196920",
        "lng": "20.96196920",
        "id_user": 1
    }
 * @apiError Unauthorized Si se omite el token o se envia un token no valido y si no es propietario del automovil
 * @apiErrorExample Unauthorized
 *  HTTP/1.1 401 Unauthorized
 * @apiErrorExample Unauthorized
 *  HTTP/1.1 401
 * {
 *    "error": "No tiene permisos para visualizar este recurso"
 * }
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

/**
 * @api {post} /cars InsertCar
 * @apiDescription Agrega un nuevo automovil al catalogo
 * @apiName PostCars
 * @apiGroup Cars
 * @apiPermission Login-Token
 * @apiHeaderExample {json} Headers:
 *  {
 *     "Content-Type": "application/json"
 *     "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MywibmFtZSI6IkpvcmdlIiwicm9sZSI6MiwiaWF0IjoxNTkzNjE5NzU0LCJleHAiOjE1OTM2NDg1NTR9.xQVGg_B0jUMQUFeZcyprGta44dEt6FQ_wa7bEiHdxRc"
 *  }
 * @apiParam {String} plates Placas del automovil
 * @apiParam {String} brand Marca del automovil
 * @apiParam {String} color Color del automovil
 * @apiParam {String} model Modelo del automovil
 * @apiParamExample {JSON} Request
 * {
        "plates": "ABG-30-41",
        "brand": "Toyota",
        "color": "Naranja",
        "model": "Corolla"
    }
 * @apiSuccess {Object} car Datos del automovil
 * @apiSuccess {Number} car.id Identificador del automovil
 * @apiSuccess {String} car.plates Placas del automovil
 * @apiSuccess {String} car.brand Marca del automovil
 * @apiSuccess {String} car.color Color del automovil
 * @apiSuccess {String} car.model Modelo del automovil
 * @apiSuccess {Decimal} car.lat Latitud de la ubicacion
 * @apiSuccess {Decimal} car.lng Longitud de la ubicacion
 * @apiSuccess {String} car.id_user Identificador del propietario del automovil
 * @apiSuccessExample Success-Response:
 * HTTP/1.1 200 OK
 *
    {
        "id": 7,
        "plates": "ABG-30-41",
        "brand": "Toyota",
        "color": "Naranja",
        "model": "Corolla",
        "lat": null,
        "lng": null,
        "id_user": 1
    }

 * @apiError Unauthorized Si se omite el token o se envia un token no valido
 * @apiErrorExample Unauthorized
 *  HTTP/1.1 401 Unauthorized
 * @apiError BadRequest Errores por las validaciones de json schema como pueden ser enviar un tipo diferente de dato, omitir algun dato, longitud de los datos.
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
 * @apiError InternalServerError Problemas en el servidor
 * @apiErrorExample InternalServerError
 *  HTTP/1.1 500 Internal Server Error
 */

 /**
 * @api {patch} /cars/:id PatchCar
 * @apiDescription Actualiza los datos del automovil
 * @apiName PatchCar
 * @apiGroup Cars
 * @apiPermission Login-Token
 * @apiHeaderExample {json} Headers:
 *  {
 *     "Content-Type": "application/json"
 *     "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MywibmFtZSI6IkpvcmdlIiwicm9sZSI6MiwiaWF0IjoxNTkzNjE5NzU0LCJleHAiOjE1OTM2NDg1NTR9.xQVGg_B0jUMQUFeZcyprGta44dEt6FQ_wa7bEiHdxRc"
 *  }
 *  * @apiParam {Number} id Id del automovil
 * @apiParam {String} plates Placas del automovil
 * @apiParam {String} brand Marca del automovil
 * @apiParam {String} color Color del automovil
 * @apiParam {String} model Modelo del automovil
 * @apiParamExample {JSON} Request
 * {
        "plates": "ABG-30-41",
        "brand": "Toyota",
        "color": "Naranja",
        "model": "Corolla"
    }
 * @apiSuccess {Object} car Datos del automovil
 * @apiSuccess {Number} car.id Identificador del automovil
 * @apiSuccess {String} car.plates Placas del automovil
 * @apiSuccess {String} car.brand Marca del automovil
 * @apiSuccess {String} car.color Color del automovil
 * @apiSuccess {String} car.model Modelo del automovil
 * @apiSuccess {Decimal} car.lat Latitud de la ubicacion
 * @apiSuccess {Decimal} car.lng Longitud de la ubicacion
 * @apiSuccess {String} car.id_user Identificador del propietario del automovil
 * @apiSuccessExample Success-Response:
 * HTTP/1.1 200 OK
 *
    {
        "id": 7,
        "plates": "ABG-30-41",
        "brand": "Toyota",
        "color": "Naranja",
        "model": "Corolla",
        "lat": null,
        "lng": null,
        "id_user": 1
    }

 * @apiError Unauthorized Si se omite el token o se envia un token no valido o no es propietario del automovil
 * @apiErrorExample Unauthorized
 *  HTTP/1.1 401 Unauthorized
 * @apiErrorExample Unauthorized
 *  HTTP/1.1 401
 * {
 *    "error": "No tiene permisos para visualizar este recurso"
 * }
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

/**
 * @api {del} /cars/:id DeleteCar
 * @apiDescription Elimina un automovil
 * @apiName DeletCar
 * @apiGroup Cars
 * @apiPermission Login-Token
 * @apiHeaderExample {json} Headers:
 *  {
 *     "Content-Type": "application/json"
 *     "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MywibmFtZSI6IkpvcmdlIiwicm9sZSI6MiwiaWF0IjoxNTkzNjE5NzU0LCJleHAiOjE1OTM2NDg1NTR9.xQVGg_B0jUMQUFeZcyprGta44dEt6FQ_wa7bEiHdxRc"
 *  }
 * @apiParam {Number} id Id del automovil
 * @apiSuccessExample Success-Response:
 * HTTP/1.1 200 OK
 *
    {
        "message": "Automovil eliminado con exito"
    }

 * @apiError Unauthorized Si se omite el token o se envia un token no valido o no es propietario del automovil
 * @apiErrorExample Unauthorized
 *  HTTP/1.1 401 Unauthorized
 * @apiErrorExample Unauthorized
 *  HTTP/1.1 401
 * {
 *    "error": "No tiene permisos para visualizar este recurso"
 * }
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

