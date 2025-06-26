import { createSuperdevClient } from 'npm:@superdevhq/client@0.1.51';

const superdev = createSuperdevClient({ 
  appId: Deno.env.get('SUPERDEV_APP_ID'), 
});

Deno.serve(async (req) => {
  try {
    // Get auth token from request headers
    const authHeader = req.headers.get('Authorization');
    if (!authHeader) {
      return new Response(JSON.stringify({ error: 'Unauthorized' }), { 
        status: 401,
        headers: { "Content-Type": "application/json" }
      });
    }
    
    const token = authHeader.split(' ')[1];
    superdev.auth.setToken(token);

    const { name, email, phone, project, message } = await req.json();
    
    // Validate required fields
    if (!name || !email || !message) {
      return new Response(JSON.stringify({ error: 'Namn, e-post och meddelande är obligatoriska' }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    // Create email content
    const emailSubject = `Ny kontaktförfrågan från ${name}`;
    const emailBody = `
Ny kontaktförfrågan från webbplatsen:

Namn: ${name}
E-post: ${email}
Telefon: ${phone || 'Ej angivet'}
Projekttyp: ${project || 'Ej angivet'}

Meddelande:
${message}

---
Skickat från kontaktformuläret på ytterman.com
    `;

    // Send email using Superdev's sendEmail integration
    const emailResponse = await fetch('https://api.superdev.app/integrations/core/sendEmail', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
        'X-App-ID': Deno.env.get('SUPERDEV_APP_ID') || '',
      },
      body: JSON.stringify({
        to: 'tobias@ytterman.com',
        subject: emailSubject,
        body: emailBody,
        from_name: 'Ytterman Webbplats'
      })
    });

    console.log('Email API response status:', emailResponse.status);
    
    if (!emailResponse.ok) {
      const errorText = await emailResponse.text();
      console.error('Email API error:', errorText);
      return new Response(JSON.stringify({ 
        error: 'Kunde inte skicka e-post. Försök igen senare.' 
      }), {
        status: 500,
        headers: { "Content-Type": "application/json" },
      });
    }

    const emailResult = await emailResponse.json();
    console.log('Email sent successfully:', emailResult);

    return new Response(JSON.stringify({ 
      success: true, 
      message: 'Meddelandet har skickats!' 
    }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });

  } catch (error) {
    console.error('Error in send-contact-email function:', error);
    return new Response(JSON.stringify({ 
      error: 'Ett fel uppstod när meddelandet skulle skickas. Försök igen eller ring direkt.' 
    }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
});