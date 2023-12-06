'use client';
import { createContext, useContext, useState } from 'react';

const AppContext = createContext();

export function Providers({ children }) {
    const [appState, setAppState] = useState({
        executionArn: {},
        output: {
            input: {
                hashtags: [
                    "medellin",
                    "colombia"
                ],
                filters: {
                    startDate: "2023-12-04",
                    endDate: "2023-12-05",
                    socialNetworks: [
                        "facebook",
                        "twitter",
                        "youtube"
                    ]
                }
            },
            status: "SUCCEEDED",
            output: {
                general: {
                    sentimentAnalysis: {
                        medellin: {
                            rank: {
                                1: 6,
                                2: 0,
                                3: 1,
                                4: 1,
                                5: 17
                            },
                            socialDetails: {
                                postsCount: 25,
                                likes: 35,
                                comments: 2,
                                retweets: 0,
                                views: 0
                            },
                            totalAnalyzed: 25,
                            average: 1.3066666666666666,
                            positive: 24,
                            negative: 8,
                            neutral: 1.3333333333333333
                        },
                        colombia: {
                            rank: {
                                1: 10,
                                2: 0,
                                3: 2,
                                4: 1,
                                5: 12
                            },
                            socialDetails: {
                                postsCount: 25,
                                likes: 5,
                                comments: 0,
                                retweets: 0,
                                views: 0
                            },
                            totalAnalyzed: 25,
                            average: 1.0666666666666667,
                            positive: 17.333333333333332,
                            negative: 13.333333333333334,
                            neutral: 2.6666666666666665
                        }
                    },
                    imageAnalysis: {
                        medellin: {
                            totalImages: 9,
                            withFaces: 4,
                            totalFaces: 9,
                            totalFemaleFaces: 3,
                            totalMaleFaces: 6
                        },
                        colombia: {
                            totalImages: 8,
                            withFaces: 7,
                            totalFaces: 8,
                            totalFemaleFaces: 5,
                            totalMaleFaces: 3
                        }
                    }
                },
                twitter: {
                    sentimentAnalysis: {
                        medellin: {
                            rank: {
                                1: 0,
                                2: 0,
                                3: 0,
                                4: 0,
                                5: 0
                            },
                            socialDetails: {
                                postsCount: 0,
                                likes: 0,
                                retweets: 0,
                                comments: 0,
                                views: 0
                            },
                            totalAnalyzed: 0,
                            average: null,
                            positive: null,
                            negative: null,
                            neutral: null
                        },
                        colombia: {
                            rank: {
                                1: 0,
                                2: 0,
                                3: 0,
                                4: 0,
                                5: 0
                            },
                            socialDetails: {
                                postsCount: 0,
                                likes: 0,
                                retweets: 0,
                                comments: 0,
                                views: 0
                            },
                            totalAnalyzed: 0,
                            average: null,
                            positive: null,
                            negative: null,
                            neutral: null
                        }
                    },
                    imageAnalysis: {
                        medellin: {
                            totalImages: 0,
                            withFaces: 0,
                            totalFaces: 0,
                            totalFemaleFaces: 0,
                            totalMaleFaces: 0,
                            predominantEmotions: [],
                            images: []
                        },
                        colombia: {
                            totalImages: 0,
                            withFaces: 0,
                            totalFaces: 0,
                            totalFemaleFaces: 0,
                            totalMaleFaces: 0,
                            predominantEmotions: [],
                            images: []
                        }
                    }
                },
                facebook: {
                    sentimentAnalysis: {
                        medellin: {
                            rank: {
                                1: 6,
                                2: 0,
                                3: 1,
                                4: 1,
                                5: 17
                            },
                            socialDetails: {
                                postsCount: 25,
                                likes: 35,
                                retweets: 0,
                                comments: 2,
                                views: 0
                            },
                            totalAnalyzed: 25,
                            average: 3.92,
                            positive: 72,
                            negative: 24,
                            neutral: 4
                        },
                        colombia: {
                            rank: {
                                1: 10,
                                2: 0,
                                3: 2,
                                4: 1,
                                5: 12
                            },
                            socialDetails: {
                                postsCount: 25,
                                likes: 5,
                                retweets: 0,
                                comments: 0,
                                views: 0
                            },
                            totalAnalyzed: 25,
                            average: 3.2,
                            positive: 52,
                            negative: 40,
                            neutral: 8
                        }
                    },
                    imageAnalysis: {
                        medellin: {
                            totalImages: 9,
                            withFaces: 4,
                            totalFaces: 9,
                            totalFemaleFaces: 3,
                            totalMaleFaces: 6,
                            predominantEmotions: [
                                {
                                    calm: "100.00",
                                    averageConfidence: "69.06"
                                },
                                {
                                    happy: "100.00",
                                    averageConfidence: "100.00"
                                },
                                {
                                    calm: "66.67",
                                    fear: "16.67",
                                    happy: "16.67",
                                    averageConfidence: "49.32"
                                },
                                {
                                    calm: "100.00",
                                    averageConfidence: "56.15"
                                }
                            ],
                            images: [
                                {
                                    imageURL: "https://scontent-ord5-1.cdninstagram.com/v/t39.30808-6/408282489_813332090803085_2491943097028024391_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=c4dd86&_nc_ohc=LyaYEreKP_YAX8UF_df&_nc_ht=scontent-ord5-1.cdninstagram.com&edm=AEoDcc0EAAAA&oh=00_AfCCDBLlRlnxe5oacSFXDIUajvY9r4ndUBcOJowIeg4gxQ&oe=6573D735",
                                    faceDetection: {
                                        faces: [],
                                        facesCount: 0,
                                        femaleFacesCount: 0,
                                        maleFacesCount: 0,
                                        predominantEmotions: {
                                            averageConfidence: "NaN"
                                        }
                                    }
                                },
                                {
                                    imageURL: "https://scontent-ord5-2.cdninstagram.com/v/t39.30808-6/400377773_777467761062045_8484471221994744277_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=c4dd86&_nc_ohc=ivO9BRct-7sAX8LuMMV&_nc_ht=scontent-ord5-2.cdninstagram.com&edm=AEoDcc0EAAAA&oh=00_AfBVk1PLS7_CiuNSMHmihs2d_KCVU1hJC3GvH5_EZ4cawA&oe=65747265",
                                    faceDetection: {
                                        faces: [
                                            {
                                                ageRange: {
                                                    low: 43,
                                                    high: 51
                                                },
                                                confidence: 99.997802734375,
                                                emotions: [
                                                    {
                                                        type: "CALM",
                                                        confidence: 69.05815887451172
                                                    },
                                                    {
                                                        type: "SAD",
                                                        confidence: 8.673095703125
                                                    },
                                                    {
                                                        type: "CONFUSED",
                                                        confidence: 7.427978515625
                                                    },
                                                    {
                                                        type: "HAPPY",
                                                        confidence: 0.7380167245864868
                                                    },
                                                    {
                                                        type: "SURPRISED",
                                                        confidence: 0.35953521728515625
                                                    },
                                                    {
                                                        type: "DISGUSTED",
                                                        confidence: 0.2208709716796875
                                                    },
                                                    {
                                                        type: "ANGRY",
                                                        confidence: 0.15420913696289062
                                                    },
                                                    {
                                                        type: "FEAR",
                                                        confidence: 0.000059604644775390625
                                                    }
                                                ],
                                                gender: {
                                                    confidence: 99.9939956665039,
                                                    value: "Male"
                                                },
                                                smile: {
                                                    value: false,
                                                    confidence: 82.70838165283203
                                                }
                                            }
                                        ],
                                        facesCount: 1,
                                        femaleFacesCount: 0,
                                        maleFacesCount: 1,
                                        predominantEmotions: {
                                            calm: "100.00",
                                            averageConfidence: "69.06"
                                        }
                                    }
                                },
                                {
                                    imageURL: "https://scontent-ord5-2.cdninstagram.com/v/t51.29350-15/407353166_1085074135821069_2529771627213883077_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=c4dd86&_nc_ohc=Z780hfuP7AsAX-oO6XI&_nc_ht=scontent-ord5-2.cdninstagram.com&edm=AEoDcc0EAAAA&oh=00_AfAqdqGQNqDNC5AK_3Ol-24wRsX-98iGYvaOfvtJO_-Pzw&oe=65749394",
                                    faceDetection: {
                                        faces: [],
                                        facesCount: 0,
                                        femaleFacesCount: 0,
                                        maleFacesCount: 0,
                                        predominantEmotions: {
                                            averageConfidence: "NaN"
                                        }
                                    }
                                },
                                {
                                    imageURL: "https://scontent-ord5-1.cdninstagram.com/v/t51.29350-15/407538169_2106248926377405_5100447926747125910_n.webp?stp=dst-jpg&_nc_cat=111&ccb=1-7&_nc_sid=c4dd86&_nc_ohc=xFkC8jyQhhIAX-EvIa7&_nc_ht=scontent-ord5-1.cdninstagram.com&edm=AEoDcc0EAAAA&oh=00_AfAqjbVQygb4uz1p8Ca-h-zJLmbhXWokPfnaXT5piTtI1g&oe=65756E9A",
                                    faceDetection: {
                                        faces: [
                                            {
                                                ageRange: {
                                                    low: 11,
                                                    high: 17
                                                },
                                                confidence: 95.35681915283203,
                                                emotions: [
                                                    {
                                                        type: "HAPPY",
                                                        confidence: 100
                                                    },
                                                    {
                                                        type: "CALM",
                                                        confidence: 0.00010132789611816406
                                                    },
                                                    {
                                                        type: "ANGRY",
                                                        confidence: 0
                                                    },
                                                    {
                                                        type: "DISGUSTED",
                                                        confidence: 0
                                                    },
                                                    {
                                                        type: "FEAR",
                                                        confidence: 0
                                                    },
                                                    {
                                                        type: "SAD",
                                                        confidence: 0
                                                    },
                                                    {
                                                        type: "SURPRISED",
                                                        confidence: 0
                                                    },
                                                    {
                                                        type: "CONFUSED",
                                                        confidence: 0
                                                    }
                                                ],
                                                gender: {
                                                    confidence: 99.99789428710938,
                                                    value: "Female"
                                                },
                                                smile: {
                                                    value: true,
                                                    confidence: 98.1622314453125
                                                }
                                            }
                                        ],
                                        facesCount: 1,
                                        femaleFacesCount: 1,
                                        maleFacesCount: 0,
                                        predominantEmotions: {
                                            happy: "100.00",
                                            averageConfidence: "100.00"
                                        }
                                    }
                                },
                                {
                                    imageURL: "https://scontent-ord5-1.cdninstagram.com/v/t39.30808-6/406388398_17983235459567052_3830115400483456435_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=c4dd86&_nc_ohc=FpsXb57UnX4AX_uSIo-&_nc_ht=scontent-ord5-1.cdninstagram.com&edm=AEoDcc0EAAAA&oh=00_AfByuVEPXdqIC48Qz4MQAn7X5z8_J_M_4uSAsdcJWMA-BA&oe=657497B6",
                                    faceDetection: {
                                        faces: [
                                            {
                                                ageRange: {
                                                    low: 37,
                                                    high: 45
                                                },
                                                confidence: 98.6303482055664,
                                                emotions: [
                                                    {
                                                        type: "CALM",
                                                        confidence: 31.6650390625
                                                    },
                                                    {
                                                        type: "HAPPY",
                                                        confidence: 23.359375
                                                    },
                                                    {
                                                        type: "SAD",
                                                        confidence: 0.014126300811767578
                                                    },
                                                    {
                                                        type: "SURPRISED",
                                                        confidence: 0.0006854534149169922
                                                    },
                                                    {
                                                        type: "ANGRY",
                                                        confidence: 0.0003039836883544922
                                                    },
                                                    {
                                                        type: "FEAR",
                                                        confidence: 0.00017881393432617188
                                                    },
                                                    {
                                                        type: "CONFUSED",
                                                        confidence: 0.000017881393432617188
                                                    },
                                                    {
                                                        type: "DISGUSTED",
                                                        confidence: 0
                                                    }
                                                ],
                                                gender: {
                                                    confidence: 51.64902877807617,
                                                    value: "Female"
                                                },
                                                smile: {
                                                    value: false,
                                                    confidence: 99.86736297607422
                                                }
                                            },
                                            {
                                                ageRange: {
                                                    low: 32,
                                                    high: 40
                                                },
                                                confidence: 99.65247344970703,
                                                emotions: [
                                                    {
                                                        type: "CALM",
                                                        confidence: 32.32421875
                                                    },
                                                    {
                                                        type: "HAPPY",
                                                        confidence: 22.3828125
                                                    },
                                                    {
                                                        type: "DISGUSTED",
                                                        confidence: 0.232696533203125
                                                    },
                                                    {
                                                        type: "SAD",
                                                        confidence: 0.02491474151611328
                                                    },
                                                    {
                                                        type: "CONFUSED",
                                                        confidence: 0.02359151840209961
                                                    },
                                                    {
                                                        type: "ANGRY",
                                                        confidence: 0.014030933380126953
                                                    },
                                                    {
                                                        type: "SURPRISED",
                                                        confidence: 0.0008046627044677734
                                                    },
                                                    {
                                                        type: "FEAR",
                                                        confidence: 0
                                                    }
                                                ],
                                                gender: {
                                                    confidence: 99.65350341796875,
                                                    value: "Male"
                                                },
                                                smile: {
                                                    value: false,
                                                    confidence: 98.52255249023438
                                                }
                                            },
                                            {
                                                ageRange: {
                                                    low: 36,
                                                    high: 44
                                                },
                                                confidence: 99.98312377929688,
                                                emotions: [
                                                    {
                                                        type: "CALM",
                                                        confidence: 98.4375
                                                    },
                                                    {
                                                        type: "CONFUSED",
                                                        confidence: 0.4909515380859375
                                                    },
                                                    {
                                                        type: "SAD",
                                                        confidence: 0.15153884887695312
                                                    },
                                                    {
                                                        type: "DISGUSTED",
                                                        confidence: 0.03275871276855469
                                                    },
                                                    {
                                                        type: "HAPPY",
                                                        confidence: 0.029913583770394325
                                                    },
                                                    {
                                                        type: "SURPRISED",
                                                        confidence: 0.01379847526550293
                                                    },
                                                    {
                                                        type: "ANGRY",
                                                        confidence: 0.0015079975128173828
                                                    },
                                                    {
                                                        type: "FEAR",
                                                        confidence: 0.00002384185791015625
                                                    }
                                                ],
                                                gender: {
                                                    confidence: 99.99935913085938,
                                                    value: "Male"
                                                },
                                                smile: {
                                                    value: false,
                                                    confidence: 99.90914916992188
                                                }
                                            },
                                            {
                                                ageRange: {
                                                    low: 24,
                                                    high: 32
                                                },
                                                confidence: 99.57508087158203,
                                                emotions: [
                                                    {
                                                        type: "FEAR",
                                                        confidence: 50.9765625
                                                    },
                                                    {
                                                        type: "DISGUSTED",
                                                        confidence: 16.0400390625
                                                    },
                                                    {
                                                        type: "ANGRY",
                                                        confidence: 15.97900390625
                                                    },
                                                    {
                                                        type: "SURPRISED",
                                                        confidence: 13.226114273071289
                                                    },
                                                    {
                                                        type: "SAD",
                                                        confidence: 6.0638427734375
                                                    },
                                                    {
                                                        type: "CONFUSED",
                                                        confidence: 4.3182373046875
                                                    },
                                                    {
                                                        type: "CALM",
                                                        confidence: 0.68817138671875
                                                    },
                                                    {
                                                        type: "HAPPY",
                                                        confidence: 0.004951159469783306
                                                    }
                                                ],
                                                gender: {
                                                    confidence: 99.99797058105469,
                                                    value: "Male"
                                                },
                                                smile: {
                                                    value: false,
                                                    confidence: 99.83240509033203
                                                }
                                            },
                                            {
                                                ageRange: {
                                                    low: 33,
                                                    high: 41
                                                },
                                                confidence: 79.76563262939453,
                                                emotions: [
                                                    {
                                                        type: "HAPPY",
                                                        confidence: 54.181640625
                                                    },
                                                    {
                                                        type: "CALM",
                                                        confidence: 13.63525390625
                                                    },
                                                    {
                                                        type: "CONFUSED",
                                                        confidence: 0.1434326171875
                                                    },
                                                    {
                                                        type: "SAD",
                                                        confidence: 0.03380775451660156
                                                    },
                                                    {
                                                        type: "DISGUSTED",
                                                        confidence: 0.016224384307861328
                                                    },
                                                    {
                                                        type: "ANGRY",
                                                        confidence: 0.0029265880584716797
                                                    },
                                                    {
                                                        type: "SURPRISED",
                                                        confidence: 0.0002384185791015625
                                                    },
                                                    {
                                                        type: "FEAR",
                                                        confidence: 0
                                                    }
                                                ],
                                                gender: {
                                                    confidence: 99.98404693603516,
                                                    value: "Male"
                                                },
                                                smile: {
                                                    value: false,
                                                    confidence: 98.6731948852539
                                                }
                                            },
                                            {
                                                ageRange: {
                                                    low: 23,
                                                    high: 31
                                                },
                                                confidence: 99.94982147216797,
                                                emotions: [
                                                    {
                                                        type: "CALM",
                                                        confidence: 28.3203125
                                                    },
                                                    {
                                                        type: "HAPPY",
                                                        confidence: 23.701171875
                                                    },
                                                    {
                                                        type: "SAD",
                                                        confidence: 1.085662841796875
                                                    },
                                                    {
                                                        type: "CONFUSED",
                                                        confidence: 0.910186767578125
                                                    },
                                                    {
                                                        type: "FEAR",
                                                        confidence: 0.472259521484375
                                                    },
                                                    {
                                                        type: "ANGRY",
                                                        confidence: 0.463104248046875
                                                    },
                                                    {
                                                        type: "DISGUSTED",
                                                        confidence: 0.03380775451660156
                                                    },
                                                    {
                                                        type: "SURPRISED",
                                                        confidence: 0.0015497207641601562
                                                    }
                                                ],
                                                gender: {
                                                    confidence: 100,
                                                    value: "Male"
                                                },
                                                smile: {
                                                    value: false,
                                                    confidence: 99.95384216308594
                                                }
                                            }
                                        ],
                                        facesCount: 6,
                                        femaleFacesCount: 1,
                                        maleFacesCount: 5,
                                        predominantEmotions: {
                                            calm: "66.67",
                                            fear: "16.67",
                                            happy: "16.67",
                                            averageConfidence: "49.32"
                                        }
                                    }
                                },
                                {
                                    imageURL: "https://scontent-ord5-1.cdninstagram.com/v/t39.30808-6/406485508_17971286933642592_7582260695345851367_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=c4dd86&_nc_ohc=w1FAo3S_O3oAX9LGIeT&_nc_ht=scontent-ord5-1.cdninstagram.com&edm=AEoDcc0EAAAA&oh=00_AfCxlqCSULEMh0FEPX7f_ChhipNLa4sxlMBq3274ZKpLCg&oe=657502AC",
                                    faceDetection: {
                                        faces: [],
                                        facesCount: 0,
                                        femaleFacesCount: 0,
                                        maleFacesCount: 0,
                                        predominantEmotions: {
                                            averageConfidence: "NaN"
                                        }
                                    }
                                },
                                {
                                    imageURL: "https://scontent-ord5-2.cdninstagram.com/v/t39.30808-6/406824758_17971286900642592_3247039460607081860_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=c4dd86&_nc_ohc=PX50P-ByPVcAX9R6Qek&_nc_ht=scontent-ord5-2.cdninstagram.com&edm=AEoDcc0EAAAA&oh=00_AfBkAJG99HZ6jB7OACbOpVmwVnn2_WvQDmzBzuJyuJg8ew&oe=657567EC",
                                    faceDetection: {
                                        faces: [],
                                        facesCount: 0,
                                        femaleFacesCount: 0,
                                        maleFacesCount: 0,
                                        predominantEmotions: {
                                            averageConfidence: "NaN"
                                        }
                                    }
                                },
                                {
                                    imageURL: "https://scontent-ord5-2.cdninstagram.com/v/t51.29350-15/408055387_735368287927798_7528713020179526593_n.webp?stp=dst-jpg&_nc_cat=105&ccb=1-7&_nc_sid=c4dd86&_nc_ohc=Z_CTh64CX7cAX9bAk_a&_nc_ht=scontent-ord5-2.cdninstagram.com&edm=AEoDcc0EAAAA&oh=00_AfCedOd191gpaBeB0aqrCZohYOYCPsJA8O4-TBqah_UJ9Q&oe=65740E6F",
                                    faceDetection: {
                                        faces: [
                                            {
                                                ageRange: {
                                                    low: 18,
                                                    high: 22
                                                },
                                                confidence: 99.99982452392578,
                                                emotions: [
                                                    {
                                                        type: "CALM",
                                                        confidence: 56.14691925048828
                                                    },
                                                    {
                                                        type: "HAPPY",
                                                        confidence: 11.103515625
                                                    },
                                                    {
                                                        type: "ANGRY",
                                                        confidence: 0.034332275390625
                                                    },
                                                    {
                                                        type: "CONFUSED",
                                                        confidence: 0.026416778564453125
                                                    },
                                                    {
                                                        type: "SURPRISED",
                                                        confidence: 0.020876526832580566
                                                    },
                                                    {
                                                        type: "DISGUSTED",
                                                        confidence: 0.001996755599975586
                                                    },
                                                    {
                                                        type: "SAD",
                                                        confidence: 0.0004291534423828125
                                                    },
                                                    {
                                                        type: "FEAR",
                                                        confidence: 0.00007152557373046875
                                                    }
                                                ],
                                                gender: {
                                                    confidence: 99.99951171875,
                                                    value: "Female"
                                                },
                                                smile: {
                                                    value: false,
                                                    confidence: 87.39913940429688
                                                }
                                            }
                                        ],
                                        facesCount: 1,
                                        femaleFacesCount: 1,
                                        maleFacesCount: 0,
                                        predominantEmotions: {
                                            calm: "100.00",
                                            averageConfidence: "56.15"
                                        }
                                    }
                                },
                                {
                                    imageURL: "https://scontent-ord5-1.cdninstagram.com/v/t51.29350-15/407156550_372719575200105_7537167717655958593_n.webp?stp=dst-jpg&_nc_cat=106&ccb=1-7&_nc_sid=c4dd86&_nc_ohc=cTN0AzEdy1gAX_8ox2e&_nc_ht=scontent-ord5-1.cdninstagram.com&edm=AEoDcc0EAAAA&oh=00_AfADgqeKhDDqJRb7fcaM4M85Yp2P2ofPauSW5CeGxN9cgA&oe=6573E77E",
                                    faceDetection: {
                                        faces: [],
                                        facesCount: 0,
                                        femaleFacesCount: 0,
                                        maleFacesCount: 0,
                                        predominantEmotions: {
                                            averageConfidence: "NaN"
                                        }
                                    }
                                }
                            ]
                        },
                        colombia: {
                            totalImages: 8,
                            withFaces: 7,
                            totalFaces: 8,
                            totalFemaleFaces: 5,
                            totalMaleFaces: 3,
                            predominantEmotions: [
                                {
                                    angry: "100.00",
                                    averageConfidence: "45.97"
                                },
                                {
                                    calm: "100.00",
                                    averageConfidence: "97.46"
                                },
                                {
                                    calm: "100.00",
                                    averageConfidence: "75.82"
                                },
                                {
                                    calm: "100.00",
                                    averageConfidence: "84.10"
                                },
                                {
                                    calm: "100.00",
                                    averageConfidence: "100.00"
                                },
                                {
                                    happy: "100.00",
                                    averageConfidence: "100.00"
                                },
                                {
                                    happy: "50.00",
                                    fear: "50.00",
                                    averageConfidence: "48.71"
                                }
                            ],
                            images: [
                                {
                                    imageURL: "https://scontent-ord5-2.cdninstagram.com/v/t51.29350-15/408212871_1076348030168537_6275526235303830674_n.webp?stp=dst-jpg&_nc_cat=100&ccb=1-7&_nc_sid=c4dd86&_nc_ohc=ypEO-Fj5WSAAX9RUV8r&_nc_ht=scontent-ord5-2.cdninstagram.com&edm=AEoDcc0EAAAA&oh=00_AfC-iJ97IVGNowRI3C3CgoIa3-4JwfexWzHXf06olUk4ZA&oe=65751B00",
                                    faceDetection: {
                                        faces: [
                                            {
                                                ageRange: {
                                                    low: 24,
                                                    high: 32
                                                },
                                                confidence: 99.99961853027344,
                                                emotions: [
                                                    {
                                                        type: "ANGRY",
                                                        confidence: 45.9716796875
                                                    },
                                                    {
                                                        type: "CALM",
                                                        confidence: 23.6572265625
                                                    },
                                                    {
                                                        type: "CONFUSED",
                                                        confidence: 18.49365234375
                                                    },
                                                    {
                                                        type: "SURPRISED",
                                                        confidence: 12.427571296691895
                                                    },
                                                    {
                                                        type: "SAD",
                                                        confidence: 4.96826171875
                                                    },
                                                    {
                                                        type: "FEAR",
                                                        confidence: 0.38852691650390625
                                                    },
                                                    {
                                                        type: "HAPPY",
                                                        confidence: 0.2741495966911316
                                                    },
                                                    {
                                                        type: "DISGUSTED",
                                                        confidence: 0.26493072509765625
                                                    }
                                                ],
                                                gender: {
                                                    confidence: 99.9998779296875,
                                                    value: "Female"
                                                },
                                                smile: {
                                                    value: false,
                                                    confidence: 96.98165893554688
                                                }
                                            }
                                        ],
                                        facesCount: 1,
                                        femaleFacesCount: 1,
                                        maleFacesCount: 0,
                                        predominantEmotions: {
                                            angry: "100.00",
                                            averageConfidence: "45.97"
                                        }
                                    }
                                },
                                {
                                    imageURL: "https://scontent-ord5-1.cdninstagram.com/v/t51.29350-15/407575637_2082095022145726_4617617170284758773_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=c4dd86&_nc_ohc=DjLhBcD2HmQAX8rjFdR&_nc_ht=scontent-ord5-1.cdninstagram.com&edm=AEoDcc0EAAAA&oh=00_AfA3zl7IME6Sjj2YM-fvRydSIZijejq9tAjLmdx1qYL3Ng&oe=65744811",
                                    faceDetection: {
                                        faces: [
                                            {
                                                ageRange: {
                                                    low: 14,
                                                    high: 22
                                                },
                                                confidence: 99.9972915649414,
                                                emotions: [
                                                    {
                                                        type: "CALM",
                                                        confidence: 97.4609375
                                                    },
                                                    {
                                                        type: "SAD",
                                                        confidence: 0.5184173583984375
                                                    },
                                                    {
                                                        type: "HAPPY",
                                                        confidence: 0.2287546843290329
                                                    },
                                                    {
                                                        type: "CONFUSED",
                                                        confidence: 0.03161430358886719
                                                    },
                                                    {
                                                        type: "SURPRISED",
                                                        confidence: 0.016301870346069336
                                                    },
                                                    {
                                                        type: "DISGUSTED",
                                                        confidence: 0.011092424392700195
                                                    },
                                                    {
                                                        type: "FEAR",
                                                        confidence: 0.0004887580871582031
                                                    },
                                                    {
                                                        type: "ANGRY",
                                                        confidence: 0.00040531158447265625
                                                    }
                                                ],
                                                gender: {
                                                    confidence: 99.99932861328125,
                                                    value: "Female"
                                                },
                                                smile: {
                                                    value: false,
                                                    confidence: 77.85731506347656
                                                }
                                            }
                                        ],
                                        facesCount: 1,
                                        femaleFacesCount: 1,
                                        maleFacesCount: 0,
                                        predominantEmotions: {
                                            calm: "100.00",
                                            averageConfidence: "97.46"
                                        }
                                    }
                                },
                                {
                                    imageURL: "https://scontent-ord5-1.cdninstagram.com/v/t51.29350-15/407845263_343759894935048_57132121646244169_n.heic?stp=dst-jpg&_nc_cat=106&ccb=1-7&_nc_sid=c4dd86&_nc_ohc=6v1NH-7xqYkAX86jtgT&_nc_ht=scontent-ord5-1.cdninstagram.com&edm=AEoDcc0EAAAA&oh=00_AfBkrA5JtIoG8Jihtfnlc71Zl2IzhAiyPLVon1HbjBrJLQ&oe=6574AFA9",
                                    faceDetection: {
                                        faces: [
                                            {
                                                ageRange: {
                                                    low: 23,
                                                    high: 31
                                                },
                                                confidence: 99.99972534179688,
                                                emotions: [
                                                    {
                                                        type: "CALM",
                                                        confidence: 75.82421875
                                                    },
                                                    {
                                                        type: "CONFUSED",
                                                        confidence: 11.99951171875
                                                    },
                                                    {
                                                        type: "SURPRISED",
                                                        confidence: 2.8896331787109375
                                                    },
                                                    {
                                                        type: "ANGRY",
                                                        confidence: 0.5458831787109375
                                                    },
                                                    {
                                                        type: "HAPPY",
                                                        confidence: 0.3384907841682434
                                                    },
                                                    {
                                                        type: "DISGUSTED",
                                                        confidence: 0.32596588134765625
                                                    },
                                                    {
                                                        type: "SAD",
                                                        confidence: 0.04661083221435547
                                                    },
                                                    {
                                                        type: "FEAR",
                                                        confidence: 0.000858306884765625
                                                    }
                                                ],
                                                gender: {
                                                    confidence: 99.80659484863281,
                                                    value: "Male"
                                                },
                                                smile: {
                                                    value: false,
                                                    confidence: 99.45404052734375
                                                }
                                            }
                                        ],
                                        facesCount: 1,
                                        femaleFacesCount: 0,
                                        maleFacesCount: 1,
                                        predominantEmotions: {
                                            calm: "100.00",
                                            averageConfidence: "75.82"
                                        }
                                    }
                                },
                                {
                                    imageURL: "https://scontent-ord5-2.cdninstagram.com/v/t51.29350-15/407927508_1339246296966207_33076525481935683_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=c4dd86&_nc_ohc=2Yb7FEN4a-oAX9lXn3-&_nc_ht=scontent-ord5-2.cdninstagram.com&edm=AEoDcc0EAAAA&oh=00_AfAQSxiz6jyiL2vpY21nNRdgx9vvUoMpalZlK3NQE2nzDQ&oe=6574459E",
                                    faceDetection: {
                                        faces: [
                                            {
                                                ageRange: {
                                                    low: 13,
                                                    high: 19
                                                },
                                                confidence: 99.983642578125,
                                                emotions: [
                                                    {
                                                        type: "CALM",
                                                        confidence: 84.10400390625
                                                    },
                                                    {
                                                        type: "SAD",
                                                        confidence: 8.6669921875
                                                    },
                                                    {
                                                        type: "CONFUSED",
                                                        confidence: 0.6763458251953125
                                                    },
                                                    {
                                                        type: "ANGRY",
                                                        confidence: 0.197601318359375
                                                    },
                                                    {
                                                        type: "FEAR",
                                                        confidence: 0.10204315185546875
                                                    },
                                                    {
                                                        type: "DISGUSTED",
                                                        confidence: 0.03237724304199219
                                                    },
                                                    {
                                                        type: "SURPRISED",
                                                        confidence: 0.02785027027130127
                                                    },
                                                    {
                                                        type: "HAPPY",
                                                        confidence: 0.0013033549766987562
                                                    }
                                                ],
                                                gender: {
                                                    confidence: 99.99627685546875,
                                                    value: "Female"
                                                },
                                                smile: {
                                                    value: false,
                                                    confidence: 99.98812103271484
                                                }
                                            }
                                        ],
                                        facesCount: 1,
                                        femaleFacesCount: 1,
                                        maleFacesCount: 0,
                                        predominantEmotions: {
                                            calm: "100.00",
                                            averageConfidence: "84.10"
                                        }
                                    }
                                },
                                {
                                    imageURL: "https://scontent-ord5-1.cdninstagram.com/v/t51.29350-15/407473158_337678018897543_8256479021436044552_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=c4dd86&_nc_ohc=Z22rJt3XRmoAX_xx5zz&_nc_ht=scontent-ord5-1.cdninstagram.com&edm=AEoDcc0EAAAA&oh=00_AfCUpmwQfmXa_ugvTCwx7uwaD0BtDTXG2HGVRNG5JfYvQw&oe=65750549",
                                    faceDetection: {
                                        faces: [
                                            {
                                                ageRange: {
                                                    low: 19,
                                                    high: 23
                                                },
                                                confidence: 99.25424194335938,
                                                emotions: [
                                                    {
                                                        type: "CALM",
                                                        confidence: 100
                                                    },
                                                    {
                                                        type: "SAD",
                                                        confidence: 0.002014636993408203
                                                    },
                                                    {
                                                        type: "ANGRY",
                                                        confidence: 0.0007092952728271484
                                                    },
                                                    {
                                                        type: "SURPRISED",
                                                        confidence: 0.0004470348358154297
                                                    },
                                                    {
                                                        type: "FEAR",
                                                        confidence: 0.000011920928955078125
                                                    },
                                                    {
                                                        type: "CONFUSED",
                                                        confidence: 0.000011920928955078125
                                                    },
                                                    {
                                                        type: "DISGUSTED",
                                                        confidence: 0.0000059604644775390625
                                                    },
                                                    {
                                                        type: "HAPPY",
                                                        confidence: 0.0000059604644775390625
                                                    }
                                                ],
                                                gender: {
                                                    confidence: 99.98924255371094,
                                                    value: "Female"
                                                },
                                                smile: {
                                                    value: false,
                                                    confidence: 99.96990203857422
                                                }
                                            }
                                        ],
                                        facesCount: 1,
                                        femaleFacesCount: 1,
                                        maleFacesCount: 0,
                                        predominantEmotions: {
                                            calm: "100.00",
                                            averageConfidence: "100.00"
                                        }
                                    }
                                },
                                {
                                    imageURL: "https://scontent-ord5-2.cdninstagram.com/v/t51.29350-15/408024175_1613293272411925_7037547977482477575_n.webp?stp=dst-jpg&_nc_cat=110&ccb=1-7&_nc_sid=c4dd86&_nc_ohc=pwFHLiUMKp4AX_rAtaq&_nc_ht=scontent-ord5-2.cdninstagram.com&edm=AEoDcc0EAAAA&oh=00_AfDW0CMP_W_IfYurSTkxE5xnXvQF_hyOPuTfAdKEq_j9Ng&oe=6573AC8A",
                                    faceDetection: {
                                        faces: [],
                                        facesCount: 0,
                                        femaleFacesCount: 0,
                                        maleFacesCount: 0,
                                        predominantEmotions: {
                                            averageConfidence: "NaN"
                                        }
                                    }
                                },
                                {
                                    imageURL: "https://scontent-ord5-1.cdninstagram.com/v/t51.29350-15/407538169_2106248926377405_5100447926747125910_n.webp?stp=dst-jpg&_nc_cat=111&ccb=1-7&_nc_sid=c4dd86&_nc_ohc=xFkC8jyQhhIAX-EvIa7&_nc_ht=scontent-ord5-1.cdninstagram.com&edm=AEoDcc0EAAAA&oh=00_AfAqjbVQygb4uz1p8Ca-h-zJLmbhXWokPfnaXT5piTtI1g&oe=65756E9A",
                                    faceDetection: {
                                        faces: [
                                            {
                                                ageRange: {
                                                    low: 11,
                                                    high: 17
                                                },
                                                confidence: 95.35681915283203,
                                                emotions: [
                                                    {
                                                        type: "HAPPY",
                                                        confidence: 100
                                                    },
                                                    {
                                                        type: "CALM",
                                                        confidence: 0.00010132789611816406
                                                    },
                                                    {
                                                        type: "ANGRY",
                                                        confidence: 0
                                                    },
                                                    {
                                                        type: "DISGUSTED",
                                                        confidence: 0
                                                    },
                                                    {
                                                        type: "FEAR",
                                                        confidence: 0
                                                    },
                                                    {
                                                        type: "SAD",
                                                        confidence: 0
                                                    },
                                                    {
                                                        type: "SURPRISED",
                                                        confidence: 0
                                                    },
                                                    {
                                                        type: "CONFUSED",
                                                        confidence: 0
                                                    }
                                                ],
                                                gender: {
                                                    confidence: 99.99789428710938,
                                                    value: "Female"
                                                },
                                                smile: {
                                                    value: true,
                                                    confidence: 98.1622314453125
                                                }
                                            }
                                        ],
                                        facesCount: 1,
                                        femaleFacesCount: 1,
                                        maleFacesCount: 0,
                                        predominantEmotions: {
                                            happy: "100.00",
                                            averageConfidence: "100.00"
                                        }
                                    }
                                },
                                {
                                    imageURL: "https://scontent-ord5-2.cdninstagram.com/v/t51.29350-15/407728752_709156927838212_6256056363160884523_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=c4dd86&_nc_ohc=5gT0j4gNhkUAX_TuKZf&_nc_ht=scontent-ord5-2.cdninstagram.com&edm=AEoDcc0EAAAA&oh=00_AfAShzMPV112OjQsRf3AV0RNmRZEVh3cPB3LkVF3BHXsoA&oe=6573A9E0",
                                    faceDetection: {
                                        faces: [
                                            {
                                                ageRange: {
                                                    low: 28,
                                                    high: 36
                                                },
                                                confidence: 99.97118377685547,
                                                emotions: [
                                                    {
                                                        type: "HAPPY",
                                                        confidence: 68.4375
                                                    },
                                                    {
                                                        type: "CALM",
                                                        confidence: 5.419921875
                                                    },
                                                    {
                                                        type: "ANGRY",
                                                        confidence: 0.00011324882507324219
                                                    },
                                                    {
                                                        type: "SAD",
                                                        confidence: 0.0000476837158203125
                                                    },
                                                    {
                                                        type: "SURPRISED",
                                                        confidence: 0.00004470348358154297
                                                    },
                                                    {
                                                        type: "DISGUSTED",
                                                        confidence: 0.0000059604644775390625
                                                    },
                                                    {
                                                        type: "CONFUSED",
                                                        confidence: 0.0000059604644775390625
                                                    },
                                                    {
                                                        type: "FEAR",
                                                        confidence: 0
                                                    }
                                                ],
                                                gender: {
                                                    confidence: 100,
                                                    value: "Male"
                                                },
                                                smile: {
                                                    value: false,
                                                    confidence: 98.16222381591797
                                                }
                                            },
                                            {
                                                ageRange: {
                                                    low: 11,
                                                    high: 17
                                                },
                                                confidence: 75.01203918457031,
                                                emotions: [
                                                    {
                                                        type: "FEAR",
                                                        confidence: 28.9794921875
                                                    },
                                                    {
                                                        type: "HAPPY",
                                                        confidence: 18.64397430419922
                                                    },
                                                    {
                                                        type: "SAD",
                                                        confidence: 6.35986328125
                                                    },
                                                    {
                                                        type: "CALM",
                                                        confidence: 2.801513671875
                                                    },
                                                    {
                                                        type: "SURPRISED",
                                                        confidence: 1.010894775390625
                                                    },
                                                    {
                                                        type: "ANGRY",
                                                        confidence: 0.6984710693359375
                                                    },
                                                    {
                                                        type: "DISGUSTED",
                                                        confidence: 0.4154205322265625
                                                    },
                                                    {
                                                        type: "CONFUSED",
                                                        confidence: 0.08606910705566406
                                                    }
                                                ],
                                                gender: {
                                                    confidence: 67.75801086425781,
                                                    value: "Male"
                                                },
                                                smile: {
                                                    value: false,
                                                    confidence: 91.90557098388672
                                                }
                                            }
                                        ],
                                        facesCount: 2,
                                        femaleFacesCount: 0,
                                        maleFacesCount: 2,
                                        predominantEmotions: {
                                            happy: "50.00",
                                            fear: "50.00",
                                            averageConfidence: "48.71"
                                        }
                                    }
                                }
                            ]
                        }
                    }
                },
                youtube: {
                    sentimentAnalysis: {
                        medellin: {
                            rank: {
                                1: 0,
                                2: 0,
                                3: 0,
                                4: 0,
                                5: 0
                            },
                            socialDetails: {
                                postsCount: 0,
                                likes: 0,
                                retweets: 0,
                                comments: 0,
                                views: 0
                            },
                            totalAnalyzed: 0,
                            average: null,
                            positive: null,
                            negative: null,
                            neutral: null
                        },
                        colombia: {
                            rank: {
                                1: 0,
                                2: 0,
                                3: 0,
                                4: 0,
                                5: 0
                            },
                            socialDetails: {
                                postsCount: 0,
                                likes: 0,
                                retweets: 0,
                                comments: 0,
                                views: 0
                            },
                            totalAnalyzed: 0,
                            average: null,
                            positive: null,
                            negative: null,
                            neutral: null
                        }
                    },
                    imageAnalysis: {
                        medellin: {
                            totalImages: 0,
                            withFaces: 0,
                            totalFaces: 0,
                            totalFemaleFaces: 0,
                            totalMaleFaces: 0,
                            predominantEmotions: [],
                            images: []
                        },
                        colombia: {
                            totalImages: 0,
                            withFaces: 0,
                            totalFaces: 0,
                            totalFemaleFaces: 0,
                            totalMaleFaces: 0,
                            predominantEmotions: [],
                            images: []
                        }
                    }
                }
            },
            executionId: "198a069c-b82d-4e61-b352-c6cf13143f4b",
            startDate: "2023-12-05T22:57:44.365Z",
            stopDate: "2023-12-05T22:57:51.807Z",
            elapsedTime: 7.442
        },
    });

    return (
        <AppContext.Provider value={{ appState, setAppState }}>
            {children}
        </AppContext.Provider>
    );
}

export function useAppContext() {
    return useContext(AppContext);
}