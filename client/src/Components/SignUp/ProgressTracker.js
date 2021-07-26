import React, { useState, useEffect, useContext } from 'react';
import { StyleSheet, css } from 'aphrodite';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { SignUpContext } from './Container/SignUpContainer';

export default function ProgressTracker() {
    //style={{display: 'flex', alignItems: 'center',marginTop: 'auto', marginBottom: 'auto'}}
    const { stepInProcess, setStepInProcess } = useContext(SignUpContext);
    return (
        <>
            {stepInProcess.becomeAmember &&
                <Container className={css(styles.MainContainer)}>
                    <Row style={{width: '100%'}}>
                        <Col className={css(styles.StepContainer)}>
                            <div className={css(styles.SelectedStepText)}>1. Become a Member</div>
                        </Col>
                        <Col className={css(styles.StepContainer)}>
                            <div className={css(styles.StepText)}>2. Add Children</div>
                        </Col>
                        <Col className={css(styles.StepContainer)}>
                            <div className={css(styles.StepText)}>3. Create Child Profile</div>
                        </Col>
                    </Row>
                </Container>
            }
            {stepInProcess.congrats &&
                <div className={css(styles.CongratsContainer)}>
                    <div className={css(styles.SelectedStepText)}>Congratulations!</div>
                </div>}
            {stepInProcess.setChildAccount &&
                <Container className={css(styles.MainContainer)}>
                    <Row style={{width: '100%'}}>
                        <Col className={css(styles.StepContainer)}>
                            <div className={css(styles.StepText)}>1. Become a Member</div>
                        </Col>
                        <Col className={css(styles.StepContainer)}>
                            <div className={css(styles.SelectedStepText)}>2. Add Children</div>
                        </Col>
                        <Col className={css(styles.StepContainer)}>
                            <div className={css(styles.StepText)}>3. Create Child Profile</div>
                        </Col>
                    </Row>
                </Container>
            }
        </>
    )
}


const styles = StyleSheet.create({
    MainContainer: {
        height: '80px',
        backgroundColor: '#e3e2de',
        borderRadius: '20px',
        fontFamily: 'Asap, sans-serif',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    StepContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    StepText: {
        fontFamily: 'Asap, sans-serif',
        fontSize: '20px',
    },
    SelectedStepText: {
        fontFamily: 'Asap, sans-serif',
        fontSize: '22px',
        fontWeight: 'bold',
    },
    CongratsContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '80px',
        width: '100%',
        borderRadius: '20px',
        backgroundColor: '#e3e2de',
        marginTop: '5px',
    },
})