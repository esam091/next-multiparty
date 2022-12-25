import { NextApiRequest, NextApiResponse } from 'next';
import { EnhancedFile } from './lib/helpers';
import { HTTP_METHOD } from './lib/types';
import formidable from 'formidable';
export declare type FormNextApiRequest = NextApiRequest & {
    files: EnhancedFile[];
    file?: EnhancedFile;
    fields: Record<string, string>;
};
declare type Options = {
    allowedMethods?: HTTP_METHOD[];
    cleanupFiles?: boolean;
    formidableOptions?: formidable.Options;
};
/**
 * A higher order function that takes a handler function and returns a new handler function
 * that will parse the request body and attach all files from a `multipart/form-data` request
 * to the request object as `req.files` or `req.file`.
 * @param handler The request handler to wrap
 * @param options Options to configure the behavior of the higher order function
 * @returns the wrapped handler function
 */
export declare function withFileUpload<RequestGeneric extends FormNextApiRequest = FormNextApiRequest, ResponseGeneric extends NextApiResponse = NextApiResponse>(handler: (req: RequestGeneric, res: ResponseGeneric) => Promise<void> | void, options?: Options): (req: NextApiRequest, res: ResponseGeneric) => Promise<void>;
export {};
