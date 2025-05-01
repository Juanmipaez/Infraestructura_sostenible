const infrastructureData = [
    {
        id: 1,
        title: "Carretera Tradicional",
        description: "Una carretera convencional que atraviesa un bosque, creando un efecto barrera para la fauna local y fragmentando el ecosistema.",
        sustainableTitle: "Ecoducto y Paso de Fauna",
        sustainableDescription: "Un puente verde sobre la carretera que permite el paso seguro de animales, restaurando la conectividad del ecosistema y reduciendo atropellamientos.",
        impacts: [
            "Reducción del 85% en atropellamientos de fauna silvestre",
            "Restauración de rutas migratorias naturales",
            "Mayor seguridad vial para conductores",
            "Preservación de la diversidad genética de especies"
        ],
        biodiversityBoost: 15,
        emissionsReduction: 5,
        connectivityBoost: 25,
        habitatQuality: 12
    },
    {
        id: 2,
        title: "Intersección de Autopista",
        description: "Un nudo de autopistas con múltiples carriles que genera altos niveles de contaminación acústica, lumínica y atmosférica.",
        sustainableTitle: "Intersección Verde Inteligente",
        sustainableDescription: "Rediseño con tecnología de iluminación LED direccional, barreras acústicas vegetales, y sistemas inteligentes de tráfico que reducen emisiones y contaminación.",
        impacts: [
            "Reducción del 40% en emisiones de CO₂",
            "Disminución significativa de la contaminación acústica",
            "Mejor calidad del aire en áreas circundantes",
            "Menor efecto isla de calor urbano"
        ],
        biodiversityBoost: 10,
        emissionsReduction: 25,
        connectivityBoost: 5,
        habitatQuality: 15
    },
    {
        id: 3,
        title: "Canal de Drenaje Artificial",
        description: "Un canal de hormigón que transporta agua de lluvia rápidamente, pero impide el desarrollo de ecosistemas acuáticos y puede causar inundaciones aguas abajo.",
        sustainableTitle: "Corredor Fluvial Naturalizado",
        sustainableDescription: "Transformación del canal en un sistema naturalizado con meandros, vegetación ribereña y zonas de retención que favorecen la biodiversidad y mejoran la gestión hídrica.",
        impacts: [
            "Creación de hábitat para especies acuáticas y anfibias",
            "Mejor gestión de inundaciones y sequías",
            "Filtración natural de contaminantes del agua",
            "Nuevo espacio recreativo para la comunidad"
        ],
        biodiversityBoost: 20,
        emissionsReduction: 5,
        connectivityBoost: 15,
        habitatQuality: 25
    },
    {
        id: 4,
        title: "Línea Eléctrica de Alta Tensión",
        description: "Torres y cables de alta tensión que atraviesan áreas naturales, creando riesgos para aves y un impacto visual negativo.",
        sustainableTitle: "Corredor Ecológico de Energía",
        sustainableDescription: "Modificación de la línea con dispositivos anti-colisión para aves, gestión de vegetación bajo las líneas para crear hábitats de pradera, y reubicación estratégica de algunos tramos.",
        impacts: [
            "Reducción del 90% en colisiones de aves",
            "Creación de hábitats de pradera para polinizadores",
            "Mejor integración paisajística",
            "Protección de especies amenazadas"
        ],
        biodiversityBoost: 18,
        emissionsReduction: 0,
        connectivityBoost: 12,
        habitatQuality: 15
    },
    {
        id: 5,
        title: "Estacionamiento Convencional",
        description: "Una gran extensión de asfalto impermeable que genera escorrentía contaminada, contribuye al efecto isla de calor y carece de valor ecológico.",
        sustainableTitle: "Estacionamiento Verde Permeable",
        sustainableDescription: "Rediseño con pavimentos permeables, jardines de lluvia, árboles de sombra, y estaciones de carga para vehículos eléctricos alimentadas por paneles solares.",
        impacts: [
            "Gestión sostenible del 95% del agua de lluvia in situ",
            "Reducción de 5°C en la temperatura superficial",
            "Creación de microhábitats urbanos",
            "Generación de energía renovable local"
        ],
        biodiversityBoost: 12,
        emissionsReduction: 15,
        connectivityBoost: 8,
        habitatQuality: 13
    }
];

// Estado de la aplicación
let currentStats = {
    biodiversity: 20,
    emissions: 15,
    connectivity: 10,
    habitat: 25,
    transformations: 0
};

// Elementos del DOM
const hotspots = document.querySelectorAll('.hotspot');
const transformationOptions = document.getElementById('transformation-options');
const instructionText = document.getElementById('instruction-text');
const infrastructureTitle = document.getElementById('infrastructure-title');
const infoText = document.getElementById('info-text');
const impactList = document.getElementById('impact-list');
const transformBtn = document.getElementById('transform-btn');
const cancelBtn = document.getElementById('cancel-btn');
const completedMessage = document.getElementById('completed-message');

// Elementos de estadísticas
const biodiversityValue = document.getElementById('biodiversity-value');
const biodiversityProgress = document.getElementById('biodiversity-progress');
const emissionsValue = document.getElementById('emissions-value');
const emissionsProgress = document.getElementById('emissions-progress');
const connectivityValue = document.getElementById('connectivity-value');
const connectivityProgress = document.getElementById('connectivity-progress');
const habitatValue = document.getElementById('habitat-value');
const habitatProgress = document.getElementById('habitat-progress');
const transformationValue = document.getElementById('transformation-value');
const transformationProgress = document.getElementById('transformation-progress');

let selectedInfrastructure = null;

// Inicializar eventos
hotspots.forEach(hotspot => {
    hotspot.addEventListener('click', () => {
        const id = parseInt(hotspot.dataset.id);
        
        // Si ya está transformado, no hacer nada
        if (hotspot.classList.contains('transformed')) {
            return;
        }
        
        selectedInfrastructure = infrastructureData.find(item => item.id === id);
        showTransformationOptions(selectedInfrastructure);
    });
});

transformBtn.addEventListener('click', () => {
    if (selectedInfrastructure) {
        transformInfrastructure(selectedInfrastructure);
    }
});

cancelBtn.addEventListener('click', () => {
    hideTransformationOptions();
});

// Funciones
function showTransformationOptions(infrastructure) {
    infrastructureTitle.textContent = infrastructure.title;
    infoText.textContent = infrastructure.description;
    
    // Actualizar lista de impactos
    impactList.innerHTML = '';
    infrastructure.impacts.forEach(impact => {
        const li = document.createElement('li');
        li.textContent = impact;
        impactList.appendChild(li);
    });
    
    instructionText.style.display = 'none';
    transformationOptions.style.display = 'block';
}

function hideTransformationOptions() {
    transformationOptions.style.display = 'none';
    instructionText.style.display = 'block';
    selectedInfrastructure = null;
}

function transformInfrastructure(infrastructure) {
    // Encontrar el hotspot correspondiente
    const hotspot = document.querySelector(`.hotspot[data-id="${infrastructure.id}"]`);
    hotspot.classList.add('transformed');
    
    // Actualizar estadísticas
    updateStats(infrastructure);
    
    // Actualizar título y descripción
    infrastructureTitle.textContent = infrastructure.sustainableTitle;
    infoText.textContent = infrastructure.sustainableDescription;
    
    // Cambiar el botón de transformar
    transformBtn.textContent = '¡Transformación Completada!';
    transformBtn.disabled = true;
    
    // Ocultar opciones después de un tiempo
    setTimeout(() => {
        hideTransformationOptions();
        transformBtn.disabled = false;
        transformBtn.textContent = 'Transformar a Versión Sostenible';
        
        // Verificar si se han completado todas las transformaciones
        if (currentStats.transformations === 5) {
            completedMessage.style.display = 'block';
        }
    }, 2000);
}

function updateStats(infrastructure) {
    // Actualizar valores en el objeto de estado
    currentStats.biodiversity += infrastructure.biodiversityBoost;
    currentStats.emissions += infrastructure.emissionsReduction;
    currentStats.connectivity += infrastructure.connectivityBoost;
    currentStats.habitat += infrastructure.habitatQuality;
    currentStats.transformations += 1;
    
    // Actualizar la interfaz
    biodiversityValue.textContent = `${currentStats.biodiversity}%`;
    biodiversityProgress.style.width = `${currentStats.biodiversity}%`;
    
    emissionsValue.textContent = `${currentStats.emissions}%`;
    emissionsProgress.style.width = `${currentStats.emissions}%`;
    
    connectivityValue.textContent = `${currentStats.connectivity}%`;
    connectivityProgress.style.width = `${currentStats.connectivity}%`;
    
    habitatValue.textContent = `${currentStats.habitat}%`;
    habitatProgress.style.width = `${currentStats.habitat}%`;
    
    transformationValue.textContent = `${currentStats.transformations}/5`;
    transformationProgress.style.width = `${(currentStats.transformations / 5) * 100}%`;
}
