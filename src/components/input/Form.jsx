import styles from '@styles/Form.module.css';
import TextInput from '@components/input/TextInput';
import DateInput from '@components/input/DateInput';
import SubmitButton from '@components/input/SubmitButton';
import Checkbox from '@components/input/Checkbox';

const Form = ({ searchParams }) => {
    async function submitPressed(formData) {
        'use server';
    }
    return (
        <form className={styles.formContainer} action={submitPressed}>
            <section className={styles.rowContainer}>
                <section className={styles.textInputContainer}>
                    <label htmlFor="hashtags" className={styles.label}>Hashtags:</label>
                    <TextInput
                        name="hashtags"
                        value={searchParams.hashtags}
                        placeholder="Ingrese los hashtags separados por comas."
                    />
                </section>
                <section className={styles.dateInputContainer}>
                    <label htmlFor="startDate" className={styles.dateLabel}>Fecha de Inicio:</label>
                    <DateInput
                        name="startDate"
                        value={searchParams.startDate}
                    />
                    <i className={`fa-solid fa-arrows-turn-right ${styles.dateArrowIcon}`}></i>
                    <label htmlFor="endDate" className={styles.dateLabel}>Fecha de Fin:</label>
                    <DateInput
                        name="endDate"
                        value={searchParams.endDate}
                    />
                </section>
                <section className={styles.submitButtonContainer}>
                    <SubmitButton text="Realizar Reporte" />
                </section>
            </section>
            <section className={styles.checkboxContainer}>
                <Checkbox
                    name="facebook"
                    value={searchParams.facebook}
                    text="facebook"
                />
                <Checkbox
                    name="twitter"
                    value={searchParams.twitter}
                    text="twitter"
                />
                <Checkbox
                    name="youtube"
                    value={searchParams.youtube}
                    text="youtube"
                />
            </section>
        </form >
    );
};

export default Form;