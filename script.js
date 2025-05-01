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
        habitatQuality: 12,
        beforeImage: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn-qa.britannica.com%2Fs%3A700x500%2F00%2F136000-050-7B0E1714%2FAutobahn-south-Nurnberg-Germany.jpg&f=1&nofb=1&ipt=53b998ebe5e37a2bfcc96701e9dc9a4acc404aab53f16f2b6ad6b0caf06e6089",
        afterImage: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.allpe.com%2Fwp-content%2Fuploads%2F2018%2F03%2Fpasos-de-fauna-infraestructuras.jpg&f=1&nofb=1&ipt=88245e8d27fbb095b97f9c2b92d18dc155111f31d7772655f122c8bc7109789c"
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
        habitatQuality: 15,
        beforeImage: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimage.freepik.com%2Ffoto-gratis%2Fvista-aerea-arriba-cruces-ocupados-carretera-dia-paso-elevado-autopista-interseccion-carretera-circunvalacion-exterior-oriental-bangkok_73503-1392.jpg&f=1&nofb=1&ipt=2f231fb57121758e9a8c455f1ceaf61d66dbcab8748e697fb3136c153ddd578e",
        afterImage: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2FTp9cXTApg1o%2Fmaxresdefault.jpg&f=1&nofb=1&ipt=7da763093ed9505e5a73279a2c1582950f60cdcc37e45329c0df1cd606331684"
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
        habitatQuality: 25,
        beforeImage: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.tecnoalimen.com%2Fmedia%2Fuploads%2Fnoticias%2Fwwacomultiline.jpg&f=1&nofb=1&ipt=95c7ce2ff6e0f3de27b0a4b6393ae950d2bf1854857b89cd6acae059491abcdd",
        afterImage: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.aco.co.uk%2Fmedia%2Fv3%2F0%2Fmicrosoftteams-image-j.jpg&f=1&nofb=1&ipt=c644cacfa2ee494d348ded69ee9c256b6f694c1fe693fb35fb8a3c7633aaf338"
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
        habitatQuality: 15,
        beforeImage: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fthumbs.dreamstime.com%2Fb%2Fview-high-voltage-electric-pole-transmission-power-to-sub-stations-159260386.jpg&f=1&nofb=1&ipt=fc62c528228929f56eee6e53e6068dee86f89e587955b301081f651088ab1479",
        afterImage: "ProteccionAvifauna.png"
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
        habitatQuality: 8,
        beforeImage: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flimitlesspavingandconcrete.com%2Fwp-content%2Fuploads%2F2019%2F07%2Fstandard-parking-spot.jpg&f=1&nofb=1&ipt=bb380b46aabd3ab2c73015d1177fdfc53c6e54ae809de8d0f21b264ba7fb6ae0",
        afterImage: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fassets-global.website-files.com%2F6202e1e4dcd0f68026e62e24%2F65cbbd842a9240ca0bd46435_shutterstock_221542885%25201%2520(3).png&f=1&nofb=1&ipt=62e845c45024a9f706276bbed0f9e1737c91e5c8eee2a937edbac6a78808f8c1"
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
const beforeImage = document.getElementById('before-image');
const afterImage = document.getElementById('after-image');

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

// Funciones
function showTransformationOptions(infrastructure) {
    infrastructureTitle.textContent = infrastructure.title;
    infoText.textContent = infrastructure.description;
    
    // Actualizar imágenes antes/después
    beforeImage.src = infrastructure.beforeImage;
    afterImage.src = infrastructure.afterImage;
    
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

// Asignar listeners una sola vez al cargar
hotspots.forEach(hotspot => {
    hotspot.addEventListener('click', () => {
        const id = parseInt(hotspot.dataset.id);
        selectedInfrastructure = infrastructureData.find(item => item.id === id);

        if (hotspot.classList.contains('transformed')) {
            // Mostrar info transformada
            infrastructureTitle.textContent = selectedInfrastructure.sustainableTitle;
            infoText.textContent = selectedInfrastructure.sustainableDescription;

            beforeImage.src = selectedInfrastructure.beforeImage;
            afterImage.src = selectedInfrastructure.afterImage;

            impactList.innerHTML = '';
            selectedInfrastructure.impacts.forEach(impact => {
                const li = document.createElement('li');
                li.textContent = impact;
                impactList.appendChild(li);
            });

            instructionText.style.display = 'none';
            transformationOptions.style.display = 'block';
            transformBtn.disabled = true;
            transformBtn.textContent = '¡Ya Transformado!';
        } else {
            // Mostrar opciones para transformar
            showTransformationOptions(selectedInfrastructure);
            transformBtn.disabled = false;
            transformBtn.textContent = 'Transformar a Versión Sostenible';
        }
    });
});

function transformInfrastructure(infrastructure) {
    const hotspot = document.querySelector(`.hotspot[data-id="${infrastructure.id}"]`);
    hotspot.classList.add('transformed');

    updateStats(infrastructure);

    infrastructureTitle.textContent = infrastructure.sustainableTitle;
    infoText.textContent = infrastructure.sustainableDescription;

    transformBtn.textContent = '¡Transformación Completada!';
    transformBtn.disabled = true;

    if (currentStats.transformations === 5) {
        completedMessage.style.display = 'block';
    }
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