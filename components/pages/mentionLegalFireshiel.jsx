import React from "react";

// app/legal-mentions/page.js
import Link from "next/link";

function Title({ children }) {
  return <h2 className="text-lg font-bold mb-4">{children}</h2>;
}

function Paragraph({ children }) {
  return <p className="text-black-700 mb-4">{children}</p>;
}

function LinkComponent({ href, children }) {
  return (
    <Link href={href} prefetch={false} className="text-blue-600 hover:underline">
      {children}
    </Link>
  );
}

export default function LegalMentions() {
  return (
    <div className="max-w-3xl mx-auto p-6">
      <Title>Mentions Légales</Title>
      <Paragraph>
        Conformément à la loi, voici les informations légales concernant ce site.
      </Paragraph>
      <Title>Éditeur du Site</Title>
      <Paragraph>
        Nom de l'entreprise : Fireshield Security <br/>
        Adresse : 29-31 Voie de degagement N, Dakar <br/>
        Contact : <LinkComponent href="mailto:contact@Fireshieldsec.com">contact@Fireshieldsec.com</LinkComponent>
      </Paragraph>
      <Title>Hébergement</Title>
      <Paragraph>
        Hébergeur : Nom de l'hébergeur <br/>
        Adresse : Adresse de l'hébergeur <br/>
        Contact : <LinkComponent href="https://hebergeur.com">hebergeur.com</LinkComponent>
      </Paragraph>
      <Title>Propriété Intellectuelle</Title>
      <Paragraph>
        Tout le contenu de ce site est protégé par le droit d’auteur. Toute reproduction est interdite sans autorisation préalable.
      </Paragraph>
      <Title>Responsabilité</Title>
      <Paragraph>
        L’éditeur du site ne peut être tenu responsable des erreurs ou indisponibilités du service.
      </Paragraph>
      <Title>Protection des Données</Title>
      <Paragraph>
        Pour plus d’informations, consultez notre <LinkComponent href="/privacy-policy">Politique de Confidentialité</LinkComponent>.
      </Paragraph>
    </div>
  );
}
