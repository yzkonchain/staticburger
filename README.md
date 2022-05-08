## Build
> yarn export

or

> npm run export

## Config

### Publish on github
- **next.config.js**
> const mode = 'github'<br/>
baseURL = '**https://yzkonchain.github.io**'<br/>
basePath = '**/staticburger**'
- **pages/_app.tsx**
> \<Head><br/>
　　\<link rel='shortcut icon' type='image/x-icon' href='**/staticburger**/favicon.ico'></link><br/>
\</Head>

### Publish on server
- **next.config.js**
> const mode = 'server'<br/>
baseURL = '**http://domain**'<br/>
basePath = ''
- **pages/_app.tsx**
> \<Head><br/>
　　\<link rel='shortcut icon' type='image/x-icon' href='**/favicon.ico**'></link><br/>
\</Head>

### Debug by local
- **next.config.js**
> const mode = 'dev'<br/>
baseURL = '/'<br/>
basePath = ''
- **run**
> yarn dev
- **browser**
> localhost:3000