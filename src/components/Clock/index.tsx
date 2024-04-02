import { useState, useEffect } from "react";
import "./index.css";
export function Clock(){
    type timeDefinition = {
        hours:number,
        minutes:number,
        seconds:number
    }

    const [time, setTime] = useState<timeDefinition>({
        hours: new Date().getHours(),
        minutes: new Date().getMinutes(),
        seconds: new Date().getSeconds(),
    });
    
    useEffect(()=>{
        const interval = setInterval(()=>{
            setTime(oldValue=>{
                if(oldValue.seconds>=59){
                    //Atualiza as horas
                    if(oldValue.minutes>=59){
                        if(oldValue.hours>=11){
                            return {
                                hours:0,
                                minutes: 0,
                                seconds: 0
                            }
                        }
                        return {
                            hours:oldValue.hours+1,
                            minutes: 0,
                            seconds: 0
                        }
                    }
                    //Atualiza os minutos
                    return {
                        ...oldValue,
                        minutes: oldValue.minutes+1,
                        seconds: 0
                    }
                }
                //Atualiza os segundos
                return {
                    ...oldValue,
                    seconds: oldValue.seconds+1
                }
            });
        }, 1000);
        return ()=>{clearInterval(interval)};
    }, [])

    function formatTime(value : number){
        const string = value.toString();
        return string.padStart(3-string.length, '0');
    }

    return(
        <div className="Clock">
            <p>{formatTime(time.hours)}:{formatTime(time.minutes)}:{formatTime(time.seconds)}</p>
        </div>
    );
}