import * as path from 'path';
import { description, name, version } from '../package.json';

/**
 * Environment variables
 */

const env = {
	app: {
		base_url: process.env.BASE_URL || '',
		baseImageUrl: process.env.BASE_IMAGE_URL,
		isProduction: process.env.NODE_ENV === 'production',
		isDevelopment: process.env.NODE_ENV === 'development',
		root_path: path.join(process.cwd()),
		path_file_upload: path.join(
			process.cwd(),
			process.env.UPLOAD_DIR || 'uploads',
		),
		name,
		version,
		description,
		port: Number(process.env.PORT) || 3001,
		saltRounds: process.env.SALT_ROUNDS || 10,
		cors: process.env.CORS?.split(',') || '*',
		jwtSecret: process.env['JWT_SECRET'] || '123456',
		jwtExpiredIn: process.env['JWT_EXPIRED_IN'] || '30m',
		refreshTokenSecret: process.env['REFRESH_TOKEN_SECRET'] || '1234567',
		refreshTokenExpiredIn:
			process.env['REFRESH_TOKEN_EXPIRED_IN'] || '100m',
		bodyPayloadLimit: process.env.LIMIT_PAYLOAD || '50mb',
		debugLog: process.env.DEBUG_LOG === 'true',
		cookieSecret: process.env.COOKIE_SECRET || '123456',
	},
	database: {
		mongoUri: process.env.MONGO_URI || '',
	},
	mail: {
		host: process.env.MAIL_HOST || '',
		port: process.env.MAIL_PORT || '',
		user: process.env.MAIL_USER || '',
		pass: process.env.MAIL_PASS || '',
		from: process.env.MAIL_FROM_NAME || '',
	},
	lineLogin: {
		clientId: process.env.LINE_CLIENT_ID || '',
		clientSecret:
			process.env.LINE_CLIENT_SECRET ||
			'',
		redirectUri:
			process.env.LINE_REDIRECT_URI ||
			'http://localhost:3000/api/v1/callback',
		lineLoginUrl:
			process.env.LINE_LOGIN_URL ||
			'',
		lineOauthUrl:
			process.env.LINE_OAUTH_URL || '',
	},
	webapp: {
		url: process.env.WEBAPP_URL || 'http://localhost:3000',
	},
	payjp: {
		privateKey:
			process.env.PRIVATE_KEY_PAYJP || '',
		webhooKey:
			process.env.WEBHOOK_KEY_PAYJP || '',
	},
	s3: {
		endpoint: process.env.AWS_END_POINT || '',
		accessKeyId: process.env.AWS_ACCESS_KEY_ID || '',
		secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY || '',
		region: process.env.AWS_REGION,
		bucket: process.env.AWS_S3_BUCKET_NAME || '',
	}
};

if (process.env.DEBUG_LOG) {
	console.log('env', env);
}

export default env;
