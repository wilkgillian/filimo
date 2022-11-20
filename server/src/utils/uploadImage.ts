import { Request } from 'express';
import S3Storage from './S3Storage';

export async function uploadImage(req: Request) {
  const { file } = req;
  const s3Storage = new S3Storage();

  const url_file = await s3Storage.saveFile(file.filename);
  return url_file;
}