/**
 * config/event.ts
 * ─────────────────────────────────────────────────────────────
 * Único archivo que hay que editar para adaptar la landing
 * a un nuevo evento. Ningún componente necesita modificarse.
 * ─────────────────────────────────────────────────────────────
 */

// ── Identidad ────────────────────────────────────────────────
export const EVENT = {
  name:        'Golf Biz',
  edition:     'Edición I · 2026',
  badgeText:   'Club Argentino de Golf · Buenos Aires · Edición I',
  tagline:     'Golf Biz', 
  date: {
    display: 'viernes\n28 de Agosto', // \n genera salto de línea
    year:    '2026',
    iso:     '2026-08-28',
  },
  venue: {
    name:     'Club Argentino de Golf',
    location: 'Buenos Aires, Argentina',
    address:  'Ruta Nacional 8 Km 41.5, B1669 José C. Paz, Provincia de Buenos Aires',
    mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3289.1758227625223!2d-58.791937499999996!3d-34.4730637!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bc986eb7cf2563%3A0x4ef6791c4bdf4205!2sGolf%20Club%20Argentino!5e0!3m2!1ses!2sar!4v1784823827371!5m2!1ses!2sar',
    notes: [
      'Invitación personal no transferible',
    ],
  },

  // ── Imagen del hero ──────────────────────────────────────────
  // Reemplazá por una URL propia o colocá el archivo en /public/hero.jpg
 /*  heroImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAi54gOPSlv6sowDEQxeu-iRcShcRgZTsBosbYYtt8aHVb4q5gHuCMf-Qu8q0CPFOAzacIZ-GIwHkMPhQPbjO2rsSZj2Ep4gvbCn6jYXP_TAZTrlvdk796b-0tetOoaUV_uFs_aYUE0PrH8K9QD9dSbchLr1-8PQVyiXKfhLF71TXVbFR_HbVlvb8dz-nXImw0wOOIjBqCDNaJwIMt8Py-t-ZtZfTkSICTnDdIN9ipXLKR8dCB6U3SEgZNaqXhROXulNSa3UPZNOIk', */

  // ── Agenda ───────────────────────────────────────────────────
  agenda: [
    { time: '9:00 hs', title: 'Bienvenida y desayuno', highlight: false },
    { time: '10:00 hs',    title: 'Salidas Simultaneas',          highlight: true  },
    { time: '14:30 hs',    title: 'Fin del juego',              highlight: false },
    { time: '14:45 hs',    title: 'Almuerzo y entrega de premios', highlight: true },
    { time: '15:30 hs',    title: 'Finalización del evento',    highlight: false },
  ],

  // ── Formato ───────────────────────────────────────────────────
  format: [
    { label: 'Modalidad', value: 'Laguneada · Mejor pelota',                                                                                  highlight: false },
    { label: 'Cupos',     value: '20 jugadores',                                            highlight: false },
    { label: 'Incluye',   value: 'Green fee, driving range, desayuno, bar en el hoyo 9, cocktail de cierre, regalos para todos los jugadores y premios para los ganadores.', highlight: true  },
  ],

  // ── SEO / Meta ────────────────────────────────────────────────
  meta: {
    title:       'Golf Biz — Club House Golf Pilará · 11 de Junio 2026',
    description: 'Torneo por invitación. 20 jugadores. Club House Golf Pilará, Buenos Aires',
    ogImage:     'logo-golfbiz.svg',
  },
} as const;

// ── Campos del formulario ─────────────────────────────────────
export const FORM_FIELDS = [
  { id: 'nombre',                 label: 'Nombre',                  type: 'text',     required: true,  placeholder: 'Juan',              autocomplete: 'given-name',   col: 1 },
  { id: 'apellido',               label: 'Apellido',                type: 'text',     required: true,  placeholder: 'Pérez',             autocomplete: 'family-name',  col: 1 },
  { id: 'email',                  label: 'Email',                   type: 'email',    required: true,  placeholder: 'vos@email.com',   autocomplete: 'email',        col: 1 },
  { id: 'whatsapp',               label: 'WhatsApp',                type: 'tel',      required: true,  placeholder: '+54 9 11 …',        autocomplete: 'tel',          col: 1 },
  { id: 'handicap',               label: 'Matrícula AAG',     type: 'text',     required: true,  placeholder: '135052',            autocomplete: 'off',          col: 1 },
  { id: 'empresa',                label: 'Empresa',                 type: 'text',     required: true,  placeholder: 'Empresa',           autocomplete: 'organization', col: 1 },
  { id: 'restriccionAlimentaria', label: 'Restricción alimentaria', type: 'radio',    required: true,  placeholder: '',                  autocomplete: 'off',          col: 1 },
  { id: 'comentarios',            label: 'Comentarios',             type: 'textarea', required: false, placeholder: 'Aclaraciones o comentarios...', autocomplete: 'off', col: 1 },
] as const;

export type FormFieldId = (typeof FORM_FIELDS)[number]['id'];
