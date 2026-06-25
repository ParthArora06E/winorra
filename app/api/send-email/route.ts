import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import fs from 'fs';
import path from 'path';

function getAdminNotificationTemplate(title: string, data: Record<string, string>) {
  const rows = Object.entries(data).map(([key, value]) => `
    <tr>
      <td style="padding: 15px; border-bottom: 1px solid #EEEEEE; font-weight: bold; color: #071A3D; width: 35%;">${key}</td>
      <td style="padding: 15px; border-bottom: 1px solid #EEEEEE; color: #555555; white-space: pre-wrap;">${value}</td>
    </tr>
  `).join('');

  return `
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>${title}</title>
<style>
  body { margin: 0; padding: 0; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; background-color: #F5F7FA; }
  .container { max-width: 650px; margin: 30px auto; background-color: #FFFFFF; border-radius: 8px; box-shadow: 0 4px 20px rgba(0,0,0,0.05); overflow: hidden; }
  .header { background: linear-gradient(135deg, #071A3D, #0A84FF); padding: 30px; text-align: center; }
  .header img { max-width: 200px; height: auto; display: block; margin: 0 auto; border-radius: 4px; }
  .title-bar { background-color: #39D353; padding: 15px 30px; text-align: center; color: #071A3D; }
  .title-bar h2 { margin: 0; font-size: 20px; text-transform: uppercase; letter-spacing: 1px; }
  .content { padding: 40px 30px; }
  table { width: 100%; border-collapse: collapse; }
  .footer { background-color: #040E22; padding: 20px 30px; text-align: center; color: #8899AA; font-size: 12px; }
</style>
</head>
<body>
  <div class="container">
    <div class="header">
      <img src="cid:winoraalogo" alt="WINORAA GLOBAL" />
    </div>
    <div class="title-bar">
      <h2>${title}</h2>
    </div>
    <div class="content">
      <table>
        <tbody>
          ${rows}
        </tbody>
      </table>
    </div>
    <div class="footer">
      <p>Securely sent from Winoraa Global Website</p>
    </div>
  </div>
</body>
</html>
  `;
}

function getAutoReplyTemplate(name: string) {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Winoraa Global</title>
<style>
  body { margin: 0; padding: 0; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; background-color: #F5F7FA; }
  .container { max-width: 650px; margin: 0 auto; background-color: #FFFFFF; overflow: hidden; border-radius: 8px; box-shadow: 0 4px 20px rgba(0,0,0,0.05); margin-top: 20px; margin-bottom: 20px; }
  .header { background: linear-gradient(135deg, #071A3D, #0A84FF); padding: 30px; text-align: center; color: #FFFFFF; }
  .header h1 { margin: 0; font-size: 28px; font-weight: 800; letter-spacing: 2px; }
  .header p { margin: 10px 0 0 0; font-size: 14px; color: #39D353; letter-spacing: 1px; text-transform: uppercase; font-weight: bold; }
  .welcome { padding: 40px 30px; text-align: center; color: #333333; }
  .welcome h3 { margin: 0 0 15px 0; font-size: 24px; color: #071A3D; }
  .welcome p { margin: 0 0 20px 0; font-size: 16px; line-height: 1.6; color: #555555; }
  .hero { background-color: #071A3D; padding: 50px 30px; text-align: center; color: #FFFFFF; }
  .hero h2 { margin: 0; font-size: 32px; font-weight: 900; line-height: 1.2; }
  .hero p { margin: 20px 0 30px 0; font-size: 16px; color: #A0B0C0; line-height: 1.5; }
  .button { display: inline-block; background-color: #39D353; color: #071A3D; text-decoration: none; padding: 15px 30px; font-weight: bold; border-radius: 4px; font-size: 16px; }
  .services { background-color: #F5F7FA; padding: 40px 30px; text-align: center; font-size: 0; }
  .services h3 { margin: 0 0 30px 0; font-size: 22px; color: #071A3D; }
  .card { display: inline-block; width: 48%; background: #FFFFFF; padding: 25px 20px; margin-bottom: 20px; border-radius: 8px; box-shadow: 0 2px 10px rgba(0,0,0,0.03); box-sizing: border-box; text-align: left; border-top: 3px solid #0A84FF; vertical-align: top; }
  .card-margin { margin-right: 4%; }
  .card h4 { margin: 0 0 10px 0; font-size: 18px; color: #071A3D; }
  .card p { margin: 0; font-size: 14px; color: #666666; line-height: 1.5; }
  .stats { background: linear-gradient(135deg, #0A84FF, #39D353); padding: 40px 30px; text-align: center; color: #FFFFFF; font-size: 0; }
  .stat-item { display: inline-block; width: 30%; vertical-align: top; }
  .stat-item h4 { margin: 0; font-size: 32px; font-weight: 800; }
  .stat-item p { margin: 5px 0 0 0; font-size: 14px; font-weight: bold; text-transform: uppercase; }
  .footer { background-color: #071A3D; padding: 40px 30px; text-align: center; color: #8899AA; font-size: 12px; line-height: 1.6; }
  .footer p { margin: 5px 0; }
  .footer a { color: #0A84FF; text-decoration: none; }
  @media only screen and (max-width: 600px) {
    .card { width: 100% !important; margin-right: 0 !important; }
    .stat-item { width: 100% !important; margin-bottom: 20px; }
  }
</style>
</head>
<body>
  <div class="container">
    <div class="header">
      <img src="cid:winoraalogo" alt="WINORAA GLOBAL" style="max-width: 240px; height: auto; margin-bottom: 15px; display: block; margin-left: auto; margin-right: auto; border-radius: 4px;" />
      <p style="margin: 0; font-size: 14px; color: #39D353; letter-spacing: 1px; text-transform: uppercase; font-weight: bold;">Built To Integrate. To Inspire.</p>
    </div>
    
    <div class="welcome">
      <h3>Hello ${name},</h3>
      <p>Thank you for reaching out to Winoraa Global. We have received your message and our team of experts is currently reviewing your details. We will get back to you shortly to discuss how we can build the future together.</p>
      <p>In the meantime, explore how we drive global impact through integrated solutions.</p>
    </div>

    <div class="hero">
      <h2>INTEGRATED SOLUTIONS.<br/>GLOBAL IMPACT.</h2>
      <p>Driving innovation, technology, growth, and transformation for Fortune 500 companies worldwide.</p>
      <a href="https://winoraa.com" class="button">Explore Solutions</a>
    </div>

    <div class="services">
      <h3>Our Expertise</h3>
      <div>
        <div class="card card-margin">
          <h4>Digital Transformation</h4>
          <p>Modernizing legacy systems and accelerating digital initiatives across the enterprise.</p>
        </div>
        <div class="card">
          <h4>Technology Solutions</h4>
          <p>Implementing scalable architectures and cutting-edge software solutions.</p>
        </div>
        <div class="card card-margin">
          <h4>Business Consulting</h4>
          <p>Strategic advisory for optimizing operations and driving sustainable growth.</p>
        </div>
        <div class="card">
          <h4>Global Operations</h4>
          <p>Streamlining supply chains and international business frameworks.</p>
        </div>
      </div>
    </div>

    <div class="stats">
      <div>
        <div class="stat-item">
          <h4>100+</h4>
          <p>Projects</p>
        </div>
        <div class="stat-item">
          <h4>50+</h4>
          <p>Clients</p>
        </div>
        <div class="stat-item">
          <h4>10+</h4>
          <p>Industries</p>
        </div>
      </div>
    </div>

    <div class="footer">
      <p><strong>Winoraa Global</strong></p>
      <p>Delhi & Bengaluru</p>
      <p>Email: <a href="mailto:winoraaglobal@gmail.com">winoraaglobal@gmail.com</a></p>
      <p style="margin-top: 20px; font-size: 10px; color: #556677;">You are receiving this email because you submitted a request on our website. This is an automated response.</p>
    </div>
  </div>
</body>
</html>
  `;
}

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    const type = formData.get('type') as string;

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'winoraaglobal@gmail.com',
        pass: 'opsy hbnt cvqr tgca',
      },
    });

    if (type === 'contact') {
      const name = formData.get('name') as string;
      const phone = formData.get('phone') as string;
      const email = formData.get('email') as string;
      const eventType = formData.get('eventType') as string;
      const vision = formData.get('vision') as string;

      const logoPath = path.join(process.cwd(), 'public', 'logos', 'd0adcf4b-bc9d-4512-b1a1-e4326003a7bf.jpg');

      const contactData = {
        'Name': name,
        'Email': email,
        'Phone': phone || 'Not provided',
        'Event Type': eventType || 'Not provided',
        'Event Vision': vision
      };

      const adminMailOptions = {
        from: '"Winoraa Website" <winoraaglobal@gmail.com>',
        to: 'winoraaglobal@gmail.com',
        replyTo: email,
        subject: `New Contact Form Submission from ${name}`,
        html: getAdminNotificationTemplate('New Contact Request', contactData),
        attachments: [
          {
            filename: 'winoraa-logo.jpg',
            path: logoPath,
            cid: 'winoraalogo'
          }
        ]
      };

      await transporter.sendMail(adminMailOptions);
      
      if (email) {
        const autoReplyOptions = {
          from: '"Winoraa Global" <winoraaglobal@gmail.com>',
          to: email,
          subject: 'Thank you for contacting Winoraa Global',
          html: getAutoReplyTemplate(name),
          attachments: [
            {
              filename: 'winoraa-logo.jpg',
              path: logoPath,
              cid: 'winoraalogo'
            }
          ]
        };
        await transporter.sendMail(autoReplyOptions);
      }

      return NextResponse.json({ success: true, message: 'Email sent successfully!' });

    } else if (type === 'career') {
      const name = formData.get('name') as string;
      const phone = formData.get('phone') as string;
      const email = formData.get('email') as string;
      const position = formData.get('position') as string;
      const experience = formData.get('experience') as string;
      const resume = formData.get('resume') as File;

      const attachments = [];
      if (resume && resume.size > 0) {
        const arrayBuffer = await resume.arrayBuffer();
        const buffer = Buffer.from(arrayBuffer);
        attachments.push({
          filename: resume.name,
          content: buffer,
        });
      }

      const logoPath = path.join(process.cwd(), 'public', 'logos', 'd0adcf4b-bc9d-4512-b1a1-e4326003a7bf.jpg');
      
      const careerData = {
        'Position Applied For': position,
        'Name': name,
        'Email': email,
        'Phone': phone,
        'Experience': `${experience} years`,
        'Resume': 'Attached to this email'
      };

      const adminMailOptions = {
        from: '"Winoraa Careers" <winoraaglobal@gmail.com>',
        to: 'winoraaglobal@gmail.com',
        replyTo: email,
        subject: `New Job Application for ${position} from ${name}`,
        html: getAdminNotificationTemplate('New Job Application', careerData),
        attachments: [
          {
            filename: 'winoraa-logo.jpg',
            path: logoPath,
            cid: 'winoraalogo'
          },
          ...attachments
        ]
      };

      await transporter.sendMail(adminMailOptions);
      
      if (email) {
        const autoReplyOptions = {
          from: '"Winoraa Global" <winoraaglobal@gmail.com>',
          to: email,
          subject: 'Application Received - Winoraa Global',
          html: getAutoReplyTemplate(name).replace('We have received your message and our team of experts is currently reviewing your details.', 'We have successfully received your job application. Our hiring team is currently reviewing your resume and experience.'),
          attachments: [
            {
              filename: 'winoraa-logo.jpg',
              path: logoPath,
              cid: 'winoraalogo'
            }
          ]
        };
        await transporter.sendMail(autoReplyOptions);
      }

      return NextResponse.json({ success: true, message: 'Application submitted successfully!' });

    } else {
      return NextResponse.json({ success: false, message: 'Invalid submission type.' }, { status: 400 });
    }
  } catch (error) {
    console.error('Email sending error:', error);
    return NextResponse.json({ success: false, message: 'Failed to send email. Please try again.' }, { status: 500 });
  }
}
