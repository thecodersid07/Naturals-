import { imageSources } from './images.js';

export const services = [
  {
    name: 'Hair Styling',
    image: imageSources.services.signatureHair,
    description: 'Haircuts, styling, treatments and more.',
  },
  {
    name: 'Hair Coloring',
    image: imageSources.services.hairColoring,
    description: 'Global color expertise for a perfect you.',
  },
  {
    name: 'Hair Spa & Treatments',
    image: imageSources.services.hairSpa,
    description: 'Relaxing spa therapies for healthy hair.',
  },
  {
    name: 'Facials & Skin Care',
    image: imageSources.services.facial,
    description: 'Advanced facials and skincare solutions.',
  },
  {
    name: 'Body Care',
    image: imageSources.services.bodyCare,
    description: 'Rejuvenate your body and mind.',
  },
  {
    name: 'Manicure & Pedicure',
    image: imageSources.services.manicurePedicure,
    description: 'Professional hand and foot care.',
  },
  {
    name: 'Nail Care',
    image: imageSources.services.nailCare,
    description: 'Nail care, polish and art with finesse.',
  },
  {
    name: 'Bridal Makeovers',
    image: imageSources.services.bridalMakeup,
    description: 'Elegant bridal looks for your big day.',
  },
  {
    name: 'Men’s Grooming',
    image: imageSources.services.mensGrooming,
    description: 'Sharp grooming, styling and beard care.',
  },
];

export const signatureServiceGroups = [
  {
    label: 'Hair Care',
    title: 'Signature Hair Craft',
    description: 'Editorial cutting, color, texture, fiber care, scalp wellness, and spa rituals inspired by premium Signature grooming menus.',
    image: imageSources.services.signatureHair,
    categories: [
      { name: 'Cuts & Styling', image: imageSources.services.hairStyling },
      { name: 'Hair Coloring', image: imageSources.services.hairColoring },
      { name: 'Hair Textures', image: imageSources.services.hairTextures },
      { name: 'Hair Fiber', image: imageSources.services.hairFiber },
      { name: 'Hair Treatments', image: imageSources.services.hairTreatments },
      { name: 'Hair Spa', image: imageSources.services.hairSpa },
      { name: 'Scalp Wellness', image: imageSources.services.scalpWellness },
      { name: 'Enhancers', image: imageSources.services.enhancers },
    ],
  },
  {
    label: 'Skin Care',
    title: 'Signature Skin Rituals',
    description: 'A refined skin menu covering classic facials, premium glow services, brightening, hydra care, and relaxation therapies.',
    image: imageSources.services.signatureSkin,
    categories: [
      { name: 'Classic Facials', image: imageSources.services.classicFacials },
      { name: 'Naturals Special Facials', image: imageSources.services.naturalsSpecialFacials },
      { name: 'Premium Facials', image: imageSources.services.premiumFacials },
      { name: 'Skin Brightening', image: imageSources.services.skinBrightening },
      { name: 'Hydra Facial', image: imageSources.services.hydraFacial },
      { name: 'Reflexology', image: imageSources.services.reflexology },
      { name: 'De-Tan / Bleach', image: imageSources.services.deTanBleach },
      { name: 'Body Polish', image: imageSources.services.bodyPolish },
    ],
  },
  {
    label: 'Body Care',
    title: 'Hands, Feet & Body Indulgence',
    description: 'Premium grooming care for hands, feet, heels, and body polish with a relaxed Signature salon presentation.',
    image: imageSources.services.signatureBody,
    categories: [
      { name: 'Manicure & Pedicure', image: imageSources.services.manicurePedicure },
      { name: 'Foot Treatment', image: imageSources.services.footTreatment },
      { name: 'Heel Peel Treatment', image: imageSources.services.heelPeel },
      { name: 'Footlogix', image: imageSources.services.footlogix },
    ],
  },
];

export const rateCards = [
  {
    name: 'Naturals Men',
    rates: [
      { service: 'Hair Cut', price: '₹300' },
      { service: 'Beard Trim', price: '₹200' },
      { service: 'Classic Hair Spa', price: '₹800' },
      { service: 'Express Facial', price: '₹1000' },
    ],
  },
  {
    name: 'Naturals Women',
    rates: [
      { service: 'Classic Cut / U-Cut / Straight Cut', price: '₹500' },
      { service: 'Layer Cut', price: '₹800' },
      { service: 'Root Retouch', price: '₹1300 / ₹1800' },
      { service: 'Express Facial', price: '₹1000' },
    ],
  },
  {
    name: 'Signature Men',
    rates: [
      { service: 'Haircut Senior Stylist', price: '₹500' },
      { service: 'Executive Shave', price: '₹1000' },
      { service: 'Premium Color', price: '₹1300' },
      { service: 'Fine Hair Spa', price: '₹1200' },
    ],
  },
  {
    name: 'Signature Women',
    rates: [
      { service: 'Trim / U-Style / Straight Style', price: '₹600' },
      { service: 'Layering', price: '₹1200' },
      { service: 'Global Color', price: '₹4000 / ₹5000 / ₹6000' },
      { service: 'Hydra Facial', price: '₹7000' },
    ],
  },
];
