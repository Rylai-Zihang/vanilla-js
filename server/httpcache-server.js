const koa = require("koa");
const koaRouter = require("koa-router");
const fs = require("fs");
const path = require("path");
const etag = require("koa-etag");

const app = new koa();
const router = new koaRouter();

let assetPath = path.join(__dirname, "/assets");

app.use(etag());

// app.use(async (ctx, next)=> {
//     ctx.set('Cache-Control', 'public, max-age=10');
//     await next();
// })

router.get("user", "/user",async (ctx, next) => {
    const { response, request } = ctx;
    console.log(ctx.fresh)
    const { query } = request;
    const { time } = query
    let filePath = path.join(assetPath, "./test.txt");
    let fileInfo = fs.statSync(filePath);
    const ifModifiedSince = ctx.headers['if-modified-since'];
    let lastModified = fileInfo.mtime.toGMTString();
    if (ctx.fresh) {
        ctx.status = 304;
        return;
    }
    // if (ifModifiedSince === lastModified) {
    //     console.log(`time: ${time} 304`)
    //     ctx.status = 304;
    // }
    else {
        console.log(`time: ${time} modified`)
        ctx.set("Last-Modified", lastModified)
        let file = fs.readFileSync(filePath);
        ctx.body = file;
    }
    await next();
})

// 支持跨域
app.use(async (ctx, next)=> {
    ctx.set('Access-Control-Allow-Origin', '*');
    ctx.set('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
    ctx.set('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
    await next();
});

app.use(router.routes());

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`running on port ${PORT}`));
