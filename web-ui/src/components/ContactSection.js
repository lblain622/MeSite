import { Card, Link } from '@heroui/react';
import SectionHeader from './SectionHeader';

function ContactSection({ contactLinks }) {
  return (
    <section className="section contact-section" id="contact">
      <SectionHeader eyebrow="Contact" title="If you are interested in collaborating or working together." />
      <div className="contact-grid">
        {contactLinks.map((contact) => (
          <Card className="contact-card" key={contact.label}>
            <Card.Content>
              <p>{contact.label}</p>
              <Link href={contact.href} target={contact.href.startsWith('mailto:') ? undefined : '_blank'} rel="noreferrer">
                {contact.value}
              </Link>
            </Card.Content>
          </Card>
        ))}
      </div>
    </section>
  );
}

export default ContactSection;
