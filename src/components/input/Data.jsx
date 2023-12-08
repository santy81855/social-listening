import styles from '@styles/Data.module.css';
import { getReportData } from '@actions/action';
import HashtagSelection from '../report/HashtagSelection';
import PieChartPadding from '../report/PieChartPadding';
import BarChartTriangle from '../report/BarChartTriangle';
import RadialChart from '../report/RadialChart';

export default async function Data({ executionArn, searchParams }) {
    const reportData = await getReportData(executionArn);
    const curHashtagData = reportData.find((obj) => obj.hashtag === searchParams.
        selectedHashtag);
    const rankingData = [
        { name: "positive", value: curHashtagData.generalStats.positive, index: 0 },
        { name: "negative", value: curHashtagData.generalStats.negative, index: 1 },
        { name: "neutral", value: curHashtagData.generalStats.neutral, index: 2 },
    ];
    const rankingNumberData = [
        {
            name: '1',
            uv: curHashtagData.generalStats.rank["1"],
        },
        {
            name: '2',
            uv: curHashtagData.generalStats.rank["2"],
        },
        {
            name: '3',
            uv: curHashtagData.generalStats.rank["3"],
        },
        {
            name: '4',
            uv: curHashtagData.generalStats.rank["4"],
        },
        {
            name: '5',
            uv: curHashtagData.generalStats.rank["5"],
        },
    ];
    const emotions = ['calm', 'angry', 'happy', 'fear'];
    const imageEmotionsData = emotions.reduce((result, emotion) => {
        const filteredObjects = curHashtagData.facebook.imageAnalysis.emotionsArray.filter(obj => obj[emotion] !== undefined);

        if (filteredObjects.length > 0) {
            const totalConfidence = filteredObjects.reduce((sum, obj) => sum + parseFloat(obj.averageConfidence), 0);
            const averageConfidence = totalConfidence / filteredObjects.length;
            const fill = emotion === 'calm' ? '#0088fe' : emotion === 'angry' ? 'red' : emotion === 'happy' ? '#00c49f' : '#ffbb28';
            result.push({
                name: emotion,
                uv: averageConfidence,
                fill,
            });
        }

        return result;
    }, []);
    console.log(curHashtagData.facebook);
    const postsCount = curHashtagData.generalStats.postCount;
    const likesCount = curHashtagData.generalStats.likes;
    let options = { year: '2-digit', month: 'short', day: '2-digit' };
    const startDate = new Date(curHashtagData.generalStats.startDate).toLocaleString('en-US', options);
    const endDate = new Date(curHashtagData.generalStats.endDate).toLocaleString('en-US', options);
    // <p>{JSON.stringify(reportData)}</p>

    return (
        <section className={styles.grid}>
            <HashtagSelection searchParams={searchParams} />
            <section className={`${styles.dates}`}>
                <section className={styles.datesContainer}>
                    <p className={styles.datesTitle}>{startDate}</p>
                    <p className={styles.datesTitle}>-</p>
                    <p className={styles.datesTitle}>{endDate}</p>
                </section>
            </section>
            <section className={`${styles.ranking} ${styles.gridItem}`}>
                <p className={styles.rankingTitle}>Proporción de opiniones según el sentimiento</p>
                <section className={styles.rankingContainer}>
                    <section className={styles.chartContainer}>
                        <PieChartPadding reportData={rankingData} />
                    </section>
                    <section className={styles.legendContainer}>
                        <p className={styles.legendTitle}>Sentimiento</p>
                        <section className={styles.legendItem}>
                            <section className={styles.legendColorPositive}></section>
                            <p>Positivo</p>
                        </section>
                        <section className={styles.legendItem}>
                            <section className={styles.legendColorNegative}></section>
                            <p>Negativo</p>
                        </section>
                        <section className={styles.legendItem}>
                            <section className={styles.legendColorNeutral}></section>
                            <p>Neutral</p>
                        </section>
                    </section>
                </section>
            </section>
            <section className={`${styles.likes} ${styles.gridItem}`}>
                <section className={styles.likesContainer}>
                    <p className={styles.likesTitle}>Publicaciones analizadas</p>
                    <p className={styles.likesValue}>{postsCount}</p>
                </section>
                <section className={styles.likesContainer}>
                    <p className={styles.likesTitle}>Cantidad de me gusta</p>
                    <p className={styles.likesValue}>{likesCount}</p>
                </section>
            </section>
            <section className={`${styles.feelings} ${styles.gridItem}`}>
                <p className={styles.rankingTitle}>Analisis de sentimiento</p>
                <section className={styles.feelingsContainer}>
                    <section className={styles.barChartContainer}>
                        <BarChartTriangle barChartData={rankingNumberData} />
                    </section>
                    <section className={styles.barChartLegendContainer}>
                        <section className={styles.barChartTitleContainer}>
                            <p className={styles.barChartTitle}>Puntaje</p>
                            <p className={styles.barChartTitle}>Cantidad</p>
                        </section>
                        <section className={styles.barChartLegendItem}>
                            <section className={styles.barChartLegendName}>
                                <section className={styles.legendColor5}></section>
                                <p>Muy Satisfecho</p>
                            </section>
                            <p className={styles.barChartLegendValue}>{rankingNumberData[4].uv}</p>
                        </section>
                        <section className={styles.barChartLegendItem}>
                            <section className={styles.barChartLegendName}>
                                <section className={styles.legendColor4}></section>
                                <p>Satisfecho</p>
                            </section>
                            <p className={styles.barChartLegendValue}>{rankingNumberData[3].uv}</p>
                        </section>
                        <section className={styles.barChartLegendItem}>
                            <section className={styles.barChartLegendName}>
                                <section className={styles.legendColor3}></section>
                                <p>Neutral</p>
                            </section>
                            <p className={styles.barChartLegendValue}>
                                {rankingNumberData[2].uv}
                            </p>
                        </section>
                        <section className={styles.barChartLegendItem}>
                            <section className={styles.barChartLegendName}>
                                <section className={styles.legendColor2}></section>
                                <p>Insatisfecho</p>
                            </section>
                            <p className={styles.barChartLegendValue}>
                                {rankingNumberData[1].uv}
                            </p>
                        </section>
                        <section className={styles.barChartLegendItem}>
                            <section className={styles.barChartLegendName}>
                                <section className={styles.legendColor1}></section>
                                <p>Muy Insatisfecho</p>
                            </section>
                            <p className={styles.barChartLegendValue}>
                                {rankingNumberData[0].uv}
                            </p>
                        </section>
                    </section>
                </section>
            </section>
            <section className={`${styles.images} ${styles.gridItem}`}>
                <p className={styles.imagesTitle}>Analisis de imagenes</p>
                <section className={styles.radialChartContainer}>
                    <RadialChart radialChartData={imageEmotionsData} />
                </section>
            </section>
            <section className={`${styles.facebook} ${styles.gridItem}`}>
                facebook
            </section>
            <section className={`${styles.twitter} ${styles.gridItem}`}>
                twitter
            </section>
            <section className={`${styles.youtube} ${styles.gridItem}`}>
                youtube
            </section>
        </section>
    );
};

