import { Resend } from 'resend'
import { NextResponse } from 'next/server'

const resend = new Resend('re_JQWx3euy_8D2grrbT8wCG6GAURADqAVij')
const FROM_EMAIL = 'contact@abhayjitsingh.com'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    console.log('Received request body:', body)

    const { name, email, subject, message } = body

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: { message: 'All fields are required' } },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: { message: 'Invalid email format' } },
        { status: 400 }
      )
    }

    // Create the welcome email template for user
    const welcomeTemplate = `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html dir="ltr" lang="en">
  <head>
    <meta content="text/html; charset=UTF-8" http-equiv="Content-Type" />
    <meta name="x-apple-disable-message-reformatting" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Welcome to Abhayjit Singh - Chartered Accountant</title>
  </head>
  <body style='background-color:#f6f9fc;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif'>
    <div style="display:none;overflow:hidden;line-height:1px;opacity:0;max-height:0;max-width:0">
      Thanks for connecting with Abhayjit Singh - Chartered Accountant. Your trusted partner for financial analysis, risk management, and strategic business development.
    </div>
    <table align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="max-width:37.5em;background-color:#ffffff;margin:0 auto;padding:20px 0 48px;margin-bottom:64px">
      <tbody>
        <tr style="width:100%">
          <td>
            <!-- Logo Section with left alignment -->
            <div style="padding:20px 48px">
              <div style="display:flex;align-items:center">
                <div style="display:inline-block">
                  <span style="color:#1a365d;font-size:28px;font-weight:600">Abhayjit Singh</span>
                </div>
              </div>
            </div>
            <table align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="padding:0 48px">
              <tbody>
                <tr>
                  <td>
                    <div style="width:100%;height:4px;background:linear-gradient(90deg, #1a365d, #2c5282);margin:0 0 20px 0"></div>
                    
                    <h1 style="color:#333333;font-size:24px;line-height:32px;text-align:center;margin:24px 0">
                      Thanks for connecting
                    </h1>
                    
                    <p style="font-size:16px;line-height:24px;color:#525f7f;text-align:left;margin-bottom:16px;margin-top:16px">
                      Dear ${name},
                    </p>
                    <p style="font-size:16px;line-height:24px;color:#525f7f;text-align:left;margin-bottom:16px;margin-top:16px">
                      Thank you for choosing Abhayjit Singh Chartered Accountant. As a seasoned professional with extensive experience at KPMG, I am committed to providing you with comprehensive financial solutions and strategic guidance for your business.
                    </p>

                    <div style="background-color:#f8fafc;border-radius:8px;padding:24px;margin:32px 0">
                      <h2 style="color:#333333;font-size:18px;margin:0 0 16px 0">Our Core Services:</h2>
                      <ul style="color:#525f7f;font-size:16px;line-height:24px;margin:0;padding:0 0 0 24px">
                        <li style="margin-bottom:8px">Financial Analysis & Reporting</li>
                        <li style="margin-bottom:8px">Risk Management & Assessment</li>
                        <li style="margin-bottom:8px">Strategic Business Development</li>
                        <li style="margin-bottom:8px">Comprehensive Financial Solutions</li>
                        <li>Expert Business Guidance</li>
                      </ul>
                    </div>

                    <div style="background-color:#f8fafc;border-radius:8px;padding:24px;margin:32px 0">
                      <h2 style="color:#333333;font-size:18px;margin:0 0 16px 0">Why Partner With Us?</h2>
                      <ul style="color:#525f7f;font-size:16px;line-height:24px;margin:0;padding:0 0 0 24px">
                        <li style="margin-bottom:8px">5+ Years of Professional Experience</li>
                        <li style="margin-bottom:8px">100+ Projects Successfully Completed</li>
                        <li style="margin-bottom:8px">50+ Satisfied Clients</li>
                        <li>Expertise in Multiple Sectors</li>
                      </ul>
                    </div>

                    <p style="font-size:16px;line-height:24px;color:#525f7f;text-align:left;margin:24px 0">
                      I look forward to working with you and helping your business achieve its financial goals. If you have any questions or need immediate assistance, please don't hesitate to reach out.
                    </p>

                    <a href="https://www.abhayjitsingh.com/" style="line-height:100%;text-decoration:none;display:block;max-width:300px;mso-padding-alt:0px;background:linear-gradient(90deg, #1a365d, #2c5282);border-radius:5px;color:#fff;font-size:16px;font-weight:bold;text-align:center;padding:16px 24px;margin:32px auto;transition:all 0.3s ease;box-shadow:0 4px 6px rgba(26, 54, 93, 0.2)" target="_blank">
                      <span style="max-width:100%;display:inline-block;line-height:120%;mso-padding-alt:0px;mso-text-raise:7.5px">
                        Visit Our Website
                      </span>
                    </a>

                    <div style="width:100%;height:1px;background-color:#e6ebf1;margin:20px 0"></div>
                    
                    <!-- Next Steps Section -->
                    <h2 style="color:#333333;font-size:18px;margin:24px 0 16px 0">What's Next?</h2>
                    <ol style="color:#525f7f;font-size:16px;line-height:24px;margin:0;padding:0 0 0 24px">
                      <li style="margin-bottom:8px">Our team will contact you within 24 hours to schedule a consultation</li>
                      <li style="margin-bottom:8px">We'll discuss your specific requirements and challenges</li>
                      <li style="margin-bottom:8px">You'll receive a customized solution proposal</li>
                      <li>We'll begin implementing your tailored financial solution</li>
                    </ol>

                    <!-- Additional Information -->
                    <p style="font-size:16px;line-height:24px;color:#525f7f;text-align:left;margin:24px 0">
                      If you need immediate assistance, please contact us at 
                      <a href="mailto:caabhayjit@gmail.com" style="color:#1a365d;text-decoration-line:none" target="_blank">
                        caabhayjit@gmail.com
                      </a>
                      or call us at <span style="color:#2c5282">+91 7340803706</span>.
                    </p>

                    <!-- Signature -->
                    <p style="font-size:16px;line-height:24px;color:#525f7f;text-align:left;margin-bottom:16px;margin-top:16px">
                      Best regards,<br/>
                      <span style="color:#1a365d;font-weight:600">Abhayjit Singh</span><br/>
                      <span style="font-size:14px">Chartered Accountant</span>
                    </p>

                    <div style="width:100%;height:1px;background-color:#e6ebf1;margin:20px 0"></div>
                    
                    <!-- Social Media -->
                    <p style="text-align:center;color:#525f7f;margin:20px 0">
                      Connect with us to stay updated:
                    </p>
                    <div style="text-align:center;margin:20px 0">
                      <a href="https://linkedin.com/in/abhayjit-singh" style="margin:0 10px;text-decoration:none" target="_blank">
                        <img alt="LinkedIn" height="32" src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png" style="display:inline-block" width="32" />
                      </a>
                      <a href="https://twitter.com" style="margin:0 10px;text-decoration:none" target="_blank">
                        <img alt="Twitter" height="28" src="https://abhayjitsingh.com/images/twitter.webp" style="display:inline-block" width="28" />
                      </a>
                    </div>
                    
                    <!-- Footer -->
                    <p style="font-size:12px;line-height:16px;color:#8898aa;text-align:center;margin-bottom:16px;margin-top:16px">
                      Abhayjit Singh Chartered Accountant<br/>
                      Ludhiana, Punjab, India
                    </p>
                  </td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
      </tbody>
    </table>
  </body>
</html>`

    // Send welcome email to user who submitted the form
    const welcomeEmail = await resend.emails.send({
      from: `Abhayjit Singh <${FROM_EMAIL}>`,
      to: [email], // Using the email from the form submission
      subject: 'Welcome to Abhayjit Singh - Chartered Accountant',
      html: welcomeTemplate,
    })

    console.log('Email sent successfully:', welcomeEmail)

    return NextResponse.json(
      { 
        message: 'Message received successfully! Please check your email for confirmation.',
        data: { welcomeEmail }
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error sending email:', error)
    return NextResponse.json(
      { 
        error: { 
          message: error instanceof Error ? error.message : 'Failed to send message',
          details: error
        } 
      },
      { status: 500 }
    )
  }
} 