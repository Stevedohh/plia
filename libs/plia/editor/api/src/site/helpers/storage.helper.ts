import { writeFile, rm, mkdir, rename } from 'node:fs/promises';
import { PublishSiteDto } from '../dto/publish-site.dto';
import { BASE_HTML } from '../constants/site.constants';
import { Injectable } from '@nestjs/common';

@Injectable()
export class HtmlFileService {
  getSitePath(siteUrl: string) {
    return `/var/www/sites/${siteUrl}`;
  }

  async create(data: PublishSiteDto) {
    const fileData = BASE_HTML.replace('{{css}}', data.css).replace('{{html}}', data.html);
    const path = this.getSitePath(data.url);

    await rm(path, { recursive: true }).catch(console.log);
    await mkdir(path, { recursive: true });

    await writeFile(`${path}/index.html`, fileData, { encoding: 'utf-8' });
  }

  async delete(url) {
    await rm(this.getSitePath(url), { recursive: true }).catch(console.log);
  }

  async rename(oldUrl, newUrl) {
    await rename(`${this.getSitePath(oldUrl)}`, `${this.getSitePath(newUrl)}`);
  }
}
