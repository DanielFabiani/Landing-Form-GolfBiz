import { NextRequest, NextResponse } from 'next/server';

interface RegistrationPayload {
  nombre?: string;
  apellido?: string;
  email?: string;
  whatsapp?: string;
  handicap?: string;
  empresa?: string;
  restriccionAlimentaria?: string;
  comentarios?: string;
  timestamp?: string;
}

/**
 * POST /api/register
 *
 * Actúa como proxy entre el formulario del cliente y el Google Apps Script.
 * Esto evita el problema de CORS/no-cors que tiene el fetch directo desde el browser.
 */
export async function POST(req: NextRequest) {
  const appsScriptUrl = process.env.APPS_SCRIPT_URL;

  if (!appsScriptUrl) {
    return NextResponse.json(
      { error: 'APPS_SCRIPT_URL no configurado en variables de entorno.' },
      { status: 500 }
    );
  }

  let body: RegistrationPayload;
  try {
    body = (await req.json()) as RegistrationPayload;
  } catch {
    return NextResponse.json({ error: 'Payload inválido.' }, { status: 400 });
  }

  const payload: RegistrationPayload = {
    nombre: body.nombre || '',
    apellido: body.apellido || '',
    email: body.email || '',
    whatsapp: body.whatsapp || '',
    handicap: body.handicap || '',
    empresa: body.empresa || '',
    restriccionAlimentaria: body.restriccionAlimentaria || 'No',
    comentarios: body.comentarios || '',
    timestamp: body.timestamp || new Date().toISOString(),
  };

  try {
    const response = await fetch(appsScriptUrl, {
      method:  'POST',
      headers: { 'Content-Type': 'application/json' },
      body:    JSON.stringify(payload),
    });

    // Apps Script a veces devuelve texto plano; manejamos ambos casos
    const text = await response.text();
    return NextResponse.json({ result: 'ok', raw: text });
  } catch (err) {
    console.error('[register] Error al llamar a Apps Script:', err);
    return NextResponse.json(
      { error: 'Error al conectar con el servidor de registro.' },
      { status: 502 }
    );
  }
}
