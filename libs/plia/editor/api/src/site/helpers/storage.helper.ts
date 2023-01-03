import { writeFile } from 'node:fs/promises';
import { PublishSiteDto } from '../dto/publish-site.dto';

type CreateFileInput = {
  fileName?: string;
  data: PublishSiteDto;
};

const baseHtml = `<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');

        html, body, div, span, applet, object, iframe,
        h1, h2, h3, h4, h5, h6, p, blockquote, pre,
        a, abbr, acronym, address, big, cite, code,
        del, dfn, em, img, ins, kbd, q, s, samp,
        small, strike, strong, tt, var,
        b, u, i, center,
        dl, dt, dd, ol, ul, li,
        fieldset, form, label, legend,
        table, caption, tbody, tfoot, thead, tr, th, td,
        article, aside, canvas, details, embed,
        figure, figcaption, footer, header, hgroup,
        menu, nav, output, ruby, section, summary,
        time, mark, audio, video {
            margin: 0;
            padding: 0;
            border: 0;
            font-size: 100%;
            vertical-align: baseline;
            font-family: 'Roboto', sans-serif;
        }

        /* HTML5 display-role reset for older browsers */
        article, aside, details, figcaption, figure,
        footer, header, hgroup, menu, nav, section {
            display: block;
        }

        body {
            line-height: 1;
        }

        blockquote, q {
            quotes: none;
        }

        blockquote:before, blockquote:after,
        q:before, q:after {
            content: '';
        }

        table {
            border-collapse: collapse;
            border-spacing: 0;
        }
    </style>

    <style>
        .blockComponent {
            position: relative;
            border: 1px solid red;
            padding: 40px;
        }

        .bodyComponent {
            border: 1px solid cyan;
            padding: 40px;
        }

        .columnsComponent {
            display: flex;
            position: relative;
            border: 1px solid green;
            padding: 40px;
        }

        .columnComponent {
            border: 1px solid magenta;
            width: 100%;
            padding: 40px;
        }

        .textComponent p {
            margin-bottom: 1.25em;
        }

        .textComponent h2 + * {
            margin-top: 0;
        }

        .textComponent h2 {
            font-weight: 700;
            font-size: 1.5em;
            margin-top: 2em;
            margin-bottom: 1em;
            line-height: 1.3;
        }

        .textComponent h1 {
            font-weight: 800;
            font-size: 2.25em;
            margin-top: 0;
            margin-bottom: 0.88em;
            line-height: 1.11;
        }

        .textComponent h3 {
            font-weight: 600;
            font-size: 1.25em;
            margin-top: 1.6em;
            margin-bottom: 0.6em;
            line-height: 1.6;
        }

        .textComponent h4 {
            font-weight: 600;
            font-size: 1em;
            margin-top: 1.6em;
            margin-bottom: 0.6em;
            line-height: 1.6;
        }

        .textComponent ul, li {
            margin-top: 1.25em;
            margin-bottom: 1.25em;
        }
    </style>

    <style>
        {{css}}
    </style>
</head>
<body>
    {{html}}
</body>
</html>`;

export const createFile = async ({ fileName, data }: CreateFileInput) => {
  const fileData = baseHtml.replace('{{css}}', data.css).replace('{{html}}', data.html);

  await writeFile('index.html', fileData, { encoding: 'utf-8' });

  // -> open -> copy -> replace {{html}} -> save
};
