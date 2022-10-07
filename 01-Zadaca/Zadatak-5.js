
    var cammelCase = (str) => {
        return str.replace(/\W+(.)/g, function(match, chr)
        {
             return chr.toUpperCase();
         });
    };

    console.log(cammelCase("Web apps vjezbe"));