// wraplog is a higher order function that takes a function as an argument and returns a new function that logs the arguments and return value of the original function.

import { NextFunction, Request, Response } from "express";
import { Logger } from 'common';
// this function should log all the request body, params, query, and headers
const wrapLog = (func: Function, message: string) => {
	return (req: Request, res: Response, next: NextFunction) => {
		Logger.info('Request Body');
		Logger.debug(JSON.stringify(req.body));
		Logger.info('Request Params');
		Logger.debug(JSON.stringify(req.params));
		Logger.info('Request Query');
		Logger.debug(JSON.stringify(req.query));
		Logger.info('Request Headers');

		const headers = req.headers;
		Object.keys(headers).forEach((key) => {
			Logger.debug(`${key}: ${headers[key]}`);
		});

		func(req, res, next);
		Logger.info(message);
	};
};
