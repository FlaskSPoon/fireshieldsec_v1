import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Features() {
  return (
    <section className="wcu-tab-area">
      <div
        className="wcu-tab-wrap space"
        data-bg-src=""
        style={{ backgroundImage: "url(/assets/img/bg/wcuBg1_1.png)" }}
      >
        <div className="shape1_1 d-none d-xl-block">
          <Image
            alt="shape"
            src="/assets/img/shape/wcuShape1_1.png"
            width="270"
            height="733"
          />
        </div>
        <div className="shape1_2 d-none d-xl-block">
          <Image
            alt="shape"
            src="/assets/img/shape/wcuShape1_2.png"
            width="248"
            height="321"
          />
        </div>
        <div className="container">
          <div className="wcu-wrap style1">
            <div className="title-area mx-auto">
              <h5 className="subtitle text-center">
                {" "}
                <span className="me-2">
                  <Image
                    alt="icon"
                    src="/assets/img/icon/titleIcon.png"
                    width="28"
                    height="12"
                  />
                </span>{" "}
                POURQUOI NOUS CHOISIR ?{" "}
                <span className="ms-2">
                  <Image
                    alt="icon"
                    src="/assets/img/icon/titleIcon.png"
                    width="28"
                    height="12"
                  />
                </span>{" "}
              </h5>
              <h2 className="title text-center mb-50">
                Une réponse rapide &amp; une analyse prédictive pour une
                cybersécurité sans faille
              </h2>
            </div>
            <div className="row">
              <div className="col-xxl-4 col-xl-4 col-lg-12">
                <div
                  className="wcu-tab-area wow fadeInLeft"
                  data-wow-delay="500ms"
                >
                  <ul
                    className="nav nav-pills mb-3"
                    id="pills-tab"
                    role="tablist"
                  >
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link active"
                        id="real-time-activity-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#real-time-activity"
                        type="button"
                        role="tab"
                        aria-controls="real-time-activity"
                        aria-selected="true"
                      >
                        <Image
                          alt="icon"
                          src="/assets/img/icon/wcuIcon1_1.png"
                          width="50"
                          height="50"
                        />{" "}
                        Couverture Complète
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link"
                        id="easy-integration-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#easy-integration"
                        type="button"
                        role="tab"
                        aria-controls="easy-integration"
                        aria-selected="false"
                      >
                        <Image
                          alt="icon"
                          src="/assets/img/icon/wcuIcon1_2.png"
                          width="50"
                          height="50"
                        />{" "}
                        Réponse Automatique
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link"
                        id="instant-deploy-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#instant-deploy"
                        type="button"
                        role="tab"
                        aria-controls="instant-deploy"
                        aria-selected="false"
                      >
                        <Image
                          alt="icon"
                          src="/assets/img/icon/wcuIcon1_3.png"
                          width="50"
                          height="50"
                        />{" "}
                        Analyse Prédictive{" "}
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link"
                        id="software-services-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#software-services"
                        type="button"
                        role="tab"
                        aria-controls="software-services"
                        aria-selected="false"
                      >
                        <Image
                          alt="icon"
                          src="/assets/img/icon/wcuIcon1_4.png"
                          width="50"
                          height="50"
                        />{" "}
                        Visibilité 360° & Adaptabilité
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xxl-8 col-xl-8 col-lg-12">
                <div className="wcu-tab-details-area">
                  <div className="tab-content" id="pills-tabContent">
                    <div
                      className="tab-pane fade show active"
                      id="real-time-activity"
                      role="tabpanel"
                      aria-labelledby="real-time-activity-tab"
                      tabIndex={0}
                    >
                      <div className="wcu-tab-content">
                        <div className="shape d-none d-xl-block">
                          <Image
                            alt="shape"
                            src="/assets/img/wcu/wcuShape1.png"
                            width="396"
                            height="269"
                          />
                        </div>
                        <div className="wcu-thumb">
                          <Image
                            alt="thunmb"
                            src="/assets/img/wcu/wcuThumb.png"
                            width="268"
                            height="403"
                          />
                        </div>
                        <div className="wcu-content">
                          <div className="title">Couverture Complète</div>
                          <div className="text">
                            Protection avancée sur tous les points de
                            terminaison, le réseau, les serveurs et les
                            applications, avec une vue centralisée des menaces.
                          </div>
                          <div className="checklist">
                            <ul className="ps-0">
                              <li>
                                <Image
                                  alt="icon"
                                  src="/assets/img/icon/signIcon2.png"
                                  width="20"
                                  height="20"
                                />
                              </li>
                              <li>Protection multi-vecteurs</li>
                            </ul>
                            <ul className="ps-0">
                              <li>
                                <Image
                                  alt="icon"
                                  src="/assets/img/icon/signIcon2.png"
                                  width="20"
                                  height="20"
                                />
                              </li>
                              <li>Détection en profondeur</li>
                            </ul>
                            <ul className="ps-0">
                              <li>
                                <Image
                                  alt="icon"
                                  src="/assets/img/icon/signIcon2.png"
                                  width="20"
                                  height="20"
                                />
                              </li>
                              <li>Gestion centralisée</li>
                            </ul>
                          </div>
                          <Link
                            scroll={false}
                            className="gt-btn gt-btn-icon"
                            href={`/contact`}
                          >
                            Découvrir plus
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="easy-integration"
                      role="tabpanel"
                      aria-labelledby="easy-integration-tab"
                      tabIndex={0}
                    >
                      <div className="wcu-tab-content">
                        <div className="shape d-none d-xl-block">
                          <Image
                            alt="shape"
                            src="/assets/img/wcu/wcuShape1.png"
                            width="396"
                            height="269"
                          />
                        </div>
                        <div className="wcu-thumb">
                          <Image
                            alt="thunmb"
                            src="/assets/img/wcu/wcuThumb.png"
                            width="268"
                            height="403"
                          />
                        </div>
                        <div className="wcu-content">
                          <div className="title">Réponse Automatique </div>
                          <div className="text">
                            Grâce à l’IA, les menaces sont détectées en temps
                            réel et des actions correctives sont appliquées
                            automatiquement pour limiter l'impact.
                          </div>
                          <div className="checklist">
                            <ul className="ps-0">
                              <li>
                                <Image
                                  alt="icon"
                                  src="/assets/img/icon/signIcon2.png"
                                  width="20"
                                  height="20"
                                />
                              </li>
                              <li>Intervention instantanée</li>
                            </ul>
                            <ul className="ps-0">
                              <li>
                                <Image
                                  alt="icon"
                                  src="/assets/img/icon/signIcon2.png"
                                  width="20"
                                  height="20"
                                />
                              </li>
                              <li>Réaction autonome</li>
                            </ul>
                            <ul className="ps-0">
                              <li>
                                <Image
                                  alt="icon"
                                  src="/assets/img/icon/signIcon2.png"
                                  width="20"
                                  height="20"
                                />
                              </li>
                              <li>Mises à jour automatiques</li>
                            </ul>
                          </div>
                          <Link
                            scroll={false}
                            className="gt-btn gt-btn-icon"
                            href={`/contact`}
                          >
                            Découvrir plus
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="instant-deploy"
                      role="tabpanel"
                      aria-labelledby="instant-deploy-tab"
                      tabIndex={0}
                    >
                      <div className="wcu-tab-content">
                        <div className="shape d-none d-xl-block">
                          <Image
                            alt="shape"
                            src="/assets/img/wcu/wcuShape1.png"
                            width="396"
                            height="269"
                          />
                        </div>
                        <div className="wcu-thumb">
                          <Image
                            alt="thunmb"
                            src="/assets/img/wcu/wcuThumb.png"
                            width="268"
                            height="403"
                          />
                        </div>
                        <div className="wcu-content">
                          <div className="title">Analyse Prédictive</div>
                          <div className="text">
                            Identifiez les vulnérabilités potentielles avant
                            qu'elles ne deviennent des menaces grâce à l’analyse
                            comportementale et la corrélation des données.
                          </div>
                          <div className="checklist">
                            <ul className="ps-0">
                              <li>
                                <Image
                                  alt="icon"
                                  src="/assets/img/icon/signIcon2.png"
                                  width="20"
                                  height="20"
                                />
                              </li>
                              <li>Identification des vulnérabilités</li>
                            </ul>
                            <ul className="ps-0">
                              <li>
                                <Image
                                  alt="icon"
                                  src="/assets/img/icon/signIcon2.png"
                                  width="20"
                                  height="20"
                                />
                              </li>
                              <li>Corrélation des données</li>
                            </ul>
                            <ul className="ps-0">
                              <li>
                                <Image
                                  alt="icon"
                                  src="/assets/img/icon/signIcon2.png"
                                  width="20"
                                  height="20"
                                />
                              </li>
                              <li>Prévention des incidents</li>
                            </ul>
                          </div>
                          <Link
                            scroll={false}
                            className="gt-btn gt-btn-icon"
                            href={`/contact`}
                          >
                            Découvrir plus
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="software-services"
                      role="tabpanel"
                      aria-labelledby="software-services-tab"
                      tabIndex={0}
                    >
                      <div className="wcu-tab-content">
                        <div className="shape d-none d-xl-block">
                          <Image
                            alt="shape"
                            src="/assets/img/wcu/wcuShape1.png"
                            width="396"
                            height="269"
                          />
                        </div>
                        <div className="wcu-thumb">
                          <Image
                            alt="thunmb"
                            src="/assets/img/wcu/wcuThumb.png"
                            width="268"
                            height="403"
                          />
                        </div>
                        <div className="wcu-content">
                          <div className="title">
                            Visibilité 360° & Adaptabilité
                          </div>
                          <div className="text">
                            Surveillez et gérez en temps réel tous les aspects
                            de votre environnement de sécurité depuis un tableau
                            de bord centralisé.
                          </div>
                          <div className="checklist">
                            <ul className="ps-0">
                              <li>
                                <Image
                                  alt="icon"
                                  src="/assets/img/icon/signIcon2.png"
                                  width="20"
                                  height="20"
                                />
                              </li>
                              <li>Tableau de bord dynamique</li>
                            </ul>
                            <ul className="ps-0">
                              <li>
                                <Image
                                  alt="icon"
                                  src="/assets/img/icon/signIcon2.png"
                                  width="20"
                                  height="20"
                                />
                              </li>
                              <li>Alertes en temps réel</li>
                            </ul>
                            <ul className="ps-0">
                              <li>
                                <Image
                                  alt="icon"
                                  src="/assets/img/icon/signIcon2.png"
                                  width="20"
                                  height="20"
                                />
                              </li>
                              <li>Solutions évolutives </li>
                            </ul>
                          </div>
                          <Link
                            scroll={false}
                            className="gt-btn gt-btn-icon"
                            href={`/contact`}
                          >
                            Découvrir plus
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
