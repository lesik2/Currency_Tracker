import {
  ContactInfo,
  ContactSection, Icon, MainContacts, NameOfContact, Title, WrapperContact, WrapperLinks,
} from './styled';
import { CONTACTS, STATIC_INFO } from '../../constants/index';

export function Contact() {
  return (
    <ContactSection data-cy="contact">
      <Title>
        {STATIC_INFO.CONTACT_COMPANY}
      </Title>
      <MainContacts>
        <WrapperContact>
          <NameOfContact>
            E-mail:
          </NameOfContact>
          <ContactInfo>
            {STATIC_INFO.EMAIL_COMPANY}
          </ContactInfo>
        </WrapperContact>
        <WrapperContact>
          <NameOfContact>
            Phone:
          </NameOfContact>
          <ContactInfo>
            {STATIC_INFO.PHONE_COMPANY}
          </ContactInfo>
        </WrapperContact>
      </MainContacts>
      <NameOfContact>
        {STATIC_INFO.COMPANY_ADDRESS}
      </NameOfContact>
      <WrapperLinks>
        {CONTACTS.map((contact) => (
          <Icon alt={contact.name} key={contact.id} src={contact.icon} />
        ))}
      </WrapperLinks>
    </ContactSection>
  );
}
