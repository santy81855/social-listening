// function to take in keylist as well as a list of values to change and return a new url
const UpdateUrl = (keyList, keyValues) => {
    console.log("keyList = " + JSON.stringify(keyList));
    console.log("values = ");
    keyValues.forEach((keyValue) => {
        console.log(keyValue);
    });
    keyValues.forEach((keyValue) => {
        keyList[keyValue.key] = keyValue.value;
    });
    return `?hashtags=${keyList.hashtags}&startDate=${keyList.startDate}&endDate=${keyList.endDate}&facebook=${keyList.facebook}&twitter=${keyList.twitter}&youtube=${keyList.youtube}&status=${keyList.status}&executionArn=${keyList.executionArn}`;
};

export default UpdateUrl;