import React, {useState, useContext} from "react";

const BlurContext = React.createContext()
const SetBlurContext = React.createContext()
const RemoveBlurContext = React.createContext()

export function  useBlur(){
    return useContext(BlurContext);
}
export function  useSetBLur(){
    return useContext(SetBlurContext);
}
export function  useRemoveBlur(){
    return useContext(RemoveBlurContext);
}

export function BlurProvider({children}){
    const [blur, setBlur] = useState('');

    const handleBlur = () => setBlur('blur(7rem)');
    const removeBlur = () => setBlur('')

    return (
        <BlurContext.Provider value={blur}>
            <SetBlurContext.Provider value={handleBlur}>
                <RemoveBlurContext.Provider value={removeBlur}>
                    {children}
                </RemoveBlurContext.Provider>
            </SetBlurContext.Provider>
        </BlurContext.Provider>
    )
}