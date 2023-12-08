var botonEnviar = window.enviar.addEventListener("click",(event) => {
    event.preventDefault();
    let dato1 = window.Datos1.value;
    let dato2 = window.Datos2.value;
    
    let datos = [dato1,dato2];
    
    new Chartist.Bar(
    "#student",
    {
      labels: ["Organismos Acad. Comunes", "Grado y Tenico superior"],
      series: [datos],
    },
    {
      seriesBarDistance: 30,
      reverseData: false,
      vertialBars: true,
      axisY: {
        offset: 70  },
    }
  );
});
