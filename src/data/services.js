import { imageSources } from './images.js';

export const services = [
  {
    name: 'Hair Styling',
    image: imageSources.services.hairStyling,
  },
  {
    name: 'Hair Coloring',
    image: imageSources.services.hairColoring,
  },
  {
    name: 'Hair Spa & Treatments',
    image: imageSources.services.hairSpa,
  },
  {
    name: 'Facials & Skin Care',
    image: imageSources.services.facial,
  },
  {
    name: 'Body Care',
    image: imageSources.services.bodyCare,
  },
  {
    name: 'Manicure & Pedicure',
    image: imageSources.services.manicurePedicure,
  },
  {
    name: 'Nail Care',
    image: imageSources.services.nailCare,
  },
  {
    name: 'Bridal Makeovers',
    image: imageSources.services.bridalMakeup,
  },
  {
    name: 'Men’s Grooming',
    image: imageSources.services.mensGrooming,
  },
];

export const rateCards = [
  {
    name: 'Naturals Men',
    rates: [
      {
        service: 'Hair Cut',
        price: '₹300',
      },
      {
        service: 'Beard Trim',
        price: '₹200',
      },
      {
        service: 'Classic Hair Spa',
        price: '₹800',
      },
      {
        service: 'Express Facial',
        price: '₹1000',
      },
    ],
  },
  {
    name: 'Naturals Women',
    rates: [
      {
        service: 'Classic Cut / U-Cut / Straight Cut',
        price: '₹500',
      },
      {
        service: 'Layer Cut',
        price: '₹800',
      },
      {
        service: 'Root Retouch',
        price: '₹1300 / ₹1800',
      },
      {
        service: 'Express Facial',
        price: '₹1000',
      },
    ],
  },
  {
    name: 'Signature Men',
    rates: [
      {
        service: 'Haircut Senior Stylist',
        price: '₹500',
      },
      {
        service: 'Executive Shave',
        price: '₹1000',
      },
      {
        service: 'Premium Color',
        price: '₹1300',
      },
      {
        service: 'Fine Hair Spa',
        price: '₹1200',
      },
    ],
  },
  {
    name: 'Signature Women',
    rates: [
      {
        service: 'Trim / U-Style / Straight Style',
        price: '₹600',
      },
      {
        service: 'Layering',
        price: '₹1200',
      },
      {
        service: 'Global Color',
        price: '₹4000 / ₹5000 / ₹6000',
      },
      {
        service: 'Hydra Facial',
        price: '₹7000',
      },
    ],
  },
];
