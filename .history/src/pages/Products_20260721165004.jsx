import React, { useEffect, useRef, useState } from "react";
import { 
  ArrowRight, 
  CheckCircle2, 
  Home, 
  Building2, 
  Factory, 
  Radio,
  Wrench,
  ShieldCheck,
  Phone,
  Mail,
  Search,
  Gauge,
  Headphones,
  Award,
  Zap,
  Globe,
  Package,
  Antenna,
  X,
  Cpu,
  Signal,
  Ruler,
  Thermometer,
  Weight,
  Cable,
  Router,
  Plug,
  Satellite,
} from "lucide-react";
import "./Products.css";

import productsHeroImg from "../assets/hero1.png";

import booster23dbm from "../assets/23-dbm-booster.png";
import booster25dbm from "../assets/25-dbm-booster.png";
import amplifier27dbm from "../assets/27-dbm-amplifier-booster.png";

import omniAntenna from "../assets/omni-directional-antenna.png";
import logPeriodicAntenna from "../assets/log-periodic-antenna.png";

import lmr400 from "../assets/lmr-400-cable.png";
import lmr300 from "../assets/lmr-300-cable.png";
import lmr200 from "../assets/lmr-200-cable.png";

import nMaleCrimp from "../assets/n-male-crimp.png";
import nFemaleCrimp from "../assets/n-female-crimp.png";
import nMaleAdapter from "../assets/n-male-adapter.png";

import blueSingle900 from "../assets/blue-single-900.png";
import blueSingle1800 from "../assets/blue-single-1800.png";
import blueSingle2100 from "../assets/blue-single-2100.png";
import blueDual9001800 from "../assets/blue-dual-900-1800.png";
import blueDual9002100 from "../assets/blue-dual-900-2100.png";
import blueDual18002100 from "../assets/blue-dual-1800-2100.png";
import blueTri90018002100 from "../assets/blue-tri-900-1800-2100.png";
import blueTri180021002300 from "../assets/blue-tri-1800-2100-2300.png";
import blueTri85018002100 from "../assets/blue-tri-850-1800-2100.png";

import intratekSingle900 from "../assets/intratek-single-900.png";
import intratekSingle1800 from "../assets/intratek-single-1800.png";
import intratekSingle2100 from "../assets/intratek-single-2100.png";
import intratekDual9001800 from "../assets/intratek-dual-900-1800.png";
import intratekDual9002100 from "../assets/intratek-dual-900-2100.png";
import intratekTri90018002100 from "../assets/intratek-tri-900-1800-2100.png";
import intratekTri180021002300 from "../assets/intratek-tri-1800-2100-2300.png";
import intratekTri85018002100 from "../assets/intratek-tri-850-1800-2100.png";

// The first five catalogue entries reuse existing booster images because
// the former iBoostSlimline, smartLcdAngle, tripleBandCommercial,
// adjustableGain and industrialHighPower files are not present in src/assets.


const sharedBoosterDetails = {
  features: [
    "Improves indoor call reliability",
    "Supports stronger mobile-data reception",
    "External donor and service antennas",
    "50 Ohm professional RF system",
    "Passive heat-dissipating enclosure",
    "Professional installation recommended",
  ],
};

const makeBoosterProduct = ({
  id,
  title,
  subtitle,
  category,
  image,
  frequency,
  badge = "Signal Booster",
  accentColor = "#0755A3",
  bgLight = "#E8F1FA",
  coverage = "Site Dependent",
  brand = "Future Max",
}) => ({
  id,
  category,
  icon: <Signal size={28} strokeWidth={1.5} />,
  title,
  subtitle,
  description:
    `${title} is designed to improve weak indoor cellular reception on ${frequency}. ` +
    "It is suitable for homes, offices, shops and commercial spaces when used with a compatible outdoor antenna, indoor antenna and low-loss coaxial cable.",
  features: sharedBoosterDetails.features,
  specs: [
    { label: "Frequency", value: frequency },
    { label: "Coverage", value: coverage },
    { label: "Impedance", value: "50 Ohm" },
    { label: "Install", value: "Indoor" },
  ],
  detailedSpecs: [
    { icon: <Award size={16} />, label: "Brand / Range", value: brand },
    { icon: <Radio size={16} />, label: "Frequency Bands", value: frequency },
    { icon: <Signal size={16} />, label: "System Impedance", value: "50 Ohm" },
    { icon: <Cpu size={16} />, label: "Application", value: "Indoor cellular signal improvement" },
    { icon: <Globe size={16} />, label: "Network Support", value: "Voice and mobile data" },
    { icon: <Thermometer size={16} />, label: "Cooling", value: "Passive heat dissipation" },
    { icon: <Wrench size={16} />, label: "Installation", value: "Fixed indoor installation" },
    { icon: <ShieldCheck size={16} />, label: "Planning", value: "RF survey recommended" },
  ],
  image,
  accentColor,
  bgLight,
  badge,
});

const makeAccessoryProduct = ({
  id,
  title,
  subtitle,
  category,
  image,
  badge,
  accentColor,
  bgLight,
  description,
  features,
  specs,
  detailedSpecs,
  icon,
}) => ({
  id,
  category,
  icon,
  title,
  subtitle,
  description,
  features,
  specs,
  detailedSpecs,
  image,
  accentColor,
  bgLight,
  badge,
});

const prdProducts = [
  {
    id: "01",
    category: "Smart & Commercial Boosters",
    icon: <Signal size={28} strokeWidth={1.5} />,
    title: "23 dBm Booster",
    subtitle: "Compact Signal Booster",
    description:
      "A compact 23 dBm mobile signal booster for improving indoor voice and mobile-data reception in homes, offices and small commercial spaces.",
    features: [
      "23 dBm output power",
      "Compact wall-mount design",
      "Front monitoring display",
      "External antenna ports",
      "Passive cooling",
      "Indoor fixed installation",
    ],
    specs: [
      { label: "Output", value: "23 dBm" },
      { label: "Profile", value: "25 mm" },
      { label: "System", value: "50 Ohm" },
      { label: "Use", value: "Indoor" },
    ],
    detailedSpecs: [
      { icon: <Zap size={16} />, label: "Output Power", value: "23 dBm" },
      { icon: <Ruler size={16} />, label: "Dimensions", value: "158 × 190 × 25 mm" },
      { icon: <Gauge size={16} />, label: "Monitoring", value: "Front status display" },
      { icon: <Plug size={16} />, label: "RF Interfaces", value: "External antenna connectors" },
      { icon: <Thermometer size={16} />, label: "Cooling", value: "Passive heat dissipation" },
      { icon: <Home size={16} />, label: "Installation", value: "Indoor fixed installation" },
    ],
    image: booster23dbm,
    accentColor: "#0755A3",
    bgLight: "#E8F1FA",
    badge: "23 dBm",
  },
  {
    id: "02",
    category: "Smart & Commercial Boosters",
    icon: <Gauge size={28} strokeWidth={1.5} />,
    title: "25 dBm Booster",
    subtitle: "LCD Signal Booster",
    description:
      "A professional 25 dBm mobile signal booster with an LCD status display, separate BS and MS antenna ports and automatic signal-control functions.",
    features: [
      "25 dBm output power",
      "LCD status monitoring",
      "BS and MS antenna ports",
      "AGC support",
      "N-type RF connectors",
      "Passive finned housing",
    ],
    specs: [
      { label: "Output", value: "25 dBm" },
      { label: "Display", value: "LCD" },
      { label: "Ports", value: "BS / MS" },
      { label: "Control", value: "AGC" },
    ],
    detailedSpecs: [
      { icon: <Zap size={16} />, label: "Output Power", value: "25 dBm" },
      { icon: <Gauge size={16} />, label: "Display", value: "LCD status display" },
      { icon: <Antenna size={16} />, label: "Outdoor Port", value: "BS antenna port" },
      { icon: <Radio size={16} />, label: "Indoor Port", value: "MS antenna port" },
      { icon: <Cpu size={16} />, label: "Automatic Control", value: "AGC and oscillation monitoring" },
      { icon: <Thermometer size={16} />, label: "Cooling", value: "Passive finned enclosure" },
    ],
    image: booster25dbm,
    accentColor: "#0A6FD4",
    bgLight: "#F0F7FF",
    badge: "25 dBm",
  },
  {
    id: "03",
    category: "Smart & Commercial Boosters",
    icon: <Factory size={28} strokeWidth={1.5} />,
    title: "27 dBm Amplifier (Booster)",
    subtitle: "High-Power RF Amplifier",
    description:
      "A high-power 27 dBm RF amplifier for commercial and enterprise indoor signal-distribution systems, with independent band controls and a heavy-duty heat-sink enclosure.",
    features: [
      "27 dBm output power",
      "High-power RF amplification",
      "Independent band controls",
      "Commercial-grade housing",
      "Large passive heat sink",
      "Professional installation",
    ],
    specs: [
      { label: "Output", value: "27 dBm" },
      { label: "Control", value: "Manual" },
      { label: "Cooling", value: "Passive" },
      { label: "Use", value: "Enterprise" },
    ],
    detailedSpecs: [
      { icon: <Zap size={16} />, label: "Output Power", value: "27 dBm" },
      { icon: <Gauge size={16} />, label: "Band Control", value: "Independent adjustment controls" },
      { icon: <ShieldCheck size={16} />, label: "Housing", value: "Heavy-duty aluminium enclosure" },
      { icon: <Thermometer size={16} />, label: "Cooling", value: "Large passive heat sink" },
      { icon: <Building2 size={16} />, label: "Application", value: "Commercial and enterprise coverage" },
      { icon: <Wrench size={16} />, label: "Installation", value: "Professional fixed installation" },
    ],
    image: amplifier27dbm,
    accentColor: "#19AB3F",
    bgLight: "#E8F7EA",
    badge: "27 dBm",
  },
  {
    id: "04",
    category: "Smart & Commercial Boosters",
    icon: <Home size={28} strokeWidth={1.5} />,
    title: "i-Boost Slimline Smart Signal Booster",
    subtitle: "Compact Signal Booster",
    description:
      "A slim wall-mountable cellular signal booster for homes, apartments, shops and small offices, with a front monitoring display and low-profile enclosure.",
    features: [
      "Slim 25 mm enclosure",
      "Front status display",
      "Wall-mountable design",
      "External antenna connections",
      "Passive cooling",
      "Indoor fixed installation",
    ],
    specs: [
      { label: "Profile", value: "25 mm" },
      { label: "Display", value: "Front LCD" },
      { label: "Mounting", value: "Wall" },
      { label: "Use", value: "Indoor" },
    ],
    detailedSpecs: [
      { icon: <Ruler size={16} />, label: "Dimensions", value: "158 × 190 × 25 mm" },
      { icon: <Gauge size={16} />, label: "Display", value: "Front status monitoring display" },
      { icon: <Plug size={16} />, label: "RF Interfaces", value: "Two external antenna connectors" },
      { icon: <Wrench size={16} />, label: "Mounting", value: "Four integrated wall-mounting points" },
      { icon: <Thermometer size={16} />, label: "Housing", value: "Heat-dissipating enclosure" },
      { icon: <Home size={16} />, label: "Installation", value: "Indoor fixed installation" },
    ],
    image: blueSingle900,
    accentColor: "#0755A3",
    bgLight: "#E8F1FA",
    badge: "Featured",
  },
  {
    id: "05",
    category: "Smart & Commercial Boosters",
    icon: <Gauge size={28} strokeWidth={1.5} />,
    title: "Smart Dynamic LCD Signal Booster",
    subtitle: "Smart Multi-Band Repeater",
    description:
      "An intelligent cellular repeater with dynamic LCD monitoring, separate BS and MS antenna ports, automatic control functions and passive cooling.",
    features: [
      "Dynamic LCD monitoring",
      "BS and MS antenna ports",
      "AGC support",
      "Oscillation monitoring",
      "N-type RF connectors",
      "Passive finned chassis",
    ],
    specs: [
      { label: "Display", value: "Dynamic LCD" },
      { label: "Ports", value: "BS / MS" },
      { label: "Control", value: "AGC" },
      { label: "Cooling", value: "Passive" },
    ],
    detailedSpecs: [
      { icon: <Gauge size={16} />, label: "Display", value: "Dynamic LCD status display" },
      { icon: <Antenna size={16} />, label: "Outdoor Port", value: "BS antenna port" },
      { icon: <Radio size={16} />, label: "Indoor Port", value: "MS antenna port" },
      { icon: <Plug size={16} />, label: "Connector", value: "N-type RF connector" },
      { icon: <Cpu size={16} />, label: "Automatic Functions", value: "AGC and oscillation monitoring" },
      { icon: <Ruler size={16} />, label: "Approximate Size", value: "175 × 135 × 35 mm" },
    ],
    image: blueDual9001800,
    accentColor: "#0A6FD4",
    bgLight: "#F0F7FF",
    badge: "Smart Control",
  },
  {
    id: "06",
    category: "Smart & Commercial Boosters",
    icon: <Building2 size={28} strokeWidth={1.5} />,
    title: "Triple-Band LCD Commercial Repeater",
    subtitle: "Commercial Signal Repeater",
    description:
      "A commercial triple-band repeater with front LCD monitoring, operating-status LEDs, separate antenna interfaces and a heavy-duty thermal enclosure.",
    features: [
      "Three-band configuration",
      "Front LCD display",
      "Status LEDs",
      "BTS antenna connector",
      "Indoor antenna connector",
      "Commercial-grade housing",
    ],
    specs: [
      { label: "Bands", value: "Triple" },
      { label: "Display", value: "LCD" },
      { label: "Housing", value: "Metal" },
      { label: "Use", value: "Commercial" },
    ],
    detailedSpecs: [
      { icon: <Radio size={16} />, label: "Band Configuration", value: "Three-band configuration" },
      { icon: <Gauge size={16} />, label: "Display", value: "Front LCD signal display" },
      { icon: <Signal size={16} />, label: "Indicators", value: "Operating-status LEDs" },
      { icon: <Antenna size={16} />, label: "Outdoor Interface", value: "BTS antenna connector" },
      { icon: <Plug size={16} />, label: "Indoor Interface", value: "Indoor antenna connector" },
      { icon: <Thermometer size={16} />, label: "Housing", value: "Ribbed heat-sink enclosure" },
    ],
    image: blueTri90018002100,
    accentColor: "#19AB3F",
    bgLight: "#E8F7EA",
    badge: "Commercial",
  },
  {
    id: "07",
    category: "Smart & Commercial Boosters",
    icon: <Wrench size={28} strokeWidth={1.5} />,
    title: "Adjustable-Gain Multi-Band Repeater",
    subtitle: "Professional RF Repeater",
    description:
      "A professional multi-band amplifier with independent front-panel adjustment controls for balancing different bands in complex indoor environments.",
    features: [
      "Independent band control",
      "Manual gain adjustment",
      "Heavy-duty aluminium housing",
      "Fanless cooling",
      "Commercial installation",
      "Multi-antenna compatible",
    ],
    specs: [
      { label: "Control", value: "Manual" },
      { label: "Bands", value: "Multi" },
      { label: "Cooling", value: "Fanless" },
      { label: "Use", value: "Pro RF" },
    ],
    detailedSpecs: [
      { icon: <Gauge size={16} />, label: "Band Control", value: "Independent adjustment by band" },
      { icon: <Wrench size={16} />, label: "Adjustment", value: "Front-panel controls" },
      { icon: <ShieldCheck size={16} />, label: "Housing", value: "Heavy-duty aluminium heat sink" },
      { icon: <Thermometer size={16} />, label: "Cooling", value: "Fanless passive thermal management" },
      { icon: <Building2 size={16} />, label: "Application", value: "Professional and commercial" },
      { icon: <Radio size={16} />, label: "Installation", value: "Fixed indoor installation" },
    ],
    image: intratekDual9001800,
    accentColor: "#7C3AED",
    bgLight: "#F5F3FF",
    badge: "Professional",
  },
  {
    id: "08",
    category: "Smart & Commercial Boosters",
    icon: <Factory size={28} strokeWidth={1.5} />,
    title: "Industrial High-Power Multi-Band Repeater",
    subtitle: "Enterprise Signal Distribution",
    description:
      "A high-capacity multi-band repeater for enterprise and industrial signal-distribution projects with multiple controlled sections and a large passive heat sink.",
    features: [
      "High-power multi-band system",
      "Independent control sections",
      "Enterprise fixed installation",
      "Multi-antenna layouts",
      "Industrial enclosure",
      "Large passive heat sink",
    ],
    specs: [
      { label: "System", value: "High Power" },
      { label: "Bands", value: "Multi" },
      { label: "Cooling", value: "Passive" },
      { label: "Use", value: "Enterprise" },
    ],
    detailedSpecs: [
      { icon: <Zap size={16} />, label: "System Type", value: "High-power multi-band repeater" },
      { icon: <Radio size={16} />, label: "Band Sections", value: "Multiple independently controlled sections" },
      { icon: <Gauge size={16} />, label: "Gain Control", value: "Manual adjustment banks" },
      { icon: <Thermometer size={16} />, label: "Cooling", value: "Large passive heat-sink enclosure" },
      { icon: <Factory size={16} />, label: "Installation", value: "Enterprise fixed installation" },
      { icon: <Satellite size={16} />, label: "Distribution", value: "Engineered multi-antenna layouts" },
    ],
    image: intratekTri90018002100,
    accentColor: "#0F766E",
    bgLight: "#F0FDFA",
    badge: "Enterprise",
  },

  makeAccessoryProduct({
    id: "09",
    title: "Omni-Directional Indoor Antenna",
    subtitle: "Indoor Ceiling Antenna",
    category: "Antennas",
    image: omniAntenna,
    badge: "Indoor",
    accentColor: "#EA580C",
    bgLight: "#FFF7ED",
    icon: <Antenna size={28} strokeWidth={1.5} />,
    description: "A ceiling-style omni-directional antenna for distributing boosted cellular signal evenly across an indoor area.",
    features: ["698–960 MHz", "1710–2700 MHz", "Omni pattern", "Approx. 5 dBi gain", "50 Ohm", "N Female connector"],
    specs: [
      { label: "Range", value: "698–2700" },
      { label: "Gain", value: "5 dBi" },
      { label: "Pattern", value: "Omni" },
      { label: "Port", value: "N Female" },
    ],
    detailedSpecs: [
      { icon: <Radio size={16} />, label: "Frequency Range", value: "698–960 / 1710–2700 MHz" },
      { icon: <Satellite size={16} />, label: "Radiation Pattern", value: "Omni-directional" },
      { icon: <Signal size={16} />, label: "Typical Gain", value: "Approximately 5 dBi" },
      { icon: <Gauge size={16} />, label: "Impedance", value: "50 Ohm" },
      { icon: <Antenna size={16} />, label: "Polarization", value: "Vertical" },
      { icon: <Plug size={16} />, label: "Connector", value: "N Female" },
    ],
  }),
  makeAccessoryProduct({
    id: "10",
    title: "Log Periodic Directional Antenna",
    subtitle: "Outdoor Directional Antenna",
    category: "Antennas",
    image: logPeriodicAntenna,
    badge: "Outdoor",
    accentColor: "#D97706",
    bgLight: "#FFFBEB",
    icon: <Satellite size={28} strokeWidth={1.5} />,
    description: "A wideband outdoor directional antenna for receiving signal from a selected mobile-tower direction.",
    features: ["698–960 MHz", "1710–2700 MHz", "Directional pattern", "9–10 dBi gain", "50 Ohm", "N Female connector"],
    specs: [
      { label: "Range", value: "698–2700" },
      { label: "Gain", value: "9–10 dBi" },
      { label: "Pattern", value: "Directional" },
      { label: "Port", value: "N Female" },
    ],
    detailedSpecs: [
      { icon: <Radio size={16} />, label: "Frequency Range", value: "698–960 / 1710–2700 MHz" },
      { icon: <Satellite size={16} />, label: "Radiation Pattern", value: "Directional" },
      { icon: <Signal size={16} />, label: "Typical Gain", value: "Approximately 9–10 dBi" },
      { icon: <Gauge size={16} />, label: "Impedance", value: "50 Ohm" },
      { icon: <Antenna size={16} />, label: "Mounting", value: "Pole or mast installation" },
      { icon: <Plug size={16} />, label: "Connector", value: "N Female" },
    ],
  }),

  makeAccessoryProduct({
    id: "11",
    title: "LMR 400 Coaxial Cable",
    subtitle: "Low-Loss RF Cable",
    category: "Cables",
    image: lmr400,
    badge: "Lowest Loss",
    accentColor: "#0891B2",
    bgLight: "#ECFEFF",
    icon: <Cable size={28} strokeWidth={1.5} />,
    description: "A low-loss 50-Ohm coaxial feeder cable for longer booster and antenna cable runs.",
    features: ["50 Ohm impedance", "Longer cable routes", "Low RF loss", "N-type compatible", "Indoor or protected outdoor use", "Professional feeder cable"],
    specs: [
      { label: "Type", value: "LMR 400" },
      { label: "Impedance", value: "50 Ohm" },
      { label: "Loss", value: "Low" },
      { label: "Run", value: "Long" },
    ],
    detailedSpecs: [
      { icon: <Cable size={16} />, label: "Cable Type", value: "LMR 400 equivalent" },
      { icon: <Signal size={16} />, label: "Impedance", value: "50 Ohm" },
      { icon: <Ruler size={16} />, label: "Recommended Use", value: "Longer RF feeder routes" },
      { icon: <Gauge size={16} />, label: "Loss Level", value: "Lower than LMR 300 and LMR 200" },
      { icon: <Plug size={16} />, label: "Compatibility", value: "Suitable N-type crimp connectors" },
      { icon: <ShieldCheck size={16} />, label: "Installation", value: "Fixed low-loss feeder cable" },
    ],
  }),
  makeAccessoryProduct({
    id: "12",
    title: "LMR 300 Coaxial Cable",
    subtitle: "Flexible RF Cable",
    category: "Cables",
    image: lmr300,
    badge: "Balanced",
    accentColor: "#0284C7",
    bgLight: "#F0F9FF",
    icon: <Cable size={28} strokeWidth={1.5} />,
    description: "A flexible 50-Ohm coaxial cable balancing manageable diameter with moderate signal loss.",
    features: ["50 Ohm impedance", "Flexible routing", "Medium cable runs", "Indoor antenna connections", "Booster compatible", "Fixed installation"],
    specs: [
      { label: "Type", value: "LMR 300" },
      { label: "Impedance", value: "50 Ohm" },
      { label: "Loss", value: "Medium" },
      { label: "Flex", value: "Good" },
    ],
    detailedSpecs: [
      { icon: <Cable size={16} />, label: "Cable Type", value: "LMR 300 equivalent" },
      { icon: <Signal size={16} />, label: "Impedance", value: "50 Ohm" },
      { icon: <Ruler size={16} />, label: "Recommended Use", value: "Short-to-medium RF runs" },
      { icon: <Gauge size={16} />, label: "Loss Level", value: "Medium" },
      { icon: <Wrench size={16} />, label: "Flexibility", value: "More flexible than LMR 400" },
      { icon: <Home size={16} />, label: "Installation", value: "Indoor fixed cable routing" },
    ],
  }),
  makeAccessoryProduct({
    id: "13",
    title: "LMR 200 Coaxial Cable",
    subtitle: "Compact RF Cable",
    category: "Cables",
    image: lmr200,
    badge: "Flexible",
    accentColor: "#0369A1",
    bgLight: "#F0F9FF",
    icon: <Cable size={28} strokeWidth={1.5} />,
    description: "A compact and flexible coaxial cable for short RF interconnections and space-limited installations.",
    features: ["50 Ohm impedance", "Compact diameter", "Short RF runs", "Easy routing", "Patch-lead use", "Booster compatible"],
    specs: [
      { label: "Type", value: "LMR 200" },
      { label: "Impedance", value: "50 Ohm" },
      { label: "Loss", value: "Higher" },
      { label: "Flex", value: "High" },
    ],
    detailedSpecs: [
      { icon: <Cable size={16} />, label: "Cable Type", value: "LMR 200 equivalent" },
      { icon: <Signal size={16} />, label: "Impedance", value: "50 Ohm" },
      { icon: <Ruler size={16} />, label: "Recommended Use", value: "Short indoor RF connections" },
      { icon: <Gauge size={16} />, label: "Loss Level", value: "Higher than LMR 300 and LMR 400" },
      { icon: <Wrench size={16} />, label: "Flexibility", value: "High" },
      { icon: <Plug size={16} />, label: "Installation", value: "Short flexible cable runs" },
    ],
  }),

  makeAccessoryProduct({
    id: "14",
    title: "N Male Crimp Connector",
    subtitle: "RF Cable Connector",
    category: "Connectors",
    image: nMaleCrimp,
    badge: "N Type",
    accentColor: "#64748B",
    bgLight: "#F8FAFC",
    icon: <Plug size={28} strokeWidth={1.5} />,
    description: "A crimp-style N male connector for terminating compatible 50-Ohm coaxial cable.",
    features: ["N-type family", "Male interface", "Crimp termination", "50 Ohm", "Cable-specific sizing", "Field installation"],
    specs: [
      { label: "Family", value: "N Type" },
      { label: "Gender", value: "Male" },
      { label: "Fit", value: "Crimp" },
      { label: "Impedance", value: "50 Ohm" },
    ],
    detailedSpecs: [
      { icon: <Plug size={16} />, label: "Connector Family", value: "N Type" },
      { icon: <Router size={16} />, label: "Gender", value: "Male" },
      { icon: <Wrench size={16} />, label: "Termination", value: "Crimp" },
      { icon: <Signal size={16} />, label: "Impedance", value: "50 Ohm" },
      { icon: <Cable size={16} />, label: "Cable Compatibility", value: "Select according to cable diameter" },
      { icon: <Antenna size={16} />, label: "Use", value: "Booster and antenna feeder connection" },
    ],
  }),
  makeAccessoryProduct({
    id: "15",
    title: "N Female Crimp Connector",
    subtitle: "RF Cable Connector",
    category: "Connectors",
    image: nFemaleCrimp,
    badge: "N Type",
    accentColor: "#475569",
    bgLight: "#F8FAFC",
    icon: <Plug size={28} strokeWidth={1.5} />,
    description: "A crimp-style N female connector for compatible coaxial cable and RF cable assemblies.",
    features: ["N-type family", "Female interface", "Crimp termination", "50 Ohm", "Cable-specific sizing", "Custom cable assemblies"],
    specs: [
      { label: "Family", value: "N Type" },
      { label: "Gender", value: "Female" },
      { label: "Fit", value: "Crimp" },
      { label: "Impedance", value: "50 Ohm" },
    ],
    detailedSpecs: [
      { icon: <Plug size={16} />, label: "Connector Family", value: "N Type" },
      { icon: <Router size={16} />, label: "Gender", value: "Female" },
      { icon: <Wrench size={16} />, label: "Termination", value: "Crimp" },
      { icon: <Signal size={16} />, label: "Impedance", value: "50 Ohm" },
      { icon: <Cable size={16} />, label: "Cable Compatibility", value: "Select according to cable diameter" },
      { icon: <Antenna size={16} />, label: "Use", value: "RF cable and adapter connection" },
    ],
  }),
  makeAccessoryProduct({
    id: "16",
    title: "N Male to N Male Connector Adapter",
    subtitle: "RF Connector Adapter",
    category: "Connectors",
    image: nMaleAdapter,
    badge: "Adapter",
    accentColor: "#334155",
    bgLight: "#F8FAFC",
    icon: <Plug size={28} strokeWidth={1.5} />,
    description: "A straight N male-to-male adapter for joining two compatible N female RF interfaces.",
    features: ["N male side A", "N male side B", "50 Ohm", "Straight adapter", "Metal body", "Reusable connection"],
    specs: [
      { label: "Side A", value: "N Male" },
      { label: "Side B", value: "N Male" },
      { label: "Impedance", value: "50 Ohm" },
      { label: "Body", value: "Metal" },
    ],
    detailedSpecs: [
      { icon: <Plug size={16} />, label: "Connector Family", value: "N Type" },
      { icon: <Router size={16} />, label: "Side A", value: "N Male" },
      { icon: <Router size={16} />, label: "Side B", value: "N Male" },
      { icon: <Signal size={16} />, label: "Impedance", value: "50 Ohm" },
      { icon: <ShieldCheck size={16} />, label: "Body", value: "Metal straight adapter" },
      { icon: <Wrench size={16} />, label: "Use", value: "Joining N female RF interfaces" },
    ],
  }),

  makeBoosterProduct({ id: "17", title: "Future Max Single-Band 900 MHz Booster", subtitle: "Single-Band Signal Booster", category: "Future Max Boosters", image: blueSingle900, frequency: "900 MHz", badge: "900 MHz", coverage: "500–800 sq ft" }),
  makeBoosterProduct({ id: "18", title: "Future Max Single-Band 1800 MHz Booster", subtitle: "Single-Band Signal Booster", category: "Future Max Boosters", image: blueSingle1800, frequency: "1800 MHz", badge: "1800 MHz", coverage: "500–800 sq ft" }),
  makeBoosterProduct({ id: "19", title: "Future Max Single-Band 2100 MHz Booster", subtitle: "Single-Band Signal Booster", category: "Future Max Boosters", image: blueSingle2100, frequency: "2100 MHz", badge: "2100 MHz", coverage: "500–800 sq ft" }),

  makeBoosterProduct({ id: "20", title: "Future Max Dual-Band 900 + 1800 MHz Booster", subtitle: "Dual-Band Signal Booster", category: "Future Max Boosters", image: blueDual9001800, frequency: "900 + 1800 MHz", badge: "Dual Band", accentColor: "#0A6FD4", bgLight: "#F0F7FF" }),
  makeBoosterProduct({ id: "21", title: "Future Max Dual-Band 900 + 2100 MHz Booster", subtitle: "Dual-Band Signal Booster", category: "Future Max Boosters", image: blueDual9002100, frequency: "900 + 2100 MHz", badge: "Dual Band", accentColor: "#0A6FD4", bgLight: "#F0F7FF" }),
  makeBoosterProduct({ id: "22", title: "Future Max Dual-Band 1800 + 2100 MHz Booster", subtitle: "Dual-Band Signal Booster", category: "Future Max Boosters", image: blueDual18002100, frequency: "1800 + 2100 MHz", badge: "Dual Band", accentColor: "#0A6FD4", bgLight: "#F0F7FF" }),

  makeBoosterProduct({ id: "23", title: "Future Max Tri-Band 900 + 1800 + 2100 MHz Booster", subtitle: "Tri-Band Signal Booster", category: "Future Max Boosters", image: blueTri90018002100, frequency: "900 + 1800 + 2100 MHz", badge: "Tri Band", accentColor: "#19AB3F", bgLight: "#E8F7EA" }),
  makeBoosterProduct({ id: "24", title: "Future Max Tri-Band 1800 + 2100 + 2300 MHz Booster", subtitle: "Tri-Band Signal Booster", category: "Future Max Boosters", image: blueTri180021002300, frequency: "1800 + 2100 + 2300 MHz", badge: "Tri Band", accentColor: "#19AB3F", bgLight: "#E8F7EA" }),
  makeBoosterProduct({ id: "25", title: "Future Max Tri-Band 850 + 1800 + 2100 MHz Booster", subtitle: "Tri-Band Signal Booster", category: "Future Max Boosters", image: blueTri85018002100, frequency: "850 + 1800 + 2100 MHz", badge: "Tri Band", accentColor: "#19AB3F", bgLight: "#E8F7EA" }),

  makeBoosterProduct({ id: "26", title: "Intratek Single-Band 900 MHz Booster", subtitle: "Single-Band Signal Booster", category: "Intratek Boosters", image: intratekSingle900, frequency: "900 MHz", brand: "Intratek", badge: "900 MHz", accentColor: "#6B0F6B", bgLight: "#FAF5FF", coverage: "Approx. 500 sq ft" }),
  makeBoosterProduct({ id: "27", title: "Intratek Single-Band 1800 MHz Booster", subtitle: "Single-Band Signal Booster", category: "Intratek Boosters", image: intratekSingle1800, frequency: "1800 MHz", brand: "Intratek", badge: "1800 MHz", accentColor: "#6B0F6B", bgLight: "#FAF5FF", coverage: "Approx. 500 sq ft" }),
  makeBoosterProduct({ id: "28", title: "Intratek Single-Band 2100 MHz Booster", subtitle: "Single-Band Signal Booster", category: "Intratek Boosters", image: intratekSingle2100, frequency: "2100 MHz", brand: "Intratek", badge: "2100 MHz", accentColor: "#6B0F6B", bgLight: "#FAF5FF", coverage: "Approx. 500 sq ft" }),

  makeBoosterProduct({ id: "29", title: "Intratek Dual-Band 900 + 1800 MHz Booster", subtitle: "Dual-Band Signal Booster", category: "Intratek Boosters", image: intratekDual9001800, frequency: "900 + 1800 MHz", brand: "Intratek", badge: "Dual Band", accentColor: "#7E187E", bgLight: "#FAF5FF", coverage: "Approx. 750 sq ft" }),
  makeBoosterProduct({ id: "30", title: "Intratek Dual-Band 900 + 2100 MHz Booster", subtitle: "Dual-Band Signal Booster", category: "Intratek Boosters", image: intratekDual9002100, frequency: "900 + 2100 MHz", brand: "Intratek", badge: "Dual Band", accentColor: "#7E187E", bgLight: "#FAF5FF", coverage: "Approx. 750 sq ft" }),

  makeBoosterProduct({ id: "31", title: "Intratek Tri-Band 900 + 1800 + 2100 MHz Booster", subtitle: "Tri-Band Signal Booster", category: "Intratek Boosters", image: intratekTri90018002100, frequency: "900 + 1800 + 2100 MHz", brand: "Intratek", badge: "Tri Band", accentColor: "#6B0F6B", bgLight: "#FAF5FF" }),
  makeBoosterProduct({ id: "32", title: "Intratek Tri-Band 1800 + 2100 + 2300 MHz Booster", subtitle: "Tri-Band Signal Booster", category: "Intratek Boosters", image: intratekTri180021002300, frequency: "1800 + 2100 + 2300 MHz", brand: "Intratek", badge: "Tri Band", accentColor: "#6B0F6B", bgLight: "#FAF5FF" }),
  makeBoosterProduct({ id: "33", title: "Intratek Tri-Band 850 + 1800 + 2100 MHz Booster", subtitle: "Tri-Band Signal Booster", category: "Intratek Boosters", image: intratekTri85018002100, frequency: "850 + 1800 + 2100 MHz", brand: "Intratek", badge: "Tri Band", accentColor: "#6B0F6B", bgLight: "#FAF5FF" }),
];

const prdCategories = [
  "All Products",
  "Smart & Commercial Boosters",
  "Antennas",
  "Cables",
  "Connectors",
  "Future Max Boosters",
  "Intratek Boosters",
];


const prdFeatures = [
  { icon: <ShieldCheck size={24} strokeWidth={1.5} />, title: "Certified Quality", desc: "All products tested & certified" },
  { icon: <Zap size={24} strokeWidth={1.5} />, title: "4G & 5G Ready", desc: "Future-proof technology" },
  { icon: <Globe size={24} strokeWidth={1.5} />, title: "Pan India Support", desc: "Installation & service network" },
  { icon: <Award size={24} strokeWidth={1.5} />, title: "Warranty Included", desc: "2-5 year coverage" },
];

const Products = () => {
  const [prdScrollY, setPrdScrollY] = useState(0);
  const [prdMousePos, setPrdMousePos] = useState({ x: 50, y: 50 });
  const [prdVisible, setPrdVisible] = useState({
    hero: false,
    features: false,
    products: false,
    cta: false,
  });
  const [prdSelectedProduct, setPrdSelectedProduct] = useState(null);
  const [prdActiveCategory, setPrdActiveCategory] = useState("All Products");
  const prdSectionRef = useRef(null);

  useEffect(() => {
    const handlePrdScroll = () => setPrdScrollY(window.scrollY);
    const handlePrdMouse = (e) => {
      if (!prdSectionRef.current) return;
      const rect = prdSectionRef.current.getBoundingClientRect();
      setPrdMousePos({
        x: ((e.clientX - rect.left) / rect.width) * 100,
        y: ((e.clientY - rect.top) / rect.height) * 100,
      });
    };
    window.addEventListener("scroll", handlePrdScroll, { passive: true });
    window.addEventListener("mousemove", handlePrdMouse);
    return () => {
      window.removeEventListener("scroll", handlePrdScroll);
      window.removeEventListener("mousemove", handlePrdMouse);
    };
  }, []);

  useEffect(() => {
    if (prdSelectedProduct) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [prdSelectedProduct]);

  useEffect(() => {
    const prdObserverOptions = { threshold: 0.12, rootMargin: "0px 0px -60px 0px" };
    const handleIntersect = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionName = entry.target.dataset.prdSection;
          if (sectionName) {
            setPrdVisible((prev) => ({ ...prev, [sectionName]: true }));
          }
        }
      });
    };
    const prdObserver = new IntersectionObserver(handleIntersect, prdObserverOptions);
    const prdElements = prdSectionRef.current?.querySelectorAll("[data-prd-section]");
    prdElements?.forEach((el) => prdObserver.observe(el));
    setTimeout(() => { setPrdVisible((prev) => ({ ...prev, hero: true })); }, 100);
    return () => prdObserver.disconnect();
  }, []);

  const prdFilteredProducts = prdActiveCategory === "All Products" 
    ? prdProducts 
    : prdProducts.filter(p => p.category === prdActiveCategory);

  return (
    <main className="prd-page" ref={prdSectionRef}>
      {/* Hero Section */}
      <section className="prd-hero">
        <div className="prd-hero__bg">
          <div className="prd-hero__image" style={{ backgroundImage: `url(${productsHeroImg})` }} />
          <div className="prd-hero__overlay" />
          <div className="prd-hero__grid" />
          <div className="prd-hero__glow" style={{ background: `radial-gradient(600px circle at ${prdMousePos.x}% ${prdMousePos.y}%, rgba(255,255,255,0.04) 0%, transparent 50%)` }} />
        </div>
        <div className="prd-container">
          <div className={`prd-hero__content ${prdVisible.hero ? 'prd-hero__content--visible' : ''}`} data-prd-section="hero">
            <span className="prd-hero__tag">Enterprise RF Products</span>
            <h1 className="prd-hero__title">
              Professional Mobile Signal Boosters &
              <span className="prd-hero__accent"> Enterprise RF Solutions</span>
            </h1>
            <p className="prd-hero__desc">
              Explore 33 cellular coverage products including smart commercial repeaters, single-band, dual-band and tri-band boosters, indoor and outdoor antennas, low-loss coaxial cables and N-type RF connectors.
            </p>
            <div className="prd-hero__actions">
              <a href="/contact" className="prd-hero__btn prd-hero__btn--primary">
                <span>Request Free RF Site Survey</span>
                <ArrowRight size={16} />
              </a>
              <a href="#products" className="prd-hero__btn prd-hero__btn--secondary">
                View All Products
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features Bar */}
      <section className="prd-features-bar">
        <div className="prd-container">
          <div className={`prd-features ${prdVisible.features ? 'prd-features--visible' : ''}`} data-prd-section="features">
            {prdFeatures.map((feature, index) => (
              <div key={index} className="prd-features__item">
                <div className="prd-features__icon">{feature.icon}</div>
                <div className="prd-features__info">
                  <span className="prd-features__title">{feature.title}</span>
                  <span className="prd-features__desc">{feature.desc}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="prd-grid-section" id="products">
        <div className="prd-container">
          <div className={`prd-grid__header ${prdVisible.products ? 'prd-grid__header--visible' : ''}`} data-prd-section="products">
            <span className="prd-grid__tag">33 Boosters & RF Accessories</span>
            <h2 className="prd-grid__title">
              Complete Range of
              <span className="prd-grid__accent"> Enterprise RF Solutions</span>
            </h2>
            <p className="prd-grid__desc">
              Browse Future Max and Intratek boosters together with antennas, LMR cables and RF connectors for complete indoor mobile-signal installations.
            </p>
          </div>

          {/* Category Filters */}
          <div className="prd-categories">
            {prdCategories.map((cat) => (
              <button
                key={cat}
                className={`prd-categories__btn ${prdActiveCategory === cat ? 'prd-categories__btn--active' : ''}`}
                onClick={() => setPrdActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="prd-grid__wrapper">
            {prdFilteredProducts.map((product, index) => (
              <div
                key={product.id}
                className={`prd-card ${prdVisible.products ? 'prd-card--visible' : ''}`}
                data-prd-section="products"
                style={{
                  '--prd-accent': product.accentColor,
                  '--prd-bg-light': product.bgLight,
                  transitionDelay: prdVisible.products ? `${index * 0.06}s` : '0s',
                }}
              >
                <div className="prd-card__image-wrap">
                  <img src={product.image} alt={product.title} className="prd-card__image" />
                  <div className="prd-card__image-shade" />
                  <span className="prd-card__badge" style={{ background: product.accentColor }}>
                    {product.badge}
                  </span>
                </div>
                <div className="prd-card__body">
                  <div className="prd-card__header">
                    <div className="prd-card__icon-wrap" style={{ background: product.bgLight, color: product.accentColor }}>
                      {product.icon}
                    </div>
                    <span className="prd-card__subtitle" style={{ color: product.accentColor }}>
                      {product.subtitle}
                    </span>
                  </div>
                  <h3 className="prd-card__title">{product.title}</h3>
                  <p className="prd-card__desc">{product.description}</p>
                  <div className="prd-card__features">
                    {product.features.slice(0, 3).map((feature, i) => (
                      <span key={i} className="prd-card__feature">
                        <CheckCircle2 size={12} style={{ color: product.accentColor }} />
                        {feature}
                      </span>
                    ))}
                    {product.features.length > 3 && (
                      <span className="prd-card__feature-more" style={{ color: product.accentColor }}>
                        +{product.features.length - 3} more
                      </span>
                    )}
                  </div>
                  <div className="prd-card__specs">
                    {product.specs.map((spec, i) => (
                      <div key={i} className="prd-card__spec">
                        <span className="prd-card__spec-value">{spec.value}</span>
                        <span className="prd-card__spec-label">{spec.label}</span>
                      </div>
                    ))}
                  </div>
                  <button 
                    className="prd-card__btn" 
                    style={{ background: product.accentColor }}
                    onClick={() => setPrdSelectedProduct(product)}
                  >
                    <span>View Specifications</span>
                    <ArrowRight size={14} />
                  </button>
                </div>
                <div className="prd-card__line" style={{ background: product.accentColor }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="prd-cta">
        <div className="prd-container">
          <div
            className={`prd-cta__card ${prdVisible.cta ? 'prd-cta__card--visible' : ''}`}
            data-prd-section="cta"
            style={{ transform: `translateY(${prdScrollY * -0.01}px)` }}
          >
            <div className="prd-cta__content">
              <h2 className="prd-cta__title">Looking for the Right Mobile Signal Booster?</h2>
              <p className="prd-cta__desc">
                Whether you need reliable mobile coverage for a home, hotel, hospital, commercial 
                building, educational campus, or industrial facility, our RF engineering experts will 
                recommend the ideal i Booster solution based on your coverage requirements, building 
                structure, and network environment.
              </p>
            </div>
            <div className="prd-cta__actions">
              <a href="/contact" className="prd-cta__btn">
                <span>Request Free RF Site Survey</span>
                <ArrowRight size={16} />
              </a>
              <div className="prd-cta__contact">
                <a href="tel:+919876543210" className="prd-cta__contact-link">
                  <Phone size={14} />
                  +91 98765 43210
                </a>
                <a href="mailto:info@futuremax.com" className="prd-cta__contact-link">
                  <Mail size={14} />
                  info@futuremax.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Specs Modal */}
      {prdSelectedProduct && (
        <div className="prd-modal-overlay" onClick={() => setPrdSelectedProduct(null)}>
          <div className="prd-modal" onClick={(e) => e.stopPropagation()}>
            <button className="prd-modal__close" onClick={() => setPrdSelectedProduct(null)}>
              <X size={20} />
            </button>
            <div className="prd-modal__image-wrap">
              <img src={prdSelectedProduct.image} alt={prdSelectedProduct.title} className="prd-modal__image" />
              <div className="prd-modal__image-shade" />
              <span className="prd-modal__badge" style={{ background: prdSelectedProduct.accentColor }}>
                {prdSelectedProduct.badge}
              </span>
            </div>
            <div className="prd-modal__body">
              <div className="prd-modal__header">
                <div className="prd-modal__icon" style={{ background: prdSelectedProduct.bgLight, color: prdSelectedProduct.accentColor }}>
                  {prdSelectedProduct.icon}
                </div>
                <div>
                  <span className="prd-modal__subtitle" style={{ color: prdSelectedProduct.accentColor }}>
                    {prdSelectedProduct.subtitle}
                  </span>
                  <h2 className="prd-modal__title">{prdSelectedProduct.title}</h2>
                </div>
              </div>
              <p className="prd-modal__desc">{prdSelectedProduct.description}</p>
              <div className="prd-modal__section">
                <h3 className="prd-modal__section-title">Key Features</h3>
                <div className="prd-modal__features">
                  {prdSelectedProduct.features.map((feature, i) => (
                    <span key={i} className="prd-modal__feature">
                      <CheckCircle2 size={16} style={{ color: prdSelectedProduct.accentColor }} />
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
              <div className="prd-modal__section">
                <h3 className="prd-modal__section-title">Technical Specifications</h3>
                <div className="prd-modal__specs-grid">
                  {prdSelectedProduct.detailedSpecs.map((spec, i) => (
                    <div key={i} className="prd-modal__spec-item">
                      <div className="prd-modal__spec-icon" style={{ color: prdSelectedProduct.accentColor }}>
                        {spec.icon}
                      </div>
                      <div className="prd-modal__spec-info">
                        <span className="prd-modal__spec-label">{spec.label}</span>
                        <span className="prd-modal__spec-value">{spec.value}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="prd-modal__cta">
                <p className="prd-modal__cta-text">
                  Interested in the {prdSelectedProduct.title}? Get in touch with our RF experts for pricing and deployment details.
                </p>
                <a href="/contact" className="prd-modal__cta-btn" style={{ background: prdSelectedProduct.accentColor }}>
                  <span>Request Quote & Site Survey</span>
                  <ArrowRight size={16} />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

export default Products;
