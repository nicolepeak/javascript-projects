function processor(transmission) {
    if (transmission.indexOf("::") < 0) {
       // Data is invalid
       return -1;
    }

    let parts = transmission.split("::");
    let rawData = parts[1];

    if (rawData[0] !== "<" || rawData[rawData.length - 1] !== ">") {
       rawData = -1;
    } else if (rawData.indexOf("<") > rawData.indexOf(">") || rawData.indexOf("<") > rawData.indexOf(">")) {
        // Invalid if '<' comes after '>'
        return -1;
    }
    return {
       id: Number(parts[0]),
       rawData: rawData
    };
 }

 module.exports = processor;