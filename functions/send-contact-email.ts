import { sendEmail } from "@/integrations/core";

Deno.serve(async (req) => {
  try {
    const { name, email, phone, project, message } = await req.json();
    
    // Validate required fields
    if (!name || !email || !message) {
      return new Response(JSON.stringify({ 
        success: false,
        error: 'Namn, e-post och meddelande är obligatoriska' 
      }), {
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

    // Send email using the built-in sendEmail integration
    const emailResult = await sendEmail({
      to: 'tobias@ytterman.com',
      subject: emailSubject,
      body: emailBody,
      from_name: 'Ytterman Webbplats'
    });

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
      success: false,
      error: 'Ett fel uppstod när meddelandet skulle skickas. Försök igen eller ring direkt på 076-111 84 47.' 
    }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
});