module.exports = {
    HTML: (
        title,
        list,
        body,
        control,
        authStatusUI = '<a href="/auth/login">login</a>'
    ) => {
        return `
    <!doctype html>
    <html>
    <head>
      <title>WEB - ${title}</title>
      <meta charset="utf-8">
    </head>
    <body>
    ${authStatusUI}
      <h1><a href="/">WEB</a></h1>
      ${list}
      ${control}
      ${body}
    </body>
    </html>
    `;
    },
    list: (filelist) => {
        let list = "<ul>";
        let i = 0;
        while (i < filelist.length) {
            list =
                list +
                `<li><a href="/topic/${filelist[i]}">${filelist[i]}</a></li>`;
            i = i + 1;
        }
        list = list + "</ul>";
        return list;
    },
};
