import type { Eje } from '../types';

export const ejes: Eje[] = [
  {
    id: 'produccion-economia',
    numero: 1,
    titulo: 'Producción, agricultura y economía local',
    objetivoEstrategico:
      'Fortalecer la economía local mediante el mejoramiento progresivo de la producción agropecuaria, el acceso a infraestructura productiva, la organización de productores y la articulación con mercados, priorizando intervenciones técnica y económicamente viables.',
    icono: 'wheat',
    imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREsP1lS0ognB18uf5tMzySDpqrSylEQjRb27J95SVZxQ&s=10',
  },
  {
    id: 'vias-conectividad',
    numero: 2,
    titulo: 'Vías, conectividad y territorio',
    objetivoEstrategico:
      'Mejorar progresivamente la conectividad territorial, priorizando vías y accesos que generen mayor beneficio social y productivo, y promover un crecimiento urbano ordenado.',
    icono: 'route',
    imagen: 'https://drtcapurimac.gob.pe/portal/wp-content/uploads/2023/06/349180698_1219003895645311_9205365802058103134_n-1024x769.jpg',
  },
  {
    id: 'agua-saneamiento',
    numero: 3,
    titulo: 'Agua, saneamiento y ambiente',
    objetivoEstrategico:
      'Mejorar progresivamente la calidad, continuidad y sostenibilidad de los servicios de agua y saneamiento, promoviendo también la protección de las fuentes y la gestión ambiental local.',
    icono: 'droplets',
    imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToKidPBX13IsIQi7qPvHCrwD1UYn3Lc1_-awu7YbraHg&s=10',
  },
  {
    id: 'educacion-salud-juventud',
    numero: 4,
    titulo: 'Educación, salud, juventud y bienestar',
    objetivoEstrategico:
      'Promover oportunidades de desarrollo humano, especialmente para jóvenes, familias y población vulnerable, mediante acciones municipales y coordinación con las entidades competentes.',
    icono: 'graduation-cap',
    imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlRtiY1dpETM9lrV9Itb1ndvT7yI-T-iqfcnLiKsXm8g&s=10',
  },
  {
    id: 'seguridad-convivencia',
    numero: 5,
    titulo: 'Seguridad y convivencia ciudadana',
    objetivoEstrategico:
      'Fortalecer la prevención y la respuesta coordinada frente a la inseguridad ciudadana mediante iluminación, mantenimiento de infraestructura de seguridad, organización vecinal y articulación con la PNP.',
    icono: 'shield-check',
    imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRG80pnzuVyVvGNqkjoZ9Gzsx14T-cczP1fiXGh8cggXA&s=10',
  },
  {
    id: 'municipalidad-digital',
    numero: 6,
    titulo: 'Municipalidad eficiente, digital y transparente',
    objetivoEstrategico:
      'Modernizar la gestión municipal, reducir progresivamente los tiempos de atención y fortalecer la transparencia, participación y rendición de cuentas.',
    icono: 'landmark',
    imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRp6wg2Rl26cdIt2Ydh_wYWUkv5qQ7mA6CAjOzWuhRuCg&s=10',
  },
];

export const getEjeById = (id: string) => ejes.find((e) => e.id === id);
