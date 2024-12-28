import React, { useEffect, useState } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import useClipboard from 'react-use-clipboard';

const VoiceToText = () => {
    const [textToCopy, setTextToCopy] = useState('');
    const [textToShow, setTextToShow] = useState('');
    const [isCopied, setCopied] = useClipboard(textToCopy, {
        successDuration: 1000,
    });

    const { transcript, browserSupportsSpeechRecognition, resetTranscript } = useSpeechRecognition();

    const startListening = () => SpeechRecognition.startListening({ continuous: true, language: 'en-IN' });

    useEffect(() => {
        setTextToCopy(transcript);
        setTextToShow(transcript);
    }, [transcript]);

    const clearText = () => {
        SpeechRecognition.stopListening();
        resetTranscript(); 
        setTextToCopy('');
        setTextToShow('');
    };

    if (!browserSupportsSpeechRecognition) {
        return <p>Browser does not support speech recognition.</p>;
    }

    return (
        <>
            <div className="container">
                <h2>Speak here</h2>
                <br />

                <div className="main-content" onClick={() => setTextToCopy(transcript)}>
                    {textToShow || 'Start speaking...'}
                </div>

                <div className="btn-style">
                    <button onClick={setCopied}>
                        {isCopied ? 'Copied!' : 'Copy to clipboard'}
                    </button>
                    <button onClick={startListening}>Start Listening</button>
                    <button onClick={SpeechRecognition.stopListening}>Stop Listening</button>
                    <button onClick={clearText}>Clear Text</button>
                </div>
            </div>
        </>
    );
};

export default VoiceToText;
