import { useState } from 'react';
import { useIdleTimer } from 'react-idle-timer'

export default function useIdle({
    onIdle,
    idleTime = 10000,
    hideModal,
    resetTimer,
    showModal
}) {
    const [isIdle, setIsIdle] = useState();

    const handleOnIdle = (e) => {
        setIsIdle(true);
        onIdle();
    }

    const handleShowModal= ()=>{
        showModal();
    }

    const handleResetTimer= ()=>{
        resetTimer();
    }

    const idleTimer = useIdleTimer({
        timeout: 10000,
        onIdle: handleOnIdle,
        debounce: 500,
        promptBeforeIdle: 4000,
        onPrompt: handleShowModal,
        startManually: true
    })

    return {
        idleTimer,
        isIdle
    }

}