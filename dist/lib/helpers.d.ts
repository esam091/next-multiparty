/// <reference types="node" />
import formidable from 'formidable';
import { NextApiRequest } from 'next';
export declare type EnhancedFile = formidable.File & {
    name: string;
    toBuffer: () => Promise<Buffer>;
    destroy: () => Promise<void>;
};
/**
 * Asynchronous wrapper around formidable
 * which parses the request body and attaches all files and fields from a `multipart/form-data` request
 * to the request object as `req.files` (`req.file`) or `req.fields`.
 * files and files are flattened into a single entry
 * @param req The request object
 * @returns the files
 */
export declare function parseForm(req: NextApiRequest, options?: formidable.Options): Promise<{
    files: EnhancedFile[];
    fields: Record<string, string>;
}>;
/**
 * A small helper function to wrap the api route config with the
 * *needed* configuration for the `withFileUpload` higher order function.
 * @param config the default api route config
 * @returns the passed config merged with the necessary config for the `withFileUpload` higher order function
 */
export declare function getConfig(config?: Record<string, any>): {
    api: any;
};
