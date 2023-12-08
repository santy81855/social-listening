// Get the information for the report 
const generateReportData = (data) => {
    // get how many hashtags there are
    const hashtagCount = data.input.hashtags.length;
    // get the hashtags
    const hashtags = data.input.hashtags;
    // get the start date
    const startDate = data.input.filters.startDate;
    // get the end date
    const endDate = data.input.filters.endDate;
    // get the social networks analyzed
    const socialNetworks = data.input.filters.socialNetworks;
    // get statistics for each hashtag
    const hashtagArray = [];
    hashtags.forEach((hashtag) => {
        let stats = {};
        stats.startDate = startDate;
        stats.endDate = endDate;
        stats.socialNetworks = socialNetworks;
        stats.postCount = data.output.general.sentimentAnalysis[hashtag].socialDetails.postsCount;
        stats.likes = data.output.general.sentimentAnalysis[hashtag].socialDetails.likes;
        stats.comments = data.output.general.sentimentAnalysis[hashtag].socialDetails.comments;
        stats.retweets = data.output.general.sentimentAnalysis[hashtag].socialDetails.retweets;
        stats.views = data.output.general.sentimentAnalysis[hashtag].socialDetails.views;
        stats.rank = data.output.general.sentimentAnalysis[hashtag].rank;
        stats.positive = data.output.general.sentimentAnalysis[hashtag].positive;
        stats.negative = data.output.general.sentimentAnalysis[hashtag].negative;
        stats.neutral = data.output.general.sentimentAnalysis[hashtag].neutral;
        let imageStats = {};
        imageStats.totalImages = data.output.general.imageAnalysis[hashtag].totalImages;
        imageStats.maleFaces = data.output.general.imageAnalysis[hashtag].totalMaleFaces;
        imageStats.femaleFaces = data.output.general.imageAnalysis[hashtag].totalFemaleFaces;
        let facebook = {};
        facebook.postCount = data.output.facebook.sentimentAnalysis[hashtag].socialDetails.postsCount;
        facebook.likes = data.output.facebook.sentimentAnalysis[hashtag].socialDetails.likes;
        facebook.comments = data.output.facebook.sentimentAnalysis[hashtag].socialDetails.comments;
        facebook.positive = data.output.facebook.sentimentAnalysis[hashtag].positive;
        facebook.negative = data.output.facebook.sentimentAnalysis[hashtag].negative;
        facebook.neutral = data.output.facebook.sentimentAnalysis[hashtag].neutral;
        facebook.rank = data.output.facebook.sentimentAnalysis[hashtag].rank;
        let fImageAnalysis = {};
        fImageAnalysis.totalImages = data.output.facebook.imageAnalysis[hashtag].totalImages;
        fImageAnalysis.maleFaces = data.output.facebook.imageAnalysis[hashtag].totalMaleFaces;
        fImageAnalysis.femaleFaces = data.output.facebook.imageAnalysis[hashtag].totalFemaleFaces;
        fImageAnalysis.emotionsArray = data.output.facebook.imageAnalysis[hashtag].predominantEmotions;
        facebook.imageAnalysis = fImageAnalysis;
        let twitter = {};
        twitter.postCount = data.output.twitter.sentimentAnalysis[hashtag].socialDetails.postsCount;
        twitter.retweets = data.output.twitter.sentimentAnalysis[hashtag].socialDetails.retweets;
        twitter.positive = data.output.twitter.sentimentAnalysis[hashtag].positive;
        twitter.negative = data.output.twitter.sentimentAnalysis[hashtag].negative;
        twitter.neutral = data.output.twitter.sentimentAnalysis[hashtag].neutral;
        twitter.rank = data.output.twitter.sentimentAnalysis[hashtag].rank;
        let tImageAnalysis = {};
        tImageAnalysis.totalImages = data.output.twitter.imageAnalysis[hashtag].totalImages;
        tImageAnalysis.maleFaces = data.output.twitter.imageAnalysis[hashtag].totalMaleFaces;
        tImageAnalysis.femaleFaces = data.output.twitter.imageAnalysis[hashtag].totalFemaleFaces;
        tImageAnalysis.emotionsArray = data.output.twitter.imageAnalysis[hashtag].predominantEmotions;
        twitter.imageAnalysis = tImageAnalysis;
        let youtube = {};
        youtube.postCount = data.output.youtube.sentimentAnalysis[hashtag].socialDetails.postsCount;
        youtube.views = data.output.youtube.sentimentAnalysis[hashtag].socialDetails.views;
        youtube.positive = data.output.youtube.sentimentAnalysis[hashtag].positive;
        youtube.negative = data.output.youtube.sentimentAnalysis[hashtag].negative;
        youtube.neutral = data.output.youtube.sentimentAnalysis[hashtag].neutral;
        youtube.rank = data.output.youtube.sentimentAnalysis[hashtag].rank;
        let yImageAnalysis = {};
        yImageAnalysis.totalImages = data.output.youtube.imageAnalysis[hashtag].totalImages;
        yImageAnalysis.maleFaces = data.output.youtube.imageAnalysis[hashtag].totalMaleFaces;
        yImageAnalysis.femaleFaces = data.output.youtube.imageAnalysis[hashtag].totalFemaleFaces;
        yImageAnalysis.emotionsArray = data.output.youtube.imageAnalysis[hashtag].predominantEmotions;
        youtube.imageAnalysis = yImageAnalysis;
        hashtagArray.push({ generalStats: stats, hashtag: hashtag, imageStats: imageStats, facebook: facebook, twitter: twitter, youtube: youtube });
    });
    return hashtagArray;
};

export default generateReportData;