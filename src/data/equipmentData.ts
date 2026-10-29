import { EquipmentItem } from '../types';

export const EQUIPMENT_FLEET_DATA: EquipmentItem[] = [
  {
    id: 'excavator-cat-336',
    name: 'Caterpillar 336D / 349D Heavy Hydraulic Excavator',
    category: 'Heavy Earthmoving',
    specs: {
      'Operating Weight': '36,500 kg - 49,000 kg',
      'Engine Power': '200 kW / 268 hp',
      'Bucket Capacity': '1.9 m³ - 2.5 m³ HD Rock Bucket',
      'Max Digging Depth': '7.52 meters',
      'Max Reach': '10.8 meters'
    },
    capacity: '36 - 49 Ton Class',
    applications: ['Deep foundation excavation', 'Canal dredging assistance', 'Rock breaking', 'Heavy site clearing', 'Culvert trenching'],
    availableForHire: true,
    imageUrl: '/assets/slides/5-2.png'
  },
  {
    id: 'swamp-buggy-amphibious',
    name: 'Amphibious Swamp Buggy Excavator (Pontoon Undercarriage)',
    category: 'Heavy Earthmoving',
    specs: {
      'Undercarriage': 'Dual multi-chambered marine-grade steel pontoons',
      'Track Drive': 'Hydraulic heavy-duty roller chain with welded cleats',
      'Ground Pressure': '0.14 kg/cm² (Ultra-low footprint)',
      'Reach Boom': '14.5m Extended Long-Reach Boom',
      'Water Depth Capability': 'Fully buoyant in up to 3m water with spud stabilizers'
    },
    capacity: '20 - 30 Ton Pontoon Class',
    applications: ['Swamp pipeline right-of-way clearing', 'Mangrove canal opening', 'Tailings pond dredging', 'Riverbank profiling'],
    availableForHire: true,
    imageUrl: '/assets/slides/11-1.png'
  },
  {
    id: 'spud-barge-1000t',
    name: '1000-Ton Heavy Deck Spud Cargo Barge',
    category: 'Marine Vessels',
    specs: {
      'Length Overall (LOA)': '54.8 meters (180 ft)',
      'Beam': '15.2 meters (50 ft)',
      'Depth': '3.2 meters (10.5 ft)',
      'Deck Load Capacity': '10 Ton/m² Heavy Structural Plating',
      'Spud System': 'Dual hydraulic drop spuds (24m length) for precision station-keeping'
    },
    capacity: '1,000 Metric Tons Deadweight',
    applications: ['Heavy machinery river transport', 'Piling rig floating work platform', 'Offshore pipe storage', 'Bulk aggregate water haulage'],
    availableForHire: true,
    imageUrl: '/assets/slides/13-1.png'
  },
  {
    id: 'twin-screw-tugboat',
    name: 'Twin-Screw Ocean & Riverine Towage Tugboat',
    category: 'Marine Vessels',
    specs: {
      'Bollard Pull': '25 - 35 Tons Continuous',
      'Main Propulsion': 'Twin Caterpillar 3512B Marine Diesels (2,400 BHP Total)',
      'Draft (Loaded)': '2.6 meters (Optimized for shallow river navigation)',
      'Navigation & Comms': 'IMO Class-A AIS, GPS Radar, Furuno Echo Sounder, VHF/HF',
      'Auxiliary': 'Twin 50kVA Perkins Marine Generators'
    },
    capacity: '2,400 BHP Towing Power',
    applications: ['Heavy barge towing across Niger Delta rivers', 'Vessel berthing assistance', 'Offshore rig supply escort', 'Anchor handling'],
    availableForHire: true,
    imageUrl: '/assets/slides/1-2.png'
  },
  {
    id: 'cutter-suction-dredger-18',
    name: '18-Inch Hydraulic Cutter Suction Dredger (CSD)',
    category: 'Dredging Equipment',
    specs: {
      'Suction Diameter': '450 mm (18 inches)',
      'Discharge Diameter': '450 mm (18 inches)',
      'Dredging Depth': '14.0 meters below waterline',
      'Pumping Distance': 'Up to 2,500m without booster station',
      'Solid Production Rate': '400 - 650 m³/hour depending on sediment density'
    },
    capacity: '650 m³/hour Slurry Output',
    applications: ['Channel deepening', 'Swamp reclamation sand-fill', 'Harbor basin maintenance', 'River sand commercial mining'],
    availableForHire: true,
    imageUrl: '/assets/slides/13-1.png'
  },
  {
    id: 'cat-d7-d8-bulldozer',
    name: 'Caterpillar D7R / D8T Heavy Track-Type Tractor (Bulldozer)',
    category: 'Heavy Earthmoving',
    specs: {
      'Flywheel Power': '179 kW / 240 hp (D7R) to 231 kW / 310 hp (D8T)',
      'Operating Weight': '26,000 kg - 39,000 kg',
      'Blade Type': 'Semi-Universal (SU) High-Capacity Blade',
      'Ripper': 'Multi-shank hydraulic parallelogram ripper',
      'Ground Clearance': '450 mm'
    },
    capacity: '26 - 39 Ton Class',
    applications: ['Heavy bulk earthmoving', 'Bush clearing and grubbing', 'Road alignment cuts', 'Reclamation sand spreading and leveling'],
    availableForHire: true,
    imageUrl: '/assets/slides/5-2.png'
  },
  {
    id: 'mobile-telescopic-crane',
    name: '50-Ton & 80-Ton Telescopic Rough-Terrain Mobile Crane',
    category: 'Lifting & Haulage',
    specs: {
      'Rated Lift Capacity': '50 MT @ 3m radius / 80 MT Class',
      'Main Boom Length': '11.2m - 42.0m fully powered telescopic boom',
      'Drive & Steer': '4x4x4 Rough terrain all-wheel drive with crab steering',
      'Safety System': 'Electronic Load Moment Indicator (LMI) with anti-two-block lockout',
      'Outriggers': 'Four-point hydraulic H-type outriggers with ground load pads'
    },
    capacity: '50 to 80 Metric Tons',
    applications: ['Precast bridge girder erection', 'Machinery loading at waterfront jetties', 'Steel structure erection', 'Plant turnaround lifts'],
    availableForHire: true,
    imageUrl: '/assets/slides/14-1.png'
  },
  {
    id: 'heavy-lowbed-transporter',
    name: 'Multi-Axle Heavy Duty Lowbed Transport Trailer (60-Ton)',
    category: 'Lifting & Haulage',
    specs: {
      'Payload Capacity': '60,000 kg',
      'Bed Dimensions': '9.5m well deck length x 3.0m width (with outriggers to 3.4m)',
      'Tractor Unit': '6x4 Heavy Haul Mack / Mercedes Titan 440 hp',
      'Suspension': 'Heavy mechanical spring or hydraulic leveling suspension',
      'Loading Ramps': 'Hydraulic spring-assisted heavy crawler loading ramps'
    },
    capacity: '60 Ton Payload Capacity',
    applications: ['Transporting tracked excavators and bulldozers', 'Heavy vessel engine haulage', 'Long-distance machinery relocation across Nigeria'],
    availableForHire: true,
    imageUrl: '/assets/slides/5-2.png'
  }
];
