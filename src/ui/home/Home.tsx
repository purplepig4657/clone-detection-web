import React, { useState, useRef } from "react";
import FlexContainer from "../widget/FlexContainer";
import Scaffold from "../widget/Scaffold";
import Editor, { Monaco, OnMount } from '@monaco-editor/react'
import * as monaco from 'monaco-editor';
import { ResponsiveText } from "../widget/TextWidgets";
import { AiFillCopy } from "react-icons/ai";
import { AwesomeButton, AwesomeButtonProgress } from "react-awesome-button";
import 'react-awesome-button/dist/styles.css';


export const Home = (): JSX.Element => {
    const editor1Ref = useRef<monaco.editor.IStandaloneCodeEditor | null>(null);
    const editor2Ref = useRef<monaco.editor.IStandaloneCodeEditor | null>(null);
    const [message, setMessage] = useState('');
    const [textColor, setTextColor] = useState('green');

    const handleEditor1DidMount: OnMount = (editor, monaco) => {
        editor1Ref.current = editor;
    };

    const handleEditor2DidMount: OnMount = (editor, monaco) => {
        editor2Ref.current = editor;
    };
    
    const getEditor1Value = () => {
        if (editor1Ref.current) {
            return editor1Ref.current.getValue();
        }
    };

    const getEditor2Value = () => {
        if (editor2Ref.current) {
            return editor2Ref.current.getValue();
        }
    };

    const handleSecondEditor = (monaco: Monaco) => {
        monaco.editor.defineTheme('myCustomTheme', {
            base: 'vs-dark',
            inherit: true,
            rules: [],
            colors: {
              'editor.background': '#1E1E1E',
            }
        });
    };

    const requestDetection = async() => {
        const response = await fetch('http://127.0.0.1:8080/detection', {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json',
            },
            body: JSON.stringify({code1: getEditor1Value(), code2: getEditor2Value()}),
        });

        if (!response.ok && response) {
            const data = await response.json();
            setMessage(data.message);
            setTextColor("red");
            return;
        }

        const data = await response.json();
        setMessage(data.message);
        setTextColor("green");
    }



    return <Scaffold>
        <FlexContainer flexDirection="column" height="100%">
            <FlexContainer height="10%" {...{ background: "#171717" }}>
                <FlexContainer width="100%" flexDirection="column">
                    <FlexContainer width="100%">
                        <FlexContainer width="100%" alignItems="center" justifyContent="space-between">
                            <FlexContainer alignItems="center">
                                <AiFillCopy color="white" size={20} style={{ marginLeft: 10 }} />
                                <ResponsiveText fontSize="Small" color="white" fontWeight={350} {...{ margin: 10 }}>Clone detection</ResponsiveText>
                            </FlexContainer>
                            <AwesomeButton type="primary" style={{ height: 30, marginRight: 10 }}>Learn more</AwesomeButton>
                        </FlexContainer>
                    </FlexContainer>
                    <FlexContainer width="100%">
                        <FlexContainer width="50%">
                            <ResponsiveText fontSize="Tiny" color="white" fontWeight={300} {...{ margin: 10 }}>Code 1</ResponsiveText>
                        </FlexContainer>
                        <FlexContainer width="50%">
                            <ResponsiveText fontSize="Tiny" color="white" fontWeight={300} {...{ margin: 10 }}>Code 2</ResponsiveText>
                        </FlexContainer>
                    </FlexContainer>
                </FlexContainer> 
            </FlexContainer>
            <FlexContainer height="85%" justifyContent="flex-start" alignItems="center">
                <Editor height="100%" width="50%" theme="vs-dark" defaultLanguage="c" options={{ fontSize: 15 }} onMount={handleEditor1DidMount} />
                <Editor height="100%" width="50%" theme="myCustomTheme" defaultLanguage="c" options={{ fontSize: 15 }} beforeMount={handleSecondEditor} onMount={handleEditor2DidMount} />
            </FlexContainer>
            <FlexContainer justifyContent="flex-end" alignItems="center" height="5%" {...{ background: "#171717", paddingRight: 10 }}>
                <ResponsiveText fontSize="Tiny" color={textColor} fontWeight={300} {...{marginRight: 10}}>{message}</ResponsiveText>
                <AwesomeButtonProgress onPress={async (event, release) => {
                    await requestDetection();
                    release();
                }} type="primary" style={{ height: 30 }}>Detect</AwesomeButtonProgress>
            </FlexContainer>
        </FlexContainer>
    </Scaffold>;
};
