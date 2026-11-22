// Datos de demostración (ilustrativos, no son alianzas reales)
const C=[["Cultura y arte","#3B1E54","#c13584","🎨"],["Gastronomía","#FF4D2E","#FFC83D","🌮"],["Cafés y espacios","#6b3f1d","#e0a96d","☕"],["Entretenimiento","#0b3d91","#7b2ff7","🎬"],["Experiencias creativas","#d4145a","#fbb03b","🏺"],["Al aire libre","#0f7b4a","#a8e063","🌳"]];
const Z=["Roma Norte","Condesa","Polanco","Centro Histórico","Coyoacán","Juárez","San Ángel"];
const P=[
[1,"Museo Soumaya","Cultura y arte","Polanco","Arte europeo y mexicano en un edificio icónico.","Acceso incluido","Experiencia con reservación previa","11:00 a. m.,1:00 p. m.,4:00 p. m.",0,"Un recorrido guiado de 90 min por colecciones que cambian tu idea de la ciudad.",90],
[2,"Museo Jumex","Cultura y arte","Polanco","Arte contemporáneo internacional.","Beneficio especial: visita guiada","Reservación previa","11:00 a. m.,2:00 p. m.,5:00 p. m.",0,"Exposiciones que no verás en otro lugar de México.",75],
[3,"Cineteca Nacional","Entretenimiento","Coyoacán","Cine de autor y retrospectivas.","Tarifa preferencial","Reservación previa","4:00 p. m.,6:00 p. m.,8:00 p. m.",60,"Cine que descubres, no que te recomienda un algoritmo.",120],
[4,"Centro Cultural Elena Garro","Cultura y arte","Coyoacán","Casa de cultura, talleres y exposiciones.","Acceso incluido","Acceso libre","10:00 a. m.,12:00 p. m.,4:00 p. m.",0,"Un rincón de Coyoacán lleno de historia y voces nuevas.",60],
[5,"Mercado Roma","Gastronomía","Roma Norte","Sabores de autor bajo un mismo techo.","Beneficio exclusivo: degustación","Reservación previa","1:00 p. m.,3:00 p. m.,6:00 p. m.",0,"Cocina emergente de la ciudad en un solo paseo.",90],
[6,"Café de especialidad (demo)","Cafés y espacios","Condesa","Granos de origen y terraza arbolada.","Acceso incluido: cata de café","Sin costo","9:00 a. m.,11:00 a. m.,4:00 p. m.",0,"El plan perfecto para bajar el ritmo.",60],
[7,"Taller de cerámica (demo)","Experiencias creativas","Roma Norte","Modela tu propia pieza con guía experta.","Tarifa preferencial","Costo adicional","11:00 a. m.,1:00 p. m.,5:00 p. m.",150,"Sales con algo hecho por ti.",120],
[8,"Ruta de tacos (demo)","Gastronomía","Centro Histórico","Recorrido a pie por taquerías de barrio.","Beneficio exclusivo","Reservación previa","1:00 p. m.,6:00 p. m.",0,"Conoces la ciudad por su sabor.",150],
[9,"Paseo por Parque México","Al aire libre","Condesa","Caminata cultural y art déco.","Acceso incluido","Reservación previa","8:00 a. m.,10:00 a. m.,5:00 p. m.",0,"Una ciudad distinta a pie.",90],
[10,"Galería de arte (demo)","Cultura y arte","Juárez","Artistas emergentes y mezcal.","Beneficio especial para miembros","Reservación previa","12:00 p. m.,4:00 p. m.,7:00 p. m.",0,"Descubre arte antes de que sea tendencia.",60],
[11,"Jardines de San Ángel","Al aire libre","San Ángel","Casonas, plazas y jardines.","Acceso incluido","Sin costo","10:00 a. m.,1:00 p. m.,4:00 p. m.",0,"Un día de sábado en un barrio de película.",120],
[12,"Noche de jazz (demo)","Entretenimiento","Centro Histórico","Música en vivo en un bar histórico.","Tarifa preferencial","Costo adicional","7:00 p. m.,9:00 p. m.",90,"Una noche sin pantalla.",120]];
P.forEach(p=>{const c=C.find(x=>x[0]==p[2]);p.g=`linear-gradient(135deg,${c[1]},${c[2]})`;p.e=c[3]});
