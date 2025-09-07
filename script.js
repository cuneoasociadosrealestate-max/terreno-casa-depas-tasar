// Clave global para acceso
const CLAVE_GLOBAL = "12345";

// Elementos del DOM
const gate = document.getElementById('gate');
const app = document.getElementById('app');
const gateMsg = document.getElementById('gateMsg');
const btnLogin = document.getElementById('btnLogin');
const logout = document.getElementById('logout');

const DATA = {
  // === LIMA TOP (Distritos Premium) ===
  "San Isidro": {
    type: ["Departamento", "Casa", "Terreno"],
    zones: {
      "San Isidro Sur (Financiero)": 11581,
      "San Isidro Centro": 10650,
      "San Isidro Norte": 10000,
      "El Golf": 11300,
      "Country Club": 11000,
      "Orrantia": 10600,
      "Corpac": 9750
    }
  },
  "Miraflores": {
    type: ["Departamento", "Casa", "Terreno"],
    zones: {
      "Malecon de Miraflores": 10600,
      "Parque Kennedy": 10000,
      "Reducto": 9600,
      "San Antonio": 9300,
      "Miraflores Alto": 9000,
      "28 de Julio": 8700,
      "Limite Barranco": 8500
    }
  },
  "Barranco": {
    type: ["Departamento", "Casa", "Terreno"],
    zones: {
      "Barranco Cultural (Centro)": 9774,
      "Nuevo Barranco": 9200,
      "Malecon Barranco": 9400,
      "Plaza de Armas Barranco": 8600,
      "Barranco Tradicional": 8300,
      "Limite Chorrillos": 8000,
      "Zona Residencial": 7800
    }
  },
  "Santiago de Surco": {
    type: ["Departamento", "Casa", "Terreno"],
    zones: {
      "Monterrico": 7600,
      "Chacarilla": 7200,
      "Las Gardenias": 7000,
      "Valle Hermoso": 6900,
      "Surco Centro": 6700,
      "Surco Viejo": 5750,
      "Limite SJM": 5200
    }
  },
  "La Molina": {
    type: ["Departamento", "Casa", "Terreno"],
    zones: {
      "La Molina Club": 7000,
      "La Planicie": 6700,
      "Rinconada": 5800,
      "Sol de la Molina": 6400,
      "La Molina Vieja": 6200,
      "Cieneguilla limite": 5900,
      "Zona Alta": 5800
    }
  },

  // === LIMA MODERNA (Distritos Intermedios) ===
  "Jesus Maria": {
    type: ["Departamento", "Casa", "Terreno"],
    zones: {
      "Plaza San Martin": 7300,
      "Hospital Rebagliati": 7000,
      "Brasil": 6800,
      "Centro Jesus Maria": 6700,
      "Limite Breña": 6400,
      "Jesus Maria Residencial": 6600,
      "Zona Industrial": 6200
    }
  },
  "Lince": {
    type: ["Departamento", "Casa", "Terreno"],
    zones: {
      "Petit Thouars": 7200,
      "Arequipa": 7000,
      "Lince Centro": 6800,
      "Estadio Nacional": 6600,
      "Limite La Victoria": 6300,
      "Zona Residencial": 6700,
      "Parque Mariscal Castilla": 6900
    }
  },
  "Magdalena del Mar": {
    type: ["Departamento", "Casa", "Terreno"],
    zones: {
      "Costa Verde": 7000,
      "Plaza Tupac Amaru": 6600,
      "Magdalena Centro": 6400,
      "Limite San Miguel": 6200,
      "Zona Residencial": 6500,
      "Playa Magdalena": 6700,
      "Magdalena Baja": 6100
    }
  },
  "San Miguel": {
    type: ["Departamento", "Casa", "Terreno"],
    zones: {
      "La Marina": 6200,
      "Plaza San Miguel": 6000,
      "Bertolotto": 5800,
      "San Miguel Centro": 5700,
      "Limite Callao": 5400,
      "Zona Residencial": 5900,
      "Costa Verde San Miguel": 6100
    }
  },
  "Pueblo Libre": {
    type: ["Departamento", "Casa", "Terreno"],
    zones: {
      "Plaza Bolivar": 6100,
      "Cuadra 20 Brasil": 5900,
      "Pueblo Libre Centro": 5700,
      "Limite Magdalena": 5600,
      "Zona Universitaria": 5800,
      "San Marcos": 5500,
      "Pueblo Libre Alto": 6000
    }
  },
  "Surquillo": {
    type: ["Departamento", "Casa", "Terreno"],
    zones: {
      "Surquillo Centro": 6600,
      "Angamos": 6400,
      "Limite San Borja": 6300,
      "Limite Miraflores": 6700,
      "Mercado Surquillo": 6100,
      "Zona Residencial": 6200,
      "Surquillo Norte": 6500
    }
  },
  "San Borja": {
    type: ["Departamento", "Casa", "Terreno"],
    zones: {
      "Centro Empresarial": 7000,
      "Aviacion": 6800,
      "San Borja Norte": 6600,
      "San Borja Sur": 6700,
      "Javier Prado": 6900,
      "Parques de San Borja": 6500,
      "Biblioteca Nacional": 6400
    }
  },

  // === LIMA ESTE ===
  "Ate": {
    type: ["Departamento", "Casa", "Terreno"],
    zones: {
      "Santa Clara": 5000,
      "Vitarte": 4600,
      "Ate Centro": 4400,
      "Ceres": 4200,
      "Mayorazgo": 4700,
      "La Molina limite": 4800,
      "Huaycan": 4000
    }
  },
  "San Juan de Lurigancho": {
    type: ["Departamento", "Casa", "Terreno"],
    zones: {
      "Zarate": 4000,
      "Canto Grande": 3600,
      "Bayovar": 3700,
      "Las Flores": 3500,
      "Mangomarca": 3300,
      "SJL Centro": 3400,
      "Huascar": 3200
    }
  },
  "El Agustino": {
    type: ["Departamento", "Casa", "Terreno"],
    zones: {
      "El Agustino Centro": 4600,
      "10 de Octubre": 4400,
      "Limite Ate": 4500,
      "Zona Alta": 4300,
      "Zona Industrial": 4200,
      "Residencial": 4700,
      "Cerros": 4000
    }
  },
  "Santa Anita": {
    type: ["Departamento", "Casa", "Terreno"],
    zones: {
      "Santa Anita Centro": 5000,
      "Los Jardines": 4800,
      "Parques Industriales": 4600,
      "Limite Ate": 4700,
      "Zona Residencial": 4900,
      "Santa Anita Norte": 4500,
      "Santa Anita Sur": 5100
    }
  },
  "Lurigancho-Chosica": {
    type: ["Departamento", "Casa", "Terreno"],
    zones: {
      "Chosica Centro": 4000,
      "Chaclacayo limite": 4200,
      "Ñaña": 3800,
      "Ricardo Palma": 3900,
      "Carapongo": 3600,
      "Jicamarca": 3400,
      "Huachipa": 4100
    }
  },

  // === LIMA NORTE ===
  "Los Olivos": {
    type: ["Departamento", "Casa", "Terreno"],
    zones: {
      "Los Olivos Centro": 3600,
      "Pro": 3400,
      "Mercado Unicachi": 3300,
      "Los Olivos Norte": 3200,
      "Los Olivos Oeste": 2996,
      "Las Palmeras": 3500,
      "Sol de Oro": 3700
    }
  },
  "San Martin de Porres": {
    type: ["Departamento", "Casa", "Terreno"],
    zones: {
      "Universitaria": 3200,
      "Tomas Valle": 3100,
      "Fiori": 3000,
      "SMP Centro": 2900,
      "Infantas": 2800,
      "Condevilla": 2700,
      "Limite Callao": 2600
    }
  },
  "Comas": {
    type: ["Departamento", "Casa", "Terreno"],
    zones: {
      "Comas Centro": 3000,
      "Año Nuevo": 2900,
      "La Libertad": 2800,
      "Carabayllo limite": 2700,
      "Zona Alta": 2600,
      "Collique": 3100,
      "Tupac Amaru": 3200
    }
  },
  "Independencia": {
    type: ["Departamento", "Casa", "Terreno"],
    zones: {
      "MegaPlaza": 4200,
      "Tahuantinsuyo": 4000,
      "Independencia Centro": 3800,
      "Ermitaño": 3600,
      "Payet": 3900,
      "Zona Industrial": 3700,
      "Unificada": 4100
    }
  },
  "Puente Piedra": {
    type: ["Departamento", "Casa", "Terreno"],
    zones: {
      "Puente Piedra Centro": 3100,
      "Chillon": 2900,
      "Copacabana": 3000,
      "Shangrila": 2800,
      "Ensenada": 2700,
      "Cercado": 3200,
      "Ventanilla limite": 3300
    }
  },
  "Carabayllo": {
    type: ["Departamento", "Casa", "Terreno"],
    zones: {
      "Carabayllo Centro": 2700,
      "Santa Isabel": 2800,
      "San Pedro": 2600,
      "Raul Porras": 2500,
      "Lomas": 2400,
      "El Progreso": 2900,
      "Tungasuca": 2750
    }
  },

  // === LIMA SUR ===
  "Chorrillos": {
    type: ["Departamento", "Casa", "Terreno"],
    zones: {
      "Chorrillos Centro": 6000,
      "Agua Dulce": 5700,
      "Villa": 5400,
      "Malecon Grau": 6000,
      "Matellini": 5200,
      "Villa El Salvador limite": 5000,
      "Huertos de Villa": 5700
    }
  },
  "San Juan de Miraflores": {
    type: ["Departamento", "Casa", "Terreno"],
    zones: {
      "SJM Centro": 3600,
      "Villa Maria": 3400,
      "Panamericana Sur": 3500,
      "Ciudad de Dios": 3300,
      "Pampas de San Juan": 3200,
      "Maria Auxiliadora": 3700,
      "Villa El Salvador limite": 3100
    }
  },
  "Villa El Salvador": {
    type: ["Departamento", "Casa", "Terreno"],
    zones: {
      "VES Centro": 3200,
      "Sector 1": 3000,
      "Sector 2": 3100,
      "Sector 3": 2900,
      "Jose Carlos Mariategui": 2800,
      "Zona Industrial": 3300,
      "Lomo de Corvina": 3400
    }
  },
  "Villa Maria del Triunfo": {
    type: ["Departamento", "Casa", "Terreno"],
    zones: {
      "VMT Centro": 3000,
      "Nueva Esperanza": 2800,
      "Jose Galvez": 2900,
      "Inca Pachacutec": 2700,
      "Tablada de Lurin": 3100,
      "Cercado VMT": 3200,
      "Zona Alta": 2700
    }
  },
  "Lurin": {
    type: ["Departamento", "Casa", "Terreno"],
    zones: {
      "Lurin Centro": 4200,
      "Mamacona": 4000,
      "Villa Alejandro": 3800,
      "Julio C. Tello": 4100,
      "Km 40 Panamericana": 4300,
      "Pachacamac limite": 3900,
      "Zona Arqueologica": 3700
    }
  },
  "Pachacamac": {
    type: ["Departamento", "Casa", "Terreno"],
    zones: {
      "Pachacamac Pueblo": 3300,
      "Cieneguilla": 4600,
      "La Molina limite": 4400,
      "Club Hipico": 5000,
      "Manchay": 3000,
      "Villa Salvador": 3100,
      "Zona Arqueologica": 3200
    }
  },

  // === CALLAO ===
  "Callao": {
    type: ["Departamento", "Casa", "Terreno"],
    zones: {
      "Callao Cercado": 3600,
      "Puerto": 3400,
      "Carmen de la Legua": 4000,
      "Bellavista": 4200,
      "Centro Historico": 3300,
      "Zona Industrial": 3200,
      "Aeropuerto": 3100
    }
  },
  "Bellavista": {
    type: ["Departamento", "Casa", "Terreno"],
    zones: {
      "Bellavista Centro": 4200,
      "Av. Colonial": 4000,
      "Plaza Bellavista": 4100,
      "Residencial": 3900,
      "La Perla limite": 3800,
      "Oscar Benavides": 4300,
      "Zona Alta": 3700
    }
  },
  "La Perla": {
    type: ["Departamento", "Casa", "Terreno"],
    zones: {
      "La Perla Centro": 4000,
      "Residencial La Perla": 4200,
      "Costanera": 4400,
      "Plaza La Perla": 3900,
      "Elmer Faucett": 3800,
      "San Miguel limite": 4100,
      "Zona Baja": 3700
    }
  },
  "La Punta": {
    type: ["Departamento", "Casa", "Terreno"],
    zones: {
      "Malecon La Punta": 7000,
      "Centro La Punta": 6600,
      "Fortaleza": 6400,
      "Cantolao": 6200,
      "Avenida Grau": 6700,
      "Zona Residencial": 6800,
      "Terminal Maritimo": 6000
    }
  },
  "Ventanilla": {
    type: ["Departamento", "Casa", "Terreno"],
    zones: {
      "Ventanilla Centro": 3400,
      "Pachacutec": 3000,
      "Mi Peru": 2800,
      "Santa Rosa": 3200,
      "Angamos": 3300,
      "Ventanilla Alta": 3100,
      "Ventanilla Baja": 3500
    }
  },
  "Mi Peru": {
    type: ["Departamento", "Casa", "Terreno"],
    zones: {
      "Mi Peru Centro": 2800,
      "Jose Galvez": 2700,
      "Bartolome Herrera": 2600,
      "Ventanilla limite": 2900,
      "Ciudad Satelite": 2500,
      "Zona Industrial": 3000,
      "Costa Verde": 3100
    }
  },

  // === BALNEARIOS ===
  "Santa Maria del Mar": {
    type: ["Departamento", "Casa", "Terreno"],
    zones: {
      "Playa Santa Maria": 7600,
      "Club Playa": 7400,
      "Santa Maria Centro": 7000,
      "Zona Residencial": 7200,
      "Punta Hermosa limite": 6800,
      "Malecon": 7800,
      "Zona Alta": 6600
    }
  },
  "Punta Hermosa": {
    type: ["Departamento", "Casa", "Terreno"],
    zones: {
      "Playa Punta Hermosa": 5600,
      "Centro Punta Hermosa": 5200,
      "Zona Residencial": 5400,
      "Punta Negra limite": 5000,
      "Club de Playa": 5800,
      "Malecon Sur": 4800,
      "Zona Alta": 5100
    }
  },
  "Punta Negra": {
    type: ["Departamento", "Casa", "Terreno"],
    zones: {
      "Playa Punta Negra": 5200,
      "Centro Punta Negra": 4800,
      "Zona Residencial": 5000,
      "San Bartolo limite": 4600,
      "Club Nautico": 5400,
      "Malecon": 4400,
      "Zona Alta": 4700
    }
  },
  "San Bartolo": {
    type: ["Departamento", "Casa", "Terreno"],
    zones: {
      "Playa San Bartolo": 5000,
      "Centro San Bartolo": 4600,
      "Zona Residencial": 4800,
      "Pucusana limite": 4400,
      "Malecon San Bartolo": 4200,
      "Club de Playa": 5200,
      "Zona Alta": 4500
    }
  },
  "Pucusana": {
    type: ["Departamento", "Casa", "Terreno"],
    zones: {
      "Puerto Pucusana": 3800,
      "Pucusana Centro": 3600,
      "Playa Pucusana": 4000,
      "Zona Residencial": 3400,
      "Malecon": 3200,
      "Club Nautico": 4200,
      "Zona Alta": 3300
    }
  },
  "Ancon": {
    type: ["Departamento", "Casa", "Terreno"],
    zones: {
      "Balneario Ancon": 3600,
      "Ancon Centro": 3200,
      "Playa Hermosa": 3400,
      "Zona Residencial": 3000,
      "Santa Rosa limite": 2800,
      "Malecon Ancon": 3800,
      "Zona Alta": 2900
    }
  },
  "Santa Rosa": {
    type: ["Departamento", "Casa", "Terreno"],
    zones: {
      "Santa Rosa Centro": 3000,
      "Playa Santa Rosa": 3200,
      "Chancay limite": 2800,
      "Ancon limite": 2900,
      "Zona Residencial": 2700,
      "Malecon": 3400,
      "Zona Rural": 2500
    }
  },
// === OTROS DISTRITOS ===
  "Cercado de Lima": {
    type: ["Departamento", "Casa", "Terreno"],
    zones: {
      "Centro Historico": 6200,
      "Plaza Mayor": 6400,
      "Barrios Altos": 5600,
      "Monserrate": 5800,
      "Cinco Esquinas": 5400,
      "Abancay": 6000,
      "Tacna": 5900
    }
  },
  "Rimac": {
    type: ["Departamento", "Casa", "Terreno"],
    zones: {
      "Centro Historico Rimac": 5200,
      "Amancaes": 4800,
      "Cerro San Cristobal": 4600,
      "Rimac Centro": 5000,
      "Zona Industrial": 4400,
      "Martinete": 4900,
      "Quinta Heeren": 5100
    }
  },
  "La Victoria": {
    type: ["Departamento", "Casa", "Terreno"],
    zones: {
      "Gamarra": 6600,
      "La Victoria Centro": 6200,
      "Balconcillo": 6000,
      "Guadalupe": 5800,
      "Santa Catalina": 6400,
      "San Cosme": 5600,
      "Apolo": 5900
    }
  },
  "Breña": {
    type: ["Departamento", "Casa", "Terreno"],
    zones: {
      "Breña Centro": 5200,
      "Plaza Castilla": 5400,
      "Hospital Loayza": 5100,
      "Brasil Breña": 5000,
      "Jesus Maria limite": 5300,
      "Zona Residencial": 4900,
      "Bolivia": 4800
    }
  },
  "San Luis": {
    type: ["Departamento", "Casa", "Terreno"],
    zones: {
      "San Luis Centro": 6200,
      "Residencial San Luis": 6000,
      "Ate limite": 5800,
      "San Borja limite": 6400,
      "Zona Industrial": 5600,
      "Parques San Luis": 6100,
      "San Luis Norte": 5900
    }
  },
  "Chaclacayo": {
    type: ["Departamento", "Casa", "Terreno"],
    zones: {
      "Chaclacayo Centro": 5200,
      "Club Chaclacayo": 5600,
      "Chosica limite": 5000,
      "Cieneguilla limite": 5400,
      "Zona Residencial": 4800,
      "Rio Rimac": 4600,
      "Zona Alta": 5100
    }
  }
};
// Factores de tasación
const FACTORES_TASACION = {
  antiguedad: {
    depreciacionAnual: 0.01,
    depreciacionMaxima: 0.30,
    premiumNuevo: 0.05
  },
  dormitorios: {
    base: 2,
    incrementoPorDormitorio: 0.08,
    decrementoPorDefecto: 0.12,
    maximoIncremento: 0.25
  },
  banos: {
    base: 2,
    incrementoPorBano: 0.06,
    decrementoPorDefecto: 0.15,
    maximoIncremento: 0.18
  },
  areaLibre: {
    departamento: 0.25,
    casa: 0.40,
    terreno: 0.90
  },
  tipoInmueble: {
    departamento: 1.0,
    casa: 1.12,
    terreno: 0.80,
    oficina: 0.95,
    local: 0.85
  },
  eficienciaEnergetica: {
    A: 1.10,
    B: 1.05,
    C: 1.00,
    D: 0.95,
    E: 0.90,
    F: 0.85
  },
  estadoConservacion: {
    excelente: 1.05,
    bueno: 1.00,
    regular: 0.90,
    remodelar: 0.75
  }
};

// Función para obtener tipo de cambio (fijo por CORS)
async function obtenerTipoCambio() {
  return 3.75; // Tipo de cambio fijo
}

// Funciones de factores
function aplicarFactorAntiguedad(valor, antiguedad) {
  if (antiguedad <= 1) {
    return valor * (1 + FACTORES_TASACION.antiguedad.premiumNuevo);
  }
  const depreciacion = Math.min(
    antiguedad * FACTORES_TASACION.antiguedad.depreciacionAnual,
    FACTORES_TASACION.antiguedad.depreciacionMaxima
  );
  return valor * (1 - depreciacion);
}

function aplicarFactorDormitorios(valor, dormitorios, tipoInmueble) {
  if (tipoInmueble === "terreno") {
    return valor;
  }
  const { base, incrementoPorDormitorio, decrementoPorDefecto, maximoIncremento } = FACTORES_TASACION.dormitorios;
  if (dormitorios === base) return valor;
  if (dormitorios > base) {
    const incremento = Math.min((dormitorios - base) * incrementoPorDormitorio, maximoIncremento);
    return valor * (1 + incremento);
  } else {
    const decremento = (base - dormitorios) * decrementoPorDefecto;
    return valor * (1 - decremento);
  }
}

function aplicarFactorBanos(valor, banos, tipoInmueble) {
  if (tipoInmueble === "terreno") {
    return valor;
  }
  const { base, incrementoPorBano, decrementoPorDefecto, maximoIncremento } = FACTORES_TASACION.banos;
  if (banos === base) return valor;
  if (banos > base) {
    const incremento = Math.min((banos - base) * incrementoPorBano, maximoIncremento);
    return valor * (1 + incremento);
  } else {
    const decremento = (base - banos) * decrementoPorDefecto;
    return valor * (1 - decremento);
  }
}

function aplicarFactorPiso(valor, piso, tieneAscensor, tipoInmueble) {
  if (tipoInmueble === "casa" || tipoInmueble === "terreno") {
    return valor;
  }

  let factorPiso = 1.0;
  if (piso >= 1 && piso <= 2) {
    factorPiso = 0.92;
  } else if (piso >= 3 && piso <= 8) {
    factorPiso = 1.0;
  } else if (piso >= 9 && piso <= 15) {
    factorPiso = 0.96;
  } else if (piso >= 16) {
    factorPiso = 0.88;
  }

  let factorAscensor = 1.0;
  if (tieneAscensor) {
    factorAscensor *= (1 + 0.10);
    if (piso >= 6) {
      factorAscensor *= (1 + 0.05);
    }
  } else {
    if (piso >= 7) {
      factorAscensor = 0.70;
    } else if (piso >= 4) {
      factorAscensor = 0.85;
    }
  }
  return valor * factorPiso * factorAscensor;
}

function aplicarFactorEficienciaEnergetica(valor, calificacion) {
  const factor = FACTORES_TASACION.eficienciaEnergetica[calificacion] || 1.0;
  return valor * factor;
}

function aplicarFactorEstadoConservacion(valor, estado) {
  const factor = FACTORES_TASACION.estadoConservacion[estado] || 1.0;
  return valor * factor;
}

// Función para calcular rango dinámico
function calcularRangoDinamico(datos) {
  let rango = 0.10;
  rango += Math.min((datos.antig / 5) * 0.005, 0.05);
  if (datos.ascensor === "sin" && datos.piso >= 7) {
    rango += 0.05;
  } else if (datos.ascensor === "con") {
    rango -= 0.02;
  }
  if (datos.dorms >= 3) {
    rango -= 0.02;
  } else if (datos.dorms === 1) {
    rango += 0.03;
  }
  if (datos.tipo.toLowerCase().includes("terreno")) {
    rango += 0.05;
  } else if (datos.tipo.toLowerCase().includes("departamento")) {
    rango -= 0.02;
  }
  return Math.min(Math.max(rango, 0.08), 0.20);
}

// Función para mostrar errores
function mostrarError(mensaje) {
  const summary = document.getElementById("summary");
  summary.textContent = `Error: ${mensaje}`;
  summary.style.color = '#e74c3c';
}

// Función para limpiar resultados
function limpiarResultados() {
  ['valMin', 'valMed', 'valMax'].forEach(id => {
    document.getElementById(id).textContent = '-';
  });
}

// Función para validar inputs
function validarInputs(datos) {
  const errores = [];
  if (!datos.distrito || !datos.zona) errores.push("Debe seleccionar distrito y zona");
  if (!datos.tipo) errores.push("Debe seleccionar el tipo de inmueble");
  if (datos.tipo !== "terreno" && datos.areaConstruida <= 0) errores.push("El área construida debe ser mayor a 0");
  if (datos.areaTerreno < 0) errores.push("El área de terreno no puede ser negativa");
  if (datos.tipo !== "terreno") {
    if (datos.dorms < 1) errores.push("Debe tener al menos 1 dormitorio");
    if (datos.baths < 1) errores.push("Debe tener al menos 1 baño");
  }
  if (datos.antig < 0) errores.push("La antigüedad no puede ser negativa");
  return errores;
}

// Función principal de cálculo
async function calcular() {
  try {
    limpiarResultados();
    const datos = {
      distrito: document.getElementById("distrito").value,
      zona: document.getElementById("zona").value,
      tipo: document.getElementById("tipo").value.toLowerCase(),
      areaConstruida: parseFloat(document.getElementById("areaConstruida").value) || 0,
      areaLibre: parseFloat(document.getElementById("areaLibre").value) || 0,
      areaTerreno: parseFloat(document.getElementById("areaTerreno").value) || 0,
      dorms: parseInt(document.getElementById("dorms").value) || 0,
      baths: parseInt(document.getElementById("baths").value) || 0,
      piso: parseInt(document.getElementById("piso").value) || 0,
      ascensor: document.getElementById("ascensor").value,
      antig: parseInt(document.getElementById("antiguedad").value) || 0,
      eficiencia: document.getElementById("eficiencia").value,
      estado: document.getElementById("estado").value,
      moneda: document.getElementById("moneda").value
    };

    const errores = validarInputs(datos);
    if (errores.length > 0) {
      mostrarError(errores.join('. '));
      return;
    }

    const precioM2 = DATA[datos.distrito]?.zones?.[datos.zona];
    if (!precioM2) throw new Error("No se encontró precio para la zona seleccionada");

    let factorAreaLibre;
    if (datos.tipo.includes("departamento")) {
      factorAreaLibre = FACTORES_TASACION.areaLibre.departamento;
    } else if (datos.tipo.includes("casa")) {
      factorAreaLibre = FACTORES_TASACION.areaLibre.casa;
    } else if (datos.tipo.includes("terreno")) {
      factorAreaLibre = FACTORES_TASACION.areaLibre.terreno;
    } else {
      factorAreaLibre = FACTORES_TASACION.areaLibre.departamento;
    }

    // Cálculo del área ponderada
    let areaPonderada;
    if (datos.tipo.includes("terreno")) {
      areaPonderada = datos.areaTerreno * factorAreaLibre;
    } else if (datos.tipo.includes("casa")) {
      areaPonderada = datos.areaConstruida + (datos.areaLibre * factorAreaLibre) + (datos.areaTerreno * 0.20);
    } else {
      areaPonderada = datos.areaConstruida + (datos.areaLibre * factorAreaLibre);
    }

    let valorBase = precioM2 * areaPonderada;

    valorBase = aplicarFactorAntiguedad(valorBase, datos.antig);

    if (datos.tipo !== "terreno") {
      valorBase = aplicarFactorDormitorios(valorBase, datos.dorms, datos.tipo);
      valorBase = aplicarFactorBanos(valorBase, datos.baths, datos.tipo);
    }

    if (datos.tipo.includes("departamento")) {
      valorBase = aplicarFactorPiso(valorBase, datos.piso, datos.ascensor === "con", datos.tipo);
    }

    valorBase = aplicarFactorEficienciaEnergetica(valorBase, datos.eficiencia);
    valorBase = aplicarFactorEstadoConservacion(valorBase, datos.estado);

    const tipoKey = datos.tipo.includes("departamento") ? "departamento" :
                    datos.tipo.includes("casa") ? "casa" :
                    datos.tipo.includes("terreno") ? "terreno" :
                    datos.tipo.includes("oficina") ? "oficina" :
                    datos.tipo.includes("local") ? "local" : "departamento";
    valorBase *= FACTORES_TASACION.tipoInmueble[tipoKey] || 1.0;

    const FX_PEN_USD = await obtenerTipoCambio();
    const factorConversion = datos.moneda === "$" ? (1 / FX_PEN_USD) : 1;

    const rangoVariacion = calcularRangoDinamico(datos);
    const valMin = valorBase * (1 - rangoVariacion);
    const valMax = valorBase * (1 + rangoVariacion);

    const formatearMoneda = (valor) => {
      return new Intl.NumberFormat("es-PE", {
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
      }).format(valor);
    };

    document.getElementById("summary").textContent =
      `Estimación para ${datos.tipo} en ${datos.zona}, ${datos.distrito}`;
    document.getElementById("summary").style.color = "#2c3e50";
    document.getElementById("valMin").textContent =
      `${datos.moneda} ${formatearMoneda(valMin * factorConversion)}`;
    document.getElementById("valMed").textContent =
      `${datos.moneda} ${formatearMoneda(valorBase * factorConversion)}`;
    document.getElementById("valMax").textContent =
      `${datos.moneda} ${formatearMoneda(valMax * factorConversion)}`;

  } catch (error) {
    console.error("Error en cálculo:", error);
    mostrarError(error.message || "Error en el cálculo de tasación");
  }
}

// Login
btnLogin.onclick = () => {
  const inputClave = document.getElementById('clave').value;
  if (inputClave === CLAVE_GLOBAL) {
    gate.style.display = 'none';
    app.style.display = 'block';
    gateMsg.textContent = "";
  } else {
    gateMsg.textContent = "Clave incorrecta 🚫";
  }
};

// Logout
logout.onclick = () => {
  app.style.display = 'none';
  gate.style.display = 'block';
  document.getElementById('clave').value = "";
};

// Ejecución principal
document.addEventListener("DOMContentLoaded", () => {
  const distritoSel = document.getElementById("distrito");
  const zonaSel = document.getElementById("zona");
  const tipoSel = document.getElementById("tipo");
  const form = document.getElementById("calc");

  // Cargar distritos
  Object.keys(DATA).forEach(distrito => {
    const option = document.createElement("option");
    option.value = distrito;
    option.textContent = distrito;
    distritoSel.appendChild(option);
  });

  // Cargar zonas según distrito
  distritoSel.addEventListener("change", () => {
    const distrito = distritoSel.value;
    zonaSel.innerHTML = '<option value="">Selecciona una zona</option>';
    if (DATA[distrito]?.zones) {
      Object.keys(DATA[distrito].zones).forEach(zone => {
        const option = document.createElement("option");
        option.value = zone;
        option.textContent = zone;
        zonaSel.appendChild(option);
      });
    }
  });

  // Ocultar campos según tipo de inmueble
  tipoSel.addEventListener("change", () => {
    const tipo = tipoSel.value.toLowerCase();
    const pisoGroup = document.getElementById("piso-group");
    const ascensorGroup = document.getElementById("ascensor-group");
    const dormsGroup = document.getElementById("dorms-group");
    const bathsGroup = document.getElementById("baths-group");
    const areaLibreGroup = document.getElementById("areaLibre-group");
    const areaTerrenoGroup = document.getElementById("areaTerreno-group");
    const areaConstruidaGroup = document.getElementById("areaConstruida-group");

    if (tipo.includes("departamento")) {
      pisoGroup.style.display = "block";
      ascensorGroup.style.display = "block";
      dormsGroup.style.display = "block";
      bathsGroup.style.display = "block";
      areaLibreGroup.style.display = "block";
      areaTerrenoGroup.style.display = "none";
      areaConstruidaGroup.style.display = "block";
    } else if (tipo.includes("casa")) {
      pisoGroup.style.display = "none";
      ascensorGroup.style.display = "none";
      dormsGroup.style.display = "block";
      bathsGroup.style.display = "block";
      areaLibreGroup.style.display = "block";
      areaTerrenoGroup.style.display = "block";
      areaConstruidaGroup.style.display = "block";
    } else if (tipo.includes("terreno")) {
      pisoGroup.style.display = "none";
      ascensorGroup.style.display = "none";
      dormsGroup.style.display = "none";
      bathsGroup.style.display = "none";
      areaLibreGroup.style.display = "none";
      areaTerrenoGroup.style.display = "block";
      areaConstruidaGroup.style.display = "none";
    }
  });

  // Calcular al enviar el formulario
  form.addEventListener("submit", e => {
    e.preventDefault();
    calcular();
  });
});





