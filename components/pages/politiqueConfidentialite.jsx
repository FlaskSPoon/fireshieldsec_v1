import React from "react";
import Link from "next/link";

function Title({ children }) {
  return <h2 className="text-lg font-bold mb-4">{children}</h2>;
}

function Paragraph({ children }) {
  return <p className="text-black-700 mb-4">{children}</p>;
}

function LinkComponent({ href, children }) {
  return (
    <Link
      href={href}
      prefetch={false}
      className="text-blue-600 hover:underline"
    >
      {children}
    </Link>
  );
}

export default function PolitiqueConfidentialite() {
  return (
    <>
      <section className="about-area space-top pb-425">
        <div className="container">
          <div className="max-w-3xl mx-auto p-6">
            <Title>Politique de Confidentialité</Title>
            <Paragraph>
              Bienvenue sur la politique de confidentialité de Fireshield
              Security. Nous fournissons cette politique (« Politique de
              confidentialité ») pour vous informer de la manière dont nous
              recueillons et utilisons les informations relatives à votre
              utilisation de fireshieldsec.com (notre « Site Web »), ainsi que
              des solutions et services Fireshield décrits ou accessibles via
              notre Site Web (nos « Services »).
            </Paragraph>
            <Paragraph>
              Nous n’utilisons pas les informations recueillies auprès des
              utilisateurs lors de leur utilisation de ce site Web pour
              alimenter nos services d’analyse. Nous expliquons également
              certains droits dont vous disposez à l’égard de vos renseignements
              personnels. Notez que cette politique de confidentialité ne régit
              pas l’application mobile Fireshield ou l’extension de navigateur.
            </Paragraph>

            <Title>Guide de Référence Rapide</Title>
            <Paragraph>
              Cette politique de confidentialité vous fournit des informations
              sur :
            </Paragraph>
            <ol>
              <li>Comment nous utilisons les informations personnelles</li>
              <li>Comment nous partageons les informations personnelles</li>
              <li>
                Comment nous protégeons et stockons vos informations
                personnelles
              </li>
              <li>Cookies et services tiers</li>
              <li>Analytique</li>
              <li>
                La base juridique de l’utilisation de vos informations
                personnelles
              </li>
              <li>Transferts d’informations personnelles</li>
              <li>Comment nous contacter</li>
              <li>Renseignements personnels que nous recueillons</li>
              <li>Vos droits</li>
            </ol>

            <Paragraph>
              Pour lire nos conditions d’utilisation, rendez-vous sur
              <LinkComponent href="/termes-conditions">
                {" "}
                Termes &amp; Conditions
              </LinkComponent>
              .
            </Paragraph>

            <Title>Collecte des Informations</Title>
            <Paragraph>
              Nous pouvons collecter des informations personnelles auprès de
              vous si vous choisissez de créer un compte ou d’utiliser notre
              site Web ou nos services. Les informations personnelles que nous
              recueillons comprennent généralement :
            </Paragraph>
            <Paragraph>
              <span className="font-bold">Coordonnées :</span> Nous pouvons
              recueillir votre nom, votre adresse e-mail, votre adresse
              professionnelle ou personnelle, et votre numéro de téléphone
              lorsque vous créez un compte chez nous.
            </Paragraph>
            <Paragraph>
              Comme la plupart des opérateurs de sites Web, nous pouvons aussi
              collecter des informations de connexion : Type de navigateur,
              Langue de préférence, Date et heure de chaque demande du visiteur,
              URL de référence, adresses IP, Système d’exploitation, ID de
              l’appareil et ID publicitaire.
            </Paragraph>
            <Paragraph>
              Ces renseignements sont recueillis à des fins d’analyse sur une
              base anonymisée et ne peuvent pas être utilisés seuls pour
              identifier les visiteurs de notre site Web.
            </Paragraph>

            <Title>Utilisation des Données</Title>
            <Paragraph>
              <span className="font-bold">Informations de communication :</span>{" "}
              Lorsque vous envoyez un e-mail, appelez, utilisez un formulaire ou
              communiquez avec notre équipe, nous pouvons conserver un
              enregistrement de ces échanges.
            </Paragraph>
            <Paragraph>
              <span className="font-bold">Informations financières :</span> Nous
              utilisons des processeurs de paiement tiers lorsque vous achetez
              un abonnement à nos services.
            </Paragraph>

            <Title>Contact</Title>
            <Paragraph>
              Pour toute question, vous pouvez nous contacter à :
              <LinkComponent href="mailto:contact@fireshieldsec.com">
                {" "}
                contact@fireshieldsec.com
              </LinkComponent>
              .
            </Paragraph>
          </div>
        </div>
      </section>
    </>
  );
}
