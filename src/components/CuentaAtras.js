import React from "react";
// Pasamos los segundos a formato hora
function secondsToHours(seconds) {
    var hour = Math.floor(seconds / 3600);
    hour = (hour < 10)? '0' + hour : hour;
    var minute = Math.floor((seconds / 60) % 60);
    minute = (minute < 10)? '0' + minute : minute;
    var second = seconds % 60;
    second = (second < 10)? '0' + second : second;
    return hour + ':' + minute + ':' + second;
  }

export const CuentaAtras = (props) => {
    const horaActual= new Date().getTime();
    const objetivo= props.objetivo;
    const tipoMarea= props.tipo;
    const dif= objetivo - horaActual
    const segundos= Math.floor(dif / 1000) 
    // const minutos= Math.floor(dif / (1000 * 60 )) 
    // const horas= Math.floor(dif / (1000 * 60 * 60 )) 
    // const dias= Math.floor(dif / (1000 * 60 * 60 * 24 )) 
    const [counter, setCounter] = React.useState(horaActual);

    React.useEffect(() => {
        counter < objetivo && setTimeout(() => setCounter(counter - 1000), 1000); // Como la hora nos viene en miliseg restamos 1000 milis por segundo
      }, [counter, objetivo]);

      return (
        <div className="CuentaAtras">
        {( isNaN(segundos))? 'Cambio de marea' : <div>Faltan {secondsToHours(segundos)} para {tipoMarea}.</div>}
          
        </div>
      );
    }
