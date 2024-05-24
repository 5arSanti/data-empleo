--
-- Base de datos: `qadataempleodb`
--

--
-- Estructura de tabla para la tabla `slider_data`
--

CREATE TABLE `slider_data` (
  `id` int(11) NOT NULL,
  `NOMBRE` varchar(50) NOT NULL,
  `SUBTITULO` varchar(200) DEFAULT NULL,
  `VALOR` int(20) NOT NULL,
  `PORCENTAJE` int(5) NOT NULL,
  `ICONO` varchar(255) NOT NULL,
  `FECHA_CREACION` datetime(6) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Indices de la tabla `slider_data`
--
ALTER TABLE `slider_data`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de la tabla `slider_data`
--
ALTER TABLE `slider_data`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;
COMMIT;