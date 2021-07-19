import React from 'react';
import { useForm } from 'react-hook-form';

import { StyleSheet, css } from 'aphrodite';

export default function SignUp() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    console.log(errors);
    return (
        <div className={css(styles.MainContainer)}>
            <form onSubmit={handleSubmit(onSubmit)} className={css(styles.FormContainer)}>
                <input className={css(styles.InputContainer)} type="text" placeholder="First name" {...register("First name", {required: true, maxLength: 80})}/>
                <input className={css(styles.InputContainer)}  type="text" placeholder="Last name" {...register("Last name", {required: true, maxLength: 100})}/>
                <input className={css(styles.InputContainer)}  type="text" placeholder="Email" {...register("Email", {required: true, pattern: /^\S+@\S+$/i})}/>
                <input className={css(styles.InputContainer)}  type="tel" placeholder="Mobile number" {...register("Mobile number", {required: true, min:12, maxLength: 12})}/>
                <input className={css(styles.InputContainer)}  type="text" placeholder="Childs name" {...register("Childs name", {required: true, maxLength: 80})}/>
                <input className={css(styles.InputContainer)}  type="number" placeholder="Childs Age" {...register("Childs Age", {required: true})} />

                <input className={css(styles.SubmitButton)}  type="submit" value="Create Account"/>
            </form>
        </div>
    );
}

const styles = StyleSheet.create({
    MainContainer: {
        display: "flex", 
        justifyContent: "center", 
        marginTop: "25%", 
        // alignContent: "center",
        width: '100%',

    },
    FormContainer: {
        display: 'flex',
        flexDirection: 'column',
        width: '30%',
        justifyContent: 'center',
    },
    InputContainer: {
        fontSize: '18px',
        height: '30px',
        marginTop: '10px'
    },
    SubmitButton: {
        fontSize: '18px',
        marginTop: '5px',
        height: '29px',
        padding: '4px',
        border: 'none',
        borderRadius: '5px',
        backgroundColor: '#fcad03',
        ':hover': {
            cursor: 'pointer',
            border: '2px solid',
        }

    }
})
