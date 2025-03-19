'use client';

// app/terms-and-conditions/page.js
import Link from "next/link";

function Title({ children }) {
  return <h2 className="text-2xl font-bold mb-4">{children}</h2>;
}

function Paragraph({ children }) {
  return <p className="text-gray-700 mb-4">{children}</p>;
}

function LinkComponent({ href, children }) {
  return (
    <Link href={href} prefetch={false} className="text-blue-600 hover:underline">
      {children}
    </Link>
  );
}

export default function TermsAndConditions() {
  return (
    <div className="max-w-3xl mx-auto p-6">
      <Title>Termes et Conditions</Title>
      <Paragraph>
        Ces termes et conditions définissent les règles d'utilisation de notre site web.
      </Paragraph>
      <Title>Acceptation des Conditions</Title>
      <Paragraph>
        En utilisant ce site, vous acceptez les présentes conditions générales d'utilisation.
      </Paragraph>
      <Title>Utilisation du Site</Title>
      <Paragraph>
        L'utilisation du site doit se faire dans le respect des lois en vigueur et des présentes conditions.
      </Paragraph>
      <Title>Responsabilités</Title>
      <Paragraph>
        Nous ne pouvons être tenus responsables des dommages résultant de l'utilisation du site.
      </Paragraph>
      <Title>Modification des Conditions</Title>
      <Paragraph>
        Nous nous réservons le droit de modifier ces conditions à tout moment.
      </Paragraph>
      <Title>Contact</Title>
      <Paragraph>
        Pour toute question, contactez-nous à
        <LinkComponent href="mailto:contact@fireshieldsec.com"> contact@fireshieldsec.com</LinkComponent>.
      </Paragraph>
    </div>
  );
}
