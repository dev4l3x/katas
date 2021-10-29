
var dbKey = {};
var dbValue = {};

function urlShortener(longURL) {
    if(longURL in dbValue)
      return getUrl(dbValue[longURL]);
    let hashed = hash(longURL);
    dbKey[hashed] = longURL;
    dbValue[longURL] = hashed;
    return getUrl(hashed);
}

function urlRedirector(shortURL) {
    let hash = shortURL.split('/').pop();
    return dbKey[hash];
}

function getUrl(hash){
    return `short.ly/${hash}`;
}

function hash(input){
    const charNumber = 4;
    let output = '';
    let formattedInput = input.replace(/[^a-zA-Z]/g, '').toLowerCase();
    for(let i = 0 ; i < charNumber; i++)
    {

        var random = parseInt(Math.random() * Math.floor(formattedInput.length));
        var char = formattedInput.charAt(random);
        output += char;
    }
    return output
}